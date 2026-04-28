import redirectTo from "@/app/[lang]/_helpers/redirectPage";

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  return redirectTo(params, (lang) => `/${lang}/legal/cookies`);
}
