"use client";

import { FormEvent, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { CheckCircle2, ShieldCheck, Sparkles, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { PageWrapper } from "@/components/Layout";
import { submitLead } from "@/lib/leadApi";

type Status = "idle" | "submitting" | "success" | "error";

export default function BookDemo() {
  const { lang, t } = useLanguage();
  const pathname = usePathname();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [interests, setInterests] = useState<string[]>([]);

  const features = useMemo(
    () => [
      {
        icon: Sparkles,
        title: t("demo_feature_1_title", "A demo tailored to your IR priorities"),
        desc: t(
          "demo_feature_1_desc",
          "See the workflows most relevant to your team, from earnings reporting and IR websites to AI-assisted investor communication."
        ),
      },
      {
        icon: ShieldCheck,
        title: t("demo_feature_2_title", "Security, governance, and implementation clarity"),
        desc: t(
          "demo_feature_2_desc",
          "Discuss data governance, operational ownership, and what rollout looks like for listed and pre-IPO companies."
        ),
      },
      {
        icon: Users,
        title: t("demo_feature_3_title", "Relevant proof points, not a generic tour"),
        desc: t(
          "demo_feature_3_desc",
          "We will show real platform capabilities, buyer-relevant examples, and the parts of the product that matter for your market and team structure."
        ),
      },
    ],
    [t]
  );

  const options = useMemo(
    () => [
      t("demo_interest_1", "Platform overview"),
      t("demo_interest_2", "Stock and financial data"),
      t("demo_interest_3", "Purpose-built AI"),
      t("demo_interest_4", "Analytics and earnings"),
      t("demo_interest_5", "IR apps"),
      t("demo_interest_6", "ESG and sustainability reporting"),
      t("demo_interest_7", "IPO readiness"),
      t("demo_interest_8", "Investor communications"),
    ],
    [t]
  );

  const toggleInterest = (item: string) => {
    setInterests((previous) => (previous.includes(item) ? previous.filter((entry) => entry !== item) : [...previous, item]));
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      await submitLead({
        type: "demo",
        firstName: String(formData.get("firstName") || ""),
        lastName: String(formData.get("lastName") || ""),
        email: String(formData.get("email") || ""),
        company: String(formData.get("company") || ""),
        role: String(formData.get("role") || ""),
        phone: String(formData.get("phone") || ""),
        message: String(formData.get("message") || ""),
        interests,
        locale: lang,
        sourcePath: pathname ?? undefined,
        website: String(formData.get("website") || ""),
      });
      setStatus("success");
      form.reset();
      setInterests([]);
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : t("demo_form_generic_error", "We could not submit your request right now."));
    }
  }

  return (
    <PageWrapper>
      <section className="hero-navy banner-hero-section" style={{ minHeight: "440px", display: "flex", alignItems: "center" }}>
        <div className="container" style={{ paddingTop: "120px", paddingBottom: "80px" }}>
          <div className="u-label" style={{ marginBottom: "var(--sp-4)" }}>
            {t("book_demo", "Book a Demo")}
          </div>
          <h1 className="type-h2"
            style={{
              fontSize: "48px",
              fontWeight: 300,
              lineHeight: "64px",
              letterSpacing: "-0.01em",
              color: "white",
              marginBottom: "var(--sp-6)",
              maxWidth: "720px",
            }}
          >
            {t("demo_hero_title", "See Euroland IR in action")}
          </h1>
          <p style={{ color: "rgba(255,255,255,0.78)", fontSize: "var(--fs-md)", maxWidth: "640px", marginBottom: "var(--sp-6)" }}>
            {t(
              "demo_hero_subtitle",
              "Schedule a tailored walkthrough with an IR specialist and see how Euroland IR supports disclosure, investor communication, AI-assisted workflows, and listed-company reporting in one managed platform."
            )}
          </p>
          <p className="form-help" style={{ color: "rgba(255,255,255,0.70)", margin: 0 }}>
            {t("demo_hero_helper", "Most requests receive a response within one business day. We only use your details to follow up on your enquiry.")}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--sp-16)", alignItems: "start" }}>
            <div>
              <h2 className="type-h3" style={{ fontSize: "40px", fontWeight: 400, lineHeight: "52px", letterSpacing: "0.005em", color: "var(--text-primary)", marginBottom: "var(--sp-4)" }}>
                {t("demo_section_heading", "A serious demo for serious IR teams")}
              </h2>
              <p style={{ marginBottom: "var(--sp-8)", maxWidth: "560px" }}>
                {t(
                  "demo_section_body",
                  "Tell us what matters most to your team and we will tailor the session around your investor website, reporting workflows, market data requirements, and buyer questions."
                )}
              </p>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "var(--sp-6)", marginBottom: "var(--sp-10)" }}>
                {features.map((feature) => (
                  <li key={feature.title} style={{ display: "flex", gap: "var(--sp-3)", alignItems: "flex-start" }}>
                    <feature.icon size={18} color="#28628F" strokeWidth={2} style={{ flexShrink: 0, marginTop: "2px" }} />
                    <div>
                      <div style={{ fontSize: "var(--fs-sm)", fontWeight: 700, color: "var(--text-primary)", marginBottom: "var(--sp-1)" }}>{feature.title}</div>
                      <div style={{ fontSize: "var(--fs-sm)", color: "var(--text-secondary)" }}>{feature.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
              <div style={{ fontSize: "var(--fs-xs)", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-tertiary)", marginBottom: "var(--sp-4)" }}>
                {t("demo_trusted_label", "Trusted by listed companies worldwide")}
              </div>
              <div style={{ overflow: "hidden", padding: "8px 0", width: "420px", maxWidth: "100%" }}>
                {lang === "ja" ? (
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
                    <img src="/client-logos-ja.webp" alt="Euroland IR clients" style={{ height: "30px", width: "auto", display: "block", maxWidth: "100%" }} />
                  </div>
                ) : (
                  <div style={{ width: "100%", position: "relative", overflow: "hidden" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0px", width: "max-content", animation: "marquee 60s linear infinite" }}>
                      {[1, 2].map((copy) => (
                        <img
                          key={copy}
                          src={lang === "zh" || lang === "zh-TW" ? "/client-logos-zh.webp" : "/client-logos.webp"}
                          alt="Euroland IR clients"
                          style={{ height: "30px", width: "auto", display: "block", flexShrink: 0 }}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="card">
              {status === "success" ? (
                <div style={{ textAlign: "center", padding: "var(--sp-12) 0" }}>
                  <CheckCircle2 size={48} color="#28628F" strokeWidth={1.5} style={{ marginBottom: "var(--sp-6)" }} />
                  <h2 className="type-h5" style={{ fontSize: "24px", fontWeight: 500, lineHeight: "32px", letterSpacing: "0.005em", color: "var(--text-primary)", marginBottom: "var(--sp-4)" }}>
                    {t("demo_form_success_title", "Thank you. Your demo request has been sent.")}
                  </h2>
                  <p style={{ marginBottom: "var(--sp-3)" }}>
                    {t("demo_form_success_body", "A member of the Euroland IR team will follow up within one business day.")}
                  </p>
                  <p className="form-help" style={{ margin: 0 }}>
                    {t("demo_form_success_followup", "We will use the information you provided to tailor the walkthrough to your team.")}
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="type-h5" style={{ fontSize: "24px", fontWeight: 500, lineHeight: "32px", letterSpacing: "0.005em", color: "var(--text-primary)", marginBottom: "var(--sp-2)" }}>
                    {t("demo_form_heading", "Schedule your demo")}
                  </h2>
                  <p style={{ fontSize: "var(--fs-sm)", marginBottom: "var(--sp-8)" }}>
                    {t("demo_form_instructions", "Complete the form and we will follow up within one business day.")} <span style={{ color: "#e53e3e" }}>*</span> {t("demo_form_required", "Required fields.")}
                  </p>
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "var(--sp-5)" }}>
                    <input type="text" name="website" tabIndex={-1} autoComplete="off" style={{ position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none" }} aria-hidden="true" />

                    <div className="grid-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--sp-4)" }}>
                      <div>
                        <label className="form-label" htmlFor="demo-first-name">{t("demo_field_first_name", "First name")} <span style={{ color: "#e53e3e" }}>*</span></label>
                        <input className="form-input" id="demo-first-name" name="firstName" type="text" placeholder="John" required />
                      </div>
                      <div>
                        <label className="form-label" htmlFor="demo-last-name">{t("demo_field_last_name", "Last name")} <span style={{ color: "#e53e3e" }}>*</span></label>
                        <input className="form-input" id="demo-last-name" name="lastName" type="text" placeholder="Smith" required />
                      </div>
                    </div>

                    <div>
                      <label className="form-label" htmlFor="demo-email">{t("demo_field_email", "Work email")} <span style={{ color: "#e53e3e" }}>*</span></label>
                      <input className="form-input" id="demo-email" name="email" type="email" placeholder="name@company.com" required />
                    </div>

                    <div>
                      <label className="form-label" htmlFor="demo-company">{t("demo_field_company", "Company")} <span style={{ color: "#e53e3e" }}>*</span></label>
                      <input className="form-input" id="demo-company" name="company" type="text" placeholder="Example Corporation" required />
                    </div>

                    <div className="grid-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--sp-4)" }}>
                      <div>
                        <label className="form-label" htmlFor="demo-role">{t("demo_field_role", "Your role")} <span style={{ color: "#e53e3e" }}>*</span></label>
                        <input className="form-input" id="demo-role" name="role" type="text" placeholder="Head of IR" required />
                      </div>
                      <div>
                        <label className="form-label" htmlFor="demo-phone">{t("demo_field_phone", "Phone number")}</label>
                        <input className="form-input" id="demo-phone" name="phone" type="tel" placeholder="+1 555 000 0000" />
                      </div>
                    </div>

                    <div>
                      <label className="form-label" style={{ marginBottom: "var(--sp-3)", display: "block" }}>
                        {t("demo_field_interests", "What should we cover?")}
                      </label>
                      <div className="grid-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--sp-2)" }}>
                        {options.map((item) => {
                          const selected = interests.includes(item);
                          return (
                            <label
                              key={item}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "var(--sp-2)",
                                fontSize: "var(--fs-sm)",
                                color: "var(--text-primary)",
                                cursor: "pointer",
                                padding: "var(--sp-2) var(--sp-3)",
                                borderRadius: "6px",
                                border: `1.5px solid ${selected ? "#28628F" : "var(--border)"}`,
                                background: selected ? "rgba(0,107,163,0.06)" : "transparent",
                                transition: "all 0.15s ease",
                              }}
                            >
                              <input type="checkbox" checked={selected} onChange={() => toggleInterest(item)} style={{ accentColor: "#28628F", width: "14px", height: "14px" }} />
                              {item}
                            </label>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <label className="form-label" htmlFor="demo-message">{t("demo_field_message", "Anything specific you would like to cover?")}</label>
                      <textarea
                        className="form-input"
                        id="demo-message"
                        name="message"
                        rows={4}
                        placeholder={t("demo_field_message_placeholder", "For example: we are reviewing our IR website, earnings workflow, and AI options.")}
                        style={{ resize: "vertical", minHeight: "96px" }}
                      />
                    </div>

                    {status === "error" && (
                      <p className="form-status-error" role="alert">
                        {errorMessage}
                      </p>
                    )}

                    <p className="form-help" style={{ margin: 0 }}>
                      {t(
                        "demo_form_privacy_note",
                        "By submitting this form, you agree that Euroland IR may contact you about your enquiry. We do not use this form for unrelated marketing."
                      )}
                    </p>

                    <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center" }} disabled={status === "submitting"}>
                      {status === "submitting" ? t("demo_submit_loading", "Sending request...") : t("demo_submit_button", "Book Demo")}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
