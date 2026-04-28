"use client";
// Euroland IR — Press Releases listing page
// URL: /company/newsroom/press

import LangLink from "@/components/LangLink";
import { PageWrapper } from "@/components/Layout";

// ── Press release data (mirrors PressReleaseDetail.tsx) ───────────────────────
const RELEASES = [
  {
    slug: "euroland-ir-expands-platform-ai-disclosure-tools",
    tag: "PRESS RELEASE",
    date: "12 Mar 2026",
    title: "Euroland IR expands best-practice platform with new AI disclosure tools",
    subtitle:
      "New AI-assisted drafting and disclosure management capabilities now available to all 1,400+ listed clients.",
  },

];

export default function PressReleases() {
  return (
    <PageWrapper>
      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="hero-navy banner-hero-section"
        style={{
          minHeight: "440px",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(160deg, rgb(13, 27, 42), rgb(14, 45, 74) 60%, rgb(8, 43, 69))",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(160deg, rgba(13,27,42,0.92), rgba(14,45,74,0.90) 60%, rgba(8,43,69,0.94))",
            pointerEvents: "none",
          }}
        />
        <div
          className="container banner-hero-container"
          style={{
            maxWidth: "1536px",
            padding: "120px 48px 80px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Breadcrumb */}
          <LangLink
            href="/company/newsroom"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "13px",
              fontWeight: 400,
              lineHeight: "24px",
              color: "rgba(255,255,255,0.5)",
              textDecoration: "none",
              marginBottom: "24px",
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Newsroom
          </LangLink>

          {/* Heading */}
          <h2
            className="type-h2"
            style={{
              fontSize: "48px",
              fontWeight: 300,
              lineHeight: "64px",
              letterSpacing: "-0.01em",
              color: "rgb(255, 255, 255)",
              margin: "0 0 16px",
              maxWidth: "640px",
            }}
          >
            Press Releases
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "20px",
              fontWeight: 400,
              lineHeight: "32px",
              letterSpacing: "0.01em",
              color: "rgba(255, 255, 255, 0.75)",
              maxWidth: "520px",
              margin: 0,
            }}
          >
            The latest announcements, product updates, and award news from Euroland IR.
          </p>
        </div>
      </section>

      {/* ── 2. RELEASES LIST ────────────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: "rgb(248, 249, 251)",
          padding: "64px 48px 80px",
        }}
      >
        <div
          style={{
            maxWidth: "1536px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0",
            }}
          >
            {RELEASES.map((release, idx) => (
              <LangLink
                key={release.slug}
                href={`/company/newsroom/press/${release.slug}`}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: "48px",
                  padding: "32px 0",
                  borderBottom: "1px solid rgb(221, 224, 230)",
                  borderTop: idx === 0 ? "1px solid rgb(221, 224, 230)" : "none",
                  textDecoration: "none",
                  transition: "background-color 150ms ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                    "rgba(50, 122, 177, 0.04)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                }}
              >
                {/* Left: date + tag */}
                <div
                  style={{
                    flexShrink: 0,
                    width: "160px",
                    paddingTop: "4px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "13px",
                      fontWeight: 400,
                      lineHeight: "24px",
                      color: "rgb(100, 116, 139)",
                      margin: "0 0 8px",
                    }}
                  >
                    {release.date}
                  </p>
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: "11px",
                      fontWeight: 500,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "rgb(255, 255, 255)",
                      backgroundColor: "#327AB1",
                      padding: "2px 8px",
                      borderRadius: "2px",
                    }}
                  >
                    {release.tag}
                  </span>
                </div>

                {/* Centre: title + subtitle */}
                <div style={{ flex: 1 }}>
                  <p
                    style={{
                      fontSize: "18px",
                      fontWeight: 600,
                      lineHeight: "28px",
                      color: "rgb(13, 27, 42)",
                      margin: "0 0 8px",
                    }}
                  >
                    {release.title}
                  </p>
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: 400,
                      lineHeight: "24px",
                      color: "rgb(58, 74, 88)",
                      margin: 0,
                    }}
                  >
                    {release.subtitle}
                  </p>
                </div>

                {/* Right: READ MORE arrow */}
                <div
                  style={{
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "13px",
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    color: "#327AB1",
                    paddingTop: "4px",
                    whiteSpace: "nowrap",
                  }}
                >
                  READ MORE
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              </LangLink>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
