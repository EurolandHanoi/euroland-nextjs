"use client";

/**
 * IPO PAGE — Euroland IR
 * Typography & layout from euroland-ir-...-typography-export(1).json at 2004px viewport
 *
 * S1 Hero:        hero-dark, height 664px, container 1536px, padding 96px 48px
 * S2 IPO Microsite: section white, 654px tall, 2-col (728px content + image)
 * S3 The Journey: section slate bg, 4-col feature-card grid
 * S4 Platform:    section slate bg, 2-col (features list + dashboard preview)
 * S5 CTA:         cta-band, centered
 */
import { useEffect, useRef, useState } from "react";
import LangLink from "@/components/LangLink";
import BannerHero from "@/components/layout/BannerHero";
import { PageWrapper } from "@/components/Layout";
import { TrendingUp, Globe, BarChart2, FileText, Check } from "lucide-react";
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
    { num: "02", title: t("ipopage_listing_day", "Listing Day"), desc: t("ipopage_listing_day_desc", "Real-time stock data, press release distribution, and investor communication tools ready from day one.") },
    { num: "03", title: t("ipopage_post_ipo_ir", "Post-IPO IR"), desc: t("ipopage_post_ipo_ir_desc", "Ongoing IR platform management, earnings reporting, and investor engagement analytics.") },
    { num: "04", title: t("ipopage_day_one_service", "Post-Listing Support"), desc: t("ipopage_day_one_service_desc", "Ongoing IR support for disclosures, investor questions, and day-to-day needs as your team adjusts to life as a public company.") },
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
  const [isMobile, setIsMobile] = useState(false);
  const f1 = useFadeUp();
  const f2 = useFadeUp();
  const f3 = useFadeUp();
  const f4 = useFadeUp();

  const MICROSITE_BULLETS = getMicrositeBullets(t);
  const PHASES = getPhases(t);
  const PLATFORM_FEATURES = getPlatformFeatures(t);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth <= 767);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <PageWrapper>
      <style>{`
        @media (max-width: 767px) {
          .ipo-shell {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          .ipo-two-col,
          .ipo-platform-grid,
          .ipo-journey-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .ipo-journey-grid .feature-card {
            min-height: 0 !important;
            padding: 28px !important;
          }
          .ipo-journey-grid .feature-card h5 {
            min-height: 0 !important;
          }
        }
      `}</style>

            <BannerHero
        variant="solutions"
        label={t("ipopage_ipo_solutions", "IPO Solutions")}
        title={t("ipopage_ipo_readiness", "IPO Readiness")}
        subtitle={t("ipopage_ipo_readiness_subtitle", "From pre-IPO preparation and IPO readiness to post-listing Investor Relations, we provide the IR software, managed services, and capital markets communication tools you need to build investor trust from day one.")}
        backgroundImage="/banner-ipo-readiness.jpg"
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
          className="container ipo-shell"
          style={{ maxWidth: "1536px", padding: `0 ${isMobile ? "20px" : "48px"}` }}
        >
          <div
            ref={f1}
            className="fade-up ipo-two-col"
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: isMobile ? "32px" : "80px",
              alignItems: "center",
            }}
          >
            {/* Left — content: inner content starts at x:331 (48px inset from container) */}
            <div>
              {/* Eyebrow: 12px/600/24px/0.96px/uppercase/rgb(0,107,163) */}
              <div
                className="u-label"
                style={{
                  marginBottom: "16px",
                }}
              >
                {t("ipopage_ipo_microsite", "IPO MICROSITE")}
              </div>

              {/* H4: 32px/500/40px/0.16px/rgb(13,27,42) */}
              <h4
                style={{
                  fontSize: "var(--fs-xl)",
                  fontWeight: 500,
                  lineHeight: "var(--lh-xl)",
                  letterSpacing: "0.01em",
                  color: "rgb(13, 27, 42)",
                  margin: "0 0 32px",
                }}
              >
                {t("ipopage_ipo_microsite_heading", "A dedicated IPO microsite that tells your story")}
              </h4>

              {/* Body: 16px/400/24px/0.16px/rgb(58,74,88), width 520px */}
              <p
                style={{
                  fontSize: "var(--fs-base)",
                  fontWeight: 400,
                  lineHeight: "var(--lh-base)",
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
                  gap: "12px",
                }}
              >
                {MICROSITE_BULLETS.map((b) => (
                  <li
                    key={b}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                      fontSize: "var(--fs-base)",
                      fontWeight: 400,
                      lineHeight: "var(--lh-base)",
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
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        border: "1.5px solid rgb(0, 116, 217)",
                        color: "rgb(0, 116, 217)",
                        fontSize: "var(--fs-xs)",
                        flexShrink: 0,
                        marginTop: "2px",
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
          className="container ipo-shell"
          style={{ maxWidth: "1536px", padding: `0 ${isMobile ? "20px" : "48px"}` }}
        >
          <div ref={f2} className="fade-up">
            {/* Eyebrow: 12px/600/24px/0.96px/uppercase/rgb(0,107,163) */}
            <div
              className="u-label"
              style={{
                marginBottom: "16px",
              }}
            >
              {t("ipopage_the_journey", "THE JOURNEY")}
            </div>

            {/* H3: 40px/400/48px/0.2px/rgb(13,27,42) */}
            <h3
              style={{
                fontSize: "var(--fs-2xl)",
                fontWeight: 400,
                lineHeight: "var(--lh-2xl)",
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
                fontSize: "var(--fs-base)",
                fontWeight: 400,
                lineHeight: "var(--lh-base)",
                letterSpacing: "0.01em",
                color: "rgb(58, 74, 88)",
                maxWidth: "560px",
                margin: "0 0 48px",
              }}
            >
              {t("ipopage_ir_support_body", "Our IPO readiness and Investor Relations solutions are structured around four stages of a successful public listing, from pre-IPO preparation to ongoing post-listing IR.")}
            </p>

            {/* 4-col feature-card grid */}
            <div
              className="ipo-journey-grid"
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "repeat(4, 1fr)",
                gap: "32px",
              }}
            >
              {PHASES.map((p) => (
                <div
                  key={p.num}
                  className="feature-card"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    minHeight: isMobile ? "0" : "280px",
                    padding: isMobile ? "28px" : "36px",
                    cursor: "default",
                  }}
                >
                  {/* num-label: 12px/700/24px/1.44px/uppercase/rgb(0,107,163) */}
                  <div
                    className="num-label"
                    style={{
                      fontSize: "var(--fs-sm)",
                      fontWeight: 400,
                      lineHeight: "var(--lh-base)",
                      letterSpacing: "1.44px",
                      textTransform: "uppercase",
                      color: "#0074D9",
                      marginBottom: "20px",
                      display: "inline-flex",
                      alignItems: "center",
                    }}
                  >
                    {p.num}
                  </div>

                  {/* h5: 24px/500/32px/0.16px/rgb(13,27,42) */}
                  <h5
                    style={{
                      fontSize: "var(--fs-lg)",
                      fontWeight: 500,
                      lineHeight: "var(--lh-lg)",
                      letterSpacing: "0.01em",
                      color: "rgb(13, 27, 42)",
                      margin: "0 0 20px",
                      minHeight: isMobile ? "0" : "72px",
                    }}
                  >
                    {p.title}
                  </h5>

                  {/* p: 12px/400/24px/0.16px/rgb(58,74,88) */}
                  <p
                    style={{
                      fontSize: "var(--fs-base)",
                      fontWeight: 400,
                      lineHeight: "var(--lh-base)",
                      letterSpacing: "0.01em",
                      color: "rgb(58, 74, 88)",
                      margin: 0,
                      maxWidth: "280px",
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
        style={{ background: "rgb(255, 255, 255)", borderTop: "1px solid rgba(15, 30, 43, 0.08)" }}
      >
        <div
          className="container ipo-shell"
          style={{ maxWidth: "1536px", padding: `0 ${isMobile ? "20px" : "48px"}` }}
        >
          <div ref={f3} className="fade-up">
            <div
              className="ipo-platform-grid"
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                gap: isMobile ? "32px" : "80px",
                alignItems: "center",
              }}
            >
              {/* Left — features */}
              <div>
                {/* Eyebrow: 12px/600/24px/0.96px/uppercase/rgb(0,107,163) */}
                <div
                  className="u-label"
                  style={{
                    marginBottom: "16px",
                  }}
                >
                  {t("ipopage_platform", "PLATFORM")}
                </div>

                {/* H3: 40px/400/48px/0.2px/rgb(13,27,42) */}
                <h3
                  style={{
                    fontSize: "var(--fs-2xl)",
                    fontWeight: 400,
                    lineHeight: "var(--lh-2xl)",
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
                        color="rgb(0, 116, 217)"
                        strokeWidth={1.5}
                        style={{ flexShrink: 0, marginTop: "16px" }}
                      />
                      <div>
                        {/* Feature title: 16px/600/24px/0.16px/rgb(13,27,42) */}
                        <div
                          style={{
                            fontSize: "var(--fs-base)",
                            fontWeight: 600,
                            lineHeight: "var(--lh-base)",
                            letterSpacing: "0.01em",
                            color: "rgb(13, 27, 42)",
                            marginBottom: "16px",
                          }}
                        >
                          {f.title}
                        </div>
                        {/* Feature desc: 12px/400/24px/0.16px/rgb(58,74,88) */}
                        <p
                          style={{
                            fontSize: "var(--fs-base)",
                            fontWeight: 400,
                            lineHeight: "var(--lh-base)",
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
                  boxShadow: "0 24px 48px rgba(15, 30, 43, 0.14)",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "8px",
                    background: "rgb(255, 255, 255)",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "24px",
                  }}
                >
                  <img
                    src="/overview-share-price-experian.png"
                    alt={t("ipopage_ipo_dashboard_preview", "IPO dashboard preview")}
                    style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── S5: CTA BAND ──────────────────────────────────────────────────────── */}
      <div className="cta-band">
        <div className="container" style={{ maxWidth: "1536px", padding: "0 48px", textAlign: "center" }}>
          <div ref={f4} className="fade-up" style={{ maxWidth: "720px", margin: "0 auto" }}>
            {/* Eyebrow: 12px/600/24px/0.96px/uppercase/rgb(91,200,245) */}
            <div
              className="u-label u-label-dark"
              style={{
                marginBottom: "16px",
                display: "inline-block",
              }}
            >
              {t("ipopage_get_started", "GET STARTED")}
            </div>

            {/* H3: 40px/300/48px/0.2px/center/rgb(255,255,255) */}
            <h3
              style={{
                fontSize: "var(--fs-2xl)",
                fontWeight: 300,
                lineHeight: "var(--lh-2xl)",
                letterSpacing: "0.005em",
                color: "rgb(255, 255, 255)",
                textAlign: "center",
                margin: "0 auto 32px",
                maxWidth: "600px",
              }}
            >
              {t("ipopage_planning_listing", "Planning a listing? Let us talk.")}
            </h3>
            <p
              style={{
                fontSize: "var(--fs-base)",
                fontWeight: 400,
                lineHeight: "var(--lh-base)",
                letterSpacing: "0.01em",
                color: "rgba(255,255,255,0.72)",
                maxWidth: "560px",
                margin: "0 auto 32px",
              }}
            >
              {t("ipopage_cta_subtitle", "Walk through your IPO timeline, disclosure needs, and investor-facing setup with our team.")}
            </p>

            <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
              <LangLink href="/book-demo" className="btn-primary">{t("ipopage_book_a_demo", "Book a Demo")}</LangLink>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: "60px", background: "#fff" }} />

    </PageWrapper>
  );
}

