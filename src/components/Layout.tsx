"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Check, ChevronDown, Globe, Menu, X } from "lucide-react";
import LangLink from "@/components/LangLink";
import { LANGUAGES, LangCode, useLanguage } from "@/contexts/LanguageContext";

type NavItem = {
  labelKey: string;
  fallback: string;
  children: { labelKey: string; fallback: string; href: string; englishOnly?: boolean }[];
};

const NAV_ITEMS: NavItem[] = [
  {
    labelKey: "nav_platform",
    fallback: "Platform",
    children: [
      { labelKey: "nav_overview", fallback: "Platform Overview", href: "/platform" },
      { labelKey: "nav_stock_data", fallback: "Stock & Financial Data", href: "/platform/stock-data" },
      { labelKey: "nav_ir_apps", fallback: "IR Apps", href: "/platform/ir-apps" },
      { labelKey: "nav_analytics_earnings", fallback: "Analytics & Earnings", href: "/platform/analytics-earnings" },
      { labelKey: "nav_investor_comms", fallback: "Investor Communications", href: "/platform/investor-communications" },
      { labelKey: "nav_ai_solutions", fallback: "Purpose-Built AI", href: "/ai" },
    ],
  },
  {
    labelKey: "nav_solutions",
    fallback: "Solutions",
    children: [
      { labelKey: "nav_for_listed_companies", fallback: "For Listed Companies", href: "/solutions/listed-companies" },
      { labelKey: "nav_ipo_solutions", fallback: "IPO Solutions", href: "/ipo" },
      { labelKey: "nav_sustainability_reporting", fallback: "Sustainability Reporting", href: "/solutions/sustainability-reporting" },
    ],
  },
  {
    labelKey: "nav_resources",
    fallback: "Resources",
    children: [
      { labelKey: "nav_guides", fallback: "IR Guide", href: "/resources/ir-guide", englishOnly: true },
      { labelKey: "nav_whitepapers", fallback: "Whitepapers", href: "/resources/whitepapers", englishOnly: true },
      { labelKey: "nav_ir_blog", fallback: "IR Blog", href: "/resources/ir-blog", englishOnly: true },
      { labelKey: "nav_faq", fallback: "FAQ", href: "/resources/faq" },
      { labelKey: "nav_glossary", fallback: "Financial Glossary", href: "/resources/glossary" },
    ],
  },
  {
    labelKey: "nav_company",
    fallback: "Company",
    children: [
      { labelKey: "nav_about_us", fallback: "About Us", href: "/about" },
      { labelKey: "nav_leadership", fallback: "Leadership", href: "/company/leadership" },
      { labelKey: "nav_newsroom", fallback: "Newsroom", href: "/company/newsroom" },
      { labelKey: "nav_careers", fallback: "Careers", href: "/company/careers" },
    ],
  },
  {
    labelKey: "nav_contact",
    fallback: "Contact",
    children: [
      { labelKey: "nav_contact_us", fallback: "Contact Us", href: "/contact" },
      { labelKey: "nav_helpdesk", fallback: "Helpdesk", href: "/contact#helpdesk" },
    ],
  },
];

function isPathActive(pathname: string | null, lang: string, href: string) {
  if (!pathname) return false;
  const target = `/${lang}${href}`;
  return pathname === target || pathname.startsWith(`${target}/`);
}

