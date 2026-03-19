import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  CheckCircle2, 
  XCircle, 
  ArrowLeft, 
  Lock, 
  ShieldCheck,
  Info,
  ChevronRight,
  Coffee,
  Car,
  Hotel,
  Ticket,
  User,
  AlertTriangle
} from 'lucide-react';
import { SSOT } from '../../../lib/ssot';
import { PageSEO } from '../../../components/PageSEO';
import { motion } from 'motion/react';
import { AuditStamp } from '../../../components/AuditStamp';

export default function InclusionsExclusions() {
  const navigate = useNavigate();
  const meta = SSOT.pages['/policy/inclusions-exclusions'];

  const inclusions = [
    { title: 'Private Transport', desc: 'Dedicated AC vehicle with professional driver and fuel.', icon: Car },
    { title: 'Specialized Crew', desc: 'Dedicated English-speaking guide and local expert team.', icon: User },
    { title: 'All Permits', desc: 'Official entrance tickets for Bromo, Ijen, and other sites.', icon: Ticket },
    { title: 'Health Screening', desc: 'Mandatory medical checks and digital QR issuance included.', icon: ShieldCheck },
    { title: 'Accommodations', desc: 'Pre-vetted hotels as specified in your chosen itinerary.', icon: Hotel },
    { title: 'Safety Gear', desc: 'Professional gas masks and safety equipment for volcanic areas.', icon: Info }
  ];

  const exclusions = [
    { title: 'Personal Expenses', desc: 'Souvenirs, laundry, phone calls, and optional activities.', icon: Coffee },
    { title: 'Travel Insurance', desc: 'Mandatory personal travel and medical insurance.', icon: ShieldCheck },
    { title: 'Tipping', desc: 'Gratuities for your guide and driver (at your discretion).', icon: User },
    { title: 'Unspecified Meals', desc: 'Lunches and dinners not explicitly listed in the itinerary.', icon: Coffee }
  ];

  return (
    <div className="min-h-screen bg-audit-white text-authority-navy font-sans selection:bg-safety-orange/30 pb-24 md:pb-0">
      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 grid-pattern opacity-5 pointer-events-none"></div>
      
      {/* Header */}
      <div className="border-b border-slate-200 bg-audit-white/80 relative z-40 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <button 
            onClick={() => navigate('/travel-guide')}
            className="group flex items-center gap-3 text-[11px] font-mono font-bold text-slate-500 hover:text-authority-navy transition-all uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Travel Guide
          </button>
          <div className="flex items-center gap-3 text-safety-orange text-[11px] font-mono font-bold uppercase tracking-[0.2em]">
            <Lock className="w-4 h-4" /> Inclusions_Doc_v1.9
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 md:py-24 max-w-5xl relative z-10">
        <PageSEO route="/policy/inclusions-exclusions" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-2 mb-6">
            <CheckCircle2 className="w-4 h-4 text-safety-orange" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-slate-500">Service Boundaries</span>
          </div>
          <h1 className="text-4xl md:text-8xl font-black text-authority-navy mb-8 leading-[0.85] uppercase tracking-tighter">
            {meta?.h1 || 'INCLUSIONS.'}
          </h1>
          <p className="text-slate-500 text-lg md:text-xl leading-tight font-light max-w-2xl">
            We believe in radical transparency. Only items explicitly listed in your final itinerary are binding. No hidden costs, no surprises.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-24 md:mb-32">
          {/* Inclusions */}
          <div>
            <div className="flex items-center gap-4 mb-8 md:mb-12">
              <CheckCircle2 className="w-6 h-6 text-verified-bright" />
              <h2 className="text-2xl md:text-3xl font-black text-authority-navy uppercase tracking-tight">What's Included</h2>
            </div>
            <div className="space-y-4">
              {inclusions.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bento-card bg-white p-6 flex items-center gap-6 border-l-4 border-l-verified-bright"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-50 text-authority-navy flex items-center justify-center border border-slate-100">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-authority-navy uppercase leading-none mb-1 tracking-tight">{item.title}</h3>
                    <p className="text-slate-500 text-sm font-light leading-tight">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Exclusions */}
          <div>
            <div className="flex items-center gap-4 mb-8 md:mb-12">
              <XCircle className="w-6 h-6 text-safety-orange" />
              <h2 className="text-2xl md:text-3xl font-black text-authority-navy uppercase tracking-tight">What's Excluded</h2>
            </div>
            <div className="space-y-4">
              {exclusions.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bento-card bg-white p-6 flex items-center gap-6 border-l-4 border-l-safety-orange"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-50 text-authority-navy flex items-center justify-center border border-slate-100">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-authority-navy uppercase leading-none mb-1 tracking-tight">{item.title}</h3>
                    <p className="text-slate-500 text-sm font-light leading-tight">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Binding Agreement Notice */}
        <div className="p-8 md:p-12 bg-authority-navy text-white rounded-[2rem] md:rounded-[3rem] shadow-2xl relative overflow-hidden">
          <div className="scanline"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center text-center md:text-left justify-between gap-10 md:gap-12">
            <div className="max-w-md">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-safety-orange text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-[0.2em] mb-6">
                <AlertTriangle className="w-3 h-3" /> Binding Agreement
              </div>
              <h2 className="text-3xl md:text-4xl font-black uppercase leading-none mb-4">Written <br />Certainty.</h2>
              <p className="text-slate-400 text-base md:text-lg font-light leading-tight">
                Only items explicitly written in your final PDF itinerary are binding. Verbal agreements or social media mentions are not part of the contract.
              </p>
            </div>
            <button 
              onClick={() => navigate('/policy/booking-payment-cancellation')}
              className="w-full md:w-auto bg-white text-authority-navy px-10 py-5 rounded-xl font-black uppercase tracking-wider transition-all hover:bg-slate-100 flex items-center justify-center gap-3 group"
            >
              Booking Policy <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Footer Audit Stamp */}
        <AuditStamp title="INCLUSIONS_VERIFIED" subtitle="Registry 2026" system="JVTO_DOCS_V1.9" />
      </div>
    </div>
  );
}
