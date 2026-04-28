"use client";

/**
 * SITE MAP PAGE — Euroland IR
 * Visual directory of every page on the site, grouped by section.
 * Accessible at /sitemap
 */
import LangLink from "@/components/LangLink";
import { PageWrapper } from "@/components/Layout";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type TFunction = (key: string, fallback?: string) => string;

interface PageEntry {
  label: string;
  href: string;
  description?: string;
}

interface SiteSection {
  heading: string;
  color: string;
  icon: string;
  pages: PageEntry[];
}

const SECTIONS: SiteSection[] = [
  {
    heading: "Main",
    color: "#082b45",
    icon: "🏠",
    pages: [
      { label: "Home", href: "/", description: "Main landing page" },
      { label: "Book a Demo", href: "/book-demo", description: "Request a product demonstration" },
      { label: "Contact Us", href: "/contact", description: "Get in touch with the team" },
    ],
  },
  {
    heading: "Platform",
    color: "#0a3d62",
    icon: "⚙️",
    pages: [
      { label: "Platform Overview", href: "/platform", description: "Full platform overview" },
      { label: "Purpose Built AI", href: "/ai", description: "AI-powered IR tools" },
      { label: "Stock & Financial Data", href: "/platform/stock-data", description: "Real-time market data feeds" },
      { label: "Analytics & Earnings", href: "/platform/analytics-earnings", description: "Earnings analytics and reporting" },
      { label: "Investor Communications", href: "/platform/investor-communications", description: "Webcasts, press releases, alerts" },
      { label: "IR Apps", href: "/platform/ir-apps", description: "Mobile and web IR applications" },
    ],
  },
  {
    heading: "Solutions",
    color: "#28628F",
    icon: "💡",
    pages: [
      { label: "For Listed Companies", href: "/solutions/listed-companies", description: "Solutions by company size" },
      { label: "Micro-Cap Companies", href: "/solutions/listed-companies/micro-cap", description: "IR solutions for micro-cap issuers" },
      { label: "Small-Cap Companies", href: "/solutions/listed-companies/small-cap", description: "IR solutions for small-cap issuers" },
      { label: "Mid-Cap Companies", href: "/solutions/listed-companies/mid-cap", description: "IR solutions for mid-cap issuers" },
      { label: "Large-Cap Companies", href: "/solutions/listed-companies/large-cap", description: "IR solutions for large-cap issuers" },
      { label: "IPO Readiness", href: "/ipo", description: "Pre-IPO and IPO IR solutions" },
      { label: "Sustainability Reporting", href: "/solutions/sustainability-reporting", description: "ESG and CSRD reporting tools" },
      { label: "Platform Overview", href: "/platform", description: "Product overview, capabilities, and managed delivery" },
    ],
  },
  {
    heading: "Resources",
    color: "#1a6fa8",
    icon: "📚",
    pages: [
      { label: "IR Guide", href: "/resources/ir-guide", description: "Best-practice investor relations guides" },
      { label: "Whitepapers", href: "/resources/whitepapers", description: "In-depth research and whitepapers" },
      { label: "IR Blog", href: "/resources/ir-blog", description: "Latest IR insights and articles" },
      { label: "FAQ", href: "/resources/faq", description: "Frequently asked questions" },
      { label: "Financial Glossary", href: "/resources/glossary", description: "IR and finance terminology" },
    ],
  },
  {
    heading: "Company",
    color: "#2c3e50",
    icon: "🏢",
    pages: [
      { label: "About Us", href: "/about", description: "Our story, mission, and values" },
      { label: "Leadership", href: "/company/leadership", description: "Meet the leadership team" },
      { label: "Newsroom", href: "/company/newsroom", description: "Press releases, product updates, and company news" },
      { label: "Careers", href: "/company/careers", description: "Open positions at Euroland IR" },
    ],
  },
  {
    heading: "Legal",
    color: "#5a6a7a",
    icon: "⚖️",
    pages: [
      { label: "Privacy Policy", href: "/legal/privacy", description: "How we handle your data" },
      { label: "Terms of Use", href: "/legal/terms", description: "Terms and conditions of use" },
      { label: "Cookie Policy", href: "/legal/cookies", description: "How we use cookies" },
      { label: "Security", href: "/legal/security", description: "Our security practices" },
      { label: "Accessibility", href: "/legal/accessibility", description: "Accessibility statement" },
      { label: "GDPR Compliance", href: "/legal/gdpr", description: "GDPR rights and compliance" },
    ],
  },
];

