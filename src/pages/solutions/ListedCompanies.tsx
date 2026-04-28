"use client";

/**
 * For Listed Companies — Solutions Sub-Page
 */

import { useEffect, useRef } from "react";
import LangLink from "@/components/LangLink";
import { PageWrapper } from "@/components/Layout";
import BannerHero from "@/components/layout/BannerHero";
import { useLanguage } from "@/contexts/LanguageContext";

function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
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

const btnPrimary: React.CSSProperties = { display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "12px 28px", background: "rgb(0, 107, 163)", color: "rgb(255, 255, 255)", fontSize: "12px", fontWeight: 500, lineHeight: "24px", letterSpacing: "0.96px", textTransform: "uppercase", borderRadius: "24px", cursor: "pointer", textDecoration: "none", border: "none", height: "50px", boxSizing: "border-box", whiteSpace: "nowrap" };
const btnOutline: React.CSSProperties = { display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "12px 28px", background: "transparent", color: "rgb(255, 255, 255)", fontSize: "12px", fontWeight: 500, lineHeight: "24px", letterSpacing: "0.96px", textTransform: "uppercase", borderRadius: "24px", cursor: "pointer", textDecoration: "none", border: "1px solid rgba(255, 255, 255, 0.4)", height: "50px", boxSizing: "border-box", whiteSpace: "nowrap" };

