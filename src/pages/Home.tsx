"use client";

/**
 * HOME PAGE — Euroland IR
 * Source: euroland-ir-best-practice-ir-solutions-purpose-built-ai-for--page-export.json
 * All measurements at 1920px viewport
 *
 * S1 Hero:        section [25] h:714 | container maxW:1536px pad:96px 48px
 *                 grid [28]: 688px 688px gap:64px
 * S2 Stats Bar:   div [41] h:150 pad:32px 0 | bg:rgb(26,63,92) | 4 cols 336px gap:32px
 * S3 Logo Strip:  div [56] h:154 pad:32px 0 | bg:rgb(245,245,245)
 * S4 Platform:    section [63] h:507 pad:64px 0 | grid 688px 688px gap:64px
 * S5 AI:          section [74] h:592 bg:rgb(8,43,69) | flex 50/50 | right pad:64px
 * S6 Solutions:   section [96] h:944 pad:64px 0 | cards 464px×264px pad:32px gap:32px
 * S7 Stats Strip: div [132] h:236 pad:64px 0 | bg:rgb(8,43,69) | 4 cols 336px gap:32px
 * S8 Testimonial: section [151] h:634 pad:64px 0 | bg:rgb(245,245,245) | card 760×324px
 * S9 Newsroom:    section [165] h:542 pad:64px 0 | bg:white | 3 cards on 4px grid
 * S10 CTA:        div [191] h:446 pad:96px 0 | grid 1fr/1fr gap:48px
 * S11 Member:     div [203] h:220 pad:64px 0 | bg:white
 */

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import LangLink from "@/components/LangLink";
import { ArrowRight } from "lucide-react";
import { PageWrapper } from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import ToolModal, { ModalData } from "@/components/ToolModal";
import { getEventHighlightImage, getHomepageEventHighlights } from "@/data/eventsHighlights";

type TFunction = (key: string, fallback?: string) => string;

