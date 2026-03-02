import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ShieldAlert, Scale, Mountain, Star, History, Handshake, ChevronRight, Lock, Eye, Database, Fingerprint, FileText, Activity
} from 'lucide-react';
import { motion } from 'motion/react';

export const TrustStack = () => {
  const navigate = useNavigate();

  const items = [
    { 
      icon: ShieldAlert, 
      title: "Safety Leadership", 
      desc: "Police-led discipline & Medical Protocols. We don't ask for trust; we provide immutable proof of our safety infrastructure.", 
      path: '/ijen-health-screening',
      size: "md:col-span-2 md:row-span-2",
      bg: "bg-white",
      iconColor: "text-safety-orange",
      hash: "SHA-256: 8f3e...9a2b"
    },
    { 
      icon: Scale, 
      title: "Forensic Proof", 
      desc: "Verify our NIB, Licenses & Awards. Every document is a digital fingerprint of our legality.", 
      path: '/verify',
      size: "md:col-span-1 md:row-span-1",
      bg: "bg-authority-navy text-white",
      iconColor: "text-verified-bright",
      hash: "SHA-256: 4d2a...e1f0"
    },
    { 
      icon: Mountain, 
      title: "Local Operations", 
      desc: "Private tours, real local team. No middleman, no hidden fees.", 
      path: '/',
      size: "md:col-span-1 md:row-span-1",
      bg: "bg-white",
      iconColor: "text-emerald-600",
      hash: "SHA-256: c2b1...d4e5"
    },
    { 
      icon: Star, 
      title: "Guest Voices", 
      desc: "Independent reviews, not cherry-picked. Audited from TripAdvisor & Booking.com.", 
      path: '/press',
      size: "md:col-span-1 md:row-span-1",
      bg: "bg-slate-50",
      iconColor: "text-amber-500",
      hash: "SHA-256: a1b2...c3d4"
    },
    { 
      icon: History, 
      title: "Documented History", 
      desc: "Operating since 2015 (Pre-Pandemic). A decade of operational continuity in the Ring of Fire.", 
      path: '/press',
      size: "md:col-span-2 md:row-span-1",
      bg: "bg-white",
      iconColor: "text-authority-navy",
      hash: "SHA-256: e5f6...g7h8"
    }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <Database className="w-4 h-4 text-safety-orange" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">Trust Pillar Registry</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-authority-navy leading-[0.85] mb-6 uppercase tracking-tighter">
            THE JVTO <br />
            <span className="text-safety-orange">TRUST STACK.</span>
          </h2>
          <p className="text-slate-600 text-xl leading-tight font-light">
            Marketing promises are cheap; operational discipline is verifiable. Navigate our verification registry to audit our infrastructure.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right hidden md:block">
            <p className="font-mono text-[10px] uppercase text-slate-400">Audit Status</p>
            <p className="font-bold text-verified-lime">PASS / VERIFIED</p>
          </div>
          <div className="h-12 w-[1px] bg-slate-200 hidden md:block"></div>
          <Lock className="w-8 h-8 text-authority-navy" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 auto-rows-[minmax(250px,auto)]">
        {items.map((item, i) => {
          const IconComponent = item.icon;
          return (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => navigate(item.path)}
              className={`bento-card p-10 group cursor-pointer flex flex-col justify-between ${item.size} ${item.bg} relative`}
            >
              <div className="scanline opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div>
                <div className="flex justify-between items-start mb-10">
                  <div className={`p-4 rounded-[1.5rem] ${item.bg === 'bg-white' || item.bg === 'bg-slate-50' ? 'bg-slate-100' : 'bg-white/10'}`}>
                    <IconComponent className={`w-10 h-10 ${item.iconColor}`} />
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="tech-badge mb-2">0{i + 1}</div>
                    <span className="font-mono text-[8px] text-slate-400 uppercase tracking-widest">{item.hash}</span>
                  </div>
                </div>
                <h3 className="text-3xl font-black mb-4 uppercase leading-none tracking-tight group-hover:text-safety-orange transition-colors">{item.title}</h3>
                <p className={`text-lg leading-tight font-light ${item.bg === 'bg-white' || item.bg === 'bg-slate-50' ? 'text-slate-500' : 'text-slate-400'}`}>
                  {item.desc}
                </p>
              </div>
              
              <div className="flex items-center justify-between mt-10 pt-8 border-t border-current/10">
                <div className="flex items-center gap-3">
                  <Eye className="w-5 h-5 text-safety-orange" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold">Inspect Proof</span>
                </div>
                <div className="flex items-center gap-2">
                   <Fingerprint className="w-4 h-4 text-slate-300" />
                   <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
