"use client";

// Euroland IR — CapPageLayout (redesigned to match IPO page structure)
// Sections: BannerHero → S2 two-column content+bullets (white) → S3 4-col feature cards (slate) → CTA band

import { useEffect, useRef } from "react";
import LangLink from "@/components/LangLink";
import BannerHero from "@/components/layout/BannerHero";
import { PageWrapper } from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import { Check } from "lucide-react";

function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el); return () => obs.disconnect();
  }, []);
  return ref;
}

export interface CapChallenge {
  icon: string;
  title: string;
  description: string;
}

export interface CapCapability {
  icon: string;
  title: string;
  description: string;
}

export interface CapProcess {
  step: string;
  title: string;
  description: string;
}

export interface CapPageProps {
  breadcrumbLabel: string;
  heroLabel: string;
  heroTitle: string;
  heroSubtitle: string;
  challengesLabel: string;
  challengesTitle: string;
  challenges: CapChallenge[];
  howWeHelpLabel: string;
  howWeHelpTitle: string;
  howWeHelpIntro: string;
  howWeHelpBullets: string[];
  capabilitiesLabel: string;
  capabilitiesTitle: string;
  capabilities: CapCapability[];
  processLabel: string;
  processTitle: string;
  process: CapProcess[];
  testimonialQuote: string;
  testimonialAuthor: string;
  testimonialRole: string;
}

