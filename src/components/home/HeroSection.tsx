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
    <section className="relative bg-authority-navy text-white min-h-[90vh] flex flex-col overflow-hidden">
      {/* 60s Fast Audit Header */}
      <div className="bg-slate-900/80 backdrop-blur-md border-b border-white/10 py-3 relative z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="flex items-center gap-2">
              <div className="status-live bg-safety-orange"></div>
              <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.15em] md:tracking-[0.2em] text-safety-orange font-bold">60s Fast Audit:</span>
            </div>
            <div className="flex items-center gap-2">
              {auditSteps.map((step, idx) => (
                <div key={step.id} className="flex items-center gap-1.5 md:gap-2">
                  <div className={`h-1.5 w-6 md:w-8 rounded-full transition-all duration-500 ${auditStep > idx ? 'bg-safety-orange' : 'bg-white/20'}`}></div>
                  <span className={`font-mono text-[10px] md:text-[11px] uppercase tracking-widest hidden sm:block ${auditStep > idx ? 'text-white' : 'text-white/40'}`}>
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4 md:gap-6">
            <div className="hidden lg:flex items-center gap-2 text-white/40 font-mono text-[11px] uppercase tracking-widest">
              <Lock className="w-3 h-3" /> SSL_ENCRYPTED_SESSION
            </div>
            <button 
              onClick={startAudit}
              disabled={isAuditing}
              className={`font-mono text-[10px] md:text-[11px] px-3 md:px-4 py-1.5 rounded-lg border transition-all uppercase tracking-widest flex items-center gap-2 ${isAuditing ? 'bg-safety-orange/20 border-safety-orange/50 text-safety-orange' : 'bg-white/10 border-white/20 hover:bg-white/20 text-white'}`}
            >
              {isAuditing ? (
                <>
                  <div className="w-3 h-3 border-2 border-safety-orange border-t-transparent rounded-full animate-spin"></div>
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

      {/* Full Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={SSOT.assets.find(a => a.slug === 'jvto-hero-image')?.url || 'https://javavolcano-touroperator.com/assets/img/hero/home.webp'} 
          alt={SSOT.assets.find(a => a.slug === 'jvto-hero-image')?.alt || 'Scenic view of Java volcanoes.'} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Cinematic Vignette & Gradient */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent h-40"></div>
      </div>
      
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-24 w-full">
        <div className="max-w-5xl text-center flex flex-col items-center mt-12 md:mt-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 border border-white/20 text-white text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-[0.2em] mb-8 backdrop-blur-md"
          >
            <ShieldCheck className="w-3 h-3 text-safety-orange" /> Verified Operator
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center justify-center gap-2 md:gap-3 mb-12 w-full"
          >
            <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl text-safety-orange font-bold tracking-[0.2em] uppercase drop-shadow-lg">
              Tourist Police-Led
            </span>
            <span className="block text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter uppercase text-white drop-shadow-[0_8px_8px_rgba(0,0,0,0.6)] leading-none">
              Private Volcano Tours
            </span>
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light italic text-white/90 drop-shadow-md mt-2 md:mt-4">
              in East Java
            </span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <button 
              onClick={() => navigate('/tours')}
              className="w-full sm:w-auto bg-safety-orange hover:bg-safety-orange/90 text-white px-8 md:px-12 py-4 md:py-5 rounded-xl font-black uppercase tracking-wider transition-all shadow-xl shadow-safety-orange/20 flex items-center justify-center gap-3 group text-sm md:text-base"
            >
              <Search className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" /> Browse Private Tours
            </button>
            <button 
              onClick={() => navigate('/verify-jvto')}
              className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 md:px-12 py-4 md:py-5 rounded-xl font-black uppercase tracking-wider transition-all flex items-center justify-center gap-3 text-sm md:text-base"
            >
              <Lock className="w-4 h-4 md:w-5 md:h-5 text-white/70" /> Verify Credentials
            </button>
          </motion.div>
        </div>
      </div>
      
      <StatusTicker />
    </section>
  );
};
