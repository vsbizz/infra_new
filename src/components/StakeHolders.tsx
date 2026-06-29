"use client";
import { motion } from "motion/react";

const StakeholderCard = ({ title, desc, image, alt }) => (
  <motion.div
    whileHover="hover"
    initial="rest"
    animate="rest"
    className="group relative h-[500px] overflow-hidden rounded-xl cursor-pointer"
  >
    {/* Background Image */}
    <motion.img
      variants={{
        rest: { scale: 1 },
        hover: { scale: 1.08 },
      }}
      transition={{ duration: 0.7 }}
      src={image}
      alt={alt}
      className="absolute inset-0 h-full w-full object-cover"
    />

    {/* Gradient */}
    <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-brand-ink/20 to-transparent" />

    {/* Hover Overlay */}
    <motion.div
      variants={{
        rest: {
          opacity: 0,
        },
        hover: {
          opacity: 1,
        },
      }}
      transition={{ duration: 0.35 }}
      className="absolute inset-0 bg-brand-purple/85"
    />

    {/* Content */}
    <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
      <motion.h3
        variants={{
          rest: {
            y: 0,
          },
          hover: {
            y: -18,
          },
        }}
        transition={{ duration: 0.35 }}
        className="heading-display text-2xl font-normal! leading-tight text-white"
      >
        {title}
      </motion.h3>

      <motion.p
        variants={{
          rest: {
            opacity: 0,
            y: 15,
            height: 0,
          },
          hover: {
            opacity: 1,
            y: 0,
            height: "auto",
          },
        }}
        transition={{
          duration: 0.35,
          delay: 0.1,
        }}
        className="overflow-hidden mt-4 text-white/90 leading-7"
      >
        {desc}
      </motion.p>
    </div>
  </motion.div>
);
// Animated Image Component
const HoverImage = ({ src, alt }) => (
  <div className="relative h-64 xs:h-72 sm:h-80 md:h-96 lg:h-100 w-full overflow-hidden rounded-lg xs:rounded-xl">
    <motion.img
      src={src}
      alt={alt}
      whileHover={{ scale: 1.12 }}
      transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
      className="h-full w-full object-cover"
    />
  </div>
);

export const Stakeholders = () => {
  const data = [
    {
      title: "Institutional Investors",
      desc: "Access core, core-plus, and opportunistic healthcare assets globally. We provide the structural transparency and financial modeling required for institutional-grade portfolio expansion.",
      link: "Investment Portal",
      image: "/asset/portfolio/Highlight image.jpg",
      alt: "Corporate Skyline",
    },
    {
      title: "Government & Sovereigns",
      desc: "Scale national infrastructure via structured Public-Private Partnership (PPP) frameworks. We integrate international clinical standards with localized regulatory intelligence.",
      link: "Strategy & PPP",
      image: "/asset/portfolio/16.jpg",
      alt: "Government Building",
    },
    {
      title: "Operators & Developers",
      desc: "Accelerate facility delivery with precision engineering. Our turnkey models and operational advisory eliminate fragmentation from concept to commissioning.",
      link: "Operator Services",
      image: "/asset/portfolio/03.png",
      alt: "Modern Medical Facility",
    },
  ];

  return (
    /* Bone instead of slate-50 — warm rhythm consistent with the rest */
    <section className="bg-brand-bone py-16 xs:py-20 sm:py-24 md:py-28 lg:py-40 xl:py-44">
      <div className="container mx-auto max-w-7xl px-4 xs:px-5 sm:px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-14 xs:mb-16 sm:mb-20 lg:mb-24 max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="eyebrow text-brand-purple mb-4 xs:mb-5"
          >
            Who We Serve
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-display text-[30px] xs:text-[34px] sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.08] mb-6 xs:mb-7 sm:mb-8"
          >
            <span className="text-brand-teal">Tailored solutions</span> for
            global stakeholders
          </motion.h2>

          <p className="text-base md:text-lg font-normal leading-[1.65] text-slate-600">
            From sovereign mandates to private portfolios, empowering global
            leaders to build resilient healthcare ecosystems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item) => (
            <StakeholderCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
