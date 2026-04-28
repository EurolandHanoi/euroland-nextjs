"use client";
import LangLink from "@/components/LangLink";
import SectionLabel from "@/components/ui/SectionLabel";
import { useEffect } from "react";
import { PageWrapper } from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
type TFunction = (key: string, fallback?: string) => string;

function getWhyCards(t: TFunction) {
  return [
    {
      icon: "⬡",
      title: t("platform_why_card_1_title", "Built exclusively for IR"),
      desc: t(
        "platform_why_card_1_desc",
        "Not a generic CMS adapted for investor relations — a platform designed from the ground up for listed companies, with every feature shaped by 20+ years of IR expertise."
      ),
    },
    {
      icon: "◈",
      title: t("platform_why_card_2_title", "One vendor, zero integration headaches"),
      desc: t(
        "platform_why_card_2_desc",
        "Every module — data, AI, website, apps, alerts, ESG — works together out of the box. One contract, one support team, one platform that just works."
      ),
    },
    {
      icon: "◎",
      title: t("platform_why_card_3_title", "IR specialists, not generalists"),
      desc: t(
        "platform_why_card_3_desc",
        "Our team understands investor relations from the inside. Every implementation, every support interaction, and every product decision is informed by deep IR domain knowledge."
      ),
    },
    {
      icon: "◉",
      title: t("platform_why_card_4_title", "Proven at every market cap tier"),
      desc: t(
        "platform_why_card_4_desc",
        "From small cap companies managing IR with a lean team, to large-cap operations with complex governance requirements — Euroland IR is trusted across 60+ markets worldwide."
      ),
    },
  ];
}

function getModules(t: TFunction) {
  return [
    {
      label: t("platform_module_stock_label", "Stock & Financial Data"),
      title: t(
        "platform_module_stock_title",
        "Real-time financial data, built for investor relations"
      ),
      body: t(
        "platform_module_stock_body",
        "Euroland IR sources share price data, key financials, analyst consensus, and ownership analytics directly from exchanges and regulatory feeds — and delivers them in real time across your IR platform, apps, and investor alerts. No manual updates. No data delays. No third-party integrations to manage."
      ),
      cta: t("platform_module_stock_cta", "See stock data tools in action"),
      ctaHref: "/platform/stock-data",
      imageLeft: false,
      bg: "bg-white",
    },
    {
      label: t("platform_module_ai_label", "AI-Powered Tools"),
      title: t(
        "platform_module_ai_title",
        "Purpose-built AI that works with your IR content"
      ),
      body: t(
        "platform_module_ai_body",
        "Euroland IR's AI layer is trained on your company's IR documents — annual reports, press releases, earnings transcripts, and regulatory filings. Investors and analysts can ask questions in plain language and receive instant, cited answers. Your IR team can use the same AI to draft, review, and optimise communications faster than ever."
      ),
      cta: t("platform_module_ai_cta", "See AI tools in action"),
      ctaHref: "/ai",
      imageLeft: true,
      bg: "bg-subtle",
    },
    {
      label: t("platform_module_calendar_label", "IR Calendar & Alerts"),
      title: t(
        "platform_module_calendar_title",
        "Never miss a disclosure. Never keep investors waiting."
      ),
      body: t(
        "platform_module_calendar_body",
        "A fully managed financial calendar covering earnings dates, AGMs, capital markets days, dividend events, and roadshows — with automated email and push notification alerts that keep your investor base informed without adding to your team's workload."
      ),
      cta: t("platform_module_calendar_cta", "See calendar & alerts in action"),
      ctaHref: "/platform/analytics-earnings",
      imageLeft: false,
      bg: "bg-white",
    },
    {
      label: t("platform_module_website_label", "IR Platform"),
      title: t(
        "platform_module_website_title",
        "A best-practice IR platform, fully managed"
      ),
      body: t(
        "platform_module_website_body",
        "Euroland IR builds and manages investor relations websites designed to meet the disclosure requirements of every major exchange — and the expectations of institutional investors, analysts, and ESG rating agencies. Responsive, accessible, multi-language, and always up to date."
      ),
      cta: t("platform_module_website_cta", "See IR platform capabilities"),
      ctaHref: "/platform",
      imageLeft: true,
      bg: "bg-subtle",
    },
    {
      label: t("platform_module_apps_label", "IR Apps"),
      title: t(
        "platform_module_apps_title",
        "Your IR programme in every investor's pocket"
      ),
      body: t(
        "platform_module_apps_body",
        "Native iOS and Android investor relations apps that give your investors real-time access to financial data, news, events, and company documents — wherever they are. Fully branded, fully managed, and integrated with the rest of your Euroland IR platform."
      ),
      cta: t("platform_module_apps_cta", "See IR apps in action"),
      ctaHref: "/platform/ir-apps",
      imageLeft: false,
      bg: "bg-white",
    },
    {
      label: t("platform_module_esg_label", "ESG Solutions"),
      title: t(
        "platform_module_esg_title",
        "Structured ESG disclosure for the modern investor"
      ),
      body: t(
        "platform_module_esg_body",
        "Euroland IR's ESG solutions help listed companies present sustainability data clearly and credibly — aligned with CSRD, TCFD, GRI, and SASB frameworks. From structured ESG data pages to the Sustainability IAT, we make it easy to communicate your sustainability story to investors and rating agencies."
      ),
      cta: t("platform_module_esg_cta", "See ESG solutions in action"),
      ctaHref: "/solutions/sustainability-reporting",
      imageLeft: true,
      bg: "bg-subtle",
    },
  ];
}

