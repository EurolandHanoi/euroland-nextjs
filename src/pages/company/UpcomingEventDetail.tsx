"use client";
import { useParams } from "next/navigation";

// Euroland IR — Upcoming Event Detail page
// Source: max-export(17).json
// URL: /company/newsroom/events/:slug
// Viewport: 2004px → container 1536px → inner 1440px
//
// Layout (from JSON geometry):
//  Hero (y:0–400):          dark navy bg (h:400), breadcrumb "← Back to Newsroom",
//                           left date block (96×118: day 48px white + month 24px cyan),
//                           right: u-label eyebrow (cyan), H2 (y:212 h:40), meta row (location/date/type icons)
//  Content section (y:400–1386): white bg
//    Left col (w:1056):     event image placeholder (h:280), h4 "About this event" (y:780 h:40),
//                           body paragraph (y:844 h:64), h4 "Agenda highlights" (y:948 h:40),
//                           4 agenda rows (y:1012–1290 h:58 each) with chevron icon + span
//    Right sidebar (w:320): Register Interest card (y:460 h:204, dark navy bg):
//                             label + h5 + REGISTER NOW btn-primary
//                           Event Details card (y:680 h:278): EVENT DETAILS label + Date/Location/Type rows
//                           Other Events card (y:974 h:352): OTHER EVENTS label + 3 event rows
//                             (date block 48×60 + type label + title)
//  CTA band (y:1386–1686):  dark navy, EVENTS eyebrow + H3 + subtitle + VIEW ALL EVENTS button


import Link from "next/link";
import LangLink from "@/components/LangLink";
import { PageWrapper } from "@/components/Layout";

// ── Event data ─────────────────────────────────────────────────────────────────
const EVENTS = [
  {
    slug: "ai-for-ir-webinar-2026",
    day: "25",
    month: "MAR",
    year: "2026",
    type: "WEBINAR",
    title: "AI for IR: a practical guide for listed companies",
    location: "Online",
    date: "25 Mar 2026",
    typeLabel: "Webinar",
    about:
      "A practical, hands-on webinar for IR professionals exploring how purpose-built AI tools can accelerate earnings drafting, improve disclosure consistency, and save IR teams significant time each quarter.",
    agenda: [
      "Introduction to AI in investor relations",
      "Live demonstration: AI-assisted earnings release drafting",
      "Compliance guardrails: what IR-specific AI does differently",
      "Q&A with the Euroland IR product team",
    ],
  },
  {
    slug: "ir-magazine-europe-awards-2026",
    day: "8",
    month: "APR",
    year: "2026",
    type: "CONFERENCE",
    title: "IR Magazine Europe Awards 2026",
    location: "London, UK",
    date: "8 Apr 2026",
    typeLabel: "Conference",
    about:
      "The IR Magazine Europe Awards recognise the best investor relations programmes across European listed companies. Euroland IR will be present to connect with IR teams and discuss best-practice digital IR.",
    agenda: [
      "Awards ceremony and keynote presentations",
      "Networking reception with IR professionals",
      "Panel discussion: digital IR trends in Europe",
      "Meet the Euroland IR team at our stand",
    ],
  },
  {
    slug: "best-practice-ir-website-workshop",
    day: "22",
    month: "APR",
    year: "2026",
    type: "WORKSHOP",
    title: "Best Practice IR Platform Workshop",
    location: "Copenhagen, Denmark",
    date: "22 Apr 2026",
    typeLabel: "Workshop",
    about:
      "A hands-on workshop for IR teams looking to improve their investor-facing website. Covering content strategy, accessibility, disclosure requirements, and how to use the Euroland IR microsite platform.",
    agenda: [
      "What makes an effective IR platform in 2026",
      "Live platform walkthrough: IR microsite builder",
      "Content and disclosure best practices",
      "Q&A and individual team consultations",
    ],
  },
  {
    slug: "niri-annual-conference-2026",
    day: "15",
    month: "MAY",
    year: "2026",
    type: "CONFERENCE",
    title: "NIRI Annual Conference 2026",
    location: "Chicago, USA",
    date: "15 May 2026",
    typeLabel: "Conference",
    about:
      "The NIRI Annual Conference is the premier event for investor relations professionals in North America. Euroland IR will be exhibiting and hosting sessions on AI-powered IR workflows and digital disclosure.",
    agenda: [
      "Euroland IR booth and product demonstrations",
      "Session: AI in investor relations — practical applications",
      "Roundtable: cross-border IR communication challenges",
      "Networking dinner for IR technology partners",
    ],
  },
  {
    slug: "esg-reporting-masterclass",
    day: "3",
    month: "JUN",
    year: "2026",
    type: "WORKSHOP",
    title: "ESG Reporting Masterclass",
    location: "Amsterdam, Netherlands",
    date: "3 Jun 2026",
    typeLabel: "Workshop",
    about:
      "A full-day masterclass on CSRD implementation, double materiality assessments, and digital ESG reporting for listed companies. Facilitated by Euroland IR and leading ESG advisory partners.",
    agenda: [
      "CSRD requirements and implementation timeline",
      "Double materiality: practical assessment approach",
      "Technology tools for ESG data collection",
      "Live demo: Euroland IR ESG Reporting Suite",
    ],
  },
];

