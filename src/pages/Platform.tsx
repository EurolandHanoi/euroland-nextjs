"use client";
import LangLink from "@/components/LangLink";
import SectionLabel from "@/components/ui/SectionLabel";
import { useEffect, useState } from "react";
import { PageWrapper } from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
type TFunction = (key: string, fallback?: string) => string;

type ModuleMedia =
  | { type: "video"; src: string }
  | { type: "image"; src: string; alt: string }
  | { type: "carousel"; srcs: string[]; alt: string }
  | { type: "calendar" };

function getWhyCards(t: TFunction) {
  return [
    {
      icon: "⬡",
      title: t("platform_why_card_1_title", "Built exclusively for IR"),
      desc: t(
        "platform_why_card_1_short_desc",
        "Purpose-built for listed-company IR teams."
      ),
    },
    {
      icon: "◈",
      title: t("platform_why_card_2_title", "One vendor, zero integration headaches"),
      desc: t(
        "platform_why_card_2_short_desc",
        "One managed model across tools, data, and support."
      ),
    },
    {
      icon: "◎",
      title: t("platform_why_card_3_title", "IR specialists, not generalists"),
      desc: t(
        "platform_why_card_3_short_desc",
        "Support from teams that understand IR workflows."
      ),
    },
    {
      icon: "◉",
      title: t("platform_why_card_4_title", "Proven across every market-cap tier"),
      desc: t(
        "platform_why_card_4_short_desc",
        "Trusted across markets, teams, and company sizes."
      ),
    },
  ];
}

function getModules(t: TFunction) {
  return [
    {
      label: t("platform_module_stock_label", "Stock & Financial Data"),
      title: t(
        "platform_module_stock_title",
        "Real-time financial data, built for Investor Relations"
      ),
      body: t(
        "platform_module_stock_body",
        "Euroland IR sources share price data, key financials, analyst consensus, and ownership analytics directly from exchanges and regulatory feeds — and delivers them in real time across your IR platform, apps, and investor alerts. No manual updates. No data delays. No third-party integrations to manage."
      ),
      cta: t("platform_module_stock_cta", "See stock data tools in action"),
      ctaHref: "/platform/stock-data",
      imageLeft: false,
      bg: "bg-white",
      media: { type: "video", src: "/share-graph.mp4" } as ModuleMedia,
    },
    {
      label: t("platform_module_ai_label", "AI-Powered Tools"),
      title: t(
        "platform_module_ai_title",
        "Purpose-built AI that works with your IR content"
      ),
      body: t(
        "platform_module_ai_body",
        "Euroland IR's AI layer is trained on your company's IR documents — annual reports, press releases, earnings transcripts, and regulatory filings. Investors and analysts can ask questions in plain language and receive instant, cited answers. Your IR team can use the same AI to draft, review, and optimise communications faster than ever."
      ),
      cta: t("platform_module_ai_cta", "See AI tools in action"),
      ctaHref: "/ai",
      imageLeft: true,
      bg: "bg-subtle",
      media: { type: "video", src: "/ai-popup.mp4" } as ModuleMedia,
    },
    {
      label: t("platform_module_calendar_label", "IR Calendar & Alerts"),
      title: t(
        "platform_module_calendar_title",
        "Never miss a disclosure. Never keep investors waiting."
      ),
      body: t(
        "platform_module_calendar_body",
        "A fully managed financial calendar covering earnings dates, AGMs, capital markets days, dividend events, and roadshows — with automated email and push notification alerts that keep your investor base informed without adding to your team's workload."
      ),
      cta: t("platform_module_calendar_cta", "See calendar & alerts in action"),
      ctaHref: "/contact",
      imageLeft: false,
      bg: "bg-white",
      media: { type: "video", src: "/ir-calendar-demo.mp4" } as ModuleMedia,
    },
    {
      label: t("platform_module_website_label", "Interactive analytics tools"),
      title: t(
        "platform_module_website_title",
        "Interactive analytics tools"
      ),
      body: t(
        "platform_module_website_body",
        "Euroland IR builds and manages Investor Relations websites designed to support disclosure requirements across 60+ stock exchanges - and the expectations of institutional investors, analysts, and ESG rating agencies. Responsive, accessible, multi-language, and managed for ongoing accuracy."
      ),
      cta: t("platform_module_website_cta", "See IR platform capabilities"),
      ctaHref: "/platform",
      imageLeft: true,
      bg: "bg-subtle",
      media: { type: "image", src: "/webpages-showcase_cbbd263f.png", alt: "Euroland IR platform showcase" } as ModuleMedia,
    },
    {
      label: t("platform_module_apps_label", "IR Apps"),
      title: t(
        "platform_module_apps_title",
        "Your IR Operation in every investor's pocket"
      ),
      body: t(
        "platform_module_apps_body",
        "Native iOS and Android Investor Relations apps that give your investors real-time access to financial data, news, events, and company documents — wherever they are. Fully branded, fully managed, and integrated with the rest of your Euroland IR platform."
      ),
      cta: t("platform_module_apps_cta", "See IR apps in action"),
      ctaHref: "/platform/ir-apps",
      imageLeft: false,
      bg: "bg-white",
      media: {
        type: "carousel",
        srcs: [
          "/myirapp/myirapp-1.png",
          "/myirapp/myirapp-2.png",
          "/myirapp/myirapp-3.png",
          "/myirapp/myirapp-4.png",
        ],
        alt: "IR app preview",
      } as ModuleMedia,
    },
    {
      label: t("platform_module_esg_label", "ESG Solutions"),
      title: t(
        "platform_module_esg_title",
        "Structured ESG disclosure for the modern investor"
      ),
      body: t(
        "platform_module_esg_body",
        "Euroland IR's ESG solutions help listed companies present sustainability data clearly and credibly — aligned with CSRD, TCFD, GRI, and SASB frameworks. From structured ESG data pages to the Sustainability IAT, we make it easy to communicate your sustainability story to investors and rating agencies."
      ),
      cta: t("platform_module_esg_cta", "See ESG solutions in action"),
      ctaHref: "/solutions/sustainability-reporting",
      imageLeft: true,
      bg: "bg-subtle",
      media: { type: "video", src: "/esg-popup.mp4" } as ModuleMedia,
    },
  ];
}

