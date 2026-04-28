"use client";

import { usePathname } from "next/navigation";
import LangLink from "@/components/LangLink";
import { PageWrapper } from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";

interface Props {
  children: React.ReactNode;
}

export default function EnglishOnlyGuard({ children }: Props) {
  const pathname = usePathname();
  const { lang, setLang, t } = useLanguage();

  if (lang === "en") {
    return <>{children}</>;
  }

  return (
    <PageWrapper>
      <section className="section">
        <div className="container" style={{ maxWidth: "880px" }}>
          <div className="card" style={{ padding: "48px" }}>
            <div className="u-label" style={{ marginBottom: "16px" }}>
              {t("resource_language_notice_label", "English only")}
            </div>
            <h1 className="type-h3" style={{ color: "var(--text-primary)", marginBottom: "16px" }}>
              {t("resource_language_notice_heading", "This resource is currently available in English only")}
            </h1>
            <p style={{ marginBottom: "24px", maxWidth: "640px" }}>
              {t(
                "resource_language_notice_body",
                "We have kept this resource live so you can still access the original content. Switch to English to continue, or contact us if you need support in your local market."
              )}
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <button
                type="button"
                className="btn-primary"
                onClick={() => setLang("en")}
              >
                {t("resource_language_notice_switch", "Switch to English")}
              </button>
              <LangLink href="/contact" className="btn-outline">
                {t("resource_language_notice_contact", "Talk to us")}
              </LangLink>
            </div>
            {pathname && (
              <p className="form-help" style={{ marginTop: "20px" }}>
                {t("resource_language_notice_current_locale", "Current page")}: {pathname}
              </p>
            )}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
