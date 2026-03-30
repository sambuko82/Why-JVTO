import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, ShieldCheck, ChevronRight, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { SSOT } from '../../lib/ssot';

export const Footer = () => {
  const navigate = useNavigate();
  const org = SSOT.organization;
  return (
    <footer className="bg-authority-navy text-white pt-16 md:pt-32 pb-8 md:pb-12 overflow-hidden relative border-t border-white/5">
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Pre-footer CTA Band (moved from previous Footer content) */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-20 mb-16 md:mb-32">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="badge-eyebrow badge-eyebrow-orange mb-6 md:mb-8">
              <Lock className="w-3 h-3" /> Secure Booking Protocol
            </div>
            <h2 className="text-3xl xs:text-4xl md:text-7xl font-black leading-[0.9] mb-6 md:mb-8 uppercase">
              Ready for <br />
              <span className="text-safety-orange">Operational Certainty?</span>
            </h2>
            <p className="text-slate-500 text-lg md:text-xl leading-tight font-light mb-10 md:mb-12">
              Don't leave your safety to chance. Join the elite group of travelers who prioritize verification over marketing.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button 
                onClick={() => navigate('/tours')}
                className="group bg-safety-orange hover:bg-safety-orange/90 text-white px-8 md:px-10 py-4 md:py-5 rounded-xl font-black uppercase tracking-wider text-xs md:text-sm transition-all shadow-xl shadow-safety-orange/20 flex items-center justify-center gap-3"
              >
                Browse Private Tours <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => navigate('/travel-guide/faq')}
                className="group bg-white/5 border border-white/10 hover:bg-white/10 text-white px-8 md:px-10 py-4 md:py-5 rounded-xl font-black uppercase tracking-wider text-xs md:text-sm transition-all flex items-center justify-center gap-3"
              >
                <HelpCircle className="w-5 h-5" /> Common Questions
              </button>
            </div>
          </div>

          <div className="relative w-full max-w-sm lg:max-w-none">
            <div className="bento-card bg-white/5 border-white/10 p-8 md:p-10 backdrop-blur-xl shadow-2xl rotate-0 md:rotate-3 hover:rotate-0 transition-transform duration-700">
              <div className="scanline"></div>
              <ShieldCheck className="w-16 h-16 md:w-20 md:h-20 text-verified-bright mb-6 md:mb-8" />
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-8">
                  <span className="font-mono text-[10px] md:text-[11px] text-slate-500 uppercase tracking-widest">Entity Status</span>
                  <div className="verified-badge text-[10px] md:text-[11px]">VERIFIED_2026</div>
                </div>
                <div className="flex items-center justify-between gap-8">
                  <span className="font-mono text-[10px] md:text-[11px] text-slate-500 uppercase tracking-widest">Security Level</span>
                  <span className="font-mono text-[10px] md:text-[11px] text-verified-bright uppercase font-black">HIGH_STAKES</span>
                </div>
                <div className="flex items-center justify-between gap-8">
                  <span className="font-mono text-[10px] md:text-[11px] text-slate-500 uppercase tracking-widest">Data Integrity</span>
                  <span className="font-mono text-[10px] md:text-[11px] text-verified-bright uppercase font-black">100%_AUDITED</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16 md:mb-20">
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-white mb-6">Identity</h4>
            <ul className="space-y-3 text-sm text-slate-400 font-light">
              <li>{org.legalName}</li>
              <li>{org.address_json?.addressLocality}, {org.address_json?.addressRegion}</li>
              <li>{org.contact_phone}</li>
              <li>{org.contact_email}</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-white mb-6">Tours</h4>
            <ul className="space-y-3 text-sm text-slate-400 font-light">
              <li><button onClick={() => navigate('/tours')}>All Tours</button></li>
              <li><button onClick={() => navigate('/tours/from-surabaya')}>From Surabaya</button></li>
              <li><button onClick={() => navigate('/tours/from-bali')}>From Bali</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-white mb-6">Learn</h4>
            <ul className="space-y-3 text-sm text-slate-400 font-light">
              <li><button onClick={() => navigate('/why-jvto')}>Why JVTO</button></li>
              <li><button onClick={() => navigate('/why-jvto/our-team')}>Meet the Team</button></li>
              <li><button onClick={() => navigate('/why-jvto/reviews')}>Reviews</button></li>
              <li><button onClick={() => navigate('/travel-guide')}>Travel Guide</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-white mb-6">Verify</h4>
            <ul className="space-y-3 text-sm text-slate-400 font-light">
              <li><button onClick={() => navigate('/verify-jvto')}>Verify JVTO</button></li>
              <li><button onClick={() => navigate('/policy/booking-payment-cancellation')}>Booking Policy</button></li>
              <li><button onClick={() => navigate('/policy/inclusions-exclusions')}>Inclusions</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-white mb-6">Proof</h4>
            <ul className="space-y-3 text-sm text-slate-400 font-light">
              {org.same_as_urls.map((url, i) => (
                <li key={i}><a href={url} target="_blank" rel="noopener noreferrer">{url.split('/')[2]}</a></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] md:text-xs text-slate-500 font-mono uppercase tracking-widest text-center md:text-left">
            © 2015–2026 {org.legalName} · {org.address_json?.addressLocality}, {org.address_json?.addressRegion} · License No. 1102230032918
          </p>
        </div>
      </div>
    </footer>
  );
};
