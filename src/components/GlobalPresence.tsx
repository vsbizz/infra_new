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
    countries: [
      "Saudi Arabia",
      "United Arab Emirates",
      "Qatar",
      "Kuwait",
      "Oman",
      "Bahrain",
      "Jordan",
      "Iraq",
      "Israel",
      "Lebanon",
      "Syria",
      "Yemen",
      "Palestine",
      "Turkey",
      "Iran",
    ],
    color: "#009C99",
    center: [45, 24],
  },
  {
    id: "africa",
    name: "Africa",
    beds: "300+",
    countries: [
      "Algeria",
      "Angola",
      "Benin",
      "Botswana",
      "Burkina Faso",
      "Burundi",
      "Cabo Verde",
      "Cameroon",
      "Central African Republic",
      "Chad",
      "Comoros",
      "Congo",
      "Dem. Rep. Congo",
      "Djibouti",
      "Egypt",
      "Equatorial Guinea",
      "Eritrea",
      "Eswatini",
      "Ethiopia",
      "Gabon",
      "Gambia",
      "Ghana",
      "Guinea",
      "Guinea-Bissau",
      "Ivory Coast",
      "Kenya",
      "Lesotho",
      "Liberia",
      "Libya",
      "Madagascar",
      "Malawi",
      "Mali",
      "Mauritania",
      "Mauritius",
      "Morocco",
      "Mozambique",
      "Namibia",
      "Niger",
      "Nigeria",
      "Rwanda",
      "Sao Tome and Principe",
      "Senegal",
      "Seychelles",
      "Sierra Leone",
      "Somalia",
      "South Africa",
      "South Sudan",
      "Sudan",
      "Tanzania",
      "Togo",
      "Tunisia",
      "Uganda",
      "Zambia",
      "Zimbabwe",
      "Western Sahara",
    ],
    color: "#009C99",
    center: [20, 0],
  },
  {
    id: "south-asia",
    name: "South Asia",
    beds: "13000+",
    countries: [
      "India",
      "Pakistan",
      "Bangladesh",
      "Sri Lanka",
      "Nepal",
      "Bhutan",
      "Maldives",
      "Afghanistan",
    ],
    color: "#009C99",
    center: [78, 22],
  },
  {
    id: "southeast-asia",
    name: "Southeast Asia",
    beds: "100+",
    countries: [
      "Indonesia",
      "Vietnam",
      "Thailand",
      "Malaysia",
      "Philippines",
      "Singapore",
      "Myanmar",
      "Cambodia",
      "Laos",
      "Brunei",
      "Timor-Leste",
    ],
    color: "#009C99",
    center: [108, 15],
  },
  {
    id: "europe",
    name: "Europe",
    beds: "200+",
    countries: [
      "Albania",
      "Andorra",
      "Austria",
      "Belarus",
      "Belgium",
      "Bosnia and Herz.",
      "Bulgaria",
      "Croatia",
      "Cyprus",
      "Czech Rep.",
      "Denmark",
      "Estonia",
      "Finland",
      "France",
      "Germany",
      "Greece",
      "Hungary",
      "Iceland",
      "Ireland",
      "Italy",
      "Latvia",
      "Lithuania",
      "Luxembourg",
      "Malta",
      "Moldova",
      "Monaco",
      "Montenegro",
      "Netherlands",
      "North Macedonia",
      "Norway",
      "Poland",
      "Portugal",
      "Romania",
      "San Marino",
      "Serbia",
      "Slovakia",
      "Slovenia",
      "Spain",
      "Sweden",
      "Switzerland",
      "Ukraine",
      "United Kingdom",
    ],
    color: "#009C99",
    center: [15, 50],
  },
  {
    id: "central-america",
    name: "Central America",
    beds: "50+",
    countries: [
      "Belize",
      "Costa Rica",
      "El Salvador",
      "Guatemala",
      "Honduras",
      "Nicaragua",
      "Panama",
      "Mexico",
    ],
    color: "#009C99",
    center: [-95, 20],
  },
  {
    id: "central-asia",
    name: "Central Asia",
    beds: "50+",
    countries: [
      "Kazakhstan",
      "Kyrgyzstan",
      "Tajikistan",
      "Turkmenistan",
      "Uzbekistan",
    ],
    color: "#009C99",
    center: [66, 43],
  },
];

