import { redirect } from "next/navigation";

export default async function redirectTo(
  paramsPromise: Promise<{ lang: string }>,
  buildPath: (lang: string) => string
) {
  const { lang } = await paramsPromise;
  redirect(buildPath(lang));
}
