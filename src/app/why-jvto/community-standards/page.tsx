import React from 'react';
import { 
  ShieldCheck, 
  ArrowLeft, 
  Heart, 
  Users, 
  Scale, 
  CheckCircle2, 
  AlertTriangle,
  MessageSquare,
  Handshake,
  Globe
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SSOT } from '../../../lib/ssot';
import { PageSEO } from '../../../components/PageSEO';
import { motion } from 'motion/react';

export default function CommunityStandards() {
  const navigate = useNavigate();
  const onBack = () => navigate('/why-jvto');
  const meta = SSOT.pages['/why-jvto/community-standards'];

  return (
    <div className="min-h-screen bg-white text-authority-navy font-sans selection:bg-safety-orange/30 pb-24 md:pb-0">
      {/* Header */}
      <div className="border-b border-slate-100 bg-white/80 relative z-40 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="group flex items-center gap-3 text-[11px] font-mono font-bold text-slate-500 hover:text-authority-navy transition-all uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Trust Hub
          </button>
          <div className="flex items-center gap-3 text-safety-orange text-[11px] font-mono font-bold uppercase tracking-[0.2em]">
            <Users className="w-4 h-4" /> Community Standards
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24 max-w-4xl relative z-10">
        <PageSEO route="/why-jvto/community-standards" />
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24 text-center"
        >
          <h1 className="text-5xl md:text-8xl font-black text-authority-navy mb-8 leading-[0.85] uppercase tracking-tighter">
            {meta?.h1 || 'COMMUNITY STANDARDS.'}
          </h1>
          <p className="text-2xl text-slate-500 max-w-2xl mx-auto leading-tight font-light">
            We believe in sustainable tourism that benefits the local community. From fair wages for our drivers to supporting local conservation efforts, our standards are as high as our safety protocols.
          </p>
        </motion.div>

        <div className="space-y-24">
          
          {/* 1. Safety First */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-slate-50 rounded-2xl text-safety-orange border border-slate-100">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-black text-authority-navy uppercase tracking-tighter">Safety First</h2>
            </div>
            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-600 leading-relaxed">
                Safety is not just a policy; it's our foundation. We maintain strict protocols for all tours, especially high-risk destinations like Ijen Crater. This includes mandatory health screenings, certified safety gear, and direct coordination with local authorities.
              </p>
            </div>
          </section>

          {/* 2. Respect for Locals */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-slate-50 rounded-2xl text-safety-orange border border-slate-100">
                <Heart className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-black text-authority-navy uppercase tracking-tighter">Respect for Locals</h2>
            </div>
            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-600 leading-relaxed">
                We are guests in the communities we visit. We prioritize local employment, fair wages, and cultural sensitivity. Our guides are not just employees; they are ambassadors of their own heritage.
              </p>
            </div>
          </section>

          {/* 3. Environmental Stewardship */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-slate-50 rounded-2xl text-safety-orange border border-slate-100">
                <Globe className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-black text-authority-navy uppercase tracking-tighter">Environmental Stewardship</h2>
            </div>
            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-600 leading-relaxed">
                We minimize our footprint by practicing "Leave No Trace" principles. We educate our guests on preserving the natural beauty of East Java and actively participate in local conservation efforts.
              </p>
            </div>
          </section>

        </div>
        
        {/* Footer Audit Stamp */}
        <div className="mt-32 pt-12 border-t border-slate-100 flex flex-col items-center">
          <div className="p-8 bg-slate-50 border border-slate-200 rounded-3xl flex flex-col items-center">
            <Handshake className="w-12 h-12 text-safety-orange mb-4" />
            <span className="text-2xl font-black text-authority-navy uppercase tracking-tighter leading-none mb-2">TRUSTED_COMMUNITY</span>
            <span className="font-mono text-[10px] text-slate-500 tracking-[0.2em] uppercase">JVTO Standards 2026</span>
          </div>
        </div>
      </div>
    </div>
  );
}
