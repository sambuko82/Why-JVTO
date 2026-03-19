import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  CreditCard, 
  CheckCircle2, 
  ArrowLeft, 
  Lock, 
  ShieldCheck,
  Info,
  ChevronRight,
  GraduationCap,
  Ticket,
  Zap,
  ExternalLink
} from 'lucide-react';
import { SSOT } from '../../../lib/ssot';
import { PageSEO } from '../../../components/PageSEO';
import { motion } from 'motion/react';
import { AuditStamp } from '../../../components/AuditStamp';

export default function ISICStudentPackage() {
  const navigate = useNavigate();
  const meta = SSOT.pages['/isic/student-package'];

  const benefits = [
    { title: 'Exclusive Pricing', desc: 'Special discounted rates for verified ISIC cardholders on all private expeditions.', icon: Zap },
    { title: 'Verified Status', desc: 'Seamless verification through our official partnership with ISIC Indonesia.', icon: CheckCircle2 },
    { title: 'Full Inclusions', desc: 'Same high-standard safety protocols, private transport, and expert crew.', icon: ShieldCheck }
  ];

  const steps = [
    { id: '01', title: 'Valid ISIC Card', desc: 'Ensure your International Student Identity Card is active and valid.' },
    { id: '02', title: 'Submit Verification', desc: 'Provide your ISIC number during the booking inquiry process.' },
    { id: '03', title: 'Receive Discount', desc: 'Our team will apply the student package rate to your final quote.' }
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-yellow-400 pb-24 md:pb-0">
      {/* Brutalist Grid */}
      <div className="fixed inset-0 grid grid-cols-4 md:grid-cols-12 pointer-events-none opacity-10">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="border-r border-black h-full"></div>
        ))}
      </div>
      
      {/* Header */}
      <div className="border-b-4 border-black bg-white relative z-40">
        <div className="container mx-auto px-6 py-8 flex items-center justify-between">
          <button 
            onClick={() => navigate('/')}
            className="group flex items-center gap-3 text-sm font-black uppercase tracking-tighter hover:text-yellow-500 transition-colors"
          >
            <ArrowLeft className="w-6 h-6 group-hover:-translate-x-2 transition-transform" /> Back to Hub
          </button>
          <div className="flex items-center gap-3 bg-black text-white px-4 py-2 text-xs font-black uppercase tracking-widest">
            <Lock className="w-4 h-4 text-yellow-400" /> ISIC_AUTH_v1.9
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 md:py-24 max-w-6xl relative z-10">
        <PageSEO route="/isic/student-package" />
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-32"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-yellow-400 p-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <GraduationCap className="w-8 h-8" />
            </div>
            <span className="font-black text-lg md:text-xl uppercase tracking-tighter">Official ISIC Partner</span>
          </div>
          <h1 className="text-5xl md:text-9xl font-black mb-12 leading-[0.8] uppercase tracking-tighter">
            {meta?.h1 || 'STUDENT <br />EXPEDITIONS.'}
          </h1>
          <p className="text-xl md:text-2xl leading-tight font-bold max-w-2xl border-l-8 border-black pl-6 md:pl-8">
            Verified student pricing for the next generation of explorers. Same safety, same quality, better rates.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-0 border-4 border-black mb-16 md:mb-32 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          {benefits.map((benefit, index) => (
            <div key={index} className={`p-8 md:p-12 ${index !== benefits.length - 1 ? 'md:border-r-4 border-b-4 md:border-b-0 border-black' : ''} hover:bg-yellow-400 transition-colors group`}>
              <benefit.icon className="w-10 h-10 md:w-12 md:h-12 mb-6 md:mb-8 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl md:text-3xl font-black uppercase mb-4 tracking-tighter">{benefit.title}</h3>
              <p className="text-base md:text-lg font-bold leading-tight">{benefit.desc}</p>
            </div>
          ))}
        </div>

        {/* Verification Steps */}
        <div className="mb-16 md:mb-32">
          <h2 className="text-3xl md:text-4xl font-black uppercase mb-12 md:mb-16 tracking-tighter">How to Claim</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-6xl md:text-8xl font-black text-slate-100 absolute -top-8 md:-top-12 -left-4 -z-10">{step.id}</div>
                <h3 className="text-xl md:text-2xl font-black uppercase mb-4 tracking-tighter">{step.title}</h3>
                <p className="text-base md:text-lg font-bold leading-tight text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partner Verification Link */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-black text-white p-8 md:p-16 rounded-none border-4 border-black shadow-[8px_8px_0px_0px_rgba(250,204,21,1)] md:shadow-[16px_16px_0px_0px_rgba(250,204,21,1)] relative overflow-hidden group"
        >
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-black uppercase leading-none mb-6 tracking-tighter">Verify our <br />Partnership.</h2>
              <p className="text-yellow-400 text-lg md:text-xl font-bold leading-tight mb-8">
                JVTO is an officially recognized partner of ISIC Indonesia. You can verify our status directly on the ISIC global database.
              </p>
              <a 
                href="https://www.isic.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-white font-black uppercase tracking-widest hover:text-yellow-400 transition-colors"
              >
                Visit ISIC Global <ExternalLink className="w-5 h-5" />
              </a>
            </div>
            <div className="w-40 h-40 md:w-48 md:h-48 bg-white p-6 md:p-8 border-4 border-yellow-400 rotate-3 group-hover:rotate-0 transition-transform flex items-center justify-center shrink-0">
              <img 
                src="https://javavolcano-touroperator.com/partner/screensot-isic-page-jvto.png" 
                alt="ISIC Verification" 
                className="w-full h-auto grayscale group-hover:grayscale-0 transition-all"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </motion.div>

        {/* Footer Audit Stamp */}
        <div className="mt-24 md:mt-48 pt-12 border-t-4 border-black flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-black flex items-center justify-center text-yellow-400 font-black shrink-0">JV</div>
            <div>
              <div className="font-black uppercase tracking-tighter text-sm md:text-base">ISIC_VERIFIED_PARTNER</div>
              <div className="text-[10px] md:text-xs font-bold text-slate-400">Registry 2026 // SYSTEM_AUTH_v1.9</div>
            </div>
          </div>
          <button 
            onClick={() => navigate('/booking')}
            className="w-full md:w-auto bg-yellow-400 text-black px-12 py-6 border-4 border-black font-black uppercase tracking-widest shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
          >
            Book Student Package
          </button>
        </div>
      </div>
    </div>
  );
}
