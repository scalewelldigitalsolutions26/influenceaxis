import { Mail } from "lucide-react";

import { AnimatedInView } from "@/components/AnimatedInView";
import { PageHeader } from "@/components/PageHeader";
import QuoteForm from "@/components/QuoteForm";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const contactCards = [
  {
    title: "Email",
    value: siteConfig.email,
    description: "Best for proposals, partnership conversations, and project discovery.",
    icon: Mail
  }
];

export const metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Contact Influence Axis to discuss branding, websites, content, SEO, social, or performance marketing.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <section className="section-space pt-32 md:pt-36">
      <div className="shell">
        <PageHeader
          eyebrow="Contact"
          title="Tell us what you are building and where growth feels stuck."
          description="Use the inline form below or reach us directly. The current form is UI-only and ready for a later Firebase or CRM integration."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="grid gap-6">
            {contactCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <AnimatedInView
                  key={card.title}
                  delay={index * 0.08}
                  className="panel p-6 md:p-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-accent-soft)] text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-slate">
                    {card.title}
                  </p>
                  <p className="mt-3 text-xl font-semibold tracking-tight text-ink">
                    {card.value}
                  </p>
                  <p className="mt-3 text-base leading-7 text-slate">{card.description}</p>
                </AnimatedInView>
              );
            })}
          </div>

          <AnimatedInView className="panel p-6 md:p-8">
            <p className="eyebrow">Project Brief</p>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
              Share the opportunity and we will shape the right quote.
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate">
              Pick the service you are exploring, outline your goals, and include
              anything important about budget, timeline, or the current stage of your
              brand.
            </p>
            <div className="mt-8">
              <QuoteForm mode="inline" />
            </div>
          </AnimatedInView>
        </div>
      </div>
    </section>
  );
}
