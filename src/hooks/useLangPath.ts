"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useCallback } from "react";

/**
 * Returns a function that prepends the current language code to any internal path.
 * Usage: const lp = useLangPath(); <Link href={lp("/solutions")}>
 * lp("/solutions") → "/en/solutions" (or "/de/solutions" etc.)
 */
export function useLangPath() {
  const { lang } = useLanguage();
  return useCallback(
    (path: string) => {
      if (!path.startsWith("/")) return path;
      return `/${lang}${path}`;
    },
    [lang]
  );
}