export function Nav() {
  const { lang, setLang, t } = useLanguage();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [langOpen, setLangOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const currentLanguage = LANGUAGES.find((language) => language.code === lang) ?? LANGUAGES[0];

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setLangOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setLangOpen(false);
        setOpenDropdown(null);
      }
    };
    document.addEventListener("click", handleOutside);
    return () => document.removeEventListener("click", handleOutside);
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-50 border-b border-[#dde3ef] bg-white/98 backdrop-blur"
      style={{ height: "64px" }}
    >
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div className="container flex h-full items-center justify-between gap-8">
        <LangLink
          href="/"
          aria-label="Euroland IR home"
          className="inline-flex items-center no-underline transition-opacity duration-200 hover:opacity-90"
        >
          <img src="/euroland-ir-logo.svg" alt="Euroland IR" style={{ height: "20px", width: "222px" }} />
        </LangLink>

        <nav className="hidden flex-1 items-center gap-1 lg:flex" aria-label="Primary">
          {NAV_ITEMS.map((item) => {
            const menuId = `${item.labelKey}-menu`;
            const visibleChildren = item.children.filter((child) => !(child.englishOnly && lang !== "en"));
            return (
              <div
                key={item.labelKey}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.labelKey)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 rounded-md border-0 bg-transparent px-4 py-2 text-[12px] font-medium uppercase tracking-[0.48px] text-[#082b45] transition-colors duration-150 hover:text-[#28628F]"
                  aria-haspopup="menu"
                  aria-expanded={openDropdown === item.labelKey}
                  aria-controls={menuId}
                  onClick={() => setOpenDropdown(openDropdown === item.labelKey ? null : item.labelKey)}
                >
                  {t(item.labelKey, item.fallback)}
                  <ChevronDown size={12} strokeWidth={2.5} className={openDropdown === item.labelKey ? "rotate-180" : ""} />
                </button>
                <div
                  id={menuId}
                  role="menu"
                  className="nav-dropdown"
                  style={{
                    opacity: openDropdown === item.labelKey ? 1 : 0,
                    visibility: openDropdown === item.labelKey ? "visible" : "hidden",
                    transform: openDropdown === item.labelKey ? "translateY(0)" : "translateY(-8px)",
                  }}
                >
                  {visibleChildren.map((child) => (
                    <LangLink
                      key={`${item.labelKey}-${child.href}`}
                      href={child.href}
                      role="menuitem"
                      className={isPathActive(pathname, lang, child.href) ? "bg-[#f0f7ff] font-medium text-[#28628F]" : ""}
                    >
                      {t(child.labelKey, child.fallback)}
                    </LangLink>
                  ))}
                </div>
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="relative">
            <button
              type="button"
              className="flex items-center gap-1.5 rounded-md border border-[#082b45]/20 px-3 py-1.5 text-[12px] font-medium tracking-[0.24px] text-[#082b45] transition-colors duration-150 hover:border-[#082b45]/40"
              aria-haspopup="listbox"
              aria-expanded={langOpen}
              aria-label={`Change language. Current language: ${currentLanguage.nativeLabel}`}
              onClick={(event) => {
                event.stopPropagation();
                setLangOpen((previous) => !previous);
              }}
            >
              <Globe size={14} />
              <span>{currentLanguage.nativeLabel}</span>
              <ChevronDown size={10} strokeWidth={2.5} className={`transition-transform duration-150 ${langOpen ? "rotate-180" : ""}`} />
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full z-[200] mt-1 min-w-[220px] rounded border border-[#dde0e6] bg-white py-1 shadow-xl" role="listbox" aria-label="Available languages">
                {LANGUAGES.map((language) => (
                  <button
                    key={language.code}
                    type="button"
                    className={`flex w-full items-center justify-between px-4 py-2.5 text-left text-[14px] transition-colors duration-100 ${
                      language.code === lang ? "bg-[#f0f7ff] font-semibold text-[#28628F]" : "text-[#22252b] hover:bg-[#f8f9fa]"
                    }`}
                    aria-selected={language.code === lang}
                    onClick={() => {
                      setLang(language.code as LangCode);
                      setLangOpen(false);
                    }}
                  >
                    <span>{language.nativeLabel}</span>
                    {language.code === lang && <Check size={14} className="text-[#28628F]" />}
                  </button>
                ))}
              </div>
            )}
          </div>
          <LangLink href="/book-demo" className="btn-primary" style={{ height: "40px", padding: "0 20px", boxSizing: "border-box" }}>
            {t("nav_book_demo", "Book a Demo")}
          </LangLink>
        </div>

        <button
          type="button"
          className="p-2 text-[#082b45] lg:hidden"
          onClick={() => setMobileOpen((previous) => !previous)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div id="mobile-navigation" className="border-t border-[#dde3ef] bg-white shadow-lg lg:hidden">
          <div className="container flex flex-col gap-1 py-4">
            <div className="mb-1 flex flex-wrap gap-2 border-b border-[#dde3ef] pb-3" aria-label="Language switcher">
              {LANGUAGES.map((language) => (
                <button
                  key={language.code}
                  type="button"
                  className={`rounded border px-3 py-1.5 text-[11px] font-bold transition-colors ${
                    language.code === lang
                      ? "border-[#28628F] bg-[#f0f7ff] text-[#28628F]"
                      : "border-[#dde3ef] text-[#6b7280] hover:border-[#28628F] hover:text-[#28628F]"
                  }`}
                  onClick={() => {
                    setLang(language.code as LangCode);
                    setMobileOpen(false);
                  }}
                >
                  {language.nativeLabel}
                </button>
              ))}
            </div>

            {NAV_ITEMS.map((item) => {
              const visibleChildren = item.children.filter((child) => !(child.englishOnly && lang !== "en"));
              const expanded = openDropdown === item.labelKey;
              return (
                <div key={item.labelKey}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-md px-2 py-3 text-left text-[13px] font-semibold uppercase tracking-[0.48px] text-[#082b45]"
                    aria-expanded={expanded}
                    onClick={() => setOpenDropdown(expanded ? null : item.labelKey)}
                  >
                    {t(item.labelKey, item.fallback)}
                    <ChevronDown size={14} className={expanded ? "rotate-180" : ""} />
                  </button>
                  {expanded && (
                    <div className="rounded-md bg-[#f8f9fa] py-2">
                      {visibleChildren.map((child) => (
                        <LangLink
                          key={`mobile-${item.labelKey}-${child.href}`}
                          href={child.href}
                          className="block px-4 py-2 text-[16px] text-[#22252b] no-underline hover:text-[#28628F]"
                        >
                          {t(child.labelKey, child.fallback)}
                        </LangLink>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="pt-4 border-t border-[#dde3ef]">
              <LangLink href="/book-demo" className="btn-primary block text-center">
                {t("nav_book_demo", "Book a Demo")}
              </LangLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  const { lang, t } = useLanguage();
  const isEnglish = lang === "en";
  const footerColumns = [
    {
      heading: t("nav_platform", "Platform"),
      links: [
        { label: t("nav_overview", "Platform Overview"), href: "/platform" },
        { label: t("nav_stock_data", "Stock & Financial Data"), href: "/platform/stock-data" },
        { label: t("nav_ir_apps", "IR Apps"), href: "/platform/ir-apps" },
        { label: t("nav_analytics_earnings", "Analytics & Earnings"), href: "/platform/analytics-earnings" },
        { label: t("nav_investor_comms", "Investor Communications"), href: "/platform/investor-communications" },
        { label: t("nav_ai_solutions", "Purpose-Built AI"), href: "/ai" },
      ],
    },
    {
      heading: t("nav_solutions", "Solutions"),
      links: [
        { label: t("nav_for_listed_companies", "For Listed Companies"), href: "/solutions/listed-companies" },
        { label: t("nav_ipo_solutions", "IPO Solutions"), href: "/ipo" },
        { label: t("nav_sustainability_reporting", "Sustainability Reporting"), href: "/solutions/sustainability-reporting" },
      ],
    },
    {
      heading: t("nav_resources", "Resources"),
      links: [
        ...(isEnglish ? [{ label: t("nav_guides", "IR Guide"), href: "/resources/ir-guide" }] : []),
        ...(isEnglish ? [{ label: t("nav_whitepapers", "Whitepapers"), href: "/resources/whitepapers" }] : []),
        ...(isEnglish ? [{ label: t("nav_ir_blog", "IR Blog"), href: "/resources/ir-blog" }] : []),
        { label: t("nav_faq", "FAQ"), href: "/resources/faq" },
        { label: t("nav_glossary", "Financial Glossary"), href: "/resources/glossary" },
      ],
    },
    {
      heading: t("nav_company", "Company"),
      links: [
        { label: t("nav_about_us", "About Us"), href: "/about" },
        { label: t("nav_leadership", "Leadership"), href: "/company/leadership" },
        { label: t("nav_newsroom", "Newsroom"), href: "/company/newsroom" },
        { label: t("nav_careers", "Careers"), href: "/company/careers" },
      ],
    },
    {
      heading: t("footer_legal_title", "Legal"),
      links: [
        { label: t("footer_privacy_policy", "Privacy Policy"), href: "/legal/privacy" },
        { label: t("footer_terms_of_use", "Terms of Use"), href: "/legal/terms" },
        { label: t("footer_cookies", "Cookies"), href: "/legal/cookies" },
        { label: t("footer_security", "Security"), href: "/legal/security" },
        { label: t("footer_accessibility", "Accessibility"), href: "/legal/accessibility" },
      ],
    },
  ];

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid grid gap-12 border-b border-white/10 pb-16" style={{ gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr 1fr" }}>
          <div>
            <img src="/euroland-footer-logo.webp" alt="Euroland IR" style={{ height: "20px", width: "auto", marginBottom: "16px", display: "block" }} />
            <p className="mb-8 text-[12px] leading-[20px] text-white" style={{ maxWidth: "280px" }}>
              {t("footer_tagline", "Best-practice investor relations technology for listed companies across 60+ markets.")}
            </p>
            <div className="flex gap-3" aria-label="Social links">
              <a
                href="https://se.linkedin.com/company/eurolandir"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded border border-white/20 text-[12px] text-white/60 no-underline transition-colors duration-150 hover:border-[#327AB1] hover:text-[#327AB1]"
                aria-label="Euroland IR on LinkedIn"
              >
                in
              </a>
              <a
                href="https://x.com/EurolandIR"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded border border-white/20 text-[12px] text-white/60 no-underline transition-colors duration-150 hover:border-[#327AB1] hover:text-[#327AB1]"
                aria-label="Euroland IR on X"
              >
                𝕏
              </a>
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.heading}>
              <div className="mb-4 text-[12px] font-medium uppercase tracking-[1.2px] text-white">{column.heading}</div>
              <ul className="m-0 flex list-none flex-col gap-2 p-0">
                {column.links.map((link) => (
                  <li key={`${column.heading}-${link.href}`}>
                    <LangLink href={link.href} className="text-[12px] tracking-[0.16px] text-white no-underline transition-colors duration-150 hover:text-[#327AB1]">
                      {link.label}
                    </LangLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 md:flex-row">
          <p className="m-0 text-[12px] text-white">{t("footer_copyright", `© ${new Date().getFullYear()} Euroland IR. All rights reserved.`)}</p>
          <div className="flex gap-6">
            <LangLink href="/legal/privacy" className="text-[12px] text-white no-underline transition-colors duration-150 hover:text-[#327AB1]">
              {t("footer_privacy", "Privacy Policy")}
            </LangLink>
            <LangLink href="/legal/terms" className="text-[12px] text-white no-underline transition-colors duration-150 hover:text-[#327AB1]">
              {t("footer_terms", "Terms of Use")}
            </LangLink>
            <LangLink href="/legal/cookies" className="text-[12px] text-white no-underline transition-colors duration-150 hover:text-[#327AB1]">
              {t("footer_cookies", "Cookies")}
            </LangLink>
            <LangLink href="/sitemap" className="text-[12px] text-white no-underline transition-colors duration-150 hover:text-[#327AB1]">
              Site Map
            </LangLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
