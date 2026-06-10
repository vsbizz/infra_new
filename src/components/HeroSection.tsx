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
    <div className="relative h-[80vh] md:h-screen w-full overflow-hidden bg-brand-ink -mt-[135px] lg:-mt-[180px] ">
      {/* Background Image */}
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

        {/* Single calm gradient — one device, not two stacked */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-ink/70 via-brand-ink/30 to-transparent z-1 pointer-events-none" />
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex h-full flex-col justify-center px-4 xs:px-5 sm:px-6 md:px-8 lg:px-20 pb-28 xs:pb-32 sm:pb-24 pt-[calc(var(--header-h)+24px)] sm:pt-[calc(var(--header-h)+40px)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            {/* Slide eyebrow — editorial signpost replacing visual noise */}
            <p className="eyebrow text-white/70 mb-4 xs:mb-5">
              {slides[currentSlide].title}
            </p>

            {/* Headline — Fraunces serif, normal weight, large, tight.
                No drop shadow; the gradient carries contrast. */}
            <h1 className="heading-display mb-6 xs:mb-7 sm:mb-8 text-[32px] xs:text-[38px] sm:text-5xl md:text-[54px] lg:text-6xl leading-[1.05] !text-white">
              {slides[currentSlide].headline}
            </h1>

            {/* Subheader — lede style, generous leading */}
            <p className="mb-9 xs:mb-10 sm:mb-12 max-w-sm xs:max-w-md sm:max-w-lg lg:max-w-xl text-[15px] xs:text-base sm:text-lg leading-[1.65] text-white/85">
              {slides[currentSlide].subHeader}
            </p>

            {/* CTA — rounded-full kept (our equity), shadows dropped */}
            <Link href={slides[currentSlide].link}>
              <motion.button
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
                initial="initial"
                className="relative overflow-hidden rounded-full bg-brand-teal px-7 xs:px-9 sm:px-10 py-3 xs:py-3.5 sm:py-4 text-sm xs:text-[15px] sm:text-base font-semibold text-white transition-colors"
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
                  className="absolute left-1/2 top-1/2 z-0 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-purple origin-center"
                />
              </motion.button>
            </Link>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Navigation Controls — glass pill toned down to a quiet bar */}
      <div className="absolute bottom-6 xs:bottom-8 sm:bottom-10 left-0 right-0 z-20 px-4 xs:px-5 sm:px-6 md:px-8 lg:px-20 hidden md:block">
        <div className="mx-auto flex max-w-max items-center justify-center gap-2 sm:gap-3 rounded-full border border-white/20 bg-brand-ink/40 p-1.5 sm:p-2 backdrop-blur-md">
          {slides.map((slide, index) => {
            const isActive = currentSlide === index;

            return (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(index)}
                className={`relative flex items-center gap-1 rounded-full p-1 transition-all duration-500 ease-in-out ${isActive
                  ? "bg-white scale-[1.05] px-1"
                  : "opacity-60 hover:opacity-100 bg-transparent"
                  }`}
                aria-label={`Go to ${slide.title}`}
              >
                <img
                  src={slide.image}
                  className={`rounded-full object-cover transition-all duration-500 ${isActive
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
                      <p className="whitespace-nowrap px-2.5 sm:px-3 text-[11px] sm:text-xs font-semibold leading-tight text-brand-ink">
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
            className={`transition-all duration-300 rounded-full ${currentSlide === index
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