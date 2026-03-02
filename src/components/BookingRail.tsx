import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, ShieldCheck, ArrowRight, Lock, CheckCircle2 } from 'lucide-react';
import { SSOT } from '../lib/ssot';

export const BookingRail = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [auditProgress, setAuditProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show rail after scrolling 300px
      setIsVisible(scrollY > 300);

      // Calculate progress based on scroll
      const progress = Math.min(100, Math.round((scrollY / (documentHeight - windowHeight)) * 100));
      setAuditProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/6281235061451?text=${encodeURIComponent("I have audited the JVTO infrastructure and would like to initiate a secure booking for an Ijen expedition.")}`;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-[100] bg-authority-navy/95 backdrop-blur-xl border-t border-white/10 p-4 md:p-6 shadow-[0_-10px_40px_rgba(0,0,0,0.3)]"
        >
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 h-[2px] bg-verified-bright transition-all duration-300" style={{ width: `${auditProgress}%` }}></div>

          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex p-3 bg-verified-bright/10 rounded-2xl text-verified-bright relative">
                <ShieldCheck className="w-6 h-6" />
                {auditProgress > 80 && (
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1"
                  >
                    <CheckCircle2 className="w-4 h-4 text-verified-bright fill-authority-navy" />
                  </motion.div>
                )}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className={`flex h-2 w-2 rounded-full ${auditProgress > 90 ? 'bg-verified-bright' : 'bg-safety-orange'} animate-pulse`}></span>
                  <span className="font-mono text-[10px] text-white/60 font-bold uppercase tracking-widest">
                    {auditProgress < 50 ? 'Audit_In_Progress' : auditProgress < 90 ? 'Verification_Deepening' : 'Audit_Complete_Ready_To_Deploy'}
                  </span>
                </div>
                <h4 className="text-white font-black text-lg md:text-xl uppercase leading-none">
                  {auditProgress > 90 ? 'Verified Booking Protocol Active' : 'Continue Your Audit'}
                </h4>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 md:flex-none flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-black uppercase tracking-tight transition-all group shadow-lg ${
                  auditProgress > 70 
                    ? 'bg-safety-orange hover:bg-safety-orange/90 text-white shadow-safety-orange/20' 
                    : 'bg-white/10 text-white/40 cursor-not-allowed'
                }`}
                onClick={(e) => {
                  if (auditProgress <= 70) {
                    e.preventDefault();
                    window.scrollTo({ top: window.scrollY + 500, behavior: 'smooth' });
                  }
                }}
              >
                <MessageSquare className="w-5 h-5" />
                <span>{auditProgress > 70 ? 'Deploy Verified Booking' : 'Audit More to Unlock'}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <div className="hidden lg:flex flex-col items-end">
                <div className="flex items-center gap-2 text-white/40 font-mono text-[8px] uppercase tracking-widest mb-1">
                  <Lock className="w-3 h-3" /> Encrypted_Channel
                </div>
                <span className="text-white/60 font-mono text-[10px]">Audit_Score: {auditProgress}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
