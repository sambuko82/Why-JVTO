import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, 
  Lock, 
  EyeOff, 
  Database, 
  ArrowLeft, 
  CheckCircle2,
  Info,
  ChevronRight,
  FileText,
  UserCheck,
  Server
} from 'lucide-react';
import { SSOT } from '../../../lib/ssot';
import { PageSEO } from '../../../components/PageSEO';
import { motion } from 'motion/react';
import { AuditStamp } from '../../../components/AuditStamp';

export default function PrivacyPolicy() {
  const navigate = useNavigate();
  const meta = SSOT.pages['/policy/privacy'];

  const sections = [
    {
      title: '01. Data Collection',
      desc: 'We collect only the essential information required for tour operations, including your name, contact details, and mandatory health screening data.',
      icon: Database
    },
    {
      title: '02. Purpose of Use',
      desc: 'Your data is used exclusively for booking permits, securing insurance, coordinating with police/medical teams, and communicating tour updates.',
      icon: UserCheck
    },
    {
      title: '03. Data Sharing',
      desc: 'We share your information only with official government bodies (BBKSDA, Police) and medical partners as required by local regulations.',
      icon: Server
    },
    {
      title: '04. Data Protection',
      desc: 'We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, or disclosure.',
      icon: ShieldCheck
    }
  ];

  return (
    <div className="min-h-screen bg-audit-white text-authority-navy font-sans selection:bg-safety-orange/30 pb-24 md:pb-0">
      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 grid-pattern opacity-5 pointer-events-none"></div>
      
      {/* Header */}
      <div className="border-b border-slate-200 bg-audit-white/80 relative z-40 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <button 
            onClick={() => navigate('/travel-guide')}
            className="group flex items-center gap-3 text-[11px] font-mono font-bold text-slate-500 hover:text-authority-navy transition-all uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Travel Guide
          </button>
          <div className="flex items-center gap-3 text-safety-orange text-[11px] font-mono font-bold uppercase tracking-[0.2em]">
            <Lock className="w-4 h-4" /> Privacy_Doc_v1.9
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 md:py-24 max-w-4xl relative z-10">
        <PageSEO route="/policy/privacy" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-2 mb-6">
            <EyeOff className="w-4 h-4 text-safety-orange" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-slate-500">Data Sovereignty</span>
          </div>
          <h1 className="text-4xl md:text-8xl font-black text-authority-navy mb-8 leading-[0.85] uppercase tracking-tighter">
            {meta?.h1 || 'PRIVACY POLICY.'}
          </h1>
          <p className="text-slate-500 text-lg md:text-xl leading-tight font-light max-w-2xl">
            We respect your privacy and handle your data with the same level of integrity we apply to our tour operations. Your information is never sold or used for marketing without consent.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-24 md:mb-32">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bento-card bg-white p-8 md:p-10 relative overflow-hidden group"
            >
              <div className="relative z-10">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-slate-50 text-authority-navy flex items-center justify-center border border-slate-100 mb-6 md:mb-8 group-hover:scale-110 transition-transform">
                  <section.icon className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <h3 className="text-xl md:text-2xl font-black text-authority-navy uppercase mb-4 tracking-tight">
                  {section.title}
                </h3>
                <p className="text-slate-500 text-base md:text-lg leading-tight font-light">
                  {section.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GDPR Compliance Notice */}
        <div className="p-8 md:p-12 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] md:rounded-[3rem] relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-authority-navy text-white flex items-center justify-center shrink-0 shadow-xl">
              <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-verified-bright" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-black text-authority-navy uppercase mb-2 tracking-tight">GDPR-Aligned Practices</h3>
              <p className="text-slate-600 text-base md:text-lg leading-tight font-light">
                We follow best practices for data protection and transparency. You have the right to request access to your data or its deletion at any time by contacting our support team.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Audit Stamp */}
        <AuditStamp title="PRIVACY_VERIFIED" subtitle="Registry 2026" system="JVTO_DOCS_V1.9" />
      </div>
    </div>
  );
}
