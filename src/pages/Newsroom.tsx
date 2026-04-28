"use client";

/**
 * NEWSROOM PAGE — Euroland IR
 * Matches Netlify layout exactly:
 * hero → tab filter → Events & Highlights (gallery) → Upcoming Events →
 * Press Releases → Media Coverage → Newsletter → Press Contact CTA
 */
import { useEffect, useRef } from "react";
import Link from "next/link";
import LangLink from "@/components/LangLink";
import { PageWrapper } from "@/components/Layout";
import { Image as ImageIcon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type TFunction = (key: string, fallback?: string) => string;

function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } }, { threshold: 0.1 });
    obs.observe(el); return () => obs.disconnect();
  }, []);
  return ref;
}

function getGalleryItems(t: TFunction) {
  return [
    { tag: "CONFERENCE", title: t("newsroom_euroland_ir_annual_conference_2025", "Euroland IR Annual Conference 2025") },
    { tag: "AWARDS", title: t("newsroom_ir_excellence_awards_reception", "IR Excellence Awards Reception") },
    { tag: "PRODUCT SHOWCASE", title: t("newsroom_platform_demo_sessions_hands_on_workshops", "Platform Demo Sessions & Hands-On Workshops") },
    { tag: "WORKSHOP", title: t("newsroom_investor_communications_workshop", "Investor Communications Workshop") },
    { tag: "INVESTOR EVENT", title: t("newsroom_investor_event_recap", "Investor Event Recap") },
    { tag: "FORUM", title: t("newsroom_esg_reporting_forum", "ESG & Reporting Forum") },
  ];
}

function getEvents(t: TFunction) {
  return [
    { date: "25 MAR", type: "WEBINAR", title: t("newsroom_ai_for_ir_a_practical_guide_for_listed_companies", "AI for IR: a practical guide for listed companies"), location: "Online" },
    { date: "8 APR", type: "CONFERENCE", title: t("newsroom_ir_magazine_europe_awards_2026", "IR Magazine Europe Awards 2026"), location: "London, UK" },
    { date: "22 APR", type: "WORKSHOP", title: t("newsroom_best_practice_ir_website_workshop", "Best Practice IR Platform Workshop"), location: "Copenhagen, Denmark" },
    { date: "15 MAY", type: "CONFERENCE", title: t("newsroom_niri_annual_conference_2026", "NIRI Annual Conference 2026"), location: "Chicago, USA" },
  ];
}

function getPressReleases(t: TFunction) {
  return [
    { date: "12 Mar 2026", title: t("newsroom_euroland_ir_expands_best_practice_platform_with_new_ai_disclosure_tools", "Euroland IR expands best-practice platform with new AI disclosure tools"), excerpt: t("newsroom_new_ai_assisted_drafting_and_disclosure_management_capabilities", "New AI-assisted drafting and disclosure management capabilities now available to all 1,400+ listed clients.") },
    { date: "5 Mar 2026", title: t("newsroom_euroland_ir_announces_partnership_with_leading_nordic_stock_exchange", "Euroland IR announces partnership with leading Nordic stock exchange"), excerpt: t("newsroom_strategic_partnership_to_deliver_enhanced_real_time_data_and_compliance_tools", "Strategic partnership to deliver enhanced real-time data and compliance tools for Nordic-listed companies.") },
    { date: "21 Feb 2026", title: t("newsroom_euroland_ir_wins_ir_magazine_award_for_best_digital_ir_innovation", "Euroland IR wins IR Magazine Award for Best Digital IR Innovation"), excerpt: t("newsroom_recognised_for_outstanding_contribution_to_digital_investor_relations", "Recognised for outstanding contribution to digital investor relations and technology-driven client outcomes.") },
    { date: "14 Feb 2026", title: t("newsroom_new_esg_reporting_module_launched_for_listed_companies", "New ESG reporting module launched for listed companies"), excerpt: t("newsroom_comprehensive_esg_data_presentation_tools_aligned_with_gri_tcf_and_sasb", "Comprehensive ESG data presentation tools aligned with GRI, TCFD, and SASB frameworks now available.") },
  ];
}

