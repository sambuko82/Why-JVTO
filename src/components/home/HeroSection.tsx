import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Search, FileCheck, Activity, Lock, ChevronRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { StatusTicker } from './StatusTicker';
import { SSOT } from '../../lib/ssot';

export const HeroSection = () => {
  const navigate = useNavigate();
  const [auditStep, setAuditStep] = useState(0);
  const [isAuditing, setIsAuditing] = useState(false);
  const meta = SSOT.pages['/'];

  const auditSteps = [
    { id: 'NIB', label: 'Legal Entity', status: 'VERIFIED', icon: <FileCheck className="w-4 h-4" /> },
    { id: 'POLICE', label: 'Police Liaison', status: 'ACTIVE', icon: <ShieldCheck className="w-4 h-4" /> },
    { id: 'MEDICAL', label: 'Health Protocol', status: 'READY', icon: <Activity className="w-4 h-4" /> },
  ];

  const startAudit = () => {
    setIsAuditing(true);
    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step > auditSteps.length) {
        clearInterval(interval);
        setTimeout(() => navigate('/verify-jvto'), 500);
      } else {
        setAuditStep(step);
      }
    }, 800);
  };

  return (
    <section className="relative bg-authority-navy text-white overflow-hidden">
      {/* 60s Fast Audit Header */}
      <div className="bg-black/40 border-b border-white/5 py-3 relative z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="flex items-center gap-2">
              <div className="status-live"></div>
              <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.15em] md:tracking-[0.2em] text-safety-orange font-bold">60s Fast Audit:</span>
            </div>
            <div className="flex items-center gap-2">
              {auditSteps.map((step, idx) => (
                <div key={step.id} className="flex items-center gap-1.5 md:gap-2">
                  <div className={`h-1.5 w-6 md:w-8 rounded-full transition-all duration-500 ${auditStep > idx ? 'bg-verified-bright' : 'bg-white/10'}`}></div>
                  <span className={`font-mono text-[10px] md:text-[11px] uppercase tracking-widest hidden sm:block ${auditStep > idx ? 'text-verified-bright' : 'text-slate-500'}`}>
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4 md:gap-6">
            <div className="hidden lg:flex items-center gap-2 text-slate-500 font-mono text-[11px] uppercase tracking-widest">
              <Lock className="w-3 h-3" /> SSL_ENCRYPTED_SESSION
            </div>
            <button 
              onClick={startAudit}
              disabled={isAuditing}
              className={`font-mono text-[10px] md:text-[11px] px-3 md:px-4 py-1.5 rounded-lg border transition-all uppercase tracking-widest flex items-center gap-2 ${isAuditing ? 'bg-verified-bright/10 border-verified-bright/30 text-verified-bright' : 'bg-white/5 border-white/10 hover:bg-white/10 text-white'}`}
            >
              {isAuditing ? (
                <>
                  <div className="w-3 h-3 border-2 border-verified-bright border-t-transparent rounded-full animate-spin"></div>
                  Auditing...
                </>
              ) : (
                <>
                  <Search className="h-3 w-3" /> Run System Audit
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern z-0 opacity-10"></div>
      
      {/* Background Image with Grayscale and Gradients */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://javavolcano-touroperator.com/founder/mr-sam-tourist-police-portrait.png" 
          alt="Agung Sambuko - Founder & Tourist Police" 
          className="w-full h-full object-cover object-top opacity-30 grayscale contrast-125"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-authority-navy via-authority-navy/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-authority-navy via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 pt-20 pb-16 md:pt-24 md:pb-20 lg:pt-32 lg:pb-32">
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-safety-orange/10 border border-safety-orange/30 text-safety-orange text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] mb-6 md:mb-8"
          >
            <Lock className="w-3 h-3" /> Operational Certainty Protocol v1.9
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl xs:text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter mb-6 md:mb-8 leading-[0.85] uppercase"
          >
            {meta.h1}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-slate-300 mb-10 md:mb-12 leading-tight font-light max-w-2xl"
          >
            Private Bromo, Ijen & Tumpak Sewu volcano tours departing from Surabaya or Bali. Licensed operator No. 1102230032918. Led by an active Tourist Police officer.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-3 md:gap-4"
          >
            <button 
              onClick={() => navigate('/tours')}
              className="w-full sm:w-auto bg-safety-orange hover:bg-safety-orange/90 text-white px-8 md:px-10 py-4 md:py-5 rounded-xl font-black uppercase tracking-wider transition-all shadow-xl shadow-safety-orange/20 flex items-center justify-center gap-3 group text-sm md:text-base"
            >
              <Search className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" /> Browse Private Tours
            </button>
            <button 
              onClick={() => navigate('/verify-jvto')}
              className="w-full sm:w-auto bg-white/5 border border-white/10 hover:bg-white/10 text-white px-8 md:px-10 py-4 md:py-5 rounded-xl font-black uppercase tracking-wider transition-all flex items-center justify-center gap-3 text-sm md:text-base"
            >
              <ShieldCheck className="w-4 h-4 md:w-5 md:h-5" /> Verify Our Credentials
            </button>
          </motion.div>
        </div>
      </div>

      <StatusTicker />
    </section>
  );
};
