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
    <section className="bg-white py-16 xs:py-20 sm:py-24 md:py-28 lg:py-40">
      <div className="container mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-16 xl:px-24 mb-12 xs:mb-14 sm:mb-16 md:mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-7 xs:gap-8 sm:gap-10">
          <div className="max-w-2xl text-left">
            <p className="eyebrow text-brand-purple mb-4 xs:mb-5">Sectors</p>

            <h2 className="heading-display text-[30px] xs:text-[34px] sm:text-4xl md:text-5xl lg:text-[56px] xl:text-6xl leading-[1.08] mb-5 xs:mb-6 sm:mb-8">
              <span className="text-brand-teal">Expertise</span> across the
              continuum
            </h2>

            <p className="text-base md:text-lg font-normal leading-[1.65] text-slate-600">
              From sovereign health frameworks to integrated medical cities, our
              platform scales to meet any clinical intensity.
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2.5 xs:p-3 rounded-full border border-brand-line text-brand-ink hover:bg-brand-purple hover:border-brand-purple hover:text-white transition-all active:scale-95"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4 xs:w-5 xs:h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2.5 xs:p-3 rounded-full border border-brand-line text-brand-ink hover:bg-brand-purple hover:border-brand-purple hover:text-white transition-all active:scale-95"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4 xs:w-5 xs:h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 xs:gap-7 sm:gap-8 md:gap-10 px-4 xs:px-5 sm:px-6 md:px-8 lg:px-16 xl:px-24 overflow-x-auto pb-10 xs:pb-12 sm:pb-14 snap-x snap-mandatory no-scrollbar"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {sectors.map(([slug, item], idx) => {
          const isBottom = idx % 2 === 0;

          return (
            <Link href={`/sectors/${slug}`} key={slug}>
              <motion.div
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative min-w-[280px] xs:min-w-[300px] sm:min-w-[340px] md:min-w-[420px] lg:min-w-[450px] h-[420px] xs:h-[450px] sm:h-[480px] md:h-[500px] shrink-0 cursor-pointer overflow-hidden rounded-lg xs:rounded-xl bg-brand-ink snap-center transform-gpu"
              >
                {/* Background Image */}
                <motion.img
                  src={item.image}
                  alt={item.title}
                  animate={{
                    scale: hoveredIndex === idx ? 1.05 : 1,
                    opacity: hoveredIndex === idx ? 0.35 : 0.55,
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
                  className={`absolute left-4 xs:left-5 sm:left-6 right-4 xs:right-5 sm:right-6 bg-white p-6 xs:p-7 sm:p-8 rounded-md z-20 transition-all duration-500 ease-in-out ${isBottom
                      ? "bottom-4 xs:bottom-5 sm:bottom-6"
                      : "top-4 xs:top-5 sm:top-6"
                    }`}
                >
                  <div className="relative overflow-hidden">
                    {/* Eyebrow tag → purple */}
                    <p className="eyebrow !text-[9px] xs:!text-[10px] text-brand-purple mb-2 xs:mb-2.5">
                      {item.focus.split("•")[1]?.trim() || "Healthcare Asset"}
                    </p>

                    {/* Serif card title */}
                    <h3 className="heading-display text-xl xs:text-2xl sm:text-[26px] !font-normal mb-1.5 xs:mb-2 leading-snug">
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
                      <p className="text-sm xs:text-[15px] font-normal leading-[1.65] text-slate-500 border-t border-brand-line pt-3 xs:pt-3.5 sm:pt-4">
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