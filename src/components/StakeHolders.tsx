import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

// Individual Card Component
const StakeholderCard = ({ title, desc, link }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white p-12 rounded-md border border-slate-100 flex flex-col justify-between h-[400px] shadow-sm hover:shadow-xl transition-all duration-300"
  >
    <div>
      <h3 className="text-2xl font-extrabold text-brand-navy mb-6 leading-tight">
        {title}
      </h3>
      <p className="text-slate-500 text-sm leading-relaxed mb-10">
        {desc}
      </p>
    </div>
    <a
      href="#"
      className="flex items-center gap-2 text-brand-teal font-bold text-xs uppercase tracking-widest group mt-auto"
    >
      {link}
      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
    </a>
  </motion.div>
);

// New Animated Image Component
const HoverImage = ({ src, alt }) => (
  <div className="relative h-[400px] w-full overflow-hidden rounded-md shadow-sm">
    <motion.img 
      src={src} 
      alt={alt}
      whileHover={{ scale: 1.2 }}
      transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }} // Smooth "out-expo" feel
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
      alt: "Corporate Skyline"
    },
    {
      title: "Government & Sovereigns",
      desc: "Scale national infrastructure via structured Public-Private Partnership (PPP) frameworks. We integrate international clinical standards with localized regulatory intelligence.",
      link: "Strategy & PPP",
      image: "/asset/portfolio/16.jpg",
      alt: "Government Building"
    },
    {
      title: "Operators & Developers",
      desc: "Accelerate facility delivery with precision engineering. Our turnkey models and operational advisory eliminate fragmentation from concept to commissioning.",
      link: "Operator Services",
      image: "/asset/portfolio/03.png",
      alt: "Modern Medical Facility"
    },
  ];

  return (
    <section className="bg-slate-50 py-24 lg:py-40">
      <div className="container mx-auto max-w-7xl px-8">
        {/* Header */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold leading-[1.1] tracking-tight text-slate-900 md:text-5xl lg:text-6xl mb-12"
          >
            <span className="text-brand-teal">Tailored Solutions</span> for Global Stakeholders
          </motion.h2>
          <p className="text-lg leading-relaxed text-slate-600">
            From sovereign mandates to private portfolios, empowering global
            leaders to build resilient healthcare ecosystems.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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