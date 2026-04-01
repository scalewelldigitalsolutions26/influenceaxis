import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { AnimatedInView } from "@/components/AnimatedInView";
import BlogCard from "@/components/BlogCard";
import Hero from "@/components/Hero";
import { OpenQuoteButton } from "@/components/OpenQuoteButton";
import ServiceCard from "@/components/ServiceCard";
import { blogPosts } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";
import { services } from "@/lib/services";
import { companyStats, valuePillars } from "@/lib/site";

const competitiveAdvantages = [
  "Sharper market positioning before execution begins",
  "Premium creative direction without bloated agency process",
  "Clearer conversion paths across website, content, and paid media"
];

const influenceAxisLayers = [
  {
    title: "Narrative Layer",
    description:
      "Positioning, messaging, and reputation cues that make the brand feel established before the first sales conversation."
  },
  {
    title: "Attention Layer",
    description:
      "Paid media, influencer campaigns, memes, and multiplatform distribution designed to earn relevance, not just impressions."
  },
  {
    title: "Conversion Layer",
    description:
      "Sharper landing journeys, cleaner web experiences, and content structure that turn interest into inquiry."
  },
  {
    title: "Scale Layer",
    description:
      "Reporting rhythms, creative systems, and iteration loops that keep performance improving without chaos."
  }
];

export const metadata = buildMetadata({
  title: "Influence Axis - We Build Brands That Dominate Digital",
  description:
    "Premium digital agency for branding, performance marketing, content, SEO, and web development."
});

