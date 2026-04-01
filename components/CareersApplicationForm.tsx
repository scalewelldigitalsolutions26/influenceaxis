"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

import { jobOpenings, siteConfig } from "@/lib/site";

const roleOptions = [...jobOpenings.map((job) => job.title), "General Application"];

const experienceOptions = [
  "0 - 1 years",
  "2 - 4 years",
  "5 - 7 years",
  "8+ years"
];

const availabilityOptions = [
  "Immediately",
  "Within 2 weeks",
  "Within 1 month",
  "More than 1 month"
];

export default function CareersApplicationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: roleOptions[0],
    linkedin: "",
    resume: "",
    experience: experienceOptions[1],
    availability: availabilityOptions[1],
    message: ""
  });

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

  const fieldClass =
    "h-12 rounded-2xl border border-line bg-white px-4 text-sm text-ink placeholder:text-slate/65 outline-none transition focus:border-accent focus:ring-4 focus:ring-[var(--color-accent-soft)]";
  const textareaClass =
    "min-h-[160px] rounded-2xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-slate/65 outline-none transition focus:border-accent focus:ring-4 focus:ring-[var(--color-accent-soft)]";

  if (submitted) {
    return (
      <div className="rounded-[32px] border border-line bg-white/88 p-7 shadow-card backdrop-blur-xl md:p-8">
        <p className="eyebrow">Application Received</p>
        <h3 className="mt-6 text-3xl font-semibold tracking-tight">
          Thanks, {formData.name || "there"}.
        </h3>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate">
          Your application for {formData.role} has been captured in the UI flow and is
          ready for a future Firebase connection. The next phase can send entries to
          Firestore, store resumes in Firebase Storage, and trigger hiring alerts to{" "}
          {siteConfig.email}.
        </p>
      </div>
    );
  }

  return (
    <form className="grid gap-5 md:grid-cols-2" onSubmit={handleSubmit}>
      <label className="flex flex-col gap-2">
        <span className="text-sm text-slate">Full Name</span>
        <input
          required
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your full name"
          className={fieldClass}
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-sm text-slate">Email Address</span>
        <input
          required
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className={fieldClass}
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-sm text-slate">Role</span>
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className={fieldClass}
        >
          {roleOptions.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-sm text-slate">Experience</span>
        <select
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          className={fieldClass}
        >
          {experienceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-sm text-slate">LinkedIn or Portfolio</span>
        <input
          name="linkedin"
          value={formData.linkedin}
          onChange={handleChange}
          placeholder="https://linkedin.com/in/yourname"
          className={fieldClass}
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-sm text-slate">Resume URL</span>
        <input
          name="resume"
          value={formData.resume}
          onChange={handleChange}
          placeholder="Drive, Dropbox, or portfolio link"
          className={fieldClass}
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-sm text-slate">Availability</span>
        <select
          name="availability"
          value={formData.availability}
          onChange={handleChange}
          className={fieldClass}
        >
          {availabilityOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-2 md:col-span-2">
        <span className="text-sm text-slate">Why would you be a strong fit?</span>
        <textarea
          required
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Share your background, strengths, and the kind of work you want to do with us."
          className={textareaClass}
        />
      </label>

      <div className="flex justify-end md:col-span-2">
        <button type="submit" className="button-primary">
          Submit Application
        </button>
      </div>
    </form>
  );
}
