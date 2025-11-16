"use client";
import { IconCaretLeftFilled, IconCaretRightFilled } from "@tabler/icons-react";
import { div } from "framer-motion/client";
import { AnimatePresence, motion, useAnimate } from "motion/react";
import { useState, useEffect } from "react";

export function AnimatedHero() {
  const [currentImage, setcurrentImage] = useState<number>(0);
  const ImageSource: string[] = [
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1606744888344-493238951221?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1374",
    "https://plus.unsplash.com/premium_photo-1661780295073-98db12600af0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1374",
    "https://images.unsplash.com/photo-1664711942326-2c3351e215e6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1417",
    "https://images.unsplash.com/photo-1615873968403-89e068629265?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1932",
  ];

  function BackWard() {
    if (currentImage == 0) {
      setcurrentImage(ImageSource.length - 1);
    } else {
      setcurrentImage(currentImage - 1);
    }
  }

  function Forward() {
    setcurrentImage((currentImage + 1) % ImageSource.length);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setcurrentImage((i) => (i + 1) % ImageSource.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextAnimation = { transition: { x: -200, opacity: 0, scale: 1.0 } };

  return (
    <div
      className="aspect-[16/9] overflow-hidden rounded-2xl mb-5
        flex flex-row gap-2 md:gap-5 justify-center items-center"
    >
      <button className="border-2 rounded-full" onClick={BackWard}>
        <IconCaretLeftFilled size={32} />
      </button>
      <div className="w-full rounded-2xl overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            whileHover={{ scale: 1.1 }}
            key={ImageSource[currentImage]}
            initial={{ x: 800, opacity: 1, scale: 1.0 }}
            animate={{ x: 0, opacity: 1, scale: 1.0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            exit={{ x: -2000, opacity: 1, scale: 1 }}
            src={ImageSource[currentImage]}
            alt="Slide Show"
            className="rounded-2xl border-dashed object-cover flex flex-row justify-center items-center"
          />
        </AnimatePresence>
      </div>
      <button className="border-2 rounded-full" onClick={Forward}>
        <IconCaretRightFilled size={32} />
      </button>
    </div>
  );
}
