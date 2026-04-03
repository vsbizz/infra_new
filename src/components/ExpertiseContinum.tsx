"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion"; 
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { SECTORS_CONTENT } from "@/data/sectors";

export const ExpertiseContinuum = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Use Object.entries to get [slug, data] pairs
  const sectors = Object.entries(SECTORS_CONTENT);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container mx-auto px-8 lg:px-24 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl text-left">
            <h2 className="text-3xl font-extrabold leading-[1.1] tracking-tight text-slate-900 md:text-5xl lg:text-7xl mb-6">
              <span className="text-teal-600">Expertise</span> Across the Continuum
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              From sovereign health frameworks to integrated medical cities, 
              our platform scales to meet any clinical intensity.
            </p>
          </div>
          
          <div className="flex gap-2">
            <button 
              onClick={() => scroll("left")}
              className="p-3 rounded-full border border-slate-200 text-slate-900 hover:bg-slate-900 hover:text-white transition-all shadow-sm active:scale-95"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll("right")}
              className="p-3 rounded-full border border-slate-200 text-slate-900 hover:bg-slate-900 hover:text-white transition-all shadow-sm active:scale-95"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-8 px-8 lg:px-24 overflow-x-auto pb-12 snap-x snap-mandatory no-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {sectors.map(([slug, item], idx) => { // Destructure slug and item
          const isBottom = idx % 2 === 0;

          return (
            <Link href={`/sectors/${slug}`} key={slug}>
              <motion.div
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative min-w-[320px] md:min-w-[450px] h-[500px] shrink-0 cursor-pointer overflow-hidden rounded-md bg-slate-900 shadow-2xl snap-center transform-gpu"
              >
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
                <div className="absolute top-6 right-6 text-white/50 z-10">
                  {item.icon}
                </div>

                {/* Content Overlay Card */}
                <div 
                  className={`absolute left-6 right-6 bg-white p-8 rounded-sm shadow-xl z-20 transition-all duration-500 ease-in-out ${
                    isBottom ? 'bottom-6' : 'top-6'
                  }`}
                >
                  <div className="relative overflow-hidden">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-teal-600 font-bold mb-2">
                        {item.focus.split('•')[1]?.trim() || "Healthcare Asset"}
                      </p>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2 leading-tight">
                        {item.title}
                      </h3>

                      <motion.div
                        initial={false}
                        animate={{ 
                          height: hoveredIndex === idx ? "auto" : 0,
                          opacity: hoveredIndex === idx ? 1 : 0,
                          marginTop: hoveredIndex === idx ? 16 : 0
                        }}
                        transition={{ duration: 0.4, ease: "circOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm leading-relaxed text-slate-500 border-t border-slate-100 pt-4">
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