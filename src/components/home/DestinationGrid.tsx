import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const destinations = [
  {
    id: 'bromo',
    name: 'Mount Bromo',
    highlight: 'Active Caldera & Sea of Sand',
    image: 'https://picsum.photos/seed/bromo/800/1000',
    url: '/destinations/mount-bromo'
  },
  {
    id: 'ijen',
    name: 'Kawah Ijen',
    highlight: 'Blue Fire & Acidic Lake',
    image: 'https://picsum.photos/seed/ijen/800/1000',
    url: '/destinations/kawah-ijen'
  },
  {
    id: 'tumpak-sewu',
    name: 'Tumpak Sewu',
    highlight: 'Thousand Waterfalls',
    image: 'https://picsum.photos/seed/waterfall/800/1000',
    url: '/destinations/tumpak-sewu'
  },
  {
    id: 'madakaripura',
    name: 'Madakaripura',
    highlight: 'Hidden Grotto Waterfall',
    image: 'https://picsum.photos/seed/cave/800/1000',
    url: '/destinations/madakaripura'
  },
  {
    id: 'papuma',
    name: 'Papuma Beach',
    highlight: 'White Sand & Rocky Cliffs',
    image: 'https://picsum.photos/seed/beach/800/1000',
    url: '/destinations/papuma-beach'
  }
];

export const DestinationGrid = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-authority-navy/5 border border-authority-navy/10 text-authority-navy text-[11px] font-mono font-bold uppercase tracking-[0.2em] mb-6">
              <MapPin className="w-3 h-3" /> Operational Zones
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] text-authority-navy">
              Explore the <br />
              <span className="text-safety-orange">Ring of Fire.</span>
            </h2>
          </div>
          <p className="text-slate-500 font-light max-w-sm leading-tight">
            Our operational footprint covers the most volatile and beautiful landscapes in East Java, all secured by our safety protocols.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {destinations.map((dest, idx) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => navigate(dest.url)}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img 
                src={dest.image} 
                alt={dest.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-authority-navy via-transparent to-transparent opacity-80"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-1">
                  {dest.name}
                </h3>
                <p className="text-slate-300 text-xs font-light mb-4 uppercase tracking-widest">
                  {dest.highlight}
                </p>
                <div className="flex items-center gap-2 text-safety-orange font-mono text-[11px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                  View Dossier <ChevronRight className="w-3 h-3" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
