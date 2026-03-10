import { motion, AnimatePresence } from "framer-motion";

export const HeroSection = ({ slides, currentSlide, setCurrentSlide }) => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-white">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            src={slides[currentSlide].image}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="h-full w-full object-cover"
          />
        </AnimatePresence>

        {/* VIBRANT OVERLAY STRATEGY */}
        {/* 1. Left-to-Right Scrim: Darkens only the text area slightly for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent z-[1] pointer-events-none" />

        {/* 2. Bottom-up Scrim: Just enough to ground the thumbnails */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-[1] pointer-events-none" />
      </div>

      {/* Content */}
      <main className="relative z-10 flex h-full flex-col justify-center px-8 pb-40 lg:px-20 pt-8 lg:pt-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            {/* Headline with high-contrast shadow */}
            <h1 className="my-6 text-3xl font-extrabold leading-[1.15] tracking-tight text-white md:text-5xl lg:text-6xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
              {slides[currentSlide].headline}
            </h1>

            {/* Paragraph: Switched to White/95 for better integration with a bright hero */}
            <p className="mb-10 max-w-lg text-[14px] leading-relaxed text-white/95 font-medium md:text-base drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
              {slides[currentSlide].subHeader}
            </p>

            {/* <div className=""> */}
            <motion.button
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
              initial="initial"
              className="relative overflow-hidden rounded-full border border-teal-600 bg-teal-600 px-10 py-4 text-sm font-bold text-white shadow-lg"
            >
              <span className="relative z-10 pointer-events-none">
                {slides[currentSlide].cta}
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
                  // 1.2s gives it a very calm, liquid-like expansion
                  duration: 1.2,
                  // Using a simpler ease makes the speed consistent so it's not "jumpy"
                  ease: "easeOut",
                }}
                // aspect-square w-full ensures it starts as wide as the button
                className="absolute left-1/2 top-1/2 z-0 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-900 origin-center"
              />
            </motion.button>
            {/* </div> */}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Thumbnails */}
      <div className="absolute bottom-10 left-0 right-0 z-20 px-8 lg:px-20">
        <div className="mx-auto flex max-w-2xl items-center justify-center rounded-full border border-white/30 bg-white/10 p-1.5 backdrop-blur-xl shadow-2xl">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlide(index)}
              className={`flex flex-1 items-center gap-3 rounded-full p-1 transition-all duration-500 ${
                currentSlide === index
                  ? "bg-white/95 shadow-lg ring-1 ring-white/50 scale-[1.02] mr-2"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={slide.image}
                className="h-12 w-12 rounded-full object-cover"
                alt=""
              />
              <div className="hidden text-center md:block">
                <p
                  className={`text-[11px] font-bold leading-tight max-w-20 ${
                    currentSlide === index ? "text-slate-800" : "text-white"
                  }`}
                >
                  {slide.title}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
