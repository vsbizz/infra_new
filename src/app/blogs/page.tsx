"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ArrowRight, Calendar, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { blogInner } from "@/data/blogInner";

const MEDIA_DATA = [
  {
    id: "media-1",
    title:
      "Infra.Health is participating at the Medicall Expo, Hyderabad 2026! Meet Us from 4th to 6th April.",
    date: "April 2026",
    image: "/asset/news/event.jpeg",
    tag: "Event",
  },
  {
    id: "media-2",
    title:
      "Infra.Health was proud to participate in the World Health Expo (WHX) Dubai in February 2026.",
    date: "February 2026",
    image: "/asset/news/media.jpeg",
    tag: "Global Expo",
  },
];

const POSTS_PER_PAGE = 6;

const Blog: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [mediaIndex, setMediaIndex] = useState(0);
  const [blogIndex, setBlogIndex] = useState(0);

  const blogSectionRef = React.useRef<HTMLDivElement>(null);

  const totalPages = Math.ceil(blogInner.length / POSTS_PER_PAGE);
  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = blogInner.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    setBlogIndex(0);
    if (blogSectionRef.current) {
      blogSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const prevMedia = () => {
    setMediaIndex((prev) => (prev === 0 ? MEDIA_DATA.length - 1 : prev - 1));
  };

  const nextMedia = () => {
    setMediaIndex((prev) => (prev === MEDIA_DATA.length - 1 ? 0 : prev + 1));
  };

  const prevBlog = () => {
    setBlogIndex((prev) => (prev === 0 ? currentPosts.length - 1 : prev - 1));
  };

  const nextBlog = () => {
    setBlogIndex((prev) => (prev === currentPosts.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50/30 pt-5 sm:pt-3 md:pt-5 lg:pt-10">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-0 top-0 h-full w-full" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-5 flex flex-wrap items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-400 sm:mb-6 sm:gap-2 sm:text-xs md:mb-8">
            <Link href="/" className="transition-colors hover:text-teal-600">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 shrink-0" />
            <span className="text-slate-900">Blogs</span>
          </nav>

          <div className="mx-auto mb-10 max-w-4xl text-left sm:mb-12 sm:text-center md:mb-16 lg:mb-24">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-5 w-full max-w-none text-[1.85rem] xs:text-[2rem] sm:text-4xl md:text-5xl lg:text-7xl md:font-extrabold leading-[1.06] tracking-tight text-slate-900 font-display sm:mb-6 md:mb-8 lg:mb-12"
            >
              Perspectives on
              <span className="text-teal-600"> Healthcare Infrastructure</span>
            </motion.h1>

            <p className="mx-auto max-w-2xl text-sm sm:text-[15px] md:text-lg leading-6 md:leading-relaxed text-slate-600 font-medium">
              Expert analysis, industry trends, and strategic insights in
              Healthcare Infrastructure and Asset Development.
            </p>
          </div>
        </div>
      </section>

      {/* Media/News Section */}
      <section className="border-b border-slate-100 pb-10 sm:pb-12 md:pb-16 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-between sm:mb-8 md:mb-10 lg:mb-12">
            <h2 className="text-[1.45rem] sm:text-2xl md:text-3xl md:font-bold text-slate-900 font-display">
              In the News
            </h2>
            <div className="mx-4 hidden h-px grow bg-slate-100 sm:block md:mx-8" />
          </div>

          {/* Mobile / Tablet Carousel */}
          <div className="lg:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={MEDIA_DATA[mediaIndex].id}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.35 }}
                className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-slate-100 bg-slate-50 shadow-lg"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={MEDIA_DATA[mediaIndex].image}
                    alt={MEDIA_DATA[mediaIndex].title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-4 sm:p-5 md:p-6">
                  <span className="mb-3 inline-block rounded-full bg-teal-600 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                    {MEDIA_DATA[mediaIndex].tag}
                  </span>

                  <h3 className="mb-3 text-lg sm:text-xl md:text-2xl md:font-bold leading-tight text-slate-900 font-display">
                    {MEDIA_DATA[mediaIndex].title}
                  </h3>

                  <div className="flex items-center gap-2 text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.14em] text-slate-400">
                    <Calendar className="h-4 w-4" />
                    {MEDIA_DATA[mediaIndex].date}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-4 flex items-center justify-between">
              <button
                onClick={prevMedia}
                className="rounded-xl border border-slate-200 bg-white p-2.5 text-slate-900 shadow-sm transition-all hover:bg-slate-900 hover:text-white"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex items-center gap-2">
                {MEDIA_DATA.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setMediaIndex(i)}
                    className={`h-2.5 rounded-full transition-all ${mediaIndex === i
                      ? "w-6 bg-teal-600"
                      : "w-2.5 bg-slate-300"
                      }`}
                  />
                ))}
              </div>

              <button
                onClick={nextMedia}
                className="rounded-xl border border-slate-200 bg-white p-2.5 text-slate-900 shadow-sm transition-all hover:bg-slate-900 hover:text-white"
              >
                <ChevronLeft size={20} className="rotate-180" />
              </button>
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-8 xl:gap-12">
            {MEDIA_DATA.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 shadow-xl"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-8">
                  <span className="mb-4 inline-block rounded-full bg-teal-600 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                    {item.tag}
                  </span>

                  <h3 className="mb-4 text-2xl font-bold leading-tight text-slate-900 font-display">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-slate-400">
                    <Calendar className="h-4 w-4" />
                    {item.date}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section
        ref={blogSectionRef}
        className="scroll-mt-20 bg-slate-50/50 py-10 sm:py-12 md:py-16 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-center sm:justify-between md:mb-10 lg:mb-12">
            <div className="flex items-center justify-between sm:justify-start sm:flex-1">
              <h2 className="text-[1.45rem] sm:text-2xl md:text-3xl md:font-bold text-slate-900 font-display">
                Latest Insights
              </h2>
              <div className="ml-4 hidden h-px grow bg-slate-200 sm:block sm:mx-6 md:mx-8" />
            </div>

            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
              {indexOfFirstPost + 1}-
              {Math.min(indexOfLastPost, blogInner.length)} of{" "}
              {blogInner.length}
            </span>
          </div>

          {/* Mobile / Tablet Carousel */}
          <div className="lg:hidden">
            {currentPosts.length > 0 && (
              <>
                <AnimatePresence mode="wait">
                  <Link href={`/blogs/${currentPosts[blogIndex].slug}`}>
                    <motion.article
                      key={currentPosts[blogIndex].slug}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -24 }}
                      transition={{ duration: 0.35 }}
                      className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-xl sm:rounded-2xl border border-slate-100 bg-white transition-all duration-500 hover:shadow-xl"
                    >
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={currentPosts[blogIndex].mainImage}
                          alt={currentPosts[blogIndex].title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute left-3 top-3 sm:left-4 sm:top-4">
                          <span className="rounded-full bg-teal-600/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                            {currentPosts[blogIndex].category}
                          </span>
                        </div>
                      </div>

                      <div className="flex grow flex-col p-4 sm:p-5 md:p-6">
                        <div className="mb-3 flex items-center gap-4 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400 sm:mb-4">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="h-3.5 w-3.5" />
                            {currentPosts[blogIndex].publishedAt}
                          </span>
                        </div>

                        <h3
                          className="mb-3 line-clamp-2 text-lg sm:text-xl md:font-bold leading-tight text-slate-900 font-display transition-colors group-hover:text-teal-600 sm:mb-4"
                          dangerouslySetInnerHTML={{
                            __html: currentPosts[blogIndex].title,
                          }}
                        />

                        <p className="mb-5 line-clamp-3 text-sm sm:text-[15px] leading-6 text-slate-500">
                          {currentPosts[blogIndex].summary}
                        </p>

                        <div className="mt-auto flex items-center justify-between border-t border-slate-50 pt-4">
                          <div className="flex items-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] text-slate-900 transition-colors group-hover:text-teal-600">
                            Read Full Article
                            <ArrowRight
                              size={14}
                              className="transition-transform group-hover:translate-x-1"
                            />
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  </Link>
                </AnimatePresence>

                <div className="mt-4 flex items-center justify-between">
                  <button
                    onClick={prevBlog}
                    className="rounded-xl border border-slate-200 bg-white p-2.5 text-slate-900 shadow-sm transition-all hover:bg-slate-900 hover:text-white"
                  >
                    <ChevronLeft size={20} />
                  </button>

                  <div className="flex items-center gap-2">
                    {currentPosts.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setBlogIndex(i)}
                        className={`h-2.5 rounded-full transition-all ${blogIndex === i
                          ? "w-6 bg-teal-600"
                          : "w-2.5 bg-slate-300"
                          }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextBlog}
                    className="rounded-xl border border-slate-200 bg-white p-2.5 text-slate-900 shadow-sm transition-all hover:bg-slate-900 hover:text-white"
                  >
                    <ChevronLeft size={20} className="rotate-180" />
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8 xl:gap-10">
            <AnimatePresence mode="wait">
              {currentPosts.map((post) => (
                <Link href={`/blogs/${post.slug}`} key={post.slug}>
                  <motion.article
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white transition-all duration-500 hover:shadow-2xl"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={post.mainImage}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute left-4 top-4">
                        <span className="rounded-full bg-teal-600/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="flex grow flex-col p-8">
                      <div className="mb-4 flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" />
                          {post.publishedAt}
                        </span>
                      </div>

                      <h3
                        className="mb-4 line-clamp-2 text-xl font-bold leading-tight text-slate-900 font-display transition-colors group-hover:text-teal-600"
                        dangerouslySetInnerHTML={{ __html: post.title }}
                      />

                      <p className="mb-8 line-clamp-3 text-sm leading-relaxed text-slate-500">
                        {post.summary}
                      </p>

                      <div className="mt-auto flex items-center justify-between border-t border-slate-50 pt-6">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-900 transition-colors group-hover:text-teal-600">
                          Read Full Article
                          <ArrowRight
                            size={14}
                            className="transition-transform group-hover:translate-x-1"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.article>
                </Link>
              ))}
            </AnimatePresence>
          </div>

          {/* Pagination */}
          <div className="mt-10 flex flex-col items-center gap-5 sm:mt-12 md:mt-16 lg:mt-20 sm:gap-6">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              <button
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="rounded-xl border border-slate-200 bg-white p-2.5 sm:p-3 text-slate-900 shadow-sm transition-all hover:bg-slate-900 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handlePageChange(i + 1)}
                    className={`h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 rounded-full text-sm font-bold transition-all duration-300 ${currentPage === i + 1
                      ? "bg-slate-900 text-white shadow-lg md:shadow-xl"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-teal-500 hover:text-teal-600"
                      }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </button>
                ))}
              </div>

              <button
                onClick={() =>
                  handlePageChange(Math.min(totalPages, currentPage + 1))
                }
                disabled={currentPage === totalPages}
                className="rounded-xl border border-slate-200 bg-white p-2.5 sm:p-3 text-slate-900 shadow-sm transition-all hover:bg-slate-900 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
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
