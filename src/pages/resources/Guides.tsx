"use client";

/**
 * IR GUIDES PAGE — Euroland IR
 * Source: euroland-ir-...-max-export(3).json
 * URL:    https://euroland-mockup.netlify.app/resources/ir-guide
 * Viewport: 1440px wide
 *
 * Sections:
 *  S1  hero-navy      — "Resources" eyebrow + "IR Guides" H2 + subtitle
 *  S2  section white  — Introduction: 2-col (left: label+H3+body, right: video placeholder)
 *  S3  section white  — 6 guide rows (numbered 01–06, each a horizontal card with tag+num+title+desc+readtime+Read link)
 */
import { useEffect, useRef } from "react";
import Link from "next/link";
import { PageWrapper } from "@/components/Layout";
import BannerHero from "@/components/layout/BannerHero";
import { Clock } from "lucide-react";
import EnglishOnlyGuard from "@/components/EnglishOnlyGuard";

function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(el); return () => obs.disconnect();
  }, []);
  return ref;
}

const GUIDES = [
  {
    num: "01",
    tag: "IR WEBSITE",
    title: "What Makes a Best-Practice IR Platform",
    desc: "The IR platform is often the first touchpoint for analysts and investors. This guide covers what separates a best-practice IR platform from a compliance checkbox — design, content, accessibility, and investor experience.",
    readTime: "10 min read",
    href: "/platform",
  },
  {
    num: "02",
    tag: "ROI & BUSINESS CASE",
    title: "Measuring the ROI of Investor Relations",
    desc: "How do you quantify the value of IR to a CFO? This guide provides a practical framework for measuring the return on your IR investment — from reduced cost of capital to improved analyst coverage.",
    readTime: "12 min read",
    href: "/platform/analytics-earnings",
  },
  {
    num: "03",
    tag: "ANALYTICS & REPORTING",
    title: "IR Analytics: What to Track and Why",
    desc: "Data is only useful if you know what to measure. This guide covers the KPIs that matter in IR, how to build a reporting framework, and how to use analytics to improve investor targeting and messaging.",
    readTime: "9 min read",
    href: "/platform/analytics-earnings",
  },
  {
    num: "04",
    tag: "AI & TECHNOLOGY",
    title: "A Practical Guide to AI in Investor Relations",
    desc: "AI is changing how IR teams work — from automated Q&A and earnings preparation to sentiment analysis. This guide separates the practical from the hype and provides a realistic adoption roadmap.",
    readTime: "8 min read",
    href: "/ai",
  },
  {
    num: "05",
    tag: "IPO READINESS",
    title: "IR for IPO: Building the Right Foundation Early",
    desc: "The IR function is often an afterthought in IPO planning. This guide covers what needs to be in place before listing day — and why getting IR right early reduces friction with analysts and investors post-listing.",
    readTime: "15 min read",
    href: "/ipo",
  },
  {
    num: "06",
    tag: "ESG & SUSTAINABILITY",
    title: "ESG Disclosure on the IR Platform",
    desc: "ESG disclosure is now a core investor expectation. This guide covers how to present ESG information on your IR platform in a way that meets regulatory requirements and serves the needs of institutional investors.",
    readTime: "11 min read",
    href: "/solutions/sustainability-reporting",
  },
];

