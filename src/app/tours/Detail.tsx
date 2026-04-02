import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SSOT } from '../../lib/ssot';
import { PageSEO } from '../../components/PageSEO';
import { motion } from 'motion/react';
import { MapPin, Clock, Users, ShieldCheck, ArrowLeft, CheckCircle2, XCircle, AlertTriangle, Map, CalendarDays } from 'lucide-react';

export default function TourDetail() {
  const { departure, slug } = useParams();
  const navigate = useNavigate();
  const route = `/tours/${departure}/${slug}`;
  const tour = SSOT.tours.find(t => t.route === route);

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-audit-white text-authority-navy">
        <div className="text-center">
          <h1 className="text-4xl font-black uppercase mb-4">Tour Not Found</h1>
          <button onClick={() => navigate('/tours')} className="text-safety-orange underline uppercase font-mono text-sm">Return to Tours</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-audit-white text-authority-navy font-sans selection:bg-safety-orange/30 pb-24 md:pb-0">
      <PageSEO route={route} />
      
      {/* Header */}
      <div className="border-b border-slate-200 bg-audit-white/80 relative z-40 backdrop-blur-xl sticky top-0">
        <div className="container mx-auto px-4 md:px-6 py-4 md:py-6 flex items-center justify-between">
          <button 
            onClick={() => navigate('/tours')}
            className="group flex items-center gap-3 text-[10px] md:text-[11px] font-mono font-bold text-slate-500 hover:text-authority-navy transition-all uppercase tracking-widest"
          >
            <ArrowLeft className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:-translate-x-1 transition-transform" /> <span className="hidden xs:inline">Back to </span>Tours
          </button>
          <div className="flex items-center gap-4 md:gap-6">
            <button onClick={() => navigate('/verify-jvto')} className="text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-widest text-slate-500 hover:text-authority-navy transition-colors">Verify</button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-24 flex flex-col lg:flex-row gap-12 lg:gap-24"
        >
          <div className="lg:w-1/2">
            <div className="flex items-center gap-2 mb-4 md:mb-6">
              <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-safety-orange" />
              <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-widest text-slate-500">Tour Details</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-authority-navy mb-4 md:mb-8 leading-[0.85] uppercase tracking-tighter">
              {tour.name}
            </h1>
            <p className="text-slate-500 font-mono text-lg uppercase tracking-widest mb-8">
              {tour.price}
            </p>
            
            {/* Overview Highlights */}
            {tour.overview && (
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Map className="w-5 h-5 text-safety-orange" />
                  <h3 className="font-mono text-sm uppercase tracking-widest font-bold">Route & Highlights</h3>
                </div>
                <p className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-4 border-l-2 border-safety-orange pl-4 py-1">
                  {tour.overview.route_meta}
                </p>
                <ul className="space-y-3">
                  {tour.overview.highlights.map((highlight: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-verified-bright shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <button 
              onClick={() => navigate('/travel-guide/booking-information')}
              className="w-full bg-safety-orange text-white py-5 rounded-md font-black uppercase tracking-wider text-sm hover:bg-safety-orange/90 transition-all shadow-hover shadow-safety-orange/20 mb-8"
            >
              Request Booking
            </button>
          </div>
          <div className="lg:w-1/2">
            <div className="aspect-[4/3] rounded-md overflow-hidden shadow-hover relative">
              <img 
                src={tour.image}
                alt={tour.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {tour.crewName && (
                <div className="absolute bottom-6 left-6 bg-authority-navy/90 backdrop-blur text-white text-xs px-4 py-2 rounded-md font-mono uppercase tracking-widest shadow-hover border border-white/10">
                  {tour.crewName}
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Detailed Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
          
          {/* Itinerary */}
          <div className="lg:col-span-2">
            {tour.itinerary && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <div className="flex items-center gap-3 mb-8">
                  <CalendarDays className="w-6 h-6 text-safety-orange" />
                  <h2 className="text-3xl font-black uppercase tracking-tighter">Itinerary</h2>
                </div>
                <div className="space-y-8">
                  {tour.itinerary.map((day: any, idx: number) => (
                    <div key={idx} className="relative pl-8 md:pl-12 border-l border-slate-200">
                      <div className="absolute left-[-17px] top-0 bg-audit-white border-2 border-safety-orange text-safety-orange w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-bold">
                        {day.day}
                      </div>
                      <h3 className="text-xl font-bold mb-4">{day.title}</h3>
                      <ul className="space-y-3">
                        {day.activities.map((act: string, aIdx: number) => (
                          <li key={aIdx} className="text-slate-600 flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0 mt-2"></span>
                            <span>{act}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar: Inclusions, Exclusions, Requirements */}
          <div className="space-y-12">
            {tour.includes && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-6 rounded-md"
              >
                <h3 className="font-mono text-sm uppercase tracking-widest font-bold mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-verified-bright" /> Inclusions
                </h3>
                <ul className="space-y-3">
                  {tour.includes.map((item: string, idx: number) => (
                    <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                      <span className="text-verified-bright mt-0.5">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {tour.excludes && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-6 rounded-md"
              >
                <h3 className="font-mono text-sm uppercase tracking-widest font-bold mb-6 flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-red-500" /> Exclusions
                </h3>
                <ul className="space-y-3">
                  {tour.excludes.map((item: string, idx: number) => (
                    <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                      <span className="text-red-500 mt-0.5">✕</span> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {tour.requirements && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-safety-orange/5 p-6 rounded-md border border-safety-orange/20"
              >
                <h3 className="font-mono text-sm uppercase tracking-widest font-bold mb-6 flex items-center gap-2 text-safety-orange">
                  <AlertTriangle className="w-4 h-4" /> Requirements
                </h3>
                <ul className="space-y-3">
                  {tour.requirements.map((item: string, idx: number) => (
                    <li key={idx} className="text-sm text-slate-700 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-safety-orange shrink-0 mt-2"></span> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

