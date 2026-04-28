"use client";

/**
 * HOME PAGE — Euroland IR
 * Source: euroland-ir-best-practice-ir-solutions-purpose-built-ai-for--page-export.json
 * All measurements at 1920px viewport
 *
 * S1 Hero:        section [25] h:714 pad:64px 0 60px | container maxW:1536px pad:0 48px
 *                 grid [28]: 688px 688px gap:64px
 * S2 Stats Bar:   div [41] h:150 pad:32px 0 | bg:rgb(26,63,92) | 4 cols 336px gap:32px
 * S3 Logo Strip:  div [56] h:154 pad:32px 0 | bg:rgb(245,245,245)
 * S4 Platform:    section [63] h:507 pad:60px 0 | grid 688px 688px gap:64px
 * S5 AI:          section [74] h:592 bg:rgb(8,43,69) | flex 50/50 | right pad:64px
 * S6 Solutions:   section [96] h:944 pad:60px 0 | cards 464px×262px pad:40px gap:24px
 * S7 Stats Strip: div [132] h:236 pad:60px 0 | bg:rgb(8,43,69) | 4 cols 336px gap:32px
 * S8 Testimonial: section [151] h:634 pad:60px 0 | bg:rgb(245,245,245) | card 760×324px
 * S9 Newsroom:    section [165] h:542 pad:60px 0 | bg:white | 3 cards 464×274px
 * S10 CTA:        div [191] h:446 pad:80px 0 | grid 759px 633px gap:48px
 * S11 Member:     div [203] h:220 pad:60px 0 | bg:white
 */

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import LangLink from "@/components/LangLink";
import { ArrowRight } from "lucide-react";
import { PageWrapper } from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import ToolModal, { ModalData } from "@/components/ToolModal";

type TFunction = (key: string, fallback?: string) => string;

function getTestimonials(t: TFunction) {
  return [
    {
      quote: t(
        "home_testimonial_1_quote",
        "Euroland.com's expertise, friendly service and fast delivery of the tools tailored to our needs made an impression on us. The tools are looking great and functioning very well also on mobile devices, which we think is an important point regarding communications with IR target groups."
      ),
      name: t("home_testimonial_1_name", "Liisa-Maija Seppänen"),
      role: t("home_testimonial_1_role", "Investor Relations Manager"),
      company: t("home_testimonial_1_company", "SSAB"),
    },
    {
      quote: t(
        "home_testimonial_2_quote",
        "Euroland's Financial Chart Tool was just the tool we needed to complement our website. Investors and analysts want to see historical financial development, and this tool provides that possibility. And as it is interactive, all the numbers pop up in the chart. It's a great tool."
      ),
      name: t("home_testimonial_2_name", "Micaela Sjökvist"),
      role: t("home_testimonial_2_role", "Head of Investor Relations"),
      company: t("home_testimonial_2_company", "Securitas"),
    },
    {
      quote: t(
        "home_testimonial_3_quote",
        "Our analysts like the Interactive Analysis Tool — we have received very good feedback from them. Several investors have also sent us their appreciation on our new website. Communication with them is now faster and more accurate. Euroland does a great job updating our key information and presenting it in a very friendly and comprehensive way."
      ),
      name: t("home_testimonial_3_name", "Antonio de Cárcer Díez"),
      role: t("home_testimonial_3_role", "Director, Investor Relations"),
      company: t("home_testimonial_3_company", "Prosegur"),
    },
    {
      quote: t(
        "home_testimonial_4_quote",
        "Thanks to Euroland, we were able to take our corporate website to the next level by providing comprehensive financial information and real-time market data in a highly user-friendly format. We are exceptionally pleased by the array of innovative tools that Euroland has developed, by their continued focus on enhancing their products and services, and by the professionalism and responsiveness of the support team."
      ),
      name: t("home_testimonial_4_name", ""),
      role: t("home_testimonial_4_role", "Head of Investor Relations"),
      company: t("home_testimonial_4_company", "First Abu Dhabi Bank"),
    },
    {
      quote: t(
        "home_testimonial_5_quote",
        "I am very happy to recommend Euroland. The three most important criteria — quality, trustworthiness and price — were all at an excellent level, so it was quite easy for us to choose Euroland."
      ),
      name: t("home_testimonial_5_name", "Olli Turunen"),
      role: t("home_testimonial_5_role", "Head of Investor Relations"),
      company: t("home_testimonial_5_company", "Sanoma"),
    },
  ];
}

function getSolutionCards(t: TFunction) {
  return [
    {
      num: "01",
      title: t("feat_ir_title", "IR Software Tools"),
      body: t(
        "feat_ir_desc",
        "Stock information, analytics, calculators, and more, all designed to support investor relations teams."
      ),
      link: "/platform/stock-data",
      label: t("learn_more", "Learn more"),
    },
    {
      num: "02",
      title: t("feat_ai_title", "AI Solutions"),
      body: t(
        "feat_ai_desc",
        "Purpose-built AI tools for investor relations and corporate websites that save time and improve accuracy."
      ),
      link: "/ai",
      label: t("learn_more", "Learn more"),
    },
    {
      num: "03",
      title: t("feat_apps_title", "IR Apps"),
      body: t(
        "feat_apps_desc",
        "Easy-to-use IR apps for websites, analyst kits, and mobile devices that keep company information accessible."
      ),
      link: "/platform/ir-apps",
      label: t("learn_more", "Learn more"),
    },
    {
      num: "04",
      title: t("feat_services_title", "IR Services"),
      body: t(
        "feat_services_desc",
        "Investor relations services, including website design, strategy, and more, supporting every aspect of your IR programme."
      ),
      link: "/platform",
      label: t("learn_more", "Learn more"),
    },
    {
      num: "05",
      title: t("feat_esg_title", "ESG Solutions"),
      body: t(
        "feat_esg_desc",
        "ESG pages and tools that simplify reporting, enhance transparency, and engage stakeholders with accessible data."
      ),
      link: "/solutions/sustainability-reporting",
      label: t("learn_more", "Learn more"),
    },
  ];
}