function GuidesInner() {
  const f1 = useFadeUp();
  const f2 = useFadeUp();

  return (
    <PageWrapper>

            <BannerHero
        variant="resources"
        label="Resources"
        title="IR Guides"
        subtitle="Six structured guides for investor relations professionals — covering IR platforms, ROI measurement, IR analytics, AI for investor relations, IPO readiness, and ESG disclosure. Written to be read in sequence or used as standalone references."
        minHeight="440px"
        titleMaxWidth="640px"
        subtitleMaxWidth="560px"
      />

{/* ── S2: INTRODUCTION ─────────────────────────────────────────────────── */}
      {/* section white, 2-col: left text + right video placeholder */}
      <section className="section" style={{ background: "rgb(255, 255, 255)" }}>
        <div className="container" style={{ maxWidth: "1536px", padding: "0 48px" }}>
          <div ref={f1} className="fade-up">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "64px",
                alignItems: "center",
              }}
            >
              {/* Left: label + H3 + body */}
              <div>
                {/* Eyebrow: 12px/600/uppercase/rgb(0,107,163) */}
                <div
                  className="u-label"
                  style={{
                    fontSize: "12px",
                    fontWeight: 500,
                    lineHeight: "24px",
                    letterSpacing: "0.96px",
                    textTransform: "uppercase",
                    color: "#28628F",
                    marginBottom: "16px",
                  }}
                >
                  INTRODUCTION
                </div>

                {/* H3: 32px/400/40px/rgb(13,27,42) */}
                <h3 className="type-h4"
                  style={{
                    fontSize: "32px",
                    fontWeight: 400,
                    lineHeight: "40px",
                    letterSpacing: "0.01em",
                    color: "rgb(13, 27, 42)",
                    margin: "0 0 20px",
                  }}
                >
                  Why IR infrastructure matters more than most companies realise
                </h3>

                {/* Body: 16px/400/24px/rgb(58,74,88) */}
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "24px",
                    letterSpacing: "0.01em",
                    color: "rgb(58, 74, 88)",
                    margin: 0,
                  }}
                >
                  Most IR teams are managing more complexity with fewer resources than ever before. These six guides are designed to give IR professionals a clear, practical framework — from the basics of a best-practice IR platform to the emerging role of AI in investor communications.
                </p>
              </div>

              <div
                style={{
                  borderRadius: "8px",
                  overflow: "hidden",
                  aspectRatio: "16 / 9",
                  boxShadow: "0 10px 28px rgba(8,43,69,0.12)",
                }}
              >
                <video
                  src="/Euroland_IR_Video.mp4"
                  controls
                  preload="metadata"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── S3: GUIDE LIST ───────────────────────────────────────────────────── */}
      {/* section white, 6 horizontal guide rows separated by dividers */}
      <section className="section" style={{ background: "rgb(255, 255, 255)", paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: "1536px", padding: "0 48px 80px" }}>
          <div ref={f2} className="fade-up">
            {GUIDES.map((guide, idx) => (
              <a
                key={guide.num}
                href={guide.href}
                style={{
                  display: "block",
                  textDecoration: "none",
                  borderTop: idx === 0 ? "1px solid rgb(221, 224, 230)" : "none",
                  borderBottom: "1px solid rgb(221, 224, 230)",
                  padding: "32px 0",
                  transition: "background 200ms ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgb(240, 250, 255)";
                  (e.currentTarget as HTMLAnchorElement).style.marginLeft = "-48px";
                  (e.currentTarget as HTMLAnchorElement).style.marginRight = "-48px";
                  (e.currentTarget as HTMLAnchorElement).style.paddingLeft = "48px";
                  (e.currentTarget as HTMLAnchorElement).style.paddingRight = "48px";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                  (e.currentTarget as HTMLAnchorElement).style.marginLeft = "0";
                  (e.currentTarget as HTMLAnchorElement).style.marginRight = "0";
                  (e.currentTarget as HTMLAnchorElement).style.paddingLeft = "0";
                  (e.currentTarget as HTMLAnchorElement).style.paddingRight = "0";
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "80px 1fr auto",
                    gap: "32px",
                    alignItems: "start",
                  }}
                >
                  {/* Number: large, light, grey */}
                  <div
                    style={{
                      fontSize: "40px",
                      fontWeight: 300,
                      lineHeight: "48px",
                      letterSpacing: "-0.4px",
                      color: "rgb(200, 210, 220)",
                      paddingTop: "4px",
                    }}
                  >
                    {guide.num}
                  </div>

                  {/* Content: tag + title + desc */}
                  <div>
                    {/* Tag: 12px/600/uppercase/rgb(0,107,163) */}
                    <div
                      style={{
                        fontSize: "12px",
                        fontWeight: 500,
                        lineHeight: "24px",
                        letterSpacing: "0.96px",
                        textTransform: "uppercase",
                        color: "#327AB1",
                        marginBottom: "4px",
                      }}
                    >
                      {guide.tag}
                    </div>

                    {/* H5 title: 20px/600/28px/rgb(13,27,42) */}
                    <h5 className="type-h6"
                      style={{
                        fontSize: "20px",
                        fontWeight: 600,
                        lineHeight: "28px",
                        letterSpacing: "0.01em",
                        color: "rgb(13, 27, 42)",
                        margin: "0 0 8px",
                      }}
                    >
                      {guide.title}
                    </h5>

                    {/* Description: 14px/400/24px/rgb(58,74,88) */}
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: 400,
                        lineHeight: "24px",
                        letterSpacing: "0.01em",
                        color: "rgb(58, 74, 88)",
                        margin: 0,
                        maxWidth: "680px",
                      }}
                    >
                      {guide.desc}
                    </p>
                  </div>

                  {/* Right: read time + Read link */}
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
                    {/* Read time: 12px/400/rgb(91,107,122) */}
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        fontSize: "12px",
                        fontWeight: 400,
                        lineHeight: "24px",
                        color: "rgb(91, 107, 122)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <Clock size={12} style={{ color: "rgb(91, 107, 122)" }} />
                      {guide.readTime}
                    </span>

                    {/* Read link: 12px/600/rgb(0,107,163) */}
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: 600,
                        lineHeight: "24px",
                        letterSpacing: "0.48px",
                        color: "#327AB1",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      Read →
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

    </PageWrapper>
  );
}

export default function Guides() {
  return (
    <EnglishOnlyGuard>
      <GuidesInner />
    </EnglishOnlyGuard>
  );
}
