"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface MapViewsSectionProps {
  lat?: number;
  lng?: number;
  projectName?: string;
}

const CATEGORIES = [
  {
    id: "restaurants",
    label: "Restaurants",
    osmTag: "amenity=restaurant",
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

  useEffect(() => {
    let cancelled = false;

    const loadLeaflet = async () => {
      if (!document.getElementById("leaflet-css")) {
        const link = document.createElement("link");
        link.id = "leaflet-css";
        link.rel = "stylesheet";
        link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
        document.head.appendChild(link);
      }

      if (!(window as any).L) {
        await new Promise<void>((resolve, reject) => {
          const script = document.createElement("script");
          script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
          script.onload = () => resolve();
          script.onerror = () => reject(new Error("Failed to load Leaflet"));
          document.head.appendChild(script);
        });
      }

      if (!cancelled) setLeafletReady(true);
    };

    loadLeaflet().catch((err) => {
      if (!cancelled) {
        setError(err.message || "Failed to load map");
        setLoading(false);
      }
    });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!leafletReady || !mapRef.current || mapInstanceRef.current) return;

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

    const projectIcon = L.divIcon({
      html: `<div style="background:#0f766e;color:white;border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;border:3px solid white;box-shadow:0 2px 8px rgba(0,0,0,0.3)">★</div>`,
      className: "",
      iconSize: [36, 36],
      iconAnchor: [18, 18],
    });

    L.marker([lat, lng], { icon: projectIcon })
      .addTo(map)
      .bindPopup(`<strong>${projectName}</strong><br><em> Project</em>`)
      .openPopup();

    markersLayerRef.current = L.layerGroup().addTo(map);

    const observer = new ResizeObserver(() => {
      map.invalidateSize();
    });

    observer.observe(mapRef.current);

    setTimeout(() => map.invalidateSize(), 100);
    setTimeout(() => map.invalidateSize(), 300);
    setTimeout(() => map.invalidateSize(), 500);

    return () => {
      observer.disconnect();
      map.remove();
      mapInstanceRef.current = null;
    };
  }, [leafletReady, lat, lng, projectName]);

  const fetchAndRender = useCallback(async () => {
    if (!leafletReady || !mapInstanceRef.current || !markersLayerRef.current)
      return;

    const L = (window as any).L;

    setLoading(true);
    setError("");

    markersLayerRef.current.clearLayers();

    try {
      const overpassQuery = `
        [out:json][timeout:25];
        (
          node[${category.osmTag}](around:1500,${lat},${lng});
          way[${category.osmTag}](around:1500,${lat},${lng});
          relation[${category.osmTag}](around:1500,${lat},${lng});
        );
        out center 30;
      `;

      const res = await fetch("/api/nearby-places", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          lat,
          lng,
          osmTag: category.osmTag,
        }),
        cache: "no-store",
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Nearby places API error");
      }

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

        const addr = [
          el.tags?.["addr:housenumber"],
          el.tags?.["addr:street"],
          el.tags?.["addr:city"],
        ]
          .filter(Boolean)
          .join(", ");

        L.marker([elLat, elLng], { icon: poiIcon })
          .addTo(markersLayerRef.current)
          .bindPopup(`<strong>${name}</strong>${addr ? `<br>${addr}` : ""}`);
      });

      const layers = markersLayerRef.current.getLayers();

      if (layers.length > 0) {
        const group = L.featureGroup(layers);

        mapInstanceRef.current.fitBounds(group.getBounds().pad(0.2), {
          maxZoom: 15,
        });
      }

      setLoading(false);
    } catch (err) {
      setError("Could not load nearby places. Try again.");
      setLoading(false);
    }
  }, [leafletReady, category, lat, lng]);

  useEffect(() => {
    if (!leafletReady) return;

    const timer = setTimeout(() => {
      fetchAndRender();
    }, 100);

    return () => clearTimeout(timer);
  }, [fetchAndRender, leafletReady]);

  return (
    <div className="relative w-full h-full min-h-[300px] sm:min-h-[400px]">
      <div ref={mapRef} className="w-full h-full absolute inset-0" />

      {loading && (
        <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px] flex items-center justify-center z-20 pointer-events-none">
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 px-5 py-4 flex flex-col items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 border-4 border-slate-200 border-t-teal-600 rounded-full animate-spin" />
              <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-teal-700">
                MAP
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm font-semibold text-slate-700">
                Finding nearby {category.label.toLowerCase()}
              </p>
              <p className="text-xs text-slate-400 mt-0.5">
                Please wait, map data is loading...
              </p>
            </div>
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

export default function MapViewsSection({
  lat = 18.5362,
  lng = 73.9008,
  projectName = "Project",
}: MapViewsSectionProps) {
  const [active, setActive] = useState(CATEGORIES[0]);

  return (
    <section className="relative z-0 py-8 sm:py-10 md:py-14 px-4 sm:px-6 lg:px-28">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:font-extrabold text-slate-900 mb-6 sm:mb-8 tracking-tight leading-[1.2]">
        Map Views - Explore Neighbourhood
      </h2>

      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
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
                <span className="text-white flex items-center justify-center">
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

        <div className="flex-1 rounded-xl border border-slate-200 shadow-md bg-slate-100 overflow-hidden relative min-h-[320px] sm:min-h-[400px] h-[340px] sm:h-[420px] md:h-[480px] lg:h-[520px]">
          <div className="absolute top-3 left-3 z-10 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-full px-3 py-1.5 text-xs font-semibold text-slate-600 shadow">
            Showing nearby {active.label}
          </div>

          <LeafletMap
            key={active.id}
            lat={lat}
            lng={lng}
            projectName={projectName}
            category={active}
          />
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-slate-400">
        <span className="w-3 h-3 rounded-full bg-teal-600 inline-block" />
        <span>Project Location</span>
        <span className="mx-1">·</span>
        <span
          className="w-3 h-3 rounded-full inline-block"
          style={{ backgroundColor: active.color }}
        />
        <span>Nearby {active.label}</span>
        <span className="mx-1">·</span>
        <span>Map data © OpenStreetMap contributors</span>
      </div>
    </section>
  );
}