function getHomeModals(t: TFunction): Record<string, ModalData> {
  return {
    "ir-software": {
      id: "ir-software",
      iconLabel: t("feat_ir_title", "IR Software Tools"),
      eyebrow: t("feat_ir_title", "IR Software Tools"),
      title: t("feat_ir_title", "IR Software Tools"),
      subtitle: t(
        "feat_ir_desc",
        "Stock information, analytics, calculators, and more, all designed to support investor relations teams."
      ),
      features: [
        t(
          "home_modal_ir_feature_1",
          "Real-time stock price tracking with live updates"
        ),
        t(
          "home_modal_ir_feature_2",
          "Interactive charts with customisable timeframes"
        ),
        t("home_modal_ir_feature_3", "Peer and sector comparison views"),
        t("home_modal_ir_feature_4", "Automated financial data integration"),
        t(
          "home_modal_ir_feature_5",
          "Grade-level financial tools and IR Calendar"
        ),
      ],
      impact: [
        t(
          "home_modal_ir_impact_1",
          "Engage investors with dynamic visualisations"
        ),
        t("home_modal_ir_impact_2", "Save time with automated data updates"),
        t("home_modal_ir_impact_3", "Build trust through transparency"),
      ],
      benefits: [
        t(
          "home_modal_ir_impact_1",
          "Engage investors with dynamic visualisations"
        ),
        t("home_modal_ir_impact_2", "Save time with automated data updates"),
        t("home_modal_ir_impact_3", "Build trust through transparency"),
      ],
      learnMoreHref: "/platform/stock-data",
    },
    "ai-solutions": {
      id: "ai-solutions",
      iconLabel: t("feat_ai_title", "AI Solutions"),
      eyebrow: t("feat_ai_title", "AI Solutions"),
      title: t("feat_ai_title", "AI Solutions"),
      subtitle: t(
        "feat_ai_desc",
        "Purpose-built AI tools for investor relations and corporate websites that save time and improve accuracy."
      ),
      features: [
        t(
          "home_modal_ai_feature_1",
          "Intelligent document analysis and categorisation"
        ),
        t(
          "home_modal_ai_feature_2",
          "Automated sentiment analysis from earnings calls"
        ),
        t("home_modal_ai_feature_3", "Natural language processing for Q&A"),
        t("home_modal_ai_feature_4", "Purpose-built IR training data"),
        t("home_modal_ai_feature_5", "Compliance-aware outputs"),
      ],
      impact: [
        t("home_modal_ai_impact_1", "Reduce manual work significantly"),
        t("home_modal_ai_impact_2", "Improve accuracy and consistency"),
        t("home_modal_ai_impact_3", "Respond faster to investor inquiries"),
      ],
      benefits: [
        t("home_modal_ai_impact_1", "Reduce manual work significantly"),
        t("home_modal_ai_impact_2", "Improve accuracy and consistency"),
        t("home_modal_ai_impact_3", "Respond faster to investor inquiries"),
      ],
      learnMoreHref: "/ai",
    },
    "ir-apps": {
      id: "ir-apps",
      iconLabel: t("feat_apps_title", "IR Apps"),
      eyebrow: t("feat_apps_title", "IR Apps"),
      title: t("feat_apps_title", "IR Apps"),
      subtitle: t(
        "feat_apps_desc",
        "Easy-to-use IR apps for websites, analyst kits, and mobile devices that keep company information accessible."
      ),
      features: [
        t(
          "home_modal_apps_feature_1",
          "Real-time push notifications for key events"
        ),
        t("home_modal_apps_feature_2", "Interactive stock charts and data"),
        t("home_modal_apps_feature_3", "Secure document library"),
        t("home_modal_apps_feature_4", "Customisable branding and layout"),
        t(
          "home_modal_apps_feature_5",
          "Usage analytics and engagement tracking"
        ),
      ],
      impact: [
        t("home_modal_apps_impact_1", "Increase investor engagement"),
        t(
          "home_modal_apps_impact_2",
          "Reach investors on their preferred device"
        ),
        t("home_modal_apps_impact_3", "Deliver timely information instantly"),
      ],
      benefits: [
        t("home_modal_apps_impact_1", "Increase investor engagement"),
        t(
          "home_modal_apps_impact_2",
          "Reach investors on their preferred device"
        ),
        t("home_modal_apps_impact_3", "Deliver timely information instantly"),
      ],
      learnMoreHref: "/platform/ir-apps",
    },
    "ir-services": {
      id: "ir-services",
      iconLabel: t("feat_services_title", "IR Services"),
      eyebrow: t("feat_services_title", "IR Services"),
      title: t("feat_services_title", "IR Services"),
      subtitle: t(
        "feat_services_desc",
        "Investor relations services, including website design, strategy, and more, supporting every aspect of your IR programme."
      ),
      features: [
        t("home_modal_services_feature_1", "IR platform design and development"),
        t(
          "home_modal_services_feature_2",
          "Investor relations strategy consulting"
        ),
        t(
          "home_modal_services_feature_3",
          "Annual report design and production"
        ),
        t("home_modal_services_feature_4", "Roadshow preparation and support"),
        t("home_modal_services_feature_5", "Ongoing IR programme management"),
      ],
      impact: [
        t(
          "home_modal_services_impact_1",
          "Professional IR presence from day one"
        ),
        t("home_modal_services_impact_2", "Expert guidance at every stage"),
        t("home_modal_services_impact_3", "Save time and reduce risk"),
      ],
      benefits: [
        t(
          "home_modal_services_impact_1",
          "Professional IR presence from day one"
        ),
        t("home_modal_services_impact_2", "Expert guidance at every stage"),
        t("home_modal_services_impact_3", "Save time and reduce risk"),
      ],
      learnMoreHref: "/platform",
    },
    "esg-solutions": {
      id: "esg-solutions",
      iconLabel: t("feat_esg_title", "ESG Solutions"),
      eyebrow: t("feat_esg_title", "ESG Solutions"),
      title: t("feat_esg_title", "ESG Solutions"),
      subtitle: t(
        "feat_esg_desc",
        "ESG pages and tools that simplify reporting, enhance transparency, and engage stakeholders with accessible data."
      ),
      features: [
        t("home_modal_esg_feature_1", "ESG data pages and dashboards"),
        t(
          "home_modal_esg_feature_2",
          "Automated reporting frameworks (GRI, TCFD, SASB)"
        ),
        t("home_modal_esg_feature_3", "Stakeholder engagement tools"),
        t("home_modal_esg_feature_4", "Accessible data visualisations"),
        t("home_modal_esg_feature_5", "Compliance-ready document generation"),
      ],
      impact: [
        t("home_modal_esg_impact_1", "Simplify complex ESG reporting"),
        t("home_modal_esg_impact_2", "Enhance transparency with stakeholders"),
        t(
          "home_modal_esg_impact_3",
          "Meet regulatory requirements efficiently"
        ),
      ],
      benefits: [
        t("home_modal_esg_impact_1", "Simplify complex ESG reporting"),
        t("home_modal_esg_impact_2", "Enhance transparency with stakeholders"),
        t(
          "home_modal_esg_impact_3",
          "Meet regulatory requirements efficiently"
        ),
      ],
      learnMoreHref: "/solutions/sustainability-reporting",
    },
  };
}

