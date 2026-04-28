"use client";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "next-themes";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "sonner";
import { use } from "react";

const SUPPORTED_LANGS = ["en", "ar", "de", "es", "fr", "ja", "ko", "pt", "zh-TW", "zh"];

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = use(params);
  const resolvedLang = SUPPORTED_LANGS.includes(lang) ? lang : "en";

  return (
    <LanguageProvider initialLang={resolvedLang}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
        <TooltipProvider>
          {children}
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}
