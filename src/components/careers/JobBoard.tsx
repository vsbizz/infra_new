"use client";

import React, { useState, useMemo, useEffect } from "react";
import {
  Search,
  Mail,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

const JOBS = [
  {
    title: "EPC Head",
    exp: "20+ Years",
    qual: "BE/ME Civil Engineering",
    loc: "Pune, India",
  },
  {
    title: "Project Engineer",
    exp: "4+ Years",
    qual: "BE/ME Civil Engineering",
    loc: "Pune, India",
  },
  {
    title: "MEP Engineer",
    exp: "6+ Years",
    qual: "BE/ME Electrical",
    loc: "Pune, India",
  },
  {
    title: "Store Keeper",
    exp: "8+ Years",
    qual: "Any Graduate",
    loc: "Pune, India",
  },
  {
    title: "Project Engineer",
    exp: "4+ Years",
    qual: "BE/ME Civil Engineering",
    loc: "Pune, India",
  },
  {
    title: "Safety Officer",
    exp: "6+ Years",
    qual: "Diploma HSE",
    loc: "Pune, India",
  },
  {
    title: "MEP Engineer",
    exp: "6+ Years",
    qual: "BE/ME Electrical",
    loc: "Pune, India",
  },
  {
    title: "Store Keeper",
    exp: "8+ Years",
    qual: "Any Graduate",
    loc: "Pune, India",
  },
  {
    title: "MEP Design Coordinator - Plumbing & FF",
    exp: "10 Years",
    qual: "BE/ME Civil Engineering",
    loc: "Pune, India",
  },
  {
    title: "Sr. Estimation Engineer",
    exp: "10 Years",
    qual: "BE/ME Civil Engineering",
    loc: "Pune, India",
  },
  {
    title: "Executive Assistant",
    exp: "5 Years",
    qual: "MBA",
    loc: "Pune, India",
  },
  {
    title: "Procurement Manager - HO",
    exp: "11+ Years",
    qual: "BE/ME Civil Engineering",
    loc: "Pune, India",
  },
  {
    title: "Sr. Estimation Engineer",
    exp: "8 to 10 Years",
    qual: "BE/ME Civil Engineering",
    loc: "Pune, India",
  },
  {
    title: "Legal Advisor",
    exp: "5 Years",
    qual: "LLB/LLM",
    loc: "Pune, India",
  },
  {
    title: "Biomedical Engineer",
    exp: "5 to 6 Years",
    qual: "Biomedical Engineering",
    loc: "Pune, India",
  },
  {
    title: "Sr. Architect",
    exp: "6 to 8 Years",
    qual: "B. Arch / NICMAR",
    loc: "Pune, India",
  },
  {
    title: "Mid Architect",
    exp: "3 to 6 Years",
    qual: "B. Arch",
    loc: "Pune, India",
  },
  {
    title: "Jr. Architect",
    exp: "2 to 5 Years",
    qual: "B. Arch",
    loc: "Pune, India",
  },
  {
    title: "Sales & Business Development Head",
    exp: "10+ Years",
    qual: "MBA Marketing",
    loc: "Pune, India",
  },
  {
    title: "Sales Executive",
    exp: "2 to 5 Years",
    qual: "MBA Marketing",
    loc: "Pune, India",
  },
  {
    title: "Sr. Digital Marketing Executive",
    exp: "5 to 8 Years",
    qual: "MBA Marketing",
    loc: "Pune, India",
  },
  {
    title: "Events Coordinator",
    exp: "2 to 5 Years",
    qual: "MBA Marketing",
    loc: "Pune, India",
  },
  {
    title: "Driver",
    exp: "2 to 5 Years",
    qual: "12th Pass",
    loc: "Pune, India",
  },
  {
    title: "CFO",
    exp: "10+ Years",
    qual: "C.A.",
    loc: "Pune, India",
  },
  {
    title: "Sr. Accountant",
    exp: "5 to 7 Years",
    qual: "B. Com",
    loc: "Pune, India",
  },
  {
    title: "Project Engineer",
    exp: "5 to 7 Years",
    qual: "BE/ME Civil Engineering",
    loc: "Pune, India",
  },
  {
    title: "MEPF - Mechanical Design Engineer",
    exp: "5 to 7 Years",
    qual: "BE/ME Mechanical Engineering",
    loc: "Pune, India",
  },
  {
    title: "MEPF - Electrical Design Engineer",
    exp: "5 to 7 Years",
    qual: "BE/ME Electrical Engineering",
    loc: "Pune, India",
  },
  {
    title: "Plumbing Engineer",
    exp: "5 to 7 Years",
    qual: "BE/ME Civil Engineering",
    loc: "Pune, India",
  },
  {
    title: "Quantity Surveyor",
    exp: "5 to 7 Years",
    qual: "BE/ME Civil Engineering",
    loc: "Pune, India",
  },
  {
    title: "Estimation & Billing Engineer",
    exp: "5 to 7 Years",
    qual: "BE/ME Civil Engineering",
    loc: "Pune, India",
  },
];

const JOBS_PER_PAGE = 8;

export default function JobBoard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // 1. Load CRM Script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.visionarybizz.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  // 1. Filter jobs based on search query
  const filteredJobs = useMemo(() => {
    return JOBS.filter(
      (job) =>
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.qual.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [searchQuery]);

  // 2. Calculate pagination
  const totalPages = Math.ceil(filteredJobs.length / JOBS_PER_PAGE);
  const indexOfLastJob = currentPage * JOBS_PER_PAGE;
  const indexOfFirstJob = indexOfLastJob - JOBS_PER_PAGE;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  // Reset to page 1 when searching
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-8">
        {/* --- Header & Search --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
              Live Opportunities
            </h2>
            <p className="text-lg text-slate-500 mt-4">
              Join a team that's redefining healthcare infrastructure.
            </p>
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search roles or qualifications..."
              className="w-full pl-12 pr-6 py-4 bg-white border border-slate-200 rounded-md focus:ring-4 focus:ring-teal-500/10 transition-all outline-none text-slate-900"
            />
          </div>
        </div>

        {/* --- Table Section --- */}
        <div className="backdrop-blur-md bg-white/70 border border-white/20 shadow-sm rounded-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50/50 border-b border-slate-100">
                <tr className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                  <th className="py-6 px-10">Position</th>
                  <th className="py-6 px-10">Experience</th>
                  <th className="py-6 px-10">Qualification</th>
                  <th className="py-6 px-10 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {currentJobs.length > 0 ? (
                  currentJobs.map((job, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-teal-50/30 transition-colors group"
                    >
                      <td className="py-8 px-10 font-bold text-slate-900 text-lg">
                        {job.title}
                      </td>
                      <td className="py-8 px-10 text-slate-600 font-medium">
                        {job.exp}
                      </td>
                      <td className="py-8 px-10 text-slate-600 font-medium">
                        {job.qual}
                      </td>
                      <td className="py-8 px-10 text-right">
                        <button 
                        onClick={() => setIsPopupOpen(true)}
                        className="bg-slate-900 text-white px-6 py-2.5 rounded-full font-bold hover:bg-teal-600 transition-all text-sm"
                      >
                        Apply Now
                      </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={4}
                      className="py-20 text-center text-slate-500 font-medium"
                    >
                      No roles found matching "{searchQuery}"
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* --- Pagination Controls --- */}
          {totalPages > 1 && (
            <div className="bg-slate-50/50 border-t border-slate-100 px-10 py-6 flex items-center justify-between">
              <p className="text-sm text-slate-500 font-medium">
                Showing{" "}
                <span className="text-slate-900">{indexOfFirstJob + 1}</span> to{" "}
                <span className="text-slate-900">
                  {Math.min(indexOfLastJob, filteredJobs.length)}
                </span>{" "}
                of <span className="text-slate-900">{filteredJobs.length}</span>{" "}
                roles
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-md border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`w-10 h-10 rounded-full text-sm font-bold transition-all ${
                      currentPage === i + 1
                        ? "bg-slate-900 text-white"
                        : "bg-white border border-slate-200 text-slate-600 hover:border-teal-500"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={() =>
                    setCurrentPage((p) => Math.min(totalPages, p + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-md border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          )}
        </div>

{isPopupOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setIsPopupOpen(false)}
          />
          
          {/* Modal Container */}
          <div className="relative w-full max-w-4xl h-[90vh] bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col">
            {/* Close Button */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-slate-100 bg-white sticky top-0 z-10">
              <h3 className="font-bold text-slate-900">Career Application</h3>
              <button 
                onClick={() => setIsPopupOpen(false)}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X size={20} className="text-slate-500" />
              </button>
            </div>

            {/* Iframe Wrapper (Scrollable) */}
            <div className="flex-1 overflow-y-auto">
              <iframe
                src="https://app.visionarybizz.com/widget/form/bwcvSkM7YWiF6T9nLx3R"
                style={{ width: "100%", height: "100%", border: "none" }}
                id="popup-bwcvSkM7YWiF6T9nLx3R"
                 data-layout='{"id":"INLINE"}'
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="career"
                data-height="2201"
                data-layout-iframe-id="popup-bwcvSkM7YWiF6T9nLx3R"
                data-form-id="bwcvSkM7YWiF6T9nLx3R"
                title="career"
              ></iframe>
            </div>
          </div>
        </div>
      )}

        {/* --- CV CTA --- */}
        <div className="mt-16 p-10 bg-slate-900 rounded-md flex flex-col md:flex-row items-center justify-between gap-8 text-white">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-white/10 rounded-md flex items-center justify-center text-teal-400">
              <Mail size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Didn't find your role?</h3>
              <p className="text-slate-400">
                We are always looking for talented professionals.
              </p>
            </div>
          </div>
          <a
            href="mailto:hr@infra.health"
            className="bg-teal-500 text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-white transition-all flex items-center gap-2"
          >
            Email your CV to hr@infra.health <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
