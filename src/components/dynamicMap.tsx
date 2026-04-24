"use client";

import { useState, useEffect, useRef, useCallback } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface MapViewsSectionProps {
  lat?: number;
  lng?: number;
  projectName?: string;
  apiKey?: string;
}

// ─── Categories ───────────────────────────────────────────────────────────────
const CATEGORIES = [
  {
    id: "restaurants",
    label: "Restaurants",
    osmTag: "amenity=restaurant",
    nominatimQuery: "restaurant",
    color: "#e67e22",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
  },
  {
    id: "hotels",
    label: "Hotels",
    osmTag: "tourism=hotel",
    nominatimQuery: "hotel",
    color: "#8e44ad",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" />
        <path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
        <path d="M12 4v6" />
        <path d="M2 18h20" />
      </svg>
    ),
  },
  {
    id: "bus-stands",
    label: "Bus Stands",
    osmTag: "highway=bus_stop",
    nominatimQuery: "bus stop",
    color: "#27ae60",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="7" width="20" height="12" rx="2" />
        <path d="M16 21v-2M8 21v-2M2 11h20M7 7V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3" />
        <circle cx="7" cy="16" r="1" />
        <circle cx="17" cy="16" r="1" />
      </svg>
    ),
  },
  {
    id: "malls",
    label: "Shopping Malls",
    osmTag: "shop=mall",
    nominatimQuery: "shopping mall",
    color: "#2980b9",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
  {
    id: "hospitals",
    label: "Hospitals",
    osmTag: "amenity=hospital",
    nominatimQuery: "hospital",
    color: "#e74c3c",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    ),
  },
];

// ─── Leaflet map ──────────────────────────────────────────────────────────────
function LeafletMap({
  lat,
  lng,
  projectName,
  category,
}: {
  lat: number;
  lng: number;
  projectName: string;
  category: (typeof CATEGORIES)[0];
}) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersLayerRef = useRef<any>(null);
  const [leafletReady, setLeafletReady] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ── Step 1: load Leaflet CSS + JS, then set leafletReady = true ─────────────
  // This is the critical fix: we track readiness as React state so dependent
  // effects re-run once L is actually available on window.
  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      // Inject CSS
      if (!document.getElementById("leaflet-css")) {
        const link = document.createElement("link");
        link.id = "leaflet-css";
        link.rel = "stylesheet";
        link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
        document.head.appendChild(link);
      }

      // Inject JS only if not already loaded
      if (!(window as any).L) {
        await new Promise<void>((resolve, reject) => {
          const script = document.createElement("script");
          script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
          script.onload = () => resolve();
          script.onerror = () => reject(new Error("Failed to load Leaflet"));
          document.head.appendChild(script);
        });
      }

      // Only update state if component still mounted
      if (!cancelled) setLeafletReady(true);
    };

    load().catch((err) => {
      if (!cancelled) setError(err.message);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  // ── Step 2: init map — runs ONLY after leafletReady flips to true ───────────
  // Previously this effect ran on mount when L was undefined, exited early,
  // and never ran again because its deps [lat, lng, projectName] never changed.
  // Now leafletReady is in deps so it re-runs the moment Leaflet is loaded.
  useEffect(() => {
    if (!leafletReady) return;
    if (!mapRef.current) return;
    if (mapInstanceRef.current) return; // already initialised

    const L = (window as any).L;
    const map = L.map(mapRef.current, {
      center: [lat, lng],
      zoom: 15,
      zoomControl: true,
    });
    mapInstanceRef.current = map;

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
    }).addTo(map);

    // Project star pin
    const projectIcon = L.divIcon({
      html: `<div style="background:#0f766e;color:white;border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;border:3px solid white;box-shadow:0 2px 8px rgba(0,0,0,0.3)">★</div>`,
      className: "",
      iconSize: [36, 36],
      iconAnchor: [18, 18],
    });

    L.marker([lat, lng], { icon: projectIcon })
      .addTo(map)
      .bindPopup(`<strong>${projectName}</strong><br><em>This Project</em>`)
      .openPopup();

    markersLayerRef.current = L.layerGroup().addTo(map);

    // Force Leaflet to read the container's real pixel size.
    // ResizeObserver handles the mobile case where flex layout finishes
    // painting after Leaflet mounts (container was 0×0 at init time).
    const observer = new ResizeObserver(() => {
      map.invalidateSize();
    });
    observer.observe(mapRef.current);

    // Belt-and-braces fallback - multiple invalidations for mobile
    setTimeout(() => map.invalidateSize(), 100);
    setTimeout(() => map.invalidateSize(), 300);
    setTimeout(() => map.invalidateSize(), 500);

    return () => observer.disconnect();
  }, [leafletReady, lat, lng, projectName]);

  // ── Step 3: fetch POIs — runs after map is ready and category changes ───────
  const fetchAndRender = useCallback(async () => {
    if (!leafletReady || !mapInstanceRef.current) return;

    const L = (window as any).L;
    setLoading(true);
    setError("");

    if (markersLayerRef.current) markersLayerRef.current.clearLayers();

    try {
      const overpassQuery = `
        [out:json][timeout:20];
        (
          node[${category.osmTag}](around:1000,${lat},${lng});
          way[${category.osmTag}](around:1000,${lat},${lng});
        );
        out center 20;
      `;
      const res = await fetch(
        `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(overpassQuery)}`,
      );
      if (!res.ok) throw new Error("Overpass API error");
      const data = await res.json();
      const elements: any[] = data.elements ?? [];

      if (elements.length === 0) {
        setError(`No ${category.label.toLowerCase()} found nearby`);
        setLoading(false);
        return;
      }

      const poiIcon = L.divIcon({
        html: `<div style="background:${category.color};color:white;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-size:13px;border:2px solid white;box-shadow:0 1px 6px rgba(0,0,0,0.25)">●</div>`,
        className: "",
        iconSize: [28, 28],
        iconAnchor: [14, 14],
      });

      elements.forEach((el) => {
        const elLat = el.lat ?? el.center?.lat;
        const elLng = el.lon ?? el.center?.lon;
        if (!elLat || !elLng) return;

        const name = el.tags?.name ?? category.label.slice(0, -1);
        const addr = [el.tags?.["addr:street"], el.tags?.["addr:housenumber"]]
          .filter(Boolean)
          .join(" ");

        L.marker([elLat, elLng], { icon: poiIcon })
          .addTo(markersLayerRef.current)
          .bindPopup(`<strong>${name}</strong>${addr ? `<br>${addr}` : ""}`);
      });

      const group = L.featureGroup([...markersLayerRef.current.getLayers()]);
      if (group.getLayers().length > 0) {
        mapInstanceRef.current.fitBounds(group.getBounds().pad(0.15), {
          maxZoom: 15,
        });
      }

      setLoading(false);
    } catch {
      setError("Could not load nearby places. Try again.");
      setLoading(false);
    }
  }, [leafletReady, category, lat, lng]);

  useEffect(() => {
    if (!leafletReady) return;
    // Map might not be init'd yet on first render — wait a tick
    const timer = setTimeout(() => fetchAndRender(), 50);
    return () => clearTimeout(timer);
  }, [fetchAndRender, leafletReady]);

  return (
    <div className="relative w-full h-full min-h-[300px] sm:min-h-[400px]">
      <div ref={mapRef} className="w-full h-full absolute inset-0" />

      {loading && (
        <div className="absolute inset-0 bg-white/70 flex items-center justify-center z-10 pointer-events-none">
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 border-2 border-teal-600 border-t-transparent rounded-full animate-spin" />
            <span className="text-xs text-slate-500">
              Loading {category.label.toLowerCase()}…
            </span>
          </div>
        </div>
      )}

      {error && !loading && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white border border-slate-200 text-slate-500 text-xs px-3 py-2 rounded-lg shadow z-10">
          {error}
        </div>
      )}
    </div>
  );
}

