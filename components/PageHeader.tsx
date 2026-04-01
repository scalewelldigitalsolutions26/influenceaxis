import { AnimatedInView } from "@/components/AnimatedInView";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHeader({
  eyebrow,
  title,
  description
}: PageHeaderProps) {
  return (
    <AnimatedInView className="mx-auto max-w-4xl text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-7 text-4xl font-semibold tracking-tight text-ink md:text-6xl md:leading-[1.02]">
        {title}
      </h1>
      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate md:text-xl">
        {description}
      </p>
    </AnimatedInView>
  );
}
