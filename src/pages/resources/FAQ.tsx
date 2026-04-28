"use client";
import React from "react";
import LangLink from "@/components/LangLink";

/**
 * FAQ PAGE — Euroland IR
 * Source: euroland-ir-...-max-export(8).json
 * URL:    /resources/faq
 * Viewport: 2004px → container 1536px → inner 1440px
 *
 * Layout:
 *  - Hero section: dark navy, 480px tall (y:0–480)
 *    - eyebrow "RESOURCES" (u-label-dark), H2 title (48px/300), subtitle (16px/400)
 *  - Search bar row: white bg, 70px tall (y:480–550), centered 860px wide
 *  - Category filter tabs: white bg, 57px tall (y:550–607), 9 tabs
 *  - FAQ accordion section: white bg (y:607–3377), 860px wide centered
 *    - 8 category groups, each with a section header + question rows
 *  - CTA band: dark navy, 300px tall (y:3377–3677)
 */
import { PageWrapper } from "@/components/Layout";
import BannerHero from "@/components/layout/BannerHero";
import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// ── DATA ─────────────────────────────────────────────────────────────────────

interface FAQItem {
  q: string;
  a: string;
}

interface FAQCategory {
  id: string;
  label: string;
  items: FAQItem[];
}

const FAQ_CATEGORIES: FAQCategory[] = [
  {
    id: "getting-started",
    label: "Getting Started",
    items: [
      {
        q: "What is Euroland IR and who is it for?",
        a: "Euroland IR is a comprehensive investor relations platform built for publicly listed companies. It provides everything from IR platforms and real-time stock data to earnings management, investor communications, and AI-powered analytics. It is designed for IR professionals, CFOs, and company secretaries at listed companies of all sizes.",
      },
      {
        q: "How quickly can we get started?",
        a: "Most clients are live within a few days for standard setups. More complex implementations with custom integrations or data migrations typically take 2–4 weeks. Our onboarding team will guide you through every step.",
      },
      {
        q: "Do we need technical expertise to use the platform?",
        a: "No. The platform is designed to be used by IR professionals without any technical background. All tools are accessible through an intuitive interface, and our support team is available to assist with any technical questions.",
      },
      {
        q: "What IR tools are included in the platform?",
        a: "The platform includes an IR platform builder, real-time stock and financial data, earnings management tools, investor communications, ESG/CSRD reporting, AI-powered analytics, a disclosure management module, and a mobile app for investors.",
      },
    ],
  },
  {
    id: "platform-tools",
    label: "Platform & Tools",
    items: [
      {
        q: "Can the tools be embedded in our existing IR platform?",
        a: "Yes. All Euroland IR tools can be embedded into your existing IR platform using our widget library. This allows you to add real-time stock charts, financial data tables, earnings calendars, and more without rebuilding your site.",
      },
      {
        q: "Does the platform support multiple languages?",
        a: "Yes. The platform supports 10 languages: English, German, French, Spanish, Italian, Swedish, Norwegian, Danish, Chinese (Simplified), and Japanese. Content can be managed separately for each language.",
      },
      {
        q: "Is there a mobile app for investors?",
        a: "Yes. Euroland IR provides a branded mobile app for investors, available on iOS and Android. The app gives investors access to real-time stock data, financial reports, press releases, and direct contact with your IR team.",
      },
      {
        q: "How is data kept up to date?",
        a: "Stock prices and financial data are updated in real time from major exchanges. Corporate documents and press releases are published instantly when submitted through the platform. ESG and governance data is updated on a schedule you control.",
      },
      {
        q: "How is Euroland IR priced?",
        a: "Pricing is based on the modules you use and the size of your company. We offer flexible plans for small-cap, mid-cap, and large-cap companies. Contact our team for a personalised quote.",
      },
    ],
  },
  {
    id: "pricing-plans",
    label: "Pricing & Plans",
    items: [
      {
        q: "Are there setup or implementation fees?",
        a: "Standard setups are included in your subscription. For complex custom implementations — such as bespoke data integrations or white-label configurations — a one-time implementation fee may apply. This will be discussed and agreed before any work begins.",
      },
      {
        q: "What contract lengths are available?",
        a: "We offer annual and multi-year contracts. Multi-year contracts include preferential pricing. Monthly contracts are available for pilot programmes.",
      },
      {
        q: "Where is my data stored?",
        a: "All data is stored on servers located within the European Union, in compliance with GDPR. We use ISO 27001-certified data centres with redundant infrastructure and daily backups.",
      },
    ],
  },
  {
    id: "data-security",
    label: "Data & Security",
    items: [
      {
        q: "Is the platform GDPR compliant?",
        a: "Yes. Euroland IR is fully GDPR compliant. We act as a data processor on behalf of our clients and have a Data Processing Agreement (DPA) available for all clients. All data is stored within the EU.",
      },
      {
        q: "What security certifications does Euroland IR hold?",
        a: "Our infrastructure is hosted in ISO 27001-certified data centres. We conduct regular penetration testing and vulnerability assessments. A full security overview is available on request.",
      },
      {
        q: "Can I control who has access to the platform?",
        a: "Yes. The platform includes a full role-based access control (RBAC) system. You can define user roles, set permissions at the module level, and manage access for internal teams, agencies, and external advisors.",
      },
      {
        q: "What AI features does Euroland IR offer?",
        a: "Euroland IR includes Purpose-Built AI for IR: an AI Disclosure Assistant for regulatory filings, an AI Q&A preparation tool for earnings calls, sentiment analysis for investor communications, and AI-powered analytics for investor targeting.",
      },
    ],
  },
  {
    id: "ai-solutions",
    label: "AI Solutions",
    items: [
      {
        q: "Is the AI output auditable and explainable?",
        a: "Yes. All AI-generated outputs include source citations and confidence indicators. The AI Disclosure Assistant shows which regulatory frameworks and precedents informed each suggestion, so your legal and compliance teams can review and approve before publication.",
      },
      {
        q: "Does the AI use my company data to train its models?",
        a: "No. Your company data is never used to train our AI models. All AI processing is performed in an isolated environment, and your data remains strictly confidential.",
      },
      {
        q: "Which regulatory frameworks does the AI Disclosure Assistant support?",
        a: "The AI Disclosure Assistant supports MAR (Market Abuse Regulation), CSRD, ESRS, TCFD, GRI, and SASB. Support for additional frameworks is added on a rolling basis.",
      },
    ],
  },
  {
    id: "support",
    label: "Support",
    items: [
      {
        q: "What support is available?",
        a: "All plans include access to our support team via email and phone during business hours. Enterprise plans include a dedicated account manager and extended support hours. A comprehensive knowledge base and video tutorial library are available to all clients.",
      },
      {
        q: "Is training provided?",
        a: "Yes. All new clients receive onboarding training as part of their setup. Additional training sessions can be arranged for new team members or when new modules are activated.",
      },
      {
        q: "How do I report a technical issue?",
        a: "Technical issues can be reported via our support portal, by email, or by phone. We aim to respond to all support requests within 4 business hours. Critical issues affecting live services are escalated immediately.",
      },
    ],
  },
  {
    id: "sustainability-esg",
    label: "Sustainability & ESG",
    items: [
      {
        q: "Does Euroland IR support CSRD reporting?",
        a: "Yes. Our CSRD Reporting Solution provides a structured, investor-friendly presentation of your CSRD disclosures — surfacing key insights, communicating double materiality assessments clearly, and making it easier for both retail and institutional investors to understand your ESRS-aligned sustainability position.",
      },
      {
        q: "What is the Sustainability IAT?",
        a: "The Sustainability IAT (Interactive Analytical Tool) is a dynamic, always-current presentation of your sustainability data and ESG commitments. It gives investors, ESG raters, and other stakeholders a structured, interactive overview of your performance across environmental, social, and governance dimensions.",
      },
      {
        q: "What is the difference between the CSRD Reporting Solution and the Sustainability IAT?",
        a: "The CSRD Reporting Solution is designed for formal CSRD and ESG disclosure communication — presenting structured documents in an accessible format. The Sustainability IAT is designed for dynamic, ongoing stakeholder engagement — providing a live, always-current view of your sustainability performance.",
      },
      {
        q: "Can Euroland IR help with ESG investor communication?",
        a: "Yes. Beyond reporting tools, Euroland IR provides dedicated ESG investor communication features: ESG-specific press release templates, a sustainability section for your IR platform, and analytics to track ESG investor engagement.",
      },
    ],
  },
  {
    id: "ir-website",
    label: "IR Platform",
    items: [
      {
        q: "What does Euroland IR include in an IR platform?",
        a: "Our IR platform solution includes a fully managed, branded investor relations website with real-time stock data, financial reports, governance documents, press releases, earnings calendar, ESG section, and investor contact tools — all in a single, compliant platform.",
      },
      {
        q: "Can we manage our IR platform content ourselves?",
        a: "Yes. The platform includes a user-friendly content management system (CMS) that allows your IR team to update content, publish press releases, upload documents, and manage the investor calendar without any technical knowledge.",
      },
      {
        q: "Is the IR platform optimised for search engines?",
        a: "Yes. All Euroland IR platforms are built with SEO best practices: structured data markup, fast load times, mobile-first design, and automatic sitemap generation. We also provide guidance on IR-specific SEO strategies.",
      },
      {
        q: "Can the IR platform be integrated with other Euroland IR tools?",
        a: "Yes. The IR platform is fully integrated with all other Euroland IR modules — stock data, earnings tools, ESG reporting, investor communications, and AI analytics — providing a single, coherent investor experience.",
      },
    ],
  },
];