export default function Platform() {
  const { t } = useLanguage();

  const WHY_CARDS = getWhyCards(t);
  const MODULES = getModules(t);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageWrapper>
      {/* ── HERO + WHY WRAPPER (shared water background) ── */}
      <div style={{ backgroundImage: "url('/banner-water.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", position: "relative" }}>
        {/* Shared dark overlay */}
        <div style={{ position: "absolute", inset: 0, background: "rgba(8, 43, 69, 0.78)", pointerEvents: "none", zIndex: 0 }} />
      {/* ── 1. HERO ── */}
      <section
        className="hero-navy banner-hero-section"
        style={{
          minHeight: "440px",
          display: "flex",
          alignItems: "center",
          background: "transparent",
          position: "relative",
        }}
      >
        <div
          className="container banner-hero-container inner-container"
          style={{ maxWidth: "1536px", padding: "120px 48px 80px", position: "relative", zIndex: 1 }}
        >
          <div style={{ maxWidth: "720px" }}>
            <SectionLabel light>{t("platform_hero_label", "The Platform")}</SectionLabel>
            <h1
              className="banner-hero-title type-h2"
              style={{
                fontSize: "48px",
                fontWeight: 300,
                lineHeight: "64px",
                letterSpacing: "-0.01em",
                color: "#ffffff",
                margin: "0 0 24px",
                maxWidth: "720px",
              }}
            >
              {t("platform_hero_heading", "Everything your IR programme needs. One platform.")}
            </h1>
            <div
              className="banner-hero-subtitle"
              style={{
                fontSize: "20px",
                fontWeight: 400,
                lineHeight: "28px",
                letterSpacing: "0.01em",
                color: "#ffffff",
                maxWidth: "560px",
                margin: "0 0 32px",
              }}
            >
              {t(
                "platform_hero_body",
                "Euroland IR is a unified investor relations platform — combining financial data, AI, compliance tools, shareholder engagement, and investor-facing products in a single, fully managed solution for public companies."
              )}
            </div>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
              <LangLink href="/book-demo" className="btn-primary">
                {t("platform_hero_cta_primary", "Book a Demo")}
              </LangLink>
              <LangLink href="/contact" className="btn-secondary">
                {t("platform_hero_cta_secondary", "Talk to Us")}
              </LangLink>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. WHY EUROLAND IR ── */}
      <section style={{ background: "transparent", color: "var(--white)", padding: "96px 0", position: "relative", zIndex: 1 }}>
        <div className="container">
          {/* Centred heading block */}
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <span className="u-label" style={{ color: "var(--blue)" }}>
              {t("platform_why_label", "Why Euroland IR")}
            </span>
            <h3 className="type-h2"
              style={{
                fontSize: "var(--fs-3xl)",
                lineHeight: "var(--lh-3xl)",
                fontWeight: 300,
                color: "var(--white)",
                letterSpacing: "-0.01em",
                margin: "20px auto 16px",
                maxWidth: "600px",
              }}
            >
              {t("platform_why_heading", "The IR platform built for IR")}
            </h3>
            <p
              style={{
                fontSize: "var(--fs-base)",
                lineHeight: "var(--lh-base)",
                color: "rgba(255,255,255,0.65)",
                maxWidth: "560px",
                margin: "0 auto",
              }}
            >
              {t(
                "platform_why_body",
                "Most IR teams piece together tools from different vendors. Euroland IR is different — one platform, one team, one point of accountability."
              )}
            </p>
          </div>

          {/* 4-column feature cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "24px",
            }}
          >
            {WHY_CARDS.map((card) => (
              <div
                key={card.title}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  borderRadius: "16px",
                  padding: "32px 28px",
                  transition: "background 200ms ease",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLDivElement).style.background =
                    "rgba(255,255,255,0.10)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLDivElement).style.background =
                    "rgba(255,255,255,0.06)")
                }
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: "rgba(0,173,240,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                    fontSize: "20px",
                    color: "var(--blue)",
                  }}
                >
                  {card.icon}
                </div>
                <h5 className="type-h6"
                  style={{
                    fontSize: "var(--fs-base)",
                    fontWeight: 600,
                    color: "var(--white)",
                    marginBottom: "12px",
                    lineHeight: "var(--lh-base)",
                  }}
                >
                  {card.title}
                </h5>
                <p
                  style={{
                    fontSize: "var(--fs-sm)",
                    lineHeight: "20px",
                    color: "rgba(255,255,255,0.60)",
                    margin: 0,
                  }}
                >
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>{/* end hero+why wrapper */}
      {/* ── 3–8. ALTERNATING MODULE SECTIONS ── */}
      {MODULES.map((mod) => {
        const textBlock = (
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <span className="u-label">{mod.label}</span>
            <h3
              style={{
                fontSize: "var(--fs-2xl)",
                lineHeight: "var(--lh-2xl)",
                fontWeight: 300,
                color: "var(--text-primary)",
                letterSpacing: "-0.01em",
                margin: "20px 0 20px",
              }}
            >
              {mod.title}
            </h3>
            <p
              style={{
                fontSize: "var(--fs-base)",
                lineHeight: "var(--lh-base)",
                color: "var(--text-secondary)",
                marginBottom: "32px",
              }}
            >
              {mod.body}
            </p>
            <a
              href={mod.ctaHref}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "var(--fs-sm)",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--blue)",
                textDecoration: "none",
                transition: "gap 160ms ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.gap = "14px")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.gap = "8px")}
            >
              {mod.cta} →
            </a>
          </div>
        );

        const videoBlock = (
          <div
            style={{
              background: "var(--navy)",
              borderRadius: "16px",
              aspectRatio: "16/10",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
              cursor: "pointer",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Play button */}
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                background: "rgba(0,173,240,0.20)",
                border: "2px solid rgba(0,173,240,0.50)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M6 4l12 6-12 6V4z" fill="var(--blue)" />
              </svg>
            </div>
            <span
              style={{
                fontSize: "var(--fs-xs)",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.50)",
              }}
            >
              {mod.cta.toUpperCase()}
            </span>
          </div>
        );

        return (
          <section key={mod.label} className={`section ${mod.bg}`}>
            <div className="container">
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "80px",
                  alignItems: "center",
                }}
              >
                {mod.imageLeft ? (
                  <>
                    {videoBlock}
                    {textBlock}
                  </>
                ) : (
                  <>
                    {textBlock}
                    {videoBlock}
                  </>
                )}
              </div>
            </div>
          </section>
        );
      })}

      {/* ── 9. CTA BAND ── */}
      <section className="cta-band">
        <div className="container">
          <div style={{ textAlign: "center" }}>
            <span className="u-label" style={{ color: "var(--blue)" }}>
              {t("platform_cta_band_label", "Get Started")}
            </span>
            <h3
              style={{
                fontSize: "var(--fs-2xl)",
                lineHeight: "var(--lh-2xl)",
                fontWeight: 300,
                color: "var(--white)",
                letterSpacing: "-0.01em",
                margin: "20px auto 16px",
                maxWidth: "600px",
              }}
            >
              {t(
                "platform_cta_band_heading",
                "Ready to transform your investor relations?"
              )}
            </h3>
            <p
              style={{
                fontSize: "var(--fs-base)",
                lineHeight: "var(--lh-base)",
                color: "rgba(255,255,255,0.70)",
                marginBottom: "40px",
                maxWidth: "480px",
                margin: "0 auto 40px",
              }}
            >
              {t(
                "platform_cta_band_body",
                "Speak with our team to find the right solution for your company."
              )}
            </p>
            <div
              style={{
                display: "flex",
                gap: "16px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <LangLink href="/book-demo" className="btn-primary">
                {t("platform_cta_band_btn_book_demo", "Book a Demo")}
              </LangLink>
              <LangLink href="/contact" className="btn-secondary">
                {t("platform_cta_band_btn_contact_us", "Talk to Us")}
              </LangLink>
            </div>
          </div>
        </div>
      </section>
      <div style={{ height: "60px", background: "#fff" }} />
    </PageWrapper>
  );
}
