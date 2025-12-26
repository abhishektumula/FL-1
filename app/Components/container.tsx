"use client";
import { HeroSection } from "./hero/hero";
import { AnimatedHero } from "./Heroic/heroic";
import { NavBar } from "./navbar/NavBar";
import { motion } from "motion/react";
import { Services } from "./proviers/services";
import { Landing } from "./Landing/landing";
import { OtherProjects } from "./Landing/otherprojects";
import ProcessOfBuying from "./pob";
import PersonalizeSpaceForm from "./footer";

export function Container() {
  return (
    <div className="flex flex-col justify-start items-center mx-auto gap-4 w-full md:w-6xl p-2">
      <div className="w-full">
        <NavBar />
      </div>
      <Landing />
      <div className="w-full">
        <HeroSection />
      </div>
      <OtherProjects />
      <Services />
      <motion.div
        initial={{ x: -100, opacity: 0, filter: "blur(20px)" }}
        whileInView={{ filter: "blur(0px)" }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full"
      >
        <AnimatedHero />
      </motion.div>
      <ProcessOfBuying />
      <PersonalizeSpaceForm />
    </div>
  );
}
