"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  ArrowRight,
  Calendar,
  ChevronLeft,
} from "lucide-react";
import Link from "next/link";
// Importing the real data from your .ts file
import { blogInner } from "@/data/blogInner";

const MEDIA_DATA = [
  {
    id: "media-1",
    title: "Infra.Health is participating at the Medicall Expo, Hyderabad 2026! Meet Us from 4th to 6th April.",
    date: "April 2026",
    image: "/asset/news/event.jpeg",
    tag: "Event",
  },
  {
    id: "media-2",
    title: "Infra.Health was proud to participate in the World Health Expo (WHX) Dubai in February 2026.",
    date: "February 2026",
    image: "/asset/news/media.jpeg",
    tag: "Global Expo",
  },
];

const POSTS_PER_PAGE = 6;

const Blog: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogSectionRef = React.useRef<HTMLDivElement>(null);

  // Pagination Logic using blogInner instead of dummy data
  const totalPages = Math.ceil(blogInner.length / POSTS_PER_PAGE);
  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = blogInner.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    if (blogSectionRef.current) {
      blogSectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* --- Hero Section --- */}
      <section className="pt-44 relative overflow-hidden bg-slate-50/30">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-8 uppercase tracking-widest">
            <Link href="/" className="hover:text-teal-600 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-slate-900">Blogs</span>
          </nav>
          <div className="text-center mb-24 max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 md:text-5xl lg:text-7xl mb-12 font-display"
            >
              Perspectives on
              <span className="text-teal-600"> Healthcare Infrastructure</span>
            </motion.h1>
            <p className="text-xl leading-relaxed text-slate-600 max-w-2xl mx-auto font-medium">
              Expert analysis, industry trends, and strategic insights in
              Healthcare Infrastructure and Asset Development.
            </p>
          </div>
        </div>
      </section>

      {/* --- Media/News Section --- */}
      <section className="pb-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-slate-900 font-display">In the News</h2>
            <div className="h-px grow mx-8 bg-slate-100" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {MEDIA_DATA.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl shadow-xl bg-slate-50 border border-slate-100"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <span className="inline-block px-3 py-1 bg-teal-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-4">
                    {item.tag}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 leading-tight mb-4 font-display">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-slate-400 font-bold uppercase tracking-widest">
                    <Calendar className="w-4 h-4" /> {item.date}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Dynamic Blog Grid Section --- */}
      <section ref={blogSectionRef} className="py-24 bg-slate-50/50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-slate-900 font-display">Latest Insights</h2>
            <div className="h-px grow mx-8 bg-slate-200" />
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] hidden sm:block">
              {indexOfFirstPost + 1}—{Math.min(indexOfLastPost, blogInner.length)} of {blogInner.length}
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence mode="wait">
              {currentPosts.map((post) => (
                <Link href={`/blogs/${post.slug}`} key={post.slug}>
                  <motion.article
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 cursor-pointer"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={post.mainImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-teal-600/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-8 flex flex-col grow">
                      <div className="flex items-center gap-4 mb-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" /> {post.publishedAt}
                        </span>
                      </div>
                      <h3 
                        className="text-xl font-bold text-slate-900 mb-4 font-display leading-tight group-hover:text-teal-600 transition-colors line-clamp-2"
                        dangerouslySetInnerHTML={{ __html: post.title }}
                      />
                      <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3">
                        {post.summary}
                      </p>
                      <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-900 group-hover:text-teal-600 transition-colors">
                          Read Full Article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </motion.article>
                </Link>
              ))}
            </AnimatePresence>
          </div>

          {/* --- Pagination --- */}
          <div className="mt-20 flex flex-col items-center gap-6">
            <div className="flex items-center gap-3">
              <button
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="p-3 rounded-xl border border-slate-200 bg-white text-slate-900 hover:bg-slate-900 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex gap-2">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handlePageChange(i + 1)}
                    className={`w-12 h-12 rounded-full text-sm font-bold transition-all duration-300 ${
                      currentPage === i + 1
                        ? "bg-slate-900 text-white shadow-xl"
                        : "bg-white border border-slate-200 text-slate-600 hover:border-teal-500 hover:text-teal-600"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </button>
                ))}
              </div>

              <button
                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="p-3 rounded-xl border border-slate-200 bg-white text-slate-900 hover:bg-slate-900 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm"
              >
                <ChevronLeft size={20} className="rotate-180" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;