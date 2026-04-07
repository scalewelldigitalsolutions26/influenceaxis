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
  const widthClass = compact
    ? "w-[8.5rem] sm:w-[9.5rem]"
    : showDescriptor
      ? "w-[13rem] sm:w-[15.5rem]"
      : "w-[10rem] sm:w-[12rem]";
  const shadowClass =
    theme === "dark" ? "drop-shadow-[0_18px_30px_rgba(0,0,0,0.32)]" : "";

  return (
    <Link href="/" className="inline-flex items-center" aria-label={`${siteConfig.name} home`}>
      <Image
        src="/influence-axis-logo.png"
        alt={siteConfig.name}
        width={6250}
        height={6250}
        sizes="(max-width: 640px) 160px, (max-width: 1024px) 190px, 248px"
        className={`h-auto ${widthClass} shrink-0 ${shadowClass}`}
      />
    </Link>
  );
}
