import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, MapPin, Clock, Users, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const tourDepartures = [
  {
    id: 'surabaya',
    name: 'Departing from Surabaya',
    highlight: '1D – 6D Expeditions',
    description: 'Direct access from Juanda International Airport (SUB). Ideal for multi-volcano circuits.',
    tours: [
      { id: 's1', name: 'Mount Bromo Midnight', duration: '1 Day', price: 'From IDR 1,200,000 / person', image: 'https://picsum.photos/seed/s1/400/300' },
      { id: 's2', name: 'Bromo & Ijen Crater', duration: '3 Days', price: 'From IDR 3,500,000 / person', image: 'https://picsum.photos/seed/s2/400/300' },
      { id: 's3', name: 'East Java Grand Tour', duration: '6 Days', price: 'From IDR 7,500,000 / person', image: 'https://picsum.photos/seed/s3/400/300' }
    ]
  },
  {
    id: 'bali',
    name: 'Departing from Bali',
    highlight: '3D – 5D Expeditions',
    description: 'Cross the Bali Strait for a seamless transition from island paradise to volcanic adventure.',
    tours: [
      { id: 'b1', name: 'Ijen Blue Fire Express', duration: '3 Days', price: 'From IDR 2,800,000 / person', image: 'https://picsum.photos/seed/b1/400/300' },
      { id: 'b2', name: 'The Volcano Triangle', duration: '4 Days', price: 'From IDR 4,200,000 / person', image: 'https://picsum.photos/seed/b2/400/300' },
      { id: 'b3', name: 'Java Overland Explorer', duration: '5 Days', price: 'From IDR 5,800,000 / person', image: 'https://picsum.photos/seed/b3/400/300' }
    ]
  }
];

export const TourBrowser = () => {
  const [activeDeparture, setActiveDeparture] = useState('surabaya');
  const navigate = useNavigate();

  const currentDeparture = tourDepartures.find(d => d.id === activeDeparture) || tourDepartures[0];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 md:gap-8 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-safety-orange/5 border border-safety-orange/10 text-safety-orange text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] mb-4 md:mb-6">
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
                className={`flex-1 sm:flex-none px-3 sm:px-6 py-2.5 sm:py-3 rounded-lg font-black uppercase tracking-wider text-[10px] sm:text-xs transition-all whitespace-nowrap ${activeDeparture === d.id ? 'bg-authority-navy text-white shadow-lg' : 'text-slate-500 hover:text-authority-navy'}`}
              >
                {d.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          <div className="lg:col-span-1">
            <div className="p-6 md:p-8 rounded-2xl bg-slate-50 border border-slate-100 h-full">
              <h3 className="text-2xl font-black text-authority-navy uppercase tracking-tight mb-4">
                {currentDeparture.name}
              </h3>
              <p className="text-slate-500 font-light mb-8 leading-relaxed">
                {currentDeparture.description}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-authority-navy font-mono text-[11px] uppercase tracking-widest">
                  <ShieldCheck className="w-4 h-4 text-safety-orange" /> Police Escort Available
                </div>
                <div className="flex items-center gap-3 text-authority-navy font-mono text-[11px] uppercase tracking-widest">
                  <Users className="w-4 h-4 text-safety-orange" /> Private Group Logistics
                </div>
                <div className="flex items-center gap-3 text-authority-navy font-mono text-[11px] uppercase tracking-widest">
                  <MapPin className="w-4 h-4 text-safety-orange" /> Door-to-Door Transport
                </div>
              </div>
              <button 
                onClick={() => navigate('/tours')}
                className="mt-12 w-full bg-authority-navy text-white py-4 rounded-xl font-black uppercase tracking-wider text-xs hover:bg-authority-navy/90 transition-all flex items-center justify-center gap-2"
              >
                View All {currentDeparture.name} Tours <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDeparture}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {currentDeparture.tours.map(tour => (
                  <div key={tour.id} className="group cursor-pointer">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4 relative">
                      <img 
                        src={tour.image} 
                        alt={tour.name} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-white font-mono text-[11px] uppercase tracking-widest">
                        {tour.duration}
                      </div>
                    </div>
                    <h4 className="text-lg font-black text-authority-navy uppercase tracking-tight mb-1 group-hover:text-safety-orange transition-colors">
                      {tour.name}
                    </h4>
                    <p className="text-slate-500 font-mono text-[11px] uppercase tracking-widest">
                      {tour.price}
                    </p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
