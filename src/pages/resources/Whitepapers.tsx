"use client";

/**
 * WHITEPAPERS PAGE — Euroland IR
 * Source: euroland-ir-...-max-export(4).json
 * URL:    /resources/whitepapers
 * Viewport: 1440px wide
 *
 * Sections:
 *  S1  hero-navy       — "Resources" eyebrow + "Whitepapers & Research" H2 + subtitle
 *  S2  section-light   — "Featured" label + "Latest publications" H3 + featured card (full-width horizontal)
 *  S3  section white   — "Library" label + "All whitepapers" H3 + category filter pills + list rows
 */
import { useState, useEffect, useRef } from "react";
import { PageWrapper } from "@/components/Layout";
import LangLink from "@/components/LangLink";
import BannerHero from "@/components/layout/BannerHero";
import { Download, Clock, FileText, BookOpen } from "lucide-react";
import EnglishOnlyGuard from "@/components/EnglishOnlyGuard";

function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } },
      { threshold: 0.06 }
    );
    obs.observe(el); return () => obs.disconnect();
  }, []);
  return ref;
}

type Category = "All" | "IR Strategy" | "ESG & Sustainability" | "AI & Technology" | "Investor Engagement" | "Regulatory & Compliance";

interface Whitepaper {
  category: Category;
  date: string;
  pages: string;
  title: string;
  desc: string;
  readTime?: string;
}

const FEATURED: Whitepaper = {
  category: "IR Strategy",
  date: "February 2026",
  pages: "32 pages",
  title: "Best Practice IR in the Digital Age",
  desc: "A practical framework for building investor-facing digital experiences that support trust, compliance, discoverability, and stronger engagement with institutional investors.",
  readTime: "25 min read",
};

const PAPERS: Whitepaper[] = [
  {
    category: "IR Strategy",
    date: "February 2026",
    pages: "32 pages",
    title: "Best Practice IR in the Digital Age",
    desc: "A practical framework for building investor-facing digital experiences that support trust, compliance, discoverability, and stronger engagement with institutional investors.",
  },
  {
    category: "ESG & Sustainability",
    date: "January 2026",
    pages: "28 pages",
    title: "CSRD Reporting: From Compliance to Communication",
    desc: "How listed companies can turn mandatory CSRD disclosures into a strategic investor communication tool — structured, accessible, and credible.",
  },
  {
    category: "AI & Technology",
    date: "December 2025",
    pages: "24 pages",
    title: "AI in Investor Relations: A Practical Adoption Guide",
    desc: "A framework for IR teams evaluating AI tools — from automated Q&A and earnings preparation to sentiment analysis and investor targeting.",
  },
  {
    category: "Investor Engagement",
    date: "November 2025",
    pages: "20 pages",
    title: "The Institutional Investor Engagement Playbook",
    desc: "How to build and maintain relationships with institutional investors — targeting, messaging, roadshow preparation, and post-meeting follow-up.",
  },
  {
    category: "Regulatory & Compliance",
    date: "October 2025",
    pages: "18 pages",
    title: "Regulatory Disclosure in a Multi-Framework World",
    desc: "Navigating CSRD, TCFD, GRI, and SASB simultaneously — a practical guide to disclosure alignment for IR and sustainability teams.",
  },
  {
    category: "IR Strategy",
    date: "September 2025",
    pages: "22 pages",
    title: "Measuring the ROI of Investor Relations",
    desc: "A practical framework for quantifying the value of IR to the CFO — from reduced cost of capital to improved analyst coverage and institutional ownership.",
  },
];

const CATEGORIES: Category[] = [
  "All",
  "IR Strategy",
  "ESG & Sustainability",
  "AI & Technology",
  "Investor Engagement",
  "Regulatory & Compliance",
];

// Category pill colour
const CATEGORY_COLORS: Record<string, { bg: string; color: string }> = {
  "IR Strategy":             { bg: "rgb(0, 107, 163)",    color: "#fff" },
  "ESG & Sustainability":    { bg: "rgb(0, 150, 81)",     color: "#fff" },
  "AI & Technology":         { bg: "rgb(91, 107, 122)",   color: "#fff" },
  "Investor Engagement":     { bg: "rgb(0, 107, 163)",    color: "#fff" },
  "Regulatory & Compliance": { bg: "rgb(58, 74, 88)",     color: "#fff" },
};

function paperHref(title: string) {
  return `/resources/whitepapers/${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
}

function paperRequestHref(title: string) {
  return `${paperHref(title)}#request-pdf`;
}

