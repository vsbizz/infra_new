import { motion, useMotionValue, useSpring, useTransform, useInView } from "motion/react";
import { useEffect, useRef, ElementType } from "react";

interface StatData {
  label: string;
  value: string;
  icon?: ElementType;
}

interface StatItemProps extends StatData {
  index: number;
}

const RollingNumber = ({ value, isInView }: { value: string; isInView: boolean }) => {
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10) || 0;
  const suffix = value.replace(/[0-9,]/g, "");

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 80,
    restDelta: 0.001
  });
  
  const displayValue = useTransform(springValue, (latest) => 
    Math.floor(latest).toLocaleString() + suffix
  );

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        motionValue.set(numericValue);
      }, 400);
      return () => clearTimeout(timer);
    } else {
      motionValue.set(0);
    }
  }, [isInView, motionValue, numericValue]);

  return <motion.span>{displayValue}</motion.span>;
};

const StatItem = ({ label, value, index, icon: Icon }: StatItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <motion.div
      ref={ref}
      initial="initial"
      whileHover="hover" // Triggers the child motion.div variant
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative group overflow-hidden rounded-md border border-white/30 bg-brand-teal p-10 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:scale-[1.02] cursor-default"
    >
      {/* Liquid Expansion Background Effect */}
      <motion.div
        variants={{
          initial: { scale: 0, opacity: 0 },
          hover: { scale: 3, opacity: 1 }, // Scale 3 ensures it covers the rectangular card
        }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
        className="absolute left-1/2 top-1/2 z-0 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-900 origin-center pointer-events-none"
      />

      {/* Decorative Ring */}
      <div className="absolute inset-0 z-10 rounded-md transition-all duration-500 group-hover:ring-1 group-hover:ring-white/50" />
      
      {/* Content Container (Ensure z-20 to stay above the expansion circle) */}
      <div className="relative z-20 flex flex-col items-center text-center">
        {Icon && (
          <div className="mb-6 text-white transition-transform duration-500 group-hover:scale-110">
            <Icon size={32} strokeWidth={1.5} />
          </div>
        )}
      
        <span className="text-4xl font-black tracking-tight text-white md:text-5xl">
          <RollingNumber value={value} isInView={isInView} />
        </span>
        
        <span className="mt-4 text-[11px] font-bold tracking-[0.25em] text-white/70 uppercase">
          {label}
        </span>
      </div>
    </motion.div>
  );
};
export const CounterSection = ({ stats }: { stats: StatData[] }) => {
  return (
    <section className="relative z-30 pb-24 lg:pb-40 overflow-hidden">
      <div className="absolute -top-24 left-1/4 w-150 h-150 bg-white/10 blur-[120px] rounded-full" />
      <div className="absolute -bottom-24 right-1/4 w-150 h-150 blur-[120px] rounded-full" />
      
      <div className="mx-auto max-w-7xl px-8 relative z-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
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