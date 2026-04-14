"use client";
import {
  motion,
  useMotionValue,
  useTransform,
  useInView,
  animate,
} from "framer-motion";
import { useEffect, useRef, ElementType, useState } from "react";
import { Building2, Bed, Activity, HeartPulse, Hospital } from "lucide-react";

interface StatData {
  label: string;
  value: string;
  icon?: ElementType;
}

interface StatItemProps extends StatData {
  index: number;
}

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
      className="relative group overflow-hidden rounded-xl xs:rounded-2xl border border-white/20 bg-brand-teal p-6 xs:p-8 sm:p-10 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:scale-[1.02] cursor-default"
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
      <div className="absolute inset-0 z-10 rounded-xl xs:rounded-2xl transition-all duration-500 group-hover:ring-1 group-hover:ring-white/50" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center">
        {/* 
          JLL Icon Size Mobile: 24-28px, Tablet: 28-32px
        */}
        {Icon && (
          <div className="mb-4 xs:mb-5 sm:mb-6 text-white transition-transform duration-500 group-hover:scale-110 group-hover:text-teal-400">
            <Icon
              className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8"
              strokeWidth={1.5}
            />
          </div>
        )}

        {/* 
          JLL Large Numbers Mobile: 28-32px, Tablet: 36-40px
          Font Weight: 700 (bold) for stat numbers
        */}
        <span className="text-[28px] xs:text-3xl sm:text-4xl md:text-5xl md:font-bold tracking-tight text-white">
          <RollingNumber value={value} isInView={isInView} />
        </span>

        {/* 
          JLL Small Text/Labels Mobile: 10-11px, font-weight: 600 (semibold)
          Letter spacing: 0.1-0.15em for uppercase labels
        */}
        <span className="mt-3 xs:mt-3.5 sm:mt-4 text-[10px] xs:text-[11px] font-semibold tracking-[0.15em] text-white/70 uppercase">
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
    <section className="relative z-30 py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 overflow-hidden bg-white">
      {/* Background Glows - Responsive sizing */}
      <div className="absolute -top-16 xs:-top-20 sm:-top-24 left-1/4 w-64 h-64 xs:w-80 xs:h-80 sm:w-96 sm:h-96 bg-teal-500/10 blur-[80px] xs:blur-[100px] sm:blur-[120px] rounded-full" />
      <div className="absolute -bottom-16 xs:-bottom-20 sm:-bottom-24 right-1/4 w-64 h-64 xs:w-80 xs:h-80 sm:w-96 sm:h-96 bg-blue-500/10 blur-[80px] xs:blur-[100px] sm:blur-[120px] rounded-full" />

      {/* 
        JLL Container Padding Mobile: 16-20px, Tablet: 20-24px
      */}
      <div className="mx-auto max-w-7xl px-4 xs:px-5 sm:px-6 md:px-8 relative z-10">
        {/* 
          JLL Section Header Mobile: 24-26px H2, font-weight: 600 (semibold)
          Bottom margin: 32-40px on mobile
        */}
        <div className="text-center mb-10 xs:mb-12 sm:mb-16 md:mb-20 lg:mb-24 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl xs:text-[26px] sm:text-[28px] md:text-4xl lg:text-5xl xl:text-6xl md:font-extrabold leading-[1.3] tracking-tight text-slate-900 mb-0"
          >
            Impact<span className="text-brand-teal"> Infra.Health </span>
            Delivered
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 gap-4 xs:gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-5">
          {stats.map((stat, index) => {
            const isLast = index === stats.length - 1;
            const isOdd = stats.length % 2 !== 0;

            return (
              <div
                key={index}
                className={
                  isLast && isOdd
                    ? "col-span-2 flex justify-center lg:col-span-1"
                    : ""
                }
              >
                <div
                  className={
                    isLast && isOdd
                      ? "w-[calc(50%-0.5rem)] sm:w-[calc(50%-0.75rem)] lg:w-full"
                      : "w-full"
                  }
                >
                  <StatItem
                    label={stat.label}
                    value={stat.value}
                    index={index}
                    icon={stat.icon}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
