import {
  ArrowRight,
  BarChart3,
  Building2,
  Compass,
  Settings,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";

const PillarItem = ({ title, icon: Icon }) => (
  <motion.div
    whileHover={{ x: 10 }}
    className="group flex items-center justify-between py-8 border-b border-slate-200 cursor-pointer"
  >
    <div className="flex items-center gap-6">
      <h3 className="text-3xl font-bold text-slate-900 tracking-tight transition-colors group-hover:text-brand-teal">
        {title}
      </h3>
    </div>
    <ArrowRight className="h-8 w-8 text-slate-300 group-hover:text-brand-teal transition-all group-hover:translate-x-2" />
  </motion.div>
);

export const UnifiedPlatformList = () => {
  const pillars = [
    { title: "Investment & Capital Advisory", icon: ShieldCheck },
    { title: "Leasing & Operator Advisory", icon: Building2 },
    { title: "Advisory & Strategic Planning", icon: BarChart3 },
    { title: "Design & Project Delivery", icon: Compass },
    { title: "Property & Facilities Management", icon: Settings },
  ];

  return (
    <section className="bg-white py-24 lg:py-40">
      <div className="container mx-auto max-w-7xl px-8">
        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left Side: Context */}
          <div className="lg:col-span-4 space-y-8 flex justify-center flex-col">
            <p className="text-lg leading-relaxed text-slate-600 font-medium">
              We eliminate the fragmentation typical of healthcare development.
              By managing the lifecycle, from financial modeling to clinical
              operations, we ensure no value is lost between phases.
            </p>
            <div className="pt-6">
              <motion.button
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
                initial="initial"
                className="relative overflow-hidden rounded-full border border-teal-600 bg-teal-600 px-10 py-4 text-sm font-bold text-white shadow-lg"
              >
                <span className="relative z-10 pointer-events-none">
                  Explore Our Methodology
                </span>

                <motion.div
                  variants={{
                    initial: {
                      scale: 0,
                      opacity: 0,
                    },
                    hover: {
                      scale: 2,
                      opacity: 1,
                    },
                  }}
                  transition={{
                    duration: 1.2,
                    ease: "easeOut",
                  }}
                  className="absolute left-1/2 top-1/2 z-0 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-900 origin-center"
                />
              </motion.button>
            </div>
          </div>

          {/* Right Side: Vertical Pillars */}
          <div className="lg:col-span-8">
            <div className="mb-20">
              <h2 className="text-3xl font-extrabold leading-[1.1] tracking-tight text-slate-900 md:text-5xl lg:text-6xl mb-12">
                A <span className="text-brand-teal">Unified Platform</span> for
                Healthcare Excellence
              </h2>
            </div>
            {pillars.map((pillar, index) => (
              <PillarItem key={index} {...pillar} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
