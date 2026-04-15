import Link from "next/link";

interface BrandLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function BrandLogo({ size = "md", className = "" }: BrandLogoProps) {
  const sizes = {
    sm: { text: "text-lg", dot: "w-1.5 h-1.5" },
    md: { text: "text-2xl", dot: "w-2 h-2" },
    lg: { text: "text-4xl", dot: "w-2.5 h-2.5" },
  };

  const s = sizes[size];

  return (
    <Link href="/" className={`inline-flex items-center gap-0 group ${className}`}>
      <span
        className={`font-bold tracking-tight text-primary-500 ${s.text} transition-opacity group-hover:opacity-80`}
        style={{ fontFamily: "Inter, system-ui, sans-serif", letterSpacing: "-0.03em" }}
      >
        you
      </span>
      <span
        className={`font-bold tracking-tight text-primary-500 ${s.text} transition-opacity group-hover:opacity-80`}
        style={{ fontFamily: "Inter, system-ui, sans-serif", letterSpacing: "-0.03em" }}
      >
        .
      </span>
      <span
        className={`font-bold tracking-tight text-accent-400 ${s.text} transition-opacity group-hover:opacity-80`}
        style={{ fontFamily: "Inter, system-ui, sans-serif", letterSpacing: "-0.03em" }}
      >
        learning
      </span>
    </Link>
  );
}

// SVG-based inline version for use in metadata / OG images
export function BrandLogoSVG({ width = 160, height = 32 }: { width?: number; height?: number }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 160 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="0"
        y="24"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="700"
        fontSize="24"
        letterSpacing="-0.03em"
        fill="#02462E"
      >
        you
      </text>
      <text
        x="50"
        y="24"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="700"
        fontSize="24"
        letterSpacing="-0.03em"
        fill="#02462E"
      >
        .
      </text>
      <text
        x="58"
        y="24"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="700"
        fontSize="24"
        letterSpacing="-0.03em"
        fill="#FEC700"
      >
        learning
      </text>
    </svg>
  );
}
