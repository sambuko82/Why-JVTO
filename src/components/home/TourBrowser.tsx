import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, MapPin, Clock, Users, ShieldCheck, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SSOT } from '../../lib/ssot';

export const TourBrowser = () => {
  const navigate = useNavigate();

  const tourDepartures = [
    {
      id: 'surabaya',
      name: 'Departing from Surabaya',
      shortName: 'Surabaya',
      highlight: '1D – 6D Expeditions',
      description: 'Direct access from Juanda International Airport (SUB). Ideal for multi-volcano circuits.',
      tours: SSOT.tours.filter(t => t.route.includes('surabaya')).slice(0, 5)
    },
    {
      id: 'bali',
      name: 'Departing from Bali',
      shortName: 'Bali',
      highlight: '3D – 5D Expeditions',
      description: 'Seamless overland and ferry transfers from your Bali hotel to the volcanic heart of Java.',
      tours: SSOT.tours.filter(t => t.route.includes('bali')).slice(0, 5)
    }
  ];

  return (
    <section className="section-spacing bg-white relative overflow-hidden border-b border-slate-100">
      <div className="container-authority mb-12 md:mb-16">
        <div className="max-w-2xl">
          <div className="badge-eyebrow badge-eyebrow-orange mb-4 md:mb-6">
            <Clock className="w-3 h-3" /> Choose Your Departure City
          </div>
          <h2 className="heading-section">
            Choose Your <br />
            <span className="text-safety-orange">Departure City.</span>
          </h2>
        </div>
      </div>

      <div className="space-y-16 md:space-y-24">
        {tourDepartures.map((departure) => (
          <div key={departure.id} className="w-full">
            {/* Row Header */}
            <div className="container-authority mb-8">
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-slate-200"></div>
                <h3 className="text-sm md:text-base font-black uppercase tracking-[0.3em] text-slate-400">
                  {departure.name}
                </h3>
                <div className="h-px flex-1 bg-slate-200"></div>
              </div>
            </div>

            {/* Full-bleed scrollable container for tours */}
            <div className="w-full pl-4 md:pl-6 lg:pl-[calc((100vw-80rem)/2+1.5rem)]">
              <div className="flex overflow-x-auto gap-4 pb-8 pr-4 md:pr-6 snap-x hide-scrollbar">
                {/* Info Card (First item in scroll) */}
                <div className="shrink-0 w-[80vw] sm:w-[320px] md:w-[380px] snap-start">
                  <div className="p-6 md:p-10 rounded-2xl bg-slate-50 border border-slate-200 h-full flex flex-col justify-between aspect-[4/5]">
                    <div>
                      <h3 className="text-xl md:text-3xl font-black text-authority-navy uppercase tracking-tight mb-3 md:mb-4">
                        {departure.shortName} <br /> Logistics
                      </h3>
                      <p className="text-slate-500 font-light mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
                        {departure.description}
                      </p>
                      <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                        <div className="flex items-center gap-3 text-authority-navy font-mono text-[10px] md:text-[11px] uppercase tracking-widest">
                          <ShieldCheck className="w-4 h-4 text-safety-orange shrink-0" /> Police Escort
                        </div>
                        <div className="flex items-center gap-3 text-authority-navy font-mono text-[10px] md:text-[11px] uppercase tracking-widest">
                          <Users className="w-4 h-4 text-safety-orange shrink-0" /> Private Group
                        </div>
                        <div className="flex items-center gap-3 text-authority-navy font-mono text-[10px] md:text-[11px] uppercase tracking-widest">
                          <MapPin className="w-4 h-4 text-safety-orange shrink-0" /> Door-to-Door
                        </div>
                      </div>
                    </div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                      {departure.highlight}
                    </div>
                  </div>
                </div>

                {/* Tour Cards */}
                {departure.tours.map(tour => (
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
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80 opacity-80 transition-opacity duration-300 group-hover:opacity-100"></div>
                    
                    {/* Top Badge */}
                    {tour.crewName && (
                      <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-safety-orange text-white text-[8px] md:text-[9px] px-2 py-1 md:px-2.5 md:py-1.5 rounded-md font-mono font-bold uppercase tracking-widest z-10 shadow-sm">
                        {tour.crewName}
                      </div>
                    )}
                    
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 flex flex-col justify-end">
                      <h3 className="text-xl md:text-3xl font-black text-white uppercase tracking-tight mb-2 md:mb-3 drop-shadow-lg group-hover:-translate-y-1 transition-transform duration-300">
                        {tour.name}
                      </h3>
                      
                      <div className="flex items-center justify-between mb-2 md:mb-4 relative z-10 bg-black/40 backdrop-blur-md p-2 md:p-3 rounded-xl border border-white/10">
                        <div className="flex flex-col">
                          <span className="text-slate-300 text-[8px] md:text-[10px] font-mono uppercase tracking-widest mb-0.5 md:mb-1">Duration</span>
                          <span className="text-white font-bold text-xs md:text-sm">{tour.name.split(' ')[0]}</span>
                        </div>
                        <div className="flex flex-col items-end">
                          <span className="text-slate-300 text-[8px] md:text-[10px] font-mono uppercase tracking-widest mb-0.5 md:mb-1">From</span>
                          <span className="text-safety-orange font-black text-base md:text-lg">{tour.price}</span>
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
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Global View All Button */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mt-16 md:mt-24 text-center">
        <button 
          onClick={() => navigate('/tours')}
          className="w-full sm:w-auto bg-authority-navy hover:bg-authority-navy/90 text-white px-12 py-5 rounded-xl font-black uppercase tracking-wider text-sm transition-all shadow-xl flex items-center justify-center gap-3 mx-auto group"
        >
          View All Private Tours <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};
