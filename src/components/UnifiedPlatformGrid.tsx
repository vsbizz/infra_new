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
      {/* <div className="p-2 rounded-lg bg-slate-50 group-hover:bg-brand-orange/10 transition-colors">
        <Icon className="h-6 w-6 text-slate-400 group-hover:text-brand-orange transition-colors" />
      </div> */}
      <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight transition-colors group-hover:text-brand-teal">
        {title}
      </h3>
    </div>
    <ArrowRight className="h-8 w-8 text-slate-300 group-hover:text-brand-orange transition-all group-hover:translate-x-2" />
  </motion.div>
);

export const UnifiedPlatformList = () => {
  const pillars = [
    { title: "Investment & Capital", icon: ShieldCheck },
    { title: "Leasing & Occupancy", icon: Building2 },
    { title: "Strategic Advisory", icon: BarChart3 },
    { title: "Design & Delivery", icon: Compass },
    { title: "Asset Management", icon: Settings },
  ];

  return (
    <section className="bg-white py-24 lg:py-40">
      <div className="container mx-auto max-w-7xl px-8">
        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left Side: Context */}
          <div className="lg:col-span-4 space-y-8 flex justify-center flex-col">
            <p className="text-md leading-relaxed text-slate-600 font-medium">
              We eliminate the fragmentation typical of healthcare development.
              By managing the lifecycle, from financial modeling to clinical
              operations, we ensure no value is lost between phases.
            </p>
            <div className="pt-6">
              <button className="bg-slate-900 text-white px-8 py-4 rounded-md font-bold flex items-center gap-3 hover:bg-brand-teal transition-all">
                Explore Our Methodology <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Right Side: Vertical Pillars */}
          <div className="lg:col-span-8 border-t border-slate-200">
               <div className="mb-20">
          <h2 className="text-3xl font-extrabold leading-[1.1] tracking-tight text-slate-900 md:text-5xl lg:text-6xl mb-12">
            A <span className="text-brand-teal">Unified Platform</span> for Healthcare Excellence
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
