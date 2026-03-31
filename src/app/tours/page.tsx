import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SSOT } from '../../lib/ssot';
import { PageSEO } from '../../components/PageSEO';
import { motion } from 'motion/react';
import { MapPin, Clock, Users, ShieldCheck, ChevronRight } from 'lucide-react';

export default function ToursHub() {
  const navigate = useNavigate();
  const tours = SSOT.tours;

  return (
    <div className="min-h-screen bg-audit-white text-authority-navy font-sans selection:bg-safety-orange/30 pb-24 md:pb-0">
      <PageSEO route="/tours" />
      
      {/* Header */}
      <div className="border-b border-slate-200 bg-audit-white/80 relative z-40 backdrop-blur-xl">
        <div className="container mx-auto px-4 md:px-6 py-4 md:py-6 flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-3 text-safety-orange text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-[0.15em] md:tracking-[0.2em]">
            <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4" /> Tour Registry
          </div>
          <div className="flex items-center gap-4 md:gap-6">
            <button onClick={() => navigate('/why-jvto')} className="text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-widest text-slate-500 hover:text-authority-navy transition-colors">Why JVTO</button>
            <button onClick={() => navigate('/verify-jvto')} className="text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-widest text-slate-500 hover:text-authority-navy transition-colors">Verify</button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-24"
        >
          <div className="flex items-center gap-2 mb-4 md:mb-6">
            <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-safety-orange" />
            <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-widest text-slate-500">Expedition Catalog</span>
          </div>
          <h1 className="text-4xl md:text-8xl font-black text-authority-navy mb-4 md:mb-8 leading-[0.85] uppercase tracking-tighter">
            VERIFIED <br />
            <span className="text-safety-orange">EXPEDITIONS.</span>
          </h1>
          <p className="text-slate-500 text-lg md:text-xl leading-tight font-light max-w-2xl">
            Explore our curated selection of private tours, led by certified guides and supported by our rigorous safety protocols.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {tours.map((tour, idx) => (
            <motion.div
              key={tour.route}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => navigate(tour.route)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                {tour.crewName && (
                  <div className="absolute bottom-3 left-3 bg-authority-navy/90 backdrop-blur text-white text-[9px] px-2.5 py-1.5 rounded-md font-mono uppercase tracking-widest shadow-md border border-white/10">
                    {tour.crewName}
                  </div>
                )}
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-black text-authority-navy uppercase tracking-tight mb-2 group-hover:text-safety-orange transition-colors">
                  {tour.name}
                </h3>
                <p className="text-slate-500 font-mono text-[11px] uppercase tracking-widest mb-6">
                  {tour.price}
                </p>
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-safety-orange font-mono text-[10px] uppercase tracking-widest font-bold">
                    <ShieldCheck className="w-3.5 h-3.5" /> Verified Route
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-safety-orange group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
