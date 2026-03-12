import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, CheckCircle2, ChevronRight, Lock, Fingerprint } from 'lucide-react';
import { SSOT } from '../../lib/ssot';
import { motion } from 'motion/react';

export const AuthorityShield = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="bg-authority-navy rounded-[3rem] p-8 lg:p-20 text-white relative overflow-hidden shadow-2xl border border-white/5">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
          <Shield className="w-[500px] h-[500px] text-white" />
        </div>
        <div className="absolute bottom-0 left-0 p-12 opacity-5 pointer-events-none">
          <Fingerprint className="w-[300px] h-[300px] text-white" />
        </div>
        
        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-safety-orange/10 border border-safety-orange/30 text-safety-orange text-[11px] font-mono font-bold uppercase tracking-[0.2em] mb-8">
              <Lock className="w-3 h-3" /> {SSOT.police_authority.badge}
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[0.9] uppercase">
              {SSOT.police_authority.title}
            </h2>
            <p className="text-slate-500 text-xl mb-10 leading-tight font-light">
              {SSOT.police_authority.description}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {SSOT.police_authority.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 group">
                  <div className="mt-1 bg-verified-bright/10 p-1 rounded group-hover:bg-verified-bright/20 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-verified-bright flex-shrink-0" />
                  </div>
                  <span className="text-slate-200 font-mono text-xs uppercase tracking-wider leading-tight">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <button 
              onClick={() => navigate('/verify-jvto')}
              className="group inline-flex items-center gap-3 bg-white text-authority-navy px-8 py-4 rounded-xl font-black uppercase tracking-wider transition-all hover:bg-safety-orange hover:text-white"
            >
              View Forensic Proof <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-[3rem] border border-white/10 shadow-2xl overflow-hidden group">
              <div className="scanline"></div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem]">
                <img 
                  src="https://javavolcano-touroperator.com/founder/mr-sam-tourist-police-portrait.png" 
                  alt="Officer Agung Sambuko in Official Tourist Police Uniform" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 contrast-125 scale-110 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-authority-navy via-transparent to-transparent opacity-60"></div>
              </div>
              
              <div className="absolute bottom-10 left-10 right-10 bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="h-2 w-2 rounded-full bg-safety-orange animate-pulse"></span>
                      <p className="font-mono text-[11px] text-safety-orange uppercase tracking-[0.3em] font-black">Active Duty: Ditpamobvit</p>
                    </div>
                    <p className="text-white font-black text-2xl uppercase leading-none tracking-tighter">Officer Agung Sambuko</p>
                    <p className="text-white/70 font-mono text-[11px] uppercase tracking-widest mt-2">Official Tourist Police Command</p>
                  </div>
                  <div className="verified-badge bg-verified-bright text-authority-navy px-4 py-2 text-xs">Verified_Identity</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
