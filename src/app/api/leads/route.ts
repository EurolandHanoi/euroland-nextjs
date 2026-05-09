import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

export const runtime = "nodejs";

const leadSchema = z.object({
  type: z.enum(["demo", "contact", "newsletter"]),
  firstName: z.string().trim().min(1).max(120).optional(),
  lastName: z.string().trim().min(1).max(120).optional(),
  email: z.string().trim().email().max(320),
  company: z.string().trim().max(160).optional(),
  role: z.string().trim().max(160).optional(),
  phone: z.string().trim().max(80).optional(),
  message: z.string().trim().max(4000).optional(),
  interests: z.array(z.string().trim().max(120)).max(12).optional(),
  locale: z.string().trim().max(24).optional(),
  sourcePath: z.string().trim().max(512).optional(),
  website: z.string().trim().max(255).optional(),
});

type LeadPayload = z.infer<typeof leadSchema>;

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const requestLog = new Map<string, number[]>();

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0]?.trim() || "unknown";
  const realIp = request.headers.get("x-real-ip");
  if (realIp) return realIp.trim();
  return "unknown";
}

function isRateLimited(key: string) {
  const now = Date.now();
  const recent = (requestLog.get(key) || []).filter((ts) => now - ts < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  requestLog.set(key, recent);
  return recent.length > RATE_LIMIT_MAX;
}

function normalizeLocale(locale?: string) {
  return (locale || "en").trim().toLowerCase();
}

const DEFAULT_RECIPIENTS = {
  en: [
    "uk_office@euroland.com",
    "Sweden_Office@euroland.com",
    "Dubai_Office@euroland.com",
  ].join(", "),
  es: [
    "Argentina_Office@azureeuroland.onmicrosoft.com",
    "Sweden_Office@euroland.com",
  ].join(", "),
  fr: [
    "uk_office@euroland.com",
    "Sweden_Office@euroland.com",
  ].join(", "),
  pt: [
    "Argentina_Office@azureeuroland.onmicrosoft.com",
    "Sweden_Office@euroland.com",
    "uk_office@euroland.com",
  ].join(", "),
  ja: "japan.office@euroland.com",
  zh: "ShanghaiOffice@euroland.com",
  zhTw: "HongKongOffice@euroland.com",
};

function getRecipientForLocale(locale?: string) {
  const normalized = normalizeLocale(locale);

  if (normalized === "zh") {
    return process.env.LEAD_TO_EMAIL_ZH || DEFAULT_RECIPIENTS.zh;
  }

  if (normalized === "zh-tw" || normalized === "zh_tw") {
    return process.env.LEAD_TO_EMAIL_ZH_TW || DEFAULT_RECIPIENTS.zhTw;
  }

  if (normalized === "ja") {
    return process.env.LEAD_TO_EMAIL_JA || DEFAULT_RECIPIENTS.ja;
  }

  if (normalized === "es" || normalized.startsWith("es-") || normalized.startsWith("es_")) {
    return process.env.LEAD_TO_EMAIL_ES || DEFAULT_RECIPIENTS.es;
  }

  if (normalized === "fr" || normalized.startsWith("fr-") || normalized.startsWith("fr_")) {
    return process.env.LEAD_TO_EMAIL_FR || DEFAULT_RECIPIENTS.fr;
  }

  if (normalized === "pt" || normalized.startsWith("pt-") || normalized.startsWith("pt_")) {
    return process.env.LEAD_TO_EMAIL_PT || DEFAULT_RECIPIENTS.pt;
  }

  if (normalized === "ko" && process.env.LEAD_TO_EMAIL_KO) return process.env.LEAD_TO_EMAIL_KO;
  if (normalized === "ar" && process.env.LEAD_TO_EMAIL_AR) return process.env.LEAD_TO_EMAIL_AR;

  if (normalized.startsWith("en")) {
    return process.env.LEAD_TO_EMAIL_EN || DEFAULT_RECIPIENTS.en;
  }

  return process.env.LEAD_TO_EMAIL || "info@euroland.com";
}

function buildSummary(payload: LeadPayload) {
  return {
    submittedAt: new Date().toISOString(),
    type: payload.type,
    contact: {
      firstName: payload.firstName || "",
      lastName: payload.lastName || "",
      email: payload.email,
      company: payload.company || "",
      role: payload.role || "",
      phone: payload.phone || "",
    },
    details: {
      interests: payload.interests || [],
      message: payload.message || "",
      locale: payload.locale || "",
      sourcePath: payload.sourcePath || "",
    },
  };
}

function getLeadSubject(payload: LeadPayload) {
  switch (payload.type) {
    case "demo":
      return "Book a Demo Request - Euroland IR";
    case "contact":
      return "Contact Form Enquiry - Euroland IR";
    case "newsletter":
      return "Whitepaper / Newsletter Request - Euroland IR";
    default:
      return "Website Lead - Euroland IR";
  }
}

function buildTextBody(payload: LeadPayload) {
  const interests = payload.interests?.length ? payload.interests.join(", ") : "None";

  return [
    `Lead type: ${payload.type}`,
    `Submitted at: ${new Date().toISOString()}`,
    `Locale: ${payload.locale || ""}`,
    `Source path: ${payload.sourcePath || ""}`,
    "",
    `First name: ${payload.firstName || ""}`,
    `Last name: ${payload.lastName || ""}`,
    `Email: ${payload.email}`,
    `Company: ${payload.company || ""}`,
    `Role: ${payload.role || ""}`,
    `Phone: ${payload.phone || ""}`,
    `Interests: ${interests}`,
    "",
    "Message:",
    payload.message || "",
  ].join("\n");
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildHtmlBody(payload: LeadPayload) {
  const rows = [
    ["Lead type", payload.type],
    ["Submitted at", new Date().toISOString()],
    ["Locale", payload.locale || ""],
    ["Source path", payload.sourcePath || ""],
    ["First name", payload.firstName || ""],
    ["Last name", payload.lastName || ""],
    ["Email", payload.email],
    ["Company", payload.company || ""],
    ["Role", payload.role || ""],
    ["Phone", payload.phone || ""],
    ["Interests", payload.interests?.join(", ") || "None"],
  ];

  const tableRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;border:1px solid #dde0e6;font-weight:600;">${escapeHtml(label)}</td><td style="padding:8px 12px;border:1px solid #dde0e6;">${escapeHtml(value)}</td></tr>`
    )
    .join("");

  return `
    <div style="font-family: Arial, sans-serif; color: #22252b;">
      <h2 style="margin-bottom:16px;">${escapeHtml(getLeadSubject(payload))}</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 720px; margin-bottom: 24px;">
        ${tableRows}
      </table>
      <h3 style="margin-bottom:8px;">Message</h3>
      <div style="white-space: pre-wrap; border:1px solid #dde0e6; padding:12px; max-width: 720px;">${escapeHtml(payload.message || "")}</div>
    </div>
  `;
}

function getSmtpConfig() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || "587");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) return null;

  return {
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  };
}

