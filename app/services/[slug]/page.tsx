import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { AnimatedInView } from "@/components/AnimatedInView";
import { JsonLd } from "@/components/JsonLd";
import { OpenQuoteButton } from "@/components/OpenQuoteButton";
import { ServiceIcon } from "@/components/ServiceIcon";
import { buildMetadata, createServiceSchema } from "@/lib/seo";
import { getServiceBySlug, services } from "@/lib/services";

type ServicePageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug
  }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return buildMetadata({
      title: "Service Not Found",
      description: "The requested service page could not be found.",
      path: "/services"
    });
  }

  return buildMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${service.slug}`
  });
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);
  const relatedServices = services.filter((item) => item.slug !== params.slug).slice(0, 3);

  if (!service) {
    notFound();
  }

  return (
    <>
      <JsonLd data={createServiceSchema(service)} />

      <section className="section-space pt-32 md:pt-36">
        <div className="shell">
          <div className="premium-gradient overflow-hidden rounded-[36px] px-8 py-10 text-white shadow-2xl md:px-12 md:py-14">
            <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
              <AnimatedInView>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition hover:text-white"
                >
                  Back to services
                </Link>
                <div className="mt-8 flex h-16 w-16 items-center justify-center rounded-3xl border border-white/15 bg-white/5">
                  <ServiceIcon name={service.icon} className="h-8 w-8" />
                </div>
                <p className="mt-8 text-sm font-semibold uppercase tracking-[0.22em] text-white/[0.55]">
                  {service.title}
                </p>
                <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
                  {service.banner}
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                  {service.description}
                </p>
              </AnimatedInView>

              <AnimatedInView className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/50">
                  Why teams choose this service
                </p>
                <ul className="mt-6 space-y-4">
                  {service.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="rounded-[22px] border border-white/10 bg-white/5 px-4 py-4 text-base leading-7 text-white/80"
                    >
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <OpenQuoteButton
                    service={service.title}
                    className="bg-white text-ink hover:bg-white/90"
                  >
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

          <div className="mt-16 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <AnimatedInView className="panel p-8 md:p-10">
              <p className="eyebrow">Overview</p>
              <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
                Strategy and execution tuned for measurable business outcomes.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate">{service.banner}</p>
              <p className="mt-5 text-lg leading-8 text-slate">
                Every Influence Axis engagement is shaped around clear goals, cleaner
                decision-making, and execution quality that reflects the kind of brand
                you want to be.
              </p>
            </AnimatedInView>

            <div className="grid gap-6">
              {service.benefits.map((benefit, index) => (
                <AnimatedInView
                  key={benefit}
                  delay={index * 0.08}
                  className="panel p-6 md:p-7"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate">
                    Benefit 0{index + 1}
                  </p>
                  <p className="mt-4 text-xl font-semibold leading-8 text-ink">{benefit}</p>
                </AnimatedInView>
              ))}
            </div>
          </div>

          <div className="mt-16 panel p-8 md:p-10">
            <AnimatedInView className="max-w-3xl">
              <p className="eyebrow">Process</p>
              <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
                A simple process that keeps momentum high and decisions clear.
              </h2>
            </AnimatedInView>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {service.process.map((step, index) => (
                <AnimatedInView
                  key={step}
                  delay={Math.min(index * 0.06, 0.24)}
                  className="rounded-[28px] border border-line bg-white p-6"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate">
                    Step 0{index + 1}
                  </p>
                  <p className="mt-4 text-lg leading-8 text-ink">{step}</p>
                </AnimatedInView>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <AnimatedInView className="panel-dark premium-gradient p-8 md:p-10">
              <p className="eyebrow border-white/15 bg-white/5 text-white/70">CTA</p>
              <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-5xl">
                {service.cta}
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
                We can scope deliverables, timeline, and channel mix around your
                current stage and business goals.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <OpenQuoteButton
                  service={service.title}
                  className="bg-white text-ink hover:bg-white/90"
                >
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

            <div className="grid gap-6">
              {relatedServices.map((item, index) => (
                <AnimatedInView key={item.slug} delay={index * 0.08} className="panel p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate">
                    Related service
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight">{item.title}</h3>
                  <Link
                    href={`/services/${item.slug}`}
                    className="mt-5 inline-flex text-sm font-semibold text-ink transition hover:text-accent"
                  >
                    Learn more
                  </Link>
                </AnimatedInView>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
