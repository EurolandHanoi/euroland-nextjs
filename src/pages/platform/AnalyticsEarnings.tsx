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
      <span style={{ fontSize: "12px", fontWeight: 500, color: "rgb(0, 107, 163)", letterSpacing: "1.44px", textTransform: "uppercase" as const }}>{card.num}</span>
      <h5 style={{ fontSize: "24px", fontWeight: 500, lineHeight: "32px", letterSpacing: "0.005em", color: "rgb(13, 27, 42)", margin: 0 }}>{card.title}</h5>
      <p style={{ fontSize: "12px", fontWeight: 400, lineHeight: "24px", letterSpacing: "0.01em", color: "rgb(58, 74, 88)", margin: 0 }}>{card.desc}</p>
    </div>
  );
}

const btnPrimary: React.CSSProperties = { display: "inline-block", padding: "12px 28px", background: "rgb(0, 107, 163)", color: "#ffffff", fontSize: "12px", fontWeight: 500, letterSpacing: "0.96px", textTransform: "uppercase", borderRadius: "24px", cursor: "pointer", textDecoration: "none", border: "none", height: "50px", lineHeight: "26px", boxSizing: "border-box" };
const btnOutline: React.CSSProperties = { display: "inline-block", padding: "12px 28px", background: "transparent", color: "#ffffff", fontSize: "12px", fontWeight: 500, letterSpacing: "0.96px", textTransform: "uppercase", borderRadius: "24px", cursor: "pointer", textDecoration: "none", border: "1px solid rgba(255, 255, 255, 0.4)", height: "50px", lineHeight: "26px", boxSizing: "border-box" };