// ── ACCORDION ITEM ────────────────────────────────────────────────────────────

function AccordionItem({ q, a }: FAQItem) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        borderBottom: "1px solid rgb(221, 224, 230)",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          gap: "16px",
        }}
      >
        {/* Question: 16px/400/24px/rgb(13,27,42) — node[63] */}
        <span
          style={{
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "24px",
            color: "rgb(13, 27, 42)",
            flex: 1,
          }}
        >
          {q}
        </span>
        {/* + icon: 16px, rgb(0,107,163) */}
        <span
          style={{
            fontSize: "16px",
            fontWeight: 400,
            color: "rgb(0, 107, 163)",
            flexShrink: 0,
            transition: "transform 200ms ease",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            display: "inline-block",
          }}
        >
          +
        </span>
      </button>
      {open && (
        <div
          style={{
            paddingBottom: "20px",
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "24px",
            color: "rgb(58, 74, 88)",
          }}
        >
          {a}
        </div>
      )}
    </div>
  );
}

// ── MAIN PAGE ─────────────────────────────────────────────────────────────────

export default function FAQ() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const tabs = [
    { id: "all", label: "All" },
    ...FAQ_CATEGORIES.map(c => ({ id: c.id, label: c.label })),
  ];

  const visibleCategories = FAQ_CATEGORIES.filter(cat => {
    if (activeCategory !== "all" && cat.id !== activeCategory) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return cat.items.some(
        item =>
          item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const filteredCategories = visibleCategories.map(cat => ({
    ...cat,
    items: searchQuery
      ? cat.items.filter(
          item =>
            item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.a.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : cat.items,
  }));

  return (
    <PageWrapper>

            <BannerHero
        variant="resources"
        label={t("resources_label", "Resources")}
        title={t("faq_hero_title", "Investor Relations Platform FAQs for Listed Companies")}
        subtitle={<><span>{t("faq_hero_subtitle", "Everything you need to know about the Euroland IR platform, our investor relations software, pricing, and support.")}{" "}</span><LangLink href="/contact" style={{ color: "rgba(255,255,255,0.92)", textDecoration: "underline", textUnderlineOffset: "4px" }}>{t("contact_us", "Contact us.")}</LangLink></> as React.ReactNode}
        minHeight="440px"
        titleMaxWidth="640px"
        subtitleMaxWidth="560px"
      />

{/* ── SEARCH BAR (y:480–550, h:70) ─────────────────────────────────── */}
      <div
        style={{
          background: "rgb(255, 255, 255)",
          borderBottom: "1px solid rgb(221, 224, 230)",
          padding: "12px 0",
        }}
      >
        <div
          className="container"
          style={{ maxWidth: "1536px", padding: "0 48px" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              width: "860px",
              height: "44px",
              border: "1px solid rgb(221, 224, 230)",
              borderRadius: "4px",
              padding: "0 16px",
              background: "rgb(255, 255, 255)",
            }}
          >
            <Search size={14} color="rgb(90, 106, 122)" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "24px",
                color: "rgb(13, 27, 42)",
                background: "transparent",
              }}
            />
          </div>
        </div>
      </div>

      {/* ── CATEGORY FILTER TABS (y:550–607, h:57) ───────────────────────── */}
      <div
        style={{
          background: "rgb(255, 255, 255)",
          borderBottom: "1px solid rgb(221, 224, 230)",
          position: "sticky",
          top: "64px",
          zIndex: 10,
        }}
      >
        <div
          className="container"
          style={{ maxWidth: "1536px", padding: "0 48px" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0",
              height: "57px",
            }}
          >
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                style={{
                  padding: "0 16px",
                  height: "57px",
                  border: "none",
                  borderBottom: activeCategory === tab.id
                    ? "2px solid rgb(0, 173, 240)"
                    : "2px solid transparent",
                  background: "none",
                  cursor: "pointer",
                  fontSize: "13px",
                  fontWeight: activeCategory === tab.id ? 600 : 400,
                  lineHeight: "24px",
                  color: activeCategory === tab.id
                    ? "rgb(13, 27, 42)"
                    : "rgb(90, 106, 122)",
                  whiteSpace: "nowrap",
                  transition: "color 150ms ease, border-color 150ms ease",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── FAQ ACCORDION (y:607–3377) ────────────────────────────────────── */}
      <section
        style={{
          background: "rgb(255, 255, 255)",
          padding: "48px 0 80px",
        }}
      >
        <div
          className="container"
          style={{ maxWidth: "1536px", padding: "0 48px" }}
        >
          {/* Inner: 860px wide, centered — node[57] geo:572,639 860x2642 */}
          <div style={{ width: "860px", margin: "0 auto" }}>
            {filteredCategories.length === 0 ? (
              <div
                style={{
                  padding: "64px 0",
                  textAlign: "center",
                  fontSize: "16px",
                  color: "rgb(90, 106, 122)",
                }}
              >
                No questions found for your search.
              </div>
            ) : (
              filteredCategories.map(cat => (
                <div key={cat.id} style={{ marginBottom: "32px" }}>
                  {/* Category header: 10px/700/24px/rgb(58,74,88) uppercase — node[59] geo:620,639 764x43 */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      height: "43px",
                      borderBottom: "1px solid rgb(221, 224, 230)",
                      marginBottom: "0",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "10px",
                        fontWeight: 700,
                        lineHeight: "24px",
                        letterSpacing: "0.10em",
                        textTransform: "uppercase",
                        color: "rgb(58, 74, 88)",
                      }}
                    >
                      {cat.label}
                    </span>
                  </div>
                  {/* Questions */}
                  {cat.items.map((item, i) => (
                    <AccordionItem key={i} q={item.q} a={item.a} />
                  ))}
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* ── CTA BAND (y:3377–3677, h:300) ────────────────────────────────── */}
      <div
        className="cta-band"
        style={{
          background: "rgb(8, 43, 69)"
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
          {/* Left: eyebrow + H3 + subtitle — node[242] geo:282,3457 1252x140 */}
          <div>
            {/* Eyebrow: u-label-dark — node[243] geo:282,3459 147x34 */}
            <div className="u-label u-label-dark" style={{ marginBottom: "16px" }}>
              Still have questions?
            </div>
            {/* H3: 40px/300/48px/rgb(255,255,255) — node[244] geo:282,3509 1252x48 */}
            <h3
              style={{
                fontSize: "40px",
                fontWeight: 400,
                lineHeight: "48px",
                letterSpacing: "0.005em",
                color: "rgb(255, 255, 255)",
                margin: "0 0 24px",
              }}
            >
              Speak with our team
            </h3>
            {/* Subtitle: 16px/400/24px/rgba(255,255,255,0.70) — node[245] geo:282,3573 1252x24 */}
            <p
              style={{
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "24px",
                color: "rgba(255, 255, 255, 0.70)",
                margin: 0,
              }}
            >
              Our IR specialists are happy to answer any questions about the platform and help you find the right solution for your company.
            </p>
          </div>

          {/* Right: buttons — node[246] geo:1582,3472 140x110 */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              flexShrink: 0,
              justifyContent: "flex-end",
              marginLeft: "48px",
            }}
          >
            <LangLink href="/book-demo" className="btn-primary" style={{ textAlign: "center" }}>
              Book a Demo
            </LangLink>
            <LangLink href="/contact" className="btn-secondary" style={{ textAlign: "center" }}>
              Talk to Us
            </LangLink>
          </div>
        </div>
      </div>
      <div style={{ height: "60px", background: "#fff" }} />

    </PageWrapper>
  );
}