function getMediaCoverage(t: TFunction) {
  return [
    { source: "Financial Times", date: "10 Mar 2026", title: t("newsroom_how_ai_is_transforming_investor_relations_for_public_companies", "How AI is transforming investor relations for public companies"), excerpt: t("newsroom_a_deep_dive_into_the_tools_and_workflows", "A deep dive into the tools and workflows that are saving IR teams hundreds of hours per quarter.") },
    { source: "IR Magazine", date: "3 Mar 2026", title: t("newsroom_best_practice_ir_websites_what_separates_the_leaders", "Best practice IR platforms: what separates the leaders from the rest"), excerpt: t("newsroom_an_analysis_of_500_ir_websites_reveals_five_structural_qualities", "An analysis of 500 IR platforms reveals five structural qualities that drive investor engagement.") },
    { source: "Bloomberg", date: "18 Feb 2026", title: t("newsroom_nordic_ir_technology_firms_lead_global_expansion", "Nordic IR technology firms lead global expansion"), excerpt: t("newsroom_scandinavian_ir_software_providers_are_winning_market_share", "Scandinavian IR software providers are winning market share across Europe and North America.") },
  ];
}

export default function Newsroom() {
  const { t } = useLanguage();
  const f1 = useFadeUp(); const f2 = useFadeUp(); const f3 = useFadeUp(); const f4 = useFadeUp(); const f5 = useFadeUp();

  const GALLERY_ITEMS = getGalleryItems(t);
  const EVENTS = getEvents(t);
  const PRESS_RELEASES = getPressReleases(t);
  const MEDIA_COVERAGE = getMediaCoverage(t);

  return (
    <PageWrapper>
      {/* ── HERO ── */}
      <section className="hero-navy banner-hero-section" style={{ minHeight: "440px", overflow: "hidden", display: "flex", alignItems: "flex-start" }}>
        <div className="container" style={{ paddingTop: "120px", paddingBottom: "80px" }}>
          <div className="u-label" style={{ marginBottom: "var(--sp-4)" }}>{t("newsroom_newsroom", "Newsroom")}</div>
          <h2 style={{ fontSize: "48px", fontWeight: 300, lineHeight: "64px", letterSpacing: "-0.01em", color: "white", marginBottom: "var(--sp-6)", maxWidth: "640px" }}>
            {t("newsroom_newsroom", "Newsroom")}
          </h2>
          <p style={{ color: "rgba(255,255,255,0.70)", fontSize: "var(--fs-md)", maxWidth: "560px" }}>
            {t("newsroom_hero_description", "The latest press releases, investor relations product updates, and award announcements from Euroland IR — trusted IR technology for 1,400+ listed companies.")}
          </p>
        </div>
      </section>


      {/* ── EVENTS & HIGHLIGHTS (gallery) ── */}
      {
        <section className="section">
          <div className="container">
            <div ref={f1} className="fade-up" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "var(--sp-10)" }}>
              <div>
                <div className="u-label" style={{ marginBottom: "var(--sp-3)" }}>{t("newsroom_product", "Product")}</div>
                <h3 style={{ fontSize: "40px", fontWeight: 400, lineHeight: "52px", letterSpacing: "0.005em", color: "var(--text-primary)", margin: 0 }}>{t("newsroom_events_and_highlights", "Events & Highlights")}</h3>
              </div>
              <ImageIcon size={20} color="var(--text-tertiary)" />
            </div>
            <div className="grid-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--sp-4)" }}>
              {GALLERY_ITEMS.map((item, i) => (
                <div
                  key={item.title}
                  style={{
                    aspectRatio: "4/3",
                    background: `linear-gradient(135deg, #0b2743 0%, ${i % 2 === 0 ? "#1f3f66" : "#0d3a5c"} 100%)`,
                    borderRadius: "8px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    padding: "var(--sp-4)",
                    cursor: "pointer",
                    overflow: "hidden",
                    position: "relative",
                    transition: "transform 200ms ease",
                  }}
                  className="nr-card"
                >
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 60%)" }} />
                  <div style={{ position: "relative" }}>
                    <div style={{ fontSize: "var(--fs-xs)", fontWeight: 500, color: "#327AB1", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "var(--sp-1)" }}>{item.tag}</div>
                    <div style={{ fontSize: "var(--fs-sm)", fontWeight: 600, color: "white" }}>{item.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      }

      {/* ── UPCOMING EVENTS ── */}
      {
        <section style={{ background: "var(--slate)", padding: "80px 0" }}>
          <div className="container">
            <div ref={f2} className="fade-up" style={{ marginBottom: "var(--sp-10)" }}>
              <div className="u-label" style={{ marginBottom: "var(--sp-3)" }}>{t("newsroom_events", "Events")}</div>
              <h3 style={{ fontSize: "40px", fontWeight: 400, lineHeight: "52px", letterSpacing: "0.005em", color: "var(--text-primary)", margin: 0 }}>{t("newsroom_upcoming_events", "Upcoming Events")}</h3>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--sp-3)" }}>
              {EVENTS.map((event) => (
                <div
                  key={event.title}
                  className="card"
                  style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: "var(--sp-6)", alignItems: "center", cursor: "pointer" }}
                >
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "var(--fs-xl)", fontWeight: 300, color: "var(--navy)", lineHeight: "32px" }}>{event.date.split(" ")[0]}</div>
                    <div style={{ fontSize: "var(--fs-xs)", fontWeight: 500, color: "#327AB1", letterSpacing: "0.06em", textTransform: "uppercase" }}>{event.date.split(" ")[1]}</div>
                  </div>
                  <div>
                    <div className="kicker" style={{ marginBottom: "var(--sp-2)" }}>{event.type}</div>
                    <h5 style={{ color: "var(--text-primary)", marginBottom: "var(--sp-2)" }}>{event.title}</h5>
                    <p style={{ fontSize: "var(--fs-xs)", color: "var(--text-tertiary)", margin: 0, fontWeight: 600 }}>{event.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      }

      {/* ── PRESS RELEASES ── */}
      {
        <section className="section">
          <div className="container">
            <div ref={f3} className="fade-up" style={{ marginBottom: "var(--sp-10)" }}>
              <div className="u-label" style={{ marginBottom: "var(--sp-3)" }}>{t("newsroom_press", "Press")}</div>
              <h3 style={{ fontSize: "40px", fontWeight: 400, lineHeight: "52px", letterSpacing: "0.005em", color: "var(--text-primary)", margin: 0 }}>{t("newsroom_press_releases", "Press Releases")}</h3>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {PRESS_RELEASES.map((pr) => (
                <div
                  key={pr.title}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "140px 1fr auto",
                    gap: "var(--sp-8)",
                    alignItems: "center",
                    padding: "var(--sp-6) 0",
                    borderBottom: "1px solid var(--border-light)",
                    cursor: "pointer",
                  }}
                  className="news-card"
                >
                  <div style={{ fontSize: "var(--fs-xs)", fontWeight: 600, color: "var(--text-tertiary)", letterSpacing: "0.04em" }}>{pr.date}</div>
                  <div>
                    <h5 style={{ color: "var(--text-primary)", marginBottom: "var(--sp-2)" }}>{pr.title}</h5>
                    <p style={{ fontSize: "var(--fs-sm)", margin: 0 }}>{pr.excerpt}</p>
                  </div>
                  <span className="btn-link" style={{ fontSize: "var(--fs-xs)", whiteSpace: "nowrap" }}>{t("newsroom_read_more", "Read more")}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      }

      {/* ── MEDIA COVERAGE ── */}
      {
        <section style={{ background: "var(--slate)", padding: "80px 0" }}>
          <div className="container">
            <div ref={f4} className="fade-up" style={{ marginBottom: "var(--sp-10)" }}>
              <div className="u-label" style={{ marginBottom: "var(--sp-3)" }}>{t("newsroom_media_coverage", "Media Coverage")}</div>
              <h3 style={{ fontSize: "40px", fontWeight: 400, lineHeight: "52px", letterSpacing: "0.005em", color: "var(--text-primary)", margin: 0 }}>{t("newsroom_euroland_in_the_news", "Euroland in the News")}</h3>
            </div>
            <div className="grid-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--sp-6)" }}>
              {MEDIA_COVERAGE.map((article) => (
                <article key={article.title} className="nr-card">
                  <div className="nr-card-media" style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-tertiary)", fontSize: "var(--fs-xs)", fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                    {article.source}
                  </div>
                  <div style={{ padding: "var(--sp-6)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "var(--sp-3)" }}>
                      <span className="kicker">{article.source}</span>
                      <span style={{ fontSize: "var(--fs-xs)", color: "var(--text-tertiary)", fontWeight: 600 }}>{article.date}</span>
                    </div>
                    <h5 style={{ color: "var(--text-primary)", marginBottom: "var(--sp-3)" }}>{article.title}</h5>
                    <p style={{ fontSize: "var(--fs-sm)", marginBottom: "var(--sp-5)" }}>{article.excerpt}</p>
                    <span className="btn-link" style={{ fontSize: "var(--fs-xs)" }}>{t("newsroom_read_more", "Read more")}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      }

      {/* ── NEWSLETTER ── */}
      <section className="section">
        <div className="container">
          <div ref={f5} className="fade-up card" style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center", padding: "var(--sp-12)" }}>
            <div className="u-label" style={{ marginBottom: "var(--sp-4)", display: "inline-block" }}>{t("newsroom_newsletter", "Newsletter")}</div>
            <h5 style={{ fontSize: "24px", fontWeight: 500, lineHeight: "32px", letterSpacing: "0.005em", color: "var(--text-primary)", marginBottom: "var(--sp-4)" }}>{t("newsroom_stay_ahead_in_ir", "Stay ahead in IR")}</h5>
            <p style={{ marginBottom: "var(--sp-8)" }}>
              {t("newsroom_newsletter_description", "Monthly insights on best practice IR, regulatory updates, and technology trends — delivered to your inbox.")}
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="subscribe-form"
              style={{ display: "flex", gap: "var(--sp-3)", maxWidth: "400px", margin: "0 auto" }}
            >
              <input
                type="email"
                placeholder={t("newsroom_work_email_address", "Work email address")}
                style={{
                  flex: 1,
                  padding: "10px 16px",
                  border: "1px solid var(--border-light)",
                  borderRadius: "6px",
                  fontSize: "var(--fs-sm)",
                  outline: "none",
                  color: "var(--text-primary)",
                }}
              />
              <button type="submit" className="btn-primary" style={{ whiteSpace: "nowrap" }}>{t("newsroom_subscribe", "Subscribe")}</button>
            </form>
          </div>
        </div>
      </section>

      {/* ── PRESS CONTACT CTA ── */}
      <div className="cta-band">
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "var(--sp-12)", alignItems: "center" }}>
          <div>
            <div className="u-label" style={{ marginBottom: "var(--sp-4)" }}>{t("newsroom_media_enquiries", "Media Enquiries")}</div>
            <h3 style={{ fontSize: "40px", fontWeight: 400, lineHeight: "52px", letterSpacing: "0.005em", color: "white", margin: 0 }}>{t("newsroom_press_contact", "Press contact")}</h3>
            <p style={{ color: "rgba(255,255,255,0.70)", marginTop: "var(--sp-4)", marginBottom: 0 }}>
              {t("newsroom_press_contact_description", "For press enquiries, interview requests, or media resources, please contact our communications team.")}
            </p>
          </div>
          <LangLink href="/contact" className="btn-secondary" style={{ whiteSpace: "nowrap" }}>{t("newsroom_send_message", "Send Message")}</LangLink>
        </div>
      </div>
      <div style={{ height: "60px", background: "#fff" }} />
    </PageWrapper>
  );
}
