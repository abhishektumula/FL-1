"use client";

import { IconLayoutSidebarLeftCollapseFilled, IconX } from "@tabler/icons-react";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "motion/react";

export const MobileBar = ({ links }: { links: { title: string; ref: string }[] }) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="relative md:hidden">
      <button
        aria-label={open ? "Close navigation" : "Open navigation"}
        onClick={() => setOpen((prev) => !prev)}
        className="rounded-full border border-[var(--line)] bg-[var(--glass-soft)] p-2 text-[var(--foreground)] backdrop-blur-md"
      >
        {open ? <IconX size={22} /> : <IconLayoutSidebarLeftCollapseFilled size={22} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-14 w-56 rounded-2xl border border-[var(--line)] bg-[var(--glass-bg)] p-3 shadow-lg backdrop-blur-xl"
          >
            {links.map((each, index) => {
              const isActive = pathname === each.ref;
              return (
                <motion.div
                  key={each.ref}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.18, delay: index * 0.04 }}
                >
                  <Link
                    href={each.ref}
                    onClick={() => setOpen(false)}
                    className={`mt-1 block rounded-lg px-3 py-2 text-sm ${
                      isActive
                        ? "bg-[var(--button-bg)] text-[var(--button-text)]"
                        : "text-[var(--foreground)] hover:bg-[var(--glass-soft)]"
                    }`}
                  >
                    {each.title}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
