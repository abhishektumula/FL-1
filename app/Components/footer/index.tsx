"use client";

import { FormEvent, useState } from "react";

const PersonalizeSpaceForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="w-full px-5 py-12 md:px-8 md:py-16">
      <div className="grid items-start gap-10 lg:grid-cols-2">
        <div>
          <p className="kicker">Start Your Project</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Ready to personalize your space?
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-[var(--muted)]">
            Share your requirements and our team will contact you with layout
            ideas, budget range, and project timeline.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              required
              placeholder="Your Name"
              className="rounded-xl border border-[var(--line)] bg-[var(--glass-soft)] px-4 py-3 text-sm outline-none backdrop-blur-md focus:border-[var(--accent)]"
            />
            <input
              type="email"
              required
              placeholder="Email"
              className="rounded-xl border border-[var(--line)] bg-[var(--glass-soft)] px-4 py-3 text-sm outline-none backdrop-blur-md focus:border-[var(--accent)]"
            />
          </div>

          <input
            type="tel"
            required
            placeholder="Phone Number"
            className="rounded-xl border border-[var(--line)] bg-[var(--glass-soft)] px-4 py-3 text-sm outline-none backdrop-blur-md focus:border-[var(--accent)]"
          />

          <textarea
            placeholder="Tell us about your space"
            rows={4}
            className="rounded-xl border border-[var(--line)] bg-[var(--glass-soft)] px-4 py-3 text-sm outline-none backdrop-blur-md focus:border-[var(--accent)]"
          />

          <button
            type="submit"
            className="btn-primary mt-2 w-fit rounded-full px-6 py-2.5 text-sm font-semibold"
          >
            Submit Query
          </button>

          {submitted ? (
            <p className="text-sm text-green-700">
              Query submitted. We will contact you shortly.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
};

export default PersonalizeSpaceForm;
