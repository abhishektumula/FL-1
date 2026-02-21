"use client";

import Link from "next/link";
import { motion } from "motion/react";

export const Landing = () => {
  const text = "WHEN DESIGN BRINGS BEAUTY INTO HOUSE";
  const words = text.split(" ");

  return (
    <section className="mt-2 w-full overflow-hidden py-4 md:py-8">
      <div className="grid items-center gap-6 md:grid-cols-[0.9fr_1.2fr_0.9fr]">
        <motion.div
          initial={{ x: 120, opacity: 0, filter: "blur(10px)" }}
          animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: 0.45, duration: 0.55, ease: "easeOut" }}
          className="hidden overflow-hidden rounded-2xl md:block"
        >
          <img
            className="h-[520px] w-full object-cover"
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1258"
            alt="Elegant interior room"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: 0.8, duration: 0.55, ease: "easeOut" }}
          className="flex flex-col items-center gap-5"
        >
          <span className="kicker">Premium Interior Design Studio</span>
          <div className="space-y-1">
            {words.map((word, index) => (
              <h1
                className="text-center text-4xl tracking-tight text-(--muted) md:text-6xl"
                key={index}
              >
                <motion.span
                  initial={{ y: -10 * index, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.18 * index + 0.9, duration: 0.35 }}
                  className={`${
                    ["DESIGN", "HOUSE", "BEAUTY"].includes(word)
                      ? "font-semibold text-foreground"
                      : ""
                  }`}
                >
                  {word}
                </motion.span>
              </h1>
            ))}
          </div>

          <p className="max-w-xl text-center text-sm leading-relaxed text-(--muted) md:text-base">
            Bespoke interiors for homes and offices, from concept to execution,
            built around your taste and everyday life.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 8, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 1.3, duration: 0.4 }}
          >
            <Link
              href="/contact"
              className="btn-primary inline-block rounded-full px-8 py-3 text-sm font-semibold"
            >
              Book a Free Consultation
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ x: -120, opacity: 0, filter: "blur(10px)" }}
          animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: 0.45, duration: 0.55, ease: "easeOut" }}
          className="hidden overflow-hidden rounded-2xl md:block"
        >
          <img
            className="h-[520px] w-full object-cover"
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1258"
            alt="Modern living room"
          />
        </motion.div>
      </div>
    </section>
  );
};
