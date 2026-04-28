"use client";

/**
 * IR BLOG PAGE — Euroland IR
 * Matches Netlify layout exactly:
 * hero → sticky tab filter → featured post (2-col) → 3-col grid → newsletter CTA
 */
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { PageWrapper } from "@/components/Layout";
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

function getCategories(t: TFunction) {
  return [
    t("irblog_all", "All"),
    t("irblog_best_practice", "Best Practice"),
    t("irblog_ai_technology", "AI & Technology"),
    t("irblog_regulation", "Regulation"),
    t("irblog_esg", "ESG"),
    t("irblog_ipo", "IPO"),
  ];
}

function getPosts(t: TFunction) {
  return [
    { cat: t("irblog_best_practice", "Best Practice"), title: "How to build an IR platform that investors actually use", excerpt: "The most effective IR platforms share five structural qualities. Here's what separates best-practice IR from the average.", date: "12 Mar 2026", readTime: "6 min", featured: true },
    { cat: t("irblog_ai_technology", "AI & Technology"), title: "Purpose-built AI vs generic LLMs: what IR teams need to know", excerpt: "Not all AI is created equal. We explain why IR-specific training data and compliance guardrails matter for investor communications.", date: "8 Mar 2026", readTime: "8 min", featured: false },
    { cat: t("irblog_regulation", "Regulation"), title: "MAR compliance in 2026: key changes and what they mean for IR teams", excerpt: "A practical overview of the latest Market Abuse Regulation updates and how to adapt your disclosure workflows.", date: "28 Feb 2026", readTime: "7 min", featured: false },
    { cat: t("irblog_esg", "ESG"), title: "ESG reporting: from obligation to competitive advantage", excerpt: "Companies that treat ESG as a communication opportunity — not just a compliance burden — are winning investor trust.", date: "21 Feb 2026", readTime: "5 min", featured: false },
    { cat: t("irblog_ipo", "IPO"), title: "The IR checklist every company should complete before listing", excerpt: "From website infrastructure to investor CRM, here are the twelve IR foundations every company should have in place before IPO.", date: "14 Feb 2026", readTime: "9 min", featured: false },
    { cat: t("irblog_best_practice", "Best Practice"), title: "Earnings season preparation: a week-by-week IR calendar", excerpt: "A structured timeline for preparing, distributing, and following up on quarterly earnings communications.", date: "7 Feb 2026", readTime: "6 min", featured: false },
  ];
}

