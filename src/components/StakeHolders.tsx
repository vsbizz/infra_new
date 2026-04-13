"use client";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

// Individual Card Component
const StakeholderCard = ({ title, desc, link }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white p-6 xs:p-8 sm:p-10 md:p-12 rounded-lg xs:rounded-xl border border-slate-100 flex flex-col justify-between h-full shadow-sm hover:shadow-xl transition-all duration-300"
  >
    <div>
      {/* 
        JLL H3 Mobile: 18-20px, font-weight: 600 (semibold)
        Desktop: font-extrabold as requested
      */}
      <h3 className="text-lg xs:text-xl sm:text-2xl md:font-extrabold text-brand-dark mb-4 xs:mb-5 sm:mb-6 leading-tight">
        {title}
      </h3>

      {/* 
        JLL Body Text Mobile: 14-15px, font-weight: 400 (normal)
      */}
      <p className="text-sm xs:text-[15px] sm:text-base font-normal leading-[1.6] text-slate-500 mb-6 xs:mb-8 sm:mb-10">
        {desc}
      </p>
    </div>
  </motion.div>
);

// Animated Image Component
const HoverImage = ({ src, alt }) => (
  <div className="relative h-64 xs:h-72 sm:h-80 md:h-96 lg:h-100 w-full overflow-hidden rounded-lg xs:rounded-xl shadow-sm">
    <motion.img
      src={src}
      alt={alt}
      whileHover={{ scale: 1.2 }}
      transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
      className="h-full w-full object-cover cursor-crosshair"
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
    <section className="bg-slate-50 py-12 xs:py-14 sm:py-16 md:py-20 lg:py-32 xl:py-40">
      {/* 
        JLL Section Padding Mobile: 48-64px, Tablet: 64-80px
      */}
      <div className="container mx-auto max-w-7xl px-4 xs:px-5 sm:px-6 md:px-8">
        {/* 
          JLL Container Padding Mobile: 16-20px, Tablet: 20-24px
        */}

        {/* Header */}
        <div className="text-center mb-10 xs:mb-12 sm:mb-16 md:mb-20 lg:mb-24 max-w-3xl mx-auto">
          {/* 
            JLL H2 Mobile: 24-26px, font-weight: 600 (semibold)
            Desktop: font-extrabold as requested
          */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl xs:text-[26px] sm:text-[28px] md:text-4xl lg:text-5xl xl:text-6xl md:font-extrabold md:font-extrabold leading-[1.3] md:leading-[1.1] tracking-tight text-slate-900 mb-6 xs:mb-7 sm:mb-8 md:mb-10 lg:mb-12"
          >
            <span className="text-brand-teal">Tailored Solutions</span> for
            Global Stakeholders
          </motion.h2>

          {/* 
            JLL Body Text Mobile: 14-15px, font-weight: 400 (normal)
          */}
          <p className="text-sm xs:text-[15px] sm:text-base md:text-lg font-normal leading-[1.6] text-slate-600">
            From sovereign mandates to private portfolios, empowering global
            leaders to build resilient healthcare ecosystems.
          </p>
        </div>

        {/* 
          Grid Section
          JLL Grid Gap Mobile: 16-20px, Tablet: 20-24px
          Mobile: Single column, Tablet (md): 2 columns, Desktop (lg): 3 columns
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xs:gap-6 sm:gap-7 md:gap-8 max-w-6xl mx-auto">
          {/* Item 1 */}
          <StakeholderCard {...data[0]} />
          <HoverImage src={data[0].image} alt={data[0].alt} />
          <StakeholderCard {...data[1]} />

          {/* Item 2 */}
          <HoverImage src={data[1].image} alt={data[1].alt} />
          <StakeholderCard {...data[2]} />
          <HoverImage src={data[2].image} alt={data[2].alt} />
        </div>
      </div>
    </section>
  );
};