export default function AnalyticsEarnings() {
  const { t } = useLanguage();
  const challengeRef = useFadeIn();
  const demoRef = useFadeIn();
  const toolSuiteRef = useFadeIn();

  const CHALLENGE_CARDS = [
    {
      icon: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#327AB1" strokeWidth="1.5"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>),
      title: t("ae_challenge_1_title", "Earnings data buried in PDFs"),
      desc: t("ae_challenge_1_desc", "Financial results are published as static PDF documents, making it impossible for investors to interact with the data, compare periods, or build their own models in real time."),
    },
    {
      icon: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#327AB1" strokeWidth="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>),
      title: t("ae_challenge_2_title", "No visibility into investor behaviour"),
      desc: t("ae_challenge_2_desc", "IR teams have no insight into which analysts are engaging with results, which pages are being read, or how investors are responding to earnings disclosures in real time."),
    },
    {
      icon: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#327AB1" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>),
      title: t("ae_challenge_3_title", "Fragmented reporting workflows"),
      desc: t("ae_challenge_3_desc", "Earnings preparation spans multiple tools — Excel models, presentation software, webcast platforms, and IR platforms — creating version control risks and last-minute errors."),
    },
  ];

  const TOOL_CARDS = [
    { num: "01", title: t("ae_tool_1_title", "Interactive Earnings Dashboard"), desc: t("ae_tool_1_desc", "A live, interactive earnings dashboard that transforms your results announcement into a structured, navigable experience — with charts, KPIs, and segment breakdowns.") },
    { num: "02", title: t("ae_tool_2_title", "Consensus Estimates Tracker"), desc: t("ae_tool_2_desc", "Real-time consensus estimates from leading financial data providers, displayed alongside your actual results — giving investors instant context for performance assessment.") },
    { num: "03", title: t("ae_tool_3_title", "Financial Model Builder"), desc: t("ae_tool_3_desc", "An interactive financial model tool that allows analysts and investors to build and stress-test their own projections directly from your published financial data.") },
    { num: "04", title: t("ae_tool_4_title", "Earnings Webcast Integration"), desc: t("ae_tool_4_desc", "Seamless integration with Euroland IR's webcast platform — embedding live and on-demand earnings calls directly within your results page for a unified investor experience.") },
    { num: "05", title: t("ae_tool_5_title", "Analyst Coverage Tracker"), desc: t("ae_tool_5_desc", "A structured, up-to-date directory of analyst coverage — including target prices, ratings, and report summaries — maintained automatically from your IR data layer.") },
    { num: "06", title: t("ae_tool_6_title", "Results Archive & Comparisons"), desc: t("ae_tool_6_desc", "A searchable archive of all historical results, with side-by-side period comparisons, trend charts, and downloadable data tables for in-depth financial analysis.") },
    { num: "07", title: t("ae_tool_7_title", "Earnings Engagement Analytics"), desc: t("ae_tool_7_desc", "Detailed analytics on investor engagement with your results pages — page views, time on page, document downloads, and webcast attendance — delivered to your IR team.") },
  ];

  return (
    <PageWrapper>
      <BannerHero
        variant="platform"
        label={t("ae_hero_label", "Analytics & Earnings")}
        title={t("ae_hero_title", "Interactive earnings and analytics that investors trust")}
        subtitle={t("ae_hero_subtitle", "Transform your results announcements into live, interactive experiences — with real-time consensus data, financial model tools, and engagement analytics for your IR team.")}
        primaryCtaLabel={t("book_demo", "Book a Demo")}
        primaryCtaHref="/book-demo"
        secondaryCtaLabel={t("see_it_live", "See It Live")}
        secondaryCtaHref="/contact"
        titleMaxWidth="720px"
        subtitleMaxWidth="560px"
      />

      <section style={{ width: "100%", padding: "80px 0", background: "rgb(245, 245, 245)" }}>
        <div ref={challengeRef} style={{ maxWidth: "1536px", width: "100%", margin: "0 auto", padding: "0 48px", boxSizing: "border-box" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div style={{ display: "inline-block" }}>
              <span style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "0.96px", textTransform: "uppercase", color: "rgb(0, 107, 163)" }}>{t("the_challenge", "The Challenge")}</span>
              <div style={{ width: "25%", height: "2px", background: "rgb(0, 107, 163)", marginTop: "8px" }} />
            </div>
            <h3 style={{ fontSize: "40px", fontWeight: 400, lineHeight: "52px", letterSpacing: "0.005em", color: "rgb(13, 27, 42)", margin: "16px 0 16px" }}>{t("ae_challenge_heading", "Earnings data is only valuable when it's interactive")}</h3>
            <p style={{ fontSize: "16px", fontWeight: 400, lineHeight: "24px", letterSpacing: "0.01em", color: "rgb(58, 74, 88)", maxWidth: "560px", margin: "0 auto" }}>{t("ae_challenge_body", "Static PDF results and disconnected webcast tools create friction for investors and blind spots for IR teams. Euroland IR Analytics & Earnings replaces the PDF with a live, structured, and trackable results experience.")}</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "24px" }}>
            {CHALLENGE_CARDS.map((card, i) => (
              <div key={i} style={{ height: "246px", padding: "40px", background: "#ffffff", border: "1px solid rgb(221, 224, 230)", borderRadius: "16px", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "16px", boxShadow: "rgba(13, 27, 42, 0.07) 0px 1px 3px 0px, rgba(13, 27, 42, 0.05) 0px 4px 12px 0px" }}>
                <div>{card.icon}</div>
                <h5 style={{ fontSize: "24px", fontWeight: 500, lineHeight: "32px", letterSpacing: "0.005em", color: "rgb(13, 27, 42)", margin: 0 }}>{card.title}</h5>
                <p style={{ fontSize: "12px", fontWeight: 400, lineHeight: "24px", letterSpacing: "0.01em", color: "rgb(58, 74, 88)", margin: 0 }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ width: "100%", padding: "80px 0", background: "#ffffff" }}>
        <div ref={demoRef} style={{ maxWidth: "1536px", width: "100%", margin: "0 auto", padding: "0 48px", boxSizing: "border-box" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>
            <div style={{ width: "100%", height: "387px", background: "rgb(13, 27, 42)", borderRadius: "12px", border: "1px solid rgba(0, 173, 240, 0.2)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "16px" }}>
              <div style={{ width: "56px", height: "56px", borderRadius: "50%", border: "2px solid rgb(0, 107, 163)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="rgb(0, 107, 163)"><polygon points="5 3 19 12 5 21 5 3" /></svg>
              </div>
              <p style={{ fontSize: "16px", fontWeight: 500, color: "#fff", margin: 0 }}>{t("ae_demo_video_label", "Earnings Dashboard — Live Demo")}</p>
            </div>
            <div>
              <div style={{ marginBottom: "12px" }}>
                <div style={{ display: "inline-block" }}>
                  <span style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "0.96px", textTransform: "uppercase", color: "rgb(0, 107, 163)" }}>{t("ae_demo_label", "Interactive Earnings")}</span>
                  <div style={{ width: "25%", height: "2px", background: "rgb(0, 107, 163)", marginTop: "6px" }} />
                </div>
              </div>
              <h3 style={{ fontSize: "40px", fontWeight: 400, lineHeight: "52px", letterSpacing: "0.005em", color: "rgb(13, 27, 42)", margin: "0 0 24px" }}>{t("ae_demo_heading", "Results pages that analysts and investors actually use")}</h3>
              <p style={{ fontSize: "16px", fontWeight: 400, lineHeight: "24px", letterSpacing: "0.01em", color: "rgb(58, 74, 88)", margin: "0 0 32px" }}>{t("ae_demo_body", "Euroland IR transforms your earnings announcement into a structured, interactive results page — with live KPI dashboards, consensus comparison charts, segment breakdowns, and integrated webcast replay. Published automatically on results day, with no manual intervention required.")}</p>
              <LangLink href="/book-demo" style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "0.96px", textTransform: "uppercase", color: "rgb(0, 107, 163)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}>{t("ae_demo_link", "See Analytics & Earnings in action →")}</LangLink>
            </div>
          </div>
        </div>
      </section>

      <section style={{ width: "100%", padding: "80px 0", background: "rgb(245, 245, 245)" }}>
        <div ref={toolSuiteRef} style={{ maxWidth: "1536px", width: "100%", margin: "0 auto", padding: "0 48px", boxSizing: "border-box" }}>
          <div style={{ marginBottom: "48px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "16px" }}>
              <div style={{ display: "inline-block" }}>
                <span style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "0.96px", textTransform: "uppercase", color: "rgb(0, 107, 163)" }}>{t("full_analytics_suite", "Full Analytics Suite")}</span>
                <div style={{ width: "25%", height: "2px", background: "rgb(0, 107, 163)" }} />
              </div>
            </div>
            <h3 style={{ fontSize: "40px", fontWeight: 400, lineHeight: "52px", letterSpacing: "0.005em", color: "rgb(13, 27, 42)", margin: "0 0 24px" }}>{t("ae_suite_heading", "Every analytics tool your IR programme needs")}</h3>
            <p style={{ fontSize: "16px", fontWeight: 400, lineHeight: "24px", letterSpacing: "0.01em", color: "rgb(58, 74, 88)", maxWidth: "480px", margin: 0 }}>{t("ae_suite_body", "From interactive earnings dashboards to consensus trackers and engagement analytics — all integrated, automated, and delivered through your Euroland IR platform.")}</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "24px" }}>
            {TOOL_CARDS.map((card, i) => (<ToolCard key={i} card={card} />))}
          </div>
        </div>
      </section>

      <section style={{ width: "100%", padding: "80px 0", backgroundImage: "linear-gradient(160deg, rgb(13, 27, 42), rgb(14, 45, 74) 60%, rgb(8, 43, 69))" }}>
        <div style={{ maxWidth: "1536px", width: "100%", margin: "0 auto", padding: "0 48px", boxSizing: "border-box", textAlign: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "16px", alignItems: "center" }}>
            <div style={{ display: "inline-block" }}>
              <span style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "0.96px", textTransform: "uppercase", color: "rgb(0, 107, 163)" }}>{t("get_started", "Get Started")}</span>
              <div style={{ width: "25%", height: "2px", background: "rgb(0, 107, 163)" }} />
            </div>
          </div>
          <h3 style={{ fontSize: "40px", fontWeight: 400, lineHeight: "52px", letterSpacing: "0.005em", color: "rgb(255, 255, 255)", maxWidth: "600px", margin: "0 auto 24px" }}>{t("ae_cta_heading", "See earnings analytics tools in action")}</h3>
          <p style={{ fontSize: "16px", fontWeight: 400, lineHeight: "24px", letterSpacing: "0.01em", color: "rgba(255, 255, 255, 0.7)", maxWidth: "480px", margin: "0 auto 40px" }}>{t("ae_cta_body", "Book a personalised demo and see how Euroland IR Analytics & Earnings can transform your results communications and investor engagement.")}</p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
            <LangLink href="/book-demo"><span style={btnPrimary}>{t("book_demo", "Book a Demo")}</span></LangLink>
            <LangLink href="/contact"><span style={btnOutline}>{t("contact_us", "Contact Us")}</span></LangLink>
          </div>
        </div>
      </section>
      <div style={{ height: "60px", background: "#fff" }} />
    </PageWrapper>
  );
}
