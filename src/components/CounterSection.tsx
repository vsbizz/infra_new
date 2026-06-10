"use client";
import {
  motion,
  useMotionValue,
  useTransform,
  useInView,
  animate,
} from "framer-motion";
import { useEffect, useRef, ElementType } from "react";
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
        delay: 0.3,
      });
      return controls.stop;
    } else {
      count.set(0);
    }
  }, [isInView, numericValue, count]);

  return <motion.span>{rounded}</motion.span>;
};

/* Editorial card: white on bone, hairline border, serif number,
   icon kept for visual anchor. Hover: lifts, border warms to teal,
   the top accent bar draws across. Weight + interactivity, no glass. */
const StatItem = ({ label, value, index, icon: Icon }: StatItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <motion.div
      ref={ref}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      whileHover={{ y: -6 }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative h-full overflow-hidden rounded-xl border border-brand-line bg-white p-6 xs:p-7 sm:p-8 transition-colors duration-500 hover:border-brand-teal/50 cursor-default"
    >
      {/* Top accent bar — draws across on hover */}
      <div className="absolute top-0 left-0 h-[3px] w-0 bg-brand-teal transition-[width] duration-700 ease-out group-hover:w-full" />

      {Icon && (
        <div className="mb-5 xs:mb-6 text-brand-teal-deep transition-transform duration-500 group-hover:scale-110 origin-left">
          <Icon className="w-6 h-6 xs:w-7 xs:h-7" strokeWidth={1.5} />
        </div>
      )}

      <span className="heading-display block text-[34px] xs:text-[38px] sm:text-[42px] lg:text-5xl leading-none">
        <RollingNumber value={value} isInView={isInView} />
      </span>

      <span className="eyebrow mt-3 xs:mt-4 block text-slate-500 group-hover:text-brand-teal-deep transition-colors duration-500">
        {label}
      </span>
    </motion.div>
  );
};

export const CounterSection = ({
  stats = STATS_DATA,
}: {
  stats?: StatData[];
}) => {
  return (
    /* Light bone band. The intro paragraph anchors the numbers the way
       the client's reference attaches counters to a text block. */
    <section className="relative z-30 py-16 xs:py-20 sm:py-24 md:py-28 lg:py-36 bg-brand-bone">
      <div className="mx-auto max-w-7xl px-4 xs:px-5 sm:px-6 md:px-8">
        {/* Header row: heading left, supporting text right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-end mb-12 xs:mb-14 sm:mb-16 lg:mb-20">
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="eyebrow text-brand-purple mb-4 xs:mb-5"
            >
              Track Record
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="heading-display text-[30px] xs:text-[34px] sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.08]"
            >
              Impact <span className="text-brand-teal-deep">Infra.Health</span>{" "}
              delivered
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-5"
          >
            <p className="text-base md:text-lg leading-[1.65] text-slate-600 lg:border-l lg:border-brand-line lg:pl-8">
              Delivered across four global regions — every project measured
              against institutional standards of clinical compliance, capital
              efficiency, and operational uptime.
            </p>
          </motion.div>
        </div>

        {/* Cards — 2-up mobile, 5-up desktop */}
        <div className="grid grid-cols-2 gap-4 xs:gap-5 sm:gap-6 lg:grid-cols-5">
          {stats.map((stat, index) => {
            const isLast = index === stats.length - 1;
            const isOdd = stats.length % 2 !== 0;

            return (
              <div
                key={stat.label}
                className={
                  isLast && isOdd
                    ? "col-span-2 flex justify-center lg:col-span-1 lg:block"
                    : ""
                }
              >
                <div
                  className={
                    isLast && isOdd
                      ? "w-[calc(50%-0.5rem)] sm:w-[calc(50%-0.75rem)] lg:w-full h-full"
                      : "w-full h-full"
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