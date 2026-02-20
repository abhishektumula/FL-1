import { useState } from "react";
import { motion, scale } from "motion/react";

type cardType = {
  title: string;
  desc: string;
  source: string;
};

export const OpenCardTitle = ({
  title,
  imgsource,
  desc,
}: {
  title: string;
  desc: string;
  imgsource: string;
}) => {
  return (
    <motion.div className="flex flex-row justify-center items-center gap-6 z-20 bg-neutral-800 w-[90%] absolute inset-0">
      <img
        src={imgsource}
        className="h-150 aspect-square"
        alt="image source of project"
      />
      <div className="flex flex-col gap-4">
        <h1 className="text-lg">{title}</h1>
        <p className="text-red-200">{desc}</p>
      </div>
    </motion.div>
  );
};

export const OtherProjects = () => {
  const details: { title: string; desc: string; source: string }[] = [
    {
      title: "Modern Interior Design",
      desc: "Transform your space with sleek layouts, neutral palettes, and luxurious textures for a contemporary feel.",
      source:
        "https://images.unsplash.com/photo-1615529182904-14819c35db37?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1160",
    },
    {
      title: "Premium Home Aesthetics",
      desc: "Creative design solutions that blend functionality with artistic elegance to enhance your living experience.",
      source:
        "https://images.unsplash.com/photo-1737233019359-625e96ec8694?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Luxury Furniture & Decor",
      desc: "Elevate your interiors with curated furniture pieces, premium materials, and artistic decor elements.",
      source:
        "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const [open, setOpen] = useState<cardType | null>(null);
  return (
    <div className="p-4 text-4xl font-semibold">
      {open && (
        <OpenCardTitle
          title={open.title}
          desc={open.desc}
          imgsource={open.source}
        />
      )}
      <h1>Our Projects</h1>
      <div className="p-1 flex flex-col md:flex-row gap-2 md:gap-5 justify-center bg-transparent">
        {details.map((one, index) => (
          <ProjectCard
            key={index}
            imgsource={one.source}
            desc={one.desc}
            title={one.title}
          />
        ))}
      </div>
    </div>
  );
};

export const ProjectCard = ({
  title,
  imgsource,
  desc,
}: {
  title: string;
  desc: string;
  imgsource: string;
}) => {
  return (
    <div className="w-[320px] flex flex-col gap-9 items-start justify-start hover:bg-neutral-300 p-2 rounded-xl hover:shadow-2xl/70 transition duration-300">
      <div className="flex flex-row justify-center items-center overflow-hidden">
        <img
          className="rounded-xl w-[320px] aspect-square"
          src={imgsource}
          alt=""
        />
      </div>
      <div>
        <h1 className="text-xl md:text-2xl font-normal text-neutral-800 text-start">
          {title}
        </h1>
        <p className="text-xs md:text-lg font-normal text-neutral-500 text-start">
          {desc}
        </p>
      </div>
      <div className="">
        <button className="text-lg text-[var(--button-text)] px-12 py-3 text-start bg-[var(--button-bg)] rounded-xl">
          View Details
        </button>
      </div>
    </div>
  );
};

{
  /* <div className="p-4 flex flex-col gap-2 md:gap-5 bg-[size:12px_12px]">
<div className="">
    <img className="h-100" src="https://images.unsplash.com/photo-1615529182904-14819c35db37?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1160" 
    alt="other project 1"/>
</div>
<div className="text-neutral-500 flex flex-col gap-3">
    <h1 className="text-2xl md:text-4xl text-neutral-950">AI Companion</h1>
    <p className="text-xl md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, minus suscipit quis, reprehenderit ut nihil excepturi nisi illum nulla incidunt ad vel rem magnam. Est at quas animi qui sunt!</p>
</div>
</div> */
}
