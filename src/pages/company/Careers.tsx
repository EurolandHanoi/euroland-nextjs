"use client";

// Euroland IR — Careers page
// Design: Dark navy hero → 2-col intro section → 4-col values cards → Open positions (empty state) → Apply CTA
// All measurements from max-export JSON (13)

import { PageWrapper } from "@/components/Layout";
import BannerHero from "@/components/layout/BannerHero";

// Section geometry from JSON:
// Hero: y:0 h:544 — dark navy bg
// Intro: y:544 h:636 — white bg, 2-col (left text 688px + right team photo 688px)
// Values: y:1180 h:505 — light grey bg, 4 cards 342x238
// Open Positions: y:1685 h:769 — white bg, centered, empty state
// Total page: 2969px

export default function Careers() {
  return (
    <PageWrapper>
      {/* ── 1. HERO ─────────────────────────────────────────── */}
      <BannerHero
        variant="resources"
        label="Company"
        title="Careers at Euroland IR"
        subtitle="Join our global team and help shape the future of investor relations technology for publicly listed companies worldwide."
      />

      {/* ── 2. INTRO — "Exceptional talent, global impact" (y:544, h:636) ── */}
      {/* node[40] geo:0,544 2004x636 — white bg */}
      <section
        style={{
          background: "rgb(255, 255, 255)",
          padding: "80px 0",
        }}
      >
        <div className="container" style={{ maxWidth: "1536px", padding: "0 48px" }}>
          <div
            className="flex-col-mobile"
            style={{
              display: "flex",
              gap: "64px",
              alignItems: "center",
            }}
          >
            {/* Left content — node[43] geo:282,716 688x292 */}
            <div className="careers-intro-col" style={{ flex: "0 0 688px", maxWidth: "688px" }}>
              {/* Eyebrow — node[45] geo:282,718 94x34 — 12px/600/24px/0.96px/uppercase/rgb(0,107,163) */}
              <div className="u-label" style={{ marginBottom: "16px" }}>
                JOIN OUR TEAM
              </div>
              {/* H3 — node[46] geo:282,768 688x48 — 40px/400/48px/0.2px/rgb(13,27,42) */}
              <h3
                style={{
                  fontSize: "40px",
                  fontWeight: 400,
                  lineHeight: "48px",
                  letterSpacing: "0.005em",
                  color: "rgb(13, 27, 42)",
                  margin: "0 0 24px",
                }}
              >
                Exceptional talent, global impact
              </h3>
              {/* Body 1 — node[47] geo:282,840 688x48 — 16px/400/24px/0.16px/rgb(58,74,88) */}
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  letterSpacing: "0.01em",
                  color: "rgb(58, 74, 88)",
                  margin: "0 0 16px",
                }}
              >
                Exceptional talent transcends geographical and cultural boundaries. We are continually seeking individuals who want to take part in our mission to pioneer innovation in IR and ESG Solutions.
              </p>
              {/* Body 2 — node[48] geo:282,904 688x24 — 16px/400/24px/0.16px/rgb(58,74,88) */}
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  letterSpacing: "0.01em",
                  color: "rgb(58, 74, 88)",
                  margin: "0 0 40px",
                }}
              >
                Making IR information accessible to increase investments and enable more investors.
              </p>
              {/* CTA — node[49] geo:282,960 192x48 */}
              <a href="#open-positions" className="btn-primary">
                View open positions
              </a>
            </div>

            <div
              className="careers-intro-col"
              style={{
                flex: "0 0 688px",
                maxWidth: "688px",
                width: "100%",
                borderRadius: "12px",
                overflow: "hidden",
                border: "1px solid rgb(221, 224, 230)",
                background: "rgb(245, 247, 250)",
                padding: "20px",
              }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", marginBottom: "16px" }}>
                {[
                  ["/ceo_d3df1106.jpg", "Leadership portrait"],
                  ["/cto_716bac62.jpg", "Team member portrait"],
                  ["/cfo_b4d91152.jpg", "Team member portrait"],
                  ["/coo_260eeaf2.jpg", "Team member portrait"],
                  ["/vp-client_9dce3ea9.jpg", "Team member portrait"],
                  ["/vp-sales_5e9bd62a.jpg", "Team member portrait"],
                ].map(([src, alt]) => (
                  <div key={src} style={{ aspectRatio: "1 / 1.15", borderRadius: "8px", overflow: "hidden", background: "#d9e2ec" }}>
                    <img src={src} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  </div>
                ))}
              </div>
              <div style={{ padding: "0 4px" }}>
                <div className="u-label" style={{ marginBottom: "8px" }}>Global team</div>
                <p style={{ margin: 0, fontSize: "14px", lineHeight: "24px", color: "rgb(58, 74, 88)" }}>
                  Work with a distributed team serving listed companies across Europe, Asia Pacific, and the Middle East.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. VALUES — "Why work at Euroland IR" (y:1180, h:505) ─────────── */}
      {/* node[58] geo:0,1180 2004x505 — light grey bg */}
      <section
        style={{
          background: "rgb(245, 247, 250)",
          padding: "80px 0",
        }}
      >
        <div className="container" style={{ maxWidth: "1536px", padding: "0 48px" }}>
          {/* Section header — node[60] geo:282,1240 1440x100 */}
          <div style={{ marginBottom: "48px" }}>
            {/* Eyebrow — node[61] geo:282,1242 97x34 — 12px/600/24px/0.96px/uppercase/rgb(0,107,163) */}
            <div className="u-label" style={{ marginBottom: "16px" }}>
              WHAT WE OFFER
            </div>
            {/* H3 — node[62] geo:282,1292 1440x48 — 40px/400/48px/0.2px/rgb(13,27,42) */}
            <h3
              style={{
                fontSize: "40px",
                fontWeight: 400,
                lineHeight: "48px",
                letterSpacing: "0.005em",
                color: "rgb(13, 27, 42)",
                margin: 0,
              }}
            >
              Why work at Euroland IR
            </h3>
          </div>

          {/* 4-col cards — node[63] geo:282,1388 1440x238 */}
          <div
            className="grid-4col"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: "24px",
            }}
          >
            {[
              {
                num: "01",
                title: "Remote-First Culture",
                body: "Work from anywhere in the world. We believe great work happens when people have the freedom to choose their environment.",
              },
              {
                num: "02",
                title: "Continuous Learning",
                body: "Access to learning resources, conferences, and mentorship programmes to help you grow professionally.",
              },
              {
                num: "03",
                title: "Meaningful Work",
                body: "Your work directly impacts how 1,400+ listed companies communicate with their investors worldwide.",
              },
              {
                num: "04",
                title: "Competitive Package",
                body: "Competitive salary, equity participation, and a comprehensive benefits package tailored to your location.",
              },
            ].map((card) => (
              <div
                key={card.num}
                className="feature-card card-fixed"
                style={{
                  width: "342px",
                  minHeight: "238px",
                  padding: "40px 40px 40px 40px",
                  background: "rgb(255, 255, 255)",
                  border: "1px solid rgb(221, 224, 230)",
                }}
              >
                {/* Num label — node[65] 12px/700/24px/1.44px/uppercase/rgb(0,107,163) */}
                <div
                  className="num-label"
                  style={{ marginBottom: "16px" }}
                >
                  {card.num}
                </div>
                {/* Title — node[66] 24px/500/32px/0.16px/rgb(13,27,42) */}
                <h5
                  style={{
                    fontSize: "24px",
                    fontWeight: 500,
                    lineHeight: "32px",
                    letterSpacing: "0.01em",
                    color: "rgb(13, 27, 42)",
                    margin: "0 0 12px",
                  }}
                >
                  {card.title}
                </h5>
                {/* Body — node[67] 12px/400/24px/0.16px/rgb(58,74,88) */}
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: 400,
                    lineHeight: "24px",
                    letterSpacing: "0.01em",
                    color: "rgb(58, 74, 88)",
                    margin: 0,
                  }}
                >
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. OPEN POSITIONS (y:1685, h:769) ───────────────────────────── */}
      {/* node[79] geo:0,1685 2004x769 — white bg */}
      <section
        id="open-positions"
        style={{
          background: "rgb(255, 255, 255)",
          padding: "80px 0",
        }}
      >
        <div className="container" style={{ maxWidth: "1536px", padding: "0 48px" }}>
          {/* Section header — node[83] geo:282,1745 1440x164 — centered */}
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            {/* Eyebrow — node[84] geo:951,1747 103x34 — 12px/600/24px/0.96px/uppercase/rgb(0,107,163) */}
            <div className="u-label" style={{ marginBottom: "16px" }}>
              OPEN POSITIONS
            </div>
            {/* H3 — node[85] geo:282,1797 1440x48 — 48px/300/56px/-0.48px/rgb(13,27,42) */}
            <h3 className="type-h2"
              style={{
                fontSize: "48px",
                fontWeight: 300,
                lineHeight: "64px",
                letterSpacing: "-0.01em",
                color: "rgb(13, 27, 42)",
                margin: "0 0 16px",
              }}
            >
              Open positions
            </h3>
            {/* Subtitle — node[86] geo:742,1861 520x48 — 16px/400/24px/0.16px/rgb(58,74,88) */}
            <p
              style={{
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "24px",
                letterSpacing: "0.01em",
                color: "rgb(58, 74, 88)",
                margin: "0 auto",
                maxWidth: "520px",
              }}
            >
              Discover your next career opportunity with Euroland Investor Growth Solutions.
            </p>
          </div>

          {/* Empty state card — node[87] geo:282,1957 1440x318 */}
          <div
            style={{
              border: "1px solid rgb(221, 224, 230)",
              padding: "0 48px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            {/* Icon — node[88] geo:978,2022 48x48 */}
            <div
              style={{
                width: "48px",
                height: "48px",
                marginBottom: "24px",
                color: "rgb(0, 107, 163)",
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                <line x1="12" y1="12" x2="12" y2="16" />
                <line x1="10" y1="14" x2="14" y2="14" />
              </svg>
            </div>
            {/* Title — node[90] geo:347,2094 1310x32 — 24px/500/32px/0.16px/rgb(13,27,42) */}
            <h4 className="type-h5"
              style={{
                fontSize: "24px",
                fontWeight: 500,
                lineHeight: "32px",
                letterSpacing: "0.01em",
                color: "rgb(13, 27, 42)",
                margin: "0 0 16px",
              }}
            >
              No open positions at the moment
            </h4>
            {/* Body — node[91] geo:792,2138 420x72 — 16px/400/24px/0.16px/rgb(58,74,88) */}
            <p
              style={{
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "24px",
                letterSpacing: "0.01em",
                color: "rgb(58, 74, 88)",
                margin: 0,
                maxWidth: "420px",
              }}
            >
              We are not actively hiring right now, but we are always interested in hearing from talented people. Send us your CV and we will be in touch when a suitable role opens up.
            </p>
          </div>

          {/* Bottom note + Apply CTA — node[92] geo:282,2306 1440x88 */}
          <div style={{ textAlign: "center" }}>
            {/* Note — node[93] geo:282,2306 1440x24 — 14px/400/24px/0.16px/rgb(58,74,88) */}
            <p
              style={{
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "24px",
                letterSpacing: "0.01em",
                color: "rgb(58, 74, 88)",
                margin: "0 0 16px",
              }}
            >
              We're always looking for exceptional talent. Send us your CV and we'll be in touch when the right opportunity arises.
            </p>
            {/* APPLY button — node[94] geo:956,2346 93x48 */}
            <a href="mailto:careers@eurolandir.com" className="btn-primary">
              APPLY
            </a>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}