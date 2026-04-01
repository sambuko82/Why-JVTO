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
      <div className="container-authority mb-16 md:mb-24">
        <div className="max-w-3xl">
          <div className="badge-eyebrow bg-authority-navy text-white mb-6 md:mb-8">
            <Clock className="w-3 h-3" /> Choose Your Departure City
          </div>
          <h2 className="heading-section">
            Choose Your <br />
            <span className="text-safety-orange">Departure City.</span>
          </h2>
        </div>
      </div>

      <div className="space-y-24 md:space-y-32">
        {tourDepartures.map((departure) => (
          <div key={departure.id} className="w-full">
            {/* Row Header */}
            <div className="container-authority mb-12">
              <div className="flex items-center gap-6">
                <div className="h-px flex-1 bg-slate-100"></div>
                <h3 className="font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-slate-400">
                  {departure.name}
                </h3>
                <div className="h-px flex-1 bg-slate-100"></div>
              </div>
            </div>

            {/* Full-bleed scrollable container for tours */}
            <div className="w-full pl-4 md:pl-8 lg:pl-[calc((100vw-80rem)/2+3rem)]">
              <div className="flex overflow-x-auto gap-6 pb-12 pr-4 md:pr-8 snap-x hide-scrollbar">
                {/* Info Card (First item in scroll) */}
                <div className="shrink-0 w-[85vw] sm:w-[340px] md:w-[400px] snap-start">
                  <div className="p-8 md:p-12 rounded-[2.5rem] bg-slate-50 border border-slate-100 h-full flex flex-col justify-between aspect-[4/5] shadow-sm">
                    <div>
                      <h3 className="text-2xl md:text-4xl font-black text-authority-navy uppercase tracking-tight mb-4 md:mb-6 leading-none">
                        {departure.shortName} <br /> Logistics
                      </h3>
                      <p className="body-text text-sm md:text-base mb-8 md:mb-10">
                        {departure.description}
                      </p>
                      <div className="space-y-4 md:space-y-6 mb-8 md:mb-10">
                        <div className="flex items-center gap-4 text-authority-navy font-mono text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em]">
                          <ShieldCheck className="w-5 h-5 text-safety-orange shrink-0" /> Police Escort
                        </div>
                        <div className="flex items-center gap-4 text-authority-navy font-mono text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em]">
                          <Users className="w-5 h-5 text-safety-orange shrink-0" /> Private Group
                        </div>
                        <div className="flex items-center gap-4 text-authority-navy font-mono text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em]">
                          <MapPin className="w-5 h-5 text-safety-orange shrink-0" /> Door-to-Door
                        </div>
                      </div>
                    </div>
                    <div className="font-mono text-[10px] md:text-[11px] font-black uppercase tracking-[0.25em] text-slate-400">
                      {departure.highlight}
                    </div>
                  </div>
                </div>

                {/* Tour Cards */}
                {departure.tours.map(tour => (
                  <div 
                    key={tour.route} 
                    className="relative shrink-0 w-[85vw] sm:w-[340px] md:w-[400px] aspect-[4/5] snap-start group cursor-pointer rounded-[2.5rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] transition-all duration-500"
                    onClick={() => navigate(tour.route)} 
                  >
                    <img 
                      src={tour.image}
                      alt={tour.name} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/90 opacity-80 transition-opacity duration-500 group-hover:opacity-100"></div>
                    
                    {/* Top Badge */}
                    {tour.crewName && (
                      <div className="absolute top-6 left-6 md:top-8 md:left-8 bg-safety-orange text-white text-[9px] md:text-[10px] px-3 py-1.5 md:px-4 md:py-2 rounded-xl font-mono font-black uppercase tracking-[0.2em] z-10 shadow-lg shadow-safety-orange/20">
                        {tour.crewName}
                      </div>
                    )}
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 flex flex-col justify-end">
                      <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight mb-3 md:mb-5 drop-shadow-lg group-hover:-translate-y-2 transition-transform duration-500 leading-none">
                        {tour.name}
                      </h3>
                      
                      <div className="flex items-center justify-between mb-4 md:mb-6 relative z-10 bg-white/10 backdrop-blur-xl p-4 md:p-5 rounded-2xl border border-white/20">
                        <div className="flex flex-col">
                          <span className="text-white/60 text-[9px] md:text-[10px] font-mono font-black uppercase tracking-[0.2em] mb-1 md:mb-2">Duration</span>
                          <span className="text-white font-black text-xs md:text-sm uppercase">{tour.name.split(' ')[0]}</span>
                        </div>
                        <div className="flex flex-col items-end">
                          <span className="text-white/60 text-[9px] md:text-[10px] font-mono font-black uppercase tracking-[0.2em] mb-1 md:mb-2">From</span>
                          <span className="text-safety-orange font-black text-lg md:text-xl">{tour.price}</span>
                        </div>
                      </div>
                      
                      <div className="pt-6 border-t border-white/20 flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center text-safety-orange">
                            <Star className="w-4 h-4 fill-current" />
                            <Star className="w-4 h-4 fill-current" />
                            <Star className="w-4 h-4 fill-current" />
                            <Star className="w-4 h-4 fill-current" />
                            <Star className="w-4 h-4 fill-current" />
                          </div>
                          <span className="text-xs text-white font-black">5.0</span>
                        </div>
                        <span className="font-mono text-[9px] md:text-[10px] font-black uppercase tracking-[0.25em] text-white/60">
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
      <div className="max-w-7xl mx-auto px-4 md:px-6 mt-24 md:mt-32 text-center">
        <button 
          onClick={() => navigate('/tours')}
          className="w-full sm:w-auto bg-authority-navy hover:bg-slate-800 text-white px-12 py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-sm transition-all shadow-2xl shadow-authority-navy/20 flex items-center justify-center gap-4 mx-auto group"
        >
          View All Private Tours <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
        </button>
      </div>
    </section>
  );
};