export default function HomePage() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <>
      <Hero />

      <section className="section-space">
        <div className="shell">
          <div className="grid gap-10 xl:grid-cols-[0.74fr_1.26fr]">
            <AnimatedInView className="panel ambient-orb p-8 md:p-10">
              <p className="eyebrow">Services</p>
              <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
                A cleaner growth stack for brands that want to lead, not blend in.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate">
                We combine brand clarity, digital execution, and high-accountability
                growth systems so every touchpoint feels more premium than the category norm.
              </p>

              <div className="mt-8 grid gap-4">
                {competitiveAdvantages.map((item, index) => (
                  <div
                    key={item}
                    className="rounded-[24px] border border-black/5 bg-white/70 px-5 py-4"
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate">
                      0{index + 1}
                    </p>
                    <p className="mt-3 text-base leading-7 text-ink">{item}</p>
                  </div>
                ))}
              </div>

              <Link href="/services" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink transition hover:gap-3 hover:text-accent">
                Explore all services <ArrowUpRight className="h-4 w-4" />
              </Link>
            </AnimatedInView>

            <div className="grid gap-6 md:grid-cols-2">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.slug}
                  service={service}
                  index={index}
                  delay={Math.min(index * 0.05, 0.25)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="shell">
          <div className="panel-dark premium-gradient overflow-hidden p-8 md:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr]">
              <AnimatedInView className="max-w-2xl">
                <p className="eyebrow border-white/[0.14] bg-white/5 text-white/[0.68]">
                  About Us
                </p>
                <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-5xl">
                  We make ambitious companies look more established, more credible, and more conversion-ready.
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/[0.72]">
                  Influence Axis blends strategic clarity, polished creative direction,
                  and performance accountability. We help founders and marketing leaders
                  move from fragmented execution to a premium brand and growth system.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/about" className="button-primary bg-white text-ink hover:bg-white/92">
                    Read More
                  </Link>
                  <Link
                    href="/contact"
                    className="button-secondary border-white/15 bg-white/5 text-white hover:border-white/35"
                  >
                    Talk to our team
                  </Link>
                </div>
              </AnimatedInView>

              <div className="grid gap-5">
                {valuePillars.map((pillar, index) => (
                  <AnimatedInView
                    key={pillar.title}
                    delay={index * 0.08}
                    className="rounded-[28px] border border-white/10 bg-white/5 p-6 md:p-7"
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/[0.42]">
                      Pillar 0{index + 1}
                    </p>
                    <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-white/70">
                      {pillar.description}
                    </p>
                  </AnimatedInView>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="shell">
          <div className="grid gap-8 xl:grid-cols-[0.96fr_1.04fr]">
            <AnimatedInView className="panel-dark premium-gradient ambient-orb overflow-hidden p-8 md:p-10">
              <p className="eyebrow border-white/[0.14] bg-white/5 text-white/[0.68]">
                The Influence Axis
              </p>
              <h2 className="mt-6 max-w-2xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
                From attention to authority in one connected operating system.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/[0.72]">
                The strongest brands do not treat creative, media, web, and conversion
                as separate projects. We connect them so every visible layer reinforces
                the next one.
              </p>

              <div className="relative mx-auto mt-10 aspect-square w-full max-w-[22rem]">
                <div className="absolute inset-0 rounded-full border border-white/10" />
                <div className="absolute inset-[11%] rounded-full border border-white/10" />
                <div className="absolute inset-[22%] rounded-full border border-white/10" />
                <div className="absolute inset-[34%] rounded-full border border-white/10 bg-white/[0.03]" />

                <div className="absolute left-1/2 top-[13%] -translate-x-1/2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/76 backdrop-blur">
                  Reputation
                </div>
                <div className="absolute right-[4%] top-1/2 -translate-y-1/2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/76 backdrop-blur">
                  Demand
                </div>
                <div className="absolute bottom-[12%] left-1/2 -translate-x-1/2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/76 backdrop-blur">
                  Conversion
                </div>
                <div className="absolute left-[3%] top-1/2 -translate-y-1/2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/76 backdrop-blur">
                  Content
                </div>

                <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-white/15 bg-[radial-gradient(circle,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] text-center shadow-[0_18px_40px_rgba(0,0,0,0.24)] backdrop-blur">
                  <span className="text-[0.55rem] font-semibold uppercase tracking-[0.34em] text-white/52">
                    Influence
                  </span>
                  <span className="mt-2 text-lg font-semibold tracking-[0.16em] text-white">
                    AXIS
                  </span>
                </div>
              </div>
            </AnimatedInView>

            <div className="grid gap-6 md:grid-cols-2">
              {influenceAxisLayers.map((layer, index) => (
                <AnimatedInView
                  key={layer.title}
                  delay={Math.min(index * 0.07, 0.21)}
                  className="panel ambient-orb p-7 md:p-8"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate">
                    Layer 0{index + 1}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                    {layer.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-slate">
                    {layer.description}
                  </p>
                </AnimatedInView>
              ))}

              <AnimatedInView className="panel ambient-orb p-7 md:col-span-2 md:p-8">
                <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="eyebrow">Impact Markers</p>
                    <h3 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">
                      A premium presence should signal scale before the numbers are explained.
                    </h3>
                  </div>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition hover:gap-3 hover:text-accent"
                  >
                    See how we work <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {companyStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-[24px] border border-black/5 bg-white/72 px-5 py-6"
                    >
                      <p className="text-3xl font-semibold tracking-tight text-ink">
                        {stat.value}
                      </p>
                      <p className="mt-3 text-sm uppercase tracking-[0.22em] text-slate">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </AnimatedInView>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="shell">
          <div className="grid gap-8 xl:grid-cols-[0.82fr_1.18fr]">
            <AnimatedInView className="panel ambient-orb p-8 md:p-10">
              <p className="eyebrow">Insights</p>
              <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
                Thoughtful content for teams that care about brand quality and growth discipline.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate">
                Your blog should support authority, not just fill a page. These sample posts
                show how the editorial layer can match the premium tone of the rest of the site.
              </p>
              <Link href="/blog" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink transition hover:gap-3 hover:text-accent">
                Visit blog <ArrowUpRight className="h-4 w-4" />
              </Link>
            </AnimatedInView>

            <div className="grid gap-6 lg:grid-cols-3">
              {latestPosts.map((post, index) => (
                <BlogCard key={post.slug} post={post} delay={index * 0.08} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="shell">
          <AnimatedInView className="panel-dark premium-gradient overflow-hidden px-8 py-10 md:px-12 md:py-14">
            <div className="grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-end">
              <div>
                <p className="eyebrow border-white/[0.14] bg-white/5 text-white/[0.68]">
                  Get Quote
                </p>
                <h2 className="mt-6 max-w-2xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
                  Ready to build a website and brand system that beats the competition on first impression?
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/[0.72]">
                  We help companies sharpen positioning, improve conversion paths, and
                  create a digital presence that feels unmistakably more premium than
                  the rest of the market.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
                <OpenQuoteButton className="bg-white text-ink hover:bg-white/92">
                  Get Quote
                </OpenQuoteButton>
                <Link
                  href="/contact"
                  className="button-secondary border-white/15 bg-white/5 text-white hover:border-white/35"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </AnimatedInView>
        </div>
      </section>
    </>
  );
}
