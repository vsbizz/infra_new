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
  },
];

export const MarketIntelligence = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      // Scroll by roughly 30% of the viewport width
      const scrollAmount = direction === "left" ? -window.innerWidth * 0.3 : window.innerWidth * 0.3;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-white py-24 lg:py-40 overflow-hidden">
      {/* Header Section */}
      <div className="mx-auto max-w-7xl mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-100 pb-10 gap-8">
          <div className="max-w-2xl text-left">
            <h2 className="text-3xl font-extrabold leading-[1.1] tracking-tight text-slate-900 md:text-5xl lg:text-6xl mb-6">
              <span className="text-teal-600">Market</span> Intelligence
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Insights into the global healthcare asset landscape.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <button className="hidden lg:flex items-center gap-2 text-sm font-bold text-teal-600 hover:text-teal-700 transition-colors uppercase tracking-widest">
              Explore Blogs <ArrowUpRight size={18} />
            </button>

            <div className="flex gap-3">
              <button
                onClick={() => scroll("left")}
                className="p-4 rounded-full border border-slate-200 text-slate-900 hover:bg-slate-900 hover:text-white transition-all shadow-sm active:scale-95"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => scroll("right")}
                className="p-4 rounded-full border border-slate-200 text-slate-900 hover:bg-slate-900 hover:text-white transition-all shadow-sm active:scale-95"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Area */}
      {/* Remove max-w restriction here to let the cards "breathe" across the screen */}
      <div className="pl-8 lg:pl-24 overflow-visible">
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-12 no-scrollbar snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {REPORTS.map((report, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              /* The Magic Math:
                 25vw = 4 cards exactly
                 28vw = ~3.5 cards visible 
              */
              className="w-[80vw] md:w-[40vw] lg:w-[26vw] shrink-0 group cursor-pointer snap-start"
            >
              {/* Card Image */}
              <div className="aspect-[16/10] overflow-hidden rounded-lg mb-8 relative">
                <img
                  src={report.img}
                  alt={report.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-teal-900/0 group-hover:bg-teal-900/5 transition-colors duration-300" />
              </div>

              {/* Card Content */}
              <div className="space-y-4 pr-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-600 inline-block border-b-2 border-teal-600/20 pb-1">
                  {report.type}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight group-hover:text-teal-600 transition-colors duration-300">
                  {report.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                  {report.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};