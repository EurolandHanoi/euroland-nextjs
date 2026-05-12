"use client";

// Euroland IR — Careers page
// Design: Dark navy hero → 2-col intro section → 4-col values cards → Open positions (empty state) → Apply CTA
// All measurements from max-export JSON (13)

import { PageWrapper } from "@/components/Layout";
import BannerHero from "@/components/layout/BannerHero";
import { useLanguage } from "@/contexts/LanguageContext";

// Section geometry from JSON:
// Hero: y:0 h:544 — dark navy bg
// Intro: y:544 h:636 — white bg, 2-col (left text 688px + right team photo 688px)
// Values: y:1180 h:505 — light grey bg, 4 cards 342x238
// Open Positions: y:1685 h:769 — white bg, centered, empty state
// Total page: 2969px

export default function Careers() {
  const { t } = useLanguage();
  return (
    <PageWrapper>
      {/* ── 1. HERO ─────────────────────────────────────────── */}
      <BannerHero
        variant="resources"
        label={t("careers_hero_label", "Company")}
        title={t("careers_hero_title", "Careers at Euroland IR")}
        subtitle={t("careers_hero_subtitle", "Join our global team and help shape the future of Investor Relations technology for publicly listed companies worldwide.")}
      />

      {/* ── 2. INTRO — "Exceptional talent, global impact" (y:544, h:636) ── */}
      {/* node[40] geo:0,544 2004x636 — white bg */}
      <section
        style={{
          background: "rgb(255, 255, 255)",
          padding: "64px 0",
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
                  fontSize: "var(--fs-2xl)",
                  fontWeight: 400,
                  lineHeight: "var(--lh-2xl)",
                  letterSpacing: "0.005em",
                  color: "rgb(13, 27, 42)",
                  margin: "0 0 32px",
                }}
              >
                Exceptional talent, global impact
              </h3>
              {/* Body 1 — node[47] geo:282,840 688x48 — 16px/400/24px/0.16px/rgb(58,74,88) */}
              <p
                style={{
                  fontSize: "var(--fs-base)",
                  fontWeight: 400,
                  lineHeight: "var(--lh-base)",
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
                  fontSize: "var(--fs-base)",
                  fontWeight: 400,
                  lineHeight: "var(--lh-base)",
                  letterSpacing: "0.01em",
                  color: "rgb(58, 74, 88)",
                  margin: "0 0 32px",
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
                background: "#082b45",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "520px",
                padding: "48px",
              }}
            >
              <img
                src="/careers-euroland-logo.jpeg"
                alt="Euroland logo"
                style={{
                  width: "100%",
                  maxWidth: "460px",
                  height: "auto",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. VALUES — "Why work at Euroland IR" (y:1180, h:505) ─────────── */}
      {/* node[58] geo:0,1180 2004x505 — light grey bg */}
      <section
        style={{
          background: "rgb(245, 247, 250)",
          padding: "64px 0",
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
                fontSize: "var(--fs-2xl)",
                fontWeight: 400,
                lineHeight: "var(--lh-2xl)",
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
                  padding: "32px 40px 32px 40px",
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
                    fontSize: "var(--fs-lg)",
                    fontWeight: 500,
                    lineHeight: "var(--lh-lg)",
                    letterSpacing: "0.01em",
                    color: "rgb(13, 27, 42)",
                    margin: "0 0 16px",
                  }}
                >
                  {card.title}
                </h5>
                {/* Body — node[67] 12px/400/24px/0.16px/rgb(58,74,88) */}
                <p
                  style={{
                    fontSize: "var(--fs-sm)",
                    fontWeight: 400,
                    lineHeight: "var(--lh-base)",
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
          padding: "64px 0",
        }}
      >
        <div className="container" style={{ maxWidth: "1536px", padding: "0 48px" }}>
          {/* Section header — node[83] geo:282,1745 1440x164 — centered */}
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            {/* Eyebrow — node[84] geo:951,1747 103x34 — 12px/600/24px/0.96px/uppercase/rgb(0,107,163) */}
            <div className="u-label" style={{ marginBottom: "16px" }}>
              OPEN POSITIONS
            </div>
            {/* H3 — node[85] geo:282,1797 1440x48 — --fs-3xl/300/--lh-3xl/-0.48px/rgb(13,27,42) */}
            <h3 className="type-h2"
              style={{
                fontSize: "var(--fs-3xl)",
                fontWeight: 300,
                lineHeight: "var(--lh-3xl)",
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
                fontSize: "var(--fs-base)",
                fontWeight: 400,
                lineHeight: "var(--lh-base)",
                letterSpacing: "0.01em",
                color: "rgb(58, 74, 88)",
                margin: "0 auto",
                maxWidth: "520px",
              }}
            >
              Discover career opportunities at Euroland IR.
            </p>
          </div>

          <div
            style={{
              maxWidth: "760px",
              margin: "0 auto",
              border: "1px solid rgb(221, 224, 230)",
              borderRadius: "12px",
              background: "rgb(245, 247, 250)",
              padding: "48px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: "24px",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                color: "rgb(0, 116, 217)",
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                <line x1="12" y1="12" x2="12" y2="16" />
                <line x1="10" y1="14" x2="14" y2="14" />
              </svg>
            </div>
            <h4 className="type-h5"
              style={{
                fontSize: "var(--fs-lg)",
                fontWeight: 500,
                lineHeight: "var(--lh-lg)",
                letterSpacing: "0.01em",
                color: "rgb(13, 27, 42)",
                margin: 0,
              }}
            >
              No open positions at the moment
            </h4>
            <p
              style={{
                fontSize: "var(--fs-base)",
                fontWeight: 400,
                lineHeight: "var(--lh-base)",
                letterSpacing: "0.01em",
                color: "rgb(58, 74, 88)",
                margin: 0,
                maxWidth: "560px",
              }}
            >
              We are not actively hiring right now, but we are always interested in hearing from talented people. Send us your CV and we will be in touch when a suitable role opens up.
            </p>
            <div
              style={{
                width: "100%",
                maxWidth: "560px",
                height: "1px",
                background: "rgb(221, 224, 230)",
              }}
            />
            <p
              style={{
                fontSize: "var(--fs-base)",
                fontWeight: 400,
                lineHeight: "var(--lh-base)",
                letterSpacing: "0.01em",
                color: "rgb(58, 74, 88)",
                margin: 0,
                maxWidth: "560px",
              }}
            >
              {t("careers_apply_note", "We're always looking for exceptional talent. Send us your CV and we'll be in touch when the right opportunity arises.")}
            </p>
            <a href="mailto:careers@eurolandir.com" className="btn-primary">
              {t("careers_apply_cta", "Apply")}
            </a>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}

