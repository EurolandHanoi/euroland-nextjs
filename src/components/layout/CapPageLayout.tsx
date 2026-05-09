"use client";

import { useEffect, useRef } from "react";
import LangLink from "@/components/LangLink";
import BannerHero from "@/components/layout/BannerHero";
import { PageWrapper } from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import { Check } from "lucide-react";

function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    obs.observe(el);
    return () => obs.disconnect();
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
}: CapPageProps) {
  const { t } = useLanguage();
  const f1 = useFadeUp();
  const f2 = useFadeUp();
  const f3 = useFadeUp();

  return (
    <PageWrapper>
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

      <section className="section" style={{ background: "rgb(255,255,255)" }}>
        <div className="container" style={{ maxWidth: "1536px", padding: "0 48px" }}>
          <div
            ref={f1}
            className="fade-up"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "64px",
              alignItems: "start",
            }}
          >
            <div style={{ padding: "0 48px" }}>
              <div className="u-label" style={{ marginBottom: "16px" }}>
                {howWeHelpLabel}
              </div>

              <h4
                style={{
                  fontSize: "var(--fs-xl)",
                  fontWeight: 500,
                  lineHeight: "var(--lh-xl)",
                  letterSpacing: "0.01em",
                  color: "rgb(13,27,42)",
                  margin: "0 0 32px",
                }}
              >
                {howWeHelpTitle}
              </h4>

              <p
                style={{
                  fontSize: "var(--fs-base)",
                  fontWeight: 400,
                  lineHeight: "var(--lh-base)",
                  letterSpacing: "0.01em",
                  color: "rgb(58,74,88)",
                  maxWidth: "520px",
                  margin: 0,
                }}
              >
                {howWeHelpIntro}
              </p>
            </div>

            <div
              style={{
                background: "#f2f4f6",
                borderRadius: "8px",
                padding: "32px",
              }}
            >
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                {howWeHelpBullets.map((bullet, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                      fontSize: "var(--fs-base)",
                      fontWeight: 400,
                      lineHeight: "var(--lh-base)",
                      letterSpacing: "0.01em",
                      color: "rgb(58,74,88)",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        background: "rgba(0, 116, 217, 0.08)",
                        color: "#0074D9",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    >
                      <Check size={12} strokeWidth={2.25} />
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--slate)" }}>
        <div className="container" style={{ maxWidth: "1536px", padding: "0 48px" }}>
          <div ref={f2} className="fade-up">
            <div className="u-label" style={{ marginBottom: "16px" }}>
              {capabilitiesLabel}
            </div>

            <h3
              style={{
                fontSize: "var(--fs-2xl)",
                fontWeight: 400,
                lineHeight: "var(--lh-2xl)",
                letterSpacing: "0.005em",
                color: "rgb(13,27,42)",
                margin: "0 0 16px",
              }}
            >
              {capabilitiesTitle}
            </h3>

            <p
              style={{
                fontSize: "var(--fs-base)",
                fontWeight: 400,
                lineHeight: "var(--lh-base)",
                letterSpacing: "0.01em",
                color: "rgb(58,74,88)",
                maxWidth: "560px",
                margin: "0 0 48px",
              }}
            >
              {t("cap_capabilities_intro", "A complete set of tools built for your company's stage and needs.")}
            </p>

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
                      fontSize: "var(--fs-sm)",
                      fontWeight: 500,
                      lineHeight: "var(--lh-base)",
                      letterSpacing: "1.44px",
                      textTransform: "uppercase",
                      color: "#0074D9",
                      marginBottom: "16px",
                    }}
                  >
                    {process[i]?.step ?? String(i + 1).padStart(2, "0")}
                  </div>

                  <h5
                    style={{
                      fontSize: "var(--fs-lg)",
                      fontWeight: 500,
                      lineHeight: "var(--lh-lg)",
                      letterSpacing: "0.01em",
                      color: "rgb(13,27,42)",
                      margin: "0 0 16px",
                    }}
                  >
                    {cap.title}
                  </h5>

                  <p
                    style={{
                      fontSize: "var(--fs-sm)",
                      fontWeight: 400,
                      lineHeight: "var(--lh-base)",
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

      <div className="cta-band">
        <div className="container" style={{ maxWidth: "1536px", padding: "0 48px", textAlign: "center" }}>
          <div ref={f3} className="fade-up">
            <div
              className="u-label u-label-dark"
              style={{
                marginBottom: "16px",
                display: "inline-block",
              }}
            >
              {t("common_get_started", "GET STARTED")}
            </div>

            <h3
              style={{
                fontSize: "var(--fs-2xl)",
                fontWeight: 300,
                lineHeight: "var(--lh-2xl)",
                letterSpacing: "0.005em",
                color: "rgb(255,255,255)",
                textAlign: "center",
                margin: "0 auto 32px",
                maxWidth: "600px",
              }}
            >
              {t("home_cta_title", "Ready to elevate your IR Operation?")}
            </h3>

            <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
              <LangLink href="/book-demo" className="btn-primary">
                {t("common_book_demo", "Book a Demo")}
              </LangLink>
              <LangLink href="/platform" className="btn-secondary">
                {t("common_talk_to_us", "Explore our tools")}
              </LangLink>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: "60px", background: "#fff" }} />
    </PageWrapper>
  );
}

