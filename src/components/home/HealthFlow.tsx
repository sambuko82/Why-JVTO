import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Activity, ShieldAlert, HeartPulse, ClipboardCheck, QrCode, ChevronRight, Lock, Stethoscope } from 'lucide-react';
import { SSOT } from '../../lib/ssot';
import { motion } from 'motion/react';

export const HealthFlow = () => {
  const navigate = useNavigate();

  const steps = [
    { icon: Stethoscope, title: "Doctor Check", desc: "Real SpO₂ + BP Check", step: "01" },
    { icon: ClipboardCheck, title: "Record", desc: "Digital QR Record", step: "02" },
    { icon: QrCode, title: "Scan QR", desc: "Gate Verification", step: "03" },
    { icon: HeartPulse, title: "Clearance", desc: "Safety Approval", step: "04" }
  ];

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-20 items-center">
        {/* Left: Content & Protocol */}
        <div className="lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-safety-orange/10 border border-safety-orange/30 text-safety-orange text-[11px] font-mono font-bold uppercase tracking-[0.2em] mb-8">
              <ShieldAlert className="w-3 h-3" /> Medical "Hard Stop" Protocol
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-authority-navy leading-[0.9] mb-8 uppercase">
              Ijen Health Screening — <br />
              <span className="text-safety-orange">Mandatory, Included.</span>
            </h2>
            <p className="text-slate-600 text-xl mb-10 leading-tight font-light">
              Ijen health screening is mandatory by Indonesian law to hike Ijen. JVTO arranges your pre-ascent screening with a licensed physician. The cost is included in all Ijen packages — no extra charge.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-12">
              {steps.map((item, i) => (
                <div key={i} className="bento-card p-6 bg-white group hover:bg-slate-50 transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 rounded-lg bg-slate-50 group-hover:bg-white transition-colors">
                      <item.icon className="w-6 h-6 text-safety-orange" />
                    </div>
                    <span className="font-mono text-[11px] text-slate-500 font-bold">{item.step}</span>
                  </div>
                  <h3 className="font-black text-authority-navy uppercase leading-none mb-1">{item.title}</h3>
                  <p className="text-[11px] text-slate-500 uppercase tracking-widest font-bold">{item.desc}</p>
                </div>
              ))}
            </div>

            <button 
              onClick={() => navigate('/travel-guide/ijen-health-screening')}
              className="group inline-flex items-center gap-3 bg-authority-navy text-white px-8 py-4 rounded-xl font-black uppercase tracking-wider transition-all hover:bg-safety-orange shadow-xl shadow-authority-navy/20"
            >
              View Full Medical Protocol <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Right: Clinical Interface / Evidence */}
        <div className="lg:w-1/2 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bento-card bg-white p-8 border-slate-200 shadow-2xl relative overflow-hidden"
          >
            <div className="scanline"></div>
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="status-live"></div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-slate-500">Medical Unit: Online</span>
              </div>
              <div className="tech-badge bg-authority-navy text-white">Clinical Registry</div>
            </div>

            <div className="space-y-6 mb-10">
              <h4 className="font-black text-authority-navy uppercase text-sm tracking-wider flex items-center gap-2">
                <Activity className="w-4 h-4 text-safety-orange" /> Verified Screening Evidence
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {SSOT.proof_vault.safety.map((item, i) => (
                  <a 
                    key={i}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:border-safety-orange hover:bg-slate-50 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-safety-orange" />
                      <span className="text-xs font-bold text-authority-navy uppercase tracking-wider">{item.title}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-safety-orange transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 rounded-2xl p-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Lock className="w-16 h-16" />
              </div>
              <div className="relative z-10">
                <p className="font-mono text-[11px] text-safety-orange uppercase tracking-widest font-bold mb-2">Security Hash</p>
                <p className="font-mono text-xs text-slate-500 break-all mb-4">8F3E9A2B1C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R9S0T1U2V3W4X5Y6Z</p>
                <div className="flex items-center gap-2">
                  <div className="verified-badge">ENCRYPTED_RECORD</div>
                  <span className="font-mono text-[11px] text-slate-500 uppercase tracking-widest">v1.9-STABLE</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
