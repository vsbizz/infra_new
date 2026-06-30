"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AboutIntro = () => {
  const router = useRouter();
  return (
    <section className="relative overflow-hidden bg-white sm:py-4 md:py-6 lg:py-8">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2 lg:items-start lg:gap-20">
          {/* Left Column: Headline & Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 flex flex-col justify-center pt-0"
          >
            <nav className="mb-5 flex flex-wrap items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.16em] eyebrow text-brand-purple sm:mb-6 sm:gap-2 sm:text-xs md:mb-8">
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

            <h2 className="heading-display w-full max-w-none text-[30px] xs:text-[34px] sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.08]">
              Shaping the future of{" "}
              <span className="text-brand-teal">Healthcare Infrastructure</span>
              .
            </h2>

            <p className="my-6 max-w-none text-base md:text-lg leading-[1.65] text-slate-600 sm:mb-8 sm:max-w-xl md:mb-10">
              Infra.Health is a specialized asset development company dedicated
              to the structured creation of healthcare environments. We operate
              at the convergence of clinical systems, engineering, and
              institutional capital.
            </p>

            {/* <div className="flex flex-wrap gap-3 sm:gap-4">
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
            </div> */}
          </motion.div>

          {/* Right Column: Visual Component */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 relative"
          >
            <div className="grid grid-cols-2 gap-5 xs:gap-6">
              <div className="space-y-5 xs:space-y-6">
                <img
                  src="/asset/about/1.jpeg"
                  className="rounded-md shadow-2xl"
                  alt="Team"
                />
                <img
                  src="/asset/about/2.jpeg"
                  className="rounded-md shadow-2xl"
                  alt="Collaboration"
                />
              </div>
              <div className="space-y-5 xs:space-y-6">
                <img
                  src="/asset/about/3.jpg"
                  className="rounded-md shadow-2xl"
                  alt="Professional"
                />
                <img
                  src="/asset/about/4.jpg"
                  className="rounded-md shadow-2xl"
                  alt="Professional"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
