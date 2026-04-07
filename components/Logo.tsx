import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/lib/site";

type LogoProps = {
  compact?: boolean;
  theme?: "light" | "dark";
  showDescriptor?: boolean;
  showBrandText?: boolean;
};

export function Logo({
  compact = false,
  theme = "light",
  showDescriptor = true,
  showBrandText = false
}: LogoProps) {
  const heightClass = compact
    ? "h-7 sm:h-8"
    : showDescriptor
      ? "h-10 sm:h-12"
      : "h-8 sm:h-9";
  const shadowClass =
    theme === "dark" ? "drop-shadow-[0_18px_30px_rgba(0,0,0,0.32)]" : "";
  const labelTone =
    theme === "dark" ? "text-white/45" : "text-[#9c5a4e]/70";
  const wordmarkTone =
    theme === "dark"
      ? "text-white"
      : "bg-[linear-gradient(135deg,#5f221c_0%,#8a2e22_42%,#c34a35_100%)] bg-clip-text text-transparent";
  const dividerTone =
    theme === "dark"
      ? "bg-[linear-gradient(90deg,rgba(255,255,255,0.52),rgba(255,255,255,0.08))]"
      : "bg-[linear-gradient(90deg,rgba(95,34,28,0.72),rgba(195,74,53,0.14))]";

  return (
    <Link
      href="/"
      className={`inline-flex items-center ${showBrandText ? "gap-3" : ""}`}
      aria-label={`${siteConfig.name} home`}
    >
      <Image
        src="/influence-axis-logo.png"
        alt={siteConfig.name}
        width={3235}
        height={1212}
        sizes="(max-width: 640px) 140px, (max-width: 1024px) 180px, 220px"
        className={`${heightClass} w-auto shrink-0 object-contain ${shadowClass}`}
      />
      {showBrandText ? (
        <span className="hidden min-[520px]:flex flex-col leading-none">
          <span className={`text-[0.56rem] font-medium uppercase tracking-[0.34em] ${labelTone}`}>
            Brand & Growth
          </span>
          <span className={`mt-1 text-[0.98rem] font-semibold uppercase tracking-[0.2em] ${wordmarkTone}`}>
            {siteConfig.name}
          </span>
          <span className={`mt-2 h-px w-full ${dividerTone}`} />
        </span>
      ) : null}
    </Link>
  );
}
