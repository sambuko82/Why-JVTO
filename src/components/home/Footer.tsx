import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, ShieldCheck, ChevronRight, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { SSOT } from '../../lib/ssot';

export const Footer = () => {
  const navigate = useNavigate();
  const org = SSOT.organization;
  return (
    <footer className="bg-authority-navy text-white pt-16 md:pt-24 pb-8 md:pb-12 overflow-hidden relative border-t border-white/5">
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-5"></div>
      
      <div className="container-authority relative z-10">
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
