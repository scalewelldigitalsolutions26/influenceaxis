import Link from "next/link";

import { AnimatedInView } from "@/components/AnimatedInView";
import { PageHeader } from "@/components/PageHeader";
import { OpenQuoteButton } from "@/components/OpenQuoteButton";
import ServiceCard from "@/components/ServiceCard";
import { buildMetadata } from "@/lib/seo";
import { services } from "@/lib/services";

const whyUs = [
  {
    title: "Premium positioning",
    description:
      "Every engagement starts by sharpening how your company should be perceived in the market."
  },
  {
    title: "Execution across the funnel",
    description:
      "We connect content, SEO, paid growth, social, and web so your brand feels consistent at every touchpoint."
  },
  {
    title: "Systems, not one-off outputs",
    description:
      "Deliverables are designed to scale with your team, not disappear after launch week."
  }
];

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Explore Influence Axis services across content creation, targeted ads, influencer campaigns, meme marketing, reputation management, research, video editing, and multiplatform management.",
  path: "/services"
});

export default function ServicesPage() {
  return (
    <section className="section-space pt-32 md:pt-36">
      <div className="shell">
        <PageHeader
          eyebrow="Services"
          title="Eight focused services designed to strengthen how your brand shows up and performs online."
          description="Click any service to open its dedicated page with the full overview, benefits, process, and project inquiry flow."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard
              key={service.slug}
              service={service}
              index={index}
              delay={Math.min(index * 0.05, 0.25)}
            />
          ))}
        </div>

        <div className="mt-16 panel p-8 md:p-10">
          <AnimatedInView className="max-w-3xl">
            <p className="eyebrow">Why Influence Axis</p>
            <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
              Built like a strategic partner, not a task vendor.
            </h2>
          </AnimatedInView>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {whyUs.map((item, index) => (
              <AnimatedInView
                key={item.title}
                delay={index * 0.08}
                className="rounded-[28px] border border-line bg-white p-6"
              >
                <h3 className="text-2xl font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate">{item.description}</p>
              </AnimatedInView>
            ))}
          </div>

          <AnimatedInView className="mt-10 flex flex-col gap-4 rounded-[28px] premium-gradient px-6 py-7 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-white">
                Need help choosing the right mix?
              </h3>
              <p className="mt-2 max-w-2xl text-base leading-7 text-white/70">
                We can scope a single service or recommend the best combination based on
                your stage, goals, and timeline.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <OpenQuoteButton className="bg-white text-ink hover:bg-white/90">
                Get Quote
              </OpenQuoteButton>
              <Link
                href="/contact"
                className="button-secondary border-white/15 bg-white/5 text-white hover:border-white/35"
              >
                Contact us
              </Link>
            </div>
          </AnimatedInView>
        </div>
      </div>
    </section>
  );
}