function getNewsItems(t: TFunction) {
  return [
    {
      tag: t("home_news_1_tag", "Press"),
      title: t(
        "home_news_1_title",
        "Euroland expands best-practice IR platform with new capabilities"
      ),
      body: t(
        "home_news_1_body",
        "New disclosure management and AI-assisted drafting tools now available to all listed clients across all market caps."
      ),
    },
    {
      tag: t("home_news_2_tag", "Product"),
      title: t(
        "home_news_2_title",
        "New AI workflows help IR teams move faster with confidence"
      ),
      body: t(
        "home_news_2_body",
        "Purpose-built language models trained on IR-specific data deliver accurate, compliant outputs in seconds."
      ),
    },
    {
      tag: t("home_news_3_tag", "Award"),
      title: t(
        "home_news_3_title",
        "Recognised for design and investor engagement excellence"
      ),
      body: t(
        "home_news_3_body",
        "Euroland IR receives top honours at the IR Magazine Awards for digital IR innovation and client outcomes."
      ),
    },
  ];
}

function getTopStats(t: TFunction) {
  return [
    {
      num: t("stat_clients_num", "1,400+"),
      label: t("stat_clients_label", "Clients"),
    },
    {
      num: t("stat_exchanges_num", "60+"),
      label: t("stat_exchanges_label", "Stock Exchanges"),
    },
    {
      num: t("stat_support_num", "24/7"),
      label: t("stat_support_label", "Support & Service"),
    },
    {
      num: t("stat_years_num", "20+"),
      label: t("stat_years_label", "Years of experience"),
    },
  ];
}

function getBottomStats(t: TFunction) {
  return [
    {
      num: t("stat_clients_num", "1,400+"),
      label: t("stat_clients_label", "Clients"),
      body: t(
        "home_stats_strip_1_body",
        "Trusted by companies worldwide, from emerging growth businesses to global market leaders."
      ),
    },
    {
      num: t("stat_exchanges_num", "60+"),
      label: t("stat_exchanges_label", "Stock Exchanges"),
      body: t(
        "home_stats_strip_2_body",
        "We support listed companies across major global exchanges with best-practice IR platforms and tools."
      ),
    },
    {
      num: t("stat_support_num", "24/7"),
      label: t("stat_support_label", "Support & Service"),
      body: t(
        "home_stats_strip_3_body",
        "Our global team provides dedicated support whenever and wherever you need it."
      ),
    },
    {
      num: t("home_stats_strip_4_num", "Bank-Grade"),
      label: t("home_stats_strip_4_label", "Security"),
      body: t(
        "home_stats_strip_4_body",
        "We use robust security protocols and resilient infrastructure to protect corporate systems and sensitive data."
      ),
    },
  ];
}

const SOLUTION_MODAL_IDS: Record<string, string> = {
  "01": "ir-software",
  "02": "ai-solutions",
  "03": "ir-apps",
  "04": "ir-services",
  "05": "esg-solutions",
};

const MEMBER_LOGOS = [
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663310772351/J2iCYA6arZjci5hVrUBhtU/pm01_074415a9.webp",
    alt: "Association Suisse Relations Investisseurs",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663310772351/J2iCYA6arZjci5hVrUBhtU/pm02_26a33809.webp",
    alt: "Japan Investor Relations Association",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663310772351/J2iCYA6arZjci5hVrUBhtU/pm03_00b4c3cf.webp",
    alt: "Middle East Investor Relations Association",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663310772351/J2iCYA6arZjci5hVrUBhtU/pm04_4a9cd83b.webp",
    alt: "Hong Kong Investor Relations Association",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663310772351/J2iCYA6arZjci5hVrUBhtU/pm05_135b7498.webp",
    alt: "NIRI — The Association for Investor Relations",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663310772351/J2iCYA6arZjci5hVrUBhtU/pm06_d27e27d6.webp",
    alt: "IR Society",
  },
];

