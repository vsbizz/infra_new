"use client";
import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import * as topojson from "topojson-client";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

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
    color: "#0D9488",
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
    color: "#0D9488",
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
    color: "#0D9488",
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
    color: "#0D9488",
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
    color: "#0D9488",
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
    color: "#0D9488",
    center: [-95, 20],
  },
];

export const FlatGlobalMap: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const getProjection = (w: number, h: number) => {
    return d3
      .geoNaturalEarth1()
      .scale(w / 5.2)
      .translate([w / 2, h / 2]);
  };

  useEffect(() => {
    const updateDimensions = () => {
      if (svgRef.current?.parentElement) {
        const parent = svgRef.current.parentElement;
        const width = parent.clientWidth;
        setDimensions({ width, height: width * 0.5 });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

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
          return region ? region.color : "#E2E8F0";
        })
        .attr("stroke", "#FFFFFF")
        .attr("stroke-width", 0.5)
        .style("transition", "fill 0.3s ease");
    });
  }, [dimensions]);

  return (
    <section className="bg-white py-10 sm:py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:gap-10 md:gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left Column: Content */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6 md:space-y-8">
            <header>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="eyebrow text-brand-purple mb-4 xs:mb-5"
              >
                Global Presence
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="heading-display text-[30px] xs:text-[34px] sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.08]"
              >
                Our Locations
                <br />
              </motion.h2>
            </header>
            <p className="mb-4 sm:mb-5 md:mb-6 text-base md:text-lg leading-[1.65] text-slate-600">
              Operating across the Middle East, Africa, South Asia, Southeast
              Asia, Central Asia, Europe, and Central America, we integrate
              international standards with localized regulatory intelligence.
            </p>
            <div className="rounded-xl sm:rounded-2xl border-l-4 border-brand-purple bg-slate-50 p-4 sm:p-5 md:p-8 shadow-sm">
              <h4 className="mb-2.5 sm:mb-3 flex items-center gap-2.5 sm:gap-3 text-lg sm:text-xl font-bold heading-display text-brand-purple">
                WHX Dubai Expo 2026
              </h4>

              <p className="mb-4 sm:mb-5 md:mb-6 text-base md:text-lg leading-[1.65] text-slate-600">
                Infra.Health was proud to participate in the World Health Expo
                (WHX) Dubai in February 2026. We showcased our globally aligned
                infrastructure solutions, strengthening partnerships for the
                next generation of healthcare assets.
              </p>
            </div>
          </div>

          {/* Right Column: Map */}
          <div className="lg:col-span-7 lg:sticky lg:top-10">
            <div className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-100 bg-slate-50/50 p-2 sm:p-4 md:p-6 shadow-lg md:shadow-2xl md:shadow-slate-200/50">
              <div className="aspect-[2/1] w-full min-h-[180px] sm:min-h-[220px] md:min-h-[280px]">
                <svg
                  ref={svgRef}
                  viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
                  className="h-full w-full drop-shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
