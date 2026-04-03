"use client";

import React, { useState, useMemo, useEffect } from "react";
import {
  Search,
  Mail,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  X,
  Clock,
  GraduationCap,
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

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.visionarybizz.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  const filteredJobs = useMemo(() => {
    return JOBS.filter(
      (job) =>
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.qual.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [searchQuery]);

  const totalPages = Math.ceil(filteredJobs.length / JOBS_PER_PAGE);
  const indexOfLastJob = currentPage * JOBS_PER_PAGE;
  const indexOfFirstJob = indexOfLastJob - JOBS_PER_PAGE;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <section className="py-12 md:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* --- Header & Search --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
              Live Opportunities
            </h2>
            <p className="text-base md:text-lg text-slate-500 mt-4">
              Join a team that's redefining healthcare infrastructure.
            </p>
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search roles..."
              className="w-full pl-11 pr-4 py-3 md:py-4 bg-white border border-slate-200 rounded-xl focus:ring-4 focus:ring-teal-500/10 transition-all outline-none text-slate-900 shadow-sm"
            />
          </div>
        </div>

        {/* --- Jobs Container --- */}
        <div className="bg-white md:bg-white/70 border border-slate-200 md:border-white/20 shadow-sm rounded-2xl overflow-hidden">
          
          {/* Desktop Table (Hidden on Mobile) */}
          <div className="hidden md:block overflow-x-auto">
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
                {currentJobs.map((job, idx) => (
                  <tr key={idx} className="hover:bg-teal-50/30 transition-colors group">
                    <td className="py-8 px-10 font-bold text-slate-900 text-lg">{job.title}</td>
                    <td className="py-8 px-10 text-slate-600 font-medium">{job.exp}</td>
                    <td className="py-8 px-10 text-slate-600 font-medium">{job.qual}</td>
                    <td className="py-8 px-10 text-right">
                      <button onClick={() => setIsPopupOpen(true)} className="bg-slate-900 text-white px-6 py-2.5 rounded-full font-bold hover:bg-teal-600 transition-all text-sm">
                        Apply Now
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards (Visible only on Mobile) */}
          <div className="md:hidden divide-y divide-slate-100">
            {currentJobs.length > 0 ? (
              currentJobs.map((job, idx) => (
                <div key={idx} className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{job.title}</h3>
                    <p className="text-sm text-teal-600 font-semibold uppercase tracking-wider">{job.loc}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Clock size={16} className="text-slate-400" />
                      <span className="text-sm">{job.exp}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <GraduationCap size={16} className="text-slate-400" />
                      <span className="text-sm truncate">{job.qual}</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => setIsPopupOpen(true)}
                    className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold active:scale-95 transition-all text-sm"
                  >
                    Apply Now
                  </button>
                </div>
              ))
            ) : (
              <div className="py-20 text-center text-slate-500">No roles found.</div>
            )}
          </div>

          {/* --- Pagination Controls --- */}
          {totalPages > 1 && (
            <div className="bg-slate-50/50 border-t border-slate-100 px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-sm text-slate-500 font-medium order-2 md:order-1">
                Showing <span className="text-slate-900 font-bold">{indexOfFirstJob + 1}</span> to <span className="text-slate-900 font-bold">{Math.min(indexOfLastJob, filteredJobs.length)}</span> of {filteredJobs.length} roles
              </p>
              <div className="flex gap-2 order-1 md:order-2">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg border border-slate-200 bg-white disabled:opacity-30 transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <div className="flex gap-1">
                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`w-10 h-10 rounded-full text-sm font-bold transition-all ${
                        currentPage === i + 1 ? "bg-slate-900 text-white shadow-md" : "bg-white text-slate-600 border border-slate-200"
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg border border-slate-200 bg-white disabled:opacity-30 transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* --- Popup Overlay --- */}
        {isPopupOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6 lg:p-10">
            <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-md" onClick={() => setIsPopupOpen(false)} />
            <div className="relative w-full max-w-4xl h-full md:h-[90vh] bg-white md:rounded-2xl shadow-2xl overflow-hidden flex flex-col">
              <div className="flex justify-between items-center px-6 py-4 border-b border-slate-100">
                <h3 className="font-bold text-slate-900">Career Application</h3>
                <button onClick={() => setIsPopupOpen(false)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                  <X size={20} className="text-slate-500" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto bg-slate-50">
                <iframe
                  src="https://app.visionarybizz.com/widget/form/bwcvSkM7YWiF6T9nLx3R"
                  style={{ width: "100%", height: "100%", border: "none" }}
                  id="popup-bwcvSkM7YWiF6T9nLx3R"
                  title="career"
                ></iframe>
              </div>
            </div>
          </div>
        )}

        {/* --- CV CTA --- */}
        <div className="mt-12 md:mt-16 p-8 md:p-12 bg-slate-900 rounded-3xl flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left relative z-10">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-teal-400 shrink-0">
              <Mail size={32} />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">Didn't find your role?</h3>
              <p className="text-slate-400 mt-2 text-base md:text-lg max-w-md">
                We are always looking for talented professionals. Email us directly.
              </p>
            </div>
          </div>
          <a
            href="mailto:hr@infra.health"
            className="w-full lg:w-auto bg-teal-500 text-slate-900 px-8 py-5 rounded-2xl font-bold hover:bg-white transition-all flex items-center justify-center gap-3 relative z-10"
          >
            Email your CV <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}