function CategoryBadge({ cat }: { cat: string }) {
  const c = CATEGORY_COLORS[cat] ?? { bg: "rgb(221,224,230)", color: "rgb(58,74,88)" };
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "2px 10px",
        borderRadius: "4px",
        fontSize: "10px",
        fontWeight: 700,
        lineHeight: "24px",
        letterSpacing: "0.10em",
        textTransform: "uppercase",
        background: c.bg,
        color: c.color,
        whiteSpace: "nowrap",
      }}
    >
      {cat}
    </span>
  );
}

function WhitepapersInner() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const f1 = useFadeUp();
  const f2 = useFadeUp();
  const f3 = useFadeUp();

  const filtered = activeCategory === "All"
    ? PAPERS
    : PAPERS.filter((p) => p.category === activeCategory);

  return (
    <PageWrapper>

            <BannerHero
        variant="resources"
        label="Resources"
        title="Whitepapers & Research"
        subtitle="Long-form research, strategic frameworks, and practical guidance for investor relations professionals covering disclosure, AI, ESG, engagement, and capital markets communication."
        minHeight="440px"
        titleMaxWidth="640px"
        subtitleMaxWidth="560px"
      />

{/* ── S2: FEATURED ─────────────────────────────────────────────────────── */}
      {/* section-light, full-width horizontal featured card */}
      <section
        className="section-light"
        style={{ paddingTop: "64px", paddingBottom: "64px" }}
      >
        <div className="container" style={{ maxWidth: "1536px", padding: "0 48px" }}>
          <div ref={f1} className="fade-up">
            {/* Section label: 10px/700/0.12em/uppercase/rgb(0,107,163) */}
            <div
              style={{
                fontSize: "10px",
                fontWeight: 700,
                lineHeight: "24px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgb(0, 107, 163)",
                marginBottom: "16px",
              }}
            >
              FEATURED
            </div>

            {/* H3: 32px/600/48px/rgb(8,43,69) */}
            <h3 className="type-h4"
              style={{
                fontSize: "32px",
                fontWeight: 600,
                lineHeight: "48px",
                letterSpacing: "0.01em",
                color: "rgb(8, 43, 69)",
                margin: "0 0 32px",
              }}
            >
              Latest publications
            </h3>

            {/* Featured card: full-width horizontal, white bg, border, rounded-lg */}
            <div
              style={{
                background: "rgb(255, 255, 255)",
                border: "1px solid rgb(221, 224, 230)",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <div style={{ padding: "28px" }}>
                {/* Top row: category badge */}
                <div style={{ marginBottom: "12px" }}>
                  <CategoryBadge cat={FEATURED.category} />
                </div>

                {/* Title: 24px/600/28px/rgb(8,43,69) */}
                <LangLink
                  href={paperHref(FEATURED.title)}
                  style={{ textDecoration: "none" }}
                >
                  <h4 className="type-h5"
                    style={{
                      fontSize: "24px",
                      fontWeight: 600,
                      lineHeight: "28px",
                      letterSpacing: "0.01em",
                      color: "rgb(8, 43, 69)",
                      margin: "0 0 12px",
                    }}
                  >
                    {FEATURED.title}
                  </h4>
                </LangLink>

                {/* Description: 16px/400/24px/rgb(74,71,64) */}
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "24px",
                    color: "rgb(74, 71, 64)",
                    margin: "0 0 24px",
                  }}
                >
                  {FEATURED.desc}
                </p>

                {/* Meta row: date · read time · pages */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    marginBottom: "24px",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      fontSize: "12px",
                      color: "rgb(91, 107, 122)",
                    }}
                  >
                    <Clock size={12} />
                    {FEATURED.date}
                  </span>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      fontSize: "12px",
                      color: "rgb(91, 107, 122)",
                    }}
                  >
                    <Clock size={12} />
                    {FEATURED.readTime}
                  </span>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      fontSize: "12px",
                      color: "rgb(91, 107, 122)",
                    }}
                  >
                    <FileText size={12} />
                    {FEATURED.pages}
                  </span>
                </div>

                {/* CTA buttons */}
                <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                  <LangLink
                    href={paperRequestHref(FEATURED.title)}
                    className="btn-primary"
                    style={{ display: "flex", alignItems: "center", gap: "8px" }}
                  >
                    <Download size={14} />
                    Request PDF
                  </LangLink>
                  <LangLink
                    href={paperHref(FEATURED.title)}
                    className="btn-outline"
                    style={{ display: "flex", alignItems: "center", gap: "8px" }}
                  >
                    <BookOpen size={14} />
                    View summary
                  </LangLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── S3: LIBRARY ──────────────────────────────────────────────────────── */}
      {/* white section, category filter + list rows */}
      <section
        className="section"
        style={{ background: "rgb(255, 255, 255)" }}
      >
        <div className="container" style={{ maxWidth: "1536px", padding: "0 48px" }}>
          <div ref={f2} className="fade-up">
            {/* Section label */}
            <div
              style={{
                fontSize: "10px",
                fontWeight: 700,
                lineHeight: "24px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgb(0, 107, 163)",
                marginBottom: "16px",
              }}
            >
              LIBRARY
            </div>

            {/* H3 */}
            <h3 className="type-h4"
              style={{
                fontSize: "32px",
                fontWeight: 600,
                lineHeight: "48px",
                color: "rgb(8, 43, 69)",
                margin: "0 0 32px",
              }}
            >
              All whitepapers
            </h3>

            {/* Category filter pills */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                marginBottom: "32px",
              }}
            >
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    style={{
                      padding: "8px 16px",
                      borderRadius: "4px",
                      fontSize: "12px",
                      fontWeight: isActive ? 600 : 400,
                      lineHeight: "24px",
                      letterSpacing: "0.24px",
                      border: isActive
                        ? "1px solid rgb(0, 107, 163)"
                        : "1px solid rgb(221, 224, 230)",
                      background: isActive ? "rgb(0, 107, 163)" : "rgb(255, 255, 255)",
                      color: isActive ? "rgb(255, 255, 255)" : "rgb(58, 74, 88)",
                      cursor: "pointer",
                      transition: "all 150ms ease",
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* List rows */}
            <div ref={f3} style={{ display: "flex", flexDirection: "column" }}>
              {filtered.map((paper, idx) => (
                <div
                  key={idx}
                  style={{
                    borderTop: idx === 0 ? "1px solid rgb(221, 224, 230)" : "none",
                    borderBottom: "1px solid rgb(221, 224, 230)",
                    padding: "24px 0",
                  }}
                >
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr auto",
                      gap: "32px",
                      alignItems: "start",
                    }}
                  >
                    {/* Left: meta + title + desc */}
                    <div>
                      {/* Meta row: category badge + date + pages */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          marginBottom: "8px",
                        }}
                      >
                        <CategoryBadge cat={paper.category} />
                        <span
                          style={{
                            fontSize: "12px",
                            color: "rgba(74, 71, 64, 0.60)",
                            lineHeight: "24px",
                          }}
                        >
                          {paper.date}
                        </span>
                        <span
                          style={{
                            fontSize: "12px",
                            color: "rgba(74, 71, 64, 0.60)",
                            lineHeight: "24px",
                          }}
                        >
                          {paper.pages}
                        </span>
                      </div>

                      {/* Title: 20px/600/24px/rgb(8,43,69) */}
                      <LangLink href={paperHref(paper.title)} style={{ textDecoration: "none" }}>
                        <h4 className="type-h6"
                          style={{
                            fontSize: "20px",
                            fontWeight: 600,
                            lineHeight: "24px",
                            color: "rgb(8, 43, 69)",
                            margin: "0 0 6px",
                          }}
                        >
                          {paper.title}
                        </h4>
                      </LangLink>

                      {/* Desc: 12px/400/20px/rgb(74,71,64) */}
                      <p
                        style={{
                          fontSize: "12px",
                          fontWeight: 400,
                          lineHeight: "20px",
                          color: "rgb(74, 71, 64)",
                          margin: 0,
                          maxWidth: "640px",
                        }}
                      >
                        {paper.desc}
                      </p>
                    </div>

                    {/* Right: Download + View summary */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                        gap: "8px",
                        paddingTop: "4px",
                        minWidth: "120px",
                      }}
                    >
                      <LangLink
                        href={paperRequestHref(paper.title)}
                        className="btn-primary"
                        style={{
                          fontSize: "12px",
                          padding: "8px 16px",
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        <Download size={12} />
                        Request PDF
                      </LangLink>
                      <LangLink href={paperHref(paper.title)} className="btn-link">
                        View summary
                      </LangLink>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </PageWrapper>
  );
}

export default function Whitepapers() {
  return (
    <EnglishOnlyGuard>
      <WhitepapersInner />
    </EnglishOnlyGuard>
  );
}
