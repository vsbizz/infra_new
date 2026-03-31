"use client";

import { motion } from "motion/react";
import ReactMarkdown from "react-markdown";
import { Calendar, ChevronRight } from "lucide-react";
import { blogInner } from "@/data/blogInner";
import Link from "next/link";
import { useParams } from "next/navigation";

const BlogDetail = () => {
  const { slug } = useParams();

  const blogIndex = blogInner.findIndex((b) => b.slug === slug);
  const blog = blogInner[blogIndex] || blogInner[0];
  const relatedPosts = blogInner
    .filter((_, index) => index !== blogIndex)
    .slice(0, 3);

  // 1. Extract headings (####) for the dynamic "Contents" sidebar
  const sections =
    blog.content
      .match(/####\s+(.*)/g)
      ?.map((heading) => heading.replace("#### ", "").trim()) || [];

  // 2. Define the 5 Main Service Pillars
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
    .replace(/&/g, 'and')         // Change "&" to "and"
    .replace(/[^\w\s-]/g, '')     // Remove other special characters
    .replace(/\s+/g, '-')         // Replace spaces with "-"
    .replace(/-+/g, '-');         // Avoid double hyphens (--)

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-44 px-6 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col items-start gap-3 mb-8">
              <nav className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-8 uppercase tracking-widest">
                <Link
                  href="/"
                  className="hover:text-teal-600 transition-colors"
                >
                  Home
                </Link>
                <ChevronRight className="w-3 h-3" />
                <Link
                  href="/blogs"
                  className="hover:text-teal-600 transition-colors"
                >
                  Blogs
                </Link>
                <ChevronRight className="w-3 h-3" />
                <span className="text-slate-900">{blog.title}</span>
              </nav>
            </div>

            <h2 className="text-3xl md:text-6xl font-display font-bold text-brand-dark leading-[1.1] mb-8 tracking-tight">
              {blog.title}
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <img
              src={blog.mainImage}
              alt={blog.title}
              className="w-full aspect-21/9 object-cover rounded-md shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="text-slate-400 text-xs flex items-center gap-1.5 font-bold uppercase tracking-widest mb-8">
            <Calendar size={12} />
            {blog.publishedAt}
          </div>

          <div className="grid md:grid-cols-12 gap-16">
            {/* Sidebar Navigation (Sticky) */}
            <aside className="hidden md:block md:col-span-3">
              <div className="sticky top-32 space-y-12">
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">
                    Contents
                  </h4>
                  <ul className="space-y-4">
                    {sections.map((item) => (
                      <li key={item}>
                        <a
                          href={`#${slugify(item)}`}
                          className="text-sm font-medium text-slate-500 hover:text-brand-teal transition-colors flex items-center gap-2 group"
                        >
                          <span className="w-4 h-px bg-slate-200 group-hover:w-6 group-hover:bg-brand-teal transition-all"></span>
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">
                    Main Services
                  </h4>
                  <ul className="space-y-4">
                    {mainServices.map((item) => (
                      <li key={item}>
                        <a
                          href={`/services/${slugify(item)}`}
                          className="text-sm font-bold text-slate-900 hover:text-brand-teal transition-colors flex items-center justify-between group"
                        >
                          {item}
                          <ChevronRight
                            size={14}
                            className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all"
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
              <div className="blog-content">
                <ReactMarkdown
                  components={{
                    // Assigning IDs to headings so the sidebar links can jump to them
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

      {/* Related Posts */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">You may also like</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {relatedPosts.map((post) => (
              <Link
                href={`/blogs/${post.slug}`}
                key={post.slug}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 transition-all hover:shadow-xl">
                  <img
                    src={post.mainImage}
                    className="aspect-16/10 object-cover w-full"
                    alt={post.title}
                  />
                  <div className="p-6">
                    <h3
                      className="font-bold text-xl mb-2 group-hover:text-brand-teal transition-colors"
                      dangerouslySetInnerHTML={{ __html: post.title }}
                    />
                    <p className="text-slate-500 text-sm line-clamp-2">
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
