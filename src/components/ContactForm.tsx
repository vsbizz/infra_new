"use client";

import { useState } from "react";
import { motion } from "motion/react";

function ContactForm() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const servicesData = [
    {
      category: "Investment & Capital Advisory",
      slug: "investment-and-capital-advisory",
      items: [
        { name: "Investment Sales", slug: "investment-sales" },
        {
          name: "Institutional Partnerships",
          slug: "institutional-partnerships",
        },
        { name: "Structured Financing", slug: "structured-financing" },
        { name: "Debt Advisory", slug: "debt-advisory" },
        {
          name: "Distressed Asset Strategy",
          slug: "distressed-asset-strategy",
        },
        { name: "Valuation & Risk Underwriting", slug: "valuation-risk" },
      ],
    },
    {
      category: "Leasing & Operator Advisory",
      slug: "leasing-and-operator-advisory",
      items: [
        { name: "Owner Representation", slug: "owner-representation" },
        { name: "Tenant & Operator Representation", slug: "tenant-operator" },
        {
          name: "Site Selection & Location Strategy",
          slug: "location-strategy",
        },
      ],
    },
    {
      category: "Advisory & Strategic Planning",
      slug: "advisory-and-strategic-planning",
      items: [
        { name: "Feasibility Studies & DPR", slug: "feasibility-dpr" },
        { name: "Market & Demographic Analysis", slug: "market-analysis" },
        { name: "Specialty & Capacity Planning", slug: "capacity-planning" },
        { name: "Financial Modeling", slug: "financial-modeling" },
        { name: "PPP Advisory", slug: "ppp-advisory" },
        { name: "ESG & Sustainability", slug: "esg-sustainability" },
        { name: "Digital Transformation", slug: "digital-strategy" },
        { name: "Accreditation Advisory", slug: "accreditation" },
      ],
    },
    {
      category: "Design & Project Delivery",
      slug: "design-and-project-delivery",
      items: [
        { name: "Project Management (PMC)", slug: "pmc" },
        { name: "Integrated Healthcare Design", slug: "healthcare-design" },
        { name: "Procurement Management", slug: "procurement" },
        { name: "Equipment Planning", slug: "equipment-planning" },
        { name: "Cost Consultancy", slug: "cost-consultancy" },
        { name: "Design-Build Solutions", slug: "design-build" },
        { name: "EPC Turnkey Delivery", slug: "epc-turnkey" },
      ],
    },
    {
      category: "Property & Facilities Management",
      slug: "property-and-facilities-management",
      items: [
        { name: "Property Management", slug: "property-management" },
        { name: "Integrated Facility Management", slug: "ifm" },
        { name: "IFM Consultancy", slug: "ifm-consultancy" },
      ],
    },
  ];

  // Find items for the second dropdown based on first selection
  const subItems =
    servicesData.find((s) => s.category === selectedCategory)?.items || [];
  return (
    <section className="py-32 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-5xl font-bold text-slate-900 mb-8 font-display leading-[1.1] tracking-tight">
              Contact Us about <br />
              <span className="text-teal-600 font-display">
                Healthcare Infrastructure and Asset Development Services
              </span>
            </h2>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-md font-medium">
              Unlock the power of our specialized expertise to transform your
              healthcare infrastructure challenges into strategic advantages,
              optimising your portfolio for enhanced value and performance.
            </p>
          </div>
          <div className="bg-slate-50 p-10 border border-slate-100 rounded-md">
            <form className="space-y-4">
              {/* Inquiry Direction */}
              <div className="space-y-1">
                <label className="text-base font-bold uppercase tracking-wider text-slate-400">
                  How can we direct your enquiry? *
                </label>
                <select
                  className="w-full p-4 border border-slate-200 bg-white focus:outline-none focus:border-teal-500 transition-colors text-sm rounded-md"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Select a division...
                  </option>
                  {servicesData.map((service) => (
                    <option key={service.slug} value={service.category}>
                      I'm interested in {service.category}
                    </option>
                  ))}
                </select>
              </div>

              {/* 2. Dynamic Sub-item Selection */}
              <div className="space-y-1">
                <label className="text-base font-bold uppercase tracking-wider text-slate-400">
                  Further define your query *
                </label>
                <select
                  className="w-full p-4 border border-slate-200 bg-white focus:outline-none focus:border-teal-500 transition-colors text-sm disabled:bg-slate-50 disabled:cursor-not-allowed rounded-md"
                  disabled={!selectedCategory}
                  required
                >
                  <option value="">
                    {selectedCategory
                      ? "Select specific service..."
                      : "Please select a division first"}
                  </option>
                  {subItems.map((item) => (
                    <option key={item.slug} value={item.slug}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              {/* Name Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name *"
                  className="w-full p-4 border border-slate-200 focus:outline-none focus:border-teal-500 transition-colors text-sm rounded-md"
                />
                <input
                  type="text"
                  placeholder="Last Name *"
                  className="w-full p-4 border border-slate-200 focus:outline-none focus:border-teal-500 transition-colors text-sm rounded-md"
                />
              </div>

              {/* Professional Info Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Job Title *"
                  className="w-full p-4 border border-slate-200 focus:outline-none focus:border-teal-500 transition-colors text-sm rounded-md"
                />
                <input
                  type="text"
                  placeholder="Company or Organization *"
                  className="w-full p-4 border border-slate-200 focus:outline-none focus:border-teal-500 transition-colors text-sm rounded-md"
                />
              </div>

              {/* Contact Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Business Email Address *"
                  className="w-full p-4 border border-slate-200 focus:outline-none focus:border-teal-500 transition-colors text-sm rounded-md"
                />
                <div className="flex">
                  <div className="w-20 bg-white border border-r-0 border-slate-200 flex items-center justify-center text-sm text-slate-500 rounded-md">
                    +91
                  </div>
                  <input
                    type="tel"
                    placeholder="Business Phone *"
                    className="w-full p-4 border border-slate-200 focus:outline-none focus:border-teal-500 transition-colors text-sm rounded-md"
                  />
                </div>
              </div>

              {/* Country Selection */}
              <div className="space-y-1">
                <label className="text-base font-bold uppercase tracking-wider text-slate-400">
                  Country *
                </label>
                <select className="w-full p-4 border border-slate-200 bg-white focus:outline-none focus:border-teal-500 transition-colors text-sm rounded-md">
                  <option>India</option>
                  <option>United Arab Emirates</option>
                  <option>United Kingdom</option>
                  <option>United States</option>
                </select>
              </div>

              {/* Timeline */}
              <div className="space-y-1">
                <label className="text-base font-bold uppercase tracking-wider text-slate-400">
                  What's your anticipated timeline? *
                </label>
                <select className="w-full p-4 border border-slate-200 bg-white focus:outline-none focus:border-teal-500 transition-colors text-sm rounded-md">
                  <option>Select your timeline</option>
                  <option>Immediate</option>
                  <option>1-3 Months</option>
                  <option>3-6 Months</option>
                  <option>6+ Months</option>
                </select>
              </div>

              <textarea
                placeholder="Message *"
                rows={4}
                className="w-full p-4 border border-slate-200 focus:outline-none focus:border-teal-500 transition-colors text-sm rounded-md"
              ></textarea>

              <motion.button
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
                initial="initial"
                className="relative overflow-hidden rounded-full border border-teal-600 bg-teal-600 px-10 py-4 text-sm font-bold text-white shadow-lg"
              >
                <span className="relative z-10 pointer-events-none">
                  Submit Your Enquiry
                </span>

                <motion.div
                  variants={{
                    initial: {
                      scale: 0,
                      opacity: 0,
                    },
                    hover: {
                      scale: 2,
                      opacity: 1,
                    },
                  }}
                  transition={{
                    // 1.2s gives it a very calm, liquid-like expansion
                    duration: 1.2,
                    // Using a simpler ease makes the speed consistent so it's not "jumpy"
                    ease: "easeOut",
                  }}
                  // aspect-square w-full ensures it starts as wide as the button
                  className="absolute left-1/2 top-1/2 z-0 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-900 origin-center"
                />
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
