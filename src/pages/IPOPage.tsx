"use client";

/**
 * IPO PAGE — Euroland IR
 * Typography & layout from euroland-ir-...-typography-export(1).json at 2004px viewport
 *
 * S1 Hero:        hero-dark, height 664px, container 1536px, padding 80px 48px
 * S2 IPO Microsite: section white, 654px tall, 2-col (728px content + image)
 * S3 The Journey: section slate bg, 4-col feature-card grid
 * S4 Platform:    section slate bg, 2-col (features list + dashboard preview)
 * S5 CTA:         cta-band, centered
 */
import { useEffect, useRef } from "react";
import Link from "next/link";
import LangLink from "@/components/LangLink";
import BannerHero from "@/components/layout/BannerHero";
import { PageWrapper } from "@/components/Layout";
import { TrendingUp, Globe, BarChart2, FileText } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type TFunction = (key: string, fallback?: string) => string;

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

function getMicrositeBullets(t: TFunction) {
  return [
    t("ipopage_structured_content", "Structured content for investors, analysts and media"),
    t("ipopage_document_library", "Document library with version control and audit trails"),
    t("ipopage_timetable_alerts", "Timetable, alerts and announcements for real-time updates"),
    t("ipopage_multi_language", "Multi-language pages and clear contact paths"),
  ];
}

function getPhases(t: TFunction) {
  return [
    { num: "01", title: t("ipopage_pre_ipo_preparation", "Pre-IPO Preparation"), desc: t("ipopage_pre_ipo_preparation_desc", "Build your IR platform, investor materials, and disclosure infrastructure before the listing date.") },
    { num: "02", title: t("ipopage_roadshow_support", "Roadshow Support"), desc: t("ipopage_roadshow_support_desc", "Investor presentation tools, meeting scheduling, and CRM to manage your roadshow efficiently.") },
    { num: "03", title: t("ipopage_listing_day", "Listing Day"), desc: t("ipopage_listing_day_desc", "Real-time stock data, press release distribution, and investor communication tools ready from day one.") },
    { num: "04", title: t("ipopage_post_ipo_ir", "Post-IPO IR"), desc: t("ipopage_post_ipo_ir_desc", "Ongoing IR platform management, earnings reporting, and investor engagement analytics.") },
  ];
}

function getPlatformFeatures(t: TFunction) {
  return [
    { icon: TrendingUp, title: t("ipopage_stock_performance_tools", "Stock Performance Tools"), desc: t("ipopage_stock_performance_tools_desc", "Real-time and historical price data, peer comparisons, and analyst coverage tracking.") },
    { icon: Globe, title: t("ipopage_csrd_esg_reporting", "CSRD & ESG Reporting"), desc: t("ipopage_csrd_esg_reporting_desc", "Present CSRD and ESG disclosures clearly with structured, investor-friendly sustainability reporting tools.") },
    { icon: BarChart2, title: t("ipopage_analytics_reporting", "Analytics & Reporting"), desc: t("ipopage_analytics_reporting_desc", "Track investor engagement, monitor website performance, and gain actionable insights with built-in IR analytics.") },
    { icon: FileText, title: t("ipopage_disclosure_management", "Disclosure Management"), desc: t("ipopage_disclosure_management_desc", "Streamlined regulatory filing, press release distribution, and compliance workflows.") },
  ];
}

