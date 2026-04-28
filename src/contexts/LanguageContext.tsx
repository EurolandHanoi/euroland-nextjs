"use client";

// Euroland IR — Language / i18n Context
// Supports 10 locales loaded lazily from local JSON files in /public/locales.
// Language is driven by the [lang] URL segment; switching language navigates to /{newLang}/...
// Usage: const { t, lang, setLang, loading } = useLanguage();
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { useRouter, usePathname } from "next/navigation";
import { localLocaleOverrides } from "@/locales/localOverrides";

export type LangCode =
  | "en"
  | "fr"
  | "es"
  | "pt"
  | "de"
  | "ar"
  | "zh"
  | "zh-TW"
  | "ko"
  | "ja";

export interface Language {
  code: LangCode;
  nativeLabel: string;
  dir?: "rtl" | "ltr";
}

export const LANGUAGES: Language[] = [
  { code: "en", nativeLabel: "English" },
  { code: "fr", nativeLabel: "Français" },
  { code: "es", nativeLabel: "Español" },
  { code: "pt", nativeLabel: "Português" },
  { code: "de", nativeLabel: "Deutsch" },
  { code: "ar", nativeLabel: "العربية", dir: "rtl" },
  { code: "zh", nativeLabel: "中文 (简体)" },
  { code: "zh-TW", nativeLabel: "中文 (繁體)" },
  { code: "ko", nativeLabel: "한국어" },
  { code: "ja", nativeLabel: "日本語" },
];

export const SUPPORTED_LANG_CODES = LANGUAGES.map(l => l.code);

const LOCALE_V = "3";
const LOCALE_URLS: Record<LangCode, string> = {
  en: `/locales/en.json?v=${LOCALE_V}`,
  fr: `/locales/fr.json?v=${LOCALE_V}`,
  es: `/locales/es.json?v=${LOCALE_V}`,
  pt: `/locales/pt.json?v=${LOCALE_V}`,
  de: `/locales/de.json?v=${LOCALE_V}`,
  ar: `/locales/ar.json?v=${LOCALE_V}`,
  zh: `/locales/zh.json?v=${LOCALE_V}`,
  "zh-TW": `/locales/zh-TW.json?v=${LOCALE_V}`,
  ko: `/locales/ko.json?v=${LOCALE_V}`,
  ja: `/locales/ja.json?v=${LOCALE_V}`,
};

type Translations = Record<string, string>;
const cache: Partial<Record<string, Translations>> = {};
function cacheKey(code: LangCode) { return `${code}@v${LOCALE_V}`; }

interface LanguageContextValue {
  lang: LangCode;
  setLang: (code: LangCode) => void;
  t: (key: string, fallback?: string) => string;
  loading: boolean;
  dir: "ltr" | "rtl";
  // legacy compat
  language: LangCode;
  setLanguage: (code: LangCode) => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
  t: k => k,
  loading: false,
  dir: "ltr",
  language: "en",
  setLanguage: () => {},
});

export function LanguageProvider({
  children,
  initialLang = "en",
}: {
  children: React.ReactNode;
  initialLang?: string;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const resolvedInitial = (
    SUPPORTED_LANG_CODES.includes(initialLang as LangCode)
      ? initialLang
      : "en"
  ) as LangCode;

  const [lang, setLangState] = useState<LangCode>(resolvedInitial);
  const [translations, setTranslations] = useState<Translations>({});
  const [loading, setLoading] = useState(true);

  const loadLocale = useCallback(async (code: LangCode) => {
    const ck = cacheKey(code);
    if (cache[ck]) {
      setTranslations(cache[ck]!);
      setLoading(false);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(LOCALE_URLS[code]);
      const data: Translations = await res.json();
      const merged = { ...data, ...(localLocaleOverrides[code] ?? {}) };
      cache[ck] = merged;
      setTranslations(merged);
    } catch (e) {
      const fallback = localLocaleOverrides[code] ?? {};
      if (Object.keys(fallback).length) {
        cache[ck] = fallback;
        setTranslations(fallback);
      }
      console.warn(`[i18n] Failed to load locale ${code}`, e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadLocale(lang);
    const langMeta = LANGUAGES.find(l => l.code === lang);
    document.documentElement.dir = langMeta?.dir ?? "ltr";
    document.documentElement.lang = lang;
  }, [lang, loadLocale]);

  // When language changes, navigate to the same page under the new lang prefix
  const setLang = useCallback((code: LangCode) => {
    if (code === lang) return;
    setLangState(code);
    // Replace the current lang segment in the URL
    // pathname is like /en/solutions → /de/solutions
    const segments = (pathname ?? "/").split("/");
    // segments[0] = "", segments[1] = lang code, segments[2..] = rest
    if (segments.length >= 2 && SUPPORTED_LANG_CODES.includes(segments[1] as LangCode)) {
      segments[1] = code;
    } else {
      segments.splice(1, 0, code);
    }
    const newPath = segments.join("/") || "/";
    router.push(newPath);
  }, [lang, pathname, router]);

  const t = useCallback(
    (key: string, fallback?: string): string => {
      return translations[key] ?? fallback ?? key;
    },
    [translations]
  );

  const dir = (LANGUAGES.find(l => l.code === lang)?.dir ?? "ltr") as
    | "ltr"
    | "rtl";

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        t,
        loading,
        dir,
        language: lang,
        setLanguage: setLang,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
