import { motion, useMotionValue, useSpring, useTransform, useInView } from "motion/react";
import { useEffect, useRef } from "react";

// Individual Counter Component for logic isolation
const RollingNumber = ({ value }: { value: string }) => {
  const ref = useRef(null);
  
  // Change 'once: true' to 'false' if you want it to re-animate on every scroll
  // Adjust amount to 0.5 to ensure 50% of the element is visible before starting
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  const numericValue = parseInt(value.replace(/,/g, ""), 10) || 0;
  const suffix = value.replace(/[0-9,]/g, "");

  const motionValue = useMotionValue(0);
  
  // Smoother spring for that "premium" institutional feel
  const springValue = useSpring(motionValue, {
    damping: 40,
    stiffness: 80,
    restDelta: 0.001
  });
  
  const displayValue = useTransform(springValue, (latest) => 
    Math.floor(latest).toLocaleString() + suffix
  );

  useEffect(() => {
    if (isInView) {
      // Add a tiny timeout so the user actually sees the start of the roll
      const timer = setTimeout(() => {
        motionValue.set(numericValue);
      }, 200); 
      return () => clearTimeout(timer);
    } else {
      // Reset to 0 when it leaves view (only if once is false)
      motionValue.set(0);
    }
  }, [isInView, motionValue, numericValue]);
  return <motion.span ref={ref}>{displayValue}</motion.span>;
};

export const CounterSection = ({ stats }: { stats: { label: string; value: string }[] }) => {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-8 lg:px-16">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              <span className="text-3xl font-extrabold text-brand-teal md:text-5xl">
                <RollingNumber value={stat.value} />
              </span>
              <span className="mt-4 text-[10px] font-bold tracking-widest text-black/40 uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};