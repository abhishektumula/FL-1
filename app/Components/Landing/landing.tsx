import { motion } from "motion/react";

// [--patter-col:var(--color-neutral-400)] bg-[radial-gradient(var(--pattern-col)_1px,transparent_2px)]
export const Landing = () => {
  const text = "WHEN DESIGN BRINGS BEAUTY INTO HOUSE";
  const words = text.split(" ");
  return (
    <div className="flex flex-col md:flex-row justify-center gap-6 items-center h-screen md:p-4 p-4 pt-5">
      <motion.div
        initial={{ x: 200, opacity: 0, filter: "blur(12px)" }}
        animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="overflow-hidden hidden md:block"
      >
        <img
          className="object-cover aspect-auto md:aspect-[3/6]"
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1258"
          alt=""
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale:1, filter:"blur(12px)" }}
        animate={{ opacity: 1 ,filter:"blur(0px)"}}
        transition={{ delay: 1, duration: 0.5 }}
        className="flex flex-col gap-5"
      >
        {words.map((word, index) => (
          <h1 className="text-center text-6xl text-neutral-500" key={index}>
            <motion.span
              key={index}
              initial={{ filter: "blur(0px)", y: -10 * index, opacity: 0 }}
              animate={{ filter: "blur(0px)", y: 0, opacity: 1 }}
              transition={{ delay: 0.2 * index + 1, duration: 0.3 }}
              className={`${["DESIGN", "HOUSE", "BEAUTY"].includes(word) ? "text-black font-semibold" : ""}`}
            >
              {word}
            </motion.span>
          </h1>
        ))}
        {/* <h1 className="text-center text-6xl text-neutral-500">WHEN <span className="text-black font-semibold">DESIGN</span><br />
                BRINGS <span className="text-black font-semibold">BEAUTY</span><br />
                INTO <span className="text-black font-semibold">HOUSE</span>
                </h1> */}
        <motion.button
          initial={{ filter: "blur(12px)", opacity: 0 }}
          animate={{ filter: "blur(0px)", opacity: 1 }}
          transition={{ delay: 1, duration: 0.3 }}
          className="px-12 py-4 bg-neutral-700 text-neutral-200 rounded-lg shadow-2xl/90  md:shadow-none md:hover:shadow-2xl/80 mt-4 transition duration-300"
        >
          Contact Us
        </motion.button>
      </motion.div>
      <motion.div
        className="hidden md:block overflow-hidden"
        initial={{ x: -200, opacity: 0, filter: "blur(12px)" }}
        animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{ delay: 0.6, duration: 0.4 }}
      >
        <img
          className="object-cover aspect-[3/6]"
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1258"
          alt=""
        />
      </motion.div>
    </div>
  );
};
