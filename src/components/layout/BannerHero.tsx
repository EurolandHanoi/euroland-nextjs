"use client";

import type { ReactNode } from "react";
import LangLink from "@/components/LangLink";
import SectionLabel from "@/components/ui/SectionLabel";

type BannerVariant = "solutions" | "resources" | "platform";

interface BannerHeroProps {
  variant?: BannerVariant;
  label: ReactNode;
  title: ReactNode;
  subtitle: ReactNode;
  backgroundImage?: string;
  overlay?: string;
  minHeight?: string;
  titleMaxWidth?: string;
  subtitleMaxWidth?: string;
  primaryCtaLabel?: ReactNode;
  primaryCtaHref?: string;
  secondaryCtaLabel?: ReactNode;
  secondaryCtaHref?: string;
  supportingCtaLabel?: ReactNode;
  supportingCtaHref?: string;
}

export default function BannerHero({
  variant = "solutions",
  label,
  title,
  subtitle,
  backgroundImage,
  overlay,
  minHeight = "440px",
  titleMaxWidth = "720px",
  subtitleMaxWidth = "560px",
  primaryCtaLabel,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  supportingCtaLabel,
  supportingCtaHref,
}: BannerHeroProps) {
  const sectionClassName = variant === "platform" ? "hero-dark" : "hero-navy";

  return (
    <section
      className={`${sectionClassName} banner-hero-section`}
      style={{
        minHeight,
        display: "flex",
        alignItems: "center",
        paddingTop: 0,
        position: "relative",
        overflow: "hidden",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundImage: backgroundImage
          ? `url('${backgroundImage}')`
          : "linear-gradient(160deg, rgb(13, 27, 42), rgb(14, 45, 74) 60%, rgb(8, 43, 69))",
      }}
    >
      <style>{`
        @media (max-width: 1023px) {
          .banner-hero-section { min-height: 400px !important; }
        }
        @media (max-width: 767px) {
          .banner-hero-section { min-height: 320px !important; }
          .banner-hero-container { padding: 96px 20px 64px !important; }
          .banner-hero-title { font-size: 32px !important; line-height: 40px !important; }
          .banner-hero-subtitle { font-size: 16px !important; line-height: 24px !important; }
        }
      `}</style>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: backgroundImage
            ? overlay ?? "rgba(8, 43, 69, 0.78)"
            : "linear-gradient(160deg, rgba(13, 27, 42, 0.92), rgba(14, 45, 74, 0.90) 60%, rgba(8, 43, 69, 0.94))",
          pointerEvents: "none",
        }}
      />
      <div
        className="container banner-hero-container"
        style={{
          maxWidth: "1536px",
          padding: "120px 48px 80px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ maxWidth: titleMaxWidth }}>
          <SectionLabel light>{label}</SectionLabel>
          <h1
            className="banner-hero-title type-h2"
            style={{
              fontSize: "48px",
              fontWeight: 300,
              lineHeight: "64px",
              letterSpacing: "-0.01em",
              color: "#ffffff",
              margin: "0 0 24px",
              maxWidth: titleMaxWidth,
            }}
          >
            {title}
          </h1>
          <div
            className="banner-hero-subtitle"
            style={{
              fontSize: "20px",
              fontWeight: 400,
              lineHeight: "28px",
              letterSpacing: "0.01em",
              color: "rgba(255,255,255,0.86)",
              maxWidth: subtitleMaxWidth,
              margin: primaryCtaLabel ? "0 0 40px" : 0,
            }}
          >
            {subtitle}
          </div>
          {primaryCtaLabel && primaryCtaHref && (
            <div>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
                <LangLink href={primaryCtaHref} className="btn-primary">
                  {primaryCtaLabel}
                </LangLink>
                {secondaryCtaLabel && secondaryCtaHref && (
                  <LangLink href={secondaryCtaHref} className="btn-secondary">
                    {secondaryCtaLabel}
                  </LangLink>
                )}
              </div>
              {supportingCtaLabel && supportingCtaHref && (
                <div style={{ marginTop: "16px" }}>
                  <LangLink href={supportingCtaHref} className="btn-link-light">
                    {supportingCtaLabel}
                  </LangLink>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
