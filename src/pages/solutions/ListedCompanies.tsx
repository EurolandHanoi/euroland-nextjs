"use client";

/**
 * For Listed Companies - Solutions Sub-Page
 */

import { useEffect, useRef, useState } from "react";
import LangLink from "@/components/LangLink";
import { PageWrapper } from "@/components/Layout";
import BannerHero from "@/components/layout/BannerHero";
import { useLanguage } from "@/contexts/LanguageContext";

function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window !== "undefined" && window.innerWidth <= 767) {
      el.style.opacity = "1";
      el.style.transform = "none";
      el.style.transition = "none";
      return;
    }
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          obs.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

export default function ListedCompanies() {
  const { t } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);
  const howWeThinkRef = useFadeIn();
  const cardsRef = useFadeIn();
  const ctaRef = useFadeIn();

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth <= 767);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const COMPANY_CARDS = [
    {
      title: t("lc_card_2_title", "Small Cap Companies"),
      challenge: t("lc_card_2_challenge", "Lean team managing disclosures, investor queries, and communications with limited time and resources."),
      outcome: t("lc_card_2_outcome", "A professional IR presence that's fast to set up, easy to manage, and scales with you."),
      link: "/solutions/listed-companies/small-cap",
      linkLabel: t("lc_card_2_link", "See the Small Cap Companies page"),
    },
    {
      title: t("lc_card_3_title", "Mid-Cap Companies"),
      challenge: t("lc_card_3_challenge", "More stakeholders, growing governance expectations, and increasing coordination complexity."),
      outcome: t("lc_card_3_outcome", "Structured workflows and centralised tools that professionalise your IR operation."),
      link: "/solutions/listed-companies/mid-cap",
      linkLabel: t("lc_card_3_link", "See the Mid-Cap Companies page"),
    },
    {
      title: t("lc_card_4_title", "Large-Cap Companies"),
      challenge: t("lc_card_4_challenge", "High communication volume, complex approval flows, and stricter compliance requirements."),
      outcome: t("lc_card_4_outcome", "Enterprise-grade infrastructure with the governance controls and reliability you need."),
      link: "/solutions/listed-companies/large-cap",
      linkLabel: t("lc_card_4_link", "See the Large-Cap Companies page"),
    },
  ];

  return (
    <PageWrapper>
      <style>{`
        @media (max-width: 767px) {
          .listed-shell {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          .listed-copy h3,
          .listed-cta-title {
            font-size: var(--fs-xl) !important;
            line-height: var(--lh-xl) !important;
            max-width: 100% !important;
          }
          .listed-copy p {
            font-size: var(--fs-base) !important;
            line-height: var(--lh-base) !important;
          }
          .listed-cta-actions {
            flex-direction: column;
            align-items: stretch !important;
          }
          .listed-cta-actions > * {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
      <BannerHero
        variant="solutions"
        label={t("lc_hero_label", "For Listed Companies")}
        title={t("lc_hero_title", "IR Solutions for every listed company")}
        backgroundImage="/listed-companies-banner.png"
        subtitle={t("lc_hero_subtitle", "Euroland IR gives listed companies the Investor Relations software, workflows, and managed services to communicate with shareholders professionally - regardless of team size, market cap, or regulatory complexity.")}
        primaryCtaLabel={t("book_demo", "Book a Demo")}
        primaryCtaHref="/book-demo"
        secondaryCtaLabel={t("common_talk_to_us", "Talk to Us")}
        secondaryCtaHref="/contact"
      />

      <section style={{ width: "100%", paddingTop: "64px", paddingBottom: "64px", backgroundColor: "#ffffff" }}>
        <div ref={howWeThinkRef} className="listed-shell" style={{ maxWidth: "1536px", width: "100%", margin: "0 auto", paddingLeft: isMobile ? "20px" : "48px", paddingRight: isMobile ? "20px" : "48px", boxSizing: "border-box" }}>
          <div className="listed-copy" style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center" }}>
            <div style={{ marginBottom: "16px" }}>
              <div style={{ display: "inline-block" }}>
                <span style={{ fontSize: "var(--fs-sm)", fontWeight: 400, lineHeight: "var(--lh-base)", letterSpacing: "0.96px", textTransform: "uppercase", color: "var(--label-blue-light)", display: "block", marginBottom: "16px" }}>
                  {t("lc_how_label", "How We Think About It")}
                </span>
                <div style={{ width: "25%", height: "2px", background: "var(--label-blue-light)" }} />
              </div>
            </div>
            <h3 style={{ fontSize: isMobile ? "var(--fs-xl)" : "var(--fs-2xl)", fontWeight: 400, lineHeight: isMobile ? "var(--lh-xl)" : "var(--lh-2xl)", letterSpacing: "0.005em", color: "rgb(13, 27, 42)", margin: "0 0 32px" }}>
              {t("lc_how_heading", "One platform, shaped to where you are")}
            </h3>
            <p style={{ fontSize: "var(--fs-md)", fontWeight: 400, lineHeight: "var(--lh-lg)", letterSpacing: "0.01em", color: "rgb(58, 74, 88)", margin: 0 }}>
              {t("lc_how_body", "IR needs differ significantly depending on company size, team structure, and market complexity. Rather than a one-size-fits-all approach, Euroland IR is designed to meet companies where they are - with the right depth of capability, workflow support, and service model for each stage of growth.")}
            </p>
          </div>
        </div>
      </section>

      <section style={{ width: "100%", paddingTop: "64px", paddingBottom: "64px", backgroundColor: "rgb(245, 245, 245)" }}>
        <div ref={cardsRef} className="listed-shell" style={{ maxWidth: "1536px", width: "100%", margin: "0 auto", paddingLeft: isMobile ? "20px" : "48px", paddingRight: isMobile ? "20px" : "48px", boxSizing: "border-box" }}>
          <div className="listed-copy" style={{ width: "1440px", maxWidth: "100%", marginBottom: "32px", textAlign: "center" }}>
            <div style={{ marginBottom: "16px" }}>
              <div style={{ display: "inline-block" }}>
                <span style={{ fontSize: "var(--fs-sm)", fontWeight: 400, lineHeight: "var(--lh-base)", letterSpacing: "0.96px", textTransform: "uppercase", color: "var(--label-blue-light)", display: "block", marginBottom: "16px" }}>
                  {t("lc_cards_label", "Choose Your Company Profile")}
                </span>
                <div style={{ width: "25%", height: "2px", background: "var(--label-blue-light)" }} />
              </div>
            </div>
            <h3 style={{ fontSize: isMobile ? "var(--fs-xl)" : "var(--fs-2xl)", fontWeight: 400, lineHeight: isMobile ? "var(--lh-xl)" : "var(--lh-2xl)", letterSpacing: "0.005em", color: "rgb(13, 27, 42)", maxWidth: "480px", margin: "0 auto" }}>
              {t("lc_cards_heading", "Find the right fit for your company")}
            </h3>
          </div>

          <div className="listed-cards-grid" style={{ gridTemplateColumns: isMobile ? "1fr" : "repeat(3, minmax(0, 1fr))" }}>
            {COMPANY_CARDS.map((card, i) => (
              <LangLink
                key={i}
                className="listed-company-card"
                href={card.link}
                style={{
                  padding: "36px",
                  backgroundColor: "rgb(255, 255, 255)",
                  border: "1px solid rgb(221, 224, 230)",
                  borderRadius: "12px",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  minHeight: "352px",
                  textDecoration: "none",
                  transition: "border-color 180ms ease",
                  boxShadow: "0 6px 16px rgba(8, 43, 69, 0.03)",
                }}
              >
                <h5
                  style={{
                    fontSize: "var(--fs-lg)",
                    fontWeight: 600,
                    lineHeight: "var(--lh-lg)",
                    letterSpacing: "0.01em",
                    color: "rgb(13, 27, 42)",
                    margin: 0,
                    flexShrink: 0,
                  }}
                >
                  {card.title}
                </h5>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", flexShrink: 0, marginTop: "16px" }}>
                  <span style={{ fontSize: "var(--fs-sm)", fontWeight: 600, lineHeight: "var(--lh-base)", letterSpacing: "0.08em", textTransform: "uppercase", color: "#0074D9" }}>
                    {t("challenge_label", "Challenge")}
                  </span>
                  <p style={{ fontSize: "var(--fs-base)", fontWeight: 400, lineHeight: "var(--lh-base)", letterSpacing: "0.01em", color: "rgb(58, 74, 88)", margin: 0 }}>
                    {card.challenge}
                  </p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
                  <span style={{ fontSize: "var(--fs-sm)", fontWeight: 600, lineHeight: "var(--lh-base)", letterSpacing: "0.08em", textTransform: "uppercase", color: "#0074D9" }}>
                    {t("outcome_label", "Outcome")}
                  </span>
                  <p style={{ fontSize: "var(--fs-base)", fontWeight: 400, lineHeight: "var(--lh-base)", letterSpacing: "0.01em", color: "rgb(58, 74, 88)", margin: 0 }}>
                    {card.outcome}
                  </p>
                </div>
                <div style={{ flexShrink: 0, paddingTop: "16px", borderTop: "1px solid rgba(8, 43, 69, 0.08)" }}>
                  <span style={{ fontSize: "var(--fs-sm)", fontWeight: 600, lineHeight: "var(--lh-md)", letterSpacing: "0.01em", color: "#0074D9", display: "inline-flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                    {card.linkLabel}
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" style={{ flexShrink: 0 }}>
                      <path d="M2.5 6.5H10.5M10.5 6.5L7 3M10.5 6.5L7 10" stroke="#0074D9" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </LangLink>
            ))}
          </div>
        </div>
      </section>

      <section style={{ width: "100%", paddingTop: "64px", paddingBottom: "64px", backgroundImage: "linear-gradient(135deg, rgb(14, 45, 74), rgb(8, 43, 69))" }}>
        <div ref={ctaRef} className="listed-shell" style={{ maxWidth: "1536px", width: "100%", margin: "0 auto", paddingLeft: isMobile ? "20px" : "48px", paddingRight: isMobile ? "20px" : "48px", boxSizing: "border-box", textAlign: "center" }}>
          <div style={{ marginBottom: "16px" }}>
            <div style={{ display: "inline-block" }}>
              <span style={{ fontSize: "var(--fs-sm)", fontWeight: 400, lineHeight: "var(--lh-base)", letterSpacing: "0.96px", textTransform: "uppercase", color: "var(--label-blue-dark)", display: "block", marginBottom: "16px" }}>
                {t("get_started", "Get Started")}
              </span>
              <div style={{ width: "25%", height: "2px", background: "var(--label-blue-dark)" }} />
            </div>
          </div>
          <h3 className="listed-cta-title" style={{ fontSize: "var(--fs-2xl)", fontWeight: 400, lineHeight: "var(--lh-2xl)", letterSpacing: "0.005em", color: "rgb(255, 255, 255)", maxWidth: "520px", margin: "0 auto 32px" }}>
            {t("lc_cta_heading", "Find the right solution for your company")}
          </h3>
          <div className="listed-cta-actions" style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: "12px", justifyContent: "center", flexWrap: "wrap", alignItems: isMobile ? "stretch" : "center" }}>
            <LangLink href="/book-demo" className="btn-primary" style={{ minWidth: "140px" }}>{t("book_demo", "Book a Demo")}</LangLink>
            <LangLink href="/contact" className="btn-secondary" style={{ minWidth: "127px" }}>{t("common_talk_to_us", "Talk to Us")}</LangLink>
          </div>
        </div>
      </section>

      <div aria-hidden="true" style={{ width: "100%", height: "60px", backgroundColor: "#ffffff" }} />
    </PageWrapper>
  );
}
