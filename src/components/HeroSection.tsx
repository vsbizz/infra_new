"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
export const HeroSection = ({ slides }: { slides: any[] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative h-[80vh] md:h-screen w-full overflow-hidden bg-white">
      {/* Background Image - Optimized for mobile */}
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
            alt={slides[currentSlide].title || "Hero background"}
          />
        </AnimatePresence>

        {/* Gradient Overlays - Adjusted for mobile readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent z-1 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-1 pointer-events-none" />
      </div>

      {/* Main Content - Mobile Optimized Typography */}
      <main className="relative z-10 flex h-full flex-col justify-center px-4 xs:px-5 sm:px-6 md:px-8 lg:px-20 pb-32 xs:pb-36 sm:pb-20 pt-20 xs:pt-24 sm:pt-28 md:pt-32 lg:pt-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl"
          >
            {/* Headline - Responsive sizing matching JLL (32px → 36px → 48px → 56px) */}
            <h1 className="my-4 xs:my-5 sm:my-6 text-[24px] xs:text-[32px] sm:text-3xl md:text-4xl lg:text-5xl font-semibold md:font-extrabold leading-[1.2] xs:leading-[1.15] tracking-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
              {slides[currentSlide].headline}
            </h1>

            {/* Subheader - Responsive sizing matching JLL (14px → 15px → 16px) */}
            <p className="mb-6 xs:mb-8 sm:mb-10 max-w-xs xs:max-w-sm sm:max-w-md lg:max-w-lg text-sm xs:text-[15px] sm:text-base leading-relaxed xs:leading-[1.6] text-white/95 font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
              {slides[currentSlide].subHeader}
            </p>

            {/* CTA Button - Mobile optimized sizing */}
            <Link href={slides[currentSlide].link}>
              <motion.button
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
                initial="initial"
                className="relative overflow-hidden rounded-full border border-teal-600 bg-teal-600 px-6 xs:px-8 sm:px-10 py-3 xs:py-3.5 sm:py-4 text-sm xs:text-[15px] sm:text-base font-bold text-white shadow-lg hover:shadow-xl transition-shadow"
                aria-label={slides[currentSlide].cta}
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
            </Link>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Navigation Controls - Hidden on mobile, visible on tablet+ */}
      <div className="absolute bottom-6 xs:bottom-8 sm:bottom-10 left-0 right-0 z-20 px-4 xs:px-5 sm:px-6 md:px-8 lg:px-20 hidden md:block">
        <div className="mx-auto flex max-w-max items-center justify-center gap-2 sm:gap-3 rounded-full border border-white/30 bg-white/10 p-1.5 sm:p-2 backdrop-blur-xl shadow-2xl">
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
                aria-label={`Go to ${slide.title}`}
              >
                <img
                  src={slide.image}
                  className={`rounded-full object-cover transition-all duration-500 ${
                    isActive
                      ? "h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12"
                      : "h-9 w-9 sm:h-10 sm:w-10"
                  }`}
                  alt=""
                  aria-hidden="true"
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
                      <p className="whitespace-nowrap px-2.5 sm:px-3 text-[11px] sm:text-xs font-bold leading-tight text-slate-800">
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

      {/* Mobile-only Slide Indicators (Dots) */}
      <div className="absolute bottom-6 xs:bottom-8 left-0 right-0 z-20 flex justify-center gap-2 md:hidden">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              currentSlide === index
                ? "bg-white w-8 xs:w-10 h-2 xs:h-2.5"
                : "bg-white/50 w-2 xs:w-2.5 h-2 xs:h-2.5 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
