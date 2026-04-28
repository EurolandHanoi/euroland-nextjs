"use client";

/**
 * AI PAGE — Euroland IR
 * Matches Netlify layout exactly: hero → video section → problem cards → AI search feature → capabilities grid → CTA
 */
import { useEffect, useRef } from "react";
import LangLink from "@/components/LangLink";
import BannerHero from "@/components/layout/BannerHero";
import { PageWrapper } from "@/components/Layout";
import { Search, Clock, Shield, Zap, BarChart2, FileText } from "lucide-react";
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

function getProblems(t: TFunction) {
  return [
    { icon: Search, title: t("aipage_problem_scattered_information", "Scattered Information"), desc: t("aipage_problem_scattered_information_desc", "Critical data buried across multiple systems, filings, and documents.") },
    { icon: Clock, title: t("aipage_problem_time_consuming_searches", "Time-Consuming Searches"), desc: t("aipage_problem_time_consuming_searches_desc", "Hours spent manually searching and compiling information.") },
    { icon: Shield, title: t("aipage_problem_compliance_risk", "Compliance Risk"), desc: t("aipage_problem_compliance_risk_desc", "Manual processes increase the risk of errors in regulated disclosures.") },
  ];
}

function getFeatures(t: TFunction) {
  return [
    { num: "01", title: t("aipage_feature_ai_powered_search", "AI-Powered Search"), desc: t("aipage_feature_ai_powered_search_desc", "Instantly surface relevant data from your entire IR document library using natural language queries.") },
    { num: "02", title: t("aipage_feature_text_completion", "Text Completion"), desc: t("aipage_feature_text_completion_desc", "Draft earnings releases, press releases, and investor communications with AI assistance trained on IR-specific language.") },
    { num: "03", title: t("aipage_feature_document_intelligence", "Document Intelligence"), desc: t("aipage_feature_document_intelligence_desc", "Automatically extract, classify, and summarise key information from filings, reports, and disclosures.") },
    { num: "04", title: t("aipage_feature_compliance_guardrails", "Compliance Guardrails"), desc: t("aipage_feature_compliance_guardrails_desc", "Built-in controls ensure AI outputs meet regulatory standards before publication.") },
    { num: "05", title: t("aipage_feature_sentiment_analysis", "Sentiment Analysis"), desc: t("aipage_feature_sentiment_analysis_desc", "Monitor investor sentiment across news, social, and analyst reports in real time.") },
    { num: "06", title: t("aipage_feature_transparent_ai", "Transparent AI"), desc: t("aipage_feature_transparent_ai_desc", "Every AI output is explainable and auditable — full visibility into sources and reasoning.") },
  ];
}

function getAiSearchBullets(t: TFunction) {
  return [
    t("aipage_ai_search_bullet_1", "Natural language queries — no complex syntax"),
    t("aipage_ai_search_bullet_2", "Instant results with source citations"),
    t("aipage_ai_search_bullet_3", "Context-aware responses trained on IR data"),
    t("aipage_ai_search_bullet_4", "Compliance guardrails built in"),
  ];
}

