"use client";

/**
 * Investor Communications — Platform Sub-Page
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

function VideoPlaceholder({ label, height }: { label: string; height: number }) {
  return (
    <div style={{ width: "100%", height: `${height}px`, background: "rgb(13, 27, 42)", borderRadius: "12px", border: "1px solid rgba(0, 173, 240, 0.2)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "16px" }}>
      <div style={{ width: "56px", height: "56px", borderRadius: "50%", border: "2px solid rgb(0, 107, 163)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="rgb(0, 107, 163)"><polygon points="5 3 19 12 5 21 5 3" /></svg>
      </div>
      <p style={{ fontSize: "16px", fontWeight: 500, lineHeight: "24px", letterSpacing: "0.01em", color: "rgb(255, 255, 255)", margin: 0 }}>{label}</p>
    </div>
  );
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

export default function InvestorComms() {
  const { t } = useLanguage();
  const challengeRef = useFadeIn();
  const demoRef = useFadeIn();
  const toolSuiteRef = useFadeIn();

  const CHALLENGE_CARDS = [
    {
      icon: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#327AB1" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>),
      title: t("comms_challenge_1_title", "Inconsistent investor messaging"),
      desc: t("comms_challenge_1_desc", "Without a centralised communications platform, IR teams send inconsistent messages across email, website, and social channels — creating confusion and compliance risk."),
    },
    {
      icon: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#327AB1" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>),
      title: t("comms_challenge_2_title", "No multilingual IR capability"),
      desc: t("comms_challenge_2_desc", "Listed companies with international shareholder bases struggle to deliver consistent IR communications in multiple languages — limiting reach and investor engagement."),
    },
    {
      icon: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#327AB1" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>),
      title: t("comms_challenge_3_title", "Untracked investor outreach"),
      desc: t("comms_challenge_3_desc", "IR teams have no visibility into which investors received, opened, or acted on their communications — making it impossible to measure effectiveness or follow up strategically."),
    },
  ];

  const TOOL_CARDS = [
    { num: "01", title: t("comms_tool_1_title", "Investor Email Campaigns"), desc: t("comms_tool_1_desc", "Professionally designed, compliance-ready email campaigns for earnings releases, dividend announcements, and investor events — delivered directly to your shareholder database.") },
    { num: "02", title: t("comms_tool_2_title", "Regulatory News Distribution"), desc: t("comms_tool_2_desc", "Automated distribution of regulatory announcements to stock exchanges, news wires, and investor databases — ensuring simultaneous, compliant disclosure across all channels.") },
    { num: "03", title: t("comms_tool_3_title", "Multilingual IR Communications"), desc: t("comms_tool_3_desc", "Automated translation and localisation of all IR communications into 30+ languages — ensuring your investor messages reach international shareholders in their native language.") },
    { num: "04", title: t("comms_tool_4_title", "Investor Alert Subscriptions"), desc: t("comms_tool_4_desc", "A self-service investor alert system allowing shareholders to subscribe to specific announcement categories — share price alerts, results, dividends, and regulatory news.") },
    { num: "05", title: t("comms_tool_5_title", "AGM & Event Invitations"), desc: t("comms_tool_5_desc", "Structured invitation and registration workflows for AGMs, capital markets days, and investor roadshows — with automated reminders and attendance tracking.") },
    { num: "06", title: t("comms_tool_6_title", "Communications Analytics"), desc: t("comms_tool_6_desc", "Detailed open rates, click-through rates, and engagement metrics for every investor communication — giving your IR team the data to optimise future outreach.") },
    { num: "07", title: t("comms_tool_7_title", "Investor Database Management"), desc: t("comms_tool_7_desc", "A centralised, GDPR-compliant investor contact database — with segmentation tools, preference management, and automated list hygiene to keep your data accurate.") },
  ];

  return (
    <PageWrapper>
      <BannerHero
        variant="platform"
        label={t("comms_hero_label", "Investor Communications")}
        title={t("comms_hero_title", "Compliant investor communications, delivered at scale")}
        subtitle={t("comms_hero_subtitle", "Distribute regulatory announcements, earnings releases, and investor alerts across every channel — simultaneously, accurately, and in 30+ languages.")}
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
            <h3 style={{ fontSize: "40px", fontWeight: 400, lineHeight: "52px", letterSpacing: "0.005em", color: "rgb(13, 27, 42)", margin: "16px 0 16px" }}>{t("comms_challenge_heading", "IR communications must be accurate, timely, and global")}</h3>
            <p style={{ fontSize: "16px", fontWeight: 400, lineHeight: "24px", letterSpacing: "0.01em", color: "rgb(58, 74, 88)", maxWidth: "560px", margin: "0 auto" }}>{t("comms_challenge_body", "Regulatory disclosure requirements demand simultaneous distribution. International investor bases demand multilingual content. Euroland IR Investor Communications delivers both — automatically, at scale, and with full audit trail.")}</p>
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
            <VideoPlaceholder label={t("comms_demo_video_label", "Investor Communications — Live Demo")} height={387} />
            <div>
              <div style={{ marginBottom: "12px" }}>
                <div style={{ display: "inline-block" }}>
                  <span style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "0.96px", textTransform: "uppercase", color: "rgb(0, 107, 163)" }}>{t("comms_demo_label", "Communications Platform")}</span>
                  <div style={{ width: "25%", height: "2px", background: "rgb(0, 107, 163)", marginTop: "6px" }} />
                </div>
              </div>
              <h3 style={{ fontSize: "40px", fontWeight: 400, lineHeight: "52px", letterSpacing: "0.005em", color: "rgb(13, 27, 42)", margin: "0 0 24px" }}>{t("comms_demo_heading", "One platform for every investor communication channel")}</h3>
              <p style={{ fontSize: "16px", fontWeight: 400, lineHeight: "24px", letterSpacing: "0.01em", color: "rgb(58, 74, 88)", margin: "0 0 32px" }}>{t("comms_demo_body", "Euroland IR Investor Communications manages your entire outreach workflow — from regulatory announcement distribution to multilingual email campaigns and investor alert subscriptions. Every communication is tracked, archived, and available for compliance audit at any time.")}</p>
              <LangLink href="/book-demo" style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "0.96px", textTransform: "uppercase", color: "rgb(0, 107, 163)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}>{t("comms_demo_link", "See Investor Communications in action →")}</LangLink>
            </div>
          </div>
        </div>
      </section>

      <section style={{ width: "100%", padding: "80px 0", background: "rgb(245, 245, 245)" }}>
        <div ref={toolSuiteRef} style={{ maxWidth: "1536px", width: "100%", margin: "0 auto", padding: "0 48px", boxSizing: "border-box" }}>
          <div style={{ marginBottom: "48px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "16px" }}>
              <div style={{ display: "inline-block" }}>
                <span style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "0.96px", textTransform: "uppercase", color: "rgb(0, 107, 163)" }}>{t("full_comms_suite", "Full Communications Suite")}</span>
                <div style={{ width: "25%", height: "2px", background: "rgb(0, 107, 163)" }} />
              </div>
            </div>
            <h3 style={{ fontSize: "40px", fontWeight: 400, lineHeight: "52px", letterSpacing: "0.005em", color: "rgb(13, 27, 42)", margin: "0 0 24px" }}>{t("comms_suite_heading", "Every communications tool your IR programme needs")}</h3>
            <p style={{ fontSize: "16px", fontWeight: 400, lineHeight: "24px", letterSpacing: "0.01em", color: "rgb(58, 74, 88)", maxWidth: "480px", margin: 0 }}>{t("comms_suite_body", "From regulatory distribution to multilingual email campaigns and investor alert subscriptions — all managed, tracked, and archived in one compliant platform.")}</p>
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
          <h3 style={{ fontSize: "40px", fontWeight: 400, lineHeight: "52px", letterSpacing: "0.005em", color: "rgb(255, 255, 255)", maxWidth: "600px", margin: "0 auto 24px" }}>{t("comms_cta_heading", "See investor communications tools in action")}</h3>
          <p style={{ fontSize: "16px", fontWeight: 400, lineHeight: "24px", letterSpacing: "0.01em", color: "rgba(255, 255, 255, 0.7)", maxWidth: "480px", margin: "0 auto 40px" }}>{t("comms_cta_body", "Book a personalised demo and see how Euroland IR Investor Communications can streamline your disclosure workflow and expand your global investor reach.")}</p>
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
