"use client";

import { motion } from "motion/react";
import ReactMarkdown from "react-markdown";
import { Calendar, ChevronRight, ChevronLeft } from "lucide-react";
import { blogInner } from "@/data/blogInner";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

const BlogDetail = () => {
  const { slug } = useParams();
  const [relatedIndex, setRelatedIndex] = useState(0);

  const blogIndex = blogInner.findIndex((b) => b.slug === slug);
  const blog = blogInner[blogIndex] || blogInner[0];
  const relatedPosts = blogInner
    .filter((_, index) => index !== blogIndex)
    .slice(0, 3);

  const sections =
    blog.content
      .match(/####\s+(.*)/g)
      ?.map((heading) => heading.replace("#### ", "").trim()) || [];

  const mainServices = [
    "Investment & Capital Advisory",
    "Leasing & Operator Advisory",
    "Advisory & Strategic Planning",
    "Design & Project Delivery",
    "Property & Facilities Management",
  ];

  const slugify = (text: string) =>
    text
      .toLowerCase()
      .trim()
      .replace(/&/g, "and")
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");

  const prevRelated = () => {
    setRelatedIndex((prev) =>
      prev === 0 ? relatedPosts.length - 1 : prev - 1,
    );
  };

  const nextRelated = () => {
    setRelatedIndex((prev) =>
      prev === relatedPosts.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero Section ── */}
      <section className="border-b border-slate-100 px-4 xs:px-5 sm:px-6 pt-32 sm:pt-20 md:pt-44 lg:pt-54">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 flex flex-col items-start gap-2 xs:gap-3 xs:mb-7 md:mb-8">
              <nav className="mb-6 flex flex-wrap items-center gap-1.5 text-[10px] xs:text-[11px] md:text-xs font-semibold uppercase tracking-widest text-slate-400 xs:mb-7 md:mb-8 md:gap-2">
                <Link
                  href="/"
                  className="transition-colors hover:text-teal-600"
                >
                  Home
                </Link>
                <ChevronRight className="h-3 w-3 shrink-0" />
                <Link
                  href="/blogs"
                  className="transition-colors hover:text-teal-600"
                >
                  Blogs
                </Link>
                <ChevronRight className="h-3 w-3 shrink-0" />
                <span className="max-w-[200px] truncate text-slate-900 sm:max-w-none">
                  {blog.title}
                </span>
              </nav>
            </div>

            <h2 className="mb-6 text-2xl xs:text-[26px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display leading-[1.3] tracking-tight text-brand-dark md:mb-8 md:font-extrabold md:leading-[1.1]">
              {blog.title}
            </h2>
          </motion.div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="px-4 xs:px-5 sm:px-6 pb-12 xs:pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-10 xs:mb-12 md:mb-16"
          >
            <img
              src={blog.mainImage}
              alt={blog.title}
              className="aspect-21/9 w-full rounded-md object-cover shadow-xl md:shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <div className="mb-6 flex items-center gap-1.5 text-[10px] xs:text-[11px] md:text-xs font-bold uppercase tracking-widest text-slate-400 xs:mb-7 md:mb-8">
            <Calendar size={12} />
            {blog.publishedAt}
          </div>

          <div className="grid gap-8 xs:gap-10 md:grid-cols-12 md:gap-12 lg:gap-16">
            {/* Sidebar Navigation */}
            <aside className="hidden md:col-span-3 md:block">
              <div className="sticky top-32 space-y-10 xs:space-y-12">
                <div>
                  <h4 className="mb-5 text-[10px] xs:text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 xs:mb-6">
                    Contents
                  </h4>
                  <ul className="space-y-3 xs:space-y-4">
                    {sections.map((item) => (
                      <li key={item}>
                        <a
                          href={`#${slugify(item)}`}
                          className="group flex items-center gap-2 text-xs xs:text-sm font-medium text-slate-500 transition-colors hover:text-brand-teal"
                        >
                          <span className="h-px w-4 bg-slate-200 transition-all group-hover:w-6 group-hover:bg-brand-teal"></span>
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="mb-5 text-[10px] xs:text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 xs:mb-6">
                    Main Services
                  </h4>
                  <ul className="space-y-3 xs:space-y-4">
                    {mainServices.map((item) => (
                      <li key={item}>
                        <a
                          href={`/services/${slugify(item)}`}
                          className="group flex items-center justify-between text-xs xs:text-sm font-bold text-slate-900 transition-colors hover:text-brand-teal"
                        >
                          {item}
                          <ChevronRight
                            size={14}
                            className="-translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>

            {/* Article Body */}
            <div className="md:col-span-9">
              <div className="blog-content prose prose-slate max-w-none">
                <ReactMarkdown
                  components={{
                    h4: ({ children }) => {
                      const id = slugify(children?.toString() || "");
                      return <h4 id={id}>{children}</h4>;
                    },
                  }}
                >
                  {blog.content}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Posts ── */}
      <section className="bg-slate-50 px-4 xs:px-5 sm:px-6 py-12 xs:py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-2xl xs:text-[26px] sm:text-3xl md:text-4xl  leading-[1.2] tracking-tight md:mb-12 md:font-extrabold">
            You may also like
          </h2>

          {/* Mobile carousel */}
          <div className="md:hidden">
            {relatedPosts.length > 0 && (
              <>
                <Link
                  href={`/blogs/${relatedPosts[relatedIndex].slug}`}
                  className="group block"
                >
                  <div className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-100 bg-white transition-all hover:shadow-xl">
                    <img
                      src={relatedPosts[relatedIndex].mainImage}
                      className="aspect-[16/10] w-full object-cover"
                      alt={relatedPosts[relatedIndex].title}
                    />
                    <div className="flex flex-1 flex-col p-5 xs:p-6">
                      <h3
                        className="mb-2 text-lg xs:text-xl md:font-bold line-clamp-2 transition-colors group-hover:text-brand-teal xs:mb-3"
                        dangerouslySetInnerHTML={{
                          __html: relatedPosts[relatedIndex].title,
                        }}
                      />
                      <p className="mt-auto line-clamp-2 text-sm xs:text-[15px] font-normal leading-[1.6] text-slate-500">
                        {relatedPosts[relatedIndex].summary}
                      </p>
                    </div>
                  </div>
                </Link>

                <div className="mt-4 flex items-center justify-between">
                  <button
                    onClick={prevRelated}
                    className="rounded-xl border border-slate-200 bg-white p-2.5 text-slate-900 shadow-sm transition-all hover:bg-slate-900 hover:text-white"
                    aria-label="Previous related post"
                  >
                    <ChevronLeft size={20} />
                  </button>

                  <div className="flex items-center gap-2">
                    {relatedPosts.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setRelatedIndex(i)}
                        aria-label={`Go to related post ${i + 1}`}
                        className={`h-2.5 rounded-full transition-all ${
                          relatedIndex === i
                            ? "w-6 bg-teal-600"
                            : "w-2.5 bg-slate-300"
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextRelated}
                    className="rounded-xl border border-slate-200 bg-white p-2.5 text-slate-900 shadow-sm transition-all hover:bg-slate-900 hover:text-white"
                    aria-label="Next related post"
                  >
                    <ChevronLeft size={20} className="rotate-180" />
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Desktop grid */}
          <div className="hidden gap-6 xs:gap-8 sm:grid-cols-2 md:grid md:grid-cols-3 md:gap-10">
            {relatedPosts.map((post) => (
              <Link
                href={`/blogs/${post.slug}`}
                key={post.slug}
                className="group"
              >
                <div className="flex h-full flex-col overflow-hidden rounded-xl md:rounded-2xl border border-slate-100 bg-white transition-all hover:shadow-xl">
                  <img
                    src={post.mainImage}
                    className="aspect-[16/10] w-full object-cover"
                    alt={post.title}
                  />
                  <div className="flex flex-1 flex-col p-5 xs:p-6">
                    <h3
                      className="mb-2 text-lg xs:text-xl font-bold line-clamp-2 transition-colors group-hover:text-brand-teal xs:mb-3"
                      dangerouslySetInnerHTML={{ __html: post.title }}
                    />
                    <p className="mt-auto line-clamp-2 text-sm xs:text-[15px] font-normal leading-[1.6] text-slate-500">
                      {post.summary}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
