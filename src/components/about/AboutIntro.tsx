"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AboutIntro = () => {
  const router = useRouter();
  return (
    <section className="relative overflow-hidden bg-white py-36 sm:py-24 md:py-42 lg:py-50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          {/* Left Column: Headline & Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 flex flex-col justify-center pt-0"
          >
            <nav className="mb-5 flex flex-wrap items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-400 sm:mb-6 sm:gap-2 sm:text-xs md:mb-8">
              <Link href="/" className="transition-colors hover:text-teal-600">
                Home
              </Link>
              <ChevronRight className="h-3 w-3 shrink-0" />
              <Link
                href="/about"
                className="transition-colors hover:text-teal-600"
              >
                About
              </Link>
            </nav>

            <h2 className="w-full max-w-none text-[1.85rem] leading-[1.06] tracking-tight text-slate-900 mb-5 md:font-extrabold xs:text-[2rem] sm:mb-6 sm:max-w-[18ch] sm:text-4xl md:mb-10 md:max-w-none md:text-5xl lg:mb-12 lg:text-6xl">
              Shaping the future of{" "}
              <span className="text-brand-teal">Healthcare Infrastructure</span>
              .
            </h2>

            <p className="mb-6 max-w-none text-sm leading-6 text-slate-500 sm:mb-8 sm:max-w-xl sm:text-[15px] md:mb-10 md:text-lg md:leading-relaxed">
              Infra.Health is a specialized asset development company dedicated
              to the structured creation of healthcare environments. We operate
              at the convergence of clinical systems, engineering, and
              institutional capital.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              <motion.button
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
                initial="initial"
                onClick={() => router.push("/portfolio")}
                className="group relative overflow-hidden rounded-full border border-teal-600 bg-teal-600 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-lg transition-colors sm:px-8 sm:py-3.5 sm:text-xs md:px-10 md:py-4 md:text-sm"
              >
                <span className="pointer-events-none relative z-10 flex items-center gap-2 sm:gap-3">
                  OUR CAPABILITIES
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>

                <motion.div
                  variants={{
                    initial: { scale: 0, opacity: 0 },
                    hover: { scale: 2.5, opacity: 1 },
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  className="absolute left-1/2 top-1/2 z-0 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-900 origin-center"
                />
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column: Visual Component */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-xl sm:aspect-[5/4] sm:rounded-2xl md:shadow-2xl lg:aspect-[4/5]">
              <img
                src="/asset/hero/abt.png"
                alt="Healthcare Infrastructure"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-slate-900/10" />
            </div>

            <div className="absolute -bottom-3 -left-3 -z-10 h-28 w-28 rounded-xl bg-teal-50 sm:-bottom-4 sm:-left-4 sm:h-40 sm:w-40 sm:rounded-2xl md:-bottom-6 md:-left-6 md:h-64 md:w-64" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
