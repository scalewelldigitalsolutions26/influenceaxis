import Link from "next/link";

import { BrandMark } from "@/components/BrandMark";
import { siteConfig } from "@/lib/site";

type LogoProps = {
  compact?: boolean;
  theme?: "light" | "dark";
  showDescriptor?: boolean;
};

export function Logo({
  compact = false,
  theme = "light",
  showDescriptor = true
}: LogoProps) {
  const isDark = theme === "dark";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 text-sm font-semibold tracking-tight ${
        isDark ? "text-white" : "text-ink"
      }`}
      aria-label={`${siteConfig.name} home`}
    >
      <BrandMark className="h-12 w-12 shrink-0" />
      {!compact && (
        showDescriptor ? (
          <span className="flex flex-col leading-none">
            <span
              className={`text-[0.68rem] uppercase tracking-[0.3em] ${
                isDark ? "text-white/45" : "text-slate"
              }`}
            >
              Growth Systems
            </span>
            <span
              className={`mt-1 text-[1.02rem] font-semibold ${
                isDark ? "text-white" : "text-ink"
              }`}
            >
              {siteConfig.name}
            </span>
          </span>
        ) : (
          <span className="relative inline-flex flex-col leading-none">
            <span className="text-[0.58rem] font-semibold uppercase tracking-[0.34em] text-[#9f4b41]/72">
              Growth Agency
            </span>
            <span className="mt-1 bg-[linear-gradient(135deg,#7a1f16_0%,#ab2f23_48%,#d14a34_100%)] bg-clip-text text-[0.98rem] font-semibold tracking-[0.08em] text-transparent sm:text-[1.06rem]">
              {siteConfig.name}
            </span>
            <span className="mt-2 h-px w-full bg-[linear-gradient(90deg,rgba(122,31,22,0.75),rgba(209,74,52,0.12))]" />
          </span>
        )
      )}
    </Link>
  );
}
