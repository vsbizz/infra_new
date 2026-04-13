"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { blogInner } from "@/data/blogInner";

export const MarketIntelligence = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount =
        direction === "left"
          ? -window.innerWidth * 0.3
          : window.innerWidth * 0.3;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-white py-12 xs:py-14 sm:py-16 md:py-20 lg:py-32 xl:py-40 overflow-hidden">
      {/* 
        JLL Section Padding Mobile: 48-64px, Tablet: 64-80px
      */}

      {/* Header Section */}
      <div className="mx-auto max-w-7xl mb-6 xs:mb-7 sm:mb-8 px-4 xs:px-5 sm:px-6">
        {/* 
          JLL Container Padding Mobile: 16-20px, Tablet: 20-24px
          Header margin: 24-32px on mobile
        */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-100 gap-6 xs:gap-7 sm:gap-8">
          <div className="max-w-2xl text-left">
            {/* 
              JLL H2 Mobile: 24-26px, font-weight: 600 (semibold)
              Desktop (md+): font-extrabold as requested
            */}
            <h2 className="text-2xl xs:text-[26px] sm:text-[28px] md:text-4xl lg:text-5xl xl:text-6xl md:font-extrabold md:font-extrabold leading-[1.3] md:leading-[1.1] tracking-tight text-slate-900 mb-4 xs:mb-5 sm:mb-6">
              <span className="text-teal-600">Market</span> Intelligence
            </h2>
          </div>

          <div className="flex items-center gap-4 xs:gap-5 sm:gap-6">
            {/* 
              JLL Link Text Mobile: 12-13px, font-weight: 600 (semibold)
            */}
            <Link
              href="/blogs"
              className="hidden lg:flex items-center gap-2 text-xs xs:text-[13px] font-semibold text-teal-600 hover:text-teal-700 transition-colors uppercase tracking-widest"
            >
              Explore Blogs{" "}
              <ArrowUpRight className="w-4 h-4 xs:w-[18px] xs:h-[18px]" />
            </Link>

            {/* 
              Navigation Buttons
              JLL Button Size Mobile: 40-44px, Desktop: 48-52px
            */}
            <div className="flex gap-2 xs:gap-2.5 sm:gap-3">
              <button
                onClick={() => scroll("left")}
                className="p-2.5 xs:p-3 sm:p-3.5 md:p-4 rounded-full border border-slate-200 text-slate-900 hover:bg-slate-900 hover:text-white transition-all shadow-sm active:scale-95"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5 xs:w-6 xs:h-6 sm:w-[22px] sm:h-[22px] md:w-6 md:h-6" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="p-2.5 xs:p-3 sm:p-3.5 md:p-4 rounded-full border border-slate-200 text-slate-900 hover:bg-slate-900 hover:text-white transition-all shadow-sm active:scale-95"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5 xs:w-6 xs:h-6 sm:w-[22px] sm:h-[22px] md:w-6 md:h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="pl-4 xs:pl-5 sm:pl-6 md:pl-8 lg:pl-16 xl:pl-24 overflow-visible">
        {/* 
          JLL Container Padding Mobile: 16-20px, Tablet: 20-24px
        */}
        <div
          ref={scrollRef}
          className="flex gap-5 xs:gap-6 sm:gap-7 md:gap-8 overflow-x-auto pb-8 xs:pb-10 sm:pb-12 no-scrollbar snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* 
            JLL Card Gap Mobile: 20-24px, Tablet: 24-28px
          */}
          {blogInner.map((report, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="w-[85vw] xs:w-[80vw] sm:w-[70vw] md:w-[45vw] lg:w-[32vw] xl:w-[26vw] shrink-0 group cursor-pointer snap-start"
            >
              {/* 
                Card Width:
                Galaxy Fold: 85vw (tighter fit)
                iPhone SE: 80vw
                Tablet: 70vw (sm)
                Medium: 45vw (md)
                Desktop: 32vw (lg)
                XL: 26vw
              */}

              <div className="aspect-16/10 overflow-hidden rounded-lg xs:rounded-xl mb-5 xs:mb-6 sm:mb-7 md:mb-8 relative">
                <img
                  src={report.mainImage}
                  alt={report.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-teal-900/0 group-hover:bg-teal-900/5 transition-colors duration-300" />
              </div>

              {/* Card Content */}
              <div className="space-y-3 xs:space-y-3.5 sm:space-y-4 pr-4 xs:pr-5 sm:pr-6">
                {/* 
                  JLL Tag/Label Mobile: 9-10px, font-weight: 600 (semibold)
                */}
                <span className="text-[9px] xs:text-[10px] font-semibold uppercase tracking-[0.15em] xs:tracking-[0.2em] text-teal-600 inline-block border-b-2 border-teal-600/20 pb-1">
                  {report.tags[0]}
                </span>

                {/* 
                  JLL H3/Card Title Mobile: 18-20px, font-weight: 600 (semibold)
                  Desktop (md+): font-extrabold
                */}
                <h3 className="text-lg xs:text-xl sm:text-2xl  md:font-extrabold text-slate-900 leading-tight group-hover:text-teal-600 transition-colors duration-300">
                  {report.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
