"use client";

/**
 * Stock & Financial Data — Platform Sub-Page
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

export default function StockData() {
  const { t } = useLanguage();
  const challengeRef = useFadeIn();
  const shareGraphRef = useFadeIn();
  const toolSuiteRef = useFadeIn();

  const CHALLENGE_CARDS = [
    {
      icon: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#327AB1" strokeWidth="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>),
      title: t("stock_challenge_1_title", "Stale or inaccurate share data"),
      desc: t("stock_challenge_1_desc", "IR platforms often rely on delayed or manually updated data feeds, creating discrepancies that erode investor confidence."),
    },
    {
      icon: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#327AB1" strokeWidth="1.5"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>),
      title: t("stock_challenge_2_title", "Fragmented data from multiple vendors"),
      desc: t("stock_challenge_2_desc", "Managing separate providers for share price, ownership data, and financials creates integration complexity and data inconsistency."),
    },
    {
      icon: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#327AB1" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>),
      title: t("stock_challenge_3_title", "Limited shareholder visibility"),
      desc: t("stock_challenge_3_desc", "Without a consolidated view of major shareholders and insider movements, IR teams lack the intelligence needed for effective engagement."),
    },
  ];

  const TOOL_CARDS = [
    { num: "01", title: t("stock_tool_1_title", "Share Graph & Share Graph Monitor"), desc: t("stock_tool_1_desc", "Interactive historical share price charts with peer comparison, time-range controls, and event markers. The Share Graph Monitor provides real-time intraday tracking with customisable alerts.") },
    { num: "02", title: t("stock_tool_2_title", "Share Price Ticker & Look-Up"), desc: t("stock_tool_2_desc", "Live share price ticker for embedding across your IR platform, plus a full Share Price Look-Up tool allowing investors to retrieve historical closing prices for any date range.") },
    { num: "03", title: t("stock_tool_3_title", "Share Series"), desc: t("stock_tool_3_desc", "Display and compare multiple share classes side by side — essential for companies with dual-class structures or multiple listed instruments.") },
    { num: "04", title: t("stock_tool_4_title", "Investment Calculator"), desc: t("stock_tool_4_desc", "An interactive tool that lets investors calculate the current value of a historical investment, including reinvested dividends — a powerful engagement tool for long-term shareholders.") },
    { num: "05", title: t("stock_tool_5_title", "Total Shareholder Return (Dividend)"), desc: t("stock_tool_5_desc", "Visualise and communicate total shareholder return including dividend reinvestment over any time period, benchmarked against peers and indices.") },
    { num: "06", title: t("stock_tool_6_title", "Major Shareholders & Insider Register"), desc: t("stock_tool_6_desc", "A live, structured view of your major shareholders and insider holdings — sourced from regulatory filings and updated automatically as new disclosures are made.") },
    { num: "07", title: t("stock_tool_7_title", "Market Overview"), desc: t("stock_tool_7_desc", "A broad market context panel showing sector performance, index movements, and peer comparisons — giving investors the context they need to evaluate your company's position.") },
  ];

  return (
    <PageWrapper>
      <BannerHero
        variant="platform"
        label={t("stock_hero_label", "Stock & Financial Data")}
        title={t("stock_hero_title", "Real-time financial data for investor relations")}
        subtitle={t("stock_hero_subtitle", "Live share prices, key financials, analyst consensus, and ownership analytics — delivered in real time across your IR platform, apps, and investor alerts.")}
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
            <h3 style={{ fontSize: "40px", fontWeight: 400, lineHeight: "52px", letterSpacing: "0.005em", color: "rgb(13, 27, 42)", margin: "16px 0 16px" }}>{t("stock_challenge_heading", "IR data is only valuable when it's accurate, timely, and complete")}</h3>
            <p style={{ fontSize: "16px", fontWeight: 400, lineHeight: "24px", letterSpacing: "0.01em", color: "rgb(58, 74, 88)", maxWidth: "560px", margin: "0 auto" }}>{t("stock_challenge_body", "Most IR teams struggle with fragmented data sources, manual updates, and tools that weren't built for investor relations. Euroland IR solves this with a single, fully managed data layer.")}</p>
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
        <div ref={shareGraphRef} style={{ maxWidth: "1536px", width: "100%", margin: "0 auto", padding: "0 48px", boxSizing: "border-box" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>
            <div style={{ width: "1fr", height: "387px", borderRadius: "12px", overflow: "hidden", background: "#000" }}>
              <video autoPlay muted playsInline style={{ width: "100%", height: "100%", objectFit: "cover" }}>
                <source src="/share-graph-demo.mp4" type="video/mp4" />
              </video>
            </div>
            <div>
              <div style={{ marginBottom: "12px" }}>
                <div style={{ display: "inline-block" }}>
                  <span style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "0.96px", textTransform: "uppercase", color: "rgb(0, 107, 163)" }}>{t("stock_graph_label", "Share Graph")}</span>
                  <div style={{ width: "25%", height: "2px", background: "rgb(0, 107, 163)", marginTop: "6px" }} />
                </div>
              </div>
              <h3 style={{ fontSize: "40px", fontWeight: 400, lineHeight: "52px", letterSpacing: "0.005em", color: "rgb(13, 27, 42)", margin: "0 0 24px" }}>{t("stock_graph_heading", "Interactive share price charts that tell your equity story")}</h3>
              <p style={{ fontSize: "16px", fontWeight: 400, lineHeight: "24px", letterSpacing: "0.01em", color: "rgb(58, 74, 88)", margin: "0 0 32px" }}>{t("stock_graph_body", "The Euroland Share Graph is one of the most widely deployed IR data tools in Europe. It delivers live and historical share price data with peer comparison, event markers, and time-range controls — all embedded seamlessly into your IR platform.")}</p>
              <LangLink href="/book-demo" style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "0.96px", textTransform: "uppercase", color: "rgb(0, 107, 163)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}>{t("stock_graph_link", "See Share Graph in action →")}</LangLink>
            </div>
          </div>
        </div>
      </section>

      <section style={{ width: "100%", padding: "80px 0", background: "rgb(245, 245, 245)" }}>
        <div ref={toolSuiteRef} style={{ maxWidth: "1536px", width: "100%", margin: "0 auto", padding: "0 48px", boxSizing: "border-box" }}>
          <div style={{ marginBottom: "48px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "16px" }}>
              <div style={{ display: "inline-block" }}>
                <span style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "0.96px", textTransform: "uppercase", color: "rgb(0, 107, 163)" }}>{t("full_tool_suite", "Full Tool Suite")}</span>
                <div style={{ width: "25%", height: "2px", background: "rgb(0, 107, 163)" }} />
              </div>
            </div>
            <h3 style={{ fontSize: "40px", fontWeight: 400, lineHeight: "52px", letterSpacing: "0.005em", color: "rgb(13, 27, 42)", margin: "0 0 24px" }}>{t("stock_suite_heading", "Every data tool your IR programme needs")}</h3>
            <p style={{ fontSize: "16px", fontWeight: 400, lineHeight: "24px", letterSpacing: "0.01em", color: "rgb(58, 74, 88)", maxWidth: "480px", margin: 0 }}>{t("stock_suite_body", "From live share price widgets to ownership analytics and market intelligence — all sourced, managed, and delivered by Euroland IR.")}</p>
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
          <h3 style={{ fontSize: "40px", fontWeight: 400, lineHeight: "52px", letterSpacing: "0.005em", color: "rgb(255, 255, 255)", maxWidth: "600px", margin: "0 auto 24px" }}>{t("stock_cta_heading", "See financial data tools in action")}</h3>
          <p style={{ fontSize: "16px", fontWeight: 400, lineHeight: "24px", letterSpacing: "0.01em", color: "rgba(255, 255, 255, 0.7)", maxWidth: "480px", margin: "0 auto 40px" }}>{t("stock_cta_body", "Book a personalised demo and see how Euroland IR's data tools can transform your investor relations website.")}</p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
            <LangLink href="/book-demo" style={btnPrimary}>{t("book_demo", "Book a Demo")}</LangLink>
            <LangLink href="/contact" style={btnOutline}>{t("contact_us", "Contact Us")}</LangLink>
          </div>
        </div>
      </section>
      <div style={{ height: "60px", background: "#fff" }} />
    </PageWrapper>
  );
}
