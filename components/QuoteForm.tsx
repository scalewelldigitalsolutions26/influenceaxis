"use client";

import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";

import { services } from "@/lib/services";

type QuoteFormProps = {
  defaultService?: string;
  mode?: "modal" | "inline";
};

const budgetOptions = [
  "Under INR 50k",
  "INR 50k - 1L",
  "INR 1L - 3L",
  "INR 3L+"
];

export default function QuoteForm({
  defaultService,
  mode = "modal"
}: QuoteFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: defaultService ?? services[0]?.title ?? "",
    budget: budgetOptions[1],
    message: ""
  });

  const wrapperClass =
    mode === "modal"
      ? "grid gap-5 md:grid-cols-2"
      : "grid gap-5 rounded-[28px] border border-line bg-white/80 p-6 shadow-card md:grid-cols-2 md:p-8";

  useEffect(() => {
    if (defaultService) {
      setFormData((current) => ({ ...current, service: defaultService }));
    }
  }, [defaultService]);

  function handleChange<
    T extends HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >(event: ChangeEvent<T>) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className={
          mode === "modal"
            ? "rounded-[28px] border border-white/10 bg-white/5 p-6"
            : "rounded-[28px] border border-line bg-white/80 p-8 shadow-card"
        }
      >
        <h3
          className={
            mode === "modal"
              ? "text-2xl font-semibold text-white"
              : "text-2xl font-semibold text-ink"
          }
        >
          Thanks, {formData.name || "there"}.
        </h3>
        <p
          className={
            mode === "modal"
              ? "mt-3 max-w-lg text-white/70"
              : "mt-3 max-w-lg text-slate"
          }
        >
          Your inquiry has been captured in the UI flow and is ready for a future
          backend connection. We usually reply within one business day.
        </p>
      </div>
    );
  }

  const fieldClass =
    mode === "modal"
      ? "h-12 rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-white/30"
      : "h-12 rounded-2xl border border-line bg-white px-4 text-sm text-ink placeholder:text-slate/70 outline-none transition focus:border-accent";

  const textareaClass =
    mode === "modal"
      ? "min-h-[144px] rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-white/30"
      : "min-h-[144px] rounded-2xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-slate/70 outline-none transition focus:border-accent";

  return (
    <form className={wrapperClass} onSubmit={handleSubmit}>
      <label className="flex flex-col gap-2">
        <span className={mode === "modal" ? "text-sm text-white/70" : "text-sm text-slate"}>
          Name
        </span>
        <input
          required
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          className={fieldClass}
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className={mode === "modal" ? "text-sm text-white/70" : "text-sm text-slate"}>
          Email
        </span>
        <input
          required
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@company.com"
          className={fieldClass}
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className={mode === "modal" ? "text-sm text-white/70" : "text-sm text-slate"}>
          Service
        </span>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className={fieldClass}
        >
          {services.map((service) => (
            <option key={service.slug} value={service.title} className="text-ink">
              {service.title}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-2">
        <span className={mode === "modal" ? "text-sm text-white/70" : "text-sm text-slate"}>
          Budget
        </span>
        <select
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className={fieldClass}
        >
          {budgetOptions.map((budget) => (
            <option key={budget} value={budget} className="text-ink">
              {budget}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-2 md:col-span-2">
        <span className={mode === "modal" ? "text-sm text-white/70" : "text-sm text-slate"}>
          Message
        </span>
        <textarea
          required
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your goals, timeline, and current challenge."
          className={textareaClass}
        />
      </label>

      <div className="flex justify-end md:col-span-2">
        <button
          type="submit"
          className={
            mode === "modal"
              ? "inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5"
              : "button-primary"
          }
        >
          Submit Inquiry
        </button>
      </div>
    </form>
  );
}
