import { motion} from "motion/react";

export const SustainabilitySection = () => {
  return (
    <section className="bg-[#31827E] py-24 text-white overflow-hidden">
      <div className="mx-auto max-w-6xl px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-5xl font-extrabold leading-tight">
              Sustainable Healthcare <br /> Infrastructure
            </h2>
            
            <p className="text-white/80 leading-relaxed max-w-md">
              We integrate LEED and EDGE certification standards into every project lifecycle. 
              Our commitment to ESG ensures that healthcare assets are not only efficient 
              but also resilient to climate risk and future regulatory shifts.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <div className="text-3xl font-black mb-1">30%</div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-white/60">
                  Energy Efficiency Target
                </div>
              </div>
              <div>
                <div className="text-3xl font-black mb-1">NetZero</div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-white/60">
                  2040 Commitment
                </div>
              </div>
            </div>

            <button className="mt-8 rounded-md bg-white px-8 py-4 text-sm font-bold text-[#31827E] transition-all hover:bg-slate-100">
              View Our Sustainability Framework
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square overflow-hidden rounded-md shadow-2xl shadow-black/20">
              <img 
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop" 
                className="h-full w-full object-cover" 
                alt="Sustainability Visual"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};