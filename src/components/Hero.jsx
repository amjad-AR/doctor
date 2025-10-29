import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const slides = ["slider1.png", "slider2.png", "slider3.png", "slider4.png"];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: { opacity: 0, x: 50, scale: 0.95 },
    center: { opacity: 1, x: 0, scale: 1 },
    exit: { opacity: 0, x: -50, scale: 0.95 },
  };

  return (
    <section className="min-w-full h-screen flex items-center p-40 gap-10">
      <div className="left_div w-[40%] flex flex-col gap-7">
        <h1 className="text-6xl font-bold text-[#192655]">
          Your Health Always Comes First.
        </h1>
        <p className="text-lg text-gray-500">
          With Medicare services you will receive the best medical treatment in
          your home. Our team of skilled medical professionals and aids ensure
          that you get the care you need and deserve. We offer a wide range of
          services, from routine check-ups and medication management to physical
          therapy and wound care. Our professionals work closely with you and
          your family to create a customized care plan that fits your unique
          needs and preferences.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md w-[30%]">
          Book Appointment
        </button>
      </div>

      <div className="relative w-[60%] h-full flex justify-center items-center">
        <div className="w-full h-full flex justify-center items-center">
          <div className="bg-[url('img_doctor_bac.png')] bg-cover w-[40%] h-[80%] m-auto flex justify-center items-center overflow-hidden rounded-xl">
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
                  className="w-[200%]"
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
