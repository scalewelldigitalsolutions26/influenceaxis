import Image from "next/image";
import Link from "next/link";

import { AnimatedInView } from "@/components/AnimatedInView";
import { OpenQuoteButton } from "@/components/OpenQuoteButton";
import { siteConfig } from "@/lib/site";
import { companyStats } from "@/lib/site";

const serviceHighlights = [
  "Positioning",
  "Content Systems",
  "Paid Growth",
  "Web Experiences"
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-14 pt-36 md:pb-24 md:pt-40">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1800&q=80"
          alt="A premium creative workspace backdrop"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(132deg,rgba(7,17,31,0.95)_0%,rgba(7,17,31,0.68)_48%,rgba(7,17,31,0.32)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_16%,rgba(240,160,122,0.2),transparent_22%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_86%,rgba(209,74,52,0.18),transparent_26%)]" />
      </div>

      <div className="shell relative z-10">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <AnimatedInView className="max-w-4xl">
            <p className="eyebrow border-white/15 bg-white/10 text-white/70">
              Premium Digital Agency
            </p>
            <h1 className="mt-8 text-5xl font-semibold tracking-tight text-white md:text-7xl md:leading-[0.98]">
              We build digital brands that look sharper, move faster, and convert harder.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/[0.72] md:text-xl">
              {siteConfig.name} helps ambitious companies align branding, content,
              performance, and web into a single growth system that feels premium at
              every touchpoint.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <OpenQuoteButton>Get Quote</OpenQuoteButton>
              <Link
                href="/services"
                className="button-secondary border-white/15 bg-white/10 text-white hover:border-white/40 hover:bg-white/14"
              >
                View Services
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-2">
              {serviceHighlights.map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-full border border-white/12 bg-white/[0.08] px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white/[0.72]"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </AnimatedInView>

          <div className="grid gap-5">
            <AnimatedInView className="panel-dark overflow-hidden p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/50">
                Designed to win trust
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Strategy, creative direction, and growth execution in one modern stack.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-white/70">
                No disconnected outputs. We build the kind of digital presence that
                makes your company feel more credible before the sales call even starts.
              </p>
            </AnimatedInView>

            <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-3">
              {companyStats.map((stat, index) => (
                <AnimatedInView
                  key={stat.label}
                  delay={index * 0.06}
                  className="rounded-[28px] border border-white/12 bg-white/10 p-5 shadow-[0_20px_60px_rgba(7,17,31,0.18)] backdrop-blur-xl"
                >
                  <p className="text-sm uppercase tracking-[0.22em] text-white/45">
                    {stat.label}
                  </p>
                  <p className="mt-4 text-3xl font-semibold text-white md:text-4xl">
                    {stat.value}
                  </p>
                </AnimatedInView>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