/** Parse a stat string like "1,400+", "60+", "24/7", "20+" into { value, suffix } */
function parseStatNum(raw: string): { value: number; suffix: string } {
  // Handle special cases like "24/7" — no numeric count-up, just display as-is
  if (raw.includes("/")) return { value: -1, suffix: raw };
  const match = raw.match(/^([\d,]+)(.*)$/);
  if (!match) return { value: -1, suffix: raw };
  const value = parseInt(match[1].replace(/,/g, ""), 10);
  const suffix = match[2] ?? "";
  return { value, suffix };
}

/** Count-up hook — returns the animated display string, starts when `active` becomes true */
function useCountUp(raw: string, active: boolean, duration = 2000): string {
  const { value, suffix } = parseStatNum(raw);
  const [display, setDisplay] = useState(value === -1 ? raw : `0${suffix}`);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!active || value === -1) {
      if (value === -1) setDisplay(raw);
      return;
    }
    const start = performance.now();
    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * value);
      const formatted = value >= 1000 ? current.toLocaleString("en-US") : String(current);
      setDisplay(`${formatted}${suffix}`);
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      }
    }
    frameRef.current = requestAnimationFrame(tick);
    return () => { if (frameRef.current !== null) cancelAnimationFrame(frameRef.current); };
  }, [active, value, suffix, raw, duration]);

  return display;
}

/** Single animated stat number — triggers count-up on intersection */
function AnimatedStatNum({ raw, style, static: isStatic }: { raw: string; style?: React.CSSProperties; static?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const display = useCountUp(raw, active);

  useEffect(() => {
    if (isStatic) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [isStatic]);

  return <div ref={ref} style={style}>{isStatic ? raw : display}</div>;
}

function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return ref;
}

function HeroCycler() {
  const { t } = useLanguage();
  const phrases = (() => {
    try {
      const raw = t("hero_phrases", "");
      if (raw && raw.startsWith("[")) return JSON.parse(raw) as string[];
    } catch {}
    return [
      "Engage Investors",
      "Build Trust",
      "Drive Growth",
      "Communicate Clearly",
    ];
  })();

  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx(i => (i + 1) % phrases.length);
        setVisible(true);
      }, 300);
    }, 2800);

    return () => clearInterval(id);
  }, [phrases.length]);

  return (
    <span
      style={{
        color: "#327AB1",
        transition: "opacity 300ms ease",
        opacity: visible ? 1 : 0,
        display: "inline-block",
      }}
    >
      {phrases[idx]}
    </span>
  );
}

