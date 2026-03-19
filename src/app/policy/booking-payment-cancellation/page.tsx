import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FileText, 
  ShieldAlert, 
  CreditCard, 
  RefreshCcw, 
  ArrowLeft, 
  Lock, 
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ChevronRight
} from 'lucide-react';
import { SSOT } from '../../../lib/ssot';
import { PageSEO } from '../../../components/PageSEO';
import { motion } from 'motion/react';
import { AuditStamp } from '../../../components/AuditStamp';

export default function BookingPaymentCancellation() {
  const navigate = useNavigate();
  const meta = SSOT.pages['/policy/booking-payment-cancellation'];

  const sections = [
    {
      title: '01. Booking & Deposit',
      content: [
        'A 20% non-refundable deposit is required to secure your expedition dates and dedicated crew.',
        'Bookings are only confirmed upon receipt of the deposit and issuance of an official JVTO confirmation number.',
        'We operate on a first-deposit, first-served basis. Verbal inquiries do not hold dates.'
      ],
      icon: CreditCard
    },
    {
      title: '02. Payment Schedule',
      content: [
        'The remaining 80% balance is payable upon meeting your crew at the start of the tour.',
        'Accepted payment methods for the balance: IDR Cash (preferred), Wise Transfer, or Revolut.',
        'All prices are fixed and transparent. No hidden surcharges or "forced" shopping stops.'
      ],
      icon: CheckCircle2
    },
    {
      title: '03. Cancellation & Travel Credit',
      content: [
        'Cancellations made 48 hours or more before departure: 100% of the deposit is converted to JVTO Lifetime Travel Credit.',
        'Travel Credit has no expiry date and can be used for any future JVTO expedition.',
        'Cancellations within 48 hours of departure: The deposit is forfeited to cover pre-paid logistics (permits, vehicle prep, crew allocation).'
      ],
      icon: RefreshCcw
    },
    {
      title: '04. "Hard Stop" Safety Policy',
      content: [
        'If a guest is deemed medically unfit during the Ijen health screening (e.g., hypertension, low SpO₂), they will not be permitted to climb.',
        'In such cases, no refund is provided for the specific activity, as logistics are already executed. Safety is our non-negotiable priority.'
      ],
      icon: ShieldAlert
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
            <Lock className="w-4 h-4" /> Policy_Doc_v1.9
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 md:py-24 max-w-4xl relative z-10">
        <PageSEO route="/policy/booking-payment-cancellation" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-2 mb-6">
            <FileText className="w-4 h-4 text-safety-orange" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-slate-500">Legal Framework</span>
          </div>
          <h1 className="text-4xl md:text-8xl font-black text-authority-navy mb-8 leading-[0.85] uppercase tracking-tighter">
            {meta?.h1 || 'BOOKING POLICY.'}
          </h1>
          <p className="text-slate-500 text-lg md:text-xl leading-tight font-light max-w-2xl">
            Our terms are designed to be fair, transparent, and focused on operational certainty. We prioritize your safety and the sustainability of our local crew.
          </p>
        </motion.div>

        <div className="space-y-12 md:space-y-16">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-12 md:pl-24"
            >
              <div className="absolute left-0 top-0 w-8 h-8 md:w-16 md:h-16 rounded-2xl bg-slate-50 text-authority-navy flex items-center justify-center border border-slate-100">
                <section.icon className="w-4 h-4 md:w-8 md:h-8" />
              </div>
              <h2 className="text-xl md:text-3xl font-black text-authority-navy uppercase mb-6 tracking-tight">
                {section.title}
              </h2>
              <ul className="space-y-4">
                {section.content.map((item, i) => (
                  <li key={i} className="flex gap-4 text-slate-600 text-base md:text-lg leading-tight font-light">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-safety-orange shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Important Notice */}
        <div className="mt-24 md:mt-32 p-8 md:p-12 bg-safety-orange/5 border-2 border-dashed border-safety-orange/20 rounded-[2rem] md:rounded-[3rem] relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-safety-orange text-white flex items-center justify-center shrink-0 shadow-xl shadow-safety-orange/20">
              <AlertTriangle className="w-8 h-8 md:w-10 md:h-10" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-black text-authority-navy uppercase mb-2 tracking-tight">Operational Certainty</h3>
              <p className="text-slate-600 text-base md:text-lg leading-tight font-light">
                By paying the deposit, you acknowledge and agree to these terms. Our "Lifetime Travel Credit" ensures you never lose your investment due to unforeseen changes, while protecting our commitment to our local guides and drivers.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Audit Stamp */}
        <AuditStamp title="POLICY_VERIFIED" subtitle="Registry 2026" system="JVTO_DOCS_V1.9" />
      </div>
    </div>
  );
}
