import React, { useState } from 'react';
import { Activity, Stethoscope, FileCheck, ArrowLeft, ShieldCheck, HeartPulse, AlertTriangle, CheckCircle2, Lock, Fingerprint, Search, Database, ShieldAlert, ClipboardCheck, QrCode, ChevronRight, UserCheck, Timer, FileDigit } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SSOT } from '../../lib/ssot';
import { motion, AnimatePresence } from 'motion/react';
import { BookingRail } from '../../components/BookingRail';

export default function IjenHealthScreening() {
  const navigate = useNavigate();
  const onBack = () => navigate('/');
  const [activeStep, setActiveStep] = useState(0);

  const parameters = [
    { 
      icon: HeartPulse, 
      title: "Blood Pressure & Heart Rate", 
      desc: "Hypertension (High BP) is a major risk factor at altitude. We screen for resting heart rate anomalies before ascent.",
      color: "text-red-500",
      bg: "bg-red-500/10"
    },
    { 
      icon: Activity, 
      title: "Oxygen Saturation (SpO2)", 
      desc: "We monitor oxygen levels to detect early signs of hypoxia. Anything below 92% triggers a mandatory safety review.",
      color: "text-verified-bright",
      bg: "bg-verified-bright/10"
    },
    { 
      icon: AlertTriangle, 
      title: "\"Hard Stop\" Authority", 
      desc: "Our medical team has the absolute authority to cancel a climb if vitals are unsafe. No refunds on safety, but full credits provided.",
      color: "text-safety-orange",
      bg: "bg-safety-orange/10"
    }
  ];

  const proceduralFlow = [
    { title: "Clinical Check", icon: <Stethoscope className="w-6 h-6" />, desc: "Vital signs (BP, SpO2, HR) are measured by a certified medic." },
    { title: "Data Recording", icon: <FileDigit className="w-6 h-6" />, desc: "Results are logged into the JVTO Health Ledger for physician review." },
    { title: "QR Generation", icon: <QrCode className="w-6 h-6" />, desc: "A unique 'Fit-to-Climb' QR code is issued for gate verification." },
  ];

  return (
    <div className="min-h-screen bg-audit-white text-authority-navy font-sans selection:bg-safety-orange/30 pb-24 md:pb-0">
      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 grid-pattern opacity-5 pointer-events-none"></div>
      
      {/* Header */}
      <div className="border-b border-slate-200 bg-audit-white/80 relative z-40 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="group flex items-center gap-3 text-[10px] font-mono font-bold text-slate-400 hover:text-authority-navy transition-all uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Safety Hub
          </button>
          <div className="flex items-center gap-3 text-safety-orange text-[10px] font-mono font-bold uppercase tracking-[0.2em]">
            <Activity className="w-4 h-4" /> Medical Protocol v2.0
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24 max-w-6xl relative z-10">
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-safety-orange/10 border border-safety-orange/30 text-safety-orange text-[10px] font-mono font-bold uppercase tracking-[0.2em] mb-8">
            <Stethoscope className="w-4 h-4" /> Supervised by Licensed Physician
          </div>
          <h1 className="text-5xl md:text-9xl font-black text-authority-navy mb-8 leading-[0.85] uppercase tracking-tighter">
            MEDICAL <br />
            <span className="text-safety-orange">OVERSIGHT.</span>
          </h1>
          <p className="text-2xl text-slate-500 max-w-3xl mx-auto leading-tight font-light">
            We don't guess with your health. Access to the Ijen crater requires clearance from our dedicated medical unit, enforcing a <span className="font-bold text-safety-orange uppercase">"{SSOT.health_protocol.policy}"</span>.
          </p>
        </motion.div>

        {/* Procedural Flow (Check -> Record -> Scan QR) */}
        <section className="mb-32">
          <div className="flex items-center gap-2 mb-12 justify-center">
            <Timer className="w-4 h-4 text-safety-orange" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">The Medical Clearance Flow</span>
          </div>
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connector Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-slate-100 -translate-y-1/2 z-0"></div>
            
            {proceduralFlow.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onMouseEnter={() => setActiveStep(idx)}
                className={`relative z-10 bento-card p-10 text-center transition-all duration-500 group ${activeStep === idx ? 'bg-authority-navy text-white scale-105 shadow-2xl' : 'bg-white'}`}
              >
                <div className={`w-20 h-20 rounded-[2rem] mx-auto mb-8 flex items-center justify-center transition-all duration-500 ${activeStep === idx ? 'bg-safety-orange text-white' : 'bg-slate-50 text-slate-400'}`}>
                  {step.icon}
                </div>
                <div className={`font-mono text-[10px] uppercase tracking-widest mb-4 ${activeStep === idx ? 'text-safety-orange' : 'text-slate-400'}`}>Step 0{idx + 1}</div>
                <h3 className="text-2xl font-black uppercase leading-none mb-4">{step.title}</h3>
                <p className={`text-sm leading-tight font-light ${activeStep === idx ? 'text-slate-300' : 'text-slate-500'}`}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Doctor Verification Block */}
        <section className="mb-32">
          <div className="bento-card bg-white p-0 overflow-hidden shadow-2xl border-slate-200">
            <div className="grid lg:grid-cols-5">
              
              {/* Left: Doctor Profile */}
              <div className="lg:col-span-2 bg-authority-navy p-12 flex flex-col justify-center relative overflow-hidden">
                <div className="scanline"></div>
                <div className="relative z-10">
                  <div className="w-24 h-24 bg-white/10 rounded-3xl flex items-center justify-center mb-8 text-verified-bright border border-white/10 backdrop-blur-sm">
                    <Stethoscope className="w-12 h-12" />
                  </div>
                  <h2 className="text-4xl font-black text-white mb-2 uppercase leading-none tracking-tighter">{SSOT.medical.doctor.name}</h2>
                  <p className="text-verified-bright font-black text-lg uppercase tracking-widest mb-12">{SSOT.medical.doctor.affiliation}</p>
                  
                  <div className="space-y-8">
                    <div>
                      <div className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-4">SIP (Practice License)</div>
                      <div className="font-mono text-white text-sm bg-black/40 p-6 rounded-2xl border border-white/10 break-all shadow-inner">
                        {SSOT.medical.doctor.sip}
                      </div>
                    </div>
                    <a 
                      href="https://satusehat.kemkes.go.id/sdmk" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 text-[10px] font-black text-verified-bright uppercase tracking-widest hover:text-white transition-colors"
                    >
                      <ShieldCheck className="w-5 h-5" /> Verify on SatuSehat <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right: The Protocol */}
              <div className="lg:col-span-3 p-16 bg-white relative">
                <div className="absolute top-0 right-0 p-16 opacity-[0.02] pointer-events-none">
                  <HeartPulse className="w-96 h-96" />
                </div>
                <div className="flex items-center justify-between mb-12 relative z-10">
                  <h3 className="text-3xl font-black text-authority-navy uppercase tracking-tighter flex items-center gap-4">
                    <Activity className="w-8 h-8 text-safety-orange" />
                    Mandatory Screening Parameters
                  </h3>
                  <div className="tech-badge bg-slate-900 text-white px-4 py-2">Clinical_v2.0</div>
                </div>
                
                <div className="space-y-12 relative z-10">
                  {parameters.map((param, i) => (
                    <div key={i} className="flex gap-8 group">
                      <div className={`w-20 h-20 rounded-[2rem] ${param.bg} flex items-center justify-center shrink-0 border border-slate-100 group-hover:scale-110 transition-transform duration-500`}>
                        <param.icon className={`w-10 h-10 ${param.color}`} />
                      </div>
                      <div>
                        <h4 className="text-authority-navy font-black text-2xl uppercase leading-none mb-3">{param.title}</h4>
                        <p className="text-slate-500 text-lg leading-tight font-light">
                          {param.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sample Certificate Section */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-verified-bright/10 border border-verified-bright/30 text-verified-bright text-[10px] font-mono font-bold uppercase tracking-[0.2em] mb-6">
              <QrCode className="w-4 h-4" /> Digital Health Ledger
            </div>
            <h2 className="text-5xl font-black text-authority-navy uppercase mb-6 tracking-tighter">Fit-to-Climb Certificate</h2>
            <p className="text-slate-500 text-xl font-light uppercase tracking-widest max-w-2xl mx-auto">
              Every guest receives a digital clearance certificate upon passing the screening.
            </p>
          </div>

          <div className="bento-card bg-white p-16 shadow-2xl border-slate-200 relative overflow-hidden">
            <div className="scanline"></div>
            {/* Watermark */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
              <ShieldCheck className="w-[600px] h-[600px]" />
            </div>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-start border-b-4 border-authority-navy pb-12 mb-12 gap-8">
                <div>
                  <h3 className="text-6xl font-black uppercase tracking-tighter leading-none mb-3">Fit-to-Climb</h3>
                  <p className="font-mono text-sm text-slate-500 uppercase tracking-[0.4em]">Ijen Crater Expedition Clearance</p>
                </div>
                <div className="text-right">
                  <div className="font-mono text-[10px] font-black uppercase text-slate-400 tracking-widest mb-3">Certificate ID</div>
                  <div className="font-mono font-black text-3xl text-authority-navy bg-slate-50 px-8 py-4 rounded-2xl border border-slate-100 shadow-inner">JVTO-MED-2026-X92</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-16 mb-16">
                <div>
                  <div className="font-mono text-[10px] font-black uppercase text-slate-400 tracking-widest mb-4">Guest Name</div>
                  <div className="text-5xl font-black text-authority-navy uppercase tracking-tighter">Sarah Jenkins</div>
                </div>
                <div>
                  <div className="font-mono text-[10px] font-black uppercase text-slate-400 tracking-widest mb-4">Date of Screening</div>
                  <div className="font-mono text-2xl font-bold text-authority-navy border-b border-slate-100 pb-2">October 12, 2026</div>
                </div>
              </div>

              <div className="bg-slate-900 text-white p-12 rounded-[3rem] mb-16 relative overflow-hidden">
                <div className="absolute inset-0 grid-pattern opacity-10"></div>
                <div className="grid grid-cols-3 gap-12 text-center relative z-10">
                  <div>
                    <div className="font-mono text-[10px] font-black uppercase text-slate-500 tracking-widest mb-4">SpO2</div>
                    <div className="text-5xl font-black text-verified-bright">98%</div>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] font-black uppercase text-slate-500 tracking-widest mb-4">BP</div>
                    <div className="text-5xl font-black text-verified-bright">110/70</div>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] font-black uppercase text-slate-500 tracking-widest mb-4">HR</div>
                    <div className="text-5xl font-black text-verified-bright">72 bpm</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-end gap-12">
                <div className="w-full md:w-auto">
                  <div className="font-mono text-[10px] font-black uppercase text-slate-400 tracking-widest mb-6">Supervising Doctor</div>
                  <div className="text-3xl font-black text-authority-navy uppercase border-b-4 border-authority-navy pb-3 mb-3 inline-block min-w-[350px]">
                    {SSOT.medical.doctor.name}
                  </div>
                  <div className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">{SSOT.medical.doctor.sip}</div>
                </div>
                <div className="text-right">
                  <div className="verified-badge bg-gradient-to-r from-verified-bright to-verified-lime text-authority-navy px-10 py-5 text-lg shadow-2xl">Medically Cleared</div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

      </div>

      {/* GLOBAL BOOKING RAIL */}
      <BookingRail />
    </div>
  );
}
