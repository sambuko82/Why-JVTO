import React from 'react';
import { ShieldCheck, Activity, Lock, Search, FileCheck, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

const trustSignals = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-safety-orange" />,
    title: "Tourist Police-Led",
    desc: "Founded and led by active Tourist Police officer Bripka Agung Sambuko, ensuring direct liaison with authorities and real-time safety updates.",
    link: "/why-jvto/safety-leadership"
  },
  {
    icon: <Activity className="w-8 h-8 text-safety-orange" />,
    title: "Mandatory Health Screening",
    desc: "Real SpO₂ and blood pressure check by licensed physician dr. Ahmad Irwandanu included in all Ijen tour packages.",
    link: "/travel-guide/ijen-health-screening"
  },
  {
    icon: <Lock className="w-8 h-8 text-safety-orange" />,
    title: "Licensed Operator",
    desc: "Registered PT Java Volcano Rendezvous (NIB No. 1102230032918). Verify our legal standing in our Proof Library.",
    link: "/verify-jvto"
  }
];

export const TrustSignals = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 md:py-24 bg-authority-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern z-0 opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 md:gap-8 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-safety-orange/10 border border-safety-orange/30 text-safety-orange text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] mb-4 md:mb-6">
              <Award className="w-3 h-3" /> Trust Infrastructure
            </div>
            <h2 className="text-3xl xs:text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9]">
              Why Trust <br />
              <span className="text-safety-orange">JVTO?</span>
            </h2>
          </div>
          <p className="text-slate-500 font-light max-w-sm leading-tight text-sm md:text-base">
            Most tour operators are sales-first. JVTO was built by a police officer who watched tourists get hurt by operators who prioritized revenue over safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {trustSignals.map((signal, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => navigate(signal.link)}
              className="p-6 md:p-10 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-safety-orange/30 transition-all group cursor-pointer"
            >
              <div className="mb-6 md:mb-8 p-3 md:p-4 rounded-2xl bg-white/5 w-fit group-hover:scale-110 transition-transform">
                {signal.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-4">
                {signal.title}
              </h3>
              <p className="text-slate-500 leading-relaxed font-light mb-6 md:mb-8 text-sm md:text-base">
                {signal.desc}
              </p>
              <div className="flex items-center gap-2 text-safety-orange font-mono text-[11px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                Learn More <Search className="w-3 h-3" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 md:mt-20 p-6 md:p-10 rounded-3xl bg-gradient-to-r from-safety-orange/20 to-transparent border border-safety-orange/30 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4 md:gap-6">
            <div className="p-3 md:p-4 rounded-full bg-safety-orange/20">
              <FileCheck className="w-6 h-6 md:w-8 md:h-8 text-safety-orange" />
            </div>
            <div>
              <h4 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-1">
                Forensic Verification
              </h4>
              <p className="text-slate-500 font-light text-[10px] md:text-sm uppercase tracking-widest">
                Audit our legal entity, police liaison, and medical protocols in real-time.
              </p>
            </div>
          </div>
          <button 
            onClick={() => navigate('/verify-jvto')}
            className="w-full md:w-auto bg-safety-orange text-white px-8 md:px-10 py-4 md:py-5 rounded-xl font-black uppercase tracking-wider transition-all shadow-xl shadow-safety-orange/20 hover:scale-105 text-sm md:text-base"
          >
            Start System Audit
          </button>
        </div>
      </div>
    </section>
  );
};
