"use client";

/**
 * Analytics & Earnings — Platform Sub-Page
 */

import LangLink from "@/components/LangLink";
import BannerHero from "@/components/layout/BannerHero";
import { useEffect, useRef } from "react";
import { PageWrapper } from "@/components/Layout";
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

function ToolCard({ card }: { card: { num: string; title: string; desc: string } }) {
  return (
    <div style={{ height: "278px", padding: "32px", background: "#ffffff", border: "1px solid rgb(221, 224, 230)", borderRadius: "16px", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "12px", overflow: "hidden" }}>
      <span style={{ fontSize: "var(--fs-sm)", fontWeight: 500, color: "#0074D9", letterSpacing: "1.44px", textTransform: "uppercase" as const }}>{card.num}</span>
      <h5 style={{ fontSize: "var(--fs-lg)", fontWeight: 500, lineHeight: "var(--lh-lg)", letterSpacing: "0.005em", color: "rgb(13, 27, 42)", margin: 0 }}>{card.title}</h5>
      <p style={{ fontSize: "var(--fs-sm)", fontWeight: 400, lineHeight: "var(--lh-base)", letterSpacing: "0.01em", color: "rgb(58, 74, 88)", margin: 0 }}>{card.desc}</p>
    </div>
  );
}

export default function AnalyticsEarnings() {
  const { t } = useLanguage();
  const challengeRef = useFadeIn();
  const demoRef = useFadeIn();
  const toolSuiteRef = useFadeIn();
  const TOOL_CARDS = [
    { num: "01", title: t("ae_tool_1_title", "Interactive Earnings Dashboard"), desc: t("ae_tool_1_desc", "A live, interactive earnings dashboard that transforms your results announcement into a structured, navigable experience, with charts, KPIs, and segment breakdowns.") },
    { num: "02", title: t("ae_tool_2_title", "Consensus Estimates Tracker"), desc: t("ae_tool_2_desc", "Real-time consensus estimates from leading financial data providers, displayed alongside your actual results, giving investors instant context for performance assessment.") },
    { num: "03", title: t("ae_tool_3_title", "Financial Model Builder"), desc: t("ae_tool_3_desc", "An interactive financial model tool that allows analysts and investors to build and stress-test their own projections directly from your published financial data.") },
    { num: "04", title: t("ae_tool_4_title", "Earnings Webcast Integration"), desc: t("ae_tool_4_desc", "Seamless integration with Euroland IR's webcast platform, embedding live and on-demand earnings calls directly within your results page for a unified investor experience.") },
    { num: "05", title: t("ae_tool_5_title", "Analyst Coverage Tracker"), desc: t("ae_tool_5_desc", "A structured, up-to-date directory of analyst coverage, including target prices, ratings, and report summaries, maintained automatically from your IR data layer.") },
    { num: "06", title: t("ae_tool_6_title", "Results Archive & Comparisons"), desc: t("ae_tool_6_desc", "A searchable archive of all historical results, with side-by-side period comparisons, trend charts, and downloadable data tables for in-depth financial analysis.") },
    { num: "07", title: t("ae_tool_7_title", "Earnings Engagement Analytics"), desc: t("ae_tool_7_desc", "Detailed analytics on investor engagement with your results pages, including page views, time on page, document downloads, and webcast attendance, delivered to your IR team.") },
  ];

  return (
    <PageWrapper>
      <BannerHero
        variant="platform"
        label={t("ae_hero_label", "Analytics & Earnings")}
        title={t("ae_hero_title", "Interactive earnings and analytics that investors trust")}
        subtitle={t("ae_hero_subtitle", "Transform your results announcements into live, interactive experiences, with real-time consensus data, financial model tools, and engagement analytics for your IR team.")}
        primaryCtaLabel={t("book_demo", "Book a Demo")}
        primaryCtaHref="/book-demo"
        secondaryCtaLabel={t("see_it_live", "See It Live")}
        secondaryCtaHref="/contact"
        titleMaxWidth="720px"
        subtitleMaxWidth="560px"
      />

      <section style={{ width: "100%", padding: "64px 0", background: "rgb(245, 245, 245)" }}>
        <div ref={challengeRef} style={{ maxWidth: "1536px", width: "100%", margin: "0 auto", padding: "0 48px", boxSizing: "border-box" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ display: "inline-block", width: "fit-content" }}>
              <span style={{ fontSize: "var(--fs-sm)", fontWeight: 400, letterSpacing: "0.96px", textTransform: "uppercase", color: "var(--label-blue-light)" }}>{t("the_challenge", "The Challenge")}</span>
              <div style={{ width: "25%", height: "2px", background: "var(--label-blue-light)", marginTop: "16px" }} />
            </div>
            <h3 style={{ fontSize: "var(--fs-2xl)", fontWeight: 400, lineHeight: "var(--lh-2xl)", letterSpacing: "0.005em", color: "rgb(13, 27, 42)", margin: "16px 0 16px" }}>{t("ae_challenge_heading", "Earnings data is only valuable when it's interactive")}</h3>
            <p style={{ fontSize: "var(--fs-base)", fontWeight: 400, lineHeight: "var(--lh-base)", letterSpacing: "0.01em", color: "rgb(58, 74, 88)", maxWidth: "560px", margin: "0 auto" }}>{t("ae_challenge_body", "Static PDF results and disconnected webcast tools create friction for investors and blind spots for IR teams. Euroland IR Analytics & Earnings replaces the PDF with a live, structured, and trackable results experience.")}</p>
          </div>
        </div>
      </section>

      <section style={{ width: "100%", padding: "64px 0", background: "#ffffff" }}>
        <div ref={demoRef} style={{ maxWidth: "1536px", width: "100%", margin: "0 auto", padding: "0 48px", boxSizing: "border-box" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>
            <div style={{ width: "100%", height: "387px", background: "rgb(13, 27, 42)", borderRadius: "12px", border: "1px solid rgba(0, 173, 240, 0.2)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "16px" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "50%", border: "2px solid rgb(0, 116, 217)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="rgb(0, 116, 217)"><polygon points="5 3 19 12 5 21 5 3" /></svg>
              </div>
              <p style={{ fontSize: "var(--fs-base)", fontWeight: 500, color: "#fff", margin: 0 }}>{t("ae_demo_video_label", "Earnings Dashboard, Live Demo")}</p>
            </div>
            <div>
              <div style={{ marginBottom: "16px" }}>
                <div style={{ display: "inline-block", width: "fit-content" }}>
                  <span style={{ fontSize: "var(--fs-sm)", fontWeight: 400, letterSpacing: "0.96px", textTransform: "uppercase", color: "var(--label-blue-light)" }}>{t("ae_demo_label", "Interactive Earnings")}</span>
                  <div style={{ width: "25%", height: "2px", background: "var(--label-blue-light)", marginTop: "16px" }} />
                </div>
              </div>
              <h3 style={{ fontSize: "var(--fs-2xl)", fontWeight: 400, lineHeight: "var(--lh-2xl)", letterSpacing: "0.005em", color: "rgb(13, 27, 42)", margin: "0 0 32px" }}>{t("ae_demo_heading", "Results pages that analysts and investors actually use")}</h3>
              <p style={{ fontSize: "var(--fs-base)", fontWeight: 400, lineHeight: "var(--lh-base)", letterSpacing: "0.01em", color: "rgb(58, 74, 88)", margin: "0 0 32px" }}>{t("ae_demo_body", "Euroland IR transforms your earnings announcement into a structured, interactive results page, with live KPI dashboards, consensus comparison charts, segment breakdowns, and integrated webcast replay. Published automatically on results day, with no manual intervention required.")}</p>
              <LangLink href="/book-demo" style={{ fontSize: "var(--fs-sm)", fontWeight: 500, letterSpacing: "0.96px", textTransform: "uppercase", color: "#0074D9", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}>{t("ae_demo_link", "See Analytics & Earnings in action →")}</LangLink>
            </div>
          </div>
        </div>
      </section>

      <section style={{ width: "100%", padding: "64px 0", background: "rgb(245, 245, 245)" }}>
        <div ref={toolSuiteRef} style={{ maxWidth: "1536px", width: "100%", margin: "0 auto", padding: "0 48px", boxSizing: "border-box" }}>
          <div style={{ marginBottom: "48px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "16px" }}>
              <div style={{ display: "inline-block", width: "fit-content" }}>
                <span style={{ fontSize: "var(--fs-sm)", fontWeight: 400, letterSpacing: "0.96px", textTransform: "uppercase", color: "var(--label-blue-light)" }}>{t("full_analytics_suite", "Full Analytics Suite")}</span>
                <div style={{ width: "25%", height: "2px", background: "var(--label-blue-light)" }} />
              </div>
            </div>
            <h3 style={{ fontSize: "var(--fs-2xl)", fontWeight: 400, lineHeight: "var(--lh-2xl)", letterSpacing: "0.005em", color: "rgb(13, 27, 42)", margin: "0 0 32px" }}>{t("ae_suite_heading", "Every analytics tool your Investor Relations team needs")}</h3>
            <p style={{ fontSize: "var(--fs-base)", fontWeight: 400, lineHeight: "var(--lh-base)", letterSpacing: "0.01em", color: "rgb(58, 74, 88)", maxWidth: "480px", margin: 0 }}>{t("ae_suite_body", "From interactive earnings dashboards to consensus trackers and engagement analytics, all integrated, automated, and delivered through your Euroland IR platform.")}</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "24px" }}>
            {TOOL_CARDS.map((card, i) => (<ToolCard key={i} card={card} />))}
          </div>
        </div>
      </section>

      <section style={{ width: "100%", padding: "64px 0", backgroundImage: "linear-gradient(160deg, rgb(13, 27, 42), rgb(14, 45, 74) 60%, rgb(8, 43, 69))" }}>
        <div style={{ maxWidth: "1536px", width: "100%", margin: "0 auto", padding: "0 48px", boxSizing: "border-box", textAlign: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "16px", alignItems: "center" }}>
            <div style={{ display: "inline-block", width: "fit-content" }}>
              <span style={{ fontSize: "var(--fs-sm)", fontWeight: 400, letterSpacing: "0.96px", textTransform: "uppercase", color: "var(--label-blue-dark)" }}>{t("get_started", "Get Started")}</span>
              <div style={{ width: "25%", height: "2px", background: "var(--label-blue-dark)" }} />
            </div>
          </div>
          <h3 style={{ fontSize: "var(--fs-2xl)", fontWeight: 400, lineHeight: "var(--lh-2xl)", letterSpacing: "0.005em", color: "rgb(255, 255, 255)", maxWidth: "600px", margin: "0 auto 24px" }}>{t("ae_cta_heading", "See earnings analytics tools in action")}</h3>
          <p style={{ fontSize: "var(--fs-base)", fontWeight: 400, lineHeight: "var(--lh-base)", letterSpacing: "0.01em", color: "rgba(255, 255, 255, 0.7)", maxWidth: "480px", margin: "0 auto 32px" }}>{t("ae_cta_body", "Book a personalised demo and see how Euroland IR Analytics & Earnings can transform your results communications and investor engagement.")}</p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
            <LangLink href="/book-demo" className="btn-primary">{t("book_demo", "Book a Demo")}</LangLink>
            <LangLink href="/contact" className="btn-secondary">{t("contact_us", "Contact Us")}</LangLink>
          </div>
        </div>
      </section>
      <div style={{ height: "60px", background: "#fff" }} />
    </PageWrapper>
  );
}

