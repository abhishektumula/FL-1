"use client";
import { animate } from "motion";
import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "motion/react";
import { useEffect } from "react";

export const ServiceNumberCount = ({
  ServiceNumber,
}: {
  ServiceNumber: string;
}) => {
  const count = useMotionValue(69);
  const rounded = useTransform(() => Math.round(count.get()));

  useEffect(() => {
    const controls = animate(count, 999, { duration: 5 });
    return () => controls.stop();
  }, []);

  return (
    <h1 className="text-neutral-700 text-xl md:text-4xl">
      {ServiceNumber}
      <span>+</span>
    </h1>
  );
};

export const Stats = ({
  ServiceNumber,
  ServiceTitle,
}: {
  ServiceNumber: string;
  ServiceTitle: string;
}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 overflow-hidden">
      <ServiceNumberCount ServiceNumber={ServiceNumber} />
      <p className="text-neutral-700 text-lg md:text-xl text-center">
        {ServiceTitle}
      </p>
    </div>
  );
};

export const HeroSection = () => {
  const statDetails = [
    {
      providedNumber: "999",
      providedService: "Project Completion",
    },
    {
      providedNumber: "800",
      providedService: "Satisfied Customers",
    },
    {
      providedNumber: "500",
      providedService: "Unique Styles",
    },
  ];
  const animation1 = useAnimation();
  const animation2 = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await animation1.start({
        opacity: 1,
        x: 0,
        scale: 1,
        transition: { delay: 0.1, duration: 0.2 },
      });
      await animation2.start({
        opacity: 1,
        transition: { duration: 0.2, delay: 0.5 },
        x: 0,
      });
    };
    sequence();
  }, []);
  return (
    <motion.div className="flex flex-col gap-4 w-full p-2 md:p-4 justify-center">
      <div className="flex flex-col gap-4 p-2 md:p-4 md:flex-row">
        <div className="flex flex-col gap-5 justify-start items-start p-2 md:p-4">
          <h1 className="text-black text-6xl font-semibold">Interior Design</h1>
          <p className="text-neutral-500 tracking-tight text-xl leading-relaxed">
            Step into a world where the art of Interior Design is meticulously
            crafted to bring together timeless elegance and cutting-edge modern
            Innovation, Allowing you to transform your living spaces into the
            epitome of luxury and sophistication
          </p>
          <button className="px-4 py-2 mt-10 text-xl md:text-2xl text-neutral-200 bg-neutral-900 rounded-lg hover:shadow-2xl/99 transition duration-300">
            Contact us
          </button>
        </div>
        <div className="overflow-hidden">
          <motion.img
            initial={{ opacity: 0, x: 200 }}
            animate={animation1} //{{opacity:1, x:0, scale:1}}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
            className="rounded-xl hover:border-0 transition duration-300"
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1258"
            alt="hero section image 1"
          />
        </div>
      </div>

      <div className="flex flex-col gap-6 justify-between p-2 md:p-4 items-center">
        <div className="flex flex-row gap-4 md:gap-5 p-2 md:p-4 justify-center overflow-hidden">
          {statDetails.map((each, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 1, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 * index, delay: 1 }}
            >
              <Stats
                key={each.providedService}
                ServiceNumber={each.providedNumber}
                ServiceTitle={each.providedService}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center p-2 md:p-4 gap-2 md:gap-10 w-full">
        <div className="md:w-3/4 p-2 md:p-4 overflow-hidden">
          <motion.img
            initial={{ opacity: 0, x: -200 }}
            animate={animation2} //{{opacity:1, x:0, scale:1}}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.1 }}
            className="aspect-[1/1] rounded-xl hover:shadow-2xl/80 transition duration-300 object-cover"
            src="https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1935"
            alt="hero section image 1"
          />
        </div>
        <div className="w-full flex flex-col justify-start items-start md:items-start p-2 md:p-4 leading-relaxed gap-6">
          <h1 className="text-4xl md:text-6xl tracking-wider font-semibold">
            Interior
            <span className="text-2xl md:text-5xl text-neutral-500"> &</span>
            <br />
            Exterior
          </h1>
          <p className="text-neutral-500 tracking-tight text-xl leading-relaxed">
            Elevate your spaces with bespoke interior designs that reflect your
            unique style and aspirations, crafted with precision and brilliance
            for an unforgettable living experience
          </p>
        </div>
      </div>
    </motion.div>
  );
};
