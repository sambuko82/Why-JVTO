import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, MapPin, Clock, Users, ShieldCheck, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SSOT } from '../../lib/ssot';

export const TourBrowser = () => {
  const [activeDeparture, setActiveDeparture] = useState('surabaya');
  const navigate = useNavigate();

  const tourDepartures = [
    {
      id: 'surabaya',
      name: 'Departing from Surabaya',
      shortName: 'Surabaya',
      highlight: '1D – 6D Expeditions',
      description: 'Direct access from Juanda International Airport (SUB). Ideal for multi-volcano circuits.',
      tours: SSOT.tours.filter(t => t.route.includes('surabaya'))
    },
    {
      id: 'bali',
      name: 'Departing from Bali',
      shortName: 'Bali',
      highlight: '3D – 5D Expeditions',
      description: 'Seamless overland and ferry transfers from your Bali hotel to the volcanic heart of Java.',
      tours: SSOT.tours.filter(t => t.route.includes('bali'))
    }
  ];

  const currentDeparture = tourDepartures.find(d => d.id === activeDeparture) || tourDepartures[0];

  return (
    <section className="py-12 md:py-24 bg-audit-white relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 md:gap-8 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <div className="badge-eyebrow badge-eyebrow-orange mb-4 md:mb-6">
              <Clock className="w-3 h-3" /> Choose Your Departure City
            </div>
            <h2 className="text-3xl xs:text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] text-authority-navy">
              Choose Your <br />
              <span className="text-safety-orange">Departure City.</span>
            </h2>
          </div>
          <div className="flex gap-1.5 md:gap-2 p-1 bg-slate-100 rounded-xl w-full sm:w-auto overflow-x-auto no-scrollbar">
            {tourDepartures.map(d => (
              <button
                key={d.id}
                onClick={() => setActiveDeparture(d.id)}
                className={`flex-1 sm:flex-none px-4 sm:px-8 py-2.5 sm:py-4 rounded-lg font-black uppercase tracking-wider text-[11px] sm:text-xs transition-all whitespace-nowrap ${activeDeparture === d.id ? 'bg-authority-navy text-white shadow-lg' : 'text-slate-500 hover:text-authority-navy'}`}
              >
                {d.shortName}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Full-bleed scrollable container for tours */}
      <div className="w-full pl-4 md:pl-6 lg:pl-[calc((100vw-80rem)/2+1.5rem)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDeparture}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="flex overflow-x-auto gap-4 pb-8 pr-4 md:pr-6 snap-x hide-scrollbar"
          >
            {/* Info Card (First item in scroll) */}
            <div className="shrink-0 w-[80vw] sm:w-[320px] md:w-[380px] snap-start">
              <div className="p-6 md:p-10 rounded-2xl bg-slate-50 border border-slate-200 h-full flex flex-col justify-between aspect-[4/5]">
                <div>
                  <h3 className="text-xl md:text-3xl font-black text-authority-navy uppercase tracking-tight mb-3 md:mb-4">
                    {currentDeparture.name}
                  </h3>
                  <p className="text-slate-500 font-light mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
                    {currentDeparture.description}
                  </p>
                  <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                    <div className="flex items-center gap-3 text-authority-navy font-mono text-[10px] md:text-[11px] uppercase tracking-widest">
                      <ShieldCheck className="w-4 h-4 text-safety-orange shrink-0" /> Police Escort Available
                    </div>
                    <div className="flex items-center gap-3 text-authority-navy font-mono text-[10px] md:text-[11px] uppercase tracking-widest">
                      <Users className="w-4 h-4 text-safety-orange shrink-0" /> Private Group Logistics
                    </div>
                    <div className="flex items-center gap-3 text-authority-navy font-mono text-[10px] md:text-[11px] uppercase tracking-widest">
                      <MapPin className="w-4 h-4 text-safety-orange shrink-0" /> Door-to-Door Transport
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => navigate('/tours')}
                  className="w-full bg-authority-navy text-white py-3 md:py-4 rounded-xl font-black uppercase tracking-wider text-[10px] md:text-xs hover:bg-authority-navy/90 transition-all flex items-center justify-center gap-2"
                >
                  View All {currentDeparture.shortName} Tours <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Tour Cards */}
            {currentDeparture.tours.map(tour => (
              <div 
                key={tour.route} 
                className="relative shrink-0 w-[80vw] sm:w-[320px] md:w-[380px] aspect-[4/5] snap-start group cursor-pointer rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                onClick={() => navigate(tour.route)} 
              >
                <img 
                  src={tour.image}
                  alt={tour.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/90 opacity-90 transition-opacity duration-300 group-hover:opacity-100"></div>
                
                {/* Top Badge */}
                {tour.crewName && (
                  <div className="absolute top-6 left-6 bg-safety-orange text-white text-[9px] px-2.5 py-1.5 rounded-md font-mono font-bold uppercase tracking-widest z-10 shadow-sm">
                    {tour.crewName}
                  </div>
                )}
                
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end">
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-3 drop-shadow-lg group-hover:-translate-y-1 transition-transform duration-300">
                    {tour.name}
                  </h3>
                  
                  {tour.overview?.highlights && (
                    <ul className="mb-4 space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-full left-6 right-6 pb-4">
                      {tour.overview.highlights.slice(0, 3).map((highlight, idx) => (
                        <li key={idx} className="text-white text-xs font-light flex items-start gap-2">
                          <span className="text-safety-orange mt-0.5">•</span>
                          <span className="line-clamp-1">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  <div className="flex items-center justify-between mb-4 relative z-10 bg-black/20 backdrop-blur-sm p-3 rounded-xl border border-white/10">
                    <div className="flex flex-col">
                      <span className="text-slate-300 text-[10px] font-mono uppercase tracking-widest mb-1">Duration</span>
                      <span className="text-white font-bold text-sm">{tour.name.split(' ')[0]}</span>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-slate-300 text-[10px] font-mono uppercase tracking-widest mb-1">From</span>
                      <span className="text-safety-orange font-black text-lg">{tour.price}</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-white/20 flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center text-safety-orange">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <Star className="w-3.5 h-3.5 fill-current" />
                      </div>
                      <span className="text-xs text-white font-medium">5.0</span>
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-300">
                      Moderate
                    </span>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Fallback if no tours found for the location */}
            {currentDeparture.tours.length === 0 && (
              <div className="shrink-0 w-[85vw] sm:w-[320px] md:w-[380px] aspect-[4/5] snap-start flex items-center justify-center p-8 rounded-2xl border-2 border-dashed border-slate-200">
                <p className="text-slate-500 text-center font-medium">More tours from {currentDeparture.shortName} coming soon.</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
