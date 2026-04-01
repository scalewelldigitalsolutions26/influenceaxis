import Link from "next/link";

import { AnimatedInView } from "@/components/AnimatedInView";
import { PageHeader } from "@/components/PageHeader";
import { OpenQuoteButton } from "@/components/OpenQuoteButton";
import { buildMetadata } from "@/lib/seo";
import { companyStats, valuePillars } from "@/lib/site";

const operatingModel = [
  {
    title: "Discovery and positioning",
    description:
      "We clarify audience, offer, category context, and the narrative your market should remember."
  },
  {
    title: "Creative systems",
    description:
      "We turn strategy into usable design, messaging, content, and website frameworks teams can actually operate."
  },
  {
    title: "Measured growth",
    description:
      "We connect execution to pipeline, conversion quality, and scalable decision-making."
  }
];

export const metadata = buildMetadata({
  title: "About Us",
  description:
    "Learn how Influence Axis combines strategy, creative direction, and performance execution for ambitious brands.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <section className="section-space pt-32 md:pt-36">
      <div className="shell">
        <PageHeader
          eyebrow="About Influence Axis"
          title="A modern agency built for companies that want cleaner, stronger digital growth."
          description="We partner with founders and marketing teams that need more than isolated campaigns. Our work aligns brand clarity, polished execution, and measurable growth into one operating system."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <AnimatedInView className="panel p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate">
              Company Overview
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">
              Premium by design. Practical by default.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate">
              Influence Axis exists to help ambitious teams look sharper, communicate
              better, and scale with less friction. We work across positioning,
              branding, content, performance, and web experience so every customer
              touchpoint feels intentional.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate">
              The result is not just a better website or cleaner campaigns. It is a
              more credible company presence, a stronger conversion engine, and a
              digital system your internal team can continue to build on.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <OpenQuoteButton>Start a project</OpenQuoteButton>
              <Link href="/services" className="button-secondary">
                Explore services
              </Link>
            </div>
          </AnimatedInView>

          <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
            {companyStats.map((stat, index) => (
              <AnimatedInView key={stat.label} delay={index * 0.08} className="panel p-6">
                <p className="text-sm uppercase tracking-[0.22em] text-slate">
                  {stat.label}
                </p>
                <p className="mt-4 text-4xl font-semibold tracking-tight">{stat.value}</p>
              </AnimatedInView>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {valuePillars.map((pillar, index) => (
            <AnimatedInView key={pillar.title} delay={index * 0.08} className="panel p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate">
                Pillar 0{index + 1}
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight">{pillar.title}</h3>
              <p className="mt-3 text-base leading-7 text-slate">{pillar.description}</p>
            </AnimatedInView>
          ))}
        </div>

        <div className="mt-16 panel overflow-hidden p-8 md:p-10">
          <AnimatedInView className="max-w-3xl">
            <p className="eyebrow">How We Work</p>
            <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
              A structure that keeps strategy, design, and performance moving together.
            </h2>
          </AnimatedInView>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {operatingModel.map((item, index) => (
              <AnimatedInView
                key={item.title}
                delay={index * 0.08}
                className="rounded-[28px] border border-line bg-white p-6"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate">
                  Step 0{index + 1}
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate">{item.description}</p>
              </AnimatedInView>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