export default function ListedCompanies() {
  const { t } = useLanguage();
  const howWeThinkRef = useFadeIn();
  const cardsRef = useFadeIn();
  const ctaRef = useFadeIn();

  const COMPANY_CARDS = [
    {
      title: t("lc_card_1_title", "Micro Cap Companies"),
      challenge: t("lc_card_1_challenge", "Newly listed or very small companies needing a professional IR presence without the enterprise price tag."),
      outcome: t("lc_card_1_outcome", "Institutional-quality IR infrastructure at an accessible entry-level price point."),
      link: "/solutions/listed-companies/micro-cap",
      linkLabel: t("lc_card_1_link", "See the Micro Cap Companies page"),
    },
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
      <BannerHero
        variant="solutions"
        label={t("lc_hero_label", "For Listed Companies")}
        title={t("lc_hero_title", "IR solutions for every listed company")}
        subtitle={t("lc_hero_subtitle", "Euroland IR gives listed companies the investor relations software, workflows, and managed services to communicate with shareholders professionally — regardless of team size, market cap, or regulatory complexity.")}
        primaryCtaLabel={t("book_demo", "Book a Demo")}
        primaryCtaHref="/book-demo"
        secondaryCtaLabel={t("common_talk_to_us", "Talk to Us")}
        secondaryCtaHref="/contact"
      />

      <section style={{ width: "100%", paddingTop: "80px", paddingBottom: "80px", backgroundColor: "#ffffff" }}>
        <div ref={howWeThinkRef} style={{ maxWidth: "1536px", width: "100%", margin: "0 auto", paddingLeft: "48px", paddingRight: "48px", boxSizing: "border-box" }}>
          <div style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center" }}>
            <div style={{ marginBottom: "12px" }}>
              <div style={{ display: "inline-block" }}>
                <span style={{ fontSize: "12px", fontWeight: 500, lineHeight: "24px", letterSpacing: "0.96px", textTransform: "uppercase", color: "#327AB1", display: "block", marginBottom: "8px" }}>
                  {t("lc_how_label", "How We Think About It")}
                </span>
                <div style={{ width: "25%", height: "2px", background: "#327AB1" }} />
              </div>
            </div>
            <h3 style={{ fontSize: "40px", fontWeight: 400, lineHeight: "52px", letterSpacing: "0.005em", color: "rgb(13, 27, 42)", margin: "0 0 24px" }}>
              {t("lc_how_heading", "One platform, shaped to where you are")}
            </h3>
            <p style={{ fontSize: "20px", fontWeight: 400, lineHeight: "32px", letterSpacing: "0.01em", color: "rgb(58, 74, 88)", margin: 0 }}>
              {t("lc_how_body", "IR needs differ significantly depending on company size, team structure, and market complexity. Rather than a one-size-fits-all approach, Euroland IR is designed to meet companies where they are — with the right depth of capability, workflow support, and service model for each stage of growth.")}
            </p>
          </div>
        </div>
      </section>

      <section style={{ width: "100%", paddingTop: "80px", paddingBottom: "80px", backgroundColor: "rgb(245, 245, 245)" }}>
        <div ref={cardsRef} style={{ maxWidth: "1536px", width: "100%", margin: "0 auto", paddingLeft: "48px", paddingRight: "48px", boxSizing: "border-box" }}>
          <div style={{ width: "1440px", maxWidth: "100%", marginBottom: "48px", textAlign: "center" }}>
            <div style={{ marginBottom: "12px" }}>
              <div style={{ display: "inline-block" }}>
                <span style={{ fontSize: "12px", fontWeight: 500, lineHeight: "24px", letterSpacing: "0.96px", textTransform: "uppercase", color: "#327AB1", display: "block", marginBottom: "8px" }}>
                  {t("lc_cards_label", "Choose Your Company Profile")}
                </span>
                <div style={{ width: "25%", height: "2px", background: "#327AB1" }} />
              </div>
            </div>
            <h3 style={{ fontSize: "40px", fontWeight: 400, lineHeight: "52px", letterSpacing: "0.005em", color: "rgb(13, 27, 42)", maxWidth: "480px", margin: "0 auto" }}>
              {t("lc_cards_heading", "Find the right fit for your company")}
            </h3>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", columnGap: "24px", rowGap: "24px" }}>
            {COMPANY_CARDS.map((card, i) => (
              <div key={i} style={{ padding: "32px", backgroundColor: "rgb(255, 255, 255)", border: "1px solid rgb(221, 224, 230)", borderRadius: "12px", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "8px", minHeight: "276px" }}>
                <h4 className="type-h6" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "28px", letterSpacing: "0.1px", color: "rgb(13, 27, 42)", margin: 0, flexShrink: 0 }}>{card.title}</h4>
                <p style={{ fontSize: "12px", fontWeight: 400, lineHeight: "24px", letterSpacing: "0.01em", color: "rgb(58, 74, 88)", margin: 0, flexShrink: 0 }}>
                  <strong style={{ fontWeight: 600, color: "rgb(13, 27, 42)" }}>{t("challenge_label", "Challenge")}:</strong>{" "}{card.challenge}
                </p>
                <p style={{ fontSize: "12px", fontWeight: 400, lineHeight: "24px", letterSpacing: "0.01em", color: "rgb(58, 74, 88)", margin: 0, flex: 1 }}>
                  <strong style={{ fontWeight: 600, color: "rgb(13, 27, 42)" }}>{t("outcome_label", "Outcome")}:</strong>{" "}{card.outcome}
                </p>
                <div style={{ flexShrink: 0 }}>
                  <LangLink href={card.link} style={{ fontSize: "12px", fontWeight: 600, lineHeight: "24px", letterSpacing: "0.01em", color: "rgb(8, 43, 69)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                    {card.linkLabel}
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" style={{ flexShrink: 0 }}>
                      <path d="M2.5 6.5H10.5M10.5 6.5L7 3M10.5 6.5L7 10" stroke="rgb(8, 43, 69)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </LangLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ width: "100%", paddingTop: "96px", paddingBottom: "96px", backgroundImage: "linear-gradient(135deg, rgb(14, 45, 74), rgb(8, 43, 69))" }}>
        <div ref={ctaRef} style={{ maxWidth: "1536px", width: "100%", margin: "0 auto", paddingLeft: "48px", paddingRight: "48px", boxSizing: "border-box", textAlign: "center" }}>
          <div style={{ marginBottom: "16px" }}>
            <div style={{ display: "inline-block" }}>
              <span style={{ fontSize: "12px", fontWeight: 500, lineHeight: "24px", letterSpacing: "0.96px", textTransform: "uppercase", color: "#327AB1", display: "block", marginBottom: "8px" }}>
                {t("get_started", "Get Started")}
              </span>
              <div style={{ width: "25%", height: "2px", background: "#327AB1" }} />
            </div>
          </div>
          <h3 style={{ fontSize: "40px", fontWeight: 400, lineHeight: "52px", letterSpacing: "0.005em", color: "rgb(255, 255, 255)", maxWidth: "520px", margin: "0 auto 32px" }}>
            {t("lc_cta_heading", "Find the right solution for your company")}
          </h3>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
            <LangLink href="/book-demo"><span style={{ ...btnPrimary, minWidth: "140px" }}>{t("book_demo", "Book a Demo")}</span></LangLink>
            <LangLink href="/contact"><span style={{ ...btnOutline, minWidth: "127px" }}>{t("common_talk_to_us", "Talk to Us")}</span></LangLink>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
