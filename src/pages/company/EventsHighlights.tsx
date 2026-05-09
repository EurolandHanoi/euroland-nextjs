"use client";

// Euroland IR — Events & Highlights page
// Source: max-export(14).json
// URL: /events-highlights
// Viewport: 2004px → container 1536px → inner 1440px
//
// Sections:
//  1. Hero (y:64–420):       dark navy, eyebrow + H2 + subtitle, event photo bg
//  2. Filter tabs (y:420–570): All / Conference / Awards / Product Showcase / Workshop / Investor Event / Forum / Reception
//  3. Featured card (y:570–990): full-width 1440×420 dark gradient card
//  4. Grid row 1 (y:1038–1454): 3-col × 416px cards
//  5. Grid row 2 (y:1477–1869): 3-col × 392px cards
//  6. CTA band (y:1929–2229): dark navy, "Join us at our next event"

import { useState } from "react";
import { PageWrapper } from "@/components/Layout";
import Link from "next/link";
import LangLink from "@/components/LangLink";
import {
  EVENT_HIGHLIGHT_FILTER_TABS,
  EVENT_HIGHLIGHT_TAG_COLORS,
  getEventHighlightImage,
  getFilteredEventHighlights,
} from "@/data/eventsHighlights";

export default function EventsHighlights() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = getFilteredEventHighlights(activeFilter);

  const featured = filtered.find(e => e.featured) || filtered[0];
  const gridEvents = featured ? filtered.filter(e => e.slug !== featured.slug) : [];

  return (
    <PageWrapper>
      {/* ── 1. HERO (y:64–420) ───────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: "rgb(13, 27, 42)",
          minHeight: "356px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle dark overlay for the photo bg */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, rgba(13,27,42,0.92) 0%, rgba(13,27,42,0.75) 50%, rgba(13,27,42,0.85) 100%)",
            zIndex: 1,
          }}
        />
        {/* Background image — events-hero.jpg */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663310772351/J2iCYA6arZjci5hVrUBhtU/events-hero_083b7486.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1536px",
            margin: "0 auto",
            padding: "64px 48px 64px",
          }}
        >
          {/* Eyebrow */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <span
              style={{
                fontSize: "var(--fs-sm)",
                fontWeight: 400,
                lineHeight: "var(--lh-base)",
                letterSpacing: "0.96px",
                textTransform: "uppercase",
                color: "#0074D9",
              }}
            >
              EVENTS &amp; HIGHLIGHTS
            </span>
            <div style={{ width: "25%", height: "2px", backgroundColor: "rgb(91, 200, 245)" }} />
          </div>
          {/* H1 */}
          <h1 className="type-h2"
            style={{
              fontSize: "var(--fs-3xl)",
              fontWeight: 300,
              lineHeight: "var(--lh-3xl)",
              letterSpacing: "-0.01em",
              color: "rgb(255, 255, 255)",
              margin: "0 0 32px",
              maxWidth: "640px",
            }}
          >
            Events &amp; Highlights
          </h1>
          {/* Subtitle */}
          <p
            style={{
              fontSize: "var(--fs-md)",
              fontWeight: 400,
              lineHeight: "var(--lh-lg)",
              letterSpacing: "0.01em",
              color: "rgba(255, 255, 255, 0.75)",
              maxWidth: "520px",
              margin: 0,
            }}
          >
            Conference coverage, award moments, and selected event photography from Euroland IR.
          </p>
        </div>
      </section>

      {/* ── 2. FILTER TABS (y:420–570) ──────────────────────────────────── */}
      <div
        style={{
          backgroundColor: "rgb(255, 255, 255)",
          borderBottom: "1px solid rgb(221, 224, 230)",
          position: "sticky",
          top: "64px",
          zIndex: 10,
        }}
      >
        <div
          style={{
            maxWidth: "1536px",
            margin: "0 auto",
            padding: "0 48px",
            display: "flex",
            gap: "0",
            overflowX: "auto",
          }}
        >
          {EVENT_HIGHLIGHT_FILTER_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              style={{
                padding: "16px 16px",
                fontSize: "var(--fs-sm)",
                fontWeight: activeFilter === tab ? 600 : 400,
                lineHeight: "var(--lh-base)",
                letterSpacing: "0.01em",
                color: activeFilter === tab ? "rgb(13, 27, 42)" : "rgb(100, 116, 139)",
                background: "none",
                border: "none",
                borderBottom: activeFilter === tab ? "2px solid rgb(0, 173, 240)" : "2px solid transparent",
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "color 150ms ease, border-color 150ms ease",
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* ── 3. FEATURED CARD (y:570–990) ────────────────────────────────── */}
      {featured && (
        <div
          style={{
            maxWidth: "1536px",
            margin: "0 auto",
            padding: "48px 48px 0",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "420px",
              borderRadius: "4px",
              overflow: "hidden",
              position: "relative",
              background: "linear-gradient(135deg, rgb(20, 40, 80) 0%, rgb(60, 20, 100) 100%)",
              cursor: "pointer",
            }}
          >
            {/* Photo count badge */}
            <div
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                backgroundColor: "rgba(0,0,0,0.5)",
                color: "rgb(255,255,255)",
                fontSize: "var(--fs-sm)",
                fontWeight: 600,
                padding: "16px 10px",
                borderRadius: "2px",
                zIndex: 2,
              }}
            >
              {featured.photoCount} photos
            </div>
            {/* Real image if available */}
            {getEventHighlightImage(featured) && (
              <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${getEventHighlightImage(featured)})`, backgroundSize: "cover", backgroundPosition: "center" }} />
            )}
            {!getEventHighlightImage(featured) && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: 0.3,
              }}
            >
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="m21 15-5-5L5 21" />
              </svg>
            </div>)}
            {/* Gradient overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)",
                zIndex: 1,
              }}
            />
            {/* Content */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "32px",
                zIndex: 2,
              }}
            >
              {/* Tag + date + location row */}
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
                <span
                  style={{
                    fontSize: "var(--fs-sm)",
                    fontWeight: 500,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "rgb(255,255,255)",
                    backgroundColor: EVENT_HIGHLIGHT_TAG_COLORS[featured.tag] || "rgb(0,107,163)",
                    padding: "16px 10px",
                    borderRadius: "2px",
                  }}
                >
                  {featured.tag}
                </span>
                <span style={{ fontSize: "var(--fs-base)", fontWeight: 400, color: "rgba(255,255,255,0.7)" }}>
                  {featured.date} · {featured.location}
                </span>
              </div>
              {/* Title */}
              <h2 className="type-h4"
                style={{
                  fontSize: "var(--fs-xl)",
                  fontWeight: 400,
                  lineHeight: "var(--lh-xl)",
                  letterSpacing: "0.01em",
                  color: "rgb(255,255,255)",
                  margin: "0 0 16px",
                  maxWidth: "640px",
                }}
              >
                {featured.title}
              </h2>
              {/* Desc */}
              <p
                style={{
                  fontSize: "var(--fs-base)",
                  fontWeight: 400,
                  lineHeight: "var(--lh-base)",
                  color: "rgba(255,255,255,0.75)",
                  margin: "0 0 16px",
                  maxWidth: "560px",
                }}
              >
                {featured.desc}
              </p>
              {/* VIEW GALLERY link */}
              <LangLink
                href={`/events-highlights/${featured.slug}`}
                style={{
                  fontSize: "var(--fs-base)",
                  fontWeight: 600,
                  letterSpacing: "0.01em",
                  color: "rgb(0, 173, 240)",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                VIEW GALLERY →
              </LangLink>
            </div>
          </div>
        </div>
      )}

      {/* ── 4 & 5. GRID ROWS (y:1038–1869) ─────────────────────────────── */}
      <div
        style={{
          maxWidth: "1536px",
          margin: "0 auto",
            padding: "64px 48px 64px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
        >
          {gridEvents.map((event) => (
            <div
              key={event.slug}
              style={{
                borderRadius: "4px",
                overflow: "hidden",
                border: "1px solid rgb(221, 224, 230)",
                backgroundColor: "rgb(255, 255, 255)",
                cursor: "pointer",
                transition: "transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(-2px)";
                el.style.boxShadow = "rgba(13, 27, 42, 0.1) 0px 4px 16px 0px, rgba(13, 27, 42, 0.07) 0px 1px 4px 0px";
                el.style.borderColor = "rgb(0, 173, 240)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "none";
                el.style.boxShadow = "none";
                el.style.borderColor = "rgb(221, 224, 230)";
              }}
            >
              {/* Image area — 462×180 */}
              <div
                style={{
                  width: "100%",
                  height: "180px",
                  background: getEventHighlightImage(event) ? `url(${getEventHighlightImage(event)}) center/cover no-repeat` : "linear-gradient(135deg, rgb(20, 40, 80) 0%, rgb(60, 20, 100) 100%)",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {!getEventHighlightImage(event) && <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="m21 15-5-5L5 21" />
                </svg>}
                {/* Photo count */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "12px",
                    right: "12px",
                    backgroundColor: "rgba(0,0,0,0.5)",
                    color: "rgb(255,255,255)",
                    fontSize: "var(--fs-sm)",
                    fontWeight: 600,
                    padding: "16px 8px",
                    borderRadius: "2px",
                  }}
                >
                  {event.photoCount} photos
                </div>
              </div>
              {/* Content area */}
              <div style={{ padding: "32px" }}>
                {/* Tag + date row */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                  <span
                    style={{
                      fontSize: "var(--fs-sm)",
                      fontWeight: 500,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "rgb(255,255,255)",
                      backgroundColor: EVENT_HIGHLIGHT_TAG_COLORS[event.tag] || "rgb(0,107,163)",
                      padding: "16px 8px",
                      borderRadius: "2px",
                    }}
                  >
                    {event.tag}
                  </span>
                  <span style={{ fontSize: "var(--fs-sm)", fontWeight: 400, color: "rgb(100, 116, 139)" }}>
                    {event.date}
                  </span>
                </div>
                {/* Title */}
                <h3 className="type-h6"
                  style={{
                    fontSize: "var(--fs-md)",
                    fontWeight: 600,
                    lineHeight: "var(--lh-md)",
                    letterSpacing: "0.01em",
                    color: "rgb(13, 27, 42)",
                    margin: "0 0 16px",
                  }}
                >
                  {event.title}
                </h3>
                {/* Desc */}
                <p
                  style={{
                    fontSize: "var(--fs-sm)",
                    fontWeight: 400,
                    lineHeight: "var(--lh-base)",
                    color: "rgb(58, 74, 88)",
                    margin: "0 0 16px",
                  }}
                >
                  {event.desc}
                </p>
                {/* Location + VIEW GALLERY */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "var(--fs-sm)", fontWeight: 400, color: "rgb(100, 116, 139)" }}>
                    {event.location}
                  </span>
                  <LangLink
                    href={`/events-highlights/${event.slug}`}
                    style={{
                      fontSize: "var(--fs-sm)",
                      fontWeight: 600,
                      letterSpacing: "0.01em",
                      color: "#0074D9",
                      textDecoration: "none",
                    }}
                  >
                    VIEW GALLERY →
                  </LangLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {false && /* ── 6. CTA BAND (y:1929–2229) ───────────────────────────────────── */
      <section
        style={{
          backgroundColor: "rgb(13, 27, 42)",
          padding: "0 48px",
        }}
      >
        <div
          style={{
            maxWidth: "1536px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "48px",
          }}
        >
          <div>
            {/* Eyebrow */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <span
                style={{
                  fontSize: "var(--fs-sm)",
                  fontWeight: 400,
                  lineHeight: "var(--lh-base)",
                  letterSpacing: "0.96px",
                  textTransform: "uppercase",
                  color: "#0074D9",
                }}
              >
                STAY CONNECTED
              </span>
              <div style={{ width: "25%", height: "2px", backgroundColor: "rgb(91, 200, 245)" }} />
            </div>
            <h2 className="type-h3"
              style={{
                fontSize: "var(--fs-2xl)",
                fontWeight: 300,
                lineHeight: "var(--lh-2xl)",
                letterSpacing: "0.005em",
                color: "rgb(255, 255, 255)",
                margin: "0 0 16px",
              }}
            >
              Join us at our next event
            </h2>
            <p
              style={{
                fontSize: "var(--fs-base)",
                fontWeight: 400,
                lineHeight: "var(--lh-base)",
                color: "rgba(255, 255, 255, 0.7)",
                margin: 0,
              }}
            >
              Discover upcoming conferences, workshops, and webinars for IR professionals.
            </p>
          </div>
          <LangLink href="/company/newsroom"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "16px 24px",
                backgroundColor: "var(--button-blue)",
                color: "rgb(255, 255, 255)",
                fontSize: "var(--fs-sm)",
                fontWeight: 500,
                letterSpacing: "0.96px",
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: "2px",
                whiteSpace: "nowrap",
                transition: "background-color 200ms ease",
              }}
            >
              VIEW UPCOMING EVENTS
          </LangLink>
        </div>
      </section>}
    </PageWrapper>
  );
}

