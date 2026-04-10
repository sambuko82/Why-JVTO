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
    <section className="relative bg-jvto-navy text-white min-h-[90vh] flex flex-col overflow-hidden">
      {/* 60s Fast Audit Header */}
      <div className="bg-slate-900/80 backdrop-blur-md border-b border-white/10 py-3 relative z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="flex items-center gap-2">
              <div className="status-live bg-jvto-orange"></div>
              <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.15em] md:tracking-[0.2em] text-jvto-orange font-bold">60s Fast Audit:</span>
            </div>
            <div className="flex items-center gap-2">
              {auditSteps.map((step, idx) => (
                <div key={step.id} className="flex items-center gap-1.5 md:gap-2">
                  <div className={`h-1.5 w-6 md:w-8 rounded-full transition-all duration-500 ${auditStep > idx ? 'bg-jvto-orange' : 'bg-white/20'}`}></div>
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
              className={`font-mono text-[10px] md:text-[11px] px-3 md:px-4 py-1.5 rounded-sm border transition-all uppercase tracking-widest flex items-center gap-2 ${isAuditing ? 'bg-jvto-orange/20 border-jvto-orange/50 text-jvto-orange' : 'bg-white/10 border-white/20 hover:bg-white/20 text-white'}`}
            >
              {isAuditing ? (
                <>
                  <div className="w-3 h-3 border-2 border-jvto-orange border-t-transparent rounded-full animate-spin"></div>
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

      {/* Full Background Video/Image with Pro Overlay Hack */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
          poster={SSOT.assets.find(a => a.slug === 'jvto-hero-image')?.url || 'https://javavolcano-touroperator.com/assets/img/hero/home.webp'}
        >
          <source src="https://javavolcano-touroperator.com/assets/video/hero.mp4" type="video/mp4" />
          {/* Fallback to image if video fails or is not found */}
        </video>
        <div className="pro-overlay" />
        
        {/* Scanline Effect - Halo Enhancement */}
        <div className="scanline opacity-10"></div>
      </div>
      
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-24 w-full">
        <div className="max-w-5xl text-center flex flex-col items-center mt-20 md:mt-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="badge-eyebrow bg-jvto-orange text-white mb-8 shadow-card shadow-jvto-orange/20"
          >
            <ShieldCheck className="w-3 h-3 text-white" /> Verified Police-Led Operator
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center justify-center gap-2 md:gap-4 mb-8 w-full"
          >
            <span className="block text-sm sm:text-xl md:text-2xl lg:text-3xl text-jvto-orange font-black tracking-[0.3em] uppercase drop-shadow-lg">
              Official Authority
            </span>
            <span className="heading-display block text-white drop-shadow-[0_12px_12px_rgba(0,0,0,0.8)]">
              Private Volcano Tours
            </span>
            <span className="block text-lg sm:text-2xl md:text-4xl lg:text-5xl font-light italic text-white/90 drop-shadow-md mt-2">
              East Java, Indonesia
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-jvto-navy/60 backdrop-blur-md border border-white/10 p-6 rounded-lg mb-12 max-w-3xl"
          >
            <div className="flex items-start gap-4 text-left">
              <div className="bg-jvto-orange/20 p-2 rounded-md mt-1">
                <ShieldCheck className="w-6 h-6 text-jvto-orange" />
              </div>
              <div>
                <h3 className="text-jvto-orange font-mono text-xs uppercase tracking-widest mb-2">Brand Core & Safety Protocol</h3>
                <p className="text-white/90 text-sm md:text-base leading-relaxed font-medium">
                  {SSOT.organization.brandCore}
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Single CTA Protocol: Primary is dominant, Secondary is Ghost/Outline */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto"
          >
            <button 
              onClick={() => navigate('/tours')}
              className="btn-primary w-full sm:w-auto flex items-center justify-center gap-4 group text-sm md:text-lg py-5 px-12"
            >
              <Search className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" /> 
              Browse Private Tours
            </button>
            <button 
              onClick={() => navigate('/verify-jvto')}
              className="btn-secondary w-full sm:w-auto border-white/20 text-white hover:bg-white/10 flex items-center justify-center gap-4 text-sm md:text-lg py-5 px-12"
            >
              <Lock className="w-5 h-5 md:w-6 md:h-6 text-jvto-orange" /> 
              Verify Credentials
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
