"use client";

// Euroland IR — Navbar
// i18n: uses flat t("key") from CDN JSON locale files
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import LangLink from "@/components/LangLink";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown, Menu, X, Globe, Check } from "lucide-react";
import { useLanguage, LANGUAGES, LangCode } from "@/contexts/LanguageContext";

export default function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const location = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [langOpen, setLangOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
        setLangOpen(false);
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
    setLangOpen(false);
  }, [location]);

  const langDisplay = lang === "zh-TW" ? "ZH" : lang.toUpperCase().slice(0, 2);

  const platformLinks = [
    { label: t("nav_ir_software_tools", "IR Software Tools"), href: "/platform" },
    { label: t("nav_ai_solutions", "Purpose Built AI"), href: "/ai" },
    { label: t("nav_stock_data", "Stock & Financial Data"), href: "/platform/stock-data" },
    { label: t("nav_ir_apps", "IR App"), href: "/platform/ir-apps" },
    { label: t("nav_analytics_earnings", "Analytics & Earnings"), href: "/platform/analytics-earnings" },
    { label: t("nav_investor_comms", "Investor Communications"), href: "/platform/investor-comms" },
  ];

  const solutionsLinks = [
    { label: t("nav_for_listed_companies", "For Listed Companies"), href: "/solutions/for-listed-companies" },
    { label: t("nav_ipo_solutions", "IPO Solutions"), href: "/ipo" },
    { label: t("nav_sustainability_reporting", "Sustainability Reporting"), href: "/solutions/esg" },
  ];

  const isEnglish = lang === 'en';
  const resourcesLinks = [
    ...(isEnglish ? [{ label: t("nav_guides", "IR Guide"), href: "/resources/ir-guide" }] : []),
    ...(isEnglish ? [{ label: t("nav_whitepapers", "Whitepapers"), href: "/resources/whitepapers" }] : []),
    ...(isEnglish ? [{ label: t("nav_ir_blog", "IR Blog"), href: "/resources/ir-blog" }] : []),
    { label: t("nav_faq", "FAQ"), href: "/resources/faq" },
    { label: t("nav_glossary", "Financial Glossary"), href: "/resources/glossary" },
  ];

  const companyLinks = [
    { label: t("nav_about_us", "About Us"), href: "/about" },
    { label: t("nav_leadership", "Leadership"), href: "/company/leadership" },
    { label: t("nav_newsroom", "Newsroom"), href: "/company/newsroom" },
    { label: t("nav_careers", "Careers"), href: "/company/careers" },
  ];

  const contactLinks = [
    { label: t("nav_contact_us", "Contact Us"), href: "/contact" },
    { label: t("nav_helpdesk", "Helpdesk"), href: "https://helpdesk.euroland.com/support/home", external: true },
  ];

  const navItems = [
    { key: "platform", label: t("nav_platform", "Platform"), links: platformLinks },
    { key: "solutions", label: t("nav_solutions", "Solutions"), links: solutionsLinks },
    { key: "resources", label: t("nav_resources", "Resources"), links: resourcesLinks },
    { key: "company", label: t("nav_company", "Company"), links: companyLinks },
    { key: "contact", label: t("nav_contact", "Contact"), links: contactLinks },
  ];

  return (
    <nav
      ref={navRef}
      className="sticky top-0 z-50 w-full"
      style={{ backgroundColor: "#ffffff", borderBottom: "1px solid #dde0e6" }}
    >
      <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1536px" }}>
        <div className="flex items-center justify-between h-16">
          <LangLink href="/" className="flex items-center flex-shrink-0" />

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.key} className="relative">
                <button
                  className="flex items-center gap-1 px-3 py-2 text-xs font-medium text-[#082b45] hover:text-[#28628F] transition-colors uppercase tracking-wide"
                  onMouseEnter={() => setActiveDropdown(item.key)}
                  onMouseLeave={() => setActiveDropdown(null)}
                  onClick={() => setActiveDropdown(activeDropdown === item.key ? null : item.key)}
                >
                  {item.label}
                  <ChevronDown size={14} className={`transition-transform ${activeDropdown === item.key ? "rotate-180" : ""}`} />
                </button>
                {activeDropdown === item.key && (
                  <div
                    className="absolute top-full left-0 bg-white border border-[#dde0e6] shadow-xl min-w-[220px] py-2 z-50"
                    onMouseEnter={() => setActiveDropdown(item.key)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.links.map((link) => (
                      (link as any).external ? (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-[13px] font-normal no-underline transition-colors text-[#22252b] hover:text-[#28628F] hover:bg-[#f8f9fa]"
                        >
                          {link.label}
                        </a>
                      ) : (
                      <LangLink
                        key={link.href}
                        href={link.href}
                        className={`block px-4 py-2 text-[13px] font-normal no-underline transition-colors ${
                          location === `/${lang}${link.href}`
                            ? "text-[#28628F] font-medium bg-[#f0f7ff]"
                            : "text-[#22252b] hover:text-[#28628F] hover:bg-[#f8f9fa]"
                        }`}
                      >
                        {link.label}
                      </LangLink>
                      )
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <div className="relative">
              <button
                className="flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-semibold tracking-[0.48px] uppercase text-[#082b45]/70 hover:text-[#082b45] border border-[#082b45]/20 hover:border-[#082b45]/40 rounded transition-colors duration-150"
                onClick={(e) => { e.stopPropagation(); setLangOpen(prev => !prev); }}
              >
                <Globe size={14} />
                {langDisplay}
                <ChevronDown size={10} strokeWidth={2.5} className={`transition-transform duration-150 ${langOpen ? "rotate-180" : ""}`} />
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-1 bg-white border border-[#dde0e6] shadow-xl py-1 z-50 min-w-[180px] rounded">
                  {LANGUAGES.map((language) => (
                    <button
                      key={language.code}
                      className={`w-full flex items-center justify-between px-4 py-2.5 text-[14px] transition-colors duration-100 ${
                        language.code === lang
                          ? "text-[#28628F] font-medium bg-[#f0f7ff]"
                          : "text-[#22252b] hover:bg-[#f8f9fa]"
                      }`}
                      onClick={() => { setLang(language.code as LangCode); setLangOpen(false); }}
                    >
                      <span>{language.nativeLabel}</span>
                      {language.code === lang && <Check size={14} className="text-[#28628F]" />}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <LangLink href="/book-demo" className="btn-primary no-underline">
              {t("nav_book_demo", "Book a Demo")}
            </LangLink>
          </div>

          <button
            className="lg:hidden text-[#082b45] p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#dde0e6] max-h-[80vh] overflow-y-auto">
          {/* Language switcher — always visible at top of mobile menu */}
          <div className="px-4 py-3 border-b border-[#dde0e6] flex items-center gap-2 flex-wrap">
            <Globe size={14} className="text-[#082b45]/50 flex-shrink-0" />
            {LANGUAGES.map((language) => (
              <button
                key={language.code}
                className={`px-3 py-1 text-[11px] font-bold border rounded transition-colors ${
                  language.code === lang
                    ? "border-[#28628F] bg-[#28628F] text-white"
                    : "border-[#082b45]/20 text-[#082b45]/60 hover:border-[#082b45]/50 hover:text-[#082b45]"
                }`}
                onClick={() => { setLang(language.code as LangCode); setMobileOpen(false); }}
              >
                {language.nativeLabel}
              </button>
            ))}
          </div>
          {navItems.map((item) => (
            <div key={item.key} className="border-b border-[#dde0e6]/50">
              <button
                className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-[#082b45]"
                onClick={() => setActiveDropdown(activeDropdown === item.key ? null : item.key)}
              >
                {item.label}
                <ChevronDown size={14} className={`transition-transform ${activeDropdown === item.key ? "rotate-180" : ""}`} />
              </button>
              {activeDropdown === item.key && (
                <div className="bg-[#f8f9fa] pb-2">
                  {item.links.map((link) => (
                    (link as any).external ? (
                      <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="block px-6 py-2 text-sm text-[#22252b] hover:text-[#28628F] no-underline">
                        {link.label}
                      </a>
                    ) : (
                    <LangLink key={link.href} href={link.href} className="block px-6 py-2 text-sm text-[#22252b] hover:text-[#28628F] no-underline">
                      {link.label}
                    </LangLink>
                    )
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="p-4">
            <LangLink href="/book-demo" className="btn-primary text-center justify-center no-underline w-full block">
              {t("nav_book_demo", "Book a Demo")}
            </LangLink>
          </div>
        </div>
      )}
    </nav>
  );
}
