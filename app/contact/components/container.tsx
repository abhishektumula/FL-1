"use client";

import { FormEvent, ReactNode, useMemo, useState } from "react";
import { IconMail, IconPhone, IconUser } from "@tabler/icons-react";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
  consent: boolean;
};

const initialForm: FormValues = {
  name: "",
  email: "",
  phone: "",
  projectType: "Residential",
  budget: "5L - 10L",
  message: "",
  consent: false,
};

export const ContactForm = () => {
  const [form, setForm] = useState<FormValues>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const messageCount = useMemo(() => form.message.length, [form.message]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
      setError("Please fill name, email, and phone number.");
      return;
    }

    if (!form.consent) {
      setError("Please accept the privacy terms before submitting.");
      return;
    }

    setSubmitted(true);
    setError("");
    setForm(initialForm);
  };

  return (
    <section className="mx-auto mt-4 w-full max-w-4xl py-6">
      <div className="mb-10 text-center">
        <p className="kicker">Contact Us</p>
        <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
          Let&apos;s design your interior project.
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[var(--muted)] md:text-base">
          Share your requirements and we&apos;ll respond with timeline and budget
          guidance. No database is used currently, this form is handled on the
          client for now.
        </p>
      </div>

      <form className="space-y-5 border-t border-[var(--line)] pt-8" onSubmit={handleSubmit}>
        <div className="grid gap-4 md:grid-cols-2">
          <InputField
            label="Full Name"
            icon={<IconUser size={18} className="text-[var(--muted)]" />}
            value={form.name}
            placeholder="Your full name"
            onChange={(value) => setForm((prev) => ({ ...prev, name: value }))}
          />

          <InputField
            label="Email Address"
            icon={<IconMail size={18} className="text-[var(--muted)]" />}
            type="email"
            value={form.email}
            placeholder="name@example.com"
            onChange={(value) => setForm((prev) => ({ ...prev, email: value }))}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <InputField
            label="Phone Number"
            icon={<IconPhone size={18} className="text-[var(--muted)]" />}
            type="tel"
            value={form.phone}
            placeholder="+91 0000 000 000"
            onChange={(value) => setForm((prev) => ({ ...prev, phone: value }))}
          />

          <div className="space-y-2">
            <label className="text-sm font-medium text-[var(--foreground)]">
              Project Type
            </label>
            <select
              value={form.projectType}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, projectType: e.target.value }))
              }
              className="w-full rounded-xl border border-[var(--line)] bg-[var(--glass-soft)] px-4 py-3 text-sm outline-none backdrop-blur-md focus:border-[var(--accent)]"
            >
              <option>Residential</option>
              <option>Commercial</option>
              <option>Renovation</option>
              <option>Modular Kitchen</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-[var(--foreground)]">
            Approx. Budget
          </label>
          <select
            value={form.budget}
            onChange={(e) => setForm((prev) => ({ ...prev, budget: e.target.value }))}
            className="w-full rounded-xl border border-[var(--line)] bg-[var(--glass-soft)] px-4 py-3 text-sm outline-none backdrop-blur-md focus:border-[var(--accent)]"
          >
            <option>Below 5L</option>
            <option>5L - 10L</option>
            <option>10L - 20L</option>
            <option>20L+</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-[var(--foreground)]">
            Project Details
          </label>
          <textarea
            value={form.message}
            onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
            placeholder="Tell us about your space, style preference, and expected timeline"
            maxLength={500}
            rows={5}
            className="w-full resize-none rounded-xl border border-[var(--line)] bg-[var(--glass-soft)] p-4 text-sm outline-none backdrop-blur-md focus:border-[var(--accent)]"
          />
          <p className="text-right text-xs text-[var(--muted)]">{messageCount}/500</p>
        </div>

        <label className="flex items-start gap-2 text-sm text-[var(--muted)]">
          <input
            type="checkbox"
            checked={form.consent}
            onChange={(e) => setForm((prev) => ({ ...prev, consent: e.target.checked }))}
            className="mt-1"
          />
          I agree to the privacy terms and allow the team to contact me about
          my interior design query.
        </label>

        {error ? <p className="text-sm text-red-600">{error}</p> : null}
        {submitted ? (
          <p className="text-sm text-green-700">
            Thanks, your query has been submitted successfully.
          </p>
        ) : null}

        <button
          type="submit"
          className="rounded-full bg-[var(--button-bg)] px-8 py-3 text-sm font-semibold text-[var(--button-text)] transition hover:opacity-90"
        >
          Submit Interior Query
        </button>
      </form>
    </section>
  );
};

const InputField = ({
  label,
  icon,
  type = "text",
  value,
  onChange,
  placeholder,
}: {
  label: string;
  icon: ReactNode;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}) => (
  <div className="space-y-2">
    <label className="text-sm font-medium text-[var(--foreground)]">{label}</label>
    <div className="flex items-center gap-3 rounded-xl border border-[var(--line)] bg-[var(--glass-soft)] px-4 py-3 backdrop-blur-md">
      {icon}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent text-sm outline-none"
      />
    </div>
  </div>
);