function getTestimonials(t: TFunction) {
  return [
    {
      quote: t(
        "home_testimonial_5_quote",
        "I am very happy to recommend Euroland. The three most important criteria, quality, trustworthiness and price, were all at an excellent level, so it was quite easy for us to choose Euroland."
      ),
      name: t("home_testimonial_5_name", "Olli Turunen"),
      role: t("home_testimonial_5_role", "Head of Investor Relations"),
      company: t("home_testimonial_5_company", "Sanoma"),
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
  ];
}

function getSolutionCards(t: TFunction) {
  return [
    {
      num: "01",
      title: t("feat_ir_title", "IR Software Tools"),
      body: t(
        "feat_ir_desc",
        "Stock information, analytics, calculators, and more, all designed to support Investor Relations teams."
      ),
      link: "/platform/stock-data",
      label: t("learn_more", "Learn more"),
    },
    {
      num: "02",
      title: t("feat_ai_title", "AI Solutions"),
      body: t(
        "feat_ai_desc",
        "Generative AI-powered search for Investor Relations websites and IR apps, helping stakeholders find relevant information quickly and verify it at the source."
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
        "Investor Relations services, including website design, strategy, and more, supporting every aspect of your Investor Relations programme."
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
      eyebrow: t("home_modal_ir_label", "Tools"),
      title: t("feat_ir_title", "IR Software Tools"),
      subtitle: t(
        "feat_ir_desc",
        "Stock information, analytics, calculators, and more, all designed to support Investor Relations teams."
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
      animationImageSrcs: ["/overview-share-price-experian.png"],
    },
    "ai-solutions": {
      id: "ai-solutions",
      iconLabel: t("feat_ai_title", "AI Solutions"),
      eyebrow: t("home_modal_ai_label", "AI"),
      title: t("feat_ai_title", "AI Solutions"),
      subtitle: t(
        "feat_ai_desc",
        "Generative AI-powered search for Investor Relations websites and IR apps, helping stakeholders find relevant information quickly and verify it at the source."
      ),
      features: [
        t(
          "home_modal_ai_feature_1",
          "Generative AI-powered search for Investor Relations"
        ),
        t(
          "home_modal_ai_feature_2",
          "Search across earnings materials, financial statements, IR presentations, and public disclosures"
        ),
        t("home_modal_ai_feature_3", "Context-aware answers to stakeholder questions"),
        t("home_modal_ai_feature_4", "Links, document names, and PDF page references for verification"),
      ],
      impact: [
        t("home_modal_ai_impact_1", "Help investors find verified IR information faster"),
        t("home_modal_ai_impact_2", "Reduce repetitive information requests for IR teams"),
        t("home_modal_ai_impact_3", "Create a more intuitive IR website and app experience"),
      ],
      benefits: [
        t("home_modal_ai_impact_1", "Help investors find verified IR information faster"),
        t("home_modal_ai_impact_2", "Reduce repetitive information requests for IR teams"),
        t("home_modal_ai_impact_3", "Create a more intuitive IR website and app experience"),
      ],
      learnMoreHref: "/ai",
      animationVideoSrc: "/ai-popup.mp4",
    },
    "ir-apps": {
      id: "ir-apps",
      iconLabel: t("feat_apps_title", "IR Apps"),
      eyebrow: t("home_modal_apps_label", "Apps"),
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
      animationImageSrcs: [
        "/myirapp/myirapp-1.png",
        "/myirapp/myirapp-2.png",
        "/myirapp/myirapp-3.png",
        "/myirapp/myirapp-4.png",
      ],
    },
    "ir-services": {
      id: "ir-services",
      iconLabel: t("feat_services_title", "IR Services"),
      eyebrow: t("home_modal_services_label", "Services"),
      title: t("feat_services_title", "IR Services"),
      subtitle: t(
        "feat_services_desc",
        "Investor Relations services, including website design, strategy, and more, supporting every aspect of your Investor Relations programme."
      ),
      features: [
        t("home_modal_services_feature_1", "IR platform design and development"),
        t(
          "home_modal_services_feature_2",
          "Investor Relations strategy consulting"
        ),
        t(
          "home_modal_services_feature_3",
          "Annual report design and production"
        ),
        t("home_modal_services_feature_4", "Roadshow preparation and support"),
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
      animationVideoSrc: "/ir-calendar-demo.mp4",
    },
    "esg-solutions": {
      id: "esg-solutions",
      iconLabel: t("feat_esg_title", "ESG Solutions"),
      eyebrow: t("home_modal_esg_label", "ESG"),
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
      animationVideoSrc: "/esg-popup.mp4",
    },
  };
}

function getNewsItems() {
  return getHomepageEventHighlights(3).map((item) => ({
    tag: item.tag,
    title: item.title,
    body: item.desc,
    href: `/events-highlights/${item.slug}`,
    image: getEventHighlightImage(item),
  }));
}


function getTopStats(t: TFunction) {
  return [
    {
      num: t("stat_clients_num", "1,400+"),
      label: t("stat_clients_label", "Companies"),
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
      num: t("stat_years_num", "25+"),
      label: t("stat_years_label", "Years of experience"),
    },
  ];
}

function getBottomStats(t: TFunction) {
  return [
    {
      num: t("stat_clients_num", "1,400+"),
      label: t("stat_clients_label", "Companies"),
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
        "We support listed companies across major global exchanges with Best Practice IR platforms and tools."
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
        "We use robust security protocols and resilient infrastructure to protect corporate systems and data."
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

const MOBILE_CLIENT_LOGOS = [
  { src: "/client-logo-assa-abloy.svg", alt: "Assa Abloy" },
  { src: "/client-logo-hydro.svg", alt: "Hydro" },
  { src: "/client-logo-hyundai.svg", alt: "Hyundai Motor Company" },
  { src: "/client-logo-nordea.svg", alt: "Nordea" },
  { src: "/client-logo-renault.svg", alt: "Renault" },
  { src: "/client-logo-samsung-black.svg", alt: "Samsung" },
  { src: "/client-logo-shell.svg", alt: "Shell" },
  { src: "/client-logo-standard-chartered.svg", alt: "Standard Chartered" },
  { src: "/client-logo-volkswagen.svg", alt: "Volkswagen Group" },
] as const;

/** Parse a stat string like "1,400+", "60+", "24/7", "25+" into { value, suffix } */
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
  const [display, setDisplay] = useState(raw);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!active || value === -1) {
      setDisplay(raw);
      return;
    }
    setDisplay(`0${suffix}`);
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
function AnimatedStatNum({ raw, style, className, static: isStatic }: { raw: string; style?: React.CSSProperties; className?: string; static?: boolean }) {
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

  return <div ref={ref} className={className} style={style}>{isStatic ? raw : display}</div>;
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
      className="hero-cycler-text"
      style={{
        color: "#00ADF0",
        transition: "opacity 300ms ease",
        opacity: visible ? 1 : 0.32,
        display: "inline-block",
        minHeight: "1.15em",
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
  const [memberLogoIdx, setMemberLogoIdx] = useState(0);
  const [mobileClientLogoIdx, setMobileClientLogoIdx] = useState(0);
  const [incomingMobileClientLogoIdx, setIncomingMobileClientLogoIdx] = useState<number | null>(null);
  const [mobileClientLogoPhase, setMobileClientLogoPhase] = useState<"steady" | "transitioning">("steady");

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
  const newsItems = getNewsItems();
  const topStats = getTopStats(t);
  const bottomStats = getBottomStats(t);
  const activeTestimonial = testimonials[testimonialIdx];
  const activeMemberLogo = MEMBER_LOGOS[memberLogoIdx % MEMBER_LOGOS.length];
  const activeMobileClientLogos = [
    MOBILE_CLIENT_LOGOS[mobileClientLogoIdx % MOBILE_CLIENT_LOGOS.length],
    MOBILE_CLIENT_LOGOS[(mobileClientLogoIdx + 1) % MOBILE_CLIENT_LOGOS.length],
  ];
  const incomingMobileClientLogos =
    incomingMobileClientLogoIdx === null
      ? []
      : [
          MOBILE_CLIENT_LOGOS[incomingMobileClientLogoIdx % MOBILE_CLIENT_LOGOS.length],
          MOBILE_CLIENT_LOGOS[(incomingMobileClientLogoIdx + 1) % MOBILE_CLIENT_LOGOS.length],
        ];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setMemberLogoIdx((index) => (index + 1) % MEMBER_LOGOS.length);
    }, 2500);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    let transitionStartTimeout: number | undefined;
    let transitionEndTimeout: number | undefined;

    const interval = window.setInterval(() => {
      const nextIdx = (mobileClientLogoIdx + 2) % MOBILE_CLIENT_LOGOS.length;
      setIncomingMobileClientLogoIdx(nextIdx);
      transitionStartTimeout = window.setTimeout(() => {
        setMobileClientLogoPhase("transitioning");
      }, 40);
      transitionEndTimeout = window.setTimeout(() => {
        setMobileClientLogoIdx(nextIdx);
        setIncomingMobileClientLogoIdx(null);
        setMobileClientLogoPhase("steady");
      }, 760);
    }, 5200);

    return () => {
      window.clearInterval(interval);
      if (transitionStartTimeout) window.clearTimeout(transitionStartTimeout);
      if (transitionEndTimeout) window.clearTimeout(transitionEndTimeout);
    };
  }, [mobileClientLogoIdx]);

  return (
    <PageWrapper>
      <section
        className="hero-section-mobile"
        style={{
          background: "var(--navy-dark)",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          paddingTop: 0,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/hero-bg_c3bbfd60.jpg')",
            backgroundSize: "cover",
            backgroundPosition: lang === "ar" ? "center left" : "center right",
            backgroundRepeat: "no-repeat",
            transform: lang === "ar" ? "scaleX(-1)" : "none",
            transformOrigin: "center center",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(8,43,69,0.90) 0%, rgba(8,43,69,0.72) 50%, rgba(8,43,69,0.37) 100%)",
            pointerEvents: "none",
          }}
        />
        <div
          className="container"
          style={{ paddingTop: "96px", paddingBottom: "96px" }}
        >
          <div className="grid-2col" style={{ gap: "var(--sp-16)", gridTemplateColumns: "1fr" }}>
            <div ref={fadeHero} className="fade-up hero-text-col">
              <div
                className="u-label u-label-dark"
                style={{ marginBottom: "var(--sp-6)" }}
              >
                  {t("home_hero_label", "Best Practice IR")}
              </div>
              <h1
                className="type-hero"
                style={{
                  color: "white",
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
        "Best Practice IR solutions and purpose built AI for IR teams. Trusted by more than 1,400 publicly listed companies across 60+ stock exchanges worldwide."
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
                <LangLink href="/solutions" className="btn-secondary">
                  {t("home_hero_cta2", "Talk to Us")}
                </LangLink>
              </div>
            </div>
            <div className="hero-image-col" style={{ position: "relative", display: "none" }}>
              <div
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "12px",
                  overflow: "hidden",
                  minHeight: "260px",
                  boxShadow: "0 16px 56px rgba(0,0,0,0.22)",
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
                <div style={{ color: "var(--label-blue-dark)", fontSize: "var(--fs-sm)", fontWeight: 400, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "16px" }}>
                  {t("home_hero_proof_label", "What you will see")}
                </div>
                <p style={{ color: "rgba(255,255,255,0.84)", margin: 0, fontSize: "var(--fs-base)", lineHeight: "var(--lh-base)" }}>
                  {t("home_hero_proof_body", "Investor website modules, market data, disclosure workflows, and purpose built AI in one managed IR platform.")}
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
              <div key={item.label} className="stat-block" style={{ color: "rgb(255, 255, 255)" }}>
                <div
                  className="stat-number"
                  style={{
                    fontSize:
                      lang === "ja" && item.num.length > 6
                        ? "24px"
                        : "var(--fs-2xl)",
                    fontWeight: 300,
                    lineHeight: "var(--lh-2xl)",
                    whiteSpace:
                      lang === "ja" && item.num.length > 6 ? "nowrap" : undefined,
                    color: "rgb(255, 255, 255)",
                    margin: 0,
                    padding: 0,
                  }}
                >
                  {item.num}
                </div>
                <div
                  className="stat-label"
                  style={{
                    fontSize: "var(--fs-base)",
                    fontWeight: 500,
                    lineHeight: "20px",
                    color: "rgb(255, 255, 255)",
                    margin: 0,
                    padding: 0,
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
                height: "36px",
                width: "auto",
                display: "block",
                maxWidth: "100%",
              }}
            />
          </div>
        ) : (
          <div className="home-client-carousel-shell" style={{ width: "100%", position: "relative" }}>
            <div className="home-client-carousel-mobile" style={{ display: "none" }}>
              <div
                className="home-client-carousel-mobile-viewport"
                style={{
                  width: "264px",
                  minWidth: "264px",
                  maxWidth: "264px",
                  height: "72px",
                  margin: "0 auto",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {incomingMobileClientLogos.length > 0 ? (
                  <div
                    className="home-client-carousel-mobile-slider"
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "grid",
                      gridTemplateColumns: "264px 264px",
                      width: "528px",
                      alignItems: "stretch",
                      transition: "transform 760ms cubic-bezier(0.22, 1, 0.36, 1)",
                      willChange: "transform, opacity",
                      transform:
                        mobileClientLogoPhase === "transitioning"
                          ? "translateX(-264px)"
                          : "translateX(0)",
                    }}
                  >
                    {[activeMobileClientLogos, incomingMobileClientLogos].map((logoPair, pairIndex) => (
                      <div
                        key={`pair-${pairIndex}`}
                        style={{
                          width: "264px",
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                          gap: "20px",
                          alignItems: "center",
                        }}
                      >
                        {logoPair.map((logo) => (
                          <div
                            key={`${pairIndex}-${logo.src}`}
                            className="home-client-logo-slot"
                            style={{
                              height: "72px",
                              width: "100%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              padding: "0 6px",
                              boxSizing: "border-box",
                            }}
                          >
                            <img
                              src={logo.src}
                              alt={logo.alt}
                              className="home-client-logo-mark"
                              style={{
                                maxWidth: "96px",
                                width: "96px",
                                height: "28px",
                                maxHeight: "28px",
                                objectFit: "contain",
                                display: "block",
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div
                    className="home-client-carousel-mobile-track"
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "20px",
                      alignItems: "center",
                    }}
                  >
                    {activeMobileClientLogos.map((logo) => (
                      <div
                        key={`active-${logo.src}`}
                        className="home-client-logo-slot"
                        style={{
                          height: "72px",
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "0 6px",
                          boxSizing: "border-box",
                        }}
                      >
                        <img
                          src={logo.src}
                          alt={logo.alt}
                          className="home-client-logo-mark"
                          style={{
                            maxWidth: "96px",
                            width: "96px",
                            height: "28px",
                            maxHeight: "28px",
                            objectFit: "contain",
                            display: "block",
                          }}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="home-client-carousel-tablet" style={{ display: "none" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                  gap: "24px 32px",
                  alignItems: "center",
                  justifyItems: "center",
                  width: "100%",
                  maxWidth: "760px",
                  margin: "0 auto",
                }}
              >
                {MOBILE_CLIENT_LOGOS.map((logo) => (
                  <div
                    key={`tablet-${logo.src}`}
                    style={{
                      width: "100%",
                      minHeight: "56px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      style={{
                        width: "148px",
                        maxWidth: "148px",
                        height: "40px",
                        maxHeight: "40px",
                        objectFit: "contain",
                        display: "block",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div
              className="home-client-carousel-desktop home-client-carousel-track"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 0,
                width: "max-content",
                willChange: "transform",
                animation: "marquee 60s linear infinite",
              }}
            >
              {[1, 2, 3].map((copy) => (
                <img
                  key={copy}
                  src={
                    lang === "ar"
                      ? "/client-logos-ar.svg"
                      : lang === "zh" || lang === "zh-TW"
                      ? "/client-logos-zh.svg"
                      : "/client-logos.svg"
                  }
                  alt="Euroland IR clients"
                  aria-hidden={copy > 1}
                  style={{
                    height: "48px",
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

      <section style={{ padding: "64px 0" }}>
        <div
          ref={fadePlatform}
          className="fade-up inner-container"
          style={{ maxWidth: "1536px", margin: "0 auto", padding: "0 48px" }}
        >
          <div className="grid-2col" style={{ alignItems: "center" }}>
            <div className="home-equity-visual" style={{ width: "100%", borderRadius: "8px", overflow: "hidden", aspectRatio: "16/9" }}>
              <img
                src="/tell-your-equity-story.png"
                className="home-equity-visual-image"
                alt={t(
                  "home_platform_image_alt",
                  "Award-winning IR platform showcase"
                )}
                style={{
                  width: "115%",
                  height: "115%",
                  objectFit: "cover",
                  objectPosition: "center",
                  display: "block",
                }}
              />
            </div>

            <div>
            <div className="u-label" style={{ marginBottom: "16px", textAlign: "left", fontSize: "var(--fs-sm)", fontWeight: 400 }}>
              {t("equity_label", "Our Platform")}
            </div>
              <h3
                style={{
                  fontSize: "var(--fs-2xl)",
                  fontWeight: 400,
                  lineHeight: "var(--lh-2xl)",
                  letterSpacing: "0.005em",
                  color: "rgb(13, 27, 42)",
                  marginBottom: "32px",
                }}
              >
                {t("equity_h3", "Tell Your Equity Story")}
              </h3>
              <p
                style={{
                  fontSize: "var(--fs-base)",
                  fontWeight: 400,
                  lineHeight: "var(--lh-base)",
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
                  fontSize: "var(--fs-base)",
                  fontWeight: 400,
                  lineHeight: "var(--lh-base)",
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
              <LangLink href="/solutions" className="btn-outline">
                {t("equity_cta", "Explore Solutions")}
              </LangLink>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          backgroundColor: "rgb(8, 43, 69)",
          minHeight: "480px",
          padding: "64px 0",
        }}
      >
        <div
          className="inner-container ai-section-flex"
          style={{
            maxWidth: "1536px",
            margin: "0 auto",
            padding: "0 48px",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "64px",
            flexDirection: "row-reverse",
          }}
        >
          <div
            style={{
              flex: "0 1 760px",
              width: "100%",
              maxWidth: "760px",
              minWidth: 0,
              minHeight: "480px",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              boxSizing: "border-box",
            }}
          >
            <div
              className="home-ai-video-frame"
              style={{
                width: "100%",
                maxWidth: "760px",
                aspectRatio: "973 / 547",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 16px 40px rgba(0,0,0,0.22)",
                backgroundColor: "rgba(255,255,255,0.04)",
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
          </div>

          <div
            ref={fadeAI}
            className="fade-up"
            style={{
              flex: "0 1 600px",
              maxWidth: lang === "ar" ? "640px" : "600px",
              minWidth: 0,
              marginLeft: 0,
              paddingRight: lang === "ar" ? "16px" : 0,
              paddingLeft: 0,
              backgroundColor: "rgb(8, 43, 69)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: lang === "ar" ? "right" : "left",
              width: "100%",
            }}
          >
          <span
            className="u-label u-label-dark"
            style={{
              marginBottom: "16px",
              display: "inline-block",
              alignSelf: lang === "ar" ? "flex-end" : "flex-start",
            }}
          >
            {t("home_ai_label", "AI Solutions")}
          </span>
          <h3
            style={{
              fontSize: lang === "ar" ? "32px" : "40px",
              fontWeight: 400,
              lineHeight: lang === "ar" ? "var(--lh-xl)" : "var(--lh-2xl)",
              letterSpacing: "0.005em",
              color: "rgb(255, 255, 255)",
              marginBottom: "16px",
              maxWidth: lang === "ar" ? "620px" : "none",
              alignSelf: lang === "ar" ? "flex-end" : "auto",
              textAlign: lang === "ar" ? "right" : "left",
            }}
          >
            {t("home_ai_title", "Purpose built AI for Investor Relations")}
          </h3>
          <p
            style={{
              fontSize: "var(--fs-base)",
              fontWeight: 400,
              lineHeight: "var(--lh-base)",
              letterSpacing: "0.01em",
              color: "rgba(255, 255, 255, 0.72)",
              marginBottom: "32px",
              maxWidth: lang === "ar" ? "620px" : "none",
              alignSelf: lang === "ar" ? "flex-end" : "auto",
              textAlign: lang === "ar" ? "right" : "left",
            }}
          >
            {t(
              "home_ai_subtitle",
              "A generative AI-powered search experience that helps shareholders and stakeholders find accurate, relevant, and verifiable information across your Investor Relations content."
            )}
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: lang === "ar" ? "20px" : "24px",
              marginBottom: "32px",
              maxWidth: lang === "ar" ? "620px" : "none",
              alignSelf: lang === "ar" ? "flex-end" : "auto",
              width: "100%",
            }}
          >
            {[
              {
                title: t("home_ai_feature_1_title", "AI-Powered IR Search"),
                body: t(
                  "home_ai_feature_1_body",
                  "Let investors search across earnings materials, financial statements, IR presentations, and public disclosures from your website or IR app."
                ),
              },
              {
                title: t("home_ai_feature_2_title", "Verified Source References"),
                body: t(
                  "home_ai_feature_2_body",
                  "Provide context-aware answers with links, document names, and PDF page references so users can verify information quickly."
                ),
              },
              {
                title: t("home_ai_feature_3_title", "Website and App Integration"),
                body: t(
                  "home_ai_feature_3_body",
                  "Integrate AI-powered IR search directly into the corporate website and IR mobile app."
                ),
              },
            ].map(item => (
              <div
                key={item.title}
                style={{
                  display: "flex",
                  gap: lang === "ar" ? "16px" : "12px",
                  alignItems: "flex-start",
                  flexDirection: lang === "ar" ? "row-reverse" : "row",
                  width: "100%",
                  justifyContent: lang === "ar" ? "flex-end" : "flex-start",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "rgb(0, 173, 240)",
                    flexShrink: 0,
                    marginTop: "12px",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: lang === "ar" ? "flex-end" : "flex-start",
                    width: "100%",
                    textAlign: lang === "ar" ? "right" : "left",
                  }}
                >
                  <h6
                    style={{
                      fontSize: "var(--fs-md)",
                      fontWeight: 500,
                      lineHeight: "var(--lh-md)",
                      letterSpacing: "0.01em",
                      color: "rgb(255, 255, 255)",
                      marginBottom: "8px",
                      width: "100%",
                      textAlign: lang === "ar" ? "right" : "left",
                    }}
                  >
                    {item.title}
                  </h6>
                  <p
                    style={{
                      fontSize: "var(--fs-base)",
                      fontWeight: 400,
                      lineHeight: "var(--lh-base)",
                      letterSpacing: "0.01em",
                      color: "rgba(255, 255, 255, 0.72)",
                      width: "100%",
                      textAlign: lang === "ar" ? "right" : "left",
                      margin: 0,
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
            <div
              style={{
                display: "flex",
                justifyContent: lang === "ar" ? "flex-end" : "flex-start",
              }}
            >
              <LangLink href="/ai" className="btn-secondary">
                {t("home_ai_cta", "Explore AI Solutions")}
              </LangLink>
            </div>
          </div>
        </div>
      </section>
      <section style={{ padding: "64px 0" }}>
        <div className="inner-container" style={{ maxWidth: "1536px", margin: "0 auto", padding: "0 48px" }}>
          <div
            ref={fadeSolutions}
            className="fade-up section-heading-center"
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
                fontSize: "var(--fs-2xl)",
                fontWeight: 400,
                lineHeight: "var(--lh-2xl)",
                letterSpacing: "0.005em",
                color: "rgb(13, 27, 42)",
                marginBottom: "16px",
              }}
            >
              {t("home_solutions_title", "Best Practice IR Solutions")}
            </h3>
            <p
              style={{
                fontSize: "var(--fs-base)",
                fontWeight: 400,
                lineHeight: "var(--lh-base)",
                letterSpacing: "0.01em",
                color: "rgb(58, 74, 88)",
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              {t(
                "home_solutions_subtitle",
                "Strengthen your Investor Relations presence with IR tools and solutions that combine data, AI, and clear digital communication."
              )}
            </p>
          </div>

          <div
            className="solutions-grid"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "24px",
            }}
          >
            {solutionCards.map(card => {return (
              <div
                key={card.num}
                className="card-fixed"
                onClick={() =>
                  setActiveModal(homeModals[SOLUTION_MODAL_IDS[card.num]])
                }
                style={{
                  width: "calc((100% - 48px) / 3)",
                  minWidth: "280px",
                  maxWidth: "464px",
                  height: "264px",
                  padding: "32px",
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
                  e.currentTarget.style.borderColor = "rgb(0, 116, 217)";
                  e.currentTarget.style.backgroundColor = "rgb(245, 250, 255)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                  const cta = e.currentTarget.querySelector(".card-cta") as HTMLElement;
                  if (cta) { cta.style.color = "rgb(0, 116, 217)"; cta.style.gap = "8px"; }
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
                      fontSize: "var(--fs-lg)",
                      fontWeight: 500,
                      lineHeight: "var(--lh-lg)",
                      color: "rgb(13, 27, 42)",
                      marginBottom: "16px",
                    }}
                  >
                    {card.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "var(--fs-base)",
                      fontWeight: 400,
                      lineHeight: "var(--lh-base)",
                      letterSpacing: 0,
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
                    fontSize: "var(--fs-sm)",
                    fontWeight: 400,
                    lineHeight: "var(--lh-base)",
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
          </div>

          <div style={{ marginTop: "48px", textAlign: "center" }}>
            <LangLink href="/platform" className="btn-outline">
              Explore Solutions
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
                className="bottom-stat-block"
                style={{
                  paddingLeft: "20px",
                  borderLeft: "2px solid rgba(0, 173, 240, 0.3)",
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    fontSize: "var(--fs-2xl)",
                    fontWeight: 300,
                    lineHeight: "var(--lh-2xl)",
                    color: "rgb(255, 255, 255)",
                  }}
                >
                  {item.num}
                </div>
                <div
                  style={{
                    fontSize: "var(--fs-base)",
                    fontWeight: 700,
                    lineHeight: "var(--lh-base)",
                    color: "rgb(255, 255, 255)",
                    display: "flex",
                    alignItems: "flex-start",
                  }}
                >
                  {item.label}
                </div>
                <p
                  style={{
                    fontSize: "var(--fs-base)",
                    fontWeight: 400,
                    lineHeight: "var(--lh-base)",
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
        style={{ padding: "64px 0", backgroundColor: "rgb(245, 245, 245)" }}
      >
        <div className="inner-container" style={{ maxWidth: "1536px", margin: "0 auto", padding: "0 48px" }}>
          <div
            ref={fadeTestimonial}
            className="fade-up section-heading-center"
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
                fontSize: "var(--fs-2xl)",
                fontWeight: 400,
                lineHeight: "var(--lh-2xl)",
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
                  fontSize: "var(--fs-lg)",
                  fontWeight: 300,
                  lineHeight: "var(--lh-xl)",
                  letterSpacing: "-0.01em",
                  maxWidth: "600px",
                  color: "rgb(13, 27, 42)",
                  marginBottom: "32px",
                }}
              >
                "{activeTestimonial.quote}"
              </p>
              {activeTestimonial.name && (
                <div
                  style={{
                    fontSize: "var(--fs-base)",
                    fontWeight: 700,
                    lineHeight: "var(--lh-base)",
                    color: "rgb(13, 27, 42)",
                    marginBottom: "16px",
                  }}
                >
                  {activeTestimonial.name}
                </div>
              )}
              <div
                style={{
                  fontSize: "var(--fs-sm)",
                  fontWeight: 600,
                  lineHeight: "var(--lh-base)",
                  color: "rgb(13, 27, 42)",
                }}
              >
                {activeTestimonial.role}
              </div>
              <div
                style={{
                  fontSize: "var(--fs-sm)",
                  fontWeight: 400,
                  lineHeight: "var(--lh-base)",
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
                marginTop: "32px",
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
                marginTop: "16px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontSize: "var(--fs-sm)",
                  fontWeight: 500,
                  lineHeight: "var(--lh-base)",
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
        style={{ padding: "64px 0", backgroundColor: "rgb(255, 255, 255)" }}
      >
        <div className="inner-container" style={{ maxWidth: "1536px", margin: "0 auto", padding: "0 48px" }}>
          <div
            ref={fadeNewsroom}
            className="fade-up section-heading-center"
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
                fontSize: "var(--fs-2xl)",
                fontWeight: 400,
                lineHeight: "var(--lh-2xl)",
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
                href={item.href}
                className="card-link card-fixed"
                style={{
                  width: "100%",
                  minHeight: "360px",
                  padding: 0,
                  justifyContent: "space-between",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "148px",
                    backgroundColor: "rgb(8, 43, 69)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                  ) : (
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        background: "linear-gradient(135deg, rgba(0,107,163,0.28) 0%, rgba(8,43,69,0.88) 100%)",
                      }}
                    />
                  )}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(8,43,69,0.35), rgba(8,43,69,0.05))",
                    }}
                  />
                </div>
                <div style={{ padding: "16px 16px 0" }}>
                  <div
                    style={{
                      fontSize: "var(--fs-sm)",
                      fontWeight: 400,
                      lineHeight: "var(--lh-base)",
                      letterSpacing: "0.96px",
                      textTransform: "uppercase",
                      color: "#0074D9",
                      marginBottom: "16px",
                    }}
                  >
                    {item.tag}
                  </div>
                  <h5
                    style={{
                      fontSize: "var(--fs-md)",
                      fontWeight: 500,
                      lineHeight: "var(--lh-lg)",
                      color: "rgb(13, 27, 42)",
                      marginBottom: "16px",
                    }}
                  >
                    {item.title}
                  </h5>
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
                    {item.body}
                  </p>
                </div>
                <span className="btn-link" style={{ alignSelf: "flex-start", margin: "16px 24px 32px" }}>
                  {t("read_more", "Read more")}
                </span>
              </LangLink>
            ))}
          </div>

          <div style={{ marginTop: "32px", textAlign: "center" }}>
            <LangLink
              href="/company/newsroom"
              className="btn-link"
              style={{ fontSize: "var(--fs-sm)" }}
            >
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
            <div className="cta-grid-copy">
              <div
                className="u-label"
                style={{ marginBottom: "16px" }}
              >
                {t("cta_label", "Get Started")}
              </div>
              <h3
                style={{
                  fontSize: "var(--fs-2xl)",
                  fontWeight: 400,
                  lineHeight: "var(--lh-2xl)",
                  letterSpacing: "0.005em",
                  color: "rgb(255, 255, 255)",
                  marginBottom: "16px",
                }}
              >
                {t(
                  "cta_h3",
                  "Explore how Euroland IR can support your investor communications."
                )}
              </h3>
              <p
                style={{
                  fontSize: "var(--fs-base)",
                  fontWeight: 400,
                  lineHeight: "var(--lh-base)",
                  letterSpacing: "0.01em",
                  color: "rgba(255, 255, 255, 0.7)",
                  maxWidth: "440px",
                  marginBottom: "32px",
                }}
              >
                {t(
                  "home_cta_subtitle",
                  "Trusted by 1,400+ listed companies across 60+ exchanges. Speak with our team to find the right solution for your Investor Relations needs."
                )}
              </p>
              <div
                className="cta-grid-actions"
                style={{ display: "flex", gap: "12px", alignItems: "center" }}
              >
                <LangLink
                  href="/book-demo"
                  className="btn-primary"
                >
                  {t("cta_cta1", "Book a Demo")}
                </LangLink>
                <LangLink href="/platform" className="btn-secondary">
                  {t("cta_cta2", "Explore our tools")}
                </LangLink>
              </div>
            </div>
            <div
              className="cta-grid-image"
              style={{
                width: "100%",
                height: "288px",
                position: "relative",
                borderRadius: "8px",
                overflow: "hidden",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                boxShadow: "0 16px 40px rgba(0,0,0,0.18)",
                background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="/banner-purpose-built-ai.jpg"
                alt="AI solutions preview"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(135deg, rgba(8,43,69,0.42) 0%, rgba(8,43,69,0.24) 45%, rgba(8,43,69,0.48) 100%)",
                  pointerEvents: "none",
                }}
              />
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
                fontSize: "var(--fs-sm)",
                fontWeight: 400,
                lineHeight: "var(--lh-base)",
                letterSpacing: "0.96px",
                textTransform: "uppercase",
                color: "var(--button-blue)",
                marginBottom: "32px",
                textAlign: "center",
              }}
            >
              {t("home_member_label", "Proud member of")}
            </div>
            <div
              className="home-member-logos-desktop"
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
            <div className="home-member-logos-mobile" style={{ display: "none", width: "100%", justifyContent: "center" }}>
              <div
                style={{
                  width: "100%",
                  maxWidth: "280px",
                  height: "112px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "16px",
                  boxSizing: "border-box",
                }}
              >
                <img
                  src={activeMemberLogo.src}
                  alt={activeMemberLogo.alt}
                  style={{
                    height: "64px",
                    width: "auto",
                    maxWidth: "100%",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </div>
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
            transform: translateX(-33.333333%);
          }
        }
        @media (max-width: 767px) {
          .home-client-carousel-shell {
            width: 264px !important;
            min-width: 264px !important;
            max-width: 264px !important;
            margin: 0 auto !important;
          }
          .hero-cycler-text {
            width: 12ch;
            min-width: 12ch;
            min-height: 1.2em;
          }
          .home-client-carousel-mobile {
            display: block !important;
            width: 264px !important;
            min-width: 264px !important;
            max-width: 264px !important;
            margin: 0 auto !important;
            overflow: hidden !important;
          }
          .home-client-logo-slot {
            justify-self: center;
          }
          .home-client-logo-mark {
            width: 96px !important;
            max-width: 96px !important;
            height: 28px !important;
            max-height: 28px !important;
          }
          .home-client-carousel-desktop {
            display: none !important;
          }
          .home-member-logos-desktop {
            display: none !important;
          }
          .home-member-logos-mobile {
            display: flex !important;
          }
        }
        @media (min-width: 768px) and (max-width: 1279px) {
          .home-client-carousel-tablet {
            display: block !important;
          }
          .home-client-carousel-mobile {
            display: none !important;
          }
          .home-client-carousel-desktop {
            display: none !important;
          }
        }
      `}</style>

      <ToolModal modal={activeModal} onClose={() => setActiveModal(null)} />
    </PageWrapper>
  );
}


