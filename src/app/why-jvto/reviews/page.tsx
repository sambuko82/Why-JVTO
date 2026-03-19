import React from 'react';
import { 
  Star, 
  ArrowLeft, 
  MessageSquare, 
  Quote, 
  CheckCircle2, 
  ExternalLink,
  Award,
  ThumbsUp,
  MapPin,
  Calendar
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SSOT } from '../../../lib/ssot';
import { PageSEO } from '../../../components/PageSEO';
import { motion } from 'motion/react';

export default function ReviewsPage() {
  const navigate = useNavigate();
  const onBack = () => navigate('/why-jvto');
  const meta = SSOT.pages['/why-jvto/reviews'];

  return (
    <div className="min-h-screen bg-audit-white text-authority-navy font-sans selection:bg-safety-orange/30 pb-24 md:pb-0">
      {/* Header */}
      <div className="border-b border-slate-200 bg-audit-white/80 relative z-40 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="group flex items-center gap-3 text-[11px] font-mono font-bold text-slate-500 hover:text-authority-navy transition-all uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Trust Hub
          </button>
          <div className="flex items-center gap-3 text-safety-orange text-[11px] font-mono font-bold uppercase tracking-[0.2em]">
            <Star className="w-4 h-4" /> Guest Voices & Reviews
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24 max-w-6xl relative z-10">
        <PageSEO route="/why-jvto/reviews" />
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-4 h-4 text-safety-orange" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-slate-500">Reputation Archive</span>
          </div>
          <h1 className="text-5xl md:text-9xl font-black text-authority-navy mb-8 leading-[0.85] uppercase tracking-tighter">
            {meta?.h1 || 'GUEST VOICES.'}
          </h1>
          <p className="text-2xl text-slate-500 max-w-3xl leading-tight font-light">
            We don't just show the highlights. We publish verified feedback from real guests, focusing on our safety protocols, medical screening, and the quality of our private expeditions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Sample Reviews (In a real app, these would come from SSOT or an API) */}
          {[
            {
              name: "Sarah Jenkins",
              location: "Australia",
              date: "February 2026",
              rating: 5,
              text: "The Ijen health screening was so professional. I felt completely safe and well-informed throughout the entire trek. JVTO is the real deal.",
              tour: "Ijen Midnight Expedition"
            },
            {
              name: "Markus Weber",
              location: "Germany",
              date: "January 2026",
              rating: 5,
              text: "Breathtaking views and even better service. The guide's knowledge of the local history made the Bromo sunrise even more special.",
              tour: "Mount Bromo Sunrise"
            },
            {
              name: "Elena Rossi",
              location: "Italy",
              date: "December 2025",
              rating: 5,
              text: "Tumpak Sewu was a dream. The coordination was seamless, and the safety protocols were top-notch. Highly recommend JVTO for solo travelers.",
              tour: "Tumpak Sewu Waterfall Adventure"
            },
            {
              name: "David Chen",
              location: "Singapore",
              date: "November 2025",
              rating: 5,
              text: "Professional, transparent, and truly local. You can tell they care about their community and their guests. Best tour in East Java.",
              tour: "East Java Grand Tour"
            }
          ].map((review, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bento-card bg-white p-12 relative group"
            >
              <div className="scanline"></div>
              <div className="flex justify-between items-start mb-8">
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-safety-orange text-safety-orange" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-slate-100 group-hover:text-safety-orange/20 transition-colors" />
              </div>
              <p className="text-xl text-authority-navy font-medium leading-relaxed mb-8 italic">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between pt-8 border-t border-slate-100">
                <div>
                  <div className="text-lg font-black uppercase tracking-tighter">{review.name}</div>
                  <div className="flex items-center gap-2 text-slate-500 font-mono text-[10px] uppercase tracking-widest mt-1">
                    <MapPin className="w-3 h-3" /> {review.location}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-safety-orange font-mono text-[10px] font-black uppercase tracking-widest">{review.tour}</div>
                  <div className="flex items-center justify-end gap-2 text-slate-400 font-mono text-[10px] uppercase tracking-widest mt-1">
                    <Calendar className="w-3 h-3" /> {review.date}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Footer Audit Stamp */}
        <div className="mt-32 pt-12 border-t border-slate-200 flex flex-col items-center">
          <div className="p-12 bg-white border-4 border-safety-orange rounded-[2.5rem] -rotate-2 shadow-2xl relative overflow-hidden group hover:rotate-0 transition-transform">
            <div className="scanline"></div>
            <div className="flex flex-col items-center">
              <ThumbsUp className="w-20 h-20 text-safety-orange mb-8" />
              <span className="text-5xl font-black text-authority-navy uppercase tracking-tighter leading-none mb-3">REPUTATION_VERIFIED</span>
              <span className="font-mono text-[11px] text-slate-500 tracking-[0.4em] uppercase">Guest Voices 2026</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
