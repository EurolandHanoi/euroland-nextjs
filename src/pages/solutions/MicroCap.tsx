"use client";

// Euroland IR — Micro Cap Companies page

import CapPageLayout from "@/components/layout/CapPageLayout";

export default function MicroCap() {
  return (
    <CapPageLayout
      breadcrumbLabel="For Listed Companies"
      heroLabel="Micro Cap Companies"
      heroTitle="Professional IR, built for where you are now"
      heroSubtitle="Entry-level IR infrastructure designed for newly listed and very small companies. Simple to set up, easy to run, and built on the same platform used by 1,400+ listed companies worldwide."
      challengesLabel="The Challenges"
      challengesTitle="What micro cap companies face"
      challenges={[
        { icon: "", title: "No dedicated IR team", description: "" },
        { icon: "", title: "Limited analyst coverage", description: "" },
        { icon: "", title: "Budget constraints", description: "" },
        { icon: "", title: "Credibility gap", description: "" },
      ]}
      howWeHelpLabel="How We Help"
      howWeHelpTitle="The essentials, done properly"
      howWeHelpIntro="Euroland IR gives micro cap companies a professional IR foundation — without the complexity or cost of enterprise tools. Everything is pre-configured for best practice, so you can focus on running your business."
      howWeHelpBullets={[
        "Professional IR platform, live within days",
        "Regulatory disclosure management with audit trail",
        "Real-time stock and share data, always up to date",
        "Investor alert subscriptions and email notifications",
        "CSRD and ESG reporting templates",
        "Analytics to understand who is visiting your IR site",
      ]}
      capabilitiesLabel="What You Can Do"
      capabilitiesTitle="Build a credible IR presence from day one"
      capabilities={[
        {
          icon: "",
          title: "Look professional from day one",
          description: "Launch a fully compliant, investor-ready IR presence without needing an in-house IR team or technical resources.",
        },
        {
          icon: "",
          title: "Meet your disclosure obligations",
          description: "Publish regulatory announcements and filings with confidence, knowing every release is tracked and auditable.",
        },
        {
          icon: "",
          title: "Keep investors informed automatically",
          description: "Let investors subscribe to alerts so they never miss a material announcement — without any manual effort from you.",
        },
        {
          icon: "",
          title: "Show your ESG commitment",
          description: "Present structured sustainability data to investors and analysts, even at an early stage of your ESG journey.",
        },
        {
          icon: "",
          title: "Understand who is engaging with you",
          description: "See which investors are visiting your IR site and which content they care about, so you can focus your outreach.",
        },
        {
          icon: "",
          title: "Scale without switching platforms",
          description: "Start with what you need today and add capabilities as your company grows — all on the same platform.",
        },
      ]}
      processLabel="Getting Started"
      processTitle="Up and running in days, not months"
      process={[
        { step: "01", title: "Onboarding call", description: "" },
        { step: "02", title: "Site setup", description: "" },
        { step: "03", title: "Go live", description: "" },
        { step: "04", title: "Ongoing support", description: "" },
        { step: "05", title: "", description: "" },
        { step: "06", title: "", description: "" },
      ]}
      testimonialQuote="We went from no IR presence to a fully professional setup in less than a week. The platform handles everything we need at this stage of our journey."
      testimonialAuthor="Chief Financial Officer"
      testimonialRole="Micro cap company, Nordic market"
    />
  );
}
