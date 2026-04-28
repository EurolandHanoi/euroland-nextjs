"use client";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import type { ComponentProps } from "react";

type LinkProps = ComponentProps<typeof Link>;

/**
 * LangLink — a drop-in replacement for next/link that automatically
 * prepends the current language code to internal paths.
 * External URLs (starting with http/https) are passed through unchanged.
 */
export function LangLink({ href, ...props }: LinkProps) {
  const { lang } = useLanguage();
  
  const resolvedHref = (() => {
    const h = typeof href === "string" ? href : href?.toString?.() ?? "/";
    if (h.startsWith("http") || h.startsWith("mailto") || h.startsWith("#")) {
      return h;
    }
    if (h.startsWith("/")) {
      return `/${lang}${h}`;
    }
    return h;
  })();

  return <Link href={resolvedHref} {...props} />;
}

export default LangLink;
