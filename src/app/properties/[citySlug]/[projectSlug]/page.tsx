"use client";

import { use, useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { projectsData } from "@/data/projects";
import { notFound } from "next/navigation";
import MapViewsSection from "@/components/dynamicMap";

export default function ProjectDetail({
  params,
}: {
  params: Promise<{ citySlug: string; projectSlug: string }>;
}) {
  const { citySlug = "", projectSlug = "" } = use(params);

  const project = projectsData.find((p) => p.slug === projectSlug);

  const [activeImg, setActiveImg] = useState(0);
  const [isFormLoaded, setIsFormLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.visionarybizz.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  if (!project) return notFound();

  const cityLabel = citySlug
    ? citySlug.charAt(0).toUpperCase() + citySlug.slice(1)
    : "Properties";

  return (
    <div className="min-h-screen bg-white pt-5 sm:pt-3 md:pt-5 lg:pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 sm:py-6 md:py-10 pt-30">
        {/* Back link */}
        <Link
          href={citySlug ? `/properties/${citySlug}` : "/properties"}
          className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-800 transition-colors mb-4 sm:mb-5"
        >
          <ChevronLeft size={14} /> Back to {cityLabel}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 sm:gap-8 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h1 className="text-[2rem] xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:font-extrabold text-slate-900 mb-4 xs:mb-5 md:mb-8 leading-[1.08] tracking-tight">
              {project.title}
            </h1>

            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
              <div className="flex items-start gap-1.5 text-slate-500 text-xs sm:text-sm max-w-md">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="shrink-0 mt-0.5"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {project.address}
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button className="p-1.5 border border-slate-200 rounded hover:border-slate-400 transition-colors">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#666"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <circle cx="18" cy="5" r="3" />
                    <circle cx="6" cy="12" r="3" />
                    <circle cx="18" cy="19" r="3" />
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                  </svg>
                </button>

                <button className="p-1.5 border border-slate-200 rounded hover:border-slate-400 transition-colors">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#666"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Image gallery */}
            <div className="rounded-xl overflow-hidden mb-2 relative">
              <img
                src={project.images[activeImg]}
                alt={project.title}
                className="w-full h-[240px] xs:h-[270px] sm:h-72 md:h-80 object-cover"
              />
              <div className="absolute bottom-3 right-3">
                <span className="bg-white/80 backdrop-blur-sm rounded px-2 py-1.5 flex items-center gap-1 text-xs font-medium text-slate-700">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                  {activeImg + 1} / {project.images.length}
                </span>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 mb-6 sm:mb-8 overflow-x-auto pb-1">
              {project.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`w-16 h-12 sm:w-20 sm:h-14 shrink-0 rounded-md overflow-hidden border-2 transition-all ${i === activeImg
                      ? "border-red-500"
                      : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            <p className="text-sm xs:text-[15px] sm:text-base md:text-lg font-normal leading-[1.6] text-slate-600 mb-6">
              {project.description}
            </p>
          </div>

          {/* Sidebar Form */}
          <aside className="lg:col-span-1">
            <div className="bg-white border border-slate-200 rounded-xl shadow-lg shadow-slate-100 p-3 sm:p-4 md:p-5 lg:sticky lg:top-6">
              <div className="relative w-full min-h-[560px] overflow-hidden rounded-lg">
                {!isFormLoaded && (
                  <div className="absolute inset-0 z-10 bg-white p-4">
                    <div className="animate-pulse space-y-4">
                      <div className="h-6 w-2/3 rounded bg-slate-200" />
                      <div className="h-11 w-full rounded-lg bg-slate-200" />
                      <div className="h-11 w-full rounded-lg bg-slate-200" />
                      <div className="h-11 w-full rounded-lg bg-slate-200" />
                      <div className="h-24 w-full rounded-lg bg-slate-200" />
                      <div className="h-4 w-5/6 rounded bg-slate-200" />
                      <div className="h-4 w-4/6 rounded bg-slate-200" />
                      <div className="h-12 w-full rounded-xl bg-slate-300" />
                    </div>
                  </div>
                )}

                <iframe
                  src="https://app.visionarybizz.com/widget/form/OE1hA0wEItddAYy3i8ws"
                  onLoad={() => setIsFormLoaded(true)}
                  style={{
                    width: "100%",
                    height: "556px",
                    border: "none",
                    borderRadius: "8px",
                  }}
                  className={`transition-opacity duration-500 ${isFormLoaded ? "opacity-100" : "opacity-0"
                    }`}
                  id="inline-OE1hA0wEItddAYy3i8ws"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Form 13"
                  data-height="556"
                  data-layout-iframe-id="inline-OE1hA0wEItddAYy3i8ws"
                  data-form-id="OE1hA0wEItddAYy3i8ws"
                  title="Form 13"
                />
              </div>
            </div>
          </aside>
        </div>
      </div>
      {/* Facilities */}
      <section className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-28">
        <h2 className="text-2xl xs:text-[26px] sm:text-3xl md:text-4xl lg:text-5xl md:font-extrabold text-slate-900 mb-6 sm:mb-8 xs:mb-4 tracking-tight leading-[1.2]">
          Facilities
        </h2>

        <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 gap-x-6 sm:gap-x-8 gap-y-4">
          {[
            "Club House",
            "Swimming Pool",
            "Car Parking",
            "Power Backup",
            "Park",
            "Children Play Area",
            "Vaastu Compliant",
            "Gas Pipeline",
            "Gym",
            "Shopping Center",
            "Security",
            "Visitor Parking",
          ].map((facility) => (
            <div key={facility} className="flex items-center gap-2.5">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-teal-600 shrink-0"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="9 12 11 14 15 10" />
              </svg>
              <span className="text-slate-700 text-sm">{facility}</span>
            </div>
          ))}
        </div>
      </section>
      <MapViewsSection
        lat={project.lat}
        lng={project.lng}
        projectName={project.title}
      />
    </div>
  );
}
