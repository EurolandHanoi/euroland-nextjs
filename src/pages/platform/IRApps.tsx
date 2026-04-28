"use client";

/**
 * IR Apps — Platform Sub-Page
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

export default function IRApps() {
  const { t } = useLanguage();
  const challengeRef = useFadeIn();
  const demoRef = useFadeIn();
  const toolSuiteRef = useFadeIn();

  const CHALLENGE_CARDS = [
    {
      icon: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#327AB1" strokeWidth="1.5"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>),
      title: t("apps_challenge_1_title", "Fragmented investor touchpoints"),
      desc: t("apps_challenge_1_desc", "IR teams manage multiple disconnected channels — website, email, app, and alerts — with no unified layer to ensure consistent, real-time information delivery."),
    },
    {
      icon: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#327AB1" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>),
      title: t("apps_challenge_2_title", "Delayed mobile experiences"),
      desc: t("apps_challenge_2_desc", "Generic app platforms cannot deliver the real-time share price, regulatory news, and ownership data that institutional and retail investors expect on mobile."),
    },
    {
      icon: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#327AB1" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>),
      title: t("apps_challenge_3_title", "Low investor engagement"),
      desc: t("apps_challenge_3_desc", "Without push notifications, personalised watchlists, and interactive tools, IR apps fail to drive the repeat engagement that builds long-term investor relationships."),
    },
  ];

  const TOOL_CARDS = [
    { num: "01", title: t("apps_tool_1_title", "IR Mobile App (iOS & Android)"), desc: t("apps_tool_1_desc", "A fully branded investor relations app for iOS and Android, delivering live share price, financials, regulatory news, and company announcements directly to investors.") },
    { num: "02", title: t("apps_tool_2_title", "Push Notifications"), desc: t("apps_tool_2_desc", "Real-time push alerts for share price movements, earnings releases, dividend announcements, and regulatory filings — keeping investors informed the moment it matters.") },
    { num: "03", title: t("apps_tool_3_title", "Investor Watchlist"), desc: t("apps_tool_3_desc", "Personalised watchlist functionality allowing investors to track your company alongside peers, with custom price alerts and portfolio performance tracking.") },
    { num: "04", title: t("apps_tool_4_title", "Regulatory News Feed"), desc: t("apps_tool_4_desc", "A structured, real-time feed of all regulatory announcements, press releases, and financial reports — formatted for mobile and searchable by category and date.") },
    { num: "05", title: t("apps_tool_5_title", "Interactive Financial Charts"), desc: t("apps_tool_5_desc", "Embedded share price charts with peer comparison, time-range controls, and event markers — the same data quality as the desktop Share Graph, optimised for mobile.") },
    { num: "06", title: t("apps_tool_6_title", "Annual Report & Document Library"), desc: t("apps_tool_6_desc", "A searchable, categorised library of all IR documents — annual reports, presentations, prospectuses, and filings — accessible offline and shareable from within the app.") },
    { num: "07", title: t("apps_tool_7_title", "Investor Calendar & Events"), desc: t("apps_tool_7_desc", "A live calendar of upcoming IR events — earnings calls, AGMs, capital markets days, and roadshows — with one-tap registration and calendar sync.") },
  ];

  return (
    <PageWrapper>
      <BannerHero
        variant="platform"
        label={t("apps_hero_label", "IR App")}
        title={t("apps_hero_title", "Branded investor apps that keep shareholders engaged")}
        subtitle={t("apps_hero_subtitle", "Native iOS and Android apps, fully branded to your company — delivering live share data, regulatory news, and push notifications to your investors.")}
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
            <h3 style={{ fontSize: "40px", fontWeight: 400, lineHeight: "52px", letterSpacing: "0.005em", color: "rgb(13, 27, 42)", margin: "16px 0 16px" }}>{t("apps_challenge_heading", "Investors expect a mobile-first IR experience")}</h3>
            <p style={{ fontSize: "16px", fontWeight: 400, lineHeight: "24px", letterSpacing: "0.01em", color: "rgb(58, 74, 88)", maxWidth: "560px", margin: "0 auto" }}>{t("apps_challenge_body", "Most IR programmes still rely on desktop-first websites and email newsletters. Euroland IR Apps bring your investor relations programme to where your shareholders are — on their phones.")}</p>
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
            <div style={{ display: "flex", gap: "24px", justifyContent: "center", alignItems: "flex-end" }}>
              <img src="/hp03.png" alt="Euroland IR App — Dashboard" style={{ width: "48%", maxWidth: "280px", height: "auto", display: "block", filter: "drop-shadow(0 8px 32px rgba(0,0,0,0.18))" }} />
              <img src="/hp02.png" alt="Euroland IR App — Menu" style={{ width: "48%", maxWidth: "280px", height: "auto", display: "block", filter: "drop-shadow(0 8px 32px rgba(0,0,0,0.18))" }} />
            </div>
            <div>
              <div style={{ marginBottom: "12px" }}>
                <div style={{ display: "inline-block" }}>
                  <span style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "0.96px", textTransform: "uppercase", color: "rgb(0, 107, 163)" }}>{t("apps_demo_label", "IR Mobile App")}</span>
                  <div style={{ width: "25%", height: "2px", background: "rgb(0, 107, 163)", marginTop: "6px" }} />
                </div>
              </div>
              <h3 style={{ fontSize: "40px", fontWeight: 400, lineHeight: "52px", letterSpacing: "0.005em", color: "rgb(13, 27, 42)", margin: "0 0 24px" }}>{t("apps_demo_heading", "Your IR programme in the palm of every investor's hand")}</h3>
              <p style={{ fontSize: "16px", fontWeight: 400, lineHeight: "24px", letterSpacing: "0.01em", color: "rgb(58, 74, 88)", margin: "0 0 32px" }}>{t("apps_demo_body", "Euroland IR Apps are native iOS and Android applications, fully branded to your company identity. They deliver live share price data, financial results, regulatory announcements, and push notifications — all connected to your Euroland IR data layer and updated automatically.")}</p>
              <LangLink href="/book-demo" style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "0.96px", textTransform: "uppercase", color: "rgb(0, 107, 163)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}>{t("apps_demo_link", "See IR Apps in action →")}</LangLink>
            </div>
          </div>
        </div>
      </section>

      <section style={{ width: "100%", padding: "80px 0", background: "rgb(245, 245, 245)" }}>
        <div ref={toolSuiteRef} style={{ maxWidth: "1536px", width: "100%", margin: "0 auto", padding: "0 48px", boxSizing: "border-box" }}>
          <div style={{ marginBottom: "48px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "16px" }}>
              <div style={{ display: "inline-block" }}>
                <span style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "0.96px", textTransform: "uppercase", color: "rgb(0, 107, 163)" }}>{t("full_app_suite", "Full App Suite")}</span>
                <div style={{ width: "25%", height: "2px", background: "rgb(0, 107, 163)" }} />
              </div>
            </div>
            <h3 style={{ fontSize: "40px", fontWeight: 400, lineHeight: "52px", letterSpacing: "0.005em", color: "rgb(13, 27, 42)", margin: "0 0 24px" }}>{t("apps_suite_heading", "Every feature your IR app needs")}</h3>
            <p style={{ fontSize: "16px", fontWeight: 400, lineHeight: "24px", letterSpacing: "0.01em", color: "rgb(58, 74, 88)", maxWidth: "480px", margin: 0 }}>{t("apps_suite_body", "From live share price charts to push notifications and document libraries — all built, hosted, and maintained by Euroland IR.")}</p>
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
          <h3 style={{ fontSize: "40px", fontWeight: 400, lineHeight: "52px", letterSpacing: "0.005em", color: "rgb(255, 255, 255)", maxWidth: "600px", margin: "0 auto 24px" }}>{t("apps_cta_heading", "See your branded IR app in action")}</h3>
          <p style={{ fontSize: "16px", fontWeight: 400, lineHeight: "24px", letterSpacing: "0.01em", color: "rgba(255, 255, 255, 0.7)", maxWidth: "480px", margin: "0 auto 40px" }}>{t("apps_cta_body", "Book a personalised demo and see how a branded Euroland IR App can transform your investor engagement programme.")}</p>
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
