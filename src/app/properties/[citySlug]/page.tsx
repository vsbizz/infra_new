"use client";

import { useState, use, useMemo, useEffect, useRef } from "react";
import {
  MapPin,
  ChevronLeft,
  Ruler,
  CheckCircle2,
  ArrowRight,
  Bed,
  Microscope,
  Layout,
  ChevronDown,
  X,
} from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { areasData } from "@/data/cityAreas";
import { portfolioData } from "@/data/portfolio";
import { citiesData } from "@/data/cities";
import { projectsData, type Project } from "@/data/projects";
import FeaturedCategories from "@/components/featured-categories";
import Testimonial from "@/components/testimonial";

// ─── Constants ────────────────────────────────────────────────────────────────

const TABS = [
  "All",
  "Apartments",
  "Plot",
  "Villas",
  "Penthouse",
  "Senior Living",
  "Resale",
];

const PER_PAGE = 6;

// Real coordinates for every city that has a slug in citiesData.
// Add more as you expand your city list.
const CITY_COORDS: Record<string, { lat: number; lng: number }> = {
  mumbai: { lat: 19.076, lng: 72.8777 },
  delhi: { lat: 28.6139, lng: 77.209 },
  bangalore: { lat: 12.9716, lng: 77.5946 },
  hyderabad: { lat: 17.385, lng: 78.4867 },
  chennai: { lat: 13.0827, lng: 80.2707 },
  kolkata: { lat: 22.5726, lng: 88.3639 },
  pune: { lat: 18.5204, lng: 73.8567 },
  ahmedabad: { lat: 23.0225, lng: 72.5714 },
  jaipur: { lat: 26.9124, lng: 75.7873 },
  lucknow: { lat: 26.8467, lng: 80.9462 },
  surat: { lat: 21.1702, lng: 72.8311 },
  indore: { lat: 22.7196, lng: 75.8577 },
  chandigarh: { lat: 30.7333, lng: 76.7794 },
  kochi: { lat: 9.9312, lng: 76.2673 },
  visakhapatnam: { lat: 17.6868, lng: 83.2185 },
  vadodara: { lat: 22.3072, lng: 73.1812 },
  nagpur: { lat: 21.1458, lng: 79.0882 },
  bhopal: { lat: 23.2599, lng: 77.4126 },
  coimbatore: { lat: 11.0168, lng: 76.9558 },
  thiruvananthapuram: { lat: 8.5241, lng: 76.9366 },
};

// ─── Status helpers ───────────────────────────────────────────────────────────

type ProjectStatus = "ready" | "under-construction" | "upcoming";

const STATUS_CONFIG: Record<
  ProjectStatus,
  { label: string; color: string; bg: string }
> = {
  ready: {
    label: "Ready to Move",
    color: "#15803d", // deep green (professional)
    bg: "#dcfce7", // soft green background
  },

  "under-construction": {
    label: "Under Construction",
    color: "#b45309", // amber/orange (progress state)
    bg: "#fef3c7", // soft amber
  },

  upcoming: {
    label: "Upcoming",
    color: "#1d4ed8", // blue (neutral/info)
    bg: "#dbeafe", // soft blue
  },
};
function deriveStatus(possession: string): ProjectStatus {
  const p = possession.toLowerCase();
  if (p.includes("ready")) return "ready";
  // Possession dates in 2026 are effectively "upcoming" (< 2 years away)
  if (p.includes("2026")) return "upcoming";
  if (p.includes("2027")) return "upcoming";
  // 2028+ treated as under construction
  return "under-construction";
}

// ─── Inline Leaflet city-projects map ────────────────────────────────────────

interface CityMapProps {
  citySlug: string;
  cityLat: number;
  cityLng: number;
  projects: Project[];
  onProjectClick: (slug: string) => void;
}