export default function IPOPage() {
  const { t } = useLanguage();
  const f1 = useFadeUp();
  const f2 = useFadeUp();
  const f3 = useFadeUp();
  const f4 = useFadeUp();

  const MICROSITE_BULLETS = getMicrositeBullets(t);
  const PHASES = getPhases(t);
  const PLATFORM_FEATURES = getPlatformFeatures(t);

  return (
    <PageWrapper>

            <BannerHero
        variant="solutions"
        label={t("ipopage_ipo_solutions", "IPO Solutions")}
        title={t("ipopage_ipo_readiness", "IPO Readiness")}
        subtitle={t("ipopage_ipo_readiness_subtitle", "From pre-IPO preparation and IPO readiness to post-listing investor relations, we provide the IR software, managed services, and capital markets communication tools you need to build investor trust from day one.")}
        primaryCtaLabel={t("ipopage_book_a_demo", "Book a Demo")}
        primaryCtaHref="/book-demo"
        secondaryCtaLabel={t("common_talk_to_us", "Talk to Us")}
        secondaryCtaHref="/contact"
      />

      {/* ── S2: IPO MICROSITE ─────────────────────────────────────────────────── */}
      {/* section.section white bg, height ~654px, 2-col layout */}
      <section
        className="section"
        style={{ background: "rgb(255, 255, 255)" }}
      >
        <div
          className="container"
          style={{ maxWidth: "1536px", padding: "0 48px" }}
        >
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
            {/* Left — content: inner content starts at x:331 (48px inset from container) */}
            <div style={{ padding: "0 48px" }}>
              {/* Eyebrow: 12px/600/24px/0.96px/uppercase/rgb(0,107,163) */}
              <div
                className="u-label"
                style={{
                  fontSize: "12px",
                  fontWeight: 500,
                  lineHeight: "24px",
                  letterSpacing: "0.96px",
                  textTransform: "uppercase",
                  color: "#28628F",
                  marginBottom: "16px",
                }}
              >
                {t("ipopage_ipo_microsite", "IPO MICROSITE")}
              </div>

              {/* H4: 32px/500/40px/0.16px/rgb(13,27,42) */}
              <h4
                style={{
                  fontSize: "32px",
                  fontWeight: 500,
                  lineHeight: "40px",
                  letterSpacing: "0.01em",
                  color: "rgb(13, 27, 42)",
                  margin: "0 0 24px",
                }}
              >
                {t("ipopage_ipo_microsite_heading", "A dedicated IPO microsite that tells your story")}
              </h4>

              {/* Body: 16px/400/24px/0.16px/rgb(58,74,88), width 520px */}
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  letterSpacing: "0.01em",
                  color: "rgb(58, 74, 88)",
                  maxWidth: "520px",
                  margin: "0 0 32px",
                }}
              >
                {t("ipopage_ipo_microsite_body", "Your IPO microsite centralises your equity story, governance materials, documents and key dates so investors always have a single, reliable source of truth.")}
              </p>

              {/* Bullet list: 16px/400/24px/0.16px/rgb(58,74,88) with cyan check icons */}
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                {MICROSITE_BULLETS.map((b) => (
                  <li
                    key={b}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "8px",
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: "24px",
                      letterSpacing: "0.01em",
                      color: "rgb(58, 74, 88)",
                    }}
                  >
                    {/* Cyan circle check icon */}
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        border: "1.5px solid rgb(0, 107, 163)",
                        color: "rgb(0, 107, 163)",
                        fontSize: "10px",
                        flexShrink: 0,
                        marginTop: "3px",
                      }}
                    >
                      ✓
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <LangLink href="/book-demo" className="btn-primary">{t("ipopage_see_microsite_examples", "See IPO examples in a demo")}</LangLink>
            </div>

            {/* Right — image (handshake photo from screenshot) */}
            <div
              style={{
                borderRadius: "8px",
                overflow: "hidden",
                aspectRatio: "4/3",
                background: "linear-gradient(135deg, #c8ddf0 0%, #e8f4fb 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="/webpages-showcase_cbbd263f.png"
                alt={t("ipopage_ipo_microsite_handshake_alt", "Euroland IR IPO microsite showcase")}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── S3: THE JOURNEY ───────────────────────────────────────────────────── */}
      {/* section.section slate bg, 4-col feature-card grid */}
      <section
        className="section"
        style={{ background: "var(--slate)" }}
      >
        <div
          className="container"
          style={{ maxWidth: "1536px", padding: "0 48px" }}
        >
          <div ref={f2} className="fade-up">
            {/* Eyebrow: 12px/600/24px/0.96px/uppercase/rgb(0,107,163) */}
            <div
              className="u-label"
              style={{
                fontSize: "12px",
                fontWeight: 500,
                lineHeight: "24px",
                letterSpacing: "0.96px",
                textTransform: "uppercase",
                color: "#28628F",
                marginBottom: "16px",
              }}
            >
              {t("ipopage_the_journey", "THE JOURNEY")}
            </div>

            {/* H3: 40px/400/48px/0.2px/rgb(13,27,42) */}
            <h3
              style={{
                fontSize: "40px",
                fontWeight: 400,
                lineHeight: "48px",
                letterSpacing: "0.005em",
                color: "rgb(13, 27, 42)",
                margin: "0 0 16px",
              }}
            >
              {t("ipopage_ir_support_every_stage", "IR support at every stage of your IPO")}
            </h3>

            {/* Body: 16px/400/24px/0.16px/rgb(58,74,88) */}
            <p
              style={{
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "24px",
                letterSpacing: "0.01em",
                color: "rgb(58, 74, 88)",
                maxWidth: "560px",
                margin: "0 0 48px",
              }}
            >
              {t("ipopage_ir_support_body", "Our IPO readiness and investor relations solutions are structured around the four phases of a successful public listing — from pre-IPO preparation to ongoing post-listing IR.")}
            </p>

            {/* 4-col feature-card grid */}
            <div
              className="rg-4"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "24px",
              }}
            >
              {PHASES.map((p) => (
                <div key={p.num} className="feature-card">
                  {/* num-label: 12px/700/24px/1.44px/uppercase/rgb(0,107,163) */}
                  <div
                    className="num-label"
                    style={{
                      fontSize: "12px",
                      fontWeight: 500,
                      lineHeight: "24px",
                      letterSpacing: "1.44px",
                      textTransform: "uppercase",
                      color: "#28628F",
                      marginBottom: "16px",
                    }}
                  >
                    {p.num}
                  </div>

                  {/* h5: 24px/500/32px/0.16px/rgb(13,27,42) */}
                  <h5
                    style={{
                      fontSize: "24px",
                      fontWeight: 500,
                      lineHeight: "32px",
                      letterSpacing: "0.01em",
                      color: "rgb(13, 27, 42)",
                      margin: "0 0 12px",
                    }}
                  >
                    {p.title}
                  </h5>

                  {/* p: 12px/400/24px/0.16px/rgb(58,74,88) */}
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: 400,
                      lineHeight: "24px",
                      letterSpacing: "0.01em",
                      color: "rgb(58, 74, 88)",
                      margin: 0,
                    }}
                  >
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── S4: PLATFORM ──────────────────────────────────────────────────────── */}
      {/* section slate bg, 2-col: left feature list + right dashboard preview */}
      <section
        className="section"
        style={{ background: "var(--slate)" }}
      >
        <div
          className="container"
          style={{ maxWidth: "1536px", padding: "0 48px" }}
        >
          <div ref={f3} className="fade-up">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "64px",
                alignItems: "center",
              }}
            >
              {/* Left — features */}
              <div>
                {/* Eyebrow: 12px/600/24px/0.96px/uppercase/rgb(0,107,163) */}
                <div
                  className="u-label"
                  style={{
                    fontSize: "12px",
                    fontWeight: 500,
                    lineHeight: "24px",
                    letterSpacing: "0.96px",
                    textTransform: "uppercase",
                    color: "#28628F",
                    marginBottom: "16px",
                  }}
                >
                  {t("ipopage_platform", "PLATFORM")}
                </div>

                {/* H3: 40px/400/48px/0.2px/rgb(13,27,42) */}
                <h3
                  style={{
                    fontSize: "40px",
                    fontWeight: 400,
                    lineHeight: "48px",
                    letterSpacing: "0.005em",
                    color: "rgb(13, 27, 42)",
                    margin: "0 0 32px",
                  }}
                >
                  {t("ipopage_everything_after_listing", "Everything you need after listing")}
                </h3>

                {/* Feature rows */}
                <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  {PLATFORM_FEATURES.map((f) => (
                    <div
                      key={f.title}
                      style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}
                    >
                      <f.icon
                        size={20}
                        color="rgb(0, 107, 163)"
                        strokeWidth={1.5}
                        style={{ flexShrink: 0, marginTop: "2px" }}
                      />
                      <div>
                        {/* Feature title: 16px/600/24px/0.16px/rgb(13,27,42) */}
                        <div
                          style={{
                            fontSize: "16px",
                            fontWeight: 600,
                            lineHeight: "24px",
                            letterSpacing: "0.01em",
                            color: "rgb(13, 27, 42)",
                            marginBottom: "4px",
                          }}
                        >
                          {f.title}
                        </div>
                        {/* Feature desc: 12px/400/24px/0.16px/rgb(58,74,88) */}
                        <p
                          style={{
                            fontSize: "12px",
                            fontWeight: 400,
                            lineHeight: "24px",
                            letterSpacing: "0.01em",
                            color: "rgb(58, 74, 88)",
                            margin: 0,
                          }}
                        >
                          {f.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — IPO Dashboard Preview panel */}
              <div
                style={{
                  background: "rgb(11, 39, 67)",
                  borderRadius: "12px",
                  aspectRatio: "4/3",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "32px",
                }}
              >
                {/* Dashboard preview label: 12px/600/24px/0.72px/uppercase/rgba(255,255,255,0.3) */}
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 500,
                    lineHeight: "24px",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "rgba(255, 255, 255, 0.3)",
                    textAlign: "center",
                  }}
                >
                  {t("ipopage_ipo_dashboard_preview", "IPO DASHBOARD PREVIEW")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── S5: CTA BAND ──────────────────────────────────────────────────────── */}
      <div className="cta-band">
        <div className="container" style={{ maxWidth: "1536px", padding: "0 48px", textAlign: "center" }}>
          <div ref={f4} className="fade-up">
            {/* Eyebrow: 12px/600/24px/0.96px/uppercase/rgb(91,200,245) */}
            <div
              className="u-label u-label-dark"
              style={{
                fontSize: "12px",
                fontWeight: 500,
                lineHeight: "24px",
                letterSpacing: "0.96px",
                textTransform: "uppercase",
                color: "#28628F",
                marginBottom: "16px",
                display: "inline-block",
              }}
            >
              {t("ipopage_get_started", "GET STARTED")}
            </div>

            {/* H3: 40px/300/48px/0.2px/center/rgb(255,255,255) */}
            <h3
              style={{
                fontSize: "40px",
                fontWeight: 300,
                lineHeight: "48px",
                letterSpacing: "0.005em",
                color: "rgb(255, 255, 255)",
                textAlign: "center",
                margin: "0 auto 32px",
                maxWidth: "600px",
              }}
            >
              {t("ipopage_planning_listing", "Planning a listing? Let us talk.")}
            </h3>

            <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
              <LangLink href="/book-demo" className="btn-primary">{t("ipopage_book_a_demo", "Book a Demo")}</LangLink>
              <LangLink href="/contact" className="btn-secondary">{t("common_talk_to_us", "Talk to Us")}</LangLink>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: "60px", background: "#fff" }} />

    </PageWrapper>
  );
}
