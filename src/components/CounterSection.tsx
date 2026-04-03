"use client";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useInView,
  animate,
} from "framer-motion";
import { useEffect, useRef, ElementType, useState } from "react";
import {
  Building2,
  Bed,
  Activity,
  HeartPulse,
  Hospital,
} from "lucide-react";

interface StatData {
  label: string;
  value: string;
  icon?: ElementType;
}

interface StatItemProps extends StatData {
  index: number;
}

// FIX: Changed type to StatData[] because it is an array
const STATS_DATA: StatData[] = [
  { label: "Projects", value: "70+", icon: Hospital },
  { label: "Beds", value: "13,500+", icon: Bed },
  { label: "ICU beds", value: "2,450+", icon: Activity },
  { label: "Modular OTs", value: "280+", icon: HeartPulse },
  { label: "Sq. Ft. Built", value: "18M+", icon: Building2 },
];

const RollingNumber = ({
  value,
  isInView,
}: {
  value: string;
  isInView: boolean;
}) => {
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10) || 0;
  const suffix = value.replace(/[0-9,]/g, "");

  const count = useMotionValue(0);
  const rounded = useTransform(
    count,
    (latest) => Math.floor(latest).toLocaleString() + suffix,
  );

  useEffect(() => {
    if (isInView) {
      // Use the animate function for a more reliable rolling effect
      const controls = animate(count, numericValue, {
        duration: 2,
        ease: "easeOut",
        delay: 0.5,
      });
      return controls.stop;
    } else {
      count.set(0);
    }
  }, [isInView, numericValue, count]);

  return <motion.span>{rounded}</motion.span>;
};

const StatItem = ({ label, value, index, icon: Icon }: StatItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <motion.div
      ref={ref}
      initial="initial"
      whileHover="hover"
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative group overflow-hidden rounded-2xl border border-white/20 bg-brand-teal p-10 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:scale-[1.02] cursor-default"
    >
      {/* Liquid Expansion Background Effect */}
      <motion.div
        variants={{
          initial: { scale: 0, opacity: 0 },
          hover: { scale: 3.5, opacity: 1 },
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="absolute left-1/2 top-1/2 z-0 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-900 origin-center pointer-events-none"
      />

      {/* Decorative Ring */}
      <div className="absolute inset-0 z-10 rounded-2xl transition-all duration-500 group-hover:ring-1 group-hover:ring-white/50" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center">
        {Icon && (
          <div className="mb-6 text-white transition-transform duration-500 group-hover:scale-110 group-hover:text-teal-400">
            <Icon size={32} strokeWidth={1.5} />
          </div>
        )}

        <span className="text-4xl font-black tracking-tight text-white md:text-5xl">
          <RollingNumber value={value} isInView={isInView} />
        </span>

        <span className="mt-4 text-[10px] font-bold tracking-[0.3em] text-white/60 uppercase">
          {label}
        </span>
      </div>
    </motion.div>
  );
};

export const CounterSection = ({
  stats = STATS_DATA,
}: {
  stats?: StatData[];
}) => {
  return (
    <section className="relative z-30 py-24 overflow-hidden bg-white">
      {/* Background Glows */}
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-teal-500/10 blur-[120px] rounded-full" />
      <div className="absolute -bottom-24 right-1/4 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />

      <div className="mx-auto max-w-7xl px-8 relative z-10">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold leading-[1.1] tracking-tight text-slate-900 md:text-5xl lg:text-6xl mb-12"
          >Impact<span className="text-brand-teal"> Infra.Health </span> Delivered
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              label={stat.label}
              value={stat.value}
              index={index}
              icon={stat.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
