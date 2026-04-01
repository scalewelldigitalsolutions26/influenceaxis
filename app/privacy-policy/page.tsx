import { AnimatedInView } from "@/components/AnimatedInView";
import { PageHeader } from "@/components/PageHeader";
import { buildMetadata } from "@/lib/seo";
import { privacySections } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Read the privacy policy for Influence Axis and how submitted data may be used on this website.",
  path: "/privacy-policy"
});

export default function PrivacyPolicyPage() {
  return (
    <section className="section-space pt-32 md:pt-36">
      <div className="shell">
        <PageHeader
          eyebrow="Privacy Policy"
          title="A straightforward privacy policy for inquiries submitted through this company profile site."
          description="This policy is written for a lead-generation website with contact and quote forms. It can be expanded later when analytics, CMS, or backend tooling is connected."
        />

        <div className="mx-auto mt-16 max-w-4xl space-y-6">
          {privacySections.map((section, index) => (
            <AnimatedInView key={section.title} delay={index * 0.06} className="panel p-7 md:p-8">
              <h2 className="text-3xl font-semibold tracking-tight">{section.title}</h2>
              <p className="mt-4 text-lg leading-8 text-slate">{section.body}</p>
            </AnimatedInView>
          ))}
        </div>
      </div>
    </section>
  );
}
