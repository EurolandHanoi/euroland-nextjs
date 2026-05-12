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
  minHeight = "580px",
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
  const showCtas = variant !== "solutions" && variant !== "platform" && primaryCtaLabel && primaryCtaHref;
  const desktopHeight = variant === "resources" ? "500px" : minHeight;
  const desktopTopPadding = variant === "resources" ? "128px" : "160px";
  const tabletTopPadding = variant === "resources" ? "80px" : "96px";
  const mobileTopPadding = variant === "resources" ? "80px" : "96px";

  return (
    <section
      className={`${sectionClassName} banner-hero-section`}
      style={{
        height: desktopHeight,
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
          .banner-hero-section { height: auto !important; min-height: 400px !important; }
          .banner-hero-container { padding: ${tabletTopPadding} 32px 64px !important; }
        }
        @media (max-width: 767px) {
          .banner-hero-section { height: auto !important; min-height: 320px !important; }
          .banner-hero-container { padding: 56px 20px 40px !important; }
          .banner-hero-title {
            font-size: var(--fs-lg) !important;
            line-height: var(--lh-lg) !important;
            max-width: min(100%, 12ch) !important;
            width: 100% !important;
            display: block !important;
            overflow-wrap: anywhere;
            word-break: break-word;
            hyphens: auto;
          }
          .banner-hero-subtitle {
            font-size: var(--fs-base) !important;
            line-height: var(--lh-base) !important;
            max-width: min(100%, 34ch) !important;
            width: 100% !important;
            display: block !important;
            overflow-wrap: anywhere;
            word-break: break-word;
            hyphens: auto;
          }
        }
        @media (max-width: 390px) {
          .banner-hero-title {
            max-width: min(100%, 10ch) !important;
          }
          .banner-hero-subtitle {
            max-width: min(100%, 28ch) !important;
          }
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
          height: "100%",
          boxSizing: "border-box",
          padding: `${desktopTopPadding} 48px 96px`,
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ maxWidth: titleMaxWidth, width: "100%" }}>
          <SectionLabel light>{label}</SectionLabel>
          <h1
            className="banner-hero-title type-h2"
            style={{
              fontSize: "var(--fs-3xl)",
              fontWeight: 600,
              lineHeight: "var(--lh-3xl)",
              letterSpacing: "-0.01em",
              color: "#ffffff",
              margin: "0 0 32px",
              maxWidth: titleMaxWidth,
              width: "100%",
              whiteSpace: "normal",
              overflowWrap: "anywhere",
              wordBreak: "break-word",
            }}
          >
            {title}
          </h1>
          <div
            className="banner-hero-subtitle"
            style={{
              fontSize: "var(--fs-md)",
              fontWeight: 400,
              lineHeight: "var(--lh-md)",
              letterSpacing: "0.01em",
              color: "rgba(255,255,255,0.86)",
              maxWidth: subtitleMaxWidth,
              margin: showCtas ? "0 0 32px" : 0,
              width: "100%",
              whiteSpace: "normal",
              overflowWrap: "anywhere",
              wordBreak: "break-word",
            }}
          >
            {subtitle}
          </div>
          {showCtas && (
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