function CityProjectsMap({
  citySlug,
  cityLat,
  cityLng,
  projects,
  onProjectClick,
}: CityMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const init = async () => {
      // 1. Inject Leaflet CSS once
      if (!document.getElementById("leaflet-css")) {
        const link = document.createElement("link");
        link.id = "leaflet-css";
        link.rel = "stylesheet";
        link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
        document.head.appendChild(link);
      }

      // 2. Inject Leaflet JS once
      if (!(window as any).L) {
        await new Promise<void>((resolve, reject) => {
          const script = document.createElement("script");
          script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
          script.onload = () => resolve();
          script.onerror = reject;
          document.head.appendChild(script);
        });
      }

      if (cancelled || !mapRef.current) return;

      // Destroy previous instance if the component re-mounts
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }

      const L = (window as any).L;
      const map = L.map(mapRef.current, { zoomControl: true });
      mapInstance.current = map;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
      }).addTo(map);

      // Force Leaflet to read the container's real pixel size on mobile
      const observer = new ResizeObserver(() => {
        map.invalidateSize();
      });
      observer.observe(mapRef.current);

      // Multiple invalidations for mobile
      setTimeout(() => map.invalidateSize(), 100);
      setTimeout(() => map.invalidateSize(), 300);
      setTimeout(() => map.invalidateSize(), 500);

      const markers: any[] = [];

      projects.forEach((project) => {
        const status = deriveStatus(project.possession);
        const cfg = STATUS_CONFIG[status];

        // Label-style callout pin
        const icon = L.divIcon({
          html: `
            <div style="display:flex;flex-direction:column;align-items:center;">
              <div style="
                background:${cfg.color};color:#fff;border-radius:8px;
                padding:4px 10px;font-size:12px;font-weight:700;
                white-space:nowrap;box-shadow:0 2px 8px rgba(0,0,0,0.25);
                border:2px solid #fff;font-family:system-ui,sans-serif;
                max-width:160px;overflow:hidden;text-overflow:ellipsis;
              ">${project.title}</div>
              <div style="
                width:0;height:0;
                border-left:7px solid transparent;
                border-right:7px solid transparent;
                border-top:8px solid ${cfg.color};
                margin-top:-1px;
              "></div>
            </div>`,
          className: "",
          iconSize: [164, 44],
          iconAnchor: [82, 44],
          popupAnchor: [0, -46],
        });

        const popup = L.popup({ maxWidth: 220, closeButton: true }).setContent(`
          <div style="font-family:system-ui,sans-serif;min-width:180px;">
            <img src="${project.images[0]}" alt="${project.title}"
              style="width:100%;height:80px;object-fit:cover;border-radius:6px;margin-bottom:8px;" />
            <p style="font-weight:700;font-size:14px;margin:0 0 3px;">${project.title}</p>
            <p style="font-size:12px;color:#64748b;margin:0 0 5px;">${project.location}</p>
            <span style="
              display:inline-block;background:${cfg.bg};color:${cfg.color};
              font-size:11px;font-weight:700;padding:2px 8px;border-radius:20px;
            ">${cfg.label}</span>
            <p style="font-size:12px;color:#0f766e;font-weight:700;margin:5px 0 8px;">${project.price}</p>
            <div style="display:flex;gap:6px;font-size:11px;color:#64748b;margin-bottom:8px;">
              <span>${project.beds}</span>
              <span>·</span>
              <span>${project.area}</span>
            </div>
            <a
              href="/properties/${citySlug}/${project.slug}"
              style="
                display:block;text-align:center;background:#0f766e;color:#fff;
                border-radius:8px;padding:6px 12px;font-size:12px;font-weight:700;
                text-decoration:none;
              ">View Project →</a>
          </div>
        `);

        const marker = L.marker([project.lat, project.lng], { icon })
          .addTo(map)
          .bindPopup(popup);

        marker.on("click", () => {
          onProjectClick(project.slug);
        });

        markers.push(marker);
      });

      // Fit map to all markers, or fall back to city centre
      if (markers.length > 0) {
        const group = L.featureGroup(markers);
        map.fitBounds(group.getBounds().pad(0.25), { maxZoom: 14 });
      } else {
        map.setView([cityLat, cityLng], 12);
      }

      if (!cancelled) setLoading(false);
    };

    init().catch((err) => {
      console.error("Leaflet init error:", err);
      if (!cancelled) setLoading(false);
    });

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [citySlug]); // re-init only when city changes

  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden min-h-[300px] sm:min-h-[400px]">
      <div ref={mapRef} className="w-full h-full absolute inset-0" />
      {loading && (
        <div className="absolute inset-0 bg-white/80 flex flex-col items-center justify-center gap-3 z-10">
          <div className="w-8 h-8 border-2 border-teal-600 border-t-transparent rounded-full animate-spin" />
          <span className="text-sm text-slate-500">Loading map…</span>
        </div>
      )}
    </div>
  );
}

// ─── Status legend pill ───────────────────────────────────────────────────────

function StatusPill({
  status,
  count,
}: {
  status: ProjectStatus;
  count: number;
}) {
  const cfg = STATUS_CONFIG[status];
  return (
    <span
      className="text-xs font-semibold px-2.5 py-1 rounded-full"
      style={{ background: cfg.bg, color: cfg.color }}
    >
      {count} {cfg.label}
    </span>
  );
}

// ─── Main page component ──────────────────────────────────────────────────────

