import Link from "next/link";
import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

import { Logo } from "@/components/Logo";
import { navigation, siteConfig } from "@/lib/site";

const socials = [
  { href: siteConfig.social.instagram, label: "Instagram", icon: Instagram },
  { href: siteConfig.social.x, label: "X", icon: Twitter },
  { href: siteConfig.social.linkedin, label: "LinkedIn", icon: Linkedin },
  { href: siteConfig.social.youtube, label: "YouTube", icon: Youtube }
];

export default function Footer() {
  return (
    <footer className="pb-8 pt-6">
      <div className="shell">
        <div className="premium-gradient overflow-hidden rounded-[36px] border border-white/[0.08] px-6 py-10 text-white shadow-2xl md:px-10 md:py-12">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <Logo theme="dark" />
              <h2 className="mt-8 max-w-xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
                Build a company presence that makes competitors feel dated.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-white/70">
                Influence Axis designs premium brand, content, performance, and
                website systems for teams that want sharper positioning and cleaner
                digital growth.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/[0.42]">
                  Navigation
                </p>
                <div className="mt-4 flex flex-col gap-3">
                  {navigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-sm text-white/[0.74] transition hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Link
                    href="/privacy-policy"
                    className="text-sm text-white/[0.74] transition hover:text-white"
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/[0.42]">
                  Connect
                </p>
                <div className="mt-4 text-sm text-white/[0.74]">
                  <p>{siteConfig.email}</p>
                </div>

                <div className="mt-6 flex gap-3">
                  {socials.map((social) => {
                    const Icon = social.icon;

                    return (
                      <Link
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/75 transition hover:bg-white/10 hover:text-white"
                        aria-label={social.label}
                      >
                        <Icon className="h-5 w-5" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/[0.42] md:flex-row md:items-center md:justify-between">
            <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
            <p>{siteConfig.email}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
