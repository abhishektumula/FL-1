"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { LayoutGroup, motion } from "motion/react";
import { MobileBar } from "./mobilenavbar";

const links: { title: string; ref: string }[] = [
  { title: "Home", ref: "/" },
  { title: "About", ref: "/about" },
  { title: "Our Work", ref: "/work" },
  { title: "Contact", ref: "/contact" },
];

export function NavBar() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") {
      return "light";
    }
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") {
      return stored;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <header className="sticky top-0 z-50 h-28 w-full border-b border-(--line) bg-(--nav-glass) backdrop-blur-3xl">
      <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="hidden text-[11px] uppercase tracking-[0.2em] text-(--muted) sm:block">
            Interior Studio
          </span>
          <span className="text-lg font-semibold tracking-tight text-foreground sm:text-2xl">
            Sreeja Interiors
          </span>
        </Link>

        <DesktopBar pathname={pathname} />

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() =>
              setTheme((prev) => (prev === "light" ? "dark" : "light"))
            }
            aria-label="Toggle theme"
            className="rounded-full border border-(--line) bg-(--glass-soft) p-2 text-foreground backdrop-blur-md transition hover:scale-[1.03]"
          >
            {theme === "dark" ? <IconSun size={18} /> : <IconMoon size={18} />}
          </button>
          <MobileBar links={links} />
        </div>
      </div>
    </header>
  );
}

export const DesktopBar = ({ pathname }: { pathname: string }) => {
  const [hovered, setHovered] = useState<string | null>(null);
  const activeRef = hovered ?? pathname;

  return (
    <LayoutGroup>
      <nav
        className="relative hidden items-center gap-6 md:flex"
        onMouseLeave={() => setHovered(null)}
      >
        {links.map((each) => (
          <Link
            key={each.ref}
            href={each.ref}
            onMouseEnter={() => setHovered(each.ref)}
            className="relative z-10 px-1 py-2 text-sm font-medium text-(--muted) transition-colors hover:text-foreground"
          >
            {activeRef === each.ref ? (
              <motion.span
                layoutId="nav-hover-pill"
                className="absolute -bottom-1 left-0 right-0 -z-10 h-[3px] rounded-full bg-foreground"
                transition={{ type: "spring", stiffness: 420, damping: 34 }}
              />
            ) : null}
            <span
              className={
                activeRef === each.ref ? "text-foreground" : "text-(--muted)"
              }
            >
              {each.title}
            </span>
          </Link>
        ))}
      </nav>
    </LayoutGroup>
  );
};
