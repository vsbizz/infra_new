"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Approach() {
  const steps = [
    {
      num: "01",
      title: "Rigorous Feasibility",
      desc: "Demand and demographic validation to ensure long-term viability and clinical relevance.",
      image: "/asset/services/construct/fitout.jpg",
    },
    {
      num: "02",
      title: "Financial Rigor",
      desc: "Institutional-grade capital structuring and risk management to protect stakeholder interests.",
      image: "/asset/services/3.jpg",
    },
    {
      num: "03",
      title: "Engineering Governance",
      desc: "Clinical planning integrated with operational functionality for seamless healthcare delivery.",
      image: "/asset/services/construction.jpg",
    },
    {
      num: "04",
      title: "Performance Alignment",
      desc: "Ensuring long-term clinical and financial sustainability through lifecycle management.",
      image: "/asset/services/about.jpg",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? steps.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused, steps.length]);

  return (
    <section className="bg-white py-10 sm:py-12 md:py-16 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <h2 className="w-full max-w-none text-[1.7rem] sm:text-3xl md:text-5xl lg:text-6xl md:font-extrabold leading-[1.06] tracking-tight text-slate-900 mb-4 sm:mb-5 md:mb-8 lg:mb-12">
              Our Approach:
              <br className="hidden md:block" />
              <span className="text-teal-600"> The Ownership Mindset</span>
            </h2>

            <p className="text-sm sm:text-[15px] md:text-lg leading-6 md:leading-relaxed text-slate-600 mb-6 sm:mb-8 md:mb-10 max-w-xl">
              We view healthcare infrastructure as long-duration institutional
              assets, not isolated construction mandates. Every engagement is
              governed by rigorous standards that protect capital and ensure
              clinical excellence.
            </p>
          </div>

          {/* Mobile / Tablet Auto Carousel */}
          <div className="lg:col-span-7 lg:hidden">
            <div
              className="relative"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
            >
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45 }}
                className="group relative overflow-hidden rounded-xl bg-slate-50"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={steps[current].image}
                    alt={steps[current].title}
                    className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="p-5 sm:p-6 border-b-4 border-teal-600">
                  <div className="text-teal-600 font-bold text-[11px] sm:text-xs tracking-[0.16em] mb-2.5 sm:mb-3 uppercase">
                    Phase {steps[current].num}
                  </div>

                  <h4 className="text-lg sm:text-xl md:font-bold text-slate-900 mb-2.5 sm:mb-3 leading-snug">
                    {steps[current].title}
                  </h4>

                  <p className="text-sm sm:text-[15px] text-slate-600 leading-6">
                    {steps[current].desc}
                  </p>
                </div>
              </motion.div>

              <div className="flex items-center justify-between mt-4">
                <button
                  onClick={prevSlide}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-teal-600 hover:text-teal-600"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <div className="flex items-center gap-2">
                  {steps.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrent(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        current === idx
                          ? "w-6 bg-teal-600"
                          : "w-2.5 bg-slate-300"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-teal-600 hover:text-teal-600"
                  aria-label="Next slide"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:grid lg:col-span-7 grid-cols-2 gap-6 xl:gap-8">
            {steps.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="group relative bg-slate-50 overflow-hidden rounded-xl"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="p-6 xl:p-8 border-b-4 border-transparent group-hover:border-teal-600 transition-all duration-500">
                  <div className="text-teal-600 font-bold text-xs tracking-[0.16em] mb-3 uppercase">
                    PHASE {item.num}
                  </div>

                  <h4 className="text-xl xl:text-2xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors leading-snug">
                    {item.title}
                  </h4>

                  <p className="text-sm xl:text-base text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Approach;
