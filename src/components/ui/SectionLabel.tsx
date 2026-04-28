// Euroland IR — SectionLabel
// Small uppercase label with blue accent underline, used above section headings.
// Uses a darker accessible blue on light backgrounds and the brighter brand cyan on dark backgrounds.

interface SectionLabelProps {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}

export default function SectionLabel({ children, light = false, className = "" }: SectionLabelProps) {
  const labelColor = light ? "#327AB1" : "#28628F";
  const barColor = light ? "#327AB1" : "#28628F";

  return (
    <div className={`mb-4 ${className}`}>
      <div style={{ display: "inline-block" }}>
        <span
          style={{
            color: labelColor,
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.96px",
            textTransform: "uppercase",
            lineHeight: "24px",
            display: "block",
          }}
        >
          {children}
        </span>
        <div
          style={{
            backgroundColor: barColor,
            height: "2px",
            width: "25%",
            marginTop: "6px",
          }}
        />
      </div>
    </div>
  );
}
