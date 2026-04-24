// data/projects.ts

export interface ProjectUnit {
  type: string;
  size: string;
  price: string;
}

export interface Project {
  id: number;
  category: string;
  title: string;
  slug: string;
  citySlug: string;
  location: string;
  address: string;
  beds: string;
  area: string;
  price: string;
  possession: string;
  phone: string;
  description: string;
  images: string[];
  units: ProjectUnit[];
  lat: number;
  lng: number;
}

export const projectsData: Project[] = [
  {
    id: 1,
    category: "Public Hospitals",
    title: "Godrej Skyline",
    slug: "godrej-skyline",
    citySlug: "pune",
    location: "Koregaon Park Annexe, Pune",
    address: "90/B, Mundhwa Rd, Koregaon Park Annexe, Mundhwa, Pune, 411036",
    beds: "3,4 Bedrooms",
    area: "1348 sqft - 1810 sqft",
    price: "INR 3.47 Cr",
    possession: "Jul 2029",
    phone: "+91-7026010381",
    description:
      "Rising majestically above the city, Godrej Skyline stands tall. With stunning 360 degree views, its regal glass facade turns every window into a panoramic masterpiece.",
    images: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    ],
    units: [
      { type: "3 BHK", size: "1348 sqft", price: "3.47 Cr" },
      { type: "4 BHK", size: "1810 sqft", price: "4.68 Cr" },
      { type: "3 BHK", size: "1363 sqft", price: "3.53 Cr" },
    ],
    lat: 18.5362,
    lng: 73.9008,
  },
  {
    id: 2,
    category: "Acute Care",
    title: "Lodha Estilo Kharadi",
    slug: "lodha-estilo-kharadi-pune",
    citySlug: "pune",
    location: "Upper Kharadi, Pune",
    address: "Upper Kharadi, Pune, 411014",
    beds: "3,4 Bedrooms",
    area: "1621 sqft - 2100 sqft",
    price: "INR 3.78 Cr",
    possession: "Dec 2027",
    phone: "+91-7026010381",
    description:
      "Lodha Estilo redefines luxury living in Kharadi, Pune's fastest growing IT corridor.",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
    ],
    units: [
      { type: "3 BHK", size: "1621 sqft", price: "3.78 Cr" },
      { type: "4 BHK", size: "2100 sqft", price: "4.95 Cr" },
    ],
    lat: 18.5524,
    lng: 73.9469,
  },
  {
    id: 3,
    category: "Specialty Care",
    title: "Supreme Towers",
    slug: "supreme-towers",
    citySlug: "pune",
    location: "Koregaon Park, Pune",
    address: "Koregaon Park, Pune, 411001",
    beds: "3,4,5 Bedrooms",
    area: "1427 sqft - 2626 sqft",
    price: "INR 2.65 Cr",
    possession: "Jun 2029",
    phone: "+91-7026010381",
    description:
      "Supreme Towers offers an unparalleled lifestyle in the heart of Koregaon Park.",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
    ],
    units: [
      { type: "3 BHK", size: "1427 sqft", price: "2.65 Cr" },
      { type: "4 BHK", size: "1980 sqft", price: "3.68 Cr" },
      { type: "5 BHK", size: "2626 sqft", price: "4.90 Cr" },
    ],
    lat: 18.5362,
    lng: 73.8938,
  },
  {
    id: 4,
    category: "Medical Education",
    title: "Yoo Pune",
    slug: "yoo-pune",
    citySlug: "pune",
    location: "Magarpatta, Pune",
    address: "Magarpatta City, Hadapsar, Pune, 411013",
    beds: "4,5 Bedrooms",
    area: "4300 sqft - 4700 sqft",
    price: "INR 10.66 Cr",
    possession: "May 2027",
    phone: "+91-7026010381",
    description:
      "Yoo Pune is an iconic ultra-luxury residential development in Magarpatta.",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
      "https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?w=800&q=80",
    ],
    units: [
      { type: "4 BHK", size: "4300 sqft", price: "10.66 Cr" },
      { type: "5 BHK", size: "4700 sqft", price: "11.80 Cr" },
    ],
    lat: 18.5104,
    lng: 73.9268,
  },
  {
    id: 5,
    category: "Diagnostic",
    title: "Panchshil Eon Homes",
    slug: "panchshil-eon-homes",
    citySlug: "pune",
    location: "Kharadi, Pune",
    address: "EON IT Park Road, Kharadi, Pune, 411014",
    beds: "2,3 Bedrooms",
    area: "980 sqft - 1450 sqft",
    price: "INR 1.85 Cr",
    possession: "Mar 2026",
    phone: "+91-7026010381",
    description:
      "Panchshil Eon Homes brings premium yet affordable living to Kharadi.",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
    ],
    units: [
      { type: "2 BHK", size: "980 sqft", price: "1.85 Cr" },
      { type: "3 BHK", size: "1450 sqft", price: "2.74 Cr" },
    ],
    lat: 18.5496,
    lng: 73.943,
  },
  {
    id: 6,
    category: "Rehabilitation",
    title: "Kolte Patil Life Republic",
    slug: "kolte-patil-life-republic",
    citySlug: "pune",
    location: "Mahalunge, Pune",
    address: "Hinjewadi Phase 2, Pune, 411057",
    beds: "2,3 Bedrooms",
    area: "750 sqft - 1350 sqft",
    price: "INR 1.20 Cr",
    possession: "Dec 2026",
    phone: "+91-7026010381",
    description:
      "Kolte Patil Life Republic is a township offering vibrant community living in Hinjewadi.",
    images: [
      "https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?w=800&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    ],
    units: [
      { type: "2 BHK", size: "750 sqft", price: "1.20 Cr" },
      { type: "3 BHK", size: "1350 sqft", price: "2.16 Cr" },
    ],
    lat: 18.5913,
    lng: 73.7389,
  },
  {
    id: 7,
    category: "Elder Care",
    title: "Kolte Patil Life Republic 2",
    slug: "kolte-patil-life-republic-2",
    citySlug: "pune",
    location: "Undri, Pune",
    address: "Undri, Pune, 411060",
    beds: "2,3 Bedrooms",
    area: "800 sqft - 1400 sqft",
    price: "INR 1.30 Cr",
    possession: "Jun 2027",
    phone: "+91-7026010381",
    description:
      "The second phase of Kolte Patil Life Republic continues the legacy of exceptional township living.",
    images: [
      "https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?w=800&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    ],
    units: [
      { type: "2 BHK", size: "800 sqft", price: "1.30 Cr" },
      { type: "3 BHK", size: "1400 sqft", price: "2.28 Cr" },
    ],
    lat: 18.4632,
    lng: 73.9162,
  },
  {
    id: 8,
    category: "Healthcare Campus",
    title: "Kolte Patil Life Republic 3",
    slug: "kolte-patil-life-republic-3",
    citySlug: "pune",
    location: "Dhanori, Pune",
    address: "Dhanori, Pune, 411015",
    beds: "2,3 Bedrooms",
    area: "800 sqft - 1400 sqft",
    price: "INR 1.30 Cr",
    possession: "Jun 2027",
    phone: "+91-7026010381",
    description:
      "Phase 3 of Kolte Patil Life Republic brings bigger homes and enhanced amenities.",
    images: [
      "https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?w=800&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    ],
    units: [
      { type: "2 BHK", size: "800 sqft", price: "1.30 Cr" },
      { type: "3 BHK", size: "1400 sqft", price: "2.28 Cr" },
    ],
    lat: 18.5857,
    lng: 73.9066,
  },
];