export default function PropertyDetail({
  params,
}: {
  params: Promise<{ citySlug: string }>;
}) {
  const { citySlug } = use(params);
  const router = useRouter();
  const searchParams = useSearchParams();

  const property = portfolioData.find((p) => p.slug === citySlug);
  const city = !property ? citiesData.find((c) => c.slug === citySlug) : null;

  const categoryParam = searchParams.get("category") ?? "";
  const areaParam = searchParams.get("area") ?? "";
  const queryParam = searchParams.get("q") ?? "";

  const [liked, setLiked] = useState<Record<number, boolean>>({});
  const [page, setPage] = useState(0);
  const [activeTab, setActiveTab] = useState("All");
  const [query, setQuery] = useState(queryParam);
  const [selectedArea, setSelectedArea] = useState(areaParam);
  const [areaDropdownOpen, setAreaDropdownOpen] = useState(false);
  const [selectedBudget, setSelectedBudget] = useState("");
  const [budgetDropdownOpen, setBudgetDropdownOpen] = useState(false);

  const [selectedStage, setSelectedStage] = useState("");
  const [stageDropdownOpen, setStageDropdownOpen] = useState(false);
  useEffect(() => {
    setSelectedArea(areaParam);
    setQuery(queryParam);
    setPage(0);
  }, [areaParam, queryParam, categoryParam]);

  // ── Filtered project list (cards) ──────────────────────────────────────────
  const filteredProjects = useMemo(() => {
    return projectsData.filter((p) => {
      // Must belong to the current city uncomment later when we get actual projects
      // if (p.citySlug !== citySlug) return false;

      if (categoryParam) {
        const pCat = p.category.toLowerCase().replace(/\s+/g, "-");
        const matchCat =
          pCat.includes(categoryParam.toLowerCase()) ||
          categoryParam.toLowerCase().includes(pCat);
        if (!matchCat) return false;
      }

      if (selectedArea) {
        const pLoc = p.location.toLowerCase();
        const areaName = selectedArea.replace(/-/g, " ").toLowerCase();
        if (!pLoc.includes(areaName)) return false;
      }

      if (query) {
        const q = query.toLowerCase();
        const haystack = `${p.title} ${p.location} ${p.category}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }

      return true;
    });
  }, [citySlug, categoryParam, selectedArea, query]);

  const totalPages = Math.ceil(filteredProjects.length / PER_PAGE);
  const pageProjects = filteredProjects.slice(
    page * PER_PAGE,
    page * PER_PAGE + PER_PAGE,
  );

  // ── All city projects for the map (no filter - show everything) ────────────
  const cityMapProjects = useMemo(
    () => projectsData.filter((p) => p.citySlug === citySlug),
    [citySlug],
  );

  // ── URL helpers ────────────────────────────────────────────────────────────
  const updateUrl = (next: {
    category?: string;
    area?: string;
    q?: string;
  }) => {
    const p = new URLSearchParams(searchParams.toString());
    if (next.category !== undefined)
      next.category ? p.set("category", next.category) : p.delete("category");
    if (next.area !== undefined)
      next.area ? p.set("area", next.area) : p.delete("area");
    if (next.q !== undefined) next.q ? p.set("q", next.q) : p.delete("q");
    router.push(`/properties/${citySlug}?${p.toString()}`, { scroll: false });
  };

  const handleSearch = () => updateUrl({ q: query, area: selectedArea });

  const clearFilters = () => {
    setQuery("");
    setSelectedArea("");
    router.push(`/properties/${citySlug}`, { scroll: false });
  };

  // ── Guard ──────────────────────────────────────────────────────────────────
  if (!property && !city) return null;

  // ══════════════════════════════════════════════════════════════════════════
  // CITY PAGE
  // ══════════════════════════════════════════════════════════════════════════
  if (city) {
    const cityAreas = areasData[city.slug] ?? [];
    const selectedAreaLabel =
      cityAreas.find((a) => a.slug === selectedArea)?.name || "All Areas";
    const hasActiveFilters = categoryParam || selectedArea || query;
    const cityCoords = CITY_COORDS[city.slug] ?? { lat: 20.5937, lng: 78.9629 };

    // Status counts for the map legend
    const statusCounts = cityMapProjects.reduce<Record<ProjectStatus, number>>(
      (acc, p) => {
        const s = deriveStatus(p.possession);
        acc[s] = (acc[s] ?? 0) + 1;
        return acc;
      },
      { ready: 0, "under-construction": 0, upcoming: 0 },
    );

    return (
      <div className="min-h-screen bg-slate-50 city-page-banner overflow-hidden">
        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <div className="relative h-[44vh] sm:h-[60vh] md:h-[50vh] overflow-hidden">
          <img
            src={city.image}
            alt={city.name}
            className="w-full h-full object-cover img-fluid"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
          <div className="absolute top-1 bottom-0 left-0 right-0 p-4 sm:p-6 md:p-12 z-10">
            <div className="max-w-7xl mx-auto md:pt-0 pt-18">
              <Link
                href="/properties"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-5 transition-colors text-xs font-bold uppercase tracking-widest"
              >
                <ChevronLeft size={14} /> Back to Properties
              </Link>
              <h1 className="text-[32px] xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:font-extrabold text-white mb-4 xs:mb-5 md:mb-8 leading-[1.1] tracking-tight">
                {city.name}
              </h1>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-20 -mt-16">
          {/* ── Search bar ─────────────────────────────────────────────────── */}
          <div className="relative -top-6 sm:-top-14 md:-top-[5vh] md:left-[14%] overflow-visible p-0 sm:p-4 rounded-xl">
            {/* Tab row */}
            <div
              className="hidden sm:flex bg-white items-center overflow-x-auto border-b px-2 w-full md:w-fit rounded-tl-xl rounded-tr-xl border border-teal-500/100 hover:shadow-teal-500/10 transition-all duration-300 scrollbar-hide"
              style={{ boxShadow: "0 5px 10px rgba(19,30,41,.2)" }}
            >
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative flex items-center gap-1.5 px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold whitespace-nowrap shrink-0 transition-colors ${
                    activeTab === tab
                      ? "text-teal-600"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-black rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Input row */}
            <div
              className="flex flex-col md:flex-row items-stretch md:items-center gap-3 px-3 sm:px-4 py-3 bg-white w-full md:w-3/4 rounded-xl md:rounded-none rounded-br-xl md:rounded-r-xl border border-teal-500/100 hover:shadow-teal-500/10 transition-all duration-300"
              style={{ boxShadow: "0 5px 10px rgba(19,30,41,.2)" }}
            >
              <div className="flex items-center gap-3 flex-1 bg-slate-100 rounded-xl px-3 sm:px-4 h-11 sm:h-12">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#94a3b8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="shrink-0"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  placeholder="Developer, Micro-market, Street, Keyword"
                  className="flex-1 bg-transparent text-sm text-slate-700 py-4 md:py-3 placeholder:text-slate-400 focus:outline-none min-w-0"
                />
              </div>

              {/* Area dropdown */}
              <div className="relative w-full md:w-auto md:shrink-0">
                <button
                  onClick={() => setAreaDropdownOpen((o) => !o)}
                  className="flex items-center gap-2 bg-slate-100 rounded-xl md:rounded-full px-4 h-11 sm:h-12 text-sm font-semibold text-slate-700 hover:bg-slate-200 transition-colors w-full md:min-w-[160px] justify-between"
                >
                  <span className="truncate">{selectedAreaLabel}</span>
                  <ChevronDown
                    size={16}
                    className={`text-slate-500 transition-transform ${areaDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {areaDropdownOpen && (
                  <div className="absolute top-full left-0 md:right-0 md:left-auto mt-2 w-full md:w-64 max-h-72 overflow-auto bg-white border border-slate-200 rounded-xl shadow-xl z-50">
                    <button
                      onClick={() => {
                        setSelectedArea("");
                        setAreaDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-sm hover:bg-slate-50 transition-colors ${!selectedArea ? "text-teal-600 font-semibold" : "text-slate-700"}`}
                    >
                      All Areas
                    </button>
                    {cityAreas.map((a) => (
                      <button
                        key={a.id}
                        onClick={() => {
                          setSelectedArea(a.slug);
                          setAreaDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-sm hover:bg-slate-50 transition-colors ${selectedArea === a.slug ? "text-teal-600 font-semibold bg-teal-50" : "text-slate-700"}`}
                      >
                        {a.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={handleSearch}
                className="h-11 sm:h-12 md:h-[52px] w-full md:w-auto bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 sm:px-8 rounded-xl md:rounded-[1.5rem] font-bold hover:from-teal-600 hover:to-teal-700 hover:shadow-xl hover:shadow-teal-500/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-sm sm:text-base md:text-lg shadow-lg shadow-teal-500/20 whitespace-nowrap"
              >
                Search <ArrowRight size={20} className="shrink-0" />
              </button>
            </div>

            {/* Filter pills */}
            {/* Filter pills */}
            <div
              className="hidden sm:flex flex-wrap items-center gap-2 px-3 sm:px-4 pb-3 sm:pb-4 bg-white w-full md:w-fit rounded-b-xl border border-teal-500/100 p-3 transition-all duration-300"
              style={{ boxShadow: "0 5px 10px rgba(19,30,41,.2)" }}
            >
              {/* Budget dropdown */}
              <div className="relative">
                <button
                  onClick={() => {
                    setBudgetDropdownOpen((o) => !o);
                    setStageDropdownOpen(false);
                  }}
                  className="flex items-center gap-1.5 px-3 py-1.5 border border-slate-300 rounded-full text-xs sm:text-sm text-slate-600 hover:border-slate-500 hover:text-slate-800 transition-colors bg-white"
                >
                  {selectedBudget || "Budget"}
                  <ChevronDown size={13} className="text-slate-400" />
                </button>

                {budgetDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 max-h-72 overflow-auto bg-white border border-slate-200 rounded-xl shadow-xl z-50">
                    {[
                      "Budget",
                      "Under 50 Lacs",
                      "50 Lacs - 1 Cr",
                      "1 Cr - 2 Cr",
                      "2 Cr+",
                    ].map((item) => (
                      <button
                        key={item}
                        onClick={() => {
                          setSelectedBudget(item === "Budget" ? "" : item);
                          setBudgetDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-sm hover:bg-slate-50 transition-colors ${
                          selectedBudget === item
                            ? "text-teal-600 font-semibold bg-teal-50"
                            : "text-slate-700"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Stage dropdown */}
              <div className="relative">
                <button
                  onClick={() => {
                    setStageDropdownOpen((o) => !o);
                    setBudgetDropdownOpen(false);
                  }}
                  className="flex items-center gap-1.5 px-3 py-1.5 border border-slate-300 rounded-full text-xs sm:text-sm text-slate-600 hover:border-slate-500 hover:text-slate-800 transition-colors bg-white"
                >
                  {selectedStage || "Stage Of Construction"}
                  <ChevronDown size={13} className="text-slate-400" />
                </button>

                {stageDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 max-h-72 overflow-auto bg-white border border-slate-200 rounded-xl shadow-xl z-50">
                    {[
                      "Stage Of Construction",
                      "Ready to Move",
                      "Under Construction",
                      "Upcoming",
                    ].map((item) => (
                      <button
                        key={item}
                        onClick={() => {
                          setSelectedStage(
                            item === "Stage Of Construction" ? "" : item,
                          );
                          setStageDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-sm hover:bg-slate-50 transition-colors ${
                          selectedStage === item
                            ? "text-teal-600 font-semibold bg-teal-50"
                            : "text-slate-700"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ── Exclusive Projects ──────────────────────────────────────────── */}
          <div id="exclusive-projects" className="py-6 sm:py-10">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-2xl xs:text-[26px] sm:text-3xl md:text-4xl lg:text-5xl md:font-extrabold text-slate-900 mb-3 xs:mb-4 tracking-tight leading-[1.2]">
                  Exclusive Projects in {city.name}
                </h2>
                <p className="text-sm xs:text-[15px] sm:text-base md:text-lg font-normal leading-[1.6] text-slate-600">
                  Top-tier projects in {city.name}
                </p>
              </div>
            </div>

            {/* Active filter pills */}
            {hasActiveFilters && (
              <div className="flex flex-wrap items-center gap-2 mt-4 mb-2">
                <span className="text-xs text-slate-500 font-semibold uppercase tracking-wide">
                  Filters:
                </span>

                {categoryParam && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-xs font-medium">
                    Category: {categoryParam.replace(/-/g, " ")}
                    <button
                      onClick={() => updateUrl({ category: "" })}
                      className="hover:bg-teal-100 rounded-full p-0.5"
                    >
                      <X size={12} />
                    </button>
                  </span>
                )}

                {selectedArea && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-xs font-medium">
                    Area: {cityAreas.find((a) => a.slug === selectedArea)?.name}
                    <button
                      onClick={() => {
                        setSelectedArea("");
                        updateUrl({ area: "" });
                      }}
                      className="hover:bg-teal-100 rounded-full p-0.5"
                    >
                      <X size={12} />
                    </button>
                  </span>
                )}

                {query && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-xs font-medium">
                    Search: {query}
                    <button
                      onClick={() => {
                        setQuery("");
                        updateUrl({ q: "" });
                      }}
                      className="hover:bg-teal-100 rounded-full p-0.5"
                    >
                      <X size={12} />
                    </button>
                  </span>
                )}

                <button
                  onClick={clearFilters}
                  className="text-xs text-slate-500 hover:text-red-600 underline ml-2"
                >
                  Clear all
                </button>
              </div>
            )}

            <div className="text-end mb-6">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 border-b border-slate-900 pb-0.5 hover:text-brand-teal hover:border-brand-teal transition-colors"
              >
                View All Projects
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>

            {/* Project grid */}
            {pageProjects.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-xl border border-slate-200">
                <p className="text-slate-500 text-base mb-3">
                  No projects match your filters.
                </p>
                <button
                  onClick={clearFilters}
                  className="text-teal-600 font-semibold text-sm hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {pageProjects.map((p) => (
                  <Link href={`/properties/${citySlug}/${p.slug}`} key={p.id}>
                    <div className="relative rounded-xl overflow-hidden border-2 border-[#c9a84c] h-[250px] sm:h-80 cursor-pointer">
                      <div
                        className="absolute inset-0 bg-cover bg-center bg-[#2a2a2a]"
                        style={{ backgroundImage: `url(${p.images[0]})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/75" />

                      <div className="absolute top-3 left-3 right-3 flex justify-between items-center">
                        <span className="bg-white/15 backdrop-blur-md border border-white/30 text-white text-[10px] font-semibold tracking-wide px-3 py-1 rounded-full">
                          {p.category}
                        </span>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setLiked((l) => ({ ...l, [p.id]: !l[p.id] }));
                          }}
                          className="w-7 h-7 rounded-full bg-white/15 border border-white/30 flex items-center justify-center cursor-pointer"
                        >
                          <svg
                            width="13"
                            height="13"
                            viewBox="0 0 24 24"
                            fill={liked[p.id] ? "#0F766E" : "none"}
                            stroke={liked[p.id] ? "#0F766E" : "#fff"}
                            strokeWidth="2"
                          >
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                          </svg>
                        </button>
                      </div>

                      <div className="absolute top-14 left-3 right-3">
                        <h3 className="text-white text-base font-bold mb-1 leading-snug">
                          {p.title}
                        </h3>
                        <div className="flex items-center gap-1 mb-2">
                          <svg
                            width="11"
                            height="11"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#ddd"
                            strokeWidth="2"
                          >
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                          <span className="text-white/80 text-xs">
                            {p.location}
                          </span>
                        </div>
                        <div className="flex gap-3">
                          <div className="flex items-center gap-1">
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#ddd"
                              strokeWidth="1.8"
                            >
                              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                              <polyline points="9 22 9 12 15 12 15 22" />
                            </svg>
                            <span className="text-white/80 text-xs">
                              {p.beds}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#ddd"
                              strokeWidth="1.8"
                            >
                              <rect x="3" y="3" width="18" height="18" rx="2" />
                              <path d="M3 9h18M9 21V9" />
                            </svg>
                            <span className="text-white/80 text-xs">
                              {p.area}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 px-3 pb-3">
                        <p className="text-white/60 text-[9px] uppercase tracking-widest font-semibold mb-0.5">
                          Possession
                        </p>
                        <p className="text-white text-sm font-semibold">
                          {p.possession}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-1.5 mt-8">
                <button
                  onClick={() => setPage((p) => Math.max(p - 1, 0))}
                  disabled={page === 0}
                  className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${page === 0 ? "border-slate-200 text-slate-300 cursor-not-allowed" : "border-slate-300 text-slate-600 hover:border-slate-500"}`}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>

                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i)}
                    className={`w-8 h-8 rounded-full text-sm font-semibold transition-all ${i === page ? "bg-slate-900 text-white" : "border border-slate-300 text-slate-600 hover:border-slate-500"}`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  onClick={() =>
                    setPage((p) => Math.min(p + 1, totalPages - 1))
                  }
                  disabled={page === totalPages - 1}
                  className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${page === totalPages - 1 ? "border-slate-200 text-slate-300 cursor-not-allowed" : "border-slate-300 text-slate-600 hover:border-slate-500"}`}
                >
                  <svg
                    width="14"
                    height="14"
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
            )}
          </div>

          {/* ── Popular Locations ───────────────────────────────────────────── */}
          {cityAreas.length > 0 && (
            <div className="py-10">
              <h2 className="text-2xl xs:text-[26px] sm:text-3xl md:text-4xl lg:text-5xl md:font-extrabold text-slate-900 mb-3 xs:mb-4 tracking-tight leading-[1.2]">
                Popular Location
              </h2>
              <p className="text-sm xs:text-[15px] sm:text-base md:text-lg font-normal leading-[1.6] text-slate-600 mb-8">
                Explore prime locations and key real estate destinations in{" "}
                {city.name}
              </p>

              <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {cityAreas.map((area) => (
                  <button
                    key={area.id}
                    onClick={() => {
                      setSelectedArea(area.slug);
                      updateUrl({ area: area.slug });
                      setTimeout(() => {
                        document
                          .getElementById("exclusive-projects")
                          ?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                      }, 100);
                    }}
                    className={`flex items-center gap-4 bg-white border rounded-lg shadow-sm hover:shadow-md hover:border-teal-600 transition-all group cursor-pointer text-left ${selectedArea === area.slug ? "border-teal-600 bg-teal-50" : "border-slate-100"}`}
                    style={{ padding: "16px" }}
                  >
                    <div
                      className={`w-10 h-10 sm:w-16 sm:h-16 shrink-0 rounded-xl flex items-center justify-center transition-colors ${selectedArea === area.slug ? "bg-teal-100" : "bg-slate-100 group-hover:bg-teal-100"}`}
                    >
                      <svg
                        className="w-5 h-5 sm:w-7 sm:h-7"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#0F766E"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <span
                      className={`font-semibold text-xs md:text-sm leading-snug transition-colors ${selectedArea === area.slug ? "text-teal-600" : "text-slate-800 group-hover:text-teal-600"}`}
                    >
                      {area.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ── City Projects Map ────────────────────────────────────────────── */}
        {cityMapProjects.length > 0 && (
          <section className="py-8 sm:py-10 md:py-14 px-4 sm:px-6 lg:px-28 relative z-0">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 sm:mb-8">
              <div>
                <h2 className="text-2xl xs:text-[26px] sm:text-3xl md:text-4xl lg:text-5xl md:font-extrabold text-slate-900 tracking-tight leading-[1.2]">
                  Projects in {city.name}
                </h2>
                <p className="text-sm sm:text-base text-slate-500 mt-1.5">
                  {cityMapProjects.length} project
                  {cityMapProjects.length !== 1 ? "s" : ""} across the city
                </p>
              </div>

              {/* Status legend */}
              <div className="flex flex-wrap gap-2">
                {(
                  ["ready", "under-construction", "upcoming"] as ProjectStatus[]
                )
                  .filter((s) => statusCounts[s] > 0)
                  .map((s) => (
                    <StatusPill key={s} status={s} count={statusCounts[s]} />
                  ))}
              </div>
            </div>

            {/* Map + project list side-by-side on desktop */}
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Map */}
              <div className="flex-1 min-h-[320px] sm:min-h-[400px] h-[380px] sm:h-[460px] lg:h-[540px] rounded-xl border border-slate-200 shadow-md overflow-hidden bg-slate-100 z-0">
                <CityProjectsMap
                  citySlug={citySlug}
                  cityLat={cityCoords.lat}
                  cityLng={cityCoords.lng}
                  projects={cityMapProjects}
                  onProjectClick={(slug) =>
                    router.push(`/properties/${citySlug}/${slug}`)
                  }
                />
              </div>

              {/* Scrollable project list */}
              <div className="w-full lg:w-72 xl:w-80 shrink-0 h-[280px] lg:h-[540px] overflow-y-auto flex flex-col gap-2 pr-1">
                {cityMapProjects.map((p) => {
                  const status = deriveStatus(p.possession);
                  const cfg = STATUS_CONFIG[status];
                  return (
                    <Link
                      href={`/properties/${citySlug}/${p.slug}`}
                      key={p.id}
                      className="flex gap-3 bg-white border border-slate-200 rounded-xl p-3 hover:border-teal-400 hover:shadow-sm transition-all group"
                    >
                      <img
                        src={p.images[0]}
                        alt={p.title}
                        className="w-16 h-16 rounded-lg object-cover shrink-0"
                      />
                      <div className="min-w-0">
                        <p className="font-semibold text-sm text-slate-900 leading-tight truncate group-hover:text-teal-700 transition-colors">
                          {p.title}
                        </p>
                        <p className="text-xs text-slate-500 mt-0.5 truncate">
                          {p.location}
                        </p>
                        <div className="flex items-center justify-between mt-1.5 gap-1">
                          <span
                            className="text-[10px] font-semibold px-2 py-0.5 rounded-full truncate"
                            style={{ background: cfg.bg, color: cfg.color }}
                          >
                            {cfg.label}
                          </span>
                          <span className="text-xs text-teal-700 font-semibold shrink-0">
                            {p.price}
                          </span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            <p className="mt-3 text-xs text-slate-400">
              Map data &copy;{" "}
              <a
                href="https://www.openstreetmap.org/copyright"
                className="underline underline-offset-2"
              >
                OpenStreetMap
              </a>{" "}
              contributors
            </p>
          </section>
        )}

        <FeaturedCategories citySlug={citySlug} />

        {/* ── Browse By Budget ─────────────────────────────────────────────── */}
        <section className="py-10 sm:py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="grid grid-cols-2 gap-3 h-[300px] sm:h-[420px] md:h-[520px]">
                <div className="flex flex-col gap-3">
                  <div className="flex-1 rounded-xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&q=80"
                      alt="Luxury interior"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 rounded-xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80"
                      alt="Modern building"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden h-full">
                  <img
                    src="https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&q=80"
                    alt="Villa with pool"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div>
                <h2 className="text-2xl xs:text-[26px] sm:text-3xl md:text-4xl lg:text-5xl md:font-extrabold text-slate-900 mb-3 xs:mb-4 tracking-tight leading-[1.2]">
                  Browse By Budget
                </h2>
                <p className="text-sm xs:text-[15px] sm:text-base md:text-lg font-normal leading-[1.6] text-slate-600 mb-8">
                  Finding the right property within your budget is a key factor
                  in making a smart real estate investment. Whether you&apos;re
                  looking for an affordable home, a mid-range property with
                  modern amenities, or a luxury residence in a prime location,
                  budget-based categorization helps streamline your search.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    {
                      label: "Affordable Projects",
                      path: "M32 8L8 28v28h16V40h16v16h16V28L32 8z",
                    },
                    { label: "Mid-segment", path: null },
                    { label: "Luxury Projects", path: null },
                  ].map(({ label }) => (
                    <div
                      key={label}
                      className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg border border-slate-200 bg-white hover:border-teal-600 hover:shadow-md transition-all group"
                    >
                      <div className="shrink-0 w-11 h-11 sm:w-14 sm:h-14 rounded-lg bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 transition-colors">
                        <svg
                          width="34"
                          height="34"
                          viewBox="0 0 64 64"
                          fill="none"
                          stroke="#0F766E"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M32 8L8 28v28h16V40h16v16h16V28L32 8z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-bold text-slate-800 text-sm md:text-base">
                          {label}
                        </p>
                        <p className="text-xs text-slate-400 mt-0.5">
                          120+ Available Properties
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Testimonial />
      </div>
    );
  }

  // ══════════════════════════════════════════════════════════════════════════
  // PORTFOLIO / PROJECT DETAIL PAGE
  // ══════════════════════════════════════════════════════════════════════════
  return (
    <div className="min-h-screen bg-slate-50 pb-16 md:pb-24">
      <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-12 z-10">
          <div className="max-w-7xl mx-auto">
            <Link
              href={`/properties/${citySlug}`}
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-5 md:mb-8 transition-colors text-xs font-bold uppercase tracking-widest"
            >
              <ChevronLeft size={14} /> Back to Properties
            </Link>
            <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
              <span className="bg-brand-teal text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-bold">
                {property.category}
              </span>
              <span className="bg-white/20 backdrop-blur-md text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-bold border border-white/30">
                {property.subcategory}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight max-w-4xl">
              {property.title}
            </h1>
            <div className="flex items-center gap-2 text-slate-200">
              <MapPin className="w-4 h-4 md:w-5 md:h-5 text-brand-teal shrink-0" />
              <span className="text-base md:text-lg font-medium">India</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-6 sm:-mt-10 md:-mt-12 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-10 md:mb-16">
          {[
            {
              icon: Bed,
              label: "Bed Capacity",
              value: `${property.projectBrief.noOfBeds} Beds`,
            },
            {
              icon: Ruler,
              label: "Built-up Area",
              value: property.projectBrief.builtUpArea,
            },
            {
              icon: Layout,
              label: "Campus Type",
              value: property.projectBrief.buildingConfiguration,
            },
            {
              icon: Microscope,
              label: "Asset Class",
              value: "Clinical Infrastructure",
            },
          ].map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="bg-white p-4 md:p-6 rounded-md border border-slate-200 shadow-lg shadow-slate-200/40 flex items-center gap-3 md:gap-5"
            >
              <div className="w-9 h-9 md:w-12 md:h-12 bg-slate-50 rounded-xl flex items-center justify-center text-brand-teal border border-slate-100 shrink-0">
                <Icon size={18} />
              </div>
              <div className="min-w-0">
                <p className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5 truncate">
                  {label}
                </p>
                <p className="text-sm md:text-lg font-bold text-slate-900 leading-tight">
                  {value}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-12 md:space-y-16">
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 md:mb-6 flex items-center gap-3">
                <div className="w-6 md:w-8 h-1 bg-brand-teal rounded-full shrink-0" />
                Project Brief
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                {property.projectBrief.shortDescription}
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 md:mb-6 flex items-center gap-3">
                <div className="w-6 md:w-8 h-1 bg-brand-teal rounded-full shrink-0" />
                Scope of Services
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {property.services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 md:gap-4 p-4 md:p-5 bg-white rounded-md border border-slate-100 shadow-sm hover:border-brand-teal/30 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-brand-teal mt-0.5 shrink-0" />
                    <span className="text-slate-700 font-semibold leading-snug text-sm md:text-base">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 md:mb-6 flex items-center gap-3">
                <div className="w-6 md:w-8 h-1 bg-brand-teal rounded-full shrink-0" />
                Asset Gallery
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {property.images.map((img, i) => (
                  <div
                    key={i}
                    className={`overflow-hidden rounded-md group shadow-md ${i === 0 ? "sm:col-span-2 aspect-video sm:aspect-21/9" : "aspect-video sm:aspect-16/10"}`}
                  >
                    <img
                      src={img}
                      alt={`${property.title} view ${i + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="lg:col-span-1">
            <div className="bg-white p-6 md:p-8 rounded-md border border-slate-200 shadow-xl shadow-slate-200/50 lg:sticky lg:top-24">
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-6 md:mb-8">
                Related Projects
              </h3>
              <div className="space-y-5 md:space-y-6">
                {portfolioData
                  .filter((p) => p.slug !== property.slug)
                  .slice(0, 3)
                  .map((p) => (
                    <Link
                      href={`/portfolio/${p.slug}`}
                      key={p.slug}
                      className="flex gap-4 group"
                    >
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-md overflow-hidden shrink-0 border border-slate-100">
                        <img
                          src={p.images[0]}
                          alt={p.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                        />
                      </div>
                      <div className="flex flex-col justify-center">
                        <h4 className="font-bold text-slate-900 text-sm line-clamp-2 mb-1 group-hover:text-brand-teal transition-colors">
                          {p.title}
                        </h4>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                          {p.projectBrief.noOfBeds} Beds
                        </span>
                      </div>
                    </Link>
                  ))}
              </div>
              <Link
                href="/portfolio"
                className="mt-8 md:mt-10 w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-3.5 md:py-4 rounded-full font-bold hover:bg-brand-teal transition-all text-sm md:text-base"
              >
                All Projects <ArrowRight size={16} />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
