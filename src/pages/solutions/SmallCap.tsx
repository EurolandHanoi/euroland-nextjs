"use client";

// Euroland IR — Small Cap Companies page

import CapPageLayout from "@/components/layout/CapPageLayout";

export default function SmallCap() {
  return (
    <CapPageLayout
      breadcrumbLabel="For Listed Companies"
      heroLabel="Small Cap Companies"
      heroTitle="Professional IR that grows with you"
      heroSubtitle="A complete IR presence that's fast to set up, easy to manage, and scales as your company grows. Built for small cap companies that take investor relations seriously."
      challengesLabel="The Challenges"
      challengesTitle="What small cap companies face"
      challenges={[
        { icon: "", title: "Limited IR bandwidth", description: "" },
        { icon: "", title: "Getting noticed", description: "" },
        { icon: "", title: "Inconsistent presentation", description: "" },
        { icon: "", title: "Earnings season pressure", description: "" },
      ]}
      howWeHelpLabel="How We Help"
      howWeHelpTitle="Everything you need, nothing you don't"
      howWeHelpIntro="Euroland IR gives small cap companies a professional, centralised IR operation — without the overhead of enterprise tools. The platform is designed to be managed by a single person, without sacrificing quality or compliance."
      howWeHelpBullets={[
        "Professional IR platform with full content management",
        "Earnings management: presentations, webcasts, and Q&A",
        "Investor targeting and CRM tools",
        "Regulatory disclosure with multi-market support",
        "Analytics and investor intelligence",
        "ESG and sustainability reporting",
      ]}
      capabilitiesLabel="What You Can Do"
      capabilitiesTitle="Run a full IR programme with a small team"
      capabilities={[
        {
          icon: "",
          title: "Manage your full IR calendar",
          description: "Handle results day, roadshows, and investor events from a single platform — without needing to juggle multiple tools or agencies.",
        },
        {
          icon: "",
          title: "Reach the right investors",
          description: "Identify and target institutional investors that match your company's profile, and track your relationships over time.",
        },
        {
          icon: "",
          title: "Deliver a consistent investor experience",
          description: "Present a polished, professional IR presence that builds trust with investors regardless of your team size.",
        },
        {
          icon: "",
          title: "Publish results with confidence",
          description: "Manage earnings presentations, webcasts, and analyst Q&A in one place — and distribute them to the right audiences automatically.",
        },
        {
          icon: "",
          title: "Stay compliant across markets",
          description: "Publish regulatory announcements to multiple exchanges from a single workflow, with a full audit trail for every disclosure.",
        },
        {
          icon: "",
          title: "Demonstrate your ESG progress",
          description: "Report on sustainability in a structured, investor-friendly format that meets current and emerging regulatory expectations.",
        },
      ]}
      processLabel="Getting Started"
      processTitle="From sign-up to live in days"
      process={[
        { step: "01", title: "Discovery call", description: "" },
        { step: "02", title: "Platform setup", description: "" },
        { step: "03", title: "Team onboarding", description: "" },
        { step: "04", title: "Go live", description: "" },
        { step: "05", title: "", description: "" },
        { step: "06", title: "", description: "" },
      ]}
      testimonialQuote="Euroland IR has made it possible for our two-person IR team to deliver a programme that punches well above our weight. The tools are intuitive and the support is excellent."
      testimonialAuthor="Head of Investor Relations"
      testimonialRole="Small cap company, London Stock Exchange"
    />
  );
}
