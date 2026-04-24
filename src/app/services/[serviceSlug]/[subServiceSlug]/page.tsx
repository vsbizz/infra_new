import { notFound } from "next/navigation";
import { SERVICES_CONTENT } from "@/data/services";
import {
  ArrowRight,
  ChevronRight,
  Layout,
  Target,
  FileText,
  TrendingUp,
  MapPin,
  Users,
  ClipboardCheck,
  BarChart,
  Shield,
  Activity,
  Award,
  Cpu,
  Calendar,
  Settings,
  Box,
  Feather,
  Image,
  Truck,
  Building,
} from "lucide-react";
import { Metadata } from "next";
import metaData from "@/data/meta.json";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { ProcessTimelineSection } from "@/components/ProcessTimeline";

const IconMap: any = {
  Layout: <Layout className="w-6 h-6 md:w-8 md:h-8" />,
  Target: <Target className="w-6 h-6 md:w-8 md:h-8" />,
  FileText: <FileText className="w-6 h-6 md:w-8 md:h-8" />,
  TrendingUp: <TrendingUp className="w-6 h-6 md:w-8 md:h-8" />,
  MapPin: <MapPin className="w-4 h-4 md:w-5 md:h-5" />,
  Users: <Users className="w-4 h-4 md:w-5 md:h-5" />,
  ClipboardCheck: <ClipboardCheck className="w-4 h-4 md:w-5 md:h-5" />,
  BarChart: <BarChart className="w-4 h-4 md:w-5 md:h-5" />,
  Shield: <Shield className="w-4 h-4 md:w-5 md:h-5" />,
  Activity: <Activity className="w-4 h-4 md:w-5 md:h-5" />,
  Award: <Award className="w-4 h-4 md:w-5 md:h-5" />,
  Cpu: <Cpu className="w-4 h-4 md:w-5 md:h-5" />,
  Calendar: <Calendar className="w-4 h-4 md:w-5 md:h-5" />,
  Settings: <Settings className="w-4 h-4 md:w-5 md:h-5" />,
  Box: <Box className="w-4 h-4 md:w-5 md:h-5" />,
  Feather: <Feather className="w-4 h-4 md:w-5 md:h-5" />,
  Image: <Image className="w-4 h-4 md:w-5 md:h-5" />,
  Truck: <Truck className="w-4 h-4 md:w-5 md:h-5" />,
  Building: <Building className="w-4 h-4 md:w-5 md:h-5" />,
};

