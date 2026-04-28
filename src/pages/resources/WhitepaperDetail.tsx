"use client";

import { FormEvent, useState } from "react";
import { usePathname } from "next/navigation";
import LangLink from "@/components/LangLink";
import { PageWrapper } from "@/components/Layout";
import { Download, Calendar, FileText, ChevronRight } from "lucide-react";
import EnglishOnlyGuard from "@/components/EnglishOnlyGuard";
import { useLanguage } from "@/contexts/LanguageContext";
import { submitLead } from "@/lib/leadApi";

type Status = "idle" | "submitting" | "success" | "error";

const WHITEPAPER = {
  breadcrumb: [
    { label: "Whitepapers", href: "/resources/whitepapers" },
    { label: "IR Strategy" },
  ],
  category: "IR Strategy",
  title: "Best Practice IR in the Digital Age",
  description:
    "A practical guide to the structure, governance, and content choices that help listed companies build more credible, investor-friendly digital IR experiences.",
  date: "February 2026",
  pages: "32 pages",
  abstract: [
    "This whitepaper outlines the operational and design decisions that separate effective investor-relations platforms from generic corporate websites. It focuses on the needs of listed companies balancing disclosure, governance, investor usability, and internal efficiency.",
    "It covers how public-company teams can improve discoverability, make market data easier to understand, reduce manual publishing effort, and support trust with institutional investors and analysts.",
  ],
  keyInsights: [
    "How to structure an IR platform around investor tasks rather than internal organisation charts.",
    "Which trust signals matter most when public companies present financial, governance, and ESG information online.",
    "Why market data, documents, events, and investor communications work better inside one governed platform.",
    "What makes multilingual IR delivery feel credible rather than partially translated.",
    "Where accessibility, usability, and content governance directly affect investor perception.",
    "How managed delivery can reduce operational burden for lean IR teams.",
  ],
  audience: "IR Directors, Heads of Investor Relations, CFOs, Company Secretaries, and Communications leaders",
  topics: ["IR Strategy", "Digital IR", "Investor Engagement", "IR Platform", "Content Governance"],
  downloadLabel: "Request the full whitepaper and we will email the PDF to your work address.",
};

function DownloadCard({ dark = false, id }: { dark?: boolean; id?: string }) {
  const { lang } = useLanguage();
  const pathname = usePathname();
  const [status, setStatus] = useState<Status>("idle");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      await submitLead({
        type: "newsletter",
        email: String(formData.get("email") || ""),
        company: String(formData.get("company") || ""),
        locale: lang,
        sourcePath: pathname ?? undefined,
        message: `Whitepaper request: ${WHITEPAPER.title}`,
        website: String(formData.get("website") || ""),
      });
      setStatus("success");
      setEmail("");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "We could not send your request right now.");
    }
  }

  return (
    <div
      id={id}
      style={{
        background: dark ? "rgba(0,0,0,0.25)" : "rgb(255,255,255)",
        border: dark ? "1px solid rgba(255,255,255,0.15)" : "1px solid rgb(221,224,230)",
        borderRadius: "8px",
        padding: "28px",
      }}
    >
      <div style={{ fontSize: "10px", fontWeight: 700, lineHeight: "24px", letterSpacing: "0.12em", textTransform: "uppercase", color: dark ? "#8ddcff" : "rgb(0, 107, 163)", marginBottom: "12px" }}>
        Request PDF
      </div>
      <p style={{ fontSize: "13px", fontWeight: 400, lineHeight: "20px", color: dark ? "rgba(255,255,255,0.72)" : "rgb(58,74,88)", margin: "0 0 16px" }}>
        {WHITEPAPER.downloadLabel}
      </p>

      {status === "success" ? (
        <p className="form-status-success" style={dark ? { background: "rgba(255,255,255,0.08)", color: "#ffffff", borderColor: "rgba(255,255,255,0.16)" } : undefined}>
          Thanks. We have received your request and will follow up with the whitepaper.
        </p>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <input type="text" name="website" tabIndex={-1} autoComplete="off" style={{ position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none" }} aria-hidden="true" />
          <input
            type="email"
            name="email"
            placeholder="Work email address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px 14px",
              fontSize: "13px",
              lineHeight: "20px",
              border: dark ? "1px solid rgba(255,255,255,0.25)" : "1px solid rgb(221,224,230)",
              borderRadius: "4px",
              background: dark ? "rgba(255,255,255,0.08)" : "rgb(255,255,255)",
              color: dark ? "rgb(255,255,255)" : "rgb(13,27,42)",
              outline: "none",
            }}
          />
          <input
            type="text"
            name="company"
            placeholder="Company"
            style={{
              width: "100%",
              padding: "10px 14px",
              fontSize: "13px",
              lineHeight: "20px",
              border: dark ? "1px solid rgba(255,255,255,0.25)" : "1px solid rgb(221,224,230)",
              borderRadius: "4px",
              background: dark ? "rgba(255,255,255,0.08)" : "rgb(255,255,255)",
              color: dark ? "rgb(255,255,255)" : "rgb(13,27,42)",
              outline: "none",
            }}
          />
          {status === "error" && <p className="form-status-error">{errorMessage}</p>}
          <button type="submit" className="btn-primary" style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }} disabled={status === "submitting"}>
            <Download size={14} />
            {status === "submitting" ? "Sending request..." : "Request PDF"}
          </button>
        </form>
      )}
    </div>
  );
}

