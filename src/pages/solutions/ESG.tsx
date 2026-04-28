"use client";

/**
 * SUSTAINABILITY REPORTING / ESG PAGE — Euroland IR
 * Source: euroland-ir-...-max-export(2).json
 * URL:    https://euroland-mockup.netlify.app/solutions/sustainability-reporting
 * Viewport: 2004px wide, page height 3409px
 *
 * Sections:
 *  S1  hero-navy     — ESG Solutions eyebrow + H2 + subtitle + 2 CTAs
 *  S2  section white — "The challenge" 2×2 challenge cards (numbered 01–04)
 *  S3  section white — "Our solutions" 2-col product cards (CSRD + Sustainability IAT)
 *  S4  section white — "Further reading" related resource pills
 *  S5  cta-band      — "See ESG solutions in action"
 */
import { useEffect, useRef } from "react";
import Link from "next/link";
import LangLink from "@/components/LangLink";
import { PageWrapper } from "@/components/Layout";
import BannerHero from "@/components/layout/BannerHero";
import { useLanguage } from "@/contexts/LanguageContext";
type TFunction = (key: string, fallback?: string) => string;

function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el); return () => obs.disconnect();
  }, []);
  return ref;
}

function getChallenges(t: TFunction) {
  return [
    {
      num: "01",
      title: t("solutions_esg_challenge_01_title", "CSRD and ESG reports are hard to navigate"),
      desc: t(
        "solutions_esg_challenge_01_desc",
        "CSRD and ESG sustainability reports routinely run to 300–400 pages. Most investors — retail and institutional alike — cannot extract the ESG information they actually need without significant effort."
      ),
    },
    {
      num: "02",
      title: t("solutions_esg_challenge_02_title", "Double materiality is difficult to communicate"),
      desc: t(
        "solutions_esg_challenge_02_desc",
        "Double materiality assessments are central to CSRD compliance, but presenting them in a way that is structured, accessible, and credible to investors and ESG raters remains a significant challenge."
      ),
    },
    {
      num: "03",
      title: t("solutions_esg_challenge_03_title", "Sustainability data is static and fragmented"),
      desc: t(
        "solutions_esg_challenge_03_desc",
        "ESG commitments, KPIs, and performance data are often buried in annual reports or scattered across pages — with no dynamic, always-current view for investors or other stakeholders."
      ),
    },
    {
      num: "04",
      title: t("solutions_esg_challenge_04_title", "Stakeholders expect more than compliance"),
      desc: t(
        "solutions_esg_challenge_04_desc",
        "Investors, analysts, ESG raters, and media want to understand your sustainability position clearly — not just confirm that ESRS disclosure boxes have been ticked."
      ),
    },
  ];
}

function getCsrdBullets(t: TFunction) {
  return [
    t("solutions_esg_card1_bullet_1", "Structured presentation of CSRD and ESG disclosures"),
    t("solutions_esg_card1_bullet_2", "Clear communication of double materiality findings"),
    t("solutions_esg_card1_bullet_3", "Key insights surfaced — not just raw charts and tables"),
    t("solutions_esg_card1_bullet_4", "Easier navigation for retail and institutional investors"),
    t("solutions_esg_card1_bullet_5", "Reduces reliance on dense PDF sustainability reports"),
  ];
}

function getIatBullets(t: TFunction) {
  return [
    t("solutions_esg_card2_bullet_1", "Dynamic, interactive ESG data presentation"),
    t("solutions_esg_card2_bullet_2", "Clear stakeholder overview of sustainability commitments and performance"),
    t("solutions_esg_card2_bullet_3", "Fully managed and updated by Euroland IR"),
    t("solutions_esg_card2_bullet_4", "Downloadable outputs for investors and ESG analysts"),
    t("solutions_esg_card2_bullet_5", "Always current — not tied to annual CSRD reporting cycles"),
  ];
}

function getRelated(t: TFunction) {
  return [
    { label: t("solutions_esg_related_esg_disclosure_guide", "ESG Disclosure Guide"), href: "/resources/ir-guide" },
    { label: t("solutions_esg_related_esg_solutions_overview", "ESG Solutions overview"), href: "/solutions/sustainability-reporting" },
    { label: t("solutions_esg_related_ir_solutions_for_listed_companies", "IR solutions for listed companies"), href: "/solutions/listed-companies" },
  ];
}

