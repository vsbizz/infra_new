"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Search,
  ChevronRight,
  MapPin,
  LayoutGrid,
  List,
  ArrowRight,
  ChevronLeft,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { CounterSection } from "@/components/CounterSection";

const Portfolio: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

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
        {/* Background image hidden on mobile */}
        <div className="hidden md:block absolute top-[25%] right-0 w-1/2 h-full pointer-events-none pt-5">
          <div className="absolute inset-0 bg-linear-to-l from-brand-teal/20 to-transparent" />
          <img
            src="/asset/hero/abt.png"
            alt="Modern Architecture"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 relative z-10">
          {/* 
            JLL Container Padding Mobile: 16-20px, Tablet: 20-24px
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
                href="/portfolio"
                className="hover:text-teal-600 transition-colors"
              >
                Portfolio
              </Link>
            </nav>

            {/* Heading */}
            {/* 
              JLL H1 Mobile: 32-36px, font-weight: 600 (semibold)
              Desktop: font-extrabold
            */}
            <h1 className="text-[32px] xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:font-extrabold text-slate-900 mb-4 xs:mb-5 md:mb-8 leading-[1.1] tracking-tight">
              Our <span className="text-brand-teal">Portfolio</span>
            </h1>

            <p className="text-sm xs:text-[15px] sm:text-base md:text-lg font-normal leading-[1.6] text-slate-600 mb-8 xs:mb-10 md:mb-12 max-w-xl">
              Infra.Health's portfolio reflects a diverse range of healthcare
              projects across India, spanning academic institutions, public
              hospitals, specialty centres, and multispecialty hospitals.
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

      <CounterSection />

      {/* ── Portfolio Grid ── */}
      <section
        ref={resultsRef}
        id="portfolio-grid"
        className="py-12 xs:py-16 md:py-24 bg-slate-50 px-4 xs:px-5 sm:px-6"
      >
        {/* 
          JLL Section Padding Mobile: 48-64px, Tablet: 64-80px, Desktop: 96px
        */}
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-5 xs:gap-6 mb-10 xs:mb-12 md:mb-16">
            <div>
              {/* 
                JLL H2 Mobile: 24-26px, font-weight: 600 (semibold)
                Desktop: font-extrabold
              */}
              <h2 className="text-2xl xs:text-[26px] sm:text-3xl md:text-4xl lg:text-5xl  md:font-extrabold text-slate-900 mb-3 xs:mb-4 tracking-tight leading-[1.2]">
                Explore Our Portfolio
              </h2>
              <p className="text-slate-500 text-sm xs:text-[15px] sm:text-base md:text-lg font-normal leading-[1.6]">
                Institutional-grade healthcare infrastructure curated for
                strategic investors.
              </p>
            </div>
            <div className=" hidden lg:flex flex items-center gap-2 bg-white p-1.5 rounded-md border border-slate-200 self-end md:self-auto">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 xs:p-2.5 rounded-full transition-all ${viewMode === "grid" ? "bg-slate-900 text-white shadow-lg" : "text-slate-400 hover:text-slate-900"}`}
                aria-label="Grid view"
              >
                <LayoutGrid size={16} className="xs:w-[18px] xs:h-[18px]" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 xs:p-2.5 rounded-full transition-all ${viewMode === "list" ? "bg-slate-900 text-white shadow-lg" : "text-slate-400 hover:text-slate-900"}`}
                aria-label="List view"
              >
                <List size={16} className="xs:w-[18px] xs:h-[18px]" />
              </button>
            </div>
          </div>

          {/* Cards */}
          <div
            className={`grid gap-5 xs:gap-6 md:gap-10 ${viewMode === "grid"
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                : "grid-cols-1"
              }`}
          >
            {/* 
              JLL Grid Gap Mobile: 20-24px, Tablet: 24-28px, Desktop: 40px
            */}
            {currentItems.map((property, index) => (
              <motion.div
                key={property.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <Link
                  href={`/portfolio/${property.slug}`}
                  className={`group bg-white rounded-md overflow-hidden border border-slate-200 hover:shadow-2xl hover:shadow-slate-200/50 transition-all flex h-full ${viewMode === "grid" ? "flex-col" : "flex-col sm:flex-row"
                    }`}
                >
                  <div
                    className={`relative overflow-hidden bg-slate-100 ${viewMode === "grid"
                        ? "aspect-16/10"
                        : "aspect-16/10 sm:w-1/3 sm:aspect-auto"
                      }`}
                  >
                    <img
                      src={
                        property.images[0] ||
                        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
                      }
                      alt={property.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
                      <span className="bg-brand-teal/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-md">
                        {property.subcategory || "Clinical Asset"}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 xs:p-6 md:p-8 flex-1 flex flex-col">
                    {/* 
                      JLL Card Padding Mobile: 20-24px, Tablet: 24-32px, Desktop: 32px
                    */}
                    {/* 
                      JLL H3 Mobile: 18-20px, font-weight: 600 (semibold)
                      Desktop: font-extrabold (but keeping bold here for card hierarchy)
                    */}
                    <h3 className="text-base xs:text-lg md:text-xl md:font-bold text-slate-900 mb-3 xs:mb-4 group-hover:text-brand-teal transition-colors line-clamp-2 leading-snug">
                      {property.title}
                    </h3>
                    <div className="flex items-start gap-2 text-slate-500 text-sm xs:text-[15px] mb-4 xs:mb-5 md:mb-6 font-normal">
                      <MapPin
                        size={14}
                        className="xs:w-[15px] xs:h-[15px] shrink-0 mt-0.5 text-brand-teal"
                      />
                      <span className="line-clamp-2 leading-[1.6]">
                        {property.projectBrief.shortDescription}
                      </span>
                    </div>

                    <div className="mt-auto pt-4 xs:pt-5 md:pt-6 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[10px] xs:text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                          Built-up Area
                        </span>
                        <span className="text-sm xs:text-[15px] md:font-bold text-slate-900">
                          {property.projectBrief.builtUpArea}
                        </span>
                      </div>
                      <div className="text-brand-teal font-bold flex items-center gap-1.5 text-sm xs:text-[15px] group-hover:gap-2.5 transition-all">
                        View Asset{" "}
                        <ChevronRight size={14} className="xs:w-4 xs:h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
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

                {[...Array(totalPages)].map((_, i) => (
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
                    handlePageChange(Math.min(totalPages, currentPage + 1))
                  }
                  disabled={currentPage === totalPages}
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
              Showing {currentItems.length} of {filteredProperties.length}{" "}
              portfolio assets
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