export default function CapPageLayout({
  heroLabel,
  heroTitle,
  heroSubtitle,
  howWeHelpLabel,
  howWeHelpTitle,
  howWeHelpIntro,
  howWeHelpBullets,
  capabilitiesLabel,
  capabilitiesTitle,
  capabilities,
  process,
  testimonialQuote,
  testimonialAuthor,
  testimonialRole,
}: CapPageProps) {
  const { t } = useLanguage();
  const f1 = useFadeUp();
  const f2 = useFadeUp();
  const f3 = useFadeUp();

  return (
    <PageWrapper>

      {/* ── S1: HERO ── */}
      <BannerHero
        variant="solutions"
        label={heroLabel}
        title={heroTitle}
        subtitle={heroSubtitle}
        primaryCtaLabel={t("common_book_demo", "Book a Demo")}
        primaryCtaHref="/book-demo"
        secondaryCtaLabel={t("common_talk_to_us", "Talk to Us")}
        secondaryCtaHref="/contact"
      />

      {/* ── S2: HOW WE HELP — two-column content + testimonial ── */}
      <section className="section" style={{ background: "rgb(255,255,255)" }}>
        <div className="container" style={{ maxWidth: "1536px", padding: "0 48px" }}>
          <div
            ref={f1}
            className="fade-up"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "64px",
              alignItems: "center",
            }}
          >
            {/* Left — eyebrow, heading, intro, bullets, CTA */}
            <div style={{ padding: "0 48px" }}>
              <div
                className="u-label"
                style={{
                  fontSize: "12px",
                  fontWeight: 500,
                  lineHeight: "24px",
                  letterSpacing: "0.96px",
                  textTransform: "uppercase",
                  color: "#327AB1",
                  marginBottom: "16px",
                }}
              >
                {howWeHelpLabel}
              </div>

              <h4
                style={{
                  fontSize: "32px",
                  fontWeight: 500,
                  lineHeight: "40px",
                  letterSpacing: "0.01em",
                  color: "rgb(13,27,42)",
                  margin: "0 0 24px",
                }}
              >
                {howWeHelpTitle}
              </h4>

              <p
                style={{
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  letterSpacing: "0.01em",
                  color: "rgb(58,74,88)",
                  maxWidth: "520px",
                  margin: "0 0 28px",
                }}
              >
                {howWeHelpIntro}
              </p>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {howWeHelpBullets.map((bullet, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: "24px",
                      letterSpacing: "0.01em",
                      color: "rgb(58,74,88)",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        border: "1.5px solid #28628F",
                        color: "#28628F",
                        fontSize: "10px",
                        flexShrink: 0,
                        marginTop: "3px",
                      }}
                    >
                      ✓
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <LangLink href="/book-demo" className="btn-primary">
                {t("common_book_demo", "Book a Demo")}
              </LangLink>
            </div>

            {/* Right — testimonial quote card */}
            <div
              style={{
                background: "#f2f4f6",
                borderRadius: "8px",
                padding: "48px 40px",
                borderLeft: "4px solid #28628F",
              }}
            >
              <blockquote
                style={{
                  fontSize: "20px",
                  fontWeight: 300,
                  lineHeight: "32px",
                  letterSpacing: "-0.01em",
                  color: "rgb(13,27,42)",
                  fontStyle: "italic",
                  margin: "0 0 32px",
                }}
              >
                "{testimonialQuote}"
              </blockquote>
              <div>
                <p
                  style={{
                    fontWeight: 600,
                    color: "rgb(13,27,42)",
                    fontSize: "14px",
                    letterSpacing: "0.01em",
                    margin: "0 0 4px",
                  }}
                >
                  {testimonialAuthor}
                </p>
                <p style={{ color: "#5a6a7a", fontSize: "14px", letterSpacing: "0.01em", margin: 0 }}>
                  {testimonialRole}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── S3: CAPABILITIES — 4-col feature cards (slate bg) ── */}
      <section className="section" style={{ background: "var(--slate)" }}>
        <div className="container" style={{ maxWidth: "1536px", padding: "0 48px" }}>
          <div ref={f2} className="fade-up">
            <div
              className="u-label"
              style={{
                fontSize: "12px",
                fontWeight: 500,
                lineHeight: "24px",
                letterSpacing: "0.96px",
                textTransform: "uppercase",
                color: "#327AB1",
                marginBottom: "16px",
              }}
            >
              {capabilitiesLabel}
            </div>

            <h3
              style={{
                fontSize: "40px",
                fontWeight: 400,
                lineHeight: "48px",
                letterSpacing: "0.005em",
                color: "rgb(13,27,42)",
                margin: "0 0 16px",
              }}
            >
              {capabilitiesTitle}
            </h3>

            <p
              style={{
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "24px",
                letterSpacing: "0.01em",
                color: "rgb(58,74,88)",
                maxWidth: "560px",
                margin: "0 0 48px",
              }}
            >
              {t("cap_capabilities_intro", "A complete set of tools built for your company's stage and needs.")}
            </p>

            {/* 4-col (or 3-col for 6 items) feature-card grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "24px",
              }}
            >
              {capabilities.map((cap, i) => (
                <div key={i} className="feature-card">
                  <div
                    className="num-label"
                    style={{
                      fontSize: "12px",
                      fontWeight: 500,
                      lineHeight: "24px",
                      letterSpacing: "1.44px",
                      textTransform: "uppercase",
                      color: "#327AB1",
                      marginBottom: "16px",
                    }}
                  >
                    {process[i]?.step ?? String(i + 1).padStart(2, "0")}
                  </div>

                  <h5
                    style={{
                      fontSize: "24px",
                      fontWeight: 500,
                      lineHeight: "32px",
                      letterSpacing: "0.01em",
                      color: "rgb(13,27,42)",
                      margin: "0 0 12px",
                    }}
                  >
                    {cap.title}
                  </h5>

                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: 400,
                      lineHeight: "24px",
                      letterSpacing: "0.01em",
                      color: "rgb(58,74,88)",
                      margin: 0,
                    }}
                  >
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── S4: CTA BAND ── */}
      <div className="cta-band">
        <div className="container" style={{ maxWidth: "1536px", padding: "0 48px", textAlign: "center" }}>
          <div ref={f3} className="fade-up">
            <div
              className="u-label u-label-dark"
              style={{
                fontSize: "12px",
                fontWeight: 500,
                lineHeight: "24px",
                letterSpacing: "0.96px",
                textTransform: "uppercase",
                color: "#327AB1",
                marginBottom: "16px",
                display: "inline-block",
              }}
            >
              {t("common_get_started", "GET STARTED")}
            </div>

            <h3
              style={{
                fontSize: "40px",
                fontWeight: 300,
                lineHeight: "48px",
                letterSpacing: "0.005em",
                color: "rgb(255,255,255)",
                textAlign: "center",
                margin: "0 auto 32px",
                maxWidth: "600px",
              }}
            >
              {t("home_cta_title", "Ready to elevate your IR programme?")}
            </h3>

            <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
              <LangLink href="/book-demo" className="btn-primary">
                {t("common_book_demo", "Book a Demo")}
              </LangLink>
              <LangLink href="/contact" className="btn-secondary">
                {t("common_talk_to_us", "Talk to Us")}
              </LangLink>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: "60px", background: "#fff" }} />

    </PageWrapper>
  );
}
