"use client";
import Image from "next/image";
import { interiorImages } from "../data";

export const BentoGrid = () => {
  const items = interiorImages;

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <h1 className="pb-10 text-2xl font-semibold">Previous Work</h1>
      <div
        className="
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
          auto-rows-[250px] gap-4
        "
      >
        {items.map((item, i) => {
          const sizeClass =
            i % 7 === 0
              ? "lg:col-span-2 lg:row-span-2" // big square
              : i % 5 === 0
                ? "lg:col-span-2" // wide
                : i % 3 === 0
                  ? "lg:row-span-2" // tall
                  : "";

          return (
            <div
              key={i}
              className={`relative group overflow-hidden rounded-2xl bg-black ${sizeClass}`}
            >
              <Image
                src={item.ref}
                alt={item.title}
                fill
                sizes="100vw"
                className="object-cover group-hover:scale-105 transition-all duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-500" />

              {/* Title */}
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