export default function Home() {
  const { t, lang } = useLanguage();
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [activeModal, setActiveModal] = useState<ModalData | null>(null);

  const fadeHero = useFadeUp();
  const fadePlatform = useFadeUp();
  const fadeAI = useFadeUp();
  const fadeSolutions = useFadeUp();
  const fadeTestimonial = useFadeUp();
  const fadeNewsroom = useFadeUp();
  const fadeCTA = useFadeUp();

  const testimonials = getTestimonials(t);
  const solutionCards = getSolutionCards(t);
  const homeModals = getHomeModals(t);
  const newsItems = getNewsItems(t);
  const topStats = getTopStats(t);
  const bottomStats = getBottomStats(t);
  const activeTestimonial = testimonials[testimonialIdx];

  return (
    <PageWrapper>
      <section
        className="hero-section-mobile"
        style={{
          background: "var(--navy-dark)",
          backgroundImage:
            "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663310772351/J2iCYA6arZjci5hVrUBhtU/hero-bg_c3bbfd60.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          paddingTop: "64px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(8,43,69,0.92) 0%, rgba(8,43,69,0.75) 50%, rgba(8,43,69,0.40) 100%)",
            pointerEvents: "none",
          }}
        />
        <div
          className="container"
          style={{ paddingTop: "96px", paddingBottom: "96px" }}
        >
          <div className="grid-2col" style={{ gap: "var(--sp-16)" }}>
            <div ref={fadeHero} className="fade-up hero-text-col">
              <div
                className="u-label"
                style={{ marginBottom: "var(--sp-6)", color: "#327AB1" }}
              >
                {t("home_hero_label", "Best-Practice IR Solutions")}
              </div>
              <h1
                style={{
                  color: "white",
                  fontSize: "var(--fs-4xl)",
                  lineHeight: "var(--lh-4xl)",
                  fontWeight: 300,
                  letterSpacing: "var(--ls-hero)",
                  marginBottom: "var(--sp-6)",
                }}
              >
                {t("home_hero_h1_line1", "Tell Your Story,")} <br />
                <HeroCycler />
              </h1>
              <p
                style={{
                  color: "rgba(255,255,255,0.70)",
                  fontSize: "var(--fs-md)",
                  lineHeight: "var(--lh-md)",
                  marginBottom: "var(--sp-10)",
                  maxWidth: "480px",
                }}
              >
                {t(
                  "home_hero_sub",
                  "Best-practice investor relations solutions and purpose-built AI for IR teams. Trusted by more than 1,400 publicly listed companies across 60+ stock exchanges worldwide."
                )}
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "var(--sp-3)",
                  flexWrap: "wrap",
                }}
              >
                <LangLink href="/book-demo" className="btn-primary">
                  {t("home_hero_cta1", "Book a Demo")}
                </LangLink>
                <LangLink href="/contact" className="btn-secondary">
                  {t("home_hero_cta2", "Talk to Us")}
                </LangLink>
              </div>
            </div>
            <div className="hero-image-col" style={{ position: "relative" }}>
              <div
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "12px",
                  overflow: "hidden",
                  minHeight: "260px",
                  boxShadow: "0 18px 54px rgba(0,0,0,0.22)",
                }}
              >
                <img
                  src="/webpages-showcase_cbbd263f.png"
                  alt={t("home_hero_media_alt", "Euroland IR platform showcase")}
                  style={{ width: "100%", height: "100%", display: "block", objectFit: "cover" }}
                />
              </div>
              <div
                style={{
                  marginTop: "16px",
                  padding: "16px",
                  borderRadius: "8px",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.10)",
                }}
              >
                <div style={{ color: "#8ddcff", fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "6px" }}>
                  {t("home_hero_proof_label", "What you will see")}
                </div>
                <p style={{ color: "rgba(255,255,255,0.84)", margin: 0, fontSize: "14px", lineHeight: "24px" }}>
                  {t("home_hero_proof_body", "Investor website modules, market data, disclosure workflows, and purpose-built AI in one managed IR platform.")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        style={{
          padding: "48px 0",
          backgroundColor: "rgb(26, 63, 92)",
          border: "1px solid rgba(0, 173, 240, 0.15)",
        }}
      >
        <div className="inner-container" style={{ maxWidth: "1536px", margin: "0 auto", padding: "0 48px", boxSizing: "border-box" }}>
          <div className="stats-bar-grid">
            {topStats.map(item => (
              <div key={item.label} style={{ color: "rgb(255, 255, 255)", textAlign: "center" }}>
                <AnimatedStatNum
                  raw={item.num}
                  static={lang === "ja"}
                  style={{
                    fontSize: "40px",
                    fontWeight: 300,
                    lineHeight: "52px",
                    color: "rgb(255, 255, 255)",
                  }}
                />
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 500,
                    lineHeight: "24px",
                    letterSpacing: "0.96px",
                    textTransform: "uppercase",
                    color: "rgb(255, 255, 255)",
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          padding: "32px 0",
          backgroundColor: "rgb(245, 245, 245)",
          overflow: "hidden",
        }}
      >
        {lang === "ja" ? (
          /* Static centred strip for Japanese locale */
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <img
              src="/client-logos-ja.webp"
              alt="Euroland IR clients"
              style={{
                height: "35px",
                width: "auto",
                display: "block",
                maxWidth: "100%",
              }}
            />
          </div>
        ) : (
          /* Scrolling marquee for all other locales */
          <div style={{ width: "100%", position: "relative" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0px",
                width: "max-content",
                animation: "marquee 60s linear infinite",
              }}
            >
              {[1, 2].map((copy) => (
                <img
                  key={copy}
                  src={
                    lang === "zh" || lang === "zh-TW"
                      ? "/client-logos-zh.webp"
                      : "/client-logos.webp"
                  }
                  alt="Euroland IR clients"
                  style={{
                    height: "35px",
                    width: "auto",
                    display: "block",
                    flexShrink: 0,
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <section style={{ padding: "80px 0" }}>
        <div
          ref={fadePlatform}
          className="fade-up inner-container"
          style={{ maxWidth: "1536px", margin: "0 auto", padding: "0 48px" }}
        >
          <div className="grid-2col">
            <div className="mobile-full-w" style={{ borderRadius: "8px", overflow: "hidden", aspectRatio: "16/9" }}>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663310772351/J2iCYA6arZjci5hVrUBhtU/webpages-showcase_cbbd263f.png"
                alt={t(
                  "home_platform_image_alt",
                  "Award-winning IR platform showcase"
                )}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>

            <div>
              <div className="u-label" style={{ marginBottom: "16px" }}>
                {t("equity_label", "Our Platform")}
              </div>
              <h3
                style={{
                  fontSize: "40px",
                  fontWeight: 400,
                  lineHeight: "52px",
                  letterSpacing: "0.005em",
                  color: "rgb(13, 27, 42)",
                  marginBottom: "24px",
                }}
              >
                {t("equity_h3", "Tell Your Equity Story")}
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  letterSpacing: "0.01em",
                  color: "rgb(58, 74, 88)",
                  marginBottom: "16px",
                }}
              >
                {t(
                  "equity_p1",
                  "Our award-winning IR tools and services streamline financial reporting and stakeholder engagement, delivering measurable results for listed companies of every size."
                )}
              </p>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  letterSpacing: "0.01em",
                  color: "rgb(58, 74, 88)",
                  marginBottom: "32px",
                }}
              >
                {t(
                  "equity_p2",
                  "From disclosure management to investor analytics, every tool is designed to help IR teams communicate with clarity, confidence, and compliance."
                )}
              </p>
              <LangLink href="/solutions"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 28px",
                  height: "50px",
                  backgroundColor: "transparent",
                  color: "rgb(8, 43, 69)",
                  borderRadius: "24px",
                  border: "1px solid rgb(221, 224, 230)",
                  fontSize: "12px",
                  fontWeight: 500,
                  lineHeight: "24px",
                  letterSpacing: "0.96px",
                  textTransform: "uppercase",
                  textDecoration: "none",
                }}
              >
                {t("equity_cta", "Explore Solutions")}
              </LangLink>
            </div>
          </div>
        </div>
      </section>

      <section className="ai-section-flex" style={{ backgroundColor: "rgb(8, 43, 69)", minHeight: "480px" }}>
        <div
          style={{
            width: "953px",
            minHeight: "480px",
            flexShrink: 0,
            overflow: "hidden",
          }}
        >
          <video
            autoPlay
            muted
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          >
            <source src="/ai-solutions-bg.mp4" type="video/mp4" />
          </video>
        </div>

        <div
          ref={fadeAI}
          className="fade-up"
          style={{
            flex: 1,
            padding: "64px 64px 64px 48px",
            backgroundColor: "rgb(8, 43, 69)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <span
            className="u-label"
            style={{ marginBottom: "16px", display: "inline-block" }}
          >
            {t("home_ai_label", "AI Solutions")}
          </span>
          <h3
            style={{
              fontSize: "40px",
              fontWeight: 400,
              lineHeight: "52px",
              letterSpacing: "0.005em",
              color: "rgb(255, 255, 255)",
              marginBottom: "20px",
            }}
          >
            {t("home_ai_title", "Purpose-built AI for investor relations")}
          </h3>
          <p
            style={{
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
              letterSpacing: "0.01em",
              color: "rgba(255, 255, 255, 0.72)",
              marginBottom: "32px",
            }}
          >
            {t(
              "home_ai_subtitle",
              "Intelligent tools designed specifically for IR teams — saving time, improving accuracy, and keeping your communications compliant and consistent."
            )}
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              marginBottom: "40px",
            }}
          >
            {[
              {
                title: t("home_ai_feature_1_title", "Earnings Q&A Assistant"),
                body: t(
                  "home_ai_feature_1_body",
                  "Instantly answers investor questions using your own earnings transcripts and filings."
                ),
              },
              {
                title: t(
                  "home_ai_feature_2_title",
                  "Real-time Auto-Translation"
                ),
                body: t(
                  "home_ai_feature_2_body",
                  "Publish IR content in multiple languages automatically, with IR-specific terminology preserved."
                ),
              },
              {
                title: t(
                  "home_ai_feature_3_title",
                  "Investor Sentiment Analysis"
                ),
                body: t(
                  "home_ai_feature_3_body",
                  "Monitor how investors and analysts are responding to your disclosures in real time."
                ),
              },
            ].map(item => (
              <div
                key={item.title}
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "rgb(0, 173, 240)",
                    flexShrink: 0,
                    marginTop: "8px",
                  }}
                />
                <div>
                  <h6
                    style={{
                      fontSize: "20px",
                      fontWeight: 500,
                      lineHeight: "28px",
                      letterSpacing: "0.01em",
                      color: "rgb(255, 255, 255)",
                      marginBottom: "6px",
                    }}
                  >
                    {item.title}
                  </h6>
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: "24px",
                      letterSpacing: "0.01em",
                      color: "rgba(255, 255, 255, 0.72)",
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <LangLink href="/ai"
              style={{
                display: "inline-block",
                padding: "12px 32px",
                height: "48px",
                backgroundColor: "transparent",
                color: "rgb(255, 255, 255)",
                borderRadius: "24px",
                border: "1px solid rgba(255,255,255,0.6)",
                fontSize: "12px",
                fontWeight: 500,
                lineHeight: "24px",
                letterSpacing: "0.96px",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              {t("home_ai_cta", "Explore AI Solutions")}
            </LangLink>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 0" }}>
        <div className="inner-container" style={{ maxWidth: "1536px", margin: "0 auto", padding: "0 48px" }}>
          <div
            ref={fadeSolutions}
            className="fade-up"
            style={{ marginBottom: "48px", textAlign: "center" }}
          >
            <div
              className="u-label"
              style={{ marginBottom: "16px" }}
            >
              {t("nav_solutions", "Solutions")}
            </div>
            <h3
              style={{
                fontSize: "40px",
                fontWeight: 400,
                lineHeight: "52px",
                letterSpacing: "0.005em",
                color: "rgb(13, 27, 42)",
                marginBottom: "20px",
              }}
            >
              {t("home_solutions_title", "Best Practice IR Solutions")}
            </h3>
            <p
              style={{
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "24px",
                letterSpacing: "0.01em",
                color: "rgb(58, 74, 88)",
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              {t(
                "home_solutions_subtitle",
                "Transform your IR programme with a complete suite of tools, services, and technology built specifically for listed companies."
              )}
            </p>
          </div>

          <div
            className="solutions-grid"
          >
            {solutionCards.map(card => {return (
              <div
                key={card.num}
                className="card-fixed"
                onClick={() =>
                  setActiveModal(homeModals[SOLUTION_MODAL_IDS[card.num]])
                }
                style={{
                  width: "100%",
                  height: "262px",
                  padding: "40px",
                  backgroundColor: "rgb(255, 255, 255)",
                  border: "1px solid rgb(221, 224, 230)",
                  borderRadius: "16px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  textAlign: "center",
                  cursor: "pointer",
                  transition: "box-shadow 250ms ease, border-color 250ms ease, background-color 250ms ease, transform 250ms ease",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow =
                    "0 8px 32px rgba(0,107,163,0.18)";
                  e.currentTarget.style.borderColor = "rgb(0, 107, 163)";
                  e.currentTarget.style.backgroundColor = "rgb(245, 250, 255)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                  const cta = e.currentTarget.querySelector(".card-cta") as HTMLElement;
                  if (cta) { cta.style.color = "rgb(0, 107, 163)"; cta.style.gap = "8px"; }
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = "rgb(221, 224, 230)";
                  e.currentTarget.style.backgroundColor = "rgb(255, 255, 255)";
                  e.currentTarget.style.transform = "translateY(0)";
                  const cta = e.currentTarget.querySelector(".card-cta") as HTMLElement;
                  if (cta) { cta.style.color = "rgb(8, 43, 69)"; cta.style.gap = "4px"; }
                }}
              >
                <div>
                  <h4 className="type-h5"
                    style={{
                      fontSize: "24px",
                      fontWeight: 500,
                      lineHeight: "32px",
                      color: "rgb(13, 27, 42)",
                      marginBottom: "8px",
                    }}
                  >
                    {card.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: 400,
                      lineHeight: "24px",
                      letterSpacing: "0.01em",
                      color: "rgb(58, 74, 88)",
                    }}
                  >
                    {card.body}
                  </p>
                </div>
                <span
                  className="card-cta"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "4px",
                    fontSize: "12px",
                    fontWeight: 600,
                    lineHeight: "24px",
                    letterSpacing: "0.08em",
                    color: "rgb(8, 43, 69)",
                    textTransform: "uppercase",
                    width: "100%",
                    transition: "color 250ms ease, gap 250ms ease",
                  }}
                >
                  Explore <ArrowRight size={14} strokeWidth={2.5} />
                </span>
              </div>
            );})}

            {/* 6th card — discovery prompt */}
            <LangLink href="/platform"
              className="card-fixed"
              style={{
                width: "100%",
                height: "262px",
                padding: "40px",
                backgroundColor: "rgb(245, 250, 255)",
                border: "2px solid rgb(0, 107, 163)",
                borderRadius: "16px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                cursor: "pointer",
                textDecoration: "none",
                transition: "box-shadow 250ms ease, background-color 250ms ease, transform 250ms ease",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(0,107,163,0.18)";
                (e.currentTarget as HTMLElement).style.backgroundColor = "rgb(235, 245, 255)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                (e.currentTarget as HTMLElement).style.backgroundColor = "rgb(245, 250, 255)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  fontSize: "48px",
                  fontWeight: 700,
                  lineHeight: "56px",
                  color: "rgb(0, 107, 163)",
                  marginBottom: "8px",
                }}
              >
                35+
              </div>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  lineHeight: "24px",
                  color: "rgb(13, 27, 42)",
                  marginBottom: "16px",
                }}
              >
                More solutions available
              </p>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "4px",
                  fontSize: "12px",
                  fontWeight: 600,
                  lineHeight: "24px",
                  letterSpacing: "0.08em",
                  color: "rgb(0, 107, 163)",
                  textTransform: "uppercase",
                  width: "100%",
                }}
              >
                Explore all <ArrowRight size={14} strokeWidth={2.5} />
              </span>
            </LangLink>
          </div>

          <div style={{ marginTop: "48px", textAlign: "center" }}>
            <LangLink href="/platform"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 32px",
                height: "48px",
                backgroundColor: "rgb(0, 107, 163)",
                color: "rgb(255, 255, 255)",
                borderRadius: "24px",
                border: "none",
                fontSize: "12px",
                fontWeight: 500,
                lineHeight: "24px",
                letterSpacing: "0.96px",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              Explore all 35+ solutions
            </LangLink>
          </div>
        </div>
      </section>

      <div style={{ padding: "64px 0", backgroundColor: "rgb(8, 43, 69)" }}>
        <div className="inner-container" style={{ maxWidth: "1536px", margin: "0 auto", padding: "0 48px" }}>
          <div className="bottom-stats-grid">
            {bottomStats.map(item => (
              <div
                key={item.label}
                style={{
                  paddingLeft: "20px",
                  borderLeft: "2px solid rgba(0, 173, 240, 0.3)",
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    fontSize: "32px",
                    fontWeight: 300,
                    lineHeight: "40px",
                    color: "rgb(255, 255, 255)",
                    marginBottom: "4px",
                  }}
                >
                  {item.num}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    lineHeight: "24px",
                    color: "rgb(255, 255, 255)",
                    marginBottom: "8px",
                  }}
                >
                  {item.label}
                </div>
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: 400,
                    lineHeight: "16px",
                    color: "rgba(255, 255, 255, 0.7)",
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section
        style={{ padding: "80px 0", backgroundColor: "rgb(245, 245, 245)" }}
      >
        <div className="inner-container" style={{ maxWidth: "1536px", margin: "0 auto", padding: "0 48px" }}>
          <div
            ref={fadeTestimonial}
            className="fade-up"
            style={{ marginBottom: "48px", textAlign: "center" }}
          >
            <div
              className="u-label"
              style={{ marginBottom: "16px" }}
            >
              {t("clients_label", "Testimonials")}
            </div>
            <h3
              style={{
                fontSize: "40px",
                fontWeight: 400,
                lineHeight: "52px",
                letterSpacing: "0.005em",
                color: "rgb(13, 27, 42)",
              }}
            >
              {t("clients_say", "What our clients say about us")}
            </h3>
          </div>

          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <div
              className="testimonial-card"
              style={{
                padding: "48px 64px",
                backgroundColor: "rgb(255, 255, 255)",
                minHeight: "220px",
                position: "relative",
              }}
            >
              <p
                style={{
                  fontSize: "24px",
                  fontWeight: 300,
                  lineHeight: "36px",
                  letterSpacing: "-0.01em",
                  maxWidth: "600px",
                  color: "rgb(13, 27, 42)",
                  marginBottom: "32px",
                }}
              >
                “{activeTestimonial.quote}”
              </p>
              {activeTestimonial.name && (
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: "24px",
                    color: "rgb(13, 27, 42)",
                    marginBottom: "2px",
                  }}
                >
                  {activeTestimonial.name}
                </div>
              )}
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  lineHeight: "24px",
                  color: "rgb(13, 27, 42)",
                }}
              >
                {activeTestimonial.role}
              </div>
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  color: "rgb(58, 74, 88)",
                }}
              >
                {activeTestimonial.company}
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "24px",
                minHeight: "36px",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <button
                  onClick={() =>
                    setTestimonialIdx(
                      i => (i - 1 + testimonials.length) % testimonials.length
                    )
                  }
                  style={{
                    width: "36px",
                    height: "36px",
                    backgroundColor: "rgb(255, 255, 255)",
                    border: "1px solid rgb(221, 224, 230)",
                    borderRadius: "50%",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgb(58, 74, 88)",
                  }}
                  aria-label={t(
                    "home_prev_testimonial",
                    "Previous testimonial"
                  )}
                >
                  ‹
                </button>
                <button
                  onClick={() =>
                    setTestimonialIdx(i => (i + 1) % testimonials.length)
                  }
                  style={{
                    width: "36px",
                    height: "36px",
                    backgroundColor: "rgb(255, 255, 255)",
                    border: "1px solid rgb(221, 224, 230)",
                    borderRadius: "50%",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgb(58, 74, 88)",
                  }}
                  aria-label={t("home_next_testimonial", "Next testimonial")}
                >
                  ›
                </button>
              </div>
            </div>

            <div
              style={{
                marginTop: "12px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 500,
                  lineHeight: "24px",
                  color: "rgb(58, 74, 88)",
                }}
              >
                {testimonialIdx + 1} / {testimonials.length}
              </span>
            </div>
          </div>
        </div>
      </section>

      {lang === "en" && <section
        style={{ padding: "80px 0", backgroundColor: "rgb(255, 255, 255)" }}
      >
        <div className="inner-container" style={{ maxWidth: "1536px", margin: "0 auto", padding: "0 48px" }}>
          <div
            ref={fadeNewsroom}
            className="fade-up"
            style={{
              marginBottom: "48px",
              textAlign: "center",
            }}
          >
            <div
              className="u-label"
              style={{ marginBottom: "16px" }}
            >
              {t("news_label", "Newsroom")}
            </div>
            <h3
              style={{
                fontSize: "40px",
                fontWeight: 400,
                lineHeight: "52px",
                letterSpacing: "0.005em",
                color: "rgb(13, 27, 42)",
                marginBottom: "16px",
              }}
            >
              {t("news_heading", "Newsroom")}
            </h3>
          </div>

          <div
            className="newsroom-grid"
          >
            {newsItems.map(item => (
              <LangLink
                key={item.title}
                href="/company/newsroom"
                className="card-link card-fixed"
                style={{
                  width: "100%",
                  height: "274px",
                  padding: "32px",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div
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
                    {item.tag}
                  </div>
                  <h5
                    style={{
                      fontSize: "24px",
                      fontWeight: 500,
                      lineHeight: "32px",
                      color: "rgb(13, 27, 42)",
                      marginBottom: "8px",
                    }}
                  >
                    {item.title}
                  </h5>
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
                    {item.body}
                  </p>
                </div>
                <span className="btn-link" style={{ alignSelf: "flex-start" }}>
                  {t("read_more", "Read more")}
                </span>
              </LangLink>
            ))}
          </div>

          <div style={{ marginTop: "32px", textAlign: "center" }}>
            <LangLink href="/company/newsroom" className="btn-link">
              {t("news_visit", "Visit newsroom")}
            </LangLink>
          </div>
        </div>
      </section>}

      <div className="cta-band">
        <div className="inner-container" style={{ maxWidth: "1536px", margin: "0 auto", padding: "0 48px" }}>
          <div
            ref={fadeCTA}
            className="fade-up cta-grid"
          >
            <div>
              <div
                className="u-label"
                style={{ marginBottom: "16px" }}
              >
                {t("cta_label", "Get Started")}
              </div>
              <h3
                style={{
                  fontSize: "40px",
                  fontWeight: 400,
                  lineHeight: "52px",
                  letterSpacing: "0.005em",
                  color: "rgb(255, 255, 255)",
                  marginBottom: "20px",
                }}
              >
                {t(
                  "cta_h3",
                  "Explore how Euroland IR can support your investor communications."
                )}
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  letterSpacing: "0.01em",
                  color: "rgba(255, 255, 255, 0.7)",
                  maxWidth: "440px",
                  marginBottom: "32px",
                }}
              >
                {t(
                  "home_cta_subtitle",
                  "Trusted by 1,400+ listed companies across 60+ exchanges. Speak with our team to find the right solution for your IR programme."
                )}
              </p>
              <div
                style={{ display: "flex", gap: "12px", alignItems: "center" }}
              >
                <LangLink
                  href="/book-demo"
                  className="btn-primary"
                >
                  {t("cta_cta1", "Book a Demo")}
                </LangLink>
                <LangLink href="/contact" className="btn-secondary">
                  {t("cta_cta2", "Talk to Us")}
                </LangLink>
              </div>
            </div>

            <div
              className="cta-grid-image"
              style={{
                width: "100%",
                height: "286px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                borderRadius: "8px",
                border: "1px dashed rgba(255, 255, 255, 0.15)",
              }}
            >
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 500,
                  lineHeight: "24px",
                  color: "rgba(255, 255, 255, 0.35)",
                  letterSpacing: "0.96px",
                  textTransform: "uppercase",
                }}
              >
                {t("home_cta_preview_label", "Mobile app preview")}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: "64px 0", backgroundColor: "rgb(255, 255, 255)" }}>
        <div className="inner-container" style={{ maxWidth: "1536px", margin: "0 auto", padding: "0 48px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontSize: "12px",
                fontWeight: 500,
                lineHeight: "24px",
                letterSpacing: "0.96px",
                textTransform: "uppercase",
                color: "#28628F",
                marginBottom: "32px",
                textAlign: "center",
              }}
            >
              {t("home_member_label", "Proud member of")}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "48px",
                flexWrap: "wrap",
              }}
            >
              {MEMBER_LOGOS.map(logo => (
                <div
                  key={logo.alt}
                  style={{
                    height: "60px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    style={{
                      height: "48px",
                      width: "auto",
                      objectFit: "contain",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      <ToolModal modal={activeModal} onClose={() => setActiveModal(null)} />
    </PageWrapper>
  );
}
