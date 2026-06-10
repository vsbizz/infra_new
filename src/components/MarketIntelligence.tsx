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
    /* Bone background — closes the page on a warm note before the footer */
    <section className="bg-brand-bone py-16 xs:py-20 sm:py-24 md:py-28 lg:py-40 xl:py-44 overflow-hidden">
      {/* Header Section */}
      <div className="mx-auto max-w-7xl mb-10 xs:mb-12 sm:mb-14 px-4 xs:px-5 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-brand-line gap-7 xs:gap-8 sm:gap-10 pb-6 xs:pb-7 sm:pb-8">
          <div className="max-w-2xl text-left">
            <p className="eyebrow text-brand-purple mb-4 xs:mb-5">Research</p>

            <h2 className="heading-display text-[30px] xs:text-[34px] sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.08] mb-0">
              Market <span className="text-brand-teal italic">intelligence</span>
            </h2>
          </div>

          <div className="flex items-center gap-4 xs:gap-5 sm:gap-6">
            <Link
              href="/blogs"
              className="hidden lg:flex items-center gap-2 eyebrow !text-xs text-brand-teal hover:text-brand-purple transition-colors"
            >
              Explore Blogs{" "}
              <ArrowUpRight className="w-4 h-4 xs:w-[18px] xs:h-[18px]" />
            </Link>

            <div className="flex gap-2 xs:gap-2.5 sm:gap-3">
              <button
                onClick={() => scroll("left")}
                className="p-2.5 xs:p-3 sm:p-3.5 rounded-full border border-brand-line text-brand-ink hover:bg-brand-purple hover:border-brand-purple hover:text-white transition-all active:scale-95 bg-white"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5 xs:w-6 xs:h-6" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="p-2.5 xs:p-3 sm:p-3.5 rounded-full border border-brand-line text-brand-ink hover:bg-brand-purple hover:border-brand-purple hover:text-white transition-all active:scale-95 bg-white"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5 xs:w-6 xs:h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="pl-4 xs:pl-5 sm:pl-6 md:pl-8 lg:pl-16 xl:pl-24 overflow-visible">
        <div
          ref={scrollRef}
          className="flex gap-6 xs:gap-7 sm:gap-8 md:gap-10 overflow-x-auto pb-10 xs:pb-12 sm:pb-14 no-scrollbar snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {blogInner.map((report, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="w-[85vw] xs:w-[80vw] sm:w-[70vw] md:w-[45vw] lg:w-[32vw] xl:w-[26vw] shrink-0 group cursor-pointer snap-start"
            >
              <div className="aspect-16/10 overflow-hidden rounded-lg xs:rounded-xl mb-6 xs:mb-7 sm:mb-8 relative">
                <img
                  src={report.mainImage}
                  alt={report.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Card Content */}
              <div className="space-y-3.5 xs:space-y-4 pr-4 xs:pr-5 sm:pr-6">
                {/* Tag → purple with hairline underline */}
                <span className="eyebrow !text-[9px] xs:!text-[10px] text-brand-purple inline-block border-b border-brand-purple/25 pb-1">
                  {report.tags[0]}
                </span>

                {/* Serif article title — the editorial signature of this section */}
                <h3 className="heading-display text-xl xs:text-2xl sm:text-[26px] !font-normal leading-snug group-hover:text-brand-teal transition-colors duration-300">
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