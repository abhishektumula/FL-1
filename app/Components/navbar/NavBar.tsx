"use client";
import Link from "next/link";
import { Logo } from "../logo";
import { MobileBar } from "./mobilenavbar";

export function NavBar() {
  return (
    <div className="flex flex-row gap-4 py-4 px-2 border-b-2 justify-between items-center w-full text-neutral-600">
      <Logo />
      <DesktopBar />
      <MobileBar />
    </div>
  );
}

export const DesktopBar = () => {
  const links: { title: string; ref: string }[] = [
    {
      title: "Home",
      ref: "/",
    },
    {
      title: "Services",
      ref: "/services",
    },
    {
      title: "Our work",
      ref: "/work",
    },
    {
      title: "Contact",
      ref: "/contact",
    },
  ];
  return (
    <div className="md:flex flex-row gap-5 justify-between items-center hidden">
      {links.map((each, index) => (
        <Link
          key={index}
          className="text-xs md:text-xl hover:text-black "
          href={each.title}
        >
          {each.title}
        </Link>
      ))}
    </div>
  );
};
