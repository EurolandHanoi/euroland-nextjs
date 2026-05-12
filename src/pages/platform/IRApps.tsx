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
      <span style={{ fontSize: "var(--fs-sm)", fontWeight: 500, color: "#0074D9", letterSpacing: "1.44px", textTransform: "uppercase" as const }}>{card.num}</span>
      <h5 style={{ fontSize: "var(--fs-lg)", fontWeight: 500, lineHeight: "var(--lh-lg)", letterSpacing: "0.005em", color: "rgb(13, 27, 42)", margin: 0 }}>{card.title}</h5>
      <p style={{ fontSize: "var(--fs-sm)", fontWeight: 400, lineHeight: "var(--lh-base)", letterSpacing: "0.01em", color: "rgb(58, 74, 88)", margin: 0 }}>{card.desc}</p>
    </div>
  );
}

export default function IRApps() {
  const { t } = useLanguage();
  const challengeRef = useFadeIn();
  const demoRef = useFadeIn();
  const toolSuiteRef = useFadeIn();
  const TOOL_CARDS = [
    { num: "01", title: t("apps_tool_1_title", "Native IR App (iOS & Android)"), desc: t("apps_tool_1_desc", "A native investor relations app for iOS and Android that notifies investors about new events and delivers data directly to investors, shareholders, analysts, and other stakeholders.") },
    { num: "02", title: t("apps_tool_2_title", "Push Notifications"), desc: t("apps_tool_2_desc", "Real-time push alerts for share price movements, earnings releases, dividend announcements, and regulatory filings, keeping investors informed the moment it matters.") },
    { num: "03", title: t("apps_tool_3_title", "Investor Watchlist"), desc: t("apps_tool_3_desc", "Personalised watchlist functionality allowing investors to track your company alongside peers, with custom price alerts and portfolio performance tracking.") },
    { num: "04", title: t("apps_tool_4_title", "Regulatory News Feed"), desc: t("apps_tool_4_desc", "A structured, real-time feed of all regulatory announcements, press releases, and financial reports, formatted for mobile and searchable by category and date.") },
    { num: "05", title: t("apps_tool_5_title", "Interactive Financial Charts"), desc: t("apps_tool_5_desc", "Embedded share price charts with peer comparison, time-range controls, and event markers, with the same data quality as the desktop Share Graph and optimised for mobile.") },
    { num: "06", title: t("apps_tool_6_title", "Annual Report & Document Library"), desc: t("apps_tool_6_desc", "A searchable, categorised library of all IR documents, including annual reports, presentations, prospectuses, and filings, accessible offline and shareable from within the app.") },
    { num: "07", title: t("apps_tool_7_title", "Investor Calendar & Events"), desc: t("apps_tool_7_desc", "A live calendar of upcoming IR events, including earnings calls, AGMs, capital markets days, and roadshows, with one-tap registration and calendar sync.") },
  ];

  return (
    <PageWrapper>
      <BannerHero
        variant="platform"
        label={t("apps_hero_label", "IR App")}
        title={t("apps_hero_title", "Branded investor apps that keep shareholders engaged")}
        subtitle={t("apps_hero_subtitle", "Native iOS and Android apps, fully branded to your company, delivering live share data, regulatory news, and push notifications to your investors.")}
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
            <h3 style={{ fontSize: "var(--fs-2xl)", fontWeight: 400, lineHeight: "var(--lh-2xl)", letterSpacing: "0.005em", color: "rgb(13, 27, 42)", margin: "16px 0 16px" }}>{t("apps_challenge_heading", "Investors expect a mobile-first IR experience")}</h3>
            <p style={{ fontSize: "var(--fs-base)", fontWeight: 400, lineHeight: "var(--lh-base)", letterSpacing: "0.01em", color: "rgb(58, 74, 88)", maxWidth: "560px", margin: "0 auto" }}>{t("apps_challenge_body", "Euroland IR Apps bring your Investor Relations presence to where your shareholders are, on their phones.")}</p>
          </div>
        </div>
      </section>

      <section style={{ width: "100%", padding: "64px 0", background: "#ffffff" }}>
        <div ref={demoRef} style={{ maxWidth: "1536px", width: "100%", margin: "0 auto", padding: "0 48px", boxSizing: "border-box" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>
            <div style={{ display: "flex", gap: "24px", justifyContent: "center", alignItems: "flex-end" }}>
              <img src="/hp03.png" alt="Euroland IR App, Dashboard" style={{ width: "48%", maxWidth: "280px", height: "auto", display: "block", filter: "drop-shadow(0 8px 32px rgba(0,0,0,0.18))" }} />
              <img src="/hp02.png" alt="Euroland IR App, Menu" style={{ width: "48%", maxWidth: "280px", height: "auto", display: "block", filter: "drop-shadow(0 8px 32px rgba(0,0,0,0.18))" }} />
            </div>
            <div>
              <div style={{ marginBottom: "16px" }}>
                <div style={{ display: "inline-block", width: "fit-content" }}>
                  <span style={{ fontSize: "var(--fs-sm)", fontWeight: 400, letterSpacing: "0.96px", textTransform: "uppercase", color: "var(--label-blue-light)" }}>{t("apps_demo_label", "Native IR App")}</span>
                  <div style={{ width: "25%", height: "2px", background: "var(--label-blue-light)", marginTop: "16px" }} />
                </div>
              </div>
              <h3 style={{ fontSize: "var(--fs-2xl)", fontWeight: 400, lineHeight: "var(--lh-2xl)", letterSpacing: "0.005em", color: "rgb(13, 27, 42)", margin: "0 0 32px" }}>{t("apps_demo_heading", "Investor Relations in the palm of every investor's hand")}</h3>
              <p style={{ fontSize: "var(--fs-base)", fontWeight: 400, lineHeight: "var(--lh-base)", letterSpacing: "0.01em", color: "rgb(58, 74, 88)", margin: "0 0 32px" }}>{t("apps_demo_body", "Euroland IR Apps are native iOS and Android applications, fully branded to your company identity. They deliver live share price data, financial results, regulatory announcements, and push notifications, all connected to your Euroland IR data layer and updated automatically.")}</p>
              <LangLink href="/book-demo" style={{ fontSize: "var(--fs-sm)", fontWeight: 500, letterSpacing: "0.96px", textTransform: "uppercase", color: "#0074D9", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}>{t("apps_demo_link", "See IR Apps in action →")}</LangLink>
            </div>
          </div>
        </div>
      </section>

      <section style={{ width: "100%", padding: "64px 0", background: "rgb(245, 245, 245)" }}>
        <div ref={toolSuiteRef} style={{ maxWidth: "1536px", width: "100%", margin: "0 auto", padding: "0 48px", boxSizing: "border-box" }}>
          <div style={{ marginBottom: "48px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "16px" }}>
              <div style={{ display: "inline-block", width: "fit-content" }}>
                <span style={{ fontSize: "var(--fs-sm)", fontWeight: 400, letterSpacing: "0.96px", textTransform: "uppercase", color: "var(--label-blue-light)" }}>{t("full_app_suite", "Full App Suite")}</span>
                <div style={{ width: "25%", height: "2px", background: "var(--label-blue-light)" }} />
              </div>
            </div>
            <h3 style={{ fontSize: "var(--fs-2xl)", fontWeight: 400, lineHeight: "var(--lh-2xl)", letterSpacing: "0.005em", color: "rgb(13, 27, 42)", margin: "0 0 32px" }}>{t("apps_suite_heading", "Every feature your IR app needs")}</h3>
            <p style={{ fontSize: "var(--fs-base)", fontWeight: 400, lineHeight: "var(--lh-base)", letterSpacing: "0.01em", color: "rgb(58, 74, 88)", maxWidth: "480px", margin: 0 }}>{t("apps_suite_body", "From live share price charts to push notifications and document libraries, all built, hosted, and maintained by Euroland IR.")}</p>
            <p style={{ fontSize: "var(--fs-base)", fontWeight: 400, lineHeight: "var(--lh-base)", letterSpacing: "0.01em", color: "rgb(58, 74, 88)", margin: "16px 0 0" }}>{t("apps_suite_more", "And so much more")}</p>
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
          <h3 style={{ fontSize: "var(--fs-2xl)", fontWeight: 400, lineHeight: "var(--lh-2xl)", letterSpacing: "0.005em", color: "rgb(255, 255, 255)", maxWidth: "600px", margin: "0 auto 24px" }}>{t("apps_cta_heading", "Explore the native IR app")}</h3>
          <p style={{ fontSize: "var(--fs-base)", fontWeight: 400, lineHeight: "var(--lh-base)", letterSpacing: "0.01em", color: "rgba(255, 255, 255, 0.7)", maxWidth: "480px", margin: "0 auto 32px" }}>{t("apps_cta_body", "Book a personalised demo and see how a Euroland IR App can transform your investor engagement programme.")}</p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
            <LangLink href="/book-demo" className="btn-primary">{t("book_demo", "Book a Demo")}</LangLink>
          </div>
        </div>
      </section>
      <div style={{ height: "60px", background: "#fff" }} />
    </PageWrapper>
  );
}

