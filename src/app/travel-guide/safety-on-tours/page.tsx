import React from 'react';
import { 
  ShieldCheck, 
  ArrowLeft, 
  Heart, 
  Users, 
  CheckCircle2, 
  AlertTriangle,
  Info,
  MapPin,
  Calendar,
  ShieldPlus,
  Siren,
  LifeBuoy
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SSOT } from '../../../lib/ssot';
import { PageSEO } from '../../../components/PageSEO';
import { motion } from 'motion/react';

export default function SafetyOnTours() {
  const navigate = useNavigate();
  const onBack = () => navigate('/travel-guide');
  const meta = SSOT.pages['/travel-guide/safety-on-tours'];

  return (
    <div className="min-h-screen bg-white text-authority-navy font-sans selection:bg-safety-orange/30 pb-24 md:pb-0">
      {/* Header */}
      <div className="border-b border-slate-100 bg-white/80 relative z-40 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="group flex items-center gap-3 text-[11px] font-mono font-bold text-slate-500 hover:text-authority-navy transition-all uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Travel Guide
          </button>
          <div className="flex items-center gap-3 text-safety-orange text-[11px] font-mono font-bold uppercase tracking-[0.2em]">
            <ShieldCheck className="w-4 h-4" /> Safety on Tours
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 md:py-24 max-w-4xl relative z-10">
        <PageSEO route="/travel-guide/safety-on-tours" />
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 text-center"
        >
          <h1 className="text-4xl md:text-8xl font-black text-authority-navy mb-8 leading-[0.85] uppercase tracking-tighter">
            {meta?.h1 || 'SAFETY ON TOURS.'}
          </h1>
          <p className="text-lg md:text-2xl text-slate-500 max-w-2xl mx-auto leading-tight font-light">
            We don't just follow safety guidelines; we set them. From medical-grade gas masks to police-led hazard monitoring, discover the protocols that keep our guests safe in East Java's most extreme environments.
          </p>
        </motion.div>

        <div className="space-y-16 md:space-y-24">
          
          {/* 1. Our Safety Protocols */}
          <section>
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <div className="p-2.5 md:p-3 bg-slate-50 rounded-2xl text-safety-orange border border-slate-100">
                <ShieldPlus className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-authority-navy uppercase tracking-tighter">Our Safety Protocols</h2>
            </div>
            <div className="prose prose-slate max-w-none">
              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                We maintain strict safety protocols for every tour, including mandatory health screenings for high-altitude treks, certified safety gear, and direct coordination with local authorities. Our guides are trained in first aid and emergency response.
              </p>
            </div>
          </section>

          {/* 2. Certified Safety Gear */}
          <section>
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <div className="p-2.5 md:p-3 bg-slate-50 rounded-2xl text-safety-orange border border-slate-100">
                <LifeBuoy className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-authority-navy uppercase tracking-tighter">Certified Safety Gear</h2>
            </div>
            <div className="prose prose-slate max-w-none">
              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                We provide high-quality safety gear for all our tours, including gas masks for Ijen Crater, helmets for waterfall treks, and first aid kits for every group. All equipment is regularly inspected and certified.
              </p>
            </div>
          </section>

          {/* 3. Emergency Response */}
          <section>
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <div className="p-2.5 md:p-3 bg-slate-50 rounded-2xl text-safety-orange border border-slate-100">
                <Siren className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-authority-navy uppercase tracking-tighter">Emergency Response</h2>
            </div>
            <div className="prose prose-slate max-w-none">
              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                In the event of an emergency, we have direct lines of communication with local hospitals and search and rescue teams. Our guides are trained to handle emergency situations calmly and professionally.
              </p>
            </div>
          </section>

        </div>
        
        {/* Footer Audit Stamp */}
        <div className="mt-24 md:mt-32 pt-12 border-t border-slate-100 flex flex-col items-center">
          <div className="p-6 md:p-8 bg-slate-50 border border-slate-200 rounded-3xl flex flex-col items-center">
            <ShieldCheck className="w-10 h-10 md:w-12 md:h-12 text-safety-orange mb-4" />
            <span className="text-xl md:text-2xl font-black text-authority-navy uppercase tracking-tighter leading-none mb-2">SAFETY_VERIFIED</span>
            <span className="font-mono text-[9px] md:text-[10px] text-slate-500 tracking-[0.2em] uppercase">JVTO Safety 2026</span>
          </div>
        </div>
      </div>
    </div>
  );
}
