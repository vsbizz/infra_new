"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion"; // Changed to framer-motion for stability
import { ChevronLeft, ChevronRight } from "lucide-react";

const CARE_CATEGORIES = [
  {
    title: "Public Infrastructure",
    content: "Strengthening national health systems (District Hospitals, PHCs).",
    sector: "National Health",
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
  },
  {
    title: "Advanced Acute Care",
    content: "High-complexity environments (Tertiary, Quaternary, Transplants).",
    sector: "Specialized",
    img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Specialty Networks",
    content: "Scalable models for Oncology, Cardiac, and Diagnostics.",
    sector: "High Intensity",
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
  },
  {
    title: "Senior & Rehab",
    content: "Long-term care assets (Geriatric, Assisted Living).",
    sector: "Elderly Care",
    img: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2010&auto=format&fit=crop",
  },
];

export const ExpertiseContinuum = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

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
              From rapid-deployment clinics to quaternary medical cities, our
              platform scales to meet any clinical intensity.
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
        {CARE_CATEGORIES.map((item, idx) => {
          const isBottom = idx % 2 === 0;

          return (
            <motion.div
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative min-w-[320px] md:min-w-[450px] h-[500px] shrink-0 cursor-pointer overflow-hidden rounded-md bg-slate-900 shadow-2xl snap-center transform-gpu"
            >
              {/* Background Image - Uses transform-gpu for smoother scaling */}
              <motion.img
                src={item.img}
                alt={item.title}
                animate={{
                  scale: hoveredIndex === idx ? 1.1 : 1,
                  opacity: hoveredIndex === idx ? 0.4 : 0.6,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute inset-0 h-full w-full object-cover transform-gpu"
              />

              {/* Stabilized Content Overlay Card */}
              <div 
                className={`absolute left-6 right-6 bg-white p-8 rounded-sm shadow-xl z-20 transition-all duration-500 ease-in-out ${
                  isBottom ? 'bottom-6' : 'top-6'
                }`}
              >
                <div className="relative overflow-hidden">
                    <h3 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-tight">
                      {item.title}
                    </h3>

                    <motion.div
                      initial={false}
                      animate={{ 
                        height: hoveredIndex === idx ? "auto" : 0,
                        opacity: hoveredIndex === idx ? 1 : 0,
                        marginBottom: hoveredIndex === idx ? 12 : 0
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm leading-relaxed text-slate-500">
                        {item.content}
                      </p>
                    </motion.div>

                    {/* <div className="flex border-t border-slate-100 pt-4 gap-12">
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                          Sector
                        </p>
                        <p className="text-xs font-black text-slate-900 uppercase">
                          {item.sector}
                        </p>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                          Year
                        </p>
                        <p className="text-xs font-black text-slate-900 uppercase">
                          2026
                        </p>
                      </div>
                    </div> */}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};