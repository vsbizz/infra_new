"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  ChevronRight,
  ArrowRight,
  Stethoscope,
  University,
  ChartLine,
  Globe,
  ChevronLeft,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { citiesData } from "@/data/cities";

const solutionsData = {
  value: {
    title: "Why Infra.Health?",
    points: [
      {
        icon: Stethoscope,
        title: "Healthcare-Centric",
        text: "Unlike traditional real estate firms, Infra.Health operates at the intersection of healthcare, finance, and infrastructure.",
        image:
          "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
      },
      {
        icon: ChartLine,
        title: "Financial Structuring",
        text: "Our team provides financial structuring expertise to optimize healthcare investments for sustainability and returns.",
        image:
          "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
      },
      {
        icon: University,
        title: "Deep Sectoral Knowledge",
        text: "We bring unmatched expertise in healthcare infrastructure, clinical workflows, and sector-specific regulations.",
        image:
          "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
      },
      {
        icon: Globe,
        title: "Global Investor Networks",
        text: "With access to international investors, we position healthcare assets not just as buildings, but as future-ready investment vehicles.",
        image:
          "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
      },
    ],
  },
};

const Properties: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const citiesPerPage = 9; // 3 columns × 3 rows

  const resultsRef = useRef<HTMLDivElement>(null);

  const assetTypes = [
    "All",
    ...Array.from(new Set(portfolioData.map((p) => p.category))),
  ];

  const filteredProperties = portfolioData.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.projectBrief.shortDescription
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
    const matchesType = selectedType === "All" || p.category === selectedType;
    return matchesSearch && matchesType;
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedType]);

  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProperties.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  // Pagination for cities
  const totalCityPages = Math.ceil(citiesData.length / citiesPerPage);
  const indexOfLastCity = currentPage * citiesPerPage;
  const indexOfFirstCity = indexOfLastCity - citiesPerPage;
  const currentCities = citiesData.slice(indexOfFirstCity, indexOfLastCity);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const handleSearch = () => {
    resultsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero ── */}
      <section className="relative pt-5 sm:pt-3 md:pt-5 lg:pt-10 pb-12 xs:pb-16 md:pb-20 overflow-hidden bg-slate-50">
        {/* 
          JLL Page Padding Mobile: 64-80px, Tablet: 80-96px, Desktop: 128-160px
        */}
        {/* Background image - hidden on small screens */}
        <div className="hidden md:block absolute top-[25%] right-0 w-1/2 h-full pointer-events-none">
          <div className="absolute inset-0 bg-linear-to-l from-brand-teal/20 to-transparent" />
          <img
            src="/asset/hero/construction.jpg"
            alt="Modern Architecture"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 md:px-8 relative z-10">
          {/* 
            JLL Container Padding Mobile: 16-20px, Tablet: 20-24px, Desktop: 32px
          */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 md:gap-2 text-[10px] xs:text-[11px] md:text-xs font-semibold text-slate-400 mb-6 xs:mb-7 md:mb-8 uppercase tracking-widest">
              <Link href="/" className="hover:text-teal-600 transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3 h-3" />
              <Link
                href="/properties"
                className="hover:text-teal-600 transition-colors"
              >
                Properties
              </Link>
            </nav>

            {/* Heading */}
            {/* 
              JLL H1 Mobile: 32-36px, font-weight: 600 (semibold)
              Desktop: font-extrabold
            */}
            <h1 className="text-[32px] xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:font-extrabold text-slate-900 mb-4 xs:mb-5 md:mb-8 leading-[1.1] tracking-tight">
              Unlocking Value Across
              <span className="text-brand-teal"> Global </span>
              <br className="hidden sm:block" />
              Healthcare Assets
            </h1>

            <p className="text-sm xs:text-[15px] sm:text-base md:text-lg font-normal leading-[1.6] text-slate-600 mb-8 xs:mb-10 md:mb-12 max-w-xl">
              Infra.Health provides a comprehensive international platform for
              healthcare operators and investors to transact, invest, and expand
              their healthcare asset base.
            </p>

            {/* Search Bar */}
            <div className="relative my-12 xs:my-16 sm:my-20 md:my-24">
              {/* Negative margin pulls search bar UP over hero image */}
              <div className="-mt-8 xs:-mt-10 md:-mt-16 lg:-mt-20 relative z-10 flex justify-center">
                <div className="w-full max-w-5xl bg-white shadow-2xl shadow-slate-900/10 rounded-2xl md:rounded-[2rem] p-2 xs:p-2.5 sm:p-1 flex flex-col md:flex-row items-stretch md:items-center gap-2 xs:gap-2.5 sm:gap-3 border border-teal-500/100 hover:shadow-teal-500/10 transition-all duration-300">
                  {/* 
                       JLL Search Bar Spacing Mobile: p-2, Tablet: p-2.5, Desktop: p-3
                       Gap Mobile: gap-2, Tablet: gap-2.5, Desktop: gap-3
                     */}

                  {/* Text input */}
                  <div className="relative flex-1 min-w-0">
                    <Search className="absolute left-4 xs:left-5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none" />
                    <input
                      type="text"
                      placeholder="Search by hospital name or clinical facility..."
                      className="w-full h-14 xs:h-[58px] sm:h-16 md:h-[68px] pl-12 xs:pl-14 pr-4 xs:pr-5 rounded-xl md:rounded-[1.5rem] focus:outline-none focus:ring-2 focus:ring-teal-500/20 text-slate-900 font-semibold placeholder:text-slate-400 placeholder:font-normal text-sm xs:text-base md:text-lg transition-all"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>

                  {/* Divider */}
                  <div className="h-px w-full md:h-12 lg:h-14 md:w-px bg-slate-200" />

                  {/* Asset type select */}
                  <div className="relative">
                    <select
                      className="appearance-none h-14 xs:h-[58px] sm:h-16 md:h-[68px] pl-5 xs:pl-6 pr-10 xs:pr-12 bg-transparent text-slate-700 font-semibold text-sm xs:text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-teal-500/20 cursor-pointer border border-slate-200 md:border-0 rounded-xl md:rounded-[1.5rem] transition-all whitespace-nowrap min-w-[140px] xs:min-w-[160px] md:min-w-[180px]"
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                    >
                      {assetTypes.map((type) => (
                        <option key={type} value={type} className="font-normal">
                          {type === "All" ? "Asset type" : type}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 xs:right-5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none" />
                  </div>

                  {/* Search button */}
                  <button
                    onClick={handleSearch}
                    className="h-14 xs:h-[58px] sm:h-16 md:h-[52px] w-full md:w-auto bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 xs:px-10 md:px-8 rounded-xl md:rounded-[1.5rem] font-bold hover:from-teal-600 hover:to-teal-700 hover:shadow-xl hover:shadow-teal-500/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-sm xs:text-base md:text-lg shadow-lg shadow-teal-500/20 whitespace-nowrap"
                  >
                    Search <ArrowRight size={20} className="shrink-0" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Why Infra.Health ── */}
      <section className="bg-white py-12 xs:py-16 md:py-24">
        {/* 
          JLL Section Padding Mobile: 48-64px, Tablet: 64-80px, Desktop: 96-128px
        */}
        <div className="mx-auto max-w-7xl px-4 xs:px-5 sm:px-6 md:px-8">
          <div className="grid lg:grid-cols-12 gap-8 xs:gap-10 md:gap-16 items-start">
            {/* Header - sticky only on large screens */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              {/* 
                JLL H2 Mobile: 24-26px, font-weight: 600 (semibold)
                Desktop: font-extrabold
              */}
              <h2 className="text-2xl xs:text-[26px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl  md:font-extrabold leading-[1.3] md:leading-[1.1] tracking-tight text-slate-900 mb-5 xs:mb-6 md:mb-10">
                {solutionsData.value.title}
              </h2>
              <p className="text-sm xs:text-[15px] sm:text-base md:text-lg xl:text-xl font-normal leading-[1.6] text-slate-600 mb-5 xs:mb-6 md:mb-10 max-w-md">
                We go beyond traditional brokerage. Our platform bridges the gap
                between clinical operations and institutional capital to de-risk
                healthcare infrastructure.
              </p>
              <div className="w-20 xs:w-24 h-1 bg-teal-600" />
            </div>

            {/* Cards grid */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5 xs:gap-6 md:gap-8">
              {/* 
                JLL Grid Gap Mobile: 20-24px, Tablet: 24-28px, Desktop: 32px
              */}
              {solutionsData.value.points.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group relative bg-slate-50 overflow-hidden border border-slate-100 rounded-md"
                >
                  {/* Image */}
                  <div className="aspect-4/3 overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute top-3 xs:top-4 left-3 xs:left-4 bg-white/90 backdrop-blur-md p-2.5 xs:p-3 rounded-lg text-teal-600 shadow-sm transition-colors group-hover:bg-teal-600 group-hover:text-white">
                      <item.icon
                        size={20}
                        className="xs:w-[22px] xs:h-[22px]"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 xs:p-6 md:p-8 border-b-4 border-transparent group-hover:border-teal-600 transition-all duration-500 min-h-[176px] xs:min-h-[200px] md:min-h-[220px] flex flex-col">
                    {/* 
                      JLL Card Padding Mobile: 20-24px, Tablet: 24-32px, Desktop: 32-48px
                    */}
                    <div className="text-slate-400 font-bold text-[10px] xs:text-xs tracking-widest mb-3 xs:mb-4">
                      STRATEGIC PILLAR 0{idx + 1}
                    </div>
                    {/* 
                      JLL H3/H4 Mobile: 18-20px, font-weight: 600 (semibold)
                      Desktop: font-extrabold
                    */}
                    <h4 className="text-lg xs:text-xl md:text-2xl  md:font-extrabold text-slate-900 mb-3 xs:mb-4 group-hover:text-teal-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-slate-600 leading-[1.6] text-sm xs:text-[15px] font-normal">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Explore Cities Section ── */}
      <section
        ref={resultsRef}
        id="properties-grid"
        className="py-12 xs:py-16 md:py-24 bg-slate-50 px-4 xs:px-5 sm:px-6 md:px-8"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-5 xs:gap-6 mb-10 xs:mb-12 md:mb-16">
            <div>
              {/* 
                JLL H2 Mobile: 24-26px, font-weight: 600 (semibold)
                Desktop: font-extrabold
              */}
              <h2 className="text-2xl xs:text-[26px] sm:text-3xl md:text-4xl lg:text-5xl md:font-extrabold text-slate-900 mb-3 xs:mb-4 tracking-tight leading-[1.2]">
                Explore Our Properties
              </h2>
              <p className="text-slate-500 text-sm xs:text-[15px] sm:text-base md:text-lg font-normal leading-[1.6]">
                Discover healthcare infrastructure opportunities across India's
                leading cities.
              </p>
            </div>
          </div>

          {/* City Cards Grid - Responsive columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xs:gap-6 md:gap-8">
            {/* 
              JLL Grid Gap Mobile: 20-24px, Tablet: 24-28px, Desktop: 32px
            */}
            {currentCities.map((city, index) => (
              <motion.div
                key={city.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <div className="group relative h-72 xs:h-80 md:h-[360px] rounded-md overflow-hidden cursor-pointer block transition-transform duration-300 hover:shadow-2xl hover:shadow-slate-200/50">
                  {/* Background Image */}
                  <Link
                    href={`/properties/${city.slug}`}
                    className="absolute inset-0 block"
                  >
                    <img
                      src={city.image}
                      alt={city.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </Link>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/50 group-hover:from-black/20 group-hover:to-black/60 transition-all duration-500"></div>

                  {/* CTA Button - Top Right */}
                  <Link
                    href={`/properties/${city.slug}`}
                    className="absolute top-3 xs:top-4 right-3 xs:right-4 z-10"
                  >
                    <div className="bg-white px-3 xs:px-4 py-2 xs:py-2.5 rounded-full font-bold text-xs xs:text-sm text-black flex items-center gap-1.5 xs:gap-2 group-hover:gap-2.5 xs:group-hover:gap-3 hover:bg-teal-600 hover:text-white transition-all duration-300">
                      <span>{city.listings}+ Properties</span>
                      <ArrowRight
                        size={14}
                        className="xs:w-4 xs:h-4 group-hover:translate-x-0.5 transition-transform"
                      />
                    </div>
                  </Link>

                  {/* Content Section */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 xs:p-6 md:p-8">
                    {/* 
                      JLL Card Padding Mobile: 20-24px, Tablet: 24-32px, Desktop: 32-48px
                    */}
                    {/* City Name */}
                    <h3 className="text-white text-xl xs:text-2xl md:text-3xl  md:font-extrabold">
                      {city.name}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          {totalCityPages > 1 && (
            <div className="mt-10 xs:mt-12 md:mt-16 flex justify-center items-center">
              <div className="flex gap-2 flex-wrap justify-center">
                <button
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="p-2 xs:p-2.5 rounded-md border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  aria-label="Previous page"
                >
                  <ChevronLeft size={16} className="xs:w-[18px] xs:h-[18px]" />
                </button>

                {[...Array(totalCityPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handlePageChange(i + 1)}
                    className={`w-9 h-9 xs:w-10 xs:h-10 rounded-full text-xs xs:text-sm font-bold transition-all ${currentPage === i + 1
                        ? "bg-slate-900 text-white shadow-lg scale-110"
                        : "bg-white border border-slate-200 text-slate-600 hover:border-brand-teal hover:text-brand-teal"
                      }`}
                    aria-label={`Page ${i + 1}`}
                    aria-current={currentPage === i + 1 ? "page" : undefined}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  onClick={() =>
                    handlePageChange(Math.min(totalCityPages, currentPage + 1))
                  }
                  disabled={currentPage === totalCityPages}
                  className="p-2 xs:p-2.5 rounded-md border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  aria-label="Next page"
                >
                  <ChevronRight size={16} className="xs:w-[18px] xs:h-[18px]" />
                </button>
              </div>
            </div>
          )}

          {/* Results count */}
          <div className="mt-6 xs:mt-8 md:mt-12 text-center">
            <p className="text-slate-500 text-sm xs:text-base md:text-lg font-normal leading-[1.6]">
              Showing {currentCities.length} of {citiesData.length} healthcare
              opportunity cities
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Properties;
