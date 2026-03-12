import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, ShieldCheck, MessageSquare, ChevronRight, Fingerprint, Globe, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-authority-navy text-white py-32 px-6 relative overflow-hidden border-t border-white/5">
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-20 mb-32">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-safety-orange/10 border border-safety-orange/30 text-safety-orange text-[11px] font-mono font-bold uppercase tracking-[0.2em] mb-8">
              <Lock className="w-3 h-3" /> Secure Booking Protocol
            </div>
            <h2 className="text-4xl md:text-7xl font-black leading-[0.9] mb-8 uppercase">
              Ready for <br />
              <span className="text-safety-orange">Operational Certainty?</span>
            </h2>
            <p className="text-slate-500 text-xl leading-tight font-light mb-12">
              Don't leave your safety to chance. Join the elite group of travelers who prioritize verification over marketing.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button className="group bg-safety-orange hover:bg-safety-orange/90 text-white px-10 py-5 rounded-xl font-black uppercase tracking-wider transition-all shadow-xl shadow-safety-orange/20 flex items-center justify-center gap-3">
                Book Private Expedition <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => navigate('/why-jvto')}
                className="group bg-white/5 border border-white/10 hover:bg-white/10 text-white px-10 py-5 rounded-xl font-black uppercase tracking-wider transition-all flex items-center justify-center gap-3"
              >
                <HelpCircle className="w-5 h-5" /> Technical FAQ
              </button>
              <button className="group bg-white/5 border border-white/10 hover:bg-white/10 text-white px-10 py-5 rounded-xl font-black uppercase tracking-wider transition-all flex items-center justify-center gap-3">
                <MessageSquare className="w-5 h-5" /> WhatsApp Mr. Sam
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bento-card bg-white/5 border-white/10 p-10 backdrop-blur-xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700">
              <div className="scanline"></div>
              <ShieldCheck className="w-20 h-20 text-verified-bright mb-8" />
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-8">
                  <span className="font-mono text-[11px] text-slate-500 uppercase tracking-widest">Entity Status</span>
                  <div className="verified-badge">VERIFIED_2026</div>
                </div>
                <div className="flex items-center justify-between gap-8">
                  <span className="font-mono text-[11px] text-slate-500 uppercase tracking-widest">Security Level</span>
                  <span className="font-mono text-[11px] text-verified-bright uppercase font-black">HIGH_STAKES</span>
                </div>
                <div className="flex items-center justify-between gap-8">
                  <span className="font-mono text-[11px] text-slate-500 uppercase tracking-widest">Data Integrity</span>
                  <span className="font-mono text-[11px] text-verified-bright uppercase font-black">100%_AUDITED</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Fingerprint className="w-4 h-4 text-slate-500" />
              <span className="font-mono text-[11px] text-slate-500 uppercase tracking-widest">SHA-256: 8F3E...9A2B</span>
            </div>
            <div className="h-4 w-px bg-white/10"></div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-slate-500" />
              <span className="font-mono text-[11px] text-slate-500 uppercase tracking-widest">Schema.org Trust Graph Injected</span>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="font-mono text-[11px] text-slate-500 uppercase tracking-[0.2em] mb-2">
              &copy; 2026 PT Java Volcano Rendezvous. All Rights Reserved.
            </p>
            <p className="font-mono text-[11px] text-slate-500 uppercase tracking-widest">
              Verified Entity // Bureaucratic Chic v1.9
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
