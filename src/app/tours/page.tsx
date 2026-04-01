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
    <div className="min-h-screen bg-white text-authority-navy font-sans selection:bg-safety-orange/30 pb-24 md:pb-0">
      <PageSEO route="/tours" />
      
      {/* Header */}
      <div className="border-b border-slate-100 bg-white/80 relative z-40 backdrop-blur-xl sticky top-0">
        <div className="container-authority py-4 md:py-6 flex items-center justify-between">
          <div className="flex items-center gap-3 text-safety-orange text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em]">
            <MapPin className="w-4 h-4" /> Tour Registry
          </div>
          <div className="flex items-center gap-6 md:gap-10">
            <button onClick={() => navigate('/why-jvto')} className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-authority-navy transition-colors">Why JVTO</button>
            <button onClick={() => navigate('/verify-jvto')} className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-authority-navy transition-colors">Verify</button>
          </div>
        </div>
      </div>

      <div className="container-authority py-16 md:py-32 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="mb-20 md:mb-32"
        >
          <div className="badge-eyebrow bg-safety-orange/10 text-safety-orange mb-8">
            <Clock className="w-3.5 h-3.5" /> Expedition Catalog
          </div>
          <h1 className="text-5xl md:text-9xl font-black text-authority-navy mb-10 leading-[0.85] uppercase tracking-tighter">
            VERIFIED <br />
            <span className="text-safety-orange">EXPEDITIONS.</span>
          </h1>
          <p className="body-text max-w-2xl">
            Explore our curated selection of private tours, led by certified guides and supported by our rigorous safety protocols.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {tours.map((tour, idx) => (
            <motion.div
              key={tour.route}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => navigate(tour.route)}
              className="group cursor-pointer bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src={tour.image}
                  alt={tour.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-authority-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {tour.crewName && (
                  <div className="absolute bottom-6 left-6 bg-white text-authority-navy text-[10px] px-4 py-2 rounded-xl font-black uppercase tracking-[0.1em] shadow-2xl border border-white/20">
                    {tour.crewName}
                  </div>
                )}
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <h3 className="text-2xl font-black text-authority-navy uppercase tracking-tight mb-4 group-hover:text-safety-orange transition-colors leading-tight">
                  {tour.name}
                </h3>
                <p className="text-slate-400 font-mono text-xs font-black uppercase tracking-[0.2em] mb-8">
                  {tour.price}
                </p>
                <div className="mt-auto flex items-center justify-between pt-8 border-t border-slate-50">
                  <div className="flex items-center gap-3 text-safety-orange font-mono text-[10px] uppercase tracking-[0.2em] font-black">
                    <ShieldCheck className="w-4 h-4" /> Verified Route
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-safety-orange group-hover:text-white transition-all duration-500">
                    <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
