import { redirect } from "next/navigation";

export default async function AnalyticsEarningsRedirect({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  redirect(`/${lang}/platform`);
}
