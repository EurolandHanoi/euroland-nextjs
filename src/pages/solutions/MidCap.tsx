"use client";

// Euroland IR — Mid Cap Companies page

import CapPageLayout from "@/components/layout/CapPageLayout";

export default function MidCap() {
  return (
    <CapPageLayout
      breadcrumbLabel="For Listed Companies"
      heroLabel="Mid Cap Companies"
      heroTitle="Institutional-grade IR, without the complexity"
      heroSubtitle="A sophisticated IR platform for mid cap companies managing growing investor bases, multi-market listings, and increasing regulatory demands."
      challengesLabel="The Challenges"
      challengesTitle="What mid cap companies face"
      challenges={[
        { icon: "", title: "Growing investor base", description: "" },
        { icon: "", title: "Multi-market complexity", description: "" },
        { icon: "", title: "Analyst relations", description: "" },
        { icon: "", title: "Regulatory demands", description: "" },
      ]}
      howWeHelpLabel="How We Help"
      howWeHelpTitle="Sophisticated IR, built to scale"
      howWeHelpIntro="Mid cap companies need more than the basics — but don't want the overhead of enterprise-level complexity. Euroland IR gives you a full-featured IR operation that your team can run efficiently, with the depth to satisfy institutional investors and analysts."
      howWeHelpBullets={[
        "Full IR platform with advanced content management",
        "Institutional investor targeting and CRM",
        "Multi-market regulatory disclosure management",
        "Earnings management: webcasts, presentations, transcripts",
        "Analyst consensus tracking and estimates management",
        "Advanced analytics and investor intelligence",
      ]}
      capabilitiesLabel="What You Can Do"
      capabilitiesTitle="Operate at an institutional level"
      capabilities={[
        {
          icon: "",
          title: "Engage institutional investors at scale",
          description: "Identify, target, and manage relationships with institutional investors across multiple markets — all from a single CRM.",
        },
        {
          icon: "",
          title: "Manage complex results seasons",
          description: "Coordinate earnings presentations, live webcasts, analyst Q&A, and transcript publication without missing a beat.",
        },
        {
          icon: "",
          title: "Stay ahead of analysts",
          description: "Track consensus estimates, manage analyst coverage, and ensure your guidance is reflected accurately in the market.",
        },
        {
          icon: "",
          title: "Disclose across multiple markets",
          description: "Publish regulatory announcements to multiple exchanges simultaneously, with jurisdiction-specific workflows and a full audit trail.",
        },
        {
          icon: "",
          title: "Demonstrate ESG leadership",
          description: "Report on sustainability with the depth and structure that institutional investors and proxy advisors expect.",
        },
        {
          icon: "",
          title: "Measure the impact of your IR",
          description: "Understand how your investor base is evolving, which messages are resonating, and where to focus your next roadshow.",
        },
      ]}
      processLabel="Getting Started"
      processTitle="Onboarding built around your team"
      process={[
        { step: "01", title: "Needs assessment", description: "" },
        { step: "02", title: "Platform configuration", description: "" },
        { step: "03", title: "Data migration", description: "" },
        { step: "04", title: "Team training", description: "" },
        { step: "05", title: "", description: "" },
        { step: "06", title: "", description: "" },
      ]}
      testimonialQuote="The platform gave us the depth we needed to manage a growing institutional investor base without adding headcount. It's become the backbone of our entire IR operation."
      testimonialAuthor="Director of Investor Relations"
      testimonialRole="Mid cap company, Euronext Paris"
    />
  );
}