// ─── Google Maps iframe ───────────────────────────────────────────────────────
function GoogleMapsEmbed({
  lat,
  lng,
  category,
  apiKey,
}: {
  lat: number;
  lng: number;
  category: (typeof CATEGORIES)[0];
  apiKey: string;
}) {
  const src = `https://www.google.com/maps/embed/v1/search?key=${apiKey}&q=${encodeURIComponent(category.nominatimQuery)}&center=${lat},${lng}&zoom=15`;
  return (
    <iframe
      key={`${category.id}-${lat}-${lng}`}
      src={src}
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function MapViewsSection({
  lat = 18.5362,
  lng = 73.9008,
  projectName = "This Project",
  apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "",
}: MapViewsSectionProps) {
  const [active, setActive] = useState(CATEGORIES[0]);

  return (
    <section className="relative z-0 py-8 sm:py-10 md:py-14 px-4 sm:px-6 lg:px-28">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:font-extrabold text-slate-900 mb-6 sm:mb-8 tracking-tight leading-[1.2]">
        Map Views — Explore Neighbourhood
      </h2>

      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
        {/* Category buttons — horizontal scroll on mobile, vertical column on desktop */}
        <div className="flex flex-row lg:flex-col gap-3 lg:gap-5 shrink-0 overflow-x-auto lg:overflow-visible scrollbar-hide pb-1 lg:pb-0">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat)}
              className="flex flex-col items-center gap-1.5 shrink-0 cursor-pointer border-none bg-transparent p-0"
              style={{ minWidth: "68px" }}
              aria-label={`Show ${cat.label}`}
            >
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-200 shadow-md"
                style={{
                  backgroundColor: active.id === cat.id ? cat.color : "#334155",
                  transform: active.id === cat.id ? "scale(1.1)" : "scale(1)",
                }}
              >
                <span
                  style={{
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {cat.icon}
                </span>
              </div>
              <span
                className="text-[11px] font-semibold text-center leading-tight transition-colors"
                style={{
                  maxWidth: "68px",
                  color: active.id === cat.id ? cat.color : "#64748b",
                }}
              >
                {cat.label}
              </span>
            </button>
          ))}
        </div>

        {/* Map container — explicit height at every breakpoint */}
        <div className="flex-1 rounded-xl border border-slate-200 shadow-md bg-slate-100 overflow-hidden relative min-h-[320px] sm:min-h-[400px] h-[340px] sm:h-[420px] md:h-[480px] lg:h-[520px]">
          {apiKey ? (
            <GoogleMapsEmbed
              lat={lat}
              lng={lng}
              category={active}
              apiKey={apiKey}
            />
          ) : (
            // key=active.id remounts LeafletMap on category switch so a fresh
            // map instance is created — avoids stale marker layer issues
            <LeafletMap
              key={active.id}
              lat={lat}
              lng={lng}
              projectName={projectName}
              category={active}
            />
          )}
        </div>
      </div>

      {/* Legend */}
      <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-slate-400">
        <span className="w-3 h-3 rounded-full bg-teal-600 inline-block" />
        <span>Project Location</span>
        <span className="mx-1">·</span>
        <span
          className="w-3 h-3 rounded-full inline-block"
          style={{ backgroundColor: active.color }}
        />
        <span>Nearby {active.label}</span>
        {!apiKey && (
          <>
            <span className="mx-1">·</span>
            <span>Map data © OpenStreetMap contributors</span>
          </>
        )}
      </div>
    </section>
  );
}
