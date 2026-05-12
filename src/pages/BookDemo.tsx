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

  const features = useMemo(
    () => [
      {
        icon: Sparkles,
        title: t("demo_feature_1_title", "Core features walkthrough"),
        desc: t(
          "demo_feature_1_desc",
          "Walk through core features for disclosure, IR platforms, and investor communication."
        ),
      },
      {
        icon: ShieldCheck,
        title: t("demo_feature_2_title", "Security & governance"),
        desc: t(
          "demo_feature_2_desc",
          "Discuss security, governance, and workflow requirements for listed and pre-IPO companies."
        ),
      },
      {
        icon: Users,
        title: t("demo_feature_3_title", "Best-practice examples"),
        desc: t(
          "demo_feature_3_desc",
          "Receive best-practice examples from peers in your market and industry."
        ),
      },
    ],
    [t]
  );

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
        interests: [],
        locale: lang,
        sourcePath: pathname ?? undefined,
        website: String(formData.get("website") || ""),
      });
      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : t("demo_form_generic_error", "We could not submit your request right now."));
    }
  }

  return (
    <PageWrapper>
      <section
        className="hero-navy banner-hero-section"
        style={{
          height: "500px",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <img
          src="/banner-contact-demo.jpg"
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            zIndex: 0,
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(8, 43, 69, 0.78)",
            zIndex: 1,
          }}
        />
        <div className="container" style={{ paddingTop: "96px", paddingBottom: "96px", position: "relative", zIndex: 2 }}>
          <div className="u-label u-label-dark" style={{ marginBottom: "var(--sp-4)" }}>
            {t("book_demo", "Book a Demo")}
          </div>
          <h1 className="type-h2 book-demo-hero-title"
            style={{
              fontSize: "var(--fs-3xl)",
              fontWeight: 600,
              lineHeight: "var(--lh-3xl)",
              letterSpacing: "-0.01em",
              color: "white",
              marginBottom: "var(--sp-6)",
              maxWidth: "720px",
            }}
          >
            {t("demo_hero_title", "Book a demo")}
          </h1>
          <p className="book-demo-hero-subtitle" style={{ color: "rgba(255,255,255,0.78)", fontSize: "var(--fs-md)", maxWidth: "640px", marginBottom: "var(--sp-6)" }}>
            {t(
              "demo_hero_subtitle",
              "Schedule a personalised demo with one of our Investor Relations specialists and discover how Euroland IR can transform your IR communications, ESG reporting, and shareholder engagement."
            )}
          </p>
        </div>
        <style>{`
          .book-demo-main-grid > *,
          .book-demo-form-grid > * {
            min-width: 0;
          }
          .book-demo-main-grid p,
          .book-demo-main-grid span,
          .book-demo-main-grid a,
          .book-demo-main-grid div {
            overflow-wrap: anywhere;
          }
          @media (max-width: 767px) {
            .book-demo-hero-title {
              font-size: var(--fs-lg) !important;
              line-height: var(--lh-lg) !important;
              max-width: min(100%, 12ch) !important;
              width: 100% !important;
              display: block !important;
              overflow-wrap: anywhere;
            }
            .book-demo-hero-subtitle {
              font-size: var(--fs-base) !important;
              line-height: var(--lh-base) !important;
              max-width: min(100%, 34ch) !important;
              width: 100% !important;
              display: block !important;
              overflow-wrap: anywhere;
            }
            .book-demo-main-grid,
            .book-demo-form-grid {
              grid-template-columns: 1fr !important;
              gap: 24px !important;
            }
          }
          @media (max-width: 390px) {
            .book-demo-hero-title {
              max-width: min(100%, 10ch) !important;
            }
            .book-demo-hero-subtitle,
            .book-demo-main-grid p,
            .book-demo-main-grid div {
              max-width: 28ch !important;
            }
            .book-demo-main-grid .card,
            .book-demo-main-grid .card p,
            .book-demo-main-grid .card div,
            .book-demo-main-grid .card label {
              max-width: 100% !important;
            }
          }
        `}</style>
      </section>

      <section className="section">
        <div className="container">
          <div className="book-demo-main-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--sp-16)", alignItems: "start" }}>
            <div>
              <h2 className="type-h3" style={{ color: "var(--text-primary)", marginBottom: "var(--sp-4)" }}>
                {t("demo_section_heading", "See the platform in action")}
              </h2>
              <p style={{ marginBottom: "var(--sp-8)", maxWidth: "560px" }}>
                {t(
                  "demo_section_body",
                  "Share a few details about your team and we will tailor the session to your IR, finance, and corporate communications needs."
                )}
              </p>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "var(--sp-6)", marginBottom: "var(--sp-10)" }}>
                {features.map((feature) => (
                  <li key={feature.title} style={{ display: "flex", gap: "var(--sp-3)", alignItems: "flex-start" }}>
                    <feature.icon size={18} color="#28628F" strokeWidth={2} style={{ flexShrink: 0, marginTop: "4px" }} />
                    <div style={{ minWidth: 0, flex: "1 1 0" }}>
                      <div style={{ fontSize: "var(--fs-sm)", fontWeight: 700, color: "var(--text-primary)", marginBottom: "var(--sp-1)" }}>{feature.title}</div>
                      <div style={{ fontSize: "var(--fs-base)", lineHeight: "var(--lh-base)", color: "var(--text-secondary)" }}>{feature.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
              {lang !== "ja" && (
                <>
                  <div style={{ fontSize: "var(--fs-sm)", fontWeight: 400, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--button-blue)", marginBottom: "var(--sp-4)" }}>
                    {t("demo_trusted_label", "Trusted by listed companies worldwide")}
                  </div>
                  <div style={{ overflow: "hidden", padding: "8px 0", width: "100%", maxWidth: "420px" }}>
                  <div style={{ width: "100%", position: "relative", overflow: "hidden" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0px", width: "max-content", animation: "marquee 200s linear infinite" }}>
                      {[1, 2].map((copy) => (
                        <img
                          key={copy}
                          src={lang === "zh" || lang === "zh-TW" ? "/client-logos-zh.svg" : lang === "ar" ? "/client-logos-ar.svg" : "/client-logos.svg"}
                          alt="Euroland IR clients"
                          style={{ height: "32px", width: "auto", display: "block", flexShrink: 0 }}
                        />
                      ))}
                    </div>
                  </div>
                  </div>
                </>
              )}
            </div>

            <div className="card">
              {status === "success" ? (
                <div style={{ textAlign: "center", padding: "var(--sp-12) 0" }}>
                  <CheckCircle2 size={48} color="#28628F" strokeWidth={1.5} style={{ marginBottom: "var(--sp-6)" }} />
                  <h2 className="type-h4" style={{ color: "var(--text-primary)", marginBottom: "var(--sp-4)" }}>
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
                  <h2 className="type-h4" style={{ color: "var(--text-primary)", marginBottom: "var(--sp-2)" }}>
                    {t("demo_form_heading", "Schedule your demo")}
                  </h2>
                  <p style={{ fontSize: "var(--fs-base)", lineHeight: "var(--lh-base)", marginBottom: "var(--sp-8)" }}>
                    <span style={{ color: "#e53e3e" }}>*</span> {t("demo_form_required", "are required.")}
                  </p>
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "var(--sp-5)" }}>
                    <input type="text" name="website" tabIndex={-1} autoComplete="off" style={{ position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none" }} aria-hidden="true" />

                    <div className="book-demo-form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--sp-4)" }}>
                      <div>
                        <label className="form-label" htmlFor="demo-first-name">{t("demo_field_first_name", "First name")} <span style={{ color: "#e53e3e" }}>*</span></label>
                        <input className="form-input" id="demo-first-name" name="firstName" type="text" placeholder={t("demo_field_first_name_placeholder", "John")} required />
                      </div>
                      <div>
                        <label className="form-label" htmlFor="demo-last-name">{t("demo_field_last_name", "Last name")} <span style={{ color: "#e53e3e" }}>*</span></label>
                        <input className="form-input" id="demo-last-name" name="lastName" type="text" placeholder={t("demo_field_last_name_placeholder", "Smith")} required />
                      </div>
                    </div>

                    <div>
                      <label className="form-label" htmlFor="demo-email">{t("demo_field_email", "Work email")} <span style={{ color: "#e53e3e" }}>*</span></label>
                      <input className="form-input" id="demo-email" name="email" type="email" placeholder={t("demo_field_email_placeholder", "name@company.com")} required />
                    </div>

                    <div>
                      <label className="form-label" htmlFor="demo-company">{t("demo_field_company", "Company")} <span style={{ color: "#e53e3e" }}>*</span></label>
                      <input className="form-input" id="demo-company" name="company" type="text" placeholder={t("demo_field_company_placeholder", "Example Corporation")} required />
                    </div>

                    <div className="book-demo-form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--sp-4)" }}>
                      <div>
                        <label className="form-label" htmlFor="demo-role">{t("demo_field_role", "Your role")} <span style={{ color: "#e53e3e" }}>*</span></label>
                        <input className="form-input" id="demo-role" name="role" type="text" placeholder={t("demo_field_role_placeholder", "Head of IR")} required />
                      </div>
                      <div>
                        <label className="form-label" htmlFor="demo-phone">{t("demo_field_phone", "Phone number")}</label>
                        <input className="form-input" id="demo-phone" name="phone" type="tel" placeholder={t("demo_field_phone_placeholder", "+1 555 000 0000")} />
                      </div>
                    </div>

                    <div>
                      <label className="form-label" htmlFor="demo-message">{t("demo_field_message", "Anything specific you would like to cover?")}</label>
                      <textarea
                        className="form-input"
                        id="demo-message"
                        name="message"
                        rows={4}
                        style={{ resize: "vertical", minHeight: "96px" }}
                      />
                    </div>

                    {status === "error" && (
                      <p className="form-status-error" role="alert">
                        {errorMessage}
                      </p>
                    )}

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