function InvestorCalendarPreview() {
  const months = ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb"];
  const events = [
    ["29/04/2026", "Year 2026 3-month interim report"],
    ["22/07/2026", "Year 2026 6-month half-year financial report"],
    ["29/10/2026", "Year 2026 9-month interim report"],
  ];

  return (
    <div style={{ width: "100%", height: "100%", background: "#fff", padding: "32px", boxSizing: "border-box", overflow: "hidden", fontFamily: "Arial, sans-serif" }}>
      <h3 style={{ margin: "0 0 14px", textAlign: "center", color: "#c94a00", fontSize: "var(--fs-lg)", lineHeight: "var(--lh-lg)", fontWeight: 800, letterSpacing: "0.06em" }}>
        INVESTOR CALENDAR
      </h3>
      <div style={{ fontSize: "var(--fs-xs)", lineHeight: "var(--lh-sm)", marginBottom: "16px" }}>
        <strong style={{ display: "block", marginBottom: "16px" }}>Next Event:</strong>
        <strong style={{ display: "block" }}>29/04/2026</strong>
        <span>Year 2026 3-month interim report</span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", border: "1px solid #e5e7eb", marginBottom: "16px" }}>
        {months.map((month) => (
          <div key={month} style={{ height: "32px", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e7eb", background: month === "Apr" ? "#e8e8e8" : "#fff", fontSize: "var(--fs-xs)", position: "relative" }}>
            {month}
            {["Mar", "Apr", "Jul", "Oct"].includes(month) && <span style={{ position: "absolute", bottom: "4px", width: "4px", height: "4px", borderRadius: "50%", background: "#0057b8" }} />}
          </div>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
        <div>
          <strong style={{ display: "block", fontSize: "var(--fs-xs)", marginBottom: "16px" }}>Download all upcoming events</strong>
          <div style={{ width: "24px", height: "24px", borderRadius: "4px", background: "#d7e8ef", display: "flex", alignItems: "center", justifyContent: "center", color: "#3b82f6", fontSize: "var(--fs-base)" }}>▦</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <strong style={{ display: "block", fontSize: "var(--fs-xs)", marginBottom: "16px" }}>Subscribe for events</strong>
          <button style={{ border: 0, background: "#092b67", color: "#fff", padding: "16px 12px", fontSize: "var(--fs-xs)", fontWeight: 700 }}>Subscribe</button>
        </div>
      </div>
      <div style={{ borderBottom: "1px solid #6b7280", display: "flex", gap: "8px", fontSize: "var(--fs-xs)", marginBottom: "16px" }}>
        <span style={{ border: "1px solid #6b7280", borderBottom: 0, padding: "16px 12px", color: "#4b5563" }}>Upcoming Events</span>
        <span style={{ padding: "16px 12px", color: "#05245c" }}>Past Events</span>
      </div>
      <div style={{ fontSize: "var(--fs-xs)" }}>
        {events.map(([date, label]) => (
          <div key={date} style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", borderBottom: "1px solid #e5e7eb", padding: "16px 0" }}>
            <div>
              <strong style={{ display: "block", marginBottom: "16px" }}>{date}</strong>
              <span>{label}</span>
            </div>
            <strong style={{ alignSelf: "center" }}>Results</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

function ModuleMediaPreview({ media }: { media: ModuleMedia }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    if (media.type !== "carousel") return;
    setActiveImageIndex(0);
    const interval = window.setInterval(() => {
      setActiveImageIndex((index) => (index + 1) % media.srcs.length);
    }, 3000);
    return () => window.clearInterval(interval);
  }, [media]);

  return (
    <div
      style={{
        background: media.type === "carousel" ? "rgb(8, 43, 69)" : "rgb(248, 250, 252)",
        borderRadius: "16px",
        aspectRatio: "16/10",
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 16px 48px rgba(8, 43, 69, 0.16)",
        border: "1px solid rgba(8, 43, 69, 0.10)",
      }}
    >
      {media.type === "video" && (
        <div
          style={{
            width: "100%",
            height: "100%",
            padding: "32px",
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #ffffff 0%, #eef7fb 100%)",
          }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: "center",
              display: "block",
              borderRadius: "12px",
              background: "#ffffff",
              boxShadow: "0 12px 32px rgba(8, 43, 69, 0.14)",
            }}
          >
            <source src={media.src} type="video/mp4" />
          </video>
        </div>
      )}
      {media.type === "image" && (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #ffffff 0%, #f4f8fb 100%)",
            padding: "32px",
            boxSizing: "border-box",
          }}
        >
          <img
            src={media.src}
            alt={media.alt}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: "center",
              display: "block",
              borderRadius: "12px",
              boxShadow: "0 12px 32px rgba(8, 43, 69, 0.14)",
            }}
          />
        </div>
      )}
      {media.type === "carousel" && (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "radial-gradient(circle at 50% 25%, rgba(0,173,240,0.16), rgba(8,43,69,0) 42%), rgb(8, 43, 69)",
            padding: "32px",
            boxSizing: "border-box",
            overflow: "hidden",
          }}
        >
          <img
            src={media.srcs[activeImageIndex]}
            alt={media.alt}
            style={{
              width: "auto",
              height: "92%",
              maxWidth: "58%",
              objectFit: "contain",
              display: "block",
              borderRadius: "16px",
              boxShadow: "0 24px 56px rgba(0, 0, 0, 0.34)",
            }}
          />
        </div>
      )}
      {media.type === "calendar" && <InvestorCalendarPreview />}
    </div>
  );
}

export default function Platform() {
  const { t } = useLanguage();

  const WHY_CARDS = getWhyCards(t);
  const MODULES = getModules(t);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageWrapper>
      {/* ── HERO + WHY WRAPPER (single centred introduction) ── */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
          isolation: "isolate",
        }}
      >
        <section
          className="banner-hero-section"
          style={{
            minHeight: "calc(100vh - 64px)",
            display: "flex",
            alignItems: "center",
            backgroundColor: "#082b45",
            backgroundImage:
              "linear-gradient(180deg, rgba(8, 43, 69, 0.70) 0%, rgba(8, 43, 69, 0.58) 52%, rgba(8, 43, 69, 0.66) 100%), url('/overview-banner.avif')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            color: "#ffffff",
            position: "relative",
            zIndex: 2,
            padding: "128px 0 128px",
            overflow: "hidden",
          }}
        >
          <div
            className="container banner-hero-container inner-container"
            style={{ maxWidth: "1180px", padding: "0 48px", position: "relative", zIndex: 1 }}
          >
            <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>
              <div style={{ width: "fit-content", margin: "0 auto" }}>
                <SectionLabel light centered>{t("platform_why_label", "Why Euroland IR")}</SectionLabel>
              </div>
              <h1
                className="banner-hero-title type-h2"
                style={{
                  fontSize: "var(--fs-3xl)",
                  fontWeight: 600,
                  lineHeight: "var(--lh-3xl)",
                  letterSpacing: "-0.02em",
                  color: "#ffffff",
                  margin: "16px auto 16px",
                  maxWidth: "780px",
                }}
              >
                {t("platform_hero_heading", "Built for Investor Relations teams")}
              </h1>
              <div
                className="banner-hero-subtitle"
                style={{
                  fontSize: "var(--fs-md)",
                  fontWeight: 400,
                  lineHeight: "var(--lh-md)",
                  letterSpacing: "0.01em",
                  color: "rgba(255,255,255,0.72)",
                  maxWidth: "760px",
                  margin: "0 auto 32px",
                }}
              >
                {t(
                  "platform_hero_body",
                  "Euroland IR brings together financial data, investor communications, AI-powered search, ESG presentation, alerts, and investor-facing tools in one managed platform for listed-company IR teams."
                )}
              </div>
            </div>

            <div
              className="platform-hero-proof-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                gap: "24px",
                margin: "40px auto 0",
                maxWidth: "1032px",
              }}
            >
              {WHY_CARDS.map((card) => (
                <div
                  key={card.title}
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    border: "1px solid rgba(255,255,255,0.24)",
                    borderRadius: "12px",
                    padding: "20px",
                    transition: "background 200ms ease, transform 200ms ease",
                    textAlign: "left",
                    minHeight: "152px",
                    backdropFilter: "blur(12px)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.16)";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.12)";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  }}
                >
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "8px",
                      background: "rgba(0,173,240,0.20)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "12px",
                      fontSize: "var(--fs-base)",
                      color: "var(--white)",
                    }}
                  >
                    {card.icon}
                  </div>
                  <h5
                    className="type-h6 platform-hero-proof-title"
                    style={{
                      fontSize: "var(--fs-base)",
                      fontWeight: 600,
                      color: "var(--white)",
                      marginBottom: "12px",
                      lineHeight: "var(--lh-lg)",
                    }}
                  >
                    {card.title}
                  </h5>
                  <p
                    style={{
                      fontSize: "var(--fs-base)",
                      lineHeight: "var(--lh-base)",
                      color: "rgba(255,255,255,0.72)",
                      margin: 0,
                    }}
                  >
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      {/* ── 3–8. ALTERNATING MODULE SECTIONS ── */}
      {MODULES.map((mod) => {
        const textBlock = (
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <span
              className="type-label"
              style={{
                color: "var(--label-blue-light)",
                fontWeight: 400,
                lineHeight: "var(--lh-base)",
              }}
            >
              {mod.label}
            </span>
            <h3
              style={{
                fontSize: "var(--fs-2xl)",
                lineHeight: "var(--lh-2xl)",
                fontWeight: 600,
                color: "var(--text-primary)",
                letterSpacing: "-0.01em",
                margin: "16px 0 16px",
              }}
            >
              {mod.title}
            </h3>
            <p
              style={{
                fontSize: "var(--fs-base)",
                lineHeight: "var(--lh-base)",
                color: "var(--text-secondary)",
                marginBottom: "32px",
              }}
            >
              {mod.body}
            </p>
            <a
              href={mod.ctaHref}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "var(--fs-sm)",
                fontWeight: 400,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--blue)",
                textDecoration: "none",
                transition: "gap 160ms ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.gap = "16px")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.gap = "8px")}
            >
              {mod.cta} →
            </a>
          </div>
        );

        const mediaBlock = <ModuleMediaPreview media={mod.media} />;

        return (
          <section key={mod.label} className={`section ${mod.bg}`}>
            <div className="container">
              <div
                className="grid-2col"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "80px",
                  alignItems: "center",
                }}
              >
                {mod.imageLeft ? (
                  <>
                    {mediaBlock}
                    {textBlock}
                  </>
                ) : (
                  <>
                    {textBlock}
                    {mediaBlock}
                  </>
                )}
              </div>
            </div>
          </section>
        );
      })}

      {/* ── 9. CTA BAND ── */}
      <section className="cta-band">
        <div className="container">
          <div style={{ textAlign: "center" }}>
            <span className="u-label u-label-dark">
              {t("platform_cta_band_label", "Get Started")}
            </span>
            <h3
              style={{
                fontSize: "var(--fs-2xl)",
                lineHeight: "var(--lh-2xl)",
                fontWeight: 600,
                color: "var(--white)",
                letterSpacing: "-0.01em",
                margin: "16px auto 16px",
                maxWidth: "600px",
              }}
            >
              {t(
                "platform_cta_band_heading",
                "Ready to transform your Investor Relations?"
              )}
            </h3>
            <p
              style={{
                fontSize: "var(--fs-base)",
                lineHeight: "var(--lh-base)",
                color: "rgba(255,255,255,0.70)",
                marginBottom: "32px",
                maxWidth: "480px",
                margin: "0 auto 32px",
              }}
            >
              {t(
                "platform_cta_band_body",
                "Speak with our team to find the right solution for your company."
              )}
            </p>
            <div
              style={{
                display: "flex",
                gap: "16px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <LangLink href="/book-demo" className="btn-primary">
                {t("platform_cta_band_btn_book_demo", "Book a Demo")}
              </LangLink>
              <LangLink href="/platform" className="btn-secondary">
                {t("platform_cta_band_btn_contact_us", "Explore our tools")}
              </LangLink>
            </div>
          </div>
        </div>
      </section>
      <div style={{ height: "60px", background: "#fff" }} />
    </PageWrapper>
  );
}

