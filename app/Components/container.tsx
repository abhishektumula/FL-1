"use client";

import { motion } from "motion/react";
import { AnimatedHero } from "./Heroic/heroic";
import { Landing } from "./Landing/landing";
import PersonalizeSpaceForm from "./footer";
import { HeroSection } from "./hero/hero";
import ProcessOfBuying from "./pob";
import { Services } from "./proviers/services";

export function Container() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-14 pb-10 pt-4 md:gap-18">
      <Landing />

      <section className="w-full">
        <HeroSection />
      </section>

      <section className="w-full border-t border-[var(--line)] pt-10">
        <Services />
      </section>

      <motion.section
        initial={{ x: -80, opacity: 0, filter: "blur(12px)" }}
        whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5 }}
        className="w-full border-t border-[var(--line)] pt-10"
      >
        <AnimatedHero />
      </motion.section>

      <section className="w-full border-t border-[var(--line)] pt-10">
        <ProcessOfBuying />
      </section>

      <section className="w-full border-t border-[var(--line)] pt-10">
        <PersonalizeSpaceForm />
      </section>
    </div>
  );
}
