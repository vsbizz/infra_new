"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { SECTORS_CONTENT } from "@/data/sectors";

export const ExpertiseContinuum = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const sectors = Object.entries(SECTORS_CONTENT);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-white py-12 xs:py-14 sm:py-16 md:py-20 lg:py-28 xl:py-32">
      {/* 
        JLL Section Padding Mobile: 48-64px, Tablet: 64-80px
      */}
      <div className="container mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-16 xl:px-24 mb-10 xs:mb-12 sm:mb-14 md:mb-16">
        {/* 
          JLL Container Padding Mobile: 16-20px, Tablet: 20-24px
          Header margin: 40-64px on mobile
        */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 xs:gap-7 sm:gap-8">
          <div className="max-w-2xl text-left">
            {/* 
              JLL H2 Mobile: 24-26px, font-weight: 600 (semibold)
              Desktop (md+): font-extrabold as requested
            */}
            <h2 className="text-2xl xs:text-[26px] sm:text-[28px] md:text-4xl lg:text-5xl xl:text-7xl  md:font-extrabold leading-[1.3] md:leading-[1.1] tracking-tight text-slate-900 mb-4 xs:mb-5 sm:mb-6">
              <span className="text-teal-600">Expertise</span> Across the
              Continuum
            </h2>

            {/* 
              JLL Body Text Mobile: 14-15px, font-weight: 400 (normal)
            */}
            <p className="text-sm xs:text-[15px] sm:text-base md:text-lg font-normal leading-[1.6] text-slate-600">
              From sovereign health frameworks to integrated medical cities, our
              platform scales to meet any clinical intensity.
            </p>
          </div>

          {/* 
            Navigation Buttons
            JLL Button Size Mobile: 40-44px, Desktop: 48px
          */}
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2.5 xs:p-3 rounded-full border border-slate-200 text-slate-900 hover:bg-slate-900 hover:text-white transition-all shadow-sm active:scale-95"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4 xs:w-5 xs:h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2.5 xs:p-3 rounded-full border border-slate-200 text-slate-900 hover:bg-slate-900 hover:text-white transition-all shadow-sm active:scale-95"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4 xs:w-5 xs:h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* 
        Horizontal Scroll Container
        JLL Padding Mobile: 16-20px, Card Gap: 20-24px
      */}
      <div
        ref={scrollRef}
        className="flex gap-5 xs:gap-6 sm:gap-7 md:gap-8 px-4 xs:px-5 sm:px-6 md:px-8 lg:px-16 xl:px-24 overflow-x-auto pb-8 xs:pb-10 sm:pb-12 snap-x snap-mandatory no-scrollbar"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {sectors.map(([slug, item], idx) => {
          const isBottom = idx % 2 === 0;

          return (
            <Link href={`/sectors/${slug}`} key={slug}>
              <motion.div
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative min-w-[280px] xs:min-w-[300px] sm:min-w-[340px] md:min-w-[420px] lg:min-w-[450px] h-[420px] xs:h-[450px] sm:h-[480px] md:h-[500px] shrink-0 cursor-pointer overflow-hidden rounded-lg xs:rounded-xl bg-slate-900 shadow-2xl snap-center transform-gpu"
              >
                {/* 
                  Card dimensions:
                  Mobile: 280px wide × 420px high
                  iPhone SE: 300px × 450px
                  Tablet: 340px × 480px
                  Desktop: 420px × 500px
                */}

                {/* Background Image */}
                <motion.img
                  src={item.image}
                  alt={item.title}
                  animate={{
                    scale: hoveredIndex === idx ? 1.05 : 1,
                    opacity: hoveredIndex === idx ? 0.3 : 0.5,
                  }}
                  transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                  className="absolute inset-0 h-full w-full object-cover transform-gpu"
                />

                {/* Icon Overlay */}
                <div className="absolute top-4 xs:top-5 sm:top-6 right-4 xs:right-5 sm:right-6 text-white/50 z-10">
                  {item.icon}
                </div>

                {/* Content Overlay Card */}
                <div
                  className={`absolute left-4 xs:left-5 sm:left-6 right-4 xs:right-5 sm:right-6 bg-white p-5 xs:p-6 sm:p-7 md:p-8 rounded-sm shadow-xl z-20 transition-all duration-500 ease-in-out ${
                    isBottom
                      ? "bottom-4 xs:bottom-5 sm:bottom-6"
                      : "top-4 xs:top-5 sm:top-6"
                  }`}
                >
                  <div className="relative overflow-hidden">
                    <p className="text-[9px] xs:text-[10px] sm:text-[11px] uppercase tracking-[0.15em] xs:tracking-[0.2em] text-teal-600 font-semibold mb-1.5 xs:mb-2">
                      {item.focus.split("•")[1]?.trim() || "Healthcare Asset"}
                    </p>

                    <h3 className="text-lg xs:text-xl sm:text-2xl md:font-semibold md:font-extrabold text-slate-900 mb-1.5 xs:mb-2 leading-tight">
                      {item.title}
                    </h3>

                    <motion.div
                      initial={false}
                      animate={{
                        height: hoveredIndex === idx ? "auto" : 0,
                        opacity: hoveredIndex === idx ? 1 : 0,
                        marginTop: hoveredIndex === idx ? 12 : 0,
                      }}
                      transition={{ duration: 0.4, ease: "circOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-[13px] xs:text-sm sm:text-[15px] font-normal leading-[1.6] text-slate-500 border-t border-slate-100 pt-3 xs:pt-3.5 sm:pt-4">
                        {item.intro}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
