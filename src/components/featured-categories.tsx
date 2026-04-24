"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const CATEGORIES = [
  {
    id: 1,
    title: "Public Healthcare Infrastructure",
    matchKey: "public-hospitals",
    icon: (
      <svg
        width="52"
        height="52"
        viewBox="0 0 64 64"
        fill="none"
        stroke="#0F766E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="8" y="20" width="48" height="36" rx="2" />
        <path d="M20 20V14a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v6" />
        <path d="M32 30v12M26 36h12" />
        <rect x="16" y="40" width="8" height="16" rx="1" />
        <rect x="40" y="40" width="8" height="16" rx="1" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Acute & Advanced Care Hospitals",
    matchKey: "acute-care",
    icon: (
      <svg
        width="52"
        height="52"
        viewBox="0 0 64 64"
        fill="none"
        stroke="#0F766E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="6" y="18" width="52" height="38" rx="2" />
        <path d="M6 30h52" />
        <path d="M20 18V10h24v8" />
        <path d="M32 36v10M27 41h10" />
        <circle cx="48" cy="42" r="4" />
        <path d="M16 42h8" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Specialty & Focused Care Facilities",
    matchKey: "specialty-care",
    icon: (
      <svg
        width="52"
        height="52"
        viewBox="0 0 64 64"
        fill="none"
        stroke="#0F766E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="32" cy="28" r="14" />
        <path d="M32 18v10l6 5" />
        <path d="M14 52c0-8 8-14 18-14s18 6 18 14" />
        <path d="M24 52h16" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Academic & Medical Education Infrastructure",
    matchKey: "medical-education",
    icon: (
      <svg
        width="52"
        height="52"
        viewBox="0 0 64 64"
        fill="none"
        stroke="#0F766E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M32 8L6 22l26 14 26-14L32 8z" />
        <path d="M6 22v16" />
        <path d="M16 28v16c0 4 7 10 16 10s16-6 16-10V28" />
        <circle cx="54" cy="30" r="3" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Diagnostic & Ambulatory Care",
    matchKey: "diagnostic",
    icon: (
      <svg
        width="52"
        height="52"
        viewBox="0 0 64 64"
        fill="none"
        stroke="#0F766E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="10" y="12" width="44" height="40" rx="2" />
        <path d="M10 24h44" />
        <path d="M22 12V8M42 12V8" />
        <circle cx="32" cy="38" r="8" />
        <path d="M32 34v4l3 2" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Rehabilitation & Long-Term Care",
    matchKey: "rehabilitation",
    icon: (
      <svg
        width="52"
        height="52"
        viewBox="0 0 64 64"
        fill="none"
        stroke="#0F766E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 44c0-8 5-14 12-14s12 6 12 14" />
        <circle cx="32" cy="20" r="6" />
        <path d="M14 56h36" />
        <path d="M20 44l-6 8M44 44l6 8" />
        <path d="M26 38l6 6 6-6" />
      </svg>
    ),
  },
  {
    id: 7,
    title: "Elder Care & Assisted Living",
    matchKey: "elder-care",
    icon: (
      <svg
        width="52"
        height="52"
        viewBox="0 0 64 64"
        fill="none"
        stroke="#0F766E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M32 10c-12 0-20 10-20 20 0 14 20 26 20 26s20-12 20-26c0-10-8-20-20-20z" />
        <path d="M24 32h8v-8" />
        <path d="M32 24l6 6" />
      </svg>
    ),
  },
  {
    id: 8,
    title: "Integrated Healthcare Campuses",
    matchKey: "healthcare-campus",
    icon: (
      <svg
        width="52"
        height="52"
        viewBox="0 0 64 64"
        fill="none"
        stroke="#0F766E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="6" y="28" width="22" height="28" rx="1" />
        <rect x="36" y="28" width="22" height="28" rx="1" />
        <path d="M28 56V36h8v20" />
        <path d="M14 28V20a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v8" />
        <path d="M32 16V8" />
        <path d="M28 8h8" />
      </svg>
    ),
  },
];

interface Props {
  citySlug?: string;
}

export default function FeaturedCategories({ citySlug }: Props) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const getVisible = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const [visible, setVisible] = useState(3);

  useEffect(() => {
    const update = () => setVisible(getVisible());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const totalGroups = Math.ceil(CATEGORIES.length / visible);
  const maxGroup = totalGroups - 1;

  const next = () => setIndex((i) => (i >= maxGroup ? 0 : i + 1));
  const prev = () => setIndex((i) => (i <= 0 ? maxGroup : i - 1));

  useEffect(() => {
    setIndex(0);
  }, [visible]);

  useEffect(() => {
    timerRef.current = setInterval(next, 3500);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [maxGroup]);

  const pause = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };
  const resume = () => {
    timerRef.current = setInterval(next, 3500);
  };

  const cardWidthPct = 100 / visible;
  const translateX = -(index * 100);

  return (
    <section className="bg-[#eaf3fb] py-10 md:py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-stretch gap-6 md:gap-10">
          {/* Left heading + arrows - hidden on mobile */}
          <div className="hidden sm:flex flex-col justify-center shrink-0 w-44 md:w-52">
            <h2 className="text-2xl xs:text-[26px] sm:text-3xl md:text-4xl lg:text-5xl md:font-extrabold text-slate-900 mb-3 xs:mb-4 tracking-tight leading-[1.2]">
              Featured
              <br />
              Categories
            </h2>
            <p className="text-sm xs:text-[15px] sm:text-base md:text-lg font-normal leading-[1.6] text-slate-600 mb-6">
              Explore top property categories.
            </p>
            <div className="flex gap-2">
              <button
                onClick={prev}
                onMouseEnter={pause}
                onMouseLeave={resume}
                className="w-9 h-9 rounded-full border border-slate-300 bg-white flex items-center justify-center hover:border-teal-600 hover:text-teal-600 transition-all"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                onClick={next}
                onMouseEnter={pause}
                onMouseLeave={resume}
                className="w-9 h-9 rounded-full border border-slate-300 bg-white flex items-center justify-center hover:border-teal-600 hover:text-teal-600 transition-all"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Carousel track */}
          <div
            className="flex-1 overflow-hidden"
            onMouseEnter={pause}
            onMouseLeave={resume}
          >
            <div
              ref={trackRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(${translateX}%)` }}
            >
              {CATEGORIES.map((cat) => {
                // If citySlug is provided, filter projects on the city page.
                // Otherwise fall back to a sectors landing page.
                const href = citySlug
                  ? `/properties/${citySlug}?category=${cat.matchKey}#exclusive-projects`
                  : `/sectors/${cat.matchKey}`;
                return (
                  <div
                    key={cat.id}
                    style={{ minWidth: `${cardWidthPct}%` }}
                    className="px-2"
                  >
                    <Link
                      href={href}
                      className="flex flex-col items-center justify-center gap-3 bg-white rounded-xl p-6 md:p-8 shadow-sm border border-slate-100 hover:shadow-md hover:border-red-100 transition-all group h-full min-h-[180px] text-center"
                    >
                      <div className="transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                        {cat.icon}
                      </div>
                      <p className="font-semibold text-slate-800 text-sm md:text-[15px] leading-snug text-center">
                        {cat.title}
                      </p>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Dots - mobile only */}
        <div className="flex sm:hidden justify-center gap-1.5 mt-5">
          {Array.from({ length: totalGroups }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-5 bg-teal-600" : "w-1.5 bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