type Props = {
  params: Promise<{ serviceSlug: string; subServiceSlug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { serviceSlug, subServiceSlug } = await params;

  const slugToKey: Record<string, string> = {
    "leasing-and-operator-advisory": "leasingAndOperatorAdvisory",
    "investment-and-capital-advisory": "investmentAndCapitalAdvisory",
    "advisory-and-strategic-planning": "advisoryAndStrategicPlanning",
    "design-and-project-delivery": "designAndProjectDelivery",
    "property-and-facilities-management": "propertyAndFacilitiesManagement",
  };

  const parentKey = slugToKey[serviceSlug];
  const parentMeta = (metaData.services as any)?.[parentKey];
  const subMeta = parentMeta?.subServices?.find((s: any) =>
    s.slug.endsWith(`/${subServiceSlug}`),
  );

  if (!subMeta) return { title: "Service | Infra.Health" };

  return {
    title: subMeta.metaTitle,
    description: subMeta.metaDescription,
    alternates: { canonical: `${metaData.global.baseUrl}${subMeta.slug}` },
    openGraph: {
      title: subMeta.ogTitle || subMeta.metaTitle,
      description: subMeta.ogDescription || subMeta.metaDescription,
      url: `${metaData.global.baseUrl}${subMeta.slug}`,
      type: "website",
      images: [{ url: metaData.global.logo }],
    },
  };
}

export default async function SubServicePage({ params }: Props) {
  const { serviceSlug, subServiceSlug } = await params;

  const parentService = SERVICES_CONTENT[serviceSlug];
  const subService = parentService?.subServices?.[subServiceSlug];

  if (!subService) notFound();

  return (
    <div className="bg-white">
      {/* 
        JLL Page Padding Mobile: 64-80px, Tablet: 80-96px, Desktop: 96-120px
      */}

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white pt-32 sm:pt-20 md:pt-44 lg:pt-54  pb-12 xs:pb-16 md:pb-24">
        {/* 
          JLL Section Padding Mobile: 48-64px, Tablet: 64-80px, Desktop: 96-128px
        */}
        <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6">
          {/* 
            JLL Container Padding Mobile: 16-20px, Tablet: 20-24px
          */}

          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 md:gap-2 mb-6 xs:mb-8 md:mb-10 flex-wrap">
            <Link
              href="/"
              className="text-[10px] xs:text-[11px] md:text-sm font-semibold text-slate-400 hover:text-teal-600 transition-colors whitespace-nowrap"
            >
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-300 shrink-0" />
            <Link
              href="/services"
              className="text-[10px] xs:text-[11px] md:text-sm font-semibold text-slate-400 hover:text-teal-600 transition-colors whitespace-nowrap"
            >
              Services
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-300 shrink-0" />
            {/* Parent service - hidden on very small screens, shown on sm+ */}
            <Link
              href={`/services/${serviceSlug}`}
              className="hidden sm:inline text-[10px] xs:text-[11px] md:text-sm font-semibold text-slate-400 hover:text-teal-600 transition-colors truncate max-w-[120px] md:max-w-none"
            >
              {parentService.title}
            </Link>
            <ChevronRight className="hidden sm:inline w-3 h-3 text-slate-300 shrink-0" />
            <span className="text-[10px] xs:text-[11px] md:text-sm font-semibold text-slate-900 truncate max-w-[160px] sm:max-w-none">
              {subService.title}
            </span>
          </nav>

          {/* Hero grid */}
          <div className="grid lg:grid-cols-12 gap-8 xs:gap-10 md:gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-7">
              {/* 
                JLL H1 Mobile: 32-36px, font-weight: 600 (semibold)
                Desktop: font-extrabold
              */}
              <h1 className="text-[32px] xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl  md:font-extrabold text-brand-purple tracking-tight leading-[0.95] mb-4 xs:mb-6 md:mb-8">
                {subService.title}
              </h1>
              <div className="space-y-3 xs:space-y-4 md:space-y-6">
                <h2 className="text-base xs:text-lg md:text-xl lg:text-2xl font-medium text-teal-600/90 leading-relaxed border-l-4 border-teal-500 pl-3 xs:pl-4 md:pl-6">
                  {subService.headline}
                </h2>
                <div className="text-sm xs:text-[15px] sm:text-base md:text-lg text-slate-600 font-normal leading-[1.6] max-w-2xl">
                  {subService.description.map((p: string, i: number) => (
                    <p key={i} className={i !== 0 ? "mt-3 md:mt-4" : ""}>
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Hero image */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-3 md:-inset-4 bg-teal-50 rounded-2xl md:rounded-3xl -z-10 rotate-2 md:rotate-3" />
              <div className="aspect-[4/3] sm:aspect-[4/4] lg:aspect-[4/5] rounded-xl md:rounded-2xl overflow-hidden shadow-xl md:shadow-2xl border border-slate-100 bg-white">
                <img
                  src={subService.heroImage}
                  alt={subService.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features Grid ── */}
      <section className="py-12 xs:py-16 md:py-24 bg-slate-50/50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6">
          <div className="max-w-3xl mb-10 xs:mb-12 md:mb-20">
            {/* 
              JLL H2 Mobile: 24-26px, font-weight: 600 (semibold)
              Desktop: font-extrabold
            */}
            <h2 className="text-2xl xs:text-[26px] sm:text-3xl md:text-4xl lg:text-5xl md:font-extrabold text-slate-900 tracking-tight mb-3 xs:mb-4 md:mb-6">
              {subService.sectionTitle}
            </h2>
            <p className="text-sm xs:text-[15px] sm:text-base md:text-lg text-slate-600 font-normal leading-[1.6]">
              {subService.sectionDescription}
            </p>
          </div>

          {/* Grid: 1 col mobile → 2 col sm → 4 col lg */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 xs:gap-3.5 sm:gap-4">
            {/* 
              JLL Grid Gap Mobile: 20-24px, Tablet: 24-28px, Desktop: 32px
            */}
            {subService.sections.map((item: any, idx: number) => (
              <div
                key={idx}
                className="bg-white p-5 xs:p-6 md:p-8 rounded-xl xs:rounded-2xl border border-slate-200/60 hover:border-teal-500/30 hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300 group"
              >
                {/* 
                  JLL Card Padding Mobile: 20-24px, Tablet: 24-32px, Desktop: 32-48px
                */}
                <div className="w-11 h-11 md:w-14 md:h-14 rounded-xl bg-slate-50 text-teal-600 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-teal-600 group-hover:text-white transition-all duration-500">
                  {IconMap[item.icon]}
                </div>
                {/* 
                  JLL H3 Mobile: 18-20px, font-weight: 600 (semibold)
                  Desktop: font-extrabold
                */}
                <h3 className="text-lg xs:text-xl md:text-2xl  md:font-extrabold text-slate-900 mb-2 md:mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm xs:text-[15px] md:text-base text-slate-600 font-normal leading-[1.6]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Deliverables ── */}
      <section className="py-12 xs:py-16 md:py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-10 xs:mb-12 md:mb-20">
            <h2 className="text-2xl xs:text-[26px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl md:font-extrabold leading-[1.1] tracking-tight text-slate-900 mb-3 xs:mb-4 md:mb-6">
              {subService.deliverableTitle}
            </h2>
            <p className="max-w-2xl mx-auto text-sm xs:text-[15px] sm:text-base md:text-lg text-slate-600 font-normal leading-[1.6]">
              {subService.deliverableDescription}
            </p>
          </div>

          {/* CHANGED TO FLEXBOX:
        - flex-wrap: allows cards to wrap to next line
        - justify-center: centers the cards, including the 5th card in the last row
    */}
          <div className="flex flex-wrap justify-center gap-3 xs:gap-3.5 sm:gap-4">
            {subService.deliverables.map((item: any, idx: number) => (
              <div
                key={idx}
                /* WIDTH CALCULATIONS:
             - w-[calc(50%-12px)]: Mimics grid-cols-2 (half width minus gap)
             - md:w-[calc(33.33%-16px)]: Mimics grid-cols-3 on desktop
          */
                className="relative group p-5 xs:p-6 md:p-8 bg-white border border-slate-200 rounded-xl xs:rounded-2xl hover:border-teal-500/50 hover:shadow-2xl hover:shadow-teal-500/5 transition-all duration-300 w-[calc(50%-12px)] md:w-[calc(33.33%-16px)] min-w-[160px]"
              >
                {/* Card Content Alignment */}
                <div className="flex flex-col items-center text-center md:items-start md:text-left gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-slate-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                    {IconMap[item.icon]}
                  </div>
                  <span className="text-lg xs:text-xl md:text-2xl md:font-extrabold text-slate-900 tracking-tight">
                    {item.title}
                  </span>
                  {item.description && (
                    <p className="text-slate-500 text-sm xs:text-[15px] font-normal leading-[1.6]">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process Timeline Section (Only on design-build-solutions page) ── */}
      {subServiceSlug === "design-build-solutions" && (
        <ProcessTimelineSection />
      )}

      {/* ── Related Services ── */}
      <section className="py-12 xs:py-16 md:py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-8 xs:gap-10 md:gap-16">
            {/* Left: heading + CTA */}
            <div className="space-y-5 xs:space-y-6 md:space-y-8">
              <div>
                <h2 className="text-2xl xs:text-[26px] md:text-3xl  md:font-extrabold leading-[1.1] tracking-tight text-slate-900 mb-3 md:mb-4">
                  Explore similar offerings
                </h2>
                <p className="text-slate-500 text-sm xs:text-[15px] sm:text-base md:text-lg font-normal leading-[1.6] max-w-xs">
                  Combine specialized healthcare advisory with institutional
                  knowledge to drive better clinical and capital outcomes.
                </p>
              </div>

              <a
                href={`/services/${serviceSlug}`}
                className="inline-flex items-center gap-3 bg-slate-50 text-slate-900 px-5 md:px-6 py-3.5 md:py-4 rounded-md font-semibold text-sm hover:bg-slate-100 transition-colors border border-slate-100"
              >
                <ArrowRight className="w-4 h-4 rotate-180 shrink-0" />
                Explore all {parentService.title}
              </a>
            </div>

            {/* Right: related sub-services grid */}
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-x-6 xs:gap-x-8 md:gap-x-12 gap-y-8 xs:gap-y-10 md:gap-y-16">
              {/* 
                JLL Grid Gap Mobile: 20-24px horizontal, 32-40px vertical
                Tablet: 32px horizontal, 40-64px vertical
              */}
              {Object.entries(parentService.subServices)
                .filter(([slug]) => slug !== subServiceSlug)
                .slice(0, 4)
                .map(([slug, data]: any) => (
                  <a
                    key={slug}
                    href={`/services/${serviceSlug}/${slug}`}
                    className="group block border-t border-slate-100 pt-5 xs:pt-6 md:pt-8 transition-all"
                  >
                    <div className="flex items-start justify-between mb-3 md:mb-4 gap-2">
                      <h3 className="text-lg xs:text-xl md:text-2xl  md:font-extrabold text-slate-900 group-hover:text-teal-600 transition-colors font-display leading-snug">
                        {data.title}
                      </h3>
                      <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-teal-600 transition-all group-hover:translate-x-1 shrink-0 mt-0.5" />
                    </div>
                    <p className="text-slate-500 text-sm xs:text-[15px] md:text-base font-normal leading-[1.6] line-clamp-3">
                      {data.headline ||
                        (data.description && data.description[0])}
                    </p>
                  </a>
                ))}
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}
