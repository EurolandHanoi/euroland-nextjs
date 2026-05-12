"use client";

import LangLink from "@/components/LangLink";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { useLanguage } from "@/contexts/LanguageContext";
import { Nav, Footer } from "@/components/Layout";

interface SimplePageProps {
  label: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  showCta?: boolean;
}

export default function SimplePage({ label, title, subtitle, children, showCta = true }: SimplePageProps) {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main id="main-content" className="flex-1">
        <section
          className="hero-navy"
          style={{
            minHeight: "440px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="container" style={{ paddingTop: "96px", paddingBottom: "96px" }}>
            <div style={{ maxWidth: "720px" }}>
              <SectionLabel light>{label}</SectionLabel>
              <h1 className="type-h2"
                style={{
                  fontSize: "var(--fs-3xl)",
                  fontWeight: 300,
                  lineHeight: "var(--lh-3xl)",
                  letterSpacing: "-0.01em",
                  color: "#ffffff",
                  margin: "0 0 16px",
                }}
              >
                {title}
              </h1>
              {subtitle && (
                <p
                  style={{
                    fontSize: "var(--fs-md)",
                    lineHeight: "var(--lh-md)",
                    color: "rgba(255,255,255,0.78)",
                    letterSpacing: "0.01em",
                    margin: 0,
                    maxWidth: "560px",
                  }}
                >
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        </section>

        <div>{children}</div>

        {showCta && (
          <section style={{ backgroundColor: "#f2f4f6", padding: "80px 0" }}>
            <div className="container" style={{ textAlign: "center" }}>
              <div style={{ maxWidth: "720px", margin: "0 auto" }}>
                <div className="u-label" style={{ marginBottom: "16px", display: "inline-block" }}>
                  {t("common_get_started", "GET STARTED")}
                </div>
                <h2 style={{ color: "#0f1e2b", margin: "0 0 16px" }}>
                  {t("home_cta_title", "Ready to elevate your Investor Relations?")}
                </h2>
                <p style={{ color: "#3a4a58", maxWidth: "560px", margin: "0 auto 32px" }}>
                  {t(
                    "simple_page_cta_subtitle",
                    "See how a fully managed IR platform can reduce manual work, improve investor communication, and strengthen trust with the market."
                  )}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}>
                  <LangLink href="/book-demo" className="btn-primary">
                    {t("common_book_demo", "Book a Demo")} <ArrowRight size={16} />
                  </LangLink>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}

