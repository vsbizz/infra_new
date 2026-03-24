import React from 'react';
import { 
  Building2, 
  Hospital, 
  HeartPulse, 
  GraduationCap, 
  Microscope, 
  Activity, 
  Users, 
  LayoutGrid,
  Globe,
  RefreshCw,
  Layers,
  Box
} from 'lucide-react';

export interface Sector {
  title: string;
  focus: string;
  intro: string;
  icon: React.ReactNode; 
  image: string;
  assetClasses: string[];
  explanation: string;
}

export interface Expertise {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const SECTORS_CONTENT: Record<string, Sector> = {
  "public-healthcare": {
    title: "Public Healthcare Infrastructure",
    focus: "• Sovereign Health Frameworks • National Development Mandates • PPP Structural Governance • Regulatory Intelligence",
    intro: "Infra.Health partners with sovereign institutions and development agencies to deliver essential healthcare frameworks designed for national development.",
    icon: <Building2 className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=1200",
    assetClasses: [
      "Primary Health Centres (PHCs)",
      "Community Health Centres (CHCs)",
      "Sub-District Hospitals",
      "District Hospitals",
      "Regional & Super-Specialty Government Hospitals",
      "Government Medical Colleges",
      "PPP Healthcare Infrastructure"
    ],
    explanation: "These projects require deep regulatory intelligence and disciplined execution to strengthen public health ecosystems. We focus on expanding access to quality care across diverse geographies while maintaining strict adherence to government mandates and sovereign health goals."
  },
  "acute-care": {
    title: "Acute & Advanced Care Hospitals",
    focus: "• Quaternary Clinical Engineering • High-Intensity Space Programming • Critical Care Resilience • Advanced Surgical Integration",
    intro: "We specialize in the development of high-intensity clinical environments, transforming complex medical requirements into resilient, investment-grade surgical and referral centres.",
    icon: <Hospital className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200",
    assetClasses: [
      "Tertiary Care Hospitals",
      "Quaternary & Super-Specialty Hospitals",
      "Multi-Specialty Referral Hospitals",
      "Organ Transplant & Advanced Surgical Centres"
    ],
    explanation: "These high-intensity clinical environments demand engineering precision and sophisticated clinical planning. We focus on creating resilient infrastructure capable of supporting advanced surgical procedures and quaternary-level care, ensuring operational functionality translates directly from design intent."
  },
  "specialty-care": {
    title: "Specialty & Focused Care Facilities",
    focus: "• Clinical Workflow Optimization • Bespoke Architectural Configurations • Specialty Referral Networks • Stringent Accreditation Standards",
    intro: "Specialized medical assets require configurations tailored to specific clinical workflows, ensuring facilities meet stringent accreditation standards.",
    icon: <HeartPulse className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200",
    assetClasses: [
      "Cardiac Institutes",
      "Oncology Centres",
      "Orthopedic & Neuro Hospitals",
      "Women & Children Hospitals",
      "Dialysis & IVF Networks"
    ],
    explanation: "Our approach ensures these facilities optimize departmental adjacencies and patient flow for specialty-specific referral networks. We integrate advanced clinical technology within highly specialized architectural envelopes to drive clinical outcomes and operational efficiency."
  },
  "academic-education": {
    title: "Academic & Medical Education Infrastructure",
    focus: "• Clinical-Academic Convergence • Institutional Performance Benchmarks • High-Capacity Programming • Research & Training Synergy",
    intro: "We develop integrated environments that balance high-volume clinical delivery with the rigorous requirements of academic research and medical training.",
    icon: <GraduationCap className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200",
    assetClasses: [
      "Teaching Hospitals",
      "Medical Colleges",
      "Allied Health Institutions",
      "Research & Training Centres"
    ],
    explanation: "These projects involve complex space programming to accommodate research labs, training zones, and high-capacity teaching wards. We manage the convergence of clinical operations and academic scheduling to ensure long-term institutional performance."
  },
  "diagnostic-ambulatory": {
    title: "Diagnostic & Ambulatory Care",
    focus: "• High-Throughput Engineering • Medical Gas & Radiation Shielding • Technological Scalability • Day-Care Efficiency Models",
    intro: "Focused on efficiency and rapid patient turnaround, these assets provide the backbone for modern diagnostic and preventive healthcare networks.",
    icon: <Microscope className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1579154234431-30146296305b?q=80&w=1200",
    assetClasses: [
      "Imaging & Radiology Centres",
      "Pathology & Laboratory Networks",
      "Day-Care Surgery Centres",
      "Specialty Clinics"
    ],
    explanation: "These assets require specialized technical governance, particularly for medical gas systems, radiation shielding, and IT/low-voltage integration. We ensure technological scalability and rapid-deployment capabilities to meet the growing demand for outpatient services."
  },
  "rehab-long-term-care": {
    title: "Rehabilitation & Long-Term Care",
    focus: "• Healing Interior Concepts • Operational Reliability • Sustainable Recovery Environments • Patient Safety Benchmarks",
    intro: "Infrastructure for recovery focuses on patient safety benchmarks and long-duration care environments that remain financially sustainable.",
    icon: <Activity className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1200",
    assetClasses: [
      "Rehabilitation Hospitals",
      "Advanced Recovery Centres",
      "Long-Stay Medical Facilities"
    ],
    explanation: "We design these facilities to provide operational reliability across decades. Our focus on 'healing interior concepts' ensures that the physical environment actively contributes to the recovery process while optimizing staff efficiency for long-term patient management."
  },
  "elder-care": {
    title: "Elder Care & Assisted Living",
    focus: "• Specialized Medical IFM Assets • 24/7 Operational Resilience • Safety & Comfort Benchmarking • Lifecycle Performance Oversight",
    intro: "Specialized medical IFM assets demanding international comfort and safety benchmarks for aging populations.",
    icon: <Users className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1581578731522-5b17b8822eda?q=80&w=1200",
    assetClasses: [
      "Geriatric Care Centres",
      "Assisted Living Facilities",
      "Senior Healthcare Communities"
    ],
    explanation: "Our lifecycle oversight ensures these assets perform as secure, investment-grade environments. We integrate specialized medical support within residential settings, adhering to strict safety protocols while maintaining a high quality of life for residents."
  },
  "integrated-campuses": {
    title: "Integrated Healthcare Campuses",
    focus: "• Master Planning & Ecosystem Convergence • Institutional Bankability • Phased Development Strategies • Capital Stack Alignment",
    intro: "The convergence of multiple clinical specialties, academic zones, and support infrastructure into unified healthcare districts.",
    icon: <LayoutGrid className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=1200",
    assetClasses: [
      "Medical Cities",
      "Multi-Hospital Campuses",
      "Integrated Healthcare Districts"
    ],
    explanation: "We manage these as long-duration institutional assets, requiring rigorous capital stack alignment and phased development strategies. Our master planning ensures seamless synergy between clinical, research, and residential components within the campus."
  }
};
export const EXPERTISE_DATA: Expertise[] = [
  { 
    title: "Greenfield Healthcare Development", 
    description: "End-to-end development of new healthcare facilities, from feasibility and capital structuring to design, construction, and operational readiness.",
    icon: <Building2 className="w-6 h-6" />
  },
  { 
    title: "Brownfield Expansion & Modernisation", 
    description: "Capacity expansion, infrastructure upgrades, technology integration, and compliance enhancement of existing healthcare facilities.",
    icon: <RefreshCw className="w-6 h-6" />
  },
  { 
    title: "Phased Infrastructure Programs", 
    description: "Multi-stage healthcare development aligned with demand growth, funding cycles, and long-term expansion planning.",
    icon: <Layers className="w-6 h-6" />
  },
  { 
    title: "Modular & Rapid Deployment Solutions", 
    description: "Scalable and standardized healthcare infrastructure for rural expansion, network roll-outs, and emergency healthcare response.",
    icon: <Box className="w-6 h-6" />
  },
  { 
    title: "Cross-Border Healthcare Infrastructure", 
    description: "Execution of healthcare projects across diverse regulatory environments, integrating international standards with local implementation.",
    icon: <Globe className="w-6 h-6" />
  }
];