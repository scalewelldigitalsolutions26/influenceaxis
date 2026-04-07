import Image from "next/image";
import Link from "next/link";

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
  const heightClass = compact
    ? "h-7 sm:h-8"
    : showDescriptor
      ? "h-10 sm:h-12"
      : "h-8 sm:h-9";
  const shadowClass =
    theme === "dark" ? "drop-shadow-[0_18px_30px_rgba(0,0,0,0.32)]" : "";

  return (
    <Link href="/" className="inline-flex items-center" aria-label={`${siteConfig.name} home`}>
      <Image
        src="/influence-axis-logo.png"
        alt={siteConfig.name}
        width={3235}
        height={1212}
        sizes="(max-width: 640px) 140px, (max-width: 1024px) 180px, 220px"
        className={`${heightClass} w-auto shrink-0 object-contain ${shadowClass}`}
      />
    </Link>
  );
}
