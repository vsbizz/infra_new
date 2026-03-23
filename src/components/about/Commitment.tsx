import { motion } from "motion/react";
import { CheckCircle } from "lucide-react";

export const CommitmentSection = () => {
  const points = [
    "Clinically advanced",
    "Financially structured",
    "Technically resilient",
    "Environmentally responsible",
    "Governed for enduring performance",
  ];

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto max-w-7xl px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start lg:gap-24">
          {/* Left Column: Headline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-extrabold leading-[1.1] tracking-tight text-slate-900 md:text-5xl lg:text-6xl mb-6">
              <span className="block text-brand-teal mt-2">Our</span>
              Commitment
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              We approach healthcare infrastructure with institutional
              responsibility, delivering assets that are clinically advanced,
              financially structured, and governed for enduring performance.
            </p>
          </motion.div>

          {/* Right Column: Description & Points */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <ul className="space-y-4">
              {points.map((point, i) => (
                <motion.div
                  whileHover={{ x: 10 }}
                  className="group flex items-center justify-between py-4 border-b border-slate-200 cursor-pointer"
                >
                  <div className="flex items-center gap-6">
                    <CheckCircle className="h-8 w-8 text-brand-teal transition-all group-hover:translate-x-2" />
                    <h3 className="text-3xl font-bold text-slate-900 tracking-tight transition-colors group-hover:text-brand-teal">
                      {point}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
