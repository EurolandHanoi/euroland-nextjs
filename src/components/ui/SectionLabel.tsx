// Euroland IR — SectionLabel
// Small uppercase label with underline, used above section headings.
// Uses the corporate label blue on light backgrounds and the brighter accent blue on dark backgrounds.

interface SectionLabelProps {
  children: React.ReactNode;
  light?: boolean;
  centered?: boolean;
  className?: string;
}

export default function SectionLabel({ children, light = false, centered = false, className = "" }: SectionLabelProps) {
  const labelColor = light ? "var(--label-blue-dark)" : "var(--label-blue-light)";
  const barColor = light ? "var(--label-blue-dark)" : "var(--label-blue-light)";

  return (
    <div className={`mb-4 ${className}`}>
      <div
        style={{
          display: centered ? "block" : "inline-block",
          width: centered ? "100%" : "fit-content",
          maxWidth: "100%",
        }}
      >
        <span
          style={{
            color: labelColor,
            fontSize: "var(--fs-sm)",
            fontWeight: 400,
            letterSpacing: "var(--ls-label)",
            textTransform: "uppercase",
            lineHeight: "var(--lh-base)",
            display: "block",
            textAlign: centered ? "center" : "left",
          }}
        >
          {children}
        </span>
        <div
          style={{
            backgroundColor: barColor,
            height: "2px",
            width: centered ? "64px" : "25%",
            marginTop: "12px",
            marginLeft: centered ? "auto" : "0",
            marginRight: centered ? "auto" : "0",
          }}
        />
      </div>
    </div>
  );
}
