import { NextResponse } from "next/server";
import { z } from "zod";

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

function buildSummary(payload: z.infer<typeof leadSchema>) {
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

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const payload = leadSchema.parse(json);

    if (payload.website) {
      return NextResponse.json({ ok: true }, { status: 200 });
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
        return NextResponse.json(
          { ok: false, error: "We could not send your request right now. Please email info@euroland.com." },
          { status: 502 }
        );
      }
    } else {
      console.info("Lead captured without LEAD_WEBHOOK_URL", summary);
    }

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
      { ok: false, error: "We could not submit your request. Please try again shortly." },
      { status: 500 }
    );
  }
}
