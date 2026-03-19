import React from 'react';
import { 
  MapPin, 
  ArrowRight, 
  Mountain, 
  Waves, 
  Camera, 
  Compass,
  ChevronRight,
  Star,
  Clock,
  Navigation
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SSOT } from '../../lib/ssot';
import { PageSEO } from '../../components/PageSEO';
import { motion } from 'motion/react';

export default function DestinationsHub() {
  const navigate = useNavigate();
  const meta = SSOT.pages['/destinations'];

  const destinations = [
    {
      id: 'ijen-crater',
      title: 'Ijen Crater',
      description: 'The world\'s largest acidic crater lake and the home of the rare blue fire phenomenon.',
      image: 'https://picsum.photos/seed/ijen/800/600',
      category: 'Volcano',
      duration: '1-2 Days'
    },
    {
      id: 'mount-bromo',
      title: 'Mount Bromo',
      description: 'The most iconic sunrise in Indonesia, featuring an active volcano in a vast sea of sand.',
      image: 'https://picsum.photos/seed/bromo/800/600',
      category: 'Volcano',
      duration: '1-2 Days'
    },
    {
      id: 'tumpak-sewu-waterfall',
      title: 'Tumpak Sewu',
      description: 'A thousand waterfalls cascading down a semicircular cliff. A true hidden paradise.',
      image: 'https://picsum.photos/seed/tumpaksewu/800/600',
      category: 'Waterfall',
      duration: '1 Day'
    },
    {
      id: 'madakaripura-waterfall',
      title: 'Madakaripura',
      description: 'The eternal waterfall, believed to be the meditation place of Gajah Mada.',
      image: 'https://picsum.photos/seed/madakaripura/800/600',
      category: 'Waterfall',
      duration: '1 Day'
    },
    {
      id: 'papuma-beach',
      title: 'Papuma Beach',
      description: 'White sands and dramatic rock formations on the southern coast of Jember.',
      image: 'https://picsum.photos/seed/papuma/800/600',
      category: 'Beach',
      duration: '1 Day'
    }
  ];

  return (
    <div className="min-h-screen bg-audit-white text-authority-navy font-sans selection:bg-safety-orange/30 pb-24 md:pb-0">
      {/* Header */}
      <div className="border-b border-slate-200 bg-audit-white/80 relative z-40 backdrop-blur-xl">
        <div className="container mx-auto px-4 md:px-6 py-4 md:py-6 flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-3 text-safety-orange text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-[0.15em] md:tracking-[0.2em]">
            <Compass className="w-3.5 h-3.5 md:w-4 md:h-4" /> Destination Registry
          </div>
          <div className="flex items-center gap-4 md:gap-6">
            <button onClick={() => navigate('/why-jvto')} className="text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-widest text-slate-500 hover:text-authority-navy transition-colors">Why JVTO</button>
            <button onClick={() => navigate('/verify-jvto')} className="text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-widest text-slate-500 hover:text-authority-navy transition-colors">Verify</button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 max-w-7xl relative z-10">
        <PageSEO route="/destinations" />
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-24"
        >
          <div className="flex items-center gap-2 mb-4 md:mb-6">
            <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-safety-orange" />
            <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-widest text-slate-500">East Java Exploration</span>
          </div>
          <h1 className="text-4xl md:text-9xl font-black text-authority-navy mb-4 md:mb-8 leading-[0.85] uppercase tracking-tighter">
            {meta?.h1 || 'DESTINATIONS.'}
          </h1>
          <p className="text-lg md:text-2xl text-slate-500 max-w-3xl leading-tight font-light">
            Discover the most iconic landscapes in Indonesia. From the blue fires of Ijen to the sea of sand at Bromo, we provide private, safety-first expeditions to every major destination in East Java.
          </p>
        </motion.div>

        {/* Destination Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {destinations.map((dest, i) => (
            <motion.div 
              key={dest.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => navigate(`/destinations/${dest.id}`)}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] md:rounded-[2.5rem] mb-4 md:mb-6 bg-slate-100">
                <img 
                  src={dest.image} 
                  alt={dest.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-authority-navy/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-safety-orange text-white text-[9px] md:text-[10px] font-mono font-black uppercase tracking-widest rounded-full">
                      {dest.category}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter leading-none mb-2">{dest.title}</h3>
                  <div className="flex items-center gap-3 text-white/60 font-mono text-[9px] md:text-[10px] uppercase tracking-widest">
                    <Clock className="w-3 h-3" /> {dest.duration}
                  </div>
                </div>
              </div>
              <p className="text-sm md:text-base text-slate-500 leading-relaxed mb-4 line-clamp-2 px-2 md:px-4">
                {dest.description}
              </p>
              <div className="flex items-center gap-2 text-safety-orange font-mono text-[10px] md:text-[11px] font-black uppercase tracking-widest px-2 md:px-4 group-hover:gap-4 transition-all">
                Explore Details <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Footer Audit Stamp */}
        <div className="mt-20 md:mt-32 pt-8 md:pt-12 border-t border-slate-200 flex flex-col items-center">
          <div className="p-8 md:p-12 bg-white border-2 md:border-4 border-safety-orange rounded-[2rem] md:rounded-[2.5rem] -rotate-2 shadow-2xl relative overflow-hidden group hover:rotate-0 transition-transform">
            <div className="scanline"></div>
            <div className="flex flex-col items-center">
              <Navigation className="w-12 h-12 md:w-20 md:h-20 text-safety-orange mb-4 md:mb-8" />
              <span className="text-3xl md:text-5xl font-black text-authority-navy uppercase tracking-tighter leading-none mb-3">REGION_VERIFIED</span>
              <span className="font-mono text-[9px] md:text-[11px] text-slate-500 tracking-[0.2em] md:tracking-[0.4em] uppercase">East Java Registry 2026</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