export default function SiteMap() {
  const { t } = useLanguage();
  const totalPages = SECTIONS.reduce((sum, s) => sum + s.pages.length, 0);

  return (
    <PageWrapper>
      {/* Hero — spec: bg #082b45, min-height 544px */}
      <section
        style={{ backgroundColor: "#082b45", minHeight: "440px", overflow: "hidden", display: "flex", alignItems: "flex-start" }}
      >
        <div className="container" style={{ paddingTop: "96px", paddingBottom: "96px" }}>
          <div style={{ maxWidth: "640px" }}>
            <div style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "0.96px", textTransform: "uppercase", color: "#8ddcff", marginBottom: "16px", display: "inline-block" }}>{t("sitemap_navigation", "Navigation")}</div>
            {/* h2 → 32px/700/-0.32px from @layer base !important */}
            <h1 className="type-h2" style={{ color: "#ffffff", marginBottom: "16px" }}>{t("sitemap_site_map", "Site Map")}</h1>
            <p style={{ fontSize: "16px", lineHeight: "24px", color: "rgba(255,255,255,0.70)" }}>
              {t("sitemap_all_pages_across_sections_click_any_link_to_preview", `All ${totalPages} pages across ${SECTIONS.length} sections — click any link to preview.`)}
            </p>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1536px" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {SECTIONS.map((section) => (
              <div
                key={section.heading}
                className="border border-[#dde0e6] overflow-hidden"
              >
                {/* Section header */}
                <div
                  className="px-6 py-4 flex items-center gap-3"
                  style={{ backgroundColor: section.color }}
                >
                  <span className="text-xl">{section.icon}</span>
                  <div>
                    <div className="text-white font-bold text-sm tracking-wide">{section.heading}</div>
                    <div className="text-white/50 text-xs">{section.pages.length} {t("sitemap_pages", "pages")}</div>
                  </div>
                </div>

                {/* Page links */}
                <ul className="divide-y divide-[#f0f2f5]">
                  {section.pages.map((page) => (
                    <li key={page.href}>
                      <LangLink
                        href={page.href}
                        className="flex items-start justify-between gap-3 px-6 py-3.5 hover:bg-[#f7f9fc] transition-colors group no-underline"
                      >
                        <div className="min-w-0">
                          <div className="text-sm font-semibold text-[#0f1e2b] group-hover:text-[#28628F] transition-colors">
                            {page.label}
                          </div>
                          {page.description && (
                            <div className="text-xs text-[#8a9aaa] mt-0.5 leading-relaxed">
                              {page.description}
                            </div>
                          )}
                          <div className="text-xs text-[#b0bec8] mt-1 font-mono">{page.href}</div>
                        </div>
                        <ExternalLink
                          size={13}
                          className="text-[#b0bec8] group-hover:text-[#28628F] transition-colors flex-shrink-0 mt-1"
                        />
                      </LangLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick stats bar */}
      <section className="py-10 border-t border-[#dde0e6]" style={{ backgroundColor: "#f2f4f6" }}>
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1536px" }}>
          <div className="flex flex-wrap gap-8 items-center justify-between">
            <div className="flex flex-wrap gap-8">
              {SECTIONS.map((s) => (
                <div key={s.heading} className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: s.color }}
                  />
                  <span className="text-xs text-[#5a6a7a]">
                    <span className="font-semibold text-[#0f1e2b]">{s.pages.length}</span> {s.heading}
                  </span>
                </div>
              ))}
            </div>
            <div className="text-xs text-[#8a9aaa]">
              {t("sitemap_total_pages", "Total:")} <span className="font-semibold text-[#0f1e2b]">{totalPages} {t("sitemap_pages_label", "pages")}</span>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
