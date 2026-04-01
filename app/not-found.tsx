import Link from "next/link";

import { OpenQuoteButton } from "@/components/OpenQuoteButton";

export default function NotFound() {
  return (
    <section className="section-space flex min-h-[70vh] items-center pt-32 md:pt-36">
      <div className="shell">
        <div className="mx-auto max-w-3xl rounded-[36px] premium-gradient px-8 py-12 text-center text-white shadow-2xl md:px-12 md:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/[0.55]">
            404
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
            This page has moved or does not exist.
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/70">
            Try heading back to the homepage, browsing services, or opening the quote
            form if you already know what you need.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/" className="button-primary bg-white text-ink hover:bg-white/90">
              Go home
            </Link>
            <OpenQuoteButton
              variant="secondary"
              className="border-white/15 bg-white/5 text-white hover:border-white/35"
            >
              Get Quote
            </OpenQuoteButton>
          </div>
        </div>
      </div>
    </section>
  );
}
