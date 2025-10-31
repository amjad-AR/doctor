import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const slides = ["slider1.png", "slider2.png", "slider3.png"];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: { opacity: 0, x: 50, scale: 0.95 },
    center: { opacity: 1, x: 0, scale: 1 },
    exit: { opacity: 0, x: -50, scale: 0.95 },
  };

  return (
    <section className=" min-w-full h-screen flex justify-center items-center p-20 shadow-2xl">
      <div className="left_div felx-1 flex flex-col gap-7">
        <h1 className="text-5xl font-bold text-(--Dark_Mode_BG)">
          Your Health Always Comes First.
        </h1>
        <p className="w-[90%] text-lg text-gray-500">
          With Medicare services you will receive the best medical treatment in
          your home. Our team of skilled medical professionals and aids ensure
          that you get the care you need and deserve.
        </p>
        <button className="bg-(--Dark_Mode_BG) border-white border-2 hover:-translate-y-1 hover:bg-[#019c7b] duration-300 text-white px-6 py-3 rounded-md w-[30%]">
          Book Appointment
        </button>
      </div>

      <div className="relative flex-1/2 w-full h-full flex justify-center items-center">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-full h-[80%] m-auto flex justify-center items-center overflow-hidden rounded-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={slides[current]}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute"
              >
                <img
                  src={slides[current]}
                  alt={`Slide ${current}`}
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
