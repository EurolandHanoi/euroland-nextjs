"use client";

/**
 * NEWSROOM PAGE — Euroland IR
 * Source: euroland-ir-...-max-export(12).json
 * URL:    /company/newsroom
 * Viewport: 2004px → container 1536px → inner 1440px
 *
 * Sections:
 *  1. Hero (y:0–544):            dark navy, eyebrow + H2 + subtitle
 *  2. Filter tabs (y:544–586):   All / Press / Product / Award
 *  3. Events & Highlights (y:586–1562): light grey, 3-col × 2-row event cards (469×352)
 *  4. Upcoming Events (y:1562–2197): white, 2-col event rows with date block
 *  5. Press Releases (y:2197–2971): light grey, 4 horizontal press rows
 *  6. Euroland in the News (y:2971–3682): white, 3-col media cards (464×455)
 *  7. Newsletter (y:3682–4145):  white, centered card with email input + SUBSCRIBE
 *  8. Press Contact (y:4145–4445): dark navy, eyebrow + H3 + subtitle + Submit btn
 */
import { useState } from "react";
import Link from "next/link";
import LangLink from "@/components/LangLink";
import { PageWrapper } from "@/components/Layout";
import BannerHero from "@/components/layout/BannerHero";
import { Calendar, ExternalLink } from "lucide-react";
import { getEventHighlightImage, getHomepageEventHighlights } from "@/data/eventsHighlights";

// ── Data ──────────────────────────────────────────────────────────────────────

const EVENT_HIGHLIGHTS = getHomepageEventHighlights(3).map((event) => ({
  tag: event.tag,
  title: event.title,
  tall: false,
  slug: event.slug,
  image: getEventHighlightImage(event),
}));

const UPCOMING_EVENTS = [
  { day: "25", month: "MAR", tag: "WEBINAR", title: "AI for IR: a practical guide for listed companies", location: "Online", slug: "ai-for-ir-webinar-2026" },
  { day: "8", month: "APR", tag: "CONFERENCE", title: "IR Magazine Europe Awards 2026", location: "London, UK", slug: "ir-magazine-europe-awards-2026" },
  { day: "22", month: "MAY", tag: "WORKSHOP", title: "Best Practice IR Platform Workshop", location: "Copenhagen, Denmark", slug: "best-practice-ir-website-workshop" },
  { day: "15", month: "MAY", tag: "CONFERENCE", title: "NIRI Annual Conference 2026", location: "Chicago, USA", slug: "niri-annual-conference-2026" },
];

const PRESS_RELEASES = [
  {
    date: "12 Mar 2026",
    title: "Euroland IR expands best-practice platform with AI-powered IR search",
    desc: "New AI-powered IR search capabilities help stakeholders access verified Investor Relations information across websites and IR apps.",
    slug: "euroland-ir-expands-platform-ai-disclosure-tools",
  },

];

const MEDIA_COVERAGE = [
  {
    outlet: "FINANCIAL TIMES",
    date: "10 Mar 2026",
    title: "How AI is transforming Investor Relations for public companies",
    desc: "A closer look at the tools and workflows helping IR teams reduce manual work and improve disclosure consistency.",
  },
  {
    outlet: "IR MAGAZINE",
    date: "3 Mar 2026",
    title: "Best practice IR platforms: what separates the leaders from the rest",
    desc: "An analysis of 500 IR platforms reveals five structural qualities that drive investor engagement.",
  },
  {
    outlet: "BLOOMBERG",
    date: "18 Feb 2026",
    title: "Nordic IR technology firms lead global expansion",
    desc: "Scandinavian IR software providers are rapidly gaining market share across Europe and North America.",
  },
];

const FILTER_TABS = ["All", "Press", "Product", "Award"];

// ── Components ────────────────────────────────────────────────────────────────

