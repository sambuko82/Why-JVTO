import React from 'react';
import { ShieldCheck, Activity, Lock, Search, FileCheck, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

const trustSignals = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-safety-orange" />,
    title: "Police Leadership",
    desc: "Founded and led by active Tourist Police, ensuring direct liaison with authorities and real-time safety updates.",
    link: "/why-jvto/safety-leadership"
  },
  {
    icon: <Activity className="w-8 h-8 text-safety-orange" />,
    title: "Medical Protocols",
    desc: "Strict health screening and medical clearance protocols for high-altitude volcano trekking.",
    link: "/travel-guide/ijen-health-screening"
  },
  {
    icon: <Lock className="w-8 h-8 text-safety-orange" />,
    title: "Cryptographic Evidence",
    desc: "Every claim is backed by verifiable hashes and official documentation in our Forensic Locker.",
    link: "/verify-jvto"
  }
];

export const TrustSignals = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-authority-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern z-0 opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-safety-orange/10 border border-safety-orange/30 text-safety-orange text-[11px] font-mono font-bold uppercase tracking-[0.2em] mb-6">
              <Award className="w-3 h-3" /> Trust Infrastructure
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9]">
              Why Trust <br />
              <span className="text-safety-orange">JVTO?</span>
            </h2>
          </div>
          <p className="text-slate-500 font-light max-w-sm leading-tight">
            In the Ring of Fire, safety is not a marketing promise. It is achieved through Police Leadership, Medical Protocols, and Cryptographic Evidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustSignals.map((signal, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => navigate(signal.link)}
              className="p-10 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-safety-orange/30 transition-all group cursor-pointer"
            >
              <div className="mb-8 p-4 rounded-2xl bg-white/5 w-fit group-hover:scale-110 transition-transform">
                {signal.icon}
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4">
                {signal.title}
              </h3>
              <p className="text-slate-500 leading-relaxed font-light mb-8">
                {signal.desc}
              </p>
              <div className="flex items-center gap-2 text-safety-orange font-mono text-[11px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                Learn More <Search className="w-3 h-3" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-10 rounded-3xl bg-gradient-to-r from-safety-orange/20 to-transparent border border-safety-orange/30 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="p-4 rounded-full bg-safety-orange/20">
              <FileCheck className="w-8 h-8 text-safety-orange" />
            </div>
            <div>
              <h4 className="text-2xl font-black uppercase tracking-tight mb-1">
                Forensic Verification
              </h4>
              <p className="text-slate-500 font-light text-sm uppercase tracking-widest">
                Audit our legal entity, police liaison, and medical protocols in real-time.
              </p>
            </div>
          </div>
          <button 
            onClick={() => navigate('/verify-jvto')}
            className="w-full md:w-auto bg-safety-orange text-white px-10 py-5 rounded-xl font-black uppercase tracking-wider transition-all shadow-xl shadow-safety-orange/20 hover:scale-105"
          >
            Start System Audit
          </button>
        </div>
      </div>
    </section>
  );
};
