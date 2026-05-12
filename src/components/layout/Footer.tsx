"use client";

// Euroland IR ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â Footer
// Design: Navy (#082b45) background, white/muted text, green accents
// Columns: Brand | Solutions | Company | Resources | Legal
// Bottom bar: copyright + Privacy Policy | Terms of Use | Cookies


import LangLink from "@/components/LangLink";
import { useLanguage } from "@/contexts/LanguageContext";



export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const columns = [
    {
      title: t("footer_solutions", "Solutions"),
      links: [
        { label: t("footer_ir_software_tools", "IR Software Tools"), href: "/ir-tools" },
        { label: t("footer_purpose_built_ai", "Purpose Built AI"), href: "/ai" },
        { label: t("footer_ipo_solutions", "IPO Solutions"), href: "/ipo" },
        { label: t("footer_esg_solutions", "ESG Solutions"), href: "/solutions/esg" },
        { label: t("footer_ir_apps", "IR Apps"), href: "/platform/ir-apps" },
        { label: t("footer_ir_services", "IR Services"), href: "/ir-services" },
      ],
    },
    {
      title: t("nav_company", "Company"),
      links: [
        { label: t("footer_about_us", "About Us"), href: "/about" },
        { label: t("footer_leadership", "Leadership"), href: "/leadership" },
        { label: t("footer_newsroom", "Newsroom"), href: "/newsroom" },
        { label: t("footer_careers", "Careers"), href: "/careers" },
      ],
    },
    {
      title: t("nav_resources", "Resources"),
      links: [
        { label: t("footer_faq", "FAQ"), href: "/resources/faq" },
        { label: t("footer_financial_glossary", "Financial Glossary"), href: "/resources/glossary" },
      ],
    },
    {
      title: t("footer_legal_title", "Legal"),
      links: [
        { label: t("footer_privacy_policy", "Privacy Policy"), href: "/privacy" },
        { label: t("footer_terms_of_use", "Terms of Use"), href: "/terms" },
        { label: t("footer_security", "Security"), href: "/security" },
        { label: t("footer_accessibility", "Accessibility"), href: "/accessibility" },
        { label: t("footer_gdpr", "GDPR"), href: "/gdpr" },
      ],
    },
  ];

  const bottomLinks = [
    { label: t("footer_privacy_policy", "Privacy Policy"), href: "/privacy" },
    { label: t("footer_terms_of_use", "Terms of Use"), href: "/terms" },
    { label: t("footer_cookies", "Cookies"), href: "/cookies" },
  ];

  return (
    <footer style={{ backgroundColor: "#082b45" }} className="text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16" style={{ maxWidth: "1536px" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <img
              src="/euroland-footer-logo.webp"
              alt="Euroland IR"
              style={{ height: "36px", width: "auto", marginBottom: "16px" }}
            />
            <p className="text-sm text-white/60 mb-6 leading-relaxed">
              {t("footer_tagline", "Best Practice IR Solutions & Purpose-Built AI for Investor Relations.")}
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-2 py-1 -mx-2 rounded text-white/50 hover:text-[#035F88] hover:bg-white/10 transition-colors text-sm font-bold"
                aria-label="LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-2 py-1 -mx-2 rounded text-white/50 hover:text-[#035F88] hover:bg-white/10 transition-colors text-sm font-bold"
                aria-label="X (Twitter)"
              >
                ÃƒÂ°Ã‚ÂÃ¢â‚¬Â¢Ã‚Â
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-2 py-1 -mx-2 rounded text-white/50 hover:text-[#035F88] hover:bg-white/10 transition-colors text-sm"
                aria-label="YouTube"
              >
                ÃƒÂ¢Ã¢â‚¬â€œÃ‚Â¶
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="type-label text-xs font-bold uppercase tracking-widest text-white/50 mb-4">
                {col.title}
              </h3>
              <ul className="space-y-2">
                {col.links.map((link, idx) => (
                  <li key={`${col.title}-${idx}`}>
                    <LangLink
                      href={link.href}
                      className="inline-flex px-2 py-1 -mx-2 rounded text-sm text-white/70 hover:text-[#035F88] hover:bg-white/10 transition-colors"
                    >
                      {link.label}
                    </LangLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            {"\u00A9"} {year} Euroland IR. {t("footer_all_rights_reserved", "All rights reserved.")}
          </p>
          <div className="flex flex-wrap gap-4">
            {bottomLinks.map((link) => (
              <LangLink
                key={link.href}
                href={link.href}
                className="inline-flex px-2 py-1 -mx-2 rounded text-xs text-white/40 hover:text-[#035F88] hover:bg-white/10 transition-colors"
              >
                {link.label}
              </LangLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