function WhitepaperDetailInner() {
  return (
    <PageWrapper>
      <section className="hero-navy banner-hero-section" style={{ minHeight: "440px" }}>
        <div className="container" style={{ maxWidth: "1536px", padding: "120px 48px 80px" }}>
          <div style={{ marginBottom: "24px", display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center", color: "rgba(255,255,255,0.72)", fontSize: "13px" }}>
            {WHITEPAPER.breadcrumb.map((crumb, index) => (
              <span key={crumb.label} style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                {crumb.href ? <LangLink href={crumb.href} style={{ color: "rgba(255,255,255,0.82)", textDecoration: "none" }}>{crumb.label}</LangLink> : <span>{crumb.label}</span>}
                {index < WHITEPAPER.breadcrumb.length - 1 && <ChevronRight size={14} />}
              </span>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "64px", alignItems: "start" }}>
            <div>
              <div className="u-label u-label-dark" style={{ marginBottom: "16px" }}>{WHITEPAPER.category}</div>
              <h1 className="type-h3" style={{ fontSize: "40px", fontWeight: 300, lineHeight: "48px", letterSpacing: "-0.01em", color: "rgb(255,255,255)", margin: "0 0 24px", maxWidth: "720px" }}>
                {WHITEPAPER.title}
              </h1>
              <p style={{ fontSize: "16px", fontWeight: 400, lineHeight: "24px", color: "rgba(255,255,255,0.78)", margin: "0 0 32px", maxWidth: "640px" }}>
                {WHITEPAPER.description}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "rgba(255,255,255,0.72)", fontSize: "13px" }}><Calendar size={14} /> {WHITEPAPER.date}</span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "rgba(255,255,255,0.72)", fontSize: "13px" }}><FileText size={14} /> {WHITEPAPER.pages}</span>
              </div>
            </div>
            <DownloadCard dark id="request-pdf" />
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "rgb(255,255,255)" }}>
        <div className="container" style={{ maxWidth: "1536px", padding: "0 48px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "64px", alignItems: "start" }}>
            <div>
              <div style={{ marginBottom: "56px" }}>
                <div className="u-label" style={{ marginBottom: "16px" }}>Abstract</div>
                <h2 className="type-h4" style={{ fontSize: "32px", lineHeight: "40px", fontWeight: 400, color: "var(--text-primary)", marginBottom: "20px" }}>What this whitepaper covers</h2>
                <div style={{ display: "grid", gap: "16px", maxWidth: "760px" }}>
                  {WHITEPAPER.abstract.map((paragraph) => (
                    <p key={paragraph} style={{ margin: 0 }}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div>
                <div className="u-label" style={{ marginBottom: "16px" }}>Key insights</div>
                <h2 className="type-h4" style={{ fontSize: "32px", lineHeight: "40px", fontWeight: 400, color: "var(--text-primary)", marginBottom: "20px" }}>What you will learn</h2>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "16px", maxWidth: "780px" }}>
                  {WHITEPAPER.keyInsights.map((item) => (
                    <li key={item} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                      <span style={{ width: "22px", height: "22px", borderRadius: "999px", background: "rgba(0,107,163,0.10)", color: "rgb(0,107,163)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 700, flexShrink: 0, marginTop: "2px" }}>+</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside style={{ position: "sticky", top: "96px", display: "grid", gap: "20px" }}>
              <div className="card">
                <div className="u-label" style={{ marginBottom: "12px" }}>Audience</div>
                <p style={{ margin: 0 }}>{WHITEPAPER.audience}</p>
              </div>
              <div className="card">
                <div className="u-label" style={{ marginBottom: "12px" }}>Topics</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {WHITEPAPER.topics.map((topic) => (
                    <span key={topic} style={{ padding: "4px 12px", borderRadius: "4px", fontSize: "12px", fontWeight: 500, lineHeight: "24px", border: "1px solid rgb(0,107,163)", color: "rgb(0,107,163)", background: "rgb(255,255,255)" }}>
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
              <DownloadCard />
            </aside>
          </div>
        </div>
      </section>

      <div className="cta-band">
        <div className="container" style={{ maxWidth: "1536px", padding: "0 48px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "48px", alignItems: "center" }}>
            <div>
              <div className="u-label u-label-dark" style={{ marginBottom: "16px" }}>See it in action</div>
              <h2 className="type-h3" style={{ fontSize: "40px", fontWeight: 300, lineHeight: "48px", color: "rgb(255,255,255)", margin: "0 0 16px" }}>Ready to put these insights into practice?</h2>
              <p style={{ fontSize: "16px", fontWeight: 400, lineHeight: "24px", color: "rgba(255,255,255,0.70)", margin: 0 }}>
                Book a personalised demo and see how Euroland IR can help your team implement a stronger, more credible digital IR experience.
              </p>
            </div>
            <div style={{ display: "flex", gap: "16px", alignItems: "center", flexShrink: 0 }}>
              <LangLink href="/book-demo" className="btn-primary">Book a Demo</LangLink>
              <LangLink href="/resources/whitepapers" className="btn-secondary">More whitepapers</LangLink>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

export default function WhitepaperDetail() {
  return (
    <EnglishOnlyGuard>
      <WhitepaperDetailInner />
    </EnglishOnlyGuard>
  );
}
