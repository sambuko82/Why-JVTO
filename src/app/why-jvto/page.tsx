import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  HelpCircle, 
  Search, 
  ArrowLeft, 
  ChevronDown, 
  ChevronUp, 
  Lock, 
  Database, 
  ShieldCheck,
  MessageSquare,
  FileText,
  Activity,
  UserCheck,
  Shield,
  Eye,
  Users,
  Star,
  Zap,
  ChevronRight
} from 'lucide-react';
import { SSOT } from '../../lib/ssot';
import { motion, AnimatePresence } from 'motion/react';
import { BookingRail } from '../../components/BookingRail';
import { AuditStamp } from '../../components/AuditStamp';

export default function WhyJVTOHub() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFaqs = SSOT.faq.filter(faq => 
    faq.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
    faq.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const trustStack = [
    {
      id: 'safety',
      title: 'Safety Leadership',
      description: 'Medical-grade screening and police-led security protocols.',
      icon: Shield,
      path: '/why-jvto/safety-leadership',
      color: 'text-verified-bright',
      bg: 'bg-verified-bright/5'
    },
    {
      id: 'proof',
      title: 'Proof & Transparency',
      description: 'Immutable registry of licenses, insurance, and legal identity.',
      icon: Eye,
      path: '/verify-jvto',
      color: 'text-safety-orange',
      bg: 'bg-safety-orange/5'
    },
    {
      id: 'team',
      title: 'Our Team',
      description: 'Meet the local experts and specialized field operators.',
      icon: Users,
      path: '/team',
      color: 'text-authority-navy',
      bg: 'bg-authority-navy/5'
    },
    {
      id: 'reviews',
      title: 'Guest Voices',
      description: 'Verified reputation across global travel platforms.',
      icon: Star,
      path: '/verify-jvto#reputation',
      color: 'text-amber-500',
      bg: 'bg-amber-500/5'
    },
    {
      id: 'difference',
      title: 'The JVTO Difference',
      description: 'Why we choose operational integrity over mass-market scale.',
      icon: Zap,
      path: '/why-jvto/the-jvto-difference',
      color: 'text-indigo-500',
      bg: 'bg-indigo-500/5'
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
            onClick={() => navigate('/')}
            className="group flex items-center gap-3 text-[10px] font-mono font-bold text-slate-400 hover:text-authority-navy transition-all uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Hub
          </button>
          <div className="flex items-center gap-3 text-safety-orange text-[10px] font-mono font-bold uppercase tracking-[0.2em]">
            <Lock className="w-4 h-4" /> Trust Protocol v1.9
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24 max-w-6xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="flex items-center gap-2 mb-6">
            <ShieldCheck className="w-4 h-4 text-safety-orange" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">Why Java Volcano Tour Operator</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-authority-navy mb-8 leading-[0.85] uppercase tracking-tighter">
            TRUST <br />
            <span className="text-safety-orange">ENGINEERED.</span>
          </h1>
          <p className="text-slate-500 text-xl leading-tight font-light max-w-2xl">
            JVTO is not just a tour operator; it is a specialized operational unit 
            built on police-led safety, medical oversight, and radical transparency.
          </p>
        </motion.div>

        {/* Trust Stack Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
          {trustStack.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => navigate(item.path)}
              className="bento-card bg-white p-10 group cursor-pointer hover:border-safety-orange transition-all flex flex-col justify-between h-full"
            >
              <div>
                <div className={`w-14 h-14 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-8 border border-slate-100 group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black text-authority-navy uppercase leading-none mb-4 tracking-tight">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  {item.description}
                </p>
              </div>
              <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">Protocol_0{idx + 1}</span>
                <ChevronRight className="w-5 h-5 text-safety-orange group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
          
          {/* Support Protocol Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bento-card bg-authority-navy text-white p-10 flex flex-col justify-between h-full"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-white/5 text-safety-orange flex items-center justify-center mb-8 border border-white/10">
                <HelpCircle className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black uppercase leading-none mb-4 tracking-tight">Knowledge Base</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Detailed answers to technical and operational questions.
              </p>
            </div>
            <div className="flex items-center justify-between pt-6 border-t border-white/10">
              <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">Support_Registry</span>
              <ChevronDown className="w-5 h-5 text-safety-orange" />
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <div id="faq" className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-12">
            <Database className="w-4 h-4 text-safety-orange" />
            <h2 className="text-3xl font-black text-authority-navy uppercase">Operational FAQ</h2>
          </div>

          {/* Search Bar */}
          <div className="relative mb-12">
            <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-slate-400" />
            </div>
            <input 
              type="text"
              placeholder="SEARCH PROTOCOLS..."
              className="w-full bg-white border-2 border-slate-200 rounded-2xl py-6 pl-16 pr-6 font-mono text-xs uppercase tracking-widest focus:border-safety-orange focus:ring-0 transition-all outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <motion.div 
                key={index}
                className={`bento-card bg-white border-2 transition-all overflow-hidden ${openIndex === index ? 'border-safety-orange shadow-2xl' : 'border-slate-100'}`}
              >
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full p-8 flex items-center justify-between text-left group"
                >
                  <div className="flex items-center gap-6">
                    <span className="font-mono text-[10px] text-slate-300 font-black">0{index + 1}</span>
                    <h3 className="text-xl font-black text-authority-navy uppercase leading-tight group-hover:text-safety-orange transition-colors">
                      {faq.q}
                    </h3>
                  </div>
                  {openIndex === index ? <ChevronUp className="w-5 h-5 text-safety-orange" /> : <ChevronDown className="w-5 h-5 text-slate-300" />}
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 pt-0 border-t border-slate-50">
                        <div className="mt-8 p-8 bg-slate-50 rounded-2xl border border-slate-100">
                          <p className="text-slate-600 text-lg leading-tight font-light">
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-32 p-12 bg-authority-navy rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
          <div className="scanline"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-md">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-safety-orange/10 border border-safety-orange/30 text-safety-orange text-[10px] font-mono font-bold uppercase tracking-[0.2em] mb-6">
                <MessageSquare className="w-3 h-3" /> Direct Assistance
              </div>
              <h2 className="text-4xl font-black uppercase leading-none mb-4">Still Have <br />Questions?</h2>
              <p className="text-slate-400 text-lg font-light leading-tight">
                Initiate a secure WhatsApp session with Mr. Sam for real-time operational intelligence.
              </p>
            </div>
            <a 
              href="https://wa.me/6281235061451"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-safety-orange hover:bg-safety-orange/90 text-white px-10 py-5 rounded-xl font-black uppercase tracking-wider transition-all shadow-xl shadow-safety-orange/20 flex items-center gap-3 group"
            >
              Open Secure Channel <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Footer Audit Stamp */}
        <AuditStamp title="TRUST_AUDITED" subtitle="Registry 2026" system="JVTO_TRUST_V1.9" />
      </div>
    </div>
  );
}
