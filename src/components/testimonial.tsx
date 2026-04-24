"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const TESTIMONIALS = [
  {
    id: 1,
    text: "Back in April 2020 when my family was searching for a house that's when the Infra Health team contacted us. After the first interaction with Mr. Purav Shah from the team, we were pretty sure to go ahead with his plan because he was very reassuring and bold while talking. Throughout our house hunt Purav has been extremely patient and polite and also he understood what we were looking for and always came up with the best suggestions.",
    name: "Mr. Budbadkar",
    city: "Delhi",
    rating: 5,
  },
  {
    id: 2,
    text: "It has been a great pleasure and success working with Richa and Infra Health. Since you'll have a skilled team and makes dreams a reality. After working with Richa and Infra Health to sell our projects, I was convinced that she's one of the realtors we would love to work with. Infra Health is honest and has a well-trained team. All the Best Richa and Infra Health.",
    name: "Kevin Jude Pereira",
    city: "Bengaluru",
    rating: 5,
  },
  {
    id: 3,
    text: "It has been a wonderful experience interacting with you while finalising the Arbors by the lake project. You have a flair for understanding the customer and I guess your role really made a difference while negotiating & finalising my Villa there. Thank you for the help so far and hoping for your continued support till completion.",
    name: "Nikhil Thomas",
    city: "Bengaluru",
    rating: 4,
  },
  {
    id: 4,
    text: "For the past few months I have experienced the succour of their professional, thorough and personable team. They have been relentless in their efforts and conducted themselves impeccably from scratch to a nearly complete purchase. They have performed beyond example.",
    name: "Ananya Sharma",
    city: "Mumbai",
    rating: 5,
  },
  {
    id: 5,
    text: "I recently had an outstanding experience working with this team. They truly listen to what you need and go above and beyond to make sure you find the perfect property. Their market knowledge is impressive and the entire process was smooth and transparent from start to finish.",
    name: "Rajesh Mehta",
    city: "Hyderabad",
    rating: 5,
  },
  {
    id: 6,
    text: "The team was incredibly professional and helpful throughout our property search. They understood our requirements and budget perfectly, and helped us find our dream home in a short span of time. I would highly recommend their services to anyone looking for real estate assistance.",
    name: "Priya Nair",
    city: "Chennai",
    rating: 5,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(3);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const getVisible = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  useEffect(() => {
    const update = () => setVisible(getVisible());
    update();

    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const max = Math.max(TESTIMONIALS.length - visible, 0);

  const next = useCallback(() => {
    setIndex((i) => (i >= max ? 0 : i + 1));
  }, [max]);

  useEffect(() => {
    setIndex(0);
  }, [visible]);

  useEffect(() => {
    timerRef.current = setInterval(next, 4000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [next]);

  const pause = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const resume = () => {
    timerRef.current = setInterval(next, 4000);
  };

  const cardWidth = 100 / visible;

  return (
    <section className="bg-[#edf4fb] py-8 sm:py-10 md:py-14 lg:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          className="overflow-hidden"
          onMouseEnter={pause}
          onMouseLeave={resume}
          onTouchStart={pause}
          onTouchEnd={resume}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${index * cardWidth}%)`,
            }}
          >
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                style={{
                  minWidth: `${cardWidth}%`,
                }}
                className="px-1.5 sm:px-2"
              >
                <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 md:p-8 flex flex-col justify-between shadow-sm h-full min-h-[300px] sm:min-h-[320px] md:min-h-[360px]">
                  <p className="text-sm xs:text-[15px] sm:text-base md:text-lg font-normal leading-[1.6] text-slate-600 mb-6 sm:mb-8 line-clamp-[9] sm:line-clamp-none">
                    {t.text}
                  </p>

                  <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="#3b82f6"
                        >
                          <circle cx="12" cy="8" r="4" />
                          <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                        </svg>
                      </div>

                      <div>
                        <p className="font-bold text-slate-800 text-sm">
                          {t.name}
                        </p>
                        <p className="text-xs text-slate-400">{t.city}</p>
                      </div>
                    </div>

                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <svg
                          key={s}
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill={s <= t.rating ? "#f5a623" : "#e2e8f0"}
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-5 sm:mt-6 md:mt-8">
          {Array.from({ length: max + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-7 bg-teal-600" : "w-2 bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
