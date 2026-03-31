import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronRight, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SSOT } from '../../lib/ssot';

interface Destination {
  slug: string;
  name: string;
  route: string;
  image: string;
  highlight: string;
}

const DestinationCard = ({ dest, idx, navigate }: { dest: Destination, idx: number, navigate: (path: string) => void }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: idx * 0.1 }}
      onClick={() => navigate(dest.route)}
      className="relative shrink-0 w-[80vw] sm:w-[320px] md:w-[380px] aspect-[4/5] rounded-2xl overflow-hidden group cursor-pointer snap-start shadow-md hover:shadow-xl transition-shadow"
    >
      <div className="absolute inset-0 w-full h-full origin-center">
        <img
          src={dest.image}
          alt={dest.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90 opacity-90 transition-opacity duration-300 group-hover:opacity-100"></div>
      
      <div className="absolute top-0 left-0 right-0 p-6">
        <p className="text-white font-bold uppercase tracking-widest text-xs drop-shadow-md">
          {dest.highlight}
        </p>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end">
        <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-2 drop-shadow-lg group-hover:-translate-y-1 transition-transform duration-300">
          {dest.name}
        </h3>
        <div className="flex items-center gap-2 text-safety-orange font-mono text-[11px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
          View Dossier <ChevronRight className="w-3 h-3" />
        </div>
      </div>
    </motion.div>
  );
};

export const DestinationGrid = () => {
  const navigate = useNavigate();

  return (
    <section className="py-12 md:py-24 bg-audit-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 md:gap-8 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <div className="badge-eyebrow badge-eyebrow-navy mb-4 md:mb-6">
              <MapPin className="w-3 h-3" /> Operational Zones
            </div>
            <h2 className="text-3xl xs:text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] text-authority-navy">
              Explore the <br />
              <span className="text-safety-orange">Ring of Fire.</span>
            </h2>
          </div>
          <p className="text-slate-500 font-light max-w-sm leading-tight text-sm md:text-base">
            Our operational footprint covers the most volatile and beautiful landscapes in East Java, all secured by our safety protocols.
          </p>
        </div>
      </div>

      {/* Full-bleed scrollable container */}
      <div className="w-full pl-4 md:pl-6 lg:pl-[calc((100vw-80rem)/2+1.5rem)]">
        <div className="flex overflow-x-auto gap-4 pb-8 pr-4 md:pr-6 snap-x hide-scrollbar">
          {SSOT.destinations.map((dest, idx) => (
            <DestinationCard key={dest.slug} dest={dest} idx={idx} navigate={navigate} />
          ))}
        </div>
      </div>
    </section>
  );
};