export default function AIPage() {
  const { t } = useLanguage();
  const f1 = useFadeUp(); const f2 = useFadeUp(); const f3 = useFadeUp(); const f4 = useFadeUp(); const f5 = useFadeUp();
  const PROBLEMS = getProblems(t);
  const FEATURES = getFeatures(t);
  const AI_SEARCH_BULLETS = getAiSearchBullets(t);

  return (
    <PageWrapper>
      {/* ── HERO ── */}
      <BannerHero
        variant="solutions"
        label={t("aipage_hero_label", "AI Solutions")}
        title={t("aipage_hero_heading", "Purpose-Built AI for Investor Relations")}
        subtitle={t(
          "aipage_hero_paragraph",
          "Instant answers from your entire IR knowledge base — filings, transcripts, reports, and disclosures — with compliance guardrails built in."
        )}
        primaryCtaLabel={t("aipage_hero_btn_book_demo", "Book a Demo")}
        primaryCtaHref="/book-demo"
        secondaryCtaLabel={t("common_talk_to_us", "Talk to Us")}
        secondaryCtaHref="/contact"
        supportingCtaLabel={t("aipage_hero_btn_see_ai_in_action", "See it in action")}
        supportingCtaHref="#see-in-action"
      />

      {/* ── VIDEO SECTION ── */}
      <section id="see-in-action" style={{ background: "var(--slate)", padding: "80px 0" }}>
        <div className="container">
          <div ref={f1} className="fade-up" style={{ textAlign: "center", marginBottom: "var(--sp-10)" }}>
            <div className="u-label" style={{ marginBottom: "var(--sp-4)", display: "inline-block" }}>{t("aipage_video_section_label", "See It In Action")}</div>
            <h3 style={{ color: "var(--text-primary)", marginBottom: "var(--sp-4)" }}>
              {t("aipage_video_section_heading", "Watch how Euroland AI transforms IR workflows")}
            </h3>
            <p style={{ maxWidth: "520px", margin: "0 auto" }}>
              {t("aipage_video_section_paragraph", "See how IR teams use our AI to answer stakeholder questions in seconds, not hours.")}
            </p>
          </div>
          {/* Video */}
          <div
            ref={f2}
            className="fade-up"
            style={{
              maxWidth: "720px",
              margin: "0 auto",
              aspectRatio: "16/9",
              borderRadius: "8px",
              overflow: "hidden",
              background: "#0b2743",
              border: "1px solid rgba(255,255,255,0.10)",
            }}
          >
            <video
              src="/Promotional_Video_AI.mp4"
              controls
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              preload="metadata"
            />
          </div>
        </div>
      </section>

      {/* ── PROBLEM CARDS ── */}
      <section style={{ background: "white", padding: "80px 0" }}>
        <div className="container">
          <div ref={f3} className="fade-up" style={{ textAlign: "center", marginBottom: "var(--sp-12)" }}>
            <div className="u-label" style={{ marginBottom: "var(--sp-4)", display: "inline-block" }}>{t("aipage_problem_cards_label", "The Challenge")}</div>
            <h3 style={{ color: "var(--text-primary)" }}>{t("aipage_problem_cards_heading", "Finding information shouldn't be this hard")}</h3>
          </div>
          <div className="grid-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--sp-6)" }}>
            {PROBLEMS.map((p) => (
              <div key={p.title} className="card">
                <p.icon size={24} color="#28628F" strokeWidth={1.5} style={{ marginBottom: "var(--sp-4)" }} />
                <h5 style={{ color: "var(--text-primary)", marginBottom: "var(--sp-3)" }}>{p.title}</h5>
                <p style={{ fontSize: "var(--fs-sm)", margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI SEARCH FEATURE (two-column) ── */}
      <section style={{ background: "var(--slate)", padding: "80px 0" }}>
        <div className="container">
          <div ref={f4} className="fade-up grid-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--sp-16)", alignItems: "center" }}>
            {/* Left — AI search demo screenshot */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ borderRadius: "12px", overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.18)", maxWidth: "500px", maxHeight: "700px", width: "100%" }}>
                <img
                  src="/ai-search-demo.png"
                  alt="Euroland AI Search — ask questions in plain language"
                  style={{ width: "100%", height: "auto", display: "block", maxHeight: "700px", objectFit: "contain" }}
                />
              </div>
            </div>
            {/* Right — content */}
            <div>
              <div className="u-label" style={{ marginBottom: "var(--sp-4)" }}>{t("aipage_ai_search_label", "AI-Powered Search")}</div>
              <h3 style={{ color: "var(--text-primary)", marginBottom: "var(--sp-6)" }}>
                {t("aipage_ai_search_heading", "Ask questions in plain language. Get instant, cited answers.")}
              </h3>
              <p style={{ marginBottom: "var(--sp-6)" }}>
                {t("aipage_ai_search_paragraph", "Euroland AI understands IR terminology and searches across your entire knowledge base — filings, transcripts, analyst reports, press releases — in seconds.")}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 var(--sp-8)", display: "flex", flexDirection: "column", gap: "var(--sp-3)" }}>
                {AI_SEARCH_BULLETS.map((b) => (
                  <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: "var(--sp-3)", fontSize: "var(--fs-sm)" }}>
                    <span style={{ color: "#28628F", fontWeight: 700, flexShrink: 0 }}>✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <LangLink href="/book-demo" className="btn-primary">{t("aipage_ai_search_btn_book_demo", "Book a Demo")}</LangLink>
            </div>
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES GRID ── */}
      <section className="section">
        <div className="container">
          <div ref={f5} className="fade-up" style={{ marginBottom: "var(--sp-12)" }}>
            <div className="u-label" style={{ marginBottom: "var(--sp-4)" }}>{t("aipage_capabilities_label", "Capabilities")}</div>
            <h3 style={{ color: "var(--text-primary)", marginBottom: "var(--sp-4)" }}>{t("aipage_capabilities_heading", "AI built for IR professionals")}</h3>
            <p style={{ maxWidth: "560px" }}>{t("aipage_capabilities_paragraph", "Every feature is designed around the specific needs of IR teams — compliant, accurate, and transparent.")}</p>
          </div>
          <div className="grid-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--sp-6)" }}>
            {FEATURES.map((f) => (
              <div key={f.num} className="feature-card">
                <div className="num-label">{f.num}</div>
                <h5 style={{ color: "var(--text-primary)", marginBottom: "var(--sp-3)" }}>{f.title}</h5>
                <p style={{ fontSize: "var(--fs-sm)", margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <div className="cta-band">
        <div className="container" style={{ textAlign: "center" }}>
          <div className="fade-up">
            <div className="u-label" style={{ marginBottom: "var(--sp-4)", display: "inline-block" }}>{t("aipage_cta_label", "Get Started")}</div>
            <h3 style={{ color: "white", fontWeight: 300, marginBottom: "var(--sp-8)", maxWidth: "600px", margin: "0 auto var(--sp-8)" }}>
              {t("aipage_cta_heading", "Ready to put AI to work for your IR team?")}
            </h3>
            <div style={{ display: "flex", gap: "var(--sp-3)", justifyContent: "center" }}>
              <LangLink href="/book-demo" className="btn-primary">{t("aipage_cta_btn_book_demo", "Book a Demo")}</LangLink>
              <LangLink href="/contact" className="btn-secondary">{t("common_talk_to_us", "Talk to Us")}</LangLink>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: "60px", background: "#fff" }} />
    </PageWrapper>
  );
}