export default function IRBlog() {
  const { t } = useLanguage();
  const CATEGORIES = getCategories(t);
  const POSTS = getPosts(t);

  const [activeCategory, setActiveCategory] = useState(t("irblog_all", "All"));
  const f1 = useFadeUp();
  const filtered = activeCategory === t("irblog_all", "All") ? POSTS : POSTS.filter(p => p.cat === activeCategory);
  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <PageWrapper>
      {/* ── HERO ── */}
      <section className="hero-navy banner-hero-section" style={{ minHeight: "440px", overflow: "hidden", display: "flex", alignItems: "flex-start" }}>
        <div className="container" style={{ paddingTop: "96px", paddingBottom: "96px" }}>
          <div className="u-label" style={{ marginBottom: "var(--sp-4)" }}>{t("irblog_ir_blog", "IR Blog")}</div>
          <h2 style={{ fontSize: "48px", fontWeight: 300, lineHeight: "64px", letterSpacing: "-0.01em", color: "white", marginBottom: "var(--sp-6)", maxWidth: "640px" }}>
            {t("irblog_ir_insights_best_practice", "IR Insights & Best Practice")}
          </h2>
          <p style={{ color: "rgba(255,255,255,0.70)", fontSize: "var(--fs-md)", maxWidth: "560px" }}>
            {t("irblog_expert_perspectives", "Expert perspectives on investor relations strategy, ESG disclosure, regulatory compliance, and the future of IR technology — written for IR professionals at listed companies.")}
          </p>
        </div>
      </section>

      {/* ── STICKY TAB FILTER ── */}
      <div style={{ background: "white", borderBottom: "1px solid var(--border-light)", position: "sticky", top: "64px", zIndex: 40 }}>
        <div className="container">
          <div style={{ display: "flex", gap: "var(--sp-1)", padding: "var(--sp-3) 0" }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`tab-btn ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── POSTS ── */}
      <section className="section">
        <div className="container">
          {/* Featured post */}
          {featured && (
            <div ref={f1} className="fade-up" style={{ marginBottom: "var(--sp-12)" }}>
              <a className="grid-2col" href="#" style={{ textDecoration: "none", display: "grid", gridTemplateColumns: "1fr 1fr", borderRadius: "8px", overflow: "hidden", boxShadow: "var(--shadow-card)" }}>
                <div style={{
                  background: "var(--navy-medium)",
                  minHeight: "320px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(255,255,255,0.25)",
                  fontSize: "var(--fs-xs)",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}>
                  {t("irblog_featured", "FEATURED")}
                </div>
                <div style={{ padding: "var(--sp-10)", background: "white" }}>
                  <div className="kicker" style={{ marginBottom: "var(--sp-3)", textTransform: "uppercase" }}>{featured.cat}</div>
                  <h3 style={{ fontSize: "40px", fontWeight: 400, lineHeight: "52px", letterSpacing: "0.005em", color: "var(--text-primary)", marginBottom: "var(--sp-4)" }}>{featured.title}</h3>
                  <p style={{ marginBottom: "var(--sp-6)" }}>{featured.excerpt}</p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "var(--fs-xs)", color: "var(--text-tertiary)", fontWeight: 600 }}>{featured.date} · {featured.readTime} {t("irblog_read", "read")}</span>
                    <span className="btn-link" style={{ fontSize: "var(--fs-xs)", fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase" }}>{t("irblog_read_article_arrow", "Read Article →")}</span>
                  </div>
                </div>
              </a>
            </div>
          )}

          {/* 3-col grid */}
          {rest.length > 0 && (
            <div className="grid-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--sp-6)" }}>
              {rest.map((post) => (
                <a key={post.title} href="#" style={{ textDecoration: "none" }}>
                  <article className="blog-card" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                    <div style={{
                      background: "var(--slate)",
                      height: "160px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--text-tertiary)",
                      fontSize: "var(--fs-xs)",
                      fontWeight: 500,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}>
                      {t("irblog_article_image", "Article Image")}
                    </div>
                    <div style={{ padding: "var(--sp-6)", flex: 1, display: "flex", flexDirection: "column" }}>
                      <div className="kicker" style={{ marginBottom: "var(--sp-3)", textTransform: "uppercase" }}>{post.cat}</div>
                      <h5 style={{ color: "var(--text-primary)", marginBottom: "var(--sp-3)", flex: 1 }}>{post.title}</h5>
                      <p style={{ fontSize: "var(--fs-sm)", marginBottom: "var(--sp-5)" }}>{post.excerpt}</p>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ fontSize: "var(--fs-xs)", color: "var(--text-tertiary)", fontWeight: 600 }}>{post.readTime} {t("irblog_read", "read")}</span>
                        <span className="btn-link" style={{ fontSize: "var(--fs-xs)", fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase" }}>{t("irblog_read_article_arrow", "Read Article →")}</span>
                      </div>
                    </div>
                  </article>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── NEWSLETTER CTA ── */}
      <div style={{ background: "var(--slate)", padding: "96px 0" }}>
        <div className="container">
          <div className="card" style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center", padding: "var(--sp-12)" }}>
            <div className="u-label" style={{ marginBottom: "var(--sp-4)", display: "inline-block" }}>{t("irblog_newsletter", "Newsletter")}</div>
            <h5 style={{ fontSize: "24px", fontWeight: 500, lineHeight: "32px", letterSpacing: "0.005em", color: "var(--text-primary)", marginBottom: "var(--sp-4)" }}>{t("irblog_stay_ahead_in_ir", "Stay ahead in IR")}</h5>
            <p style={{ marginBottom: "var(--sp-8)" }}>
              {t("irblog_monthly_insights", "Monthly insights on best practice IR, regulatory updates, and technology trends — delivered to your inbox.")}
            </p>
            <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", gap: "var(--sp-3)", maxWidth: "400px", margin: "0 auto" }}>
              <input className="form-input" type="email" placeholder={t("irblog_work_email_address", "Work email address")} style={{ flex: 1 }} />
              <button type="submit" className="btn-primary" style={{ whiteSpace: "nowrap" }}>{t("irblog_subscribe", "Subscribe")}</button>
            </form>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
