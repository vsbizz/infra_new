"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

const REPORTS = [
  {
    type: "REPORT | Q3 2024",
    title: "Healthcare Real Estate Trends: The Shift to Outpatient Networks",
    desc: "Analyzing the investor migration toward distributed care models...",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
  },
  {
    type: "ANALYSIS | AUGUST 2024",
    title: "De-Risking Design-Build in Emerging Markets",
    desc: "How single-point accountability mitigates construction cost volatility...",
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
  },
  {
    type: "PERSPECTIVE | JULY 2024",
    title: "ESG as a Value Driver for Healthcare Yield",
    desc: "The correlation between LEED-certified assets and clinical uptime...",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
  },
  {
    type: "REPORT | JUNE 2024",
    title: "The Rise of Quaternary Medical Cities",
    desc: "Exploring the infrastructure demands of specialized surgical hubs...",
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
  }
];

export const MarketIntelligence = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      // Scroll by 400px (card width + gap) for precision
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-white py-24 lg:py-40 overflow-hidden">
      {/* Header Section */}
      <div className="mx-auto max-w-6xl px-8 lg:px-16 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-100 pb-8 gap-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Market Intelligence
            </h2>
            <p className="text-slate-500 font-medium">
              Insights into the global healthcare asset landscape.
            </p>
          </div>

          <div className="flex items-center gap-6">
            {/* Desktop View All Button */}
            <button className="hidden lg:flex items-center gap-2 text-sm font-bold text-teal-600 hover:text-teal-700 transition-colors uppercase tracking-widest">
              View All Reports <ArrowUpRight size={18} />
            </button>

            {/* Navigation Arrows */}
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
      </div>

      {/* Horizontal Scroll Area */}
      <div 
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto pb-16 no-scrollbar pl-8 md:pl-[calc((100vw-1152px)/2+64px)] pr-16 snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {REPORTS.map((report, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="min-w-[320px] md:min-w-[380px] group cursor-pointer snap-start"
          >
            {/* Card Image */}
            <div className="aspect-[16/10] overflow-hidden rounded-md mb-8 relative">
              <img 
                src={report.img} 
                alt={report.title}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-teal-900/0 group-hover:bg-teal-900/10 transition-colors duration-300" />
            </div>

            {/* Card Content */}
            <div className="space-y-4 pr-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-orange-600 inline-block border-b-2 border-orange-600/20 pb-1">
                {report.type}
              </span>
              <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 leading-tight group-hover:text-teal-600 transition-colors duration-300">
                {report.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                {report.desc}
              </p>
            </div>
          </motion.div>
        ))}

        {/* Ending Spacer */}
        <div className="min-w-[100px] h-full" />
      </div>

      {/* Progress Bar (Optional Visual Anchor) */}
      <div className="mx-auto max-w-6xl px-8 lg:px-16 -mt-8">
        <div className="h-px w-full bg-slate-100 relative">
            <motion.div 
                className="absolute h-px bg-teal-600 w-1/4 left-0"
                initial={{ x: "-100%" }}
                whileInView={{ x: "0%" }}
                viewport={{ once: true }}
            />
        </div>
      </div>
    </section>
  );
};