async function sendLeadEmail(payload: LeadPayload) {
  const smtpConfig = getSmtpConfig();
  if (!smtpConfig) {
    throw new Error("Mail transport is not configured.");
  }

  const transporter = nodemailer.createTransport(smtpConfig);
  const to = getRecipientForLocale(payload.locale);
  const from = process.env.SMTP_FROM || process.env.SMTP_USER || "info@euroland.com";

  await transporter.sendMail({
    from,
    to,
    replyTo: payload.email,
    subject: getLeadSubject(payload),
    text: buildTextBody(payload),
    html: buildHtmlBody(payload),
  });
}

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const payload = leadSchema.parse(json);

    if (payload.website) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const rateLimitKey = `${getClientIp(request)}:${payload.type}`;
    if (isRateLimited(rateLimitKey)) {
      return NextResponse.json(
        { ok: false, error: "Too many requests. Please wait a few minutes and try again." },
        { status: 429 }
      );
    }

    const summary = buildSummary(payload);
    const webhookUrl = process.env.LEAD_WEBHOOK_URL;
    const webhookToken = process.env.LEAD_WEBHOOK_TOKEN;

    if (webhookUrl) {
      const upstream = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(webhookToken ? { Authorization: `Bearer ${webhookToken}` } : {}),
        },
        body: JSON.stringify(summary),
        cache: "no-store",
      });

      if (!upstream.ok) {
        const responseText = await upstream.text().catch(() => "");
        console.error("Lead webhook failed", upstream.status, responseText);
      }
    }

    await sendLeadEmail(payload);

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("Lead submission error", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { ok: false, error: "Please check the highlighted fields and try again." },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { ok: false, error: "We could not send your request right now. Please email info@euroland.com." },
      { status: 500 }
    );
  }
}
