"use client";
import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import * as topojson from "topojson-client";
import { motion, AnimatePresence } from "framer-motion";

const REGIONS = [
  {
    id: "middle-east",
    name: "Middle East",
    beds: "100+",
    countries: ["Saudi Arabia", "United Arab Emirates", "Qatar", "Kuwait", "Oman", "Bahrain", "Jordan", "Iraq", "Israel", "Lebanon", "Syria", "Yemen"],
    color: "#0D9488",
    center: [45, 24] 
  },
  {
    id: "africa",
    name: "Africa",
    beds: "300+",
countries: ["Egypt", "Nigeria", "Kenya", "South Africa", "Ethiopia", "Ghana", "Morocco", "Algeria", "Tanzania", "Uganda", "Angola", "Mozambique", "Ivory Coast", "Madagascar", "Cameroon", "Niger", "Burkina Faso", "Mali", "Malawi", "Zambia", "Senegal", "Chad", "Somalia", "Zimbabwe", "Guinea", "Rwanda", "Benin", "Burundi", "Tunisia", "South Sudan", "Togo", "Sierra Leone", "Libya", "Congo", "Central African Republic", "Mauritania", "Eritrea", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Eswatini", "Djibouti", "Comoros", "Cabo Verde", "Sao Tome and Principe", "Seychelles"],
    color: "#0D9488",
    center: [20, 0]
  },
  {
    id: "south-asia",
    name: "South Asia",
    beds: "13000+",
    countries: ["India", "Pakistan", "Bangladesh", "Sri Lanka", "Nepal", "Bhutan", "Maldives", "Afghanistan"],
    color: "#0D9488",
    center: [78, 22]
  },
  {
    id: "southeast-asia",
    name: "Southeast Asia",
    beds: "100+",
    countries: ["Indonesia", "Vietnam", "Thailand", "Malaysia", "Philippines", "Singapore", "Myanmar", "Cambodia", "Laos", "Brunei", "Timor-Leste"],
    color: "#0D9488",
    center: [108, 15]
  },
];

export const GlobalPresence: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(REGIONS[0].id);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [indicatorPos, setIndicatorPos] = useState({ x: 0, y: 0 });

  const activeRegionData = REGIONS.find((r) => r.id === hoveredRegion);

  useEffect(() => {
    const updateDimensions = () => {
      if (svgRef.current?.parentElement) {
        setDimensions({
          width: svgRef.current.parentElement.clientWidth,
          height: svgRef.current.parentElement.clientHeight || 600,
        });
      }
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Sync D3 Projection to State for the Leader Line
  useEffect(() => {
    if (dimensions.width === 0 || !activeRegionData) return;
    
    const projection = d3.geoMercator()
      .scale(dimensions.width / 4.2)
      .center([45, 12]) 
      .translate([dimensions.width / 2, dimensions.height / 2]);

    const [x, y] = projection(activeRegionData.center as [number, number]) || [0, 0];
    setIndicatorPos({ x, y });
  }, [hoveredRegion, dimensions, activeRegionData]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setHoveredRegion((current) => {
        const currentIndex = REGIONS.findIndex((r) => r.id === current);
        const nextIndex = (currentIndex + 1) % REGIONS.length;
        return REGIONS[nextIndex].id;
      });
    }, 3500);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  useEffect(() => {
    if (dimensions.width === 0 || !svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const projection = d3.geoMercator()
      .scale(dimensions.width / 4.2)
      .center([45, 12]) 
      .translate([dimensions.width / 2, dimensions.height / 2]);

    const path = d3.geoPath().projection(projection);

    d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json").then((data: any) => {
      const countries = topojson.feature(data, data.objects.countries) as any;
      const g = svg.append("g");

      g.selectAll("path")
        .data(countries.features)
        .enter()
        .append("path")
        .attr("d", path as any)
        .attr("fill", (d: any) => {
          const countryName = d.properties.name;
          const region = REGIONS.find((r) => r.countries.includes(countryName));
          return region ? region.color : "#94A3B8";
        })
        .attr("stroke", "#475569") 
        .attr("stroke-width", 0.6)
        .attr("opacity", (d: any) => {
          const countryName = d.properties.name;
          const region = REGIONS.find((r) => r.countries.includes(countryName));
          if (hoveredRegion) {
            if (region) return region.id === hoveredRegion ? 1 : 0.35;
            return 0.25; 
          }
          return region ? 0.9 : 0.45;
        })
        .style("transition", "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)")
        .on("mouseenter", (event, d: any) => {
          const countryName = d.properties.name;
          const region = REGIONS.find((r) => r.countries.includes(countryName));
          if (region) {
            setIsAutoPlaying(false);
            setHoveredRegion(region.id);
          }
        })
        .on("mouseleave", () => setIsAutoPlaying(true));
    });
  }, [dimensions, hoveredRegion]);

  return (
    <section className="relative bg-white py-24 lg:py-40 overflow-hidden">
      <div className="mx-auto max-w-6xl px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5 space-y-8 z-10">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <h2 className="text-3xl font-extrabold leading-tight text-slate-900 md:text-5xl lg:text-6xl tracking-tight">
                International Standards.<br />
                <span className="text-teal-600">Local Intelligence.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-500 font-medium">
                Navigating complex regulatory environments to deliver JCI and NABH compliant assets in diverse global markets.
              </p>

              <div className="mt-12 grid grid-cols-2 gap-4">
                {REGIONS.map((region) => (
                  <motion.div
                    key={region.id}
                    onMouseEnter={() => { setIsAutoPlaying(false); setHoveredRegion(region.id); }}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                    animate={{
                      scale: hoveredRegion === region.id ? 1.05 : 1,
                      borderColor: hoveredRegion === region.id ? region.color : "#e2e8f0",
                      backgroundColor: hoveredRegion === region.id ? "#f8fafc" : "#ffffff"
                    }}
                    className={`group cursor-pointer rounded-xl border p-4 transition-all duration-300 ${hoveredRegion === region.id ? "shadow-md" : ""}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: region.color }} />
                      <span className={`text-xs font-bold uppercase tracking-wider ${hoveredRegion === region.id ? "text-slate-900" : "text-slate-400"}`}>
                        {region.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 relative flex items-center justify-center">
            <div className="relative h-[350px] w-[450px] lg:h-[600px] lg:w-[600px] rounded-full overflow-hidden border border-slate-200 bg-slate-50/50 shadow-[inset_0_0_60px_rgba(0,0,0,0.05)]">
              
              {/* Leader Line Layer */}
              <svg className="absolute inset-0 z-20 pointer-events-none w-full h-full">
                <AnimatePresence>
                  {hoveredRegion && (
                    <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      {/* Connection Line */}
                      <motion.line
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        x1={indicatorPos.x}
                        y1={indicatorPos.y}
                        x2={indicatorPos.x + 40}
                        y2={indicatorPos.y - 40}
                        stroke="#0D9488"
                        strokeWidth="1.5"
                        strokeDasharray="4 2"
                      />
                      {/* Anchor Point on Country */}
                      <motion.circle
                        cx={indicatorPos.x}
                        cy={indicatorPos.y}
                        r="3"
                        fill="#0D9488"
                      />
                    </motion.g>
                  )}
                </AnimatePresence>
              </svg>

              {/* Bed Count Label - Positioned relative to the indicatorPos */}
              <AnimatePresence>
                {hoveredRegion && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1, 
                      y: 0,
                      left: indicatorPos.x + 45,
                      top: indicatorPos.y - 70 
                    }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute z-30 pointer-events-none whitespace-nowrap bg-white/90 backdrop-blur-sm border border-slate-200 px-3 py-1.5 rounded-lg shadow-xl"
                  >
                    <p className="text-xl font-black text-slate-900">
                      {activeRegionData?.beds} <span className="text-teal-600 text-xs uppercase font-bold">Beds</span>
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <svg ref={svgRef} className="h-full w-full relative z-10" />
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0)_40%,rgba(255,255,255,0.8)_100%)] z-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};