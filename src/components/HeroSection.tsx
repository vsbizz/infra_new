"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Notice we no longer take currentSlide or setCurrentSlide as props 
// from the parent page, as that page must remain a Server Component.
export const HeroSection = ({ slides }: { slides: any[] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play logic moved inside the component
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            src={slides[currentSlide].image}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="h-full w-full object-cover"
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent z-1 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-1 pointer-events-none" />
      </div>

      <main className="relative z-10 flex h-full flex-col justify-center px-8 pb-40 lg:px-20 pt-8 lg:pt-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl"
          >
            <h1 className="my-6 text-3xl font-extrabold leading-[1.15] tracking-tight text-white md:text-5xl lg:text-6xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
              {slides[currentSlide].headline}
            </h1>
            <p className="mb-10 max-w-lg text-[14px] leading-relaxed text-white/95 font-medium md:text-base drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
              {slides[currentSlide].subHeader}
            </p>
            
            <motion.button
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
              initial="initial"
              className="relative overflow-hidden rounded-full border border-teal-600 bg-teal-600 px-10 py-4 text-sm font-bold text-white shadow-lg"
            >
              <span className="relative z-10 pointer-events-none">
                {slides[currentSlide].cta}
              </span>

              <motion.div
                variants={{
                  initial: { scale: 0, opacity: 0 },
                  hover: { scale: 2, opacity: 1 },
                }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute left-1/2 top-1/2 z-0 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-900 origin-center"
              />
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Navigation Controls */}
      <div className="absolute bottom-10 left-0 right-0 z-20 px-8 lg:px-20 md:block hidden">
        <div className="mx-auto flex max-w-max items-center justify-center gap-3 rounded-full border border-white/30 bg-white/10 p-2 backdrop-blur-xl shadow-2xl">
          {slides.map((slide, index) => {
            const isActive = currentSlide === index;

            return (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(index)}
                className={`relative flex items-center gap-1 rounded-full p-1 transition-all duration-500 ease-in-out ${
                  isActive
                    ? "bg-white/95 shadow-lg ring-1 ring-white/50 scale-[1.05] px-1"
                    : "opacity-60 hover:opacity-100 bg-transparent"
                }`}
              >
                <img
                  src={slide.image}
                  className={`rounded-full object-cover transition-all duration-500 ${
                    isActive ? "h-10 w-10 md:h-12 md:w-12" : "h-10 w-10"
                  }`}
                  alt=""
                />

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.4, ease: "circOut" }}
                      className="overflow-hidden"
                    >
                      <p className="whitespace-nowrap px-3 text-[11px] font-bold leading-tight text-slate-800 md:text-xs">
                        {slide.title}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};