"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface HeroData {
  title: string;
  headline: string;
  subHeader: string;
  cta: string;
  image: string;
  link: string;
}

interface ServiceItem {
  id: string;
  title: string;
  image: string;
  link: string;
}

interface HeroSectionProps {
  hero: HeroData;
  services: ServiceItem[];
}

export const HeroSection = ({ hero, services }: HeroSectionProps) => {
  return (
    <div className="relative h-[80vh] md:h-screen w-full overflow-hidden bg-brand-ink -mt-[135px] lg:-mt-[180px]">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={hero.image}
          alt={hero.title}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-brand-ink/70 via-brand-ink/30 to-transparent" />
      </div>

      {/* Hero Content */}
      <main className="relative z-10 flex h-full flex-col justify-center px-4 xs:px-5 sm:px-6 md:px-8 lg:px-20 pb-28 xs:pb-32 sm:pb-24 pt-[calc(var(--header-h)+24px)] sm:pt-[calc(var(--header-h)+40px)]">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="eyebrow text-white/70 mb-4">{hero.title}</p>

          <h1 className="heading-display mb-8 text-[32px] xs:text-[38px] sm:text-5xl md:text-[54px] lg:text-6xl leading-[1.05] text-white">
            {hero.headline}
          </h1>

          <p className="mb-12 max-w-2xl text-[15px] xs:text-base sm:text-lg leading-[1.65] text-white/85">
            {hero.subHeader}
          </p>

          {/* <Link href={hero.link}>
            <motion.button
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
              initial="initial"
              className="relative overflow-hidden rounded-full bg-brand-teal px-10 py-4 font-semibold text-white"
            >
              <span className="relative z-10">
                {hero.cta}
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
                className="absolute left-1/2 top-1/2 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-purple"
              />
            </motion.button>
          </Link> */}
        </motion.div>
      </main>

      {/* Desktop Navigation */}
      <div className="absolute bottom-10 left-0 right-0 z-20 hidden lg:block px-6 lg:px-20">
        <div className="mx-auto flex w-max items-center gap-3 rounded-full border border-white/20 bg-brand-ink/40 p-2 backdrop-blur-md">
          {services.map((service) => (
            <Link
              key={service.id}
              href={""}
              className="group flex items-center gap-3 rounded-full px-3 py-1 transition-all duration-300 hover:bg-white"
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-12 w-12 rounded-full object-cover transition-transform duration-300"
              />

              <span className="text-sm font-semibold text-white transition-colors duration-300 group-hover:text-brand-ink whitespace-nowrap">
                {service.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
      {/* Mobile Navigation */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-3 md:hidden">
        {services.map((service) => (
          <Link key={service.id} href={service.link}>
            <img
              src={service.image}
              alt={service.title}
              className="h-10 w-10 rounded-full border border-white/40 object-cover"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
