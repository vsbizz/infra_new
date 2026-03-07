"use client";
import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import { motion } from 'framer-motion';

const REGIONS = [
  {
    id: 'middle-east',
    name: 'Middle East',
    countries: ['Saudi Arabia', 'United Arab Emirates', 'Qatar', 'Kuwait', 'Oman', 'Bahrain', 'Jordan', 'Iraq', 'Israel', 'Lebanon', 'Syria', 'Yemen'],
    color: '#0D9488' // Robust Teal
  },
  {
    id: 'africa',
    name: 'Africa',
    countries: ['Egypt', 'Nigeria', 'Kenya', 'South Africa', 'Ethiopia', 'Ghana', 'Morocco', 'Algeria', 'Tanzania', 'Uganda', 'Angola', 'Mozambique', 'Ivory Coast', 'Madagascar', 'Cameroon', 'Niger', 'Burkina Faso', 'Mali', 'Malawi', 'Zambia', 'Senegal', 'Chad', 'Somalia', 'Zimbabwe', 'Guinea', 'Rwanda', 'Benin', 'Burundi', 'Tunisia', 'South Sudan', 'Togo', 'Sierra Leone', 'Libya', 'Congo', 'Central African Republic', 'Mauritania', 'Eritrea', 'Namibia', 'Gambia', 'Botswana', 'Gabon', 'Lesotho', 'Guinea-Bissau', 'Equatorial Guinea', 'Mauritius', 'Eswatini', 'Djibouti', 'Comoros', 'Cabo Verde', 'Sao Tome and Principe', 'Seychelles'],
    color: '#EA580C' // Professional Orange
  },
  {
    id: 'south-asia',
    name: 'South Asia',
    countries: ['India', 'Pakistan', 'Bangladesh', 'Sri Lanka', 'Nepal', 'Bhutan', 'Maldives', 'Afghanistan'],
    color: '#0D9488'
  },
  {
    id: 'southeast-asia',
    name: 'Southeast Asia',
    countries: ['Indonesia', 'Vietnam', 'Thailand', 'Malaysia', 'Philippines', 'Singapore', 'Myanmar', 'Cambodia', 'Laos', 'Brunei', 'Timor-Leste'],
    color: '#EA580C'
  }
];

export const GlobalPresence: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (svgRef.current?.parentElement) {
        setDimensions({
          width: svgRef.current.parentElement.clientWidth,
          height: svgRef.current.parentElement.clientHeight || 600
        });
      }
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

useEffect(() => {
  if (dimensions.width === 0 || !svgRef.current) return;

  const svg = d3.select(svgRef.current);
  svg.selectAll('*').remove();

  const projection = d3.geoMercator()
    .scale(dimensions.width / 4.8)
    .center([45, 15]) 
    .translate([dimensions.width / 2, dimensions.height / 2]);

  const path = d3.geoPath().projection(projection);

  d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json').then((data: any) => {
    const countries = topojson.feature(data, data.objects.countries) as any;
    const g = svg.append('g');

    g.selectAll('path')
      .data(countries.features)
      .enter()
      .append('path')
      .attr('d', path as any)
      .attr('fill', (d: any) => {
        const countryName = d.properties.name;
        const region = REGIONS.find(r => r.countries.includes(countryName));
        // Higher contrast base land color
        return region ? region.color : '#CBD5E1'; 
      })
      .attr('stroke', '#94A3B8') // Deeper border color for visibility
      .attr('stroke-width', 0.8)
      .attr('opacity', (d: any) => {
        const countryName = d.properties.name;
        const region = REGIONS.find(r => r.countries.includes(countryName));
        
        if (hoveredRegion) {
          // Keep non-hovered active regions visible but dimmed
          if (region) return region.id === hoveredRegion ? 1 : 0.4;
          // Dim non-active countries significantly during hover
          return 0.15;
        }
        
        // Default state visibility
        return region ? 1 : 0.6;
      })
      .style('transition', 'all 0.4s ease-in-out')
      .on('mouseenter', (event, d: any) => {
        const countryName = d.properties.name;
        const region = REGIONS.find(r => r.countries.includes(countryName));
        if (region) setHoveredRegion(region.id);
      })
      .on('mouseleave', () => setHoveredRegion(null));
  });
}, [dimensions, hoveredRegion]);
  return (
    <section className="relative bg-white py-24 lg:py-40">
      <div className="mx-auto max-w-6xl px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-extrabold leading-tight text-slate-900 md:text-5xl lg:text-6xl tracking-tight">
                International Standards.<br />
                <span className="text-teal-600">Local Intelligence.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-500 font-medium">
                Navigating complex regulatory environments to deliver JCI and NABH compliant assets in diverse global markets.
              </p>
              
              <div className="mt-12 grid grid-cols-2 gap-4">
                {REGIONS.map((region) => (
                  <div 
                    key={region.id}
                    onMouseEnter={() => setHoveredRegion(region.id)}
                    onMouseLeave={() => setHoveredRegion(null)}
                    className={`group cursor-pointer rounded-xl border p-4 transition-all duration-300 ${
                      hoveredRegion === region.id 
                        ? 'bg-slate-50 border-teal-600/30 shadow-sm' 
                        : 'border-slate-100 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div 
                        className="h-2 w-2 rounded-full" 
                        style={{ backgroundColor: region.color }}
                      />
                      <span className={`text-xs font-bold uppercase tracking-wider transition-colors ${
                        hoveredRegion === region.id ? 'text-teal-700' : 'text-slate-400'
                      }`}>
                        {region.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Right Map */}
          <div className="lg:col-span-7 relative h-[450px] lg:h-[600px] w-full bg-slate-50/50 rounded-3xl border border-slate-100 overflow-hidden">
            <svg 
              ref={svgRef} 
              className="h-full w-full"
            />
            {/* Soft Ambient Glow */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_100%)]" />
          </div>

        </div>
      </div>
    </section>
  );
};