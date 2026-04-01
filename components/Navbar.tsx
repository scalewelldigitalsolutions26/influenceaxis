"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Logo } from "@/components/Logo";
import { OpenQuoteButton } from "@/components/OpenQuoteButton";
import { navigation } from "@/lib/site";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6 md:pt-5">
      <div className="shell">
        <div className="rounded-[28px] border border-white/70 bg-white/72 px-4 py-3 shadow-[0_24px_80px_rgba(7,17,31,0.12)] backdrop-blur-2xl md:px-5">
          <div className="flex items-center justify-between gap-4">
            <Logo showDescriptor={false} />

            <nav className="hidden items-center gap-2 lg:flex">
              {navigation.map((item) => {
                const isActive =
                  item.href === "/" ? pathname === item.href : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                      isActive
                        ? "bg-[#07111f] text-white shadow-[0_12px_24px_rgba(7,17,31,0.18)]"
                        : "text-slate hover:bg-white/70 hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <OpenQuoteButton className="px-5 py-3">Get Quote</OpenQuoteButton>
            </div>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/5 bg-white/65 text-ink lg:hidden"
              onClick={() => setIsMenuOpen((current) => !current)}
              aria-label="Toggle navigation"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {isMenuOpen ? (
            <div className="mt-4 border-t border-black/5 pt-4 lg:hidden">
              <nav className="flex flex-col gap-3">
                {navigation.map((item) => {
                  const isActive =
                    item.href === "/" ? pathname === item.href : pathname.startsWith(item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`rounded-2xl px-4 py-3 text-sm font-medium ${
                        isActive
                          ? "bg-[#07111f] text-white"
                          : "bg-white/55 text-slate"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <OpenQuoteButton className="mt-2 w-full">Get Quote</OpenQuoteButton>
              </nav>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