// ── Other Events (sidebar) — show 3 events that are NOT the current one ────────
function getOtherEvents(currentSlug: string) {
  return EVENTS.filter((e) => e.slug !== currentSlug).slice(0, 3);
}

// ── Tag colour map ─────────────────────────────────────────────────────────────
const TAG_COLORS: Record<string, string> = {
  WEBINAR:    "rgb(0, 107, 163)",
  CONFERENCE: "rgb(0, 107, 163)",
  WORKSHOP:   "rgb(234, 88, 12)",
  FORUM:      "rgb(0, 107, 163)",
};

export default function UpcomingEventDetail() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug || EVENTS[0].slug;
  const event = EVENTS.find((e) => e.slug === slug) || EVENTS[0];
  const others = getOtherEvents(event.slug);
  const tagColor = TAG_COLORS[event.type] || "rgb(0, 107, 163)";

  return (
    <PageWrapper>
      {/* ── 1. HERO (y:0–400) ─────────────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: "rgb(13, 27, 42)",
          minHeight: "400px",
          position: "relative",
        }}
      >
        <div
          style={{
            maxWidth: "1536px",
            margin: "0 auto",
            padding: "0 48px",
            paddingTop: "96px",
            paddingBottom: "96px",
          }}
        >
          {/* Breadcrumb — y:108 h:24 w:126 */}
          <LangLink href="/company/newsroom"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "24px",
                color: "rgba(255, 255, 255, 0.6)",
                textDecoration: "none",
                marginBottom: "32px",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6" />
              </svg>
              Back to Newsroom
          </LangLink>

          {/* Date block + content row — y:164 h:128 w:1440 */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "32px",
            }}
          >
            {/* Date block — y:169 h:118 w:96 */}
            <div
              style={{
                width: "96px",
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: "4px",
              }}
            >
              {/* Day — y:190 h:48 */}
              <div
                style={{
                  fontSize: "40px",
                  fontWeight: 300,
                  lineHeight: "48px",
                  color: "rgb(255, 255, 255)",
                  letterSpacing: "-0.4px",
                }}
              >
                {event.day}
              </div>
              {/* Month — y:242 h:24 */}
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 500,
                  lineHeight: "24px",
                  letterSpacing: "0.96px",
                  textTransform: "uppercase" as const,
                  color: "rgb(0, 173, 240)",
                }}
              >
                {event.month}
              </div>
            </div>

            {/* Right content — y:164 h:128 w:1312 */}
            <div style={{ flex: 1, minWidth: 0 }}>
              {/* Eyebrow u-label — y:166 h:34 */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "12px",
                }}
              >
                <span
                  style={{
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "0.96px",
                    textTransform: "uppercase" as const,
                    color: "rgb(91, 200, 245)",
                  }}
                >
                  {event.type}
                </span>
                <div
                  style={{
                    width: "25%",
                    height: "2px",
                    backgroundColor: "rgb(91, 200, 245)",
                  }}
                />
              </div>

              {/* H2 — y:212 h:40 w:1312 */}
              <h2 className="type-h4"
                style={{
                  fontSize: "32px",
                  fontWeight: 400,
                  lineHeight: "40px",
                  letterSpacing: "0.01em",
                  color: "rgb(255, 255, 255)",
                  margin: "0 0 20px",
                }}
              >
                {event.title}
              </h2>

              {/* Meta row — y:268 h:24: location + date + type with icons */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  flexWrap: "wrap" as const,
                }}
              >
                {/* Location */}
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "24px",
                    color: "rgba(255, 255, 255, 0.6)",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {event.location}
                </span>
                {/* Date */}
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "24px",
                    color: "rgba(255, 255, 255, 0.6)",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  {event.date}
                </span>
                {/* Type */}
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "24px",
                    color: "rgba(255, 255, 255, 0.6)",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                    <line x1="7" y1="7" x2="7.01" y2="7" />
                  </svg>
                  {event.typeLabel}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. CONTENT SECTION (y:400–1386) ──────────────────────────────────── */}
      <section
        style={{
          backgroundColor: "rgb(255, 255, 255)",
          padding: "80px 0",
        }}
      >
        <div
          style={{
            maxWidth: "1536px",
            margin: "0 auto",
            padding: "0 48px",
            display: "flex",
            gap: "48px",
            alignItems: "flex-start",
          }}
        >
          {/* ── LEFT COLUMN (w:1056) ─────────────────────────────────────────── */}
          <div style={{ flex: "1 1 0", minWidth: 0 }}>
            {/* Event image placeholder — y:460 h:280 w:1056 */}
            <div
              style={{
                width: "100%",
                height: "280px",
                backgroundColor: "rgb(243, 244, 246)",
                border: "1px solid rgb(229, 231, 235)",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "40px",
              }}
            >
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 400,
                  letterSpacing: "0.96px",
                  textTransform: "uppercase" as const,
                  color: "rgb(58, 74, 88)",
                }}
              >
                EVENT IMAGE
              </span>
            </div>

            {/* h4 "About this event" — y:780 h:40 */}
            <h4 className="type-h5"
              style={{
                fontSize: "24px",
                fontWeight: 500,
                lineHeight: "32px",
                letterSpacing: "0.01em",
                color: "rgb(13, 27, 42)",
                margin: "0 0 24px",
              }}
            >
              About this event
            </h4>

            {/* Body paragraph — y:844 h:64 */}
            <p
              style={{
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "28px",
                color: "rgb(13, 27, 42)",
                margin: "0 0 48px",
              }}
            >
              {event.about}
            </p>

            {/* h4 "Agenda highlights" — y:948 h:40 */}
            <h4 className="type-h5"
              style={{
                fontSize: "24px",
                fontWeight: 500,
                lineHeight: "32px",
                letterSpacing: "0.01em",
                color: "rgb(13, 27, 42)",
                margin: "0 0 24px",
              }}
            >
              Agenda highlights
            </h4>

            {/* Agenda rows — y:1012–1290 h:58 each */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0",
              }}
            >
              {event.agenda.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    height: "58px",
                    padding: "0 20px",
                    backgroundColor: i % 2 === 0 ? "rgb(248, 249, 250)" : "rgb(255, 255, 255)",
                    border: "1px solid rgb(229, 231, 235)",
                    borderTop: i === 0 ? "1px solid rgb(229, 231, 235)" : "none",
                  }}
                >
                  {/* Chevron icon — y:1033 h:16 w:16 */}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgb(0, 173, 240)"
                    strokeWidth="2"
                    style={{ flexShrink: 0 }}
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                  {/* Text span — y:1029 h:24 */}
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: 400,
                      lineHeight: "24px",
                      color: "rgb(13, 27, 42)",
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT SIDEBAR (w:320) ─────────────────────────────────────────── */}
          <aside
            style={{
              width: "320px",
              flexShrink: 0,
              position: "sticky",
              top: "80px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            {/* Register Interest card — y:460 h:204 w:320 (dark navy bg) */}
            <div
              style={{
                backgroundColor: "rgb(13, 27, 42)",
                borderRadius: "4px",
                padding: "32px",
                textAlign: "center" as const,
              }}
            >
              {/* Label — y:492 h:24 */}
              <div
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.96px",
                  textTransform: "uppercase" as const,
                  color: "rgba(255, 255, 255, 0.7)",
                  marginBottom: "12px",
                }}
              >
                REGISTER INTEREST
              </div>
              {/* h5 — y:528 h:32 */}
              <h5 className="type-h6"
                style={{
                  fontSize: "20px",
                  fontWeight: 500,
                  lineHeight: "28px",
                  color: "rgb(255, 255, 255)",
                  margin: "0 0 24px",
                }}
              >
                Join us at this event
              </h5>
              {/* REGISTER NOW button — y:584 h:48 w:256 */}
              <a
                href="#"
                style={{
                  display: "block",
                  width: "100%",
                  padding: "12px 24px",
                  backgroundColor: "rgb(0, 173, 240)",
                  color: "rgb(255, 255, 255)",
                  fontSize: "12px",
                  fontWeight: 500,
                  letterSpacing: "0.96px",
                  textTransform: "uppercase" as const,
                  textDecoration: "none",
                  borderRadius: "2px",
                  textAlign: "center" as const,
                  transition: "background-color 200ms ease",
                  boxSizing: "border-box" as const,
                }}
              >
                REGISTER NOW
              </a>
            </div>

            {/* Event Details card — y:680 h:278 w:320 */}
            <div
              style={{
                backgroundColor: "rgb(255, 255, 255)",
                border: "1px solid rgb(229, 231, 235)",
                borderRadius: "4px",
                padding: "28px",
              }}
            >
              {/* EVENT DETAILS label — y:705 h:24 */}
              <div
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.96px",
                  textTransform: "uppercase" as const,
                  color: "rgb(13, 27, 42)",
                  marginBottom: "20px",
                }}
              >
                EVENT DETAILS
              </div>

              {/* Date row — y:745 h:52 */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  marginBottom: "16px",
                  paddingBottom: "16px",
                  borderBottom: "1px solid rgb(229, 231, 235)",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(100,116,139)" strokeWidth="2" style={{ marginTop: "5px", flexShrink: 0 }}>
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <div>
                  <div
                    style={{
                      fontSize: "11px",
                      fontWeight: 400,
                      lineHeight: "24px",
                      color: "rgb(58, 74, 88)",
                    }}
                  >
                    Date
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: 500,
                      lineHeight: "24px",
                      color: "rgb(13, 27, 42)",
                    }}
                  >
                    {event.date}
                  </div>
                </div>
              </div>

              {/* Location row — y:813 h:52 */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  marginBottom: "16px",
                  paddingBottom: "16px",
                  borderBottom: "1px solid rgb(229, 231, 235)",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(100,116,139)" strokeWidth="2" style={{ marginTop: "5px", flexShrink: 0 }}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <div
                    style={{
                      fontSize: "11px",
                      fontWeight: 400,
                      lineHeight: "24px",
                      color: "rgb(58, 74, 88)",
                    }}
                  >
                    Location
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: 500,
                      lineHeight: "24px",
                      color: "rgb(13, 27, 42)",
                    }}
                  >
                    {event.location}
                  </div>
                </div>
              </div>

              {/* Type row — y:881 h:52 */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(100,116,139)" strokeWidth="2" style={{ marginTop: "5px", flexShrink: 0 }}>
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                  <line x1="7" y1="7" x2="7.01" y2="7" />
                </svg>
                <div>
                  <div
                    style={{
                      fontSize: "11px",
                      fontWeight: 400,
                      lineHeight: "24px",
                      color: "rgb(58, 74, 88)",
                    }}
                  >
                    Type
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: 500,
                      lineHeight: "24px",
                      color: "rgb(13, 27, 42)",
                    }}
                  >
                    {event.typeLabel}
                  </div>
                </div>
              </div>
            </div>

            {/* Other Events card — y:974 h:352 w:320 */}
            <div
              style={{
                backgroundColor: "rgb(255, 255, 255)",
                border: "1px solid rgb(229, 231, 235)",
                borderRadius: "4px",
                padding: "28px",
              }}
            >
              {/* OTHER EVENTS label — y:998 h:24 */}
              <div
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.96px",
                  textTransform: "uppercase" as const,
                  color: "rgb(13, 27, 42)",
                  marginBottom: "20px",
                }}
              >
                OTHER EVENTS
              </div>

              {/* 3 event rows — y:1038–1300 h:77 each */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {others.map((other, i) => (
                  <LangLink key={other.slug} href={`/company/newsroom/events/${other.slug}`}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "12px",
                        padding: "12px 0",
                        borderBottom:
                          i < others.length - 1 ? "1px solid rgb(229, 231, 235)" : "none",
                        textDecoration: "none",
                        color: "inherit",
                      }}
                    >
                      {/* Date block — y:1038 h:60 w:48 */}
                      <div
                        style={{
                          width: "48px",
                          height: "60px",
                          backgroundColor: "rgb(13, 27, 42)",
                          borderRadius: "2px",
                          flexShrink: 0,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "2px",
                        }}
                      >
                        {/* Day — y:1046 h:20 */}
                        <div
                          style={{
                            fontSize: "16px",
                            fontWeight: 300,
                            lineHeight: "20px",
                            color: "rgb(255, 255, 255)",
                          }}
                        >
                          {other.day}
                        </div>
                        {/* Month — y:1066 h:24 */}
                        <div
                          style={{
                            fontSize: "10px",
                            fontWeight: 700,
                            lineHeight: "12px",
                            letterSpacing: "0.08em",
                            textTransform: "uppercase" as const,
                            color: "rgb(0, 173, 240)",
                          }}
                        >
                          {other.month}
                        </div>
                      </div>
                      {/* Text — y:1046 h:44 w:210 */}
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div
                          style={{
                            fontSize: "12px",
                            fontWeight: 400,
                            lineHeight: "24px",
                            color: "rgb(58, 74, 88)",
                          }}
                        >
                          {other.typeLabel}
                        </div>
                        <div
                          style={{
                            fontSize: "13px",
                            fontWeight: 500,
                            lineHeight: "20px",
                            color: "rgb(13, 27, 42)",
                          }}
                        >
                          {other.title}
                        </div>
                      </div>
                  </LangLink>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ── 3. CTA BAND (y:1386–1686) ────────────────────────────────────────── */}
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
            {/* Eyebrow — y:1467 h:34 */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "16px",
              }}
            >
              <span
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.96px",
                  textTransform: "uppercase" as const,
                  color: "rgb(91, 200, 245)",
                }}
              >
                EVENTS
              </span>
              <div
                style={{
                  width: "25%",
                  height: "2px",
                  backgroundColor: "rgb(91, 200, 245)",
                }}
              />
            </div>
            {/* H3 — y:1517 h:48 */}
            <h3
              style={{
                fontSize: "40px",
                fontWeight: 300,
                lineHeight: "48px",
                letterSpacing: "0.005em",
                color: "rgb(255, 255, 255)",
                margin: "0 0 16px",
              }}
            >
              Meet us at upcoming events
            </h3>
            {/* Subtitle — y:1581 h:24 */}
            <p
              style={{
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "24px",
                color: "rgba(255, 255, 255, 0.7)",
                margin: 0,
              }}
            >
              Find Euroland IR at conferences, workshops, and webinars across Europe and North America.
            </p>
          </div>
          {/* VIEW ALL EVENTS button — y:1511 h:48 w:160 */}
          <LangLink href="/company/newsroom"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "12px 24px",
                backgroundColor: "rgb(0, 173, 240)",
                color: "rgb(255, 255, 255)",
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "0.96px",
                textTransform: "uppercase" as const,
                textDecoration: "none",
                borderRadius: "2px",
                whiteSpace: "nowrap" as const,
                transition: "background-color 200ms ease",
              }}
            >
              VIEW ALL EVENTS
          </LangLink>
        </div>
      </section>
    </PageWrapper>
  );
}