function EventHighlightCard({ tag, title, tall, slug, image }: { tag: string; title: string; tall: boolean; slug: string; image?: string }) {
  return (
    /* node[53] geo:282,782 469x352 */
    <LangLink href={`/events-highlights/${slug}`} style={{ textDecoration: "none" }}>
    <div
      className="card-fixed"
      style={{
        height: "280px",
        background: "rgb(8, 43, 69)",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      {/* Background photo if available */}
      {image && (
        <img
          src={image}
          alt={title}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.55 }}
        />
      )}
      {/* Gradient overlay for readability */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: image
            ? "linear-gradient(to top, rgba(8,43,69,0.92) 0%, rgba(8,43,69,0.4) 60%, rgba(8,43,69,0.15) 100%)"
            : "linear-gradient(135deg, rgba(0,107,163,0.3) 0%, rgba(8,43,69,0.8) 100%)",
        }}
      />
      {/* Bottom label area — node[56] geo:299,977 436x52 */}
      <div
        style={{
          position: "absolute",
          bottom: "16px",
          left: "16px",
          right: "16px",
        }}
      >
        {/* Tag — 12px/700/24px/0.96px/uppercase/rgb(0,173,240) */}
        <div
          style={{
            fontSize: "var(--fs-sm)",
            fontWeight: 500,
            lineHeight: "var(--lh-base)",
            letterSpacing: "0.96px",
            textTransform: "uppercase",
            color: "var(--label-blue-dark)",
            marginBottom: "0px",
          }}
        >
          {tag}
        </div>
        {/* Title — 12px/600/24px/0.16px/rgb(255,255,255) */}
        <div
          style={{
            fontSize: "var(--fs-sm)",
            fontWeight: 600,
            lineHeight: "var(--lh-base)",
            letterSpacing: "0.01em",
            color: "rgb(255, 255, 255)",
          }}
        >
          {title}
        </div>
      </div>
    </div>
    </LangLink>
  );
}

