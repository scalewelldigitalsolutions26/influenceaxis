import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { AnimatedInView } from "@/components/AnimatedInView";
import { ServiceIcon } from "@/components/ServiceIcon";
import type { Service } from "@/lib/services";

type ServiceCardProps = {
  service: Service;
  index?: number;
  delay?: number;
};

export default function ServiceCard({
  service,
  index,
  delay = 0
}: ServiceCardProps) {
  return (
    <AnimatedInView delay={delay}>
      <Link
        href={`/services/${service.slug}`}
        className="group relative block h-full overflow-hidden rounded-[32px] border border-white/70 bg-[linear-gradient(180deg,rgba(255,250,247,0.98),rgba(247,239,233,0.92))] p-6 shadow-[0_20px_60px_rgba(7,17,31,0.08)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_80px_rgba(7,17,31,0.12)]"
      >
        <div className="absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(209,74,52,0.35),transparent)]" />
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-[linear-gradient(145deg,rgba(12,13,18,0.96),rgba(209,74,52,0.88))] text-white shadow-[0_16px_30px_rgba(107,34,27,0.24)]">
            <ServiceIcon name={service.icon} className="h-6 w-6" />
          </div>
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-slate/70">
            {String((index ?? (delay ? Math.round(delay / 0.05) : 0)) + 1).padStart(2, "0")}
          </span>
        </div>
        <h3 className="mt-7 text-2xl font-semibold tracking-tight text-ink">
          {service.title}
        </h3>
        <div className="mt-7 flex items-center justify-between border-t border-black/5 pt-5">
          <span className="text-sm font-semibold text-ink">Learn More</span>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/5 bg-white text-ink transition group-hover:bg-[#07111f] group-hover:text-white">
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </Link>
    </AnimatedInView>
  );
}
