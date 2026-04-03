"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Heart,
  ChevronRight,
  MapPin,
  LayoutGrid,
  List,
  ArrowRight,
  ChevronLeft,
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

  // Create a ref for the results section to handle smooth scrolling
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

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedType]);

  // Pagination Calculations
  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  
  // This is the subset of data shown on the current page
  const currentItems = filteredProperties.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Smooth scroll to the top of the results grid
    resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-44 pb-20 overflow-hidden bg-slate-50">
        <div className="absolute top-[25%] right-0 w-1/2 h-full pointer-events-none pt-5">
          <div className="absolute inset-0 bg-linear-to-l from-brand-teal/20 to-transparent" />
          <img
            src="/asset/hero/abt.png"
            alt="Modern Architecture"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <nav className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-8 uppercase tracking-widest">
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
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-[1.1] tracking-tight">
              Our <span className="text-brand-teal">Portfolio</span>
            </h1>
            <p className="text-lg leading-relaxed text-slate-600 md:w-xl">
              Infra.Health's portfolio reflects a diverse range of healthcare
              projects across India, spanning academic institutions, public
              hospitals, specialty centres, and multispecialty hospitals.
            </p>

            {/* Search Bar */}
            <div className="max-w-4xl bg-white shadow-2xl shadow-slate-200/50 rounded-full p-2 flex flex-col md:flex-row items-center gap-2 border border-slate-100">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by hospital name or clinical facility..."
                  className="w-full pl-12 pr-4 py-4 rounded-xl focus:outline-none text-slate-900 font-medium placeholder:text-slate-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="h-8 w-px bg-slate-200 hidden md:block" />
              <select
                className="px-6 py-4 bg-transparent text-slate-600 font-bold text-sm focus:outline-none cursor-pointer w-full md:w-auto"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                {assetTypes.map((type) => (
                  <option key={type} value={type}>
                    {type === "All" ? "Asset type" : type}
                  </option>
                ))}
              </select>
              <button className="w-full md:w-auto bg-slate-900 text-white px-10 py-4 rounded-full font-bold hover:bg-brand-teal transition-all flex items-center justify-center gap-2">
                Search <ArrowRight size={18} />
              </button>
            </div>
            <p className="mt-4 text-slate-400 text-sm font-medium">
              {filteredProperties.length} clinical assets found
            </p>
          </motion.div>
        </div>
      </section>

      <CounterSection />

      {/* Property Grid Section */}
      <section ref={resultsRef} className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                Explore Our Portfolio
              </h2>
              <p className="text-slate-500 text-lg font-medium">
                Institutional-grade healthcare infrastructure curated for
                strategic investors.
              </p>
            </div>
            <div className="flex items-center gap-4 bg-white p-1.5 rounded-md border border-slate-200">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2.5 rounded-full transition-all ${viewMode === "grid" ? "bg-slate-900 text-white shadow-lg" : "text-slate-400 hover:text-slate-900"}`}
              >
                <LayoutGrid size={20} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2.5 rounded-full transition-all ${viewMode === "list" ? "bg-slate-900 text-white shadow-lg" : "text-slate-400 hover:text-slate-900"}`}
              >
                <List size={20} />
              </button>
            </div>
          </div>

          <div
            className={`grid gap-10 ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}
          >
            {/* CHANGED: We now map through currentItems instead of filteredProperties */}
            {currentItems.map((property, index) => (
              <motion.div
                key={property.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={`/portfolio/${property.slug}`}
                  className={`group bg-white rounded-md overflow-hidden border border-slate-200 hover:shadow-2xl hover:shadow-slate-200/50 transition-all flex h-full ${viewMode === "grid" ? "flex-col" : "flex-col md:flex-row"}`}
                >
                  <div
                    className={`relative overflow-hidden bg-slate-100 ${viewMode === "grid" ? "aspect-16/10" : "md:w-1/3 aspect-16/10 md:aspect-auto"}`}
                  >
                    <img
                      src={
                        property.images[0] ||
                        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
                      }
                      alt={property.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                      <span className="bg-brand-teal/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-md">
                        {property.subcategory || "Clinical Asset"}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-brand-teal transition-colors line-clamp-2 leading-snug">
                      {property.title}
                    </h3>
                    <div className="flex items-start gap-2 text-slate-500 text-sm mb-6 font-medium">
                      <MapPin
                        size={16}
                        className="shrink-0 mt-0.5 text-brand-teal"
                      />
                      <span className="line-clamp-2">
                        {property.projectBrief.shortDescription}
                      </span>
                    </div>

                    <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                          Built-up Area
                        </span>
                        <span className="text-sm font-bold text-slate-900">
                          {property.projectBrief.builtUpArea}
                        </span>
                      </div>
                      <div className="text-brand-teal font-bold flex items-center gap-2 text-sm group-hover:gap-3 transition-all">
                        View Asset <ChevronRight size={18} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-16 flex justify-center items-center gap-4">
              <div className="flex gap-2">
                <button
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-md border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>

                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handlePageChange(i + 1)}
                    className={`w-10 h-10 rounded-full text-sm font-bold transition-all ${
                      currentPage === i + 1
                        ? "bg-slate-900 text-white shadow-lg scale-110"
                        : "bg-white border border-slate-200 text-slate-600 hover:border-brand-teal hover:text-brand-teal"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-md border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;