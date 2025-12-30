"use client";
import { HeroSection } from "./hero/hero";
import { AnimatedHero } from "./Heroic/heroic";
import { NavBar } from "./navbar/NavBar";
import { motion } from "motion/react";
import { Services } from "./proviers/services";
import { Landing } from "./Landing/landing";
import ProcessOfBuying from "./pob";
import PersonalizeSpaceForm from "./footer";
import { useEffect, useState } from "react";

export function Container() {
  const [first, setFirst] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // 🔥 Show popup after 15 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!first) {
        setShowPopup(true);
        setFirst(true);
      }
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col justify-start items-center mx-auto gap-4 w-full md:w-6xl p-2">
      {/* <div className="w-full">
        <NavBar />
      </div> */}
      <Landing />
      <div className="w-full">
        <HeroSection />
      </div>
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

      {/* Main footer form (keep if needed) */}
      <PersonalizeSpaceForm />

      {/* 🍿 POPUP MODAL */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-2xl w-[90%] md:w-[600px] relative">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute right-4 top-4 text-xl font-bold text-gray-700 hover:text-red-500"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-4 text-center">
              Personalize Your Space
            </h2>

            {/* 🎯 FORM inside popup */}
            <PersonalizeSpaceForm />
          </div>
        </div>
      )}
    </div>
  );
}