export default function ESG() {
  const { t } = useLanguage();
  const f1 = useFadeUp();
  const f2 = useFadeUp();
  const f3 = useFadeUp();
  const f4 = useFadeUp();

  const CHALLENGES = getChallenges(t);
  const CSRD_BULLETS = getCsrdBullets(t);
  const IAT_BULLETS = getIatBullets(t);
  const RELATED = getRelated(t);

  return (
    <PageWrapper>

      <BannerHero
        variant="solutions"
        label={t("solutions_esg_hero_label", "ESG Solutions")}
        title={t("solutions_esg_hero_title", "Structured ESG disclosure for the modern investor")}
        subtitle={t(
          "solutions_esg_hero_subtitle",
          "Euroland IR's ESG solutions help listed companies present sustainability data clearly and credibly — aligned with CSRD, TCFD, GRI, and SASB frameworks."
        )}
        backgroundImage="https://d2xsxph8kpxj0f.cloudfront.net/310519663310772351/J2iCYA6arZjci5hVrUBhtU/sustainability-hero_5b293a69.png"
        primaryCtaLabel={t("solutions_esg_hero_primary_cta_label", "Book a Demo")}
        primaryCtaHref="/book-demo"
        secondaryCtaLabel={t("common_talk_to_us", "Talk to Us")}
        secondaryCtaHref="/contact"
      />

      {/* ── S2: THE CHALLENGE ─────────────────────────────────────────────────── */}
      {/* section.section white bg, centered header + 2×2 challenge cards */}
      <section className="section" style={{ background: "rgb(255, 255, 255)" }}>
        <div className="container" style={{ maxWidth: "1536px", padding: "0 48px" }}>
          <div ref={f2} className="fade-up">
            {/* Centered header block */}
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              {/* Eyebrow: 12px/600/uppercase/rgb(0,107,163) */}
              <div
                className="u-label"
                style={{
                  fontSize: "12px",
                  fontWeight: 500,
                  lineHeight: "24px",
                  letterSpacing: "0.96px",
                  textTransform: "uppercase",
                  color: "rgb(0, 107, 163)",
                  marginBottom: "16px",
                  display: "inline-block",
                }}
              >
                {t("solutions_esg_eyebrow_the_challenge", "THE CHALLENGE")}
              </div>

              {/* H3: 40px/400/48px/0.2px/rgb(13,27,42) */}
              <h3
                style={{
                  fontSize: "40px",
                  fontWeight: 400,
                  lineHeight: "48px",
                  letterSpacing: "0.005em",
                  color: "rgb(13, 27, 42)",
                  margin: "0 auto",
                  maxWidth: "600px",
                }}
              >
                {t(
                  "solutions_esg_heading_the_challenge",
                  "Sustainability disclosure is growing — but clarity isn't keeping pace"
                )}
              </h3>
            </div>

            {/* 2×2 challenge cards grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "24px",
              }}
            >
              {CHALLENGES.map((c) => (
                <div
                  key={c.num}
                  className="feature-card"
                  style={{ padding: "32px" }}
                >
                  {/* Number: rgb(0,173,240) */}
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: 500,
                      lineHeight: "24px",
                      letterSpacing: "1.44px",
                      textTransform: "uppercase",
                      color: "rgb(0, 173, 240)",
                      marginBottom: "12px",
                    }}
                  >
                    {c.num}
                  </div>

                  {/* Title: 16px/600/24px/rgb(13,27,42) */}
                  <h4 className="type-h6"
                    style={{
                      fontSize: "16px",
                      fontWeight: 600,
                      lineHeight: "24px",
                      letterSpacing: "0.01em",
                      color: "rgb(13, 27, 42)",
                      margin: "0 0 12px",
                    }}
                  >
                    {c.title}
                  </h4>

                  {/* Body: 12px/400/24px/rgb(58,74,88) */}
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
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── S3: OUR SOLUTIONS ─────────────────────────────────────────────────── */}
      {/* section.section light grey bg, centered header + 2-col product cards */}
      <section className="section" style={{ background: "var(--slate)" }}>
        <div className="container" style={{ maxWidth: "1536px", padding: "0 48px" }}>
          <div ref={f3} className="fade-up">
            {/* Centered header */}
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <div
                className="u-label"
                style={{
                  fontSize: "12px",
                  fontWeight: 500,
                  lineHeight: "24px",
                  letterSpacing: "0.96px",
                  textTransform: "uppercase",
                  color: "rgb(0, 107, 163)",
                  marginBottom: "16px",
                  display: "inline-block",
                }}
              >
                {t("solutions_esg_eyebrow_our_solutions", "OUR SOLUTIONS")}
              </div>
              <h3
                style={{
                  fontSize: "40px",
                  fontWeight: 400,
                  lineHeight: "48px",
                  letterSpacing: "0.005em",
                  color: "rgb(13, 27, 42)",
                  margin: "0 auto",
                  maxWidth: "600px",
                }}
              >
                {t(
                  "solutions_esg_heading_our_solutions",
                  "Two sustainability reporting products, two distinct roles"
                )}
              </h3>
            </div>

            {/* 2-col product cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "24px",
              }}
            >
              {/* Card 1: CSRD Reporting Solution */}
              <div
                style={{
                  background: "rgb(255, 255, 255)",
                  border: "1px solid rgb(221, 224, 230)",
                  borderRadius: "8px",
                  padding: "40px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Product type tag: 12px/600/uppercase/rgb(0,107,163) */}
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 500,
                    lineHeight: "24px",
                    letterSpacing: "0.48px",
                    textTransform: "uppercase",
                    color: "rgb(0, 107, 163)",
                    marginBottom: "16px",
                  }}
                >
                  {t("solutions_esg_card1_tag", "STRUCTURED DISCLOSURE COMMUNICATION")}
                </div>

                {/* Product name H4: 24px/600/32px/rgb(13,27,42) */}
                <h4 className="type-h5"
                  style={{
                    fontSize: "24px",
                    fontWeight: 600,
                    lineHeight: "32px",
                    letterSpacing: "0.01em",
                    color: "rgb(13, 27, 42)",
                    margin: "0 0 8px",
                  }}
                >
                  {t("solutions_esg_card1_title", "CSRD Reporting Solution")}
                </h4>

                {/* Subtitle tag: 12px/400/italic/rgb(0,107,163) */}
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: 400,
                    lineHeight: "24px",
                    letterSpacing: "0.01em",
                    color: "rgb(0, 107, 163)",
                    fontStyle: "italic",
                    margin: "0 0 20px",
                  }}
                >
                  {t("solutions_esg_card1_subtitle", "For formal CSRD and ESG disclosure presentation")}
                </p>

                {/* Body: 14px/400/24px/rgb(58,74,88) */}
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "24px",
                    letterSpacing: "0.01em",
                    color: "rgb(58, 74, 88)",
                    margin: "0 0 24px",
                  }}
                >
                  {t(
                    "solutions_esg_card1_body",
                    "Most CSRD and ESG disclosures are published as dense, difficult-to-navigate documents. The CSRD Reporting Solution gives listed companies a structured, investor-friendly presentation of their sustainability disclosure — surfacing key insights, communicating double materiality assessments clearly, and making it easier for both retail and institutional investors to understand your ESRS-aligned sustainability position without reading hundreds of pages."
                  )}
                </p>

                {/* Bullet list */}
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "0 0 32px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    flex: 1,
                  }}
                >
                  {CSRD_BULLETS.map((b) => (
                    <li
                      key={b}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                        fontSize: "12px",
                        fontWeight: 400,
                        lineHeight: "24px",
                        letterSpacing: "0.01em",
                        color: "rgb(58, 74, 88)",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: "rgb(0, 107, 163)",
                          flexShrink: 0,
                          marginTop: "9px",
                        }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Learn more link */}
                <a
                  href="/book-demo"
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    lineHeight: "24px",
                    letterSpacing: "0.48px",
                    color: "rgb(0, 107, 163)",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  {t("solutions_esg_card1_learn_more", "Learn more about CSRD Reporting Solution →")}
                </a>
              </div>

              {/* Card 2: Sustainability IAT */}
              <div
                style={{
                  background: "rgb(255, 255, 255)",
                  border: "1px solid rgb(221, 224, 230)",
                  borderRadius: "8px",
                  padding: "40px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Product type tag */}
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 500,
                    lineHeight: "24px",
                    letterSpacing: "0.48px",
                    textTransform: "uppercase",
                    color: "rgb(0, 107, 163)",
                    marginBottom: "16px",
                  }}
                >
                  {t("solutions_esg_card2_tag", "DYNAMIC SUSTAINABILITY COMMUNICATION")}
                </div>

                <h4 className="type-h5"
                  style={{
                    fontSize: "24px",
                    fontWeight: 600,
                    lineHeight: "32px",
                    letterSpacing: "0.01em",
                    color: "rgb(13, 27, 42)",
                    margin: "0 0 8px",
                  }}
                >
                  {t("solutions_esg_card2_title", "Sustainability IAT")}
                </h4>

                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: 400,
                    lineHeight: "24px",
                    letterSpacing: "0.01em",
                    color: "rgb(0, 107, 163)",
                    fontStyle: "italic",
                    margin: "0 0 20px",
                  }}
                >
                  {t(
                    "solutions_esg_card2_subtitle",
                    "For interactive ESG data presentation and stakeholder engagement"
                  )}
                </p>

                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "24px",
                    letterSpacing: "0.01em",
                    color: "rgb(58, 74, 88)",
                    margin: "0 0 24px",
                  }}
                >
                  {t(
                    "solutions_esg_card2_body",
                    "Sustainability IAT is a dynamic, always-current presentation of your sustainability data and ESG commitments — fully managed by Euroland IR. It gives investors, ESG raters, and other stakeholders a structured, interactive view of your performance across environmental, social, and governance dimensions, with downloadable outputs and a clear overview of where you stand against your sustainability commitments."
                  )}
                </p>

                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "0 0 32px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    flex: 1,
                  }}
                >
                  {IAT_BULLETS.map((b) => (
                    <li
                      key={b}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                        fontSize: "12px",
                        fontWeight: 400,
                        lineHeight: "24px",
                        letterSpacing: "0.01em",
                        color: "rgb(58, 74, 88)",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: "rgb(0, 107, 163)",
                          flexShrink: 0,
                          marginTop: "9px",
                        }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>

                <a
                  href="/book-demo"
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    lineHeight: "24px",
                    letterSpacing: "0.48px",
                    color: "rgb(0, 107, 163)",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  {t("solutions_esg_card2_learn_more", "Learn more about Sustainability IAT →")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── S4: FURTHER READING ───────────────────────────────────────────────── */}
      {/* section.section white bg, centered header + pill links */}
      <section className="section" style={{ background: "rgb(255, 255, 255)" }}>
        <div className="container" style={{ maxWidth: "1536px", padding: "0 48px" }}>
          <div ref={f4} className="fade-up">
            <div style={{ textAlign: "center" }}>
              <div
                className="u-label"
                style={{
                  fontSize: "12px",
                  fontWeight: 500,
                  lineHeight: "24px",
                  letterSpacing: "0.96px",
                  textTransform: "uppercase",
                  color: "rgb(0, 107, 163)",
                  marginBottom: "16px",
                  display: "inline-block",
                }}
              >
                {t("solutions_esg_eyebrow_further_reading", "FURTHER READING")}
              </div>

              {/* H3: 40px/400 */}
              <h3
                style={{
                  fontSize: "40px",
                  fontWeight: 400,
                  lineHeight: "48px",
                  letterSpacing: "0.005em",
                  color: "rgb(13, 27, 42)",
                  margin: "0 0 32px",
                }}
              >
                {t("solutions_esg_heading_further_reading", "Related resources")}
              </h3>

              {/* Resource pill links */}
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                {RELATED.map((r) => (
                  <a
                    key={r.label}
                    href={r.href}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "10px 20px",
                      border: "1px solid rgb(221, 224, 230)",
                      borderRadius: "24px",
                      fontSize: "12px",
                      fontWeight: 600,
                      lineHeight: "24px",
                      letterSpacing: "0.01em",
                      color: "rgb(13, 27, 42)",
                      textDecoration: "none",
                      background: "rgb(255, 255, 255)",
                      transition: "border-color 200ms ease, background 200ms ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgb(0, 173, 240)";
                      (e.currentTarget as HTMLAnchorElement).style.background = "rgb(240, 250, 255)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgb(221, 224, 230)";
                      (e.currentTarget as HTMLAnchorElement).style.background = "rgb(255, 255, 255)";
                    }}
                  >
                    {r.label} <span style={{ color: "rgb(0, 107, 163)" }}>→</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── S5: CTA BAND ──────────────────────────────────────────────────────── */}
      <div className="cta-band">
        <div
          className="fade-up container"
          style={{
            maxWidth: "1536px",
            padding: "0 48px",
            textAlign: "center",
          }}
        >
          {/* Eyebrow: rgb(91,200,245) */}
          <div
            className="u-label u-label-dark"
            style={{
              fontSize: "12px",
              fontWeight: 500,
              lineHeight: "24px",
              letterSpacing: "0.96px",
              textTransform: "uppercase",
              color: "rgb(0, 107, 163)",
              marginBottom: "16px",
              display: "inline-block",
            }}
          >
            {t("solutions_esg_cta_eyebrow_get_started", "GET STARTED")}
          </div>

          {/* H3: 40px/300/48px/center/white */}
          <h3
            style={{
              fontSize: "40px",
              fontWeight: 300,
              lineHeight: "48px",
              letterSpacing: "0.005em",
              color: "rgb(255, 255, 255)",
              textAlign: "center",
              margin: "0 auto 32px",
              maxWidth: "600px",
            }}
          >
            {t("solutions_esg_cta_heading", "See ESG solutions in action")}
          </h3>

          <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
            <LangLink href="/book-demo" className="btn-primary">{t("solutions_esg_cta_btn_book_demo", "Book a Demo")}</LangLink>
            <LangLink href="/contact" className="btn-secondary">{t("common_talk_to_us", "Talk to Us")}</LangLink>
          </div>
        </div>
      </div>
      <div style={{ height: "60px", background: "#fff" }} />

    </PageWrapper>
  );
}
