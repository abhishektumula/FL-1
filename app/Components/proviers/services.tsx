import React from "react";
import { IconArmchair2, IconBulb, IconTrees } from "@tabler/icons-react";

export const ServiceCard = ({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) => {
  return (
    <article className="flex flex-col items-start gap-4">
      <div className="rounded-2xl border border-[var(--line)] bg-[var(--glass-soft)] p-4 backdrop-blur-md text-[var(--foreground)]">
        {icon}
      </div>
      <div className="flex flex-col items-start gap-2">
        <h2 className="text-xl font-semibold md:text-2xl">{title}</h2>
        <p className="text-base leading-relaxed tracking-tight text-[var(--muted)] md:text-lg">
          {desc}
        </p>
      </div>
    </article>
  );
};

export function Services() {
  const dets = [
    {
      icon: <IconBulb size={34} stroke={1.8} />,
      title: "Lighting Design",
      desc:
        "Achieve the right balance of ambient, task, and accent lighting for a functional, welcoming atmosphere.",
    },
    {
      icon: <IconArmchair2 size={34} stroke={1.8} />,
      title: "Interior Design",
      desc:
        "From concept to completion, we oversee details to bring your vision to life with clarity and quality.",
    },
    {
      icon: <IconTrees size={34} stroke={1.8} />,
      title: "Outdoor Design",
      desc:
        "Create seasonal outdoor spaces that feel intentional, elegant, and connected to your overall home identity.",
    },
  ];

  return (
    <section className="flex flex-col items-start justify-start gap-6 p-2 md:p-4">
      <h1 className="p-2 text-3xl font-semibold md:text-5xl">Our Services</h1>
      <div className="grid w-full gap-8 p-3 md:grid-cols-3">
        {dets.map((each) => (
          <ServiceCard
            key={each.title}
            icon={each.icon}
            title={each.title}
            desc={each.desc}
          />
        ))}
      </div>
    </section>
  );
}