export const GlobalPresence: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(
    REGIONS[0].id,
  );
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [indicatorPos, setIndicatorPos] = useState({ x: 0, y: 0 });

  const activeRegionData = REGIONS.find((r) => r.id === hoveredRegion);

  const getProjection = (w: number, h: number) => {
    return d3
      .geoMercator()
      .scale(w / 4.8)
      .center([30, 15])
      .translate([w / 2, h / 2]);
  };

  useEffect(() => {
    const updateDimensions = () => {
      if (svgRef.current?.parentElement) {
        const parent = svgRef.current.parentElement;
        const size = Math.min(parent.clientWidth, parent.clientHeight);
        setDimensions({
          width: size,
          height: size,
        });
      }
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (dimensions.width === 0 || !activeRegionData) return;
    const projection = getProjection(dimensions.width, dimensions.height);
    const [x, y] = projection(activeRegionData.center as [number, number]) || [
      0, 0,
    ];
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

    const projection = getProjection(dimensions.width, dimensions.height);
    const path = d3.geoPath().projection(projection);

    d3.json(
      "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json",
    ).then((data: any) => {
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
          return region ? region.color : "#CBD5E1";
        })
        .attr("stroke", "#FFFFFF")
        .attr("stroke-width", 0.5)
        .attr("opacity", (d: any) => {
          const countryName = d.properties.name;
          const region = REGIONS.find((r) => r.countries.includes(countryName));
          if (hoveredRegion) {
            if (region) return region.id === hoveredRegion ? 1 : 0.3;
            return 0.15;
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
    <section className="relative bg-white py-16 xs:py-20 sm:py-24 md:py-28 lg:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 xs:px-5 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xs:gap-14 sm:gap-16 md:gap-20 items-center">
          <div className="lg:col-span-6 space-y-7 xs:space-y-8 z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="eyebrow text-brand-purple mb-4 xs:mb-5">
                Global Presence
              </p>

              <h2 className="heading-display text-[30px] xs:text-[34px] sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.08]">
                International standards.
                <br />
                <span className="text-brand-teal italic">
                  Local intelligence.
                </span>
              </h2>

              <p className="mt-5 xs:mt-6 sm:mt-8 text-base md:text-lg font-normal leading-[1.65] text-slate-600">
                Navigating complex regulatory environments to deliver JCI and
                NABH compliant assets in diverse global markets.
              </p>

              {/* Region Cards Grid */}
              <div className="mt-10 xs:mt-12 grid grid-cols-2 gap-3.5 xs:gap-4">
                {REGIONS.map((region, index) => {
                  const isLastOddCard =
                    index === REGIONS.length - 1 && REGIONS.length % 2 === 1;

                  return (
                    <motion.div
                      key={region.id}
                      onMouseEnter={() => {
                        setIsAutoPlaying(false);
                        setHoveredRegion(region.id);
                      }}
                      onMouseLeave={() => setIsAutoPlaying(true)}
                      animate={{
                        scale: hoveredRegion === region.id ? 1.04 : 1,
                        borderColor:
                          hoveredRegion === region.id
                            ? region.color
                            : "#e3e1da",
                        backgroundColor:
                          hoveredRegion === region.id ? "#f7f5f0" : "#ffffff",
                      }}
                      className={`group cursor-pointer rounded-lg xs:rounded-xl border p-3.5 xs:p-4 sm:p-5 transition-all duration-300 ${isLastOddCard
                          ? "sm:col-span-2 sm:justify-self-center sm:w-full sm:max-w-[calc(50%-0.375rem)]"
                          : ""
                        }`}
                    >
                      <div className="flex items-center gap-2 xs:gap-2.5 sm:gap-3">
                        <div
                          className="h-2 w-2 xs:h-2.5 xs:w-2.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: region.color }}
                        />
                        <span
                          className={`text-sm xs:text-[15px] sm:text-base font-medium leading-tight ${hoveredRegion === region.id
                              ? "text-brand-ink"
                              : "text-slate-400"
                            }`}
                        >
                          {region.name}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="relative w-full max-w-[380px] xs:max-w-[420px] sm:max-w-[480px] md:max-w-[540px] lg:max-w-[640px] xl:max-w-[760px] aspect-square rounded-full overflow-hidden border border-brand-line bg-brand-bone/60 mx-auto">
              <svg className="absolute inset-0 z-20 pointer-events-none w-full h-full">
                <AnimatePresence>
                  {hoveredRegion && (
                    <motion.g
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <motion.line
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        x1={indicatorPos.x}
                        y1={indicatorPos.y}
                        x2={indicatorPos.x + 30}
                        y2={indicatorPos.y - 30}
                        stroke="#009C99"
                        strokeWidth="1.5"
                        strokeDasharray="4 2"
                      />
                      <motion.circle
                        cx={indicatorPos.x}
                        cy={indicatorPos.y}
                        r="3"
                        fill="#009C99"
                      />
                    </motion.g>
                  )}
                </AnimatePresence>
              </svg>

              <AnimatePresence>
                {hoveredRegion && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                      left: indicatorPos.x + 35,
                      top: indicatorPos.y - 60,
                    }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute z-30 pointer-events-none whitespace-nowrap bg-white/95 backdrop-blur-sm border border-brand-line px-2.5 xs:px-3 py-1.5 rounded-lg"
                  >
                    {/* Serif number in the tooltip */}
                    <p className="heading-display text-lg xs:text-xl leading-tight">
                      {activeRegionData?.beds}{" "}
                      <span className="eyebrow !text-[9px] xs:!text-[10px] text-brand-purple block font-sans">
                        Beds Managed
                      </span>
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <svg ref={svgRef} className="h-full w-full relative z-10" />
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(247,245,240,0)_40%,rgba(247,245,240,0.85)_100%)] z-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};