function UpcomingEventRow({ day, month, tag, title, location, slug }: { day: string; month: string; tag: string; title: string; location: string; slug: string }) {
  return (
    /* node[97] geo:282,1758 708x178 */
    <LangLink href={`/company/newsroom/events/${slug}`} style={{ textDecoration: "none" }}>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "24px",
        padding: "32px",
        background: "rgb(255, 255, 255)",
        border: "1px solid rgb(221, 224, 230)",
        borderRadius: "4px",
        cursor: "pointer",
        transition: "box-shadow 150ms ease",
      }}
    >
      {/* Date block — node[99] geo:323,1806 80x80 */}
      <div
        style={{
          width: "80px",
          height: "80px",
          background: "rgb(8, 43, 69)",
          borderRadius: "4px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {/* Day — 32px/300/32px/0.16px/rgb(255,255,255) */}
        <div
          style={{
            fontSize: "var(--fs-xl)",
            fontWeight: 300,
            lineHeight: "var(--lh-lg)",
            letterSpacing: "0.01em",
            color: "rgb(255, 255, 255)",
          }}
        >
          {day}
        </div>
        {/* Month — 12px/700/24px/0.72px/uppercase/rgb(0,173,240) */}
        <div
          style={{
            fontSize: "var(--fs-sm)",
            fontWeight: 500,
            lineHeight: "var(--lh-base)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--label-blue-dark)",
          }}
        >
          {month}
        </div>
      </div>

      {/* Content */}
      <div style={{ flex: 1 }}>
        {/* Tag — 12px/700/24px/0.96px/uppercase/rgb(0,107,163) */}
        <div
          style={{
            fontSize: "var(--fs-sm)",
            fontWeight: 500,
            lineHeight: "var(--lh-base)",
            letterSpacing: "0.96px",
            textTransform: "uppercase",
            color: "var(--label-blue-light)",
            marginBottom: "16px",
          }}
        >
          {tag}
        </div>
        {/* Title — 24px/500/32px/0.16px/rgb(13,27,42) */}
        <div
          style={{
            fontSize: "var(--fs-lg)",
            fontWeight: 500,
            lineHeight: "var(--lh-lg)",
            letterSpacing: "0.01em",
            color: "rgb(13, 27, 42)",
            marginBottom: "16px",
          }}
        >
          {title}
        </div>
        {/* Location — 12px/600/24px/0.16px/rgb(58,74,88) */}
        <div
          style={{
            fontSize: "var(--fs-sm)",
            fontWeight: 600,
            lineHeight: "var(--lh-base)",
            letterSpacing: "0.01em",
            color: "rgb(58, 74, 88)",
          }}
        >
          {location}
        </div>
      </div>
    </div>
    </LangLink>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Newsroom() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [email, setEmail] = useState("");

  return (
    <PageWrapper>

      {/* ── 1. HERO (y:0–544) ────────────────────────────────────────────── */}
      <BannerHero
        variant="resources"
        label="Newsroom"
        title="Newsroom"
        subtitle="The latest press releases, Investor Relations product updates, and award announcements from Euroland IR — trusted IR technology for publicly listed companies."
      />

      {/* ── 2. FILTER TABS — hidden for now */}
      {false && <div
        style={{
          background: "rgb(255, 255, 255)",
          borderBottom: "1px solid rgb(221, 224, 230)",
        }}
      >
        <div className="container" style={{ maxWidth: "1536px", padding: "0 48px" }}>
          <div style={{ display: "flex", gap: "0" }}>
            {FILTER_TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                style={{
                  padding: "0 16px",
                  height: "42px",
                  fontSize: "var(--fs-sm)",
                  fontWeight: activeFilter === tab ? 600 : 600,
                  color: activeFilter === tab ? "rgb(255, 255, 255)" : "rgb(58, 74, 88)",
                  background: activeFilter === tab ? "rgb(34, 37, 43)" : "transparent",
                  border: "none",
                  cursor: "pointer",
                  letterSpacing: "0.24px",
                  transition: "background 150ms ease, color 150ms ease",
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>}

      {/* ── 3. EVENTS & HIGHLIGHTS (y:586–1562, h:976) ───────────────────── */}
      {/* node[45] geo:0,586 2004x976 — light grey bg */}
      <section style={{ background: "rgb(245, 247, 250)", padding: "64px 0" }}>
        <div className="container" style={{ maxWidth: "1536px", padding: "0 48px" }}>
          {/* Section header */}
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "32px" }}>
            <div>
              {/* Eyebrow — node[49] rgb(0,107,163) */}
              <div className="u-label" style={{ marginBottom: "16px" }}>PRODUCT</div>
              {/* H3 — node[50] 40px/400/48px/0.2px/rgb(13,27,42) */}
              <h3
                style={{
                  fontSize: "var(--fs-2xl)",
                  fontWeight: 400,
                  lineHeight: "var(--lh-2xl)",
                  letterSpacing: "0.005em",
                  color: "rgb(13, 27, 42)",
                  margin: 0,
                }}
              >
                Events &amp; Highlights
              </h3>
            </div>
            <Calendar size={20} color="rgb(13, 27, 42)" style={{ marginTop: "48px" }} />
          </div>

          {/* 3-col grid — 2 rows of 3 */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
            {EVENT_HIGHLIGHTS.map((e, i) => (
              <EventHighlightCard key={i} tag={e.tag} title={e.title} tall={e.tall} slug={e.slug} image={(e as any).image} />
            ))}
          </div>

          {/* View all events link */}
          <div style={{ marginTop: "32px", display: "flex", justifyContent: "flex-end" }}>
            <LangLink
              href="/events-highlights"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "var(--fs-sm)",
                fontWeight: 600,
                letterSpacing: "0.96px",
                textTransform: "uppercase" as const,
                color: "var(--label-blue-light)",
                textDecoration: "none",
              }}
            >
              VIEW ALL EVENTS
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
            </LangLink>
          </div>
        </div>
      </section>

      {/* ── 4. UPCOMING EVENTS — hidden for now */}
      {false && <section style={{ background: "rgb(255, 255, 255)", padding: "64px 0" }}>
        <div className="container" style={{ maxWidth: "1536px", padding: "0 48px" }}>
          {/* Section header */}
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "32px" }}>
            <div>
              <div className="u-label" style={{ marginBottom: "16px" }}>EVENTS</div>
              <h3 style={{ fontSize: "var(--fs-2xl)", fontWeight: 400, lineHeight: "var(--lh-2xl)", letterSpacing: "0.005em", color: "rgb(13, 27, 42)", margin: 0 }}>
                Upcoming Events
              </h3>
            </div>
            <Calendar size={20} color="rgb(13, 27, 42)" style={{ marginTop: "48px" }} />
          </div>

          {/* 2-col grid — node[96] geo:282,1758 1440x379 */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
            }}
          >
            {UPCOMING_EVENTS.map((e, i) => (
              <UpcomingEventRow key={i} day={e.day} month={e.month} tag={e.tag} title={e.title} location={e.location} slug={e.slug} />
            ))}
          </div>
        </div>
      </section>}

      {/* ── 5. PRESS RELEASES (y:2197–2971, h:774) ──────────────────────── */}
      {/* light grey bg */}
      <section style={{ background: "rgb(245, 247, 250)", padding: "64px 0" }}>
        <div className="container" style={{ maxWidth: "1536px", padding: "0 48px" }}>
          {/* Section header */}
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "32px" }}>
            <div>
              <div className="u-label" style={{ marginBottom: "16px" }}>PRESS</div>
              <h3 style={{ fontSize: "var(--fs-2xl)", fontWeight: 400, lineHeight: "var(--lh-2xl)", letterSpacing: "0.005em", color: "rgb(13, 27, 42)", margin: 0 }}>
                Press Releases
              </h3>
            </div>
            <ExternalLink size={20} color="rgb(13, 27, 42)" style={{ marginTop: "48px" }} />
          </div>

          {/* Press rows — node[131] geo:282,2391 1440x130 */}
          <div style={{ display: "flex", flexDirection: "column", marginBottom: "32px" }}>
            {PRESS_RELEASES.map((pr, i) => (
              <div
                key={i}
                className="press-row"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "24px",
                  padding: "16px 0",
                  borderBottom: "1px solid rgb(221, 224, 230)",
                }}
              >
                  {/* Date — 12px/600/24px/0.48px/rgb(58,74,88) */}
                <div
                  style={{
                    fontSize: "var(--fs-sm)",
                    fontWeight: 600,
                    lineHeight: "var(--lh-base)",
                    letterSpacing: "0.48px",
                    color: "rgb(58, 74, 88)",
                    minWidth: "140px",
                    flexShrink: 0,
                    paddingTop: "0px",
                  }}
                >
                  {pr.date}
                </div>
                {/* Content — node[135] geo:454,2424 1147x64 */}
                <div style={{ flex: 1 }}>
                  {/* Title — 24px/500/32px/0.16px/rgb(13,27,42) */}
                  <div
                    style={{
                      fontSize: "var(--fs-lg)",
                      fontWeight: 500,
                      lineHeight: "var(--lh-lg)",
                      letterSpacing: "0.01em",
                      color: "rgb(13, 27, 42)",
                      marginBottom: "16px",
                    }}
                  >
                    {pr.title}
                  </div>
                  {/* Desc — 12px/400/24px/0.16px/rgb(58,74,88) */}
                  <div
                    style={{
                      fontSize: "var(--fs-sm)",
                      fontWeight: 400,
                      lineHeight: "var(--lh-base)",
                      letterSpacing: "0.01em",
                      color: "rgb(58, 74, 88)",
                    }}
                  >
                    {pr.desc}
                  </div>
                </div>
                {/* Read more — node[138] rgb(0,107,163) */}
                <LangLink
                  href={`/company/newsroom/press/${pr.slug}`}
                  style={{
                    fontSize: "var(--fs-sm)",
                    fontWeight: 500,
                    lineHeight: "var(--lh-base)",
                    letterSpacing: "0.96px",
                    textTransform: "uppercase",
                    color: "var(--label-blue-light)",
                    textDecoration: "none",
                    flexShrink: 0,
                    paddingTop: "0px",
                  }}
                >
                  READ MORE
                </LangLink>
              </div>
            ))}
          </div>

          {/* View all press releases link */}
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <LangLink
              href="/company/newsroom/press"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "var(--fs-sm)",
                fontWeight: 600,
                letterSpacing: "0.96px",
                textTransform: "uppercase" as const,
                color: "var(--label-blue-light)",
                textDecoration: "none",
              }}
            >
              VIEW ALL PRESS RELEASES
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
            </LangLink>
          </div>
        </div>
      </section>

      {/* ── SECTIONS 6–8: Media Coverage, Newsletter, Press Contact — hidden until ready */}
      {false && <>
      {/* 6. EUROLAND IN THE NEWS */}
      {/* node[169] geo:0,2971 2004x711 — white bg */}
      <section style={{ background: "rgb(255, 255, 255)", padding: "64px 0" }}>
        <div className="container" style={{ maxWidth: "1536px", padding: "0 48px" }}>
          {/* Section header */}
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "32px" }}>
            <div>
              <div className="u-label" style={{ marginBottom: "16px" }}>MEDIA COVERAGE</div>
              <h3 style={{ fontSize: "var(--fs-2xl)", fontWeight: 400, lineHeight: "var(--lh-2xl)", letterSpacing: "0.005em", color: "rgb(13, 27, 42)", margin: 0 }}>
                Euroland in the News
              </h3>
            </div>
            <ExternalLink size={20} color="rgb(13, 27, 42)" style={{ marginTop: "48px" }} />
          </div>

          {/* 3-col media cards — node[176] geo:282,3166 1440x455 */}
          <div className="grid-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
            {MEDIA_COVERAGE.map((mc, i) => (
              <div
                key={i}
                style={{
                  border: "1px solid rgb(221, 224, 230)",
                  borderRadius: "4px",
                  overflow: "hidden",
                }}
              >
                {/* Media logo area — node[178] geo:283,3167 462x200 */}
                <div
                  style={{
                    height: "200px",
                    background: "rgb(240, 243, 247)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: "var(--fs-base)",
                      fontWeight: 700,
                      letterSpacing: "1.4px",
                      textTransform: "uppercase",
                      color: "rgb(58, 74, 88)",
                    }}
                  >
                    {mc.outlet}
                  </span>
                </div>
                {/* Content — node[179] geo:283,3367 462x254 */}
                <div style={{ padding: "32px" }}>
                  {/* Outlet + date row — node[180] */}
                  <div style={{ display: "flex", gap: "8px", marginBottom: "16px", alignItems: "center" }}>
                    <span
                      style={{
                        fontSize: "var(--fs-sm)",
                        fontWeight: 500,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "var(--label-blue-light)",
                      }}
                    >
                      {mc.outlet}
                    </span>
                    <span style={{ fontSize: "var(--fs-sm)", fontWeight: 400, lineHeight: "var(--lh-base)", letterSpacing: "0.01em", color: "rgb(58, 74, 88)" }}>{mc.date}</span>
                  </div>
                  {/* Title — 24px/500/32px/0.16px/rgb(13,27,42) */}
                  <div
                    style={{
                      fontSize: "var(--fs-lg)",
                      fontWeight: 500,
                      lineHeight: "var(--lh-lg)",
                      letterSpacing: "0.01em",
                      color: "rgb(13, 27, 42)",
                      marginBottom: "16px",
                    }}
                  >
                    {mc.title}
                  </div>
                  {/* Desc — 12px/400/24px/0.16px/rgb(58,74,88) */}
                  <div
                    style={{
                      fontSize: "var(--fs-sm)",
                      fontWeight: 400,
                      lineHeight: "var(--lh-base)",
                      letterSpacing: "0.01em",
                      color: "rgb(58, 74, 88)",
                      marginBottom: "16px",
                    }}
                  >
                    {mc.desc}
                  </div>
                  {/* Read more */}
                  <a
                    href="#"
                    style={{
                      fontSize: "var(--fs-sm)",
                      fontWeight: 500,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--label-blue-light)",
                      textDecoration: "none",
                    }}
                  >
                    READ MORE →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. NEWSLETTER (y:3682–4145, h:464) ──────────────────────────── */}
      {/* node[204] geo:0,3682 2004x464 — white bg */}
      <section style={{ background: "rgb(255, 255, 255)", padding: "64px 0" }}>
        <div className="container" style={{ maxWidth: "1536px", padding: "0 48px" }}>
          {/* Centered card — node[206] geo:682,3746 640x335 */}
          <div
            style={{
              maxWidth: "640px",
              margin: "0 auto",
              border: "1px solid rgb(221, 224, 230)",
              borderRadius: "4px",
              padding: "48px",
              textAlign: "center",
            }}
          >
            {/* Eyebrow — node[207] rgb(0,107,163) */}
            <div className="u-label u-label-center" style={{ marginBottom: "16px", textAlign: "center" }}>NEWSLETTER</div>
            {/* H3 — 32px/400/40px/0.16px/rgb(13,27,42) */}
            <h3 className="type-h4"
              style={{
                fontSize: "var(--fs-xl)",
                fontWeight: 400,
                lineHeight: "var(--lh-xl)",
                color: "rgb(13, 27, 42)",
                margin: "0 0 16px",
              }}
            >
              Stay ahead in IR
            </h3>
            {/* Subtitle — node[209] 14px/400/24px/rgb(58,74,88) */}
            <p
              style={{
                fontSize: "var(--fs-base)",
                fontWeight: 400,
                lineHeight: "var(--lh-base)",
                letterSpacing: "0.01em",
                color: "rgb(58, 74, 88)",
                margin: "0 0 32px",
              }}
            >
              Monthly insights on best practice IR, regulatory updates, and technology trends — delivered to your inbox.
            </p>
            {/* Email input + Subscribe — node[210] geo:731,3983 542x50 */}
            <div style={{ display: "flex", gap: "0" }}>
              <input
                type="email"
                placeholder="Enter email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  flex: 1,
                  height: "50px",
                  padding: "0 16px",
                  border: "1px solid rgb(221, 224, 230)",
                  borderRight: "none",
                  borderRadius: "4px 0 0 4px",
                  fontSize: "var(--fs-base)",
                  color: "rgb(13, 27, 42)",
                  outline: "none",
                  background: "rgb(255, 255, 255)",
                }}
              />
              {/* Subscribe button — node[212] geo:1150,3983 124x50 */}
              <button
                style={{
                  height: "50px",
                  padding: "0 20px",
                  background: "rgb(0, 173, 240)",
                  color: "rgb(255, 255, 255)",
                  border: "none",
                  borderRadius: "0 4px 4px 0",
                  fontSize: "var(--fs-sm)",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. PRESS CONTACT (y:4145–4445, h:300) ───────────────────────── */}
      {/* node[213] geo:0,4145 2004x300 — dark navy bg */}
      <section
        style={{
          background: "rgb(8, 43, 69)",
          padding: "64px 0",
        }}
      >
        <div
          className="container"
          style={{
            maxWidth: "1536px",
            padding: "0 48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Left: eyebrow + H3 + subtitle */}
          <div style={{ maxWidth: "860px" }}>
            {/* Eyebrow — node[216] rgb(91,200,245) */}
            <div className="u-label u-label-dark" style={{ marginBottom: "16px" }}>
              MEDIA ENQUIRIES
            </div>
            {/* H3 — node[217] geo:282,4277 1245x48 — 40px/300/48px/white */}
            <h3
              style={{
                fontSize: "var(--fs-2xl)",
                fontWeight: 300,
                lineHeight: "var(--lh-2xl)",
                color: "rgb(255, 255, 255)",
                margin: "0 0 16px",
              }}
            >
              Press contact
            </h3>
            {/* Subtitle — 16px/400/24px/0.16px/rgba(255,255,255,0.7) */}
            <p
              style={{
                fontSize: "var(--fs-base)",
                fontWeight: 400,
                lineHeight: "var(--lh-base)",
                letterSpacing: "0.01em",
                color: "rgba(255, 255, 255, 0.7)",
                margin: 0,
              }}
            >
              For press enquiries, interview requests, or media resources, please contact our communications team.
            </p>
          </div>

          {/* Submit button — node[219] geo:1575,4271 147x48 */}
          <button
            className="btn-primary"
            style={{ whiteSpace: "nowrap", flexShrink: 0 }}
          >
            Submit
          </button>
        </div>
      </section>

      </>}
      {/* ── END HIDDEN SECTIONS ─────────────────────────────────────────────────── */}

    </PageWrapper>
  );
}



