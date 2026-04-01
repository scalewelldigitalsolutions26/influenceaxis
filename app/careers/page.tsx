import Link from "next/link";

import { AnimatedInView } from "@/components/AnimatedInView";
import CareersApplicationForm from "@/components/CareersApplicationForm";
import { PageHeader } from "@/components/PageHeader";
import { buildMetadata } from "@/lib/seo";
import { careersBenefits, jobOpenings, siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Careers",
  description:
    "Explore current openings at Influence Axis across strategy, performance, and content.",
  path: "/careers"
});

export default function CareersPage() {
  return (
    <section className="section-space pt-32 md:pt-36">
      <div className="shell">
        <PageHeader
          eyebrow="Careers"
          title="Join a team that values strategic clarity, creative quality, and measurable outcomes."
          description="We are building a compact, high-taste team that cares about modern brand systems and the operational discipline behind great growth work."
        />

        <AnimatedInView className="mt-16 panel-dark premium-gradient p-8 md:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <p className="eyebrow border-white/15 bg-white/5 text-white/70">
                Working at Influence Axis
              </p>
              <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-5xl">
                Small team energy with serious standards.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
                We work closely, think deeply, and care about how strategy shows up in
                execution. That means fewer vanity deliverables and more work that is
                sharp, credible, and useful.
              </p>
            </div>

            <div className="grid gap-4">
              {careersBenefits.map((benefit) => (
                <div
                  key={benefit}
                  className="rounded-[24px] border border-white/10 bg-white/5 px-5 py-4 text-base leading-7 text-white/80"
                >
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </AnimatedInView>

        <div className="mt-16 grid gap-6">
          {jobOpenings.map((job, index) => (
            <AnimatedInView key={job.title} delay={index * 0.08} className="panel p-7 md:p-8">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate">
                    {job.type} | {job.location}
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight">{job.title}</h2>
                  <p className="mt-4 max-w-3xl text-base leading-7 text-slate">{job.summary}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link href="#careers-application" className="button-primary">
                    Apply now
                  </Link>
                  <Link href={`mailto:${siteConfig.email}`} className="button-secondary">
                    Email us
                  </Link>
                </div>
              </div>
            </AnimatedInView>
          ))}
        </div>

        <div
          id="careers-application"
          className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start"
        >
          <AnimatedInView className="panel-dark premium-gradient p-8 md:p-10">
            <p className="eyebrow border-white/15 bg-white/5 text-white/70">
              Apply with Confidence
            </p>
            <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              A premium application flow built for a future hiring stack.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/72">
              Use the form to share your background, role interest, and portfolio. It
              is intentionally structured so we can connect it to Firebase later
              without rebuilding the page experience.
            </p>

            <div className="mt-8 grid gap-4">
              {[
                "Structured for Firestore document submissions",
                "Ready for resume links now and Firebase Storage later",
                `Easy to route notifications to ${siteConfig.email}`
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[24px] border border-white/10 bg-white/5 px-5 py-4 text-base leading-7 text-white/80"
                >
                  {item}
                </div>
              ))}
            </div>
          </AnimatedInView>

          <AnimatedInView className="panel p-6 md:p-8">
            <p className="eyebrow">Career Form</p>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
              Tell us where you can create the most impact.
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate">
              We look for strong thinking, clean execution, and people who care about
              how great work actually gets delivered.
            </p>
            <div className="mt-8">
              <CareersApplicationForm />
            </div>
          </AnimatedInView>
        </div>
      </div>
    </section>
  );
}
