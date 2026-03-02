import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, FileDigit, ShieldCheck, Search, Fingerprint, ChevronRight, Database } from 'lucide-react';
import { motion } from 'motion/react';

export const ForensicLocker = () => {
  const navigate = useNavigate();

  const documents = [
    { title: "NIB Entity", img: "https://javavolcano-touroperator.com/legal/NIB-1102230032918-preview.png", hash: "FA20DDE3...9A2B", type: "LEGAL_ENTITY" },
    { title: "Police SPRIN", img: "https://javavolcano-touroperator.com/legal/SPRIN-POLPAR.png", hash: "03C8578D...4F1E", type: "AUTHORITY_LOG" },
    { title: "Health Screening", img: "https://javavolcano-touroperator.com/screening/ijen-screening-hotel-01.jpeg", hash: "C52194BB...7D3C", type: "MEDICAL_RECORD" },
    { title: "HPWKI License", img: "https://javavolcano-touroperator.com/uploads/1771428741674-842615436-kta_gufron.jpg", hash: "CA1FB1A4...2B1A", type: "PERSONNEL_ID" }
  ];

  return (
    <section className="bg-authority-navy py-32 px-6 relative overflow-hidden border-y border-white/5">
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <Database className="w-4 h-4 text-safety-orange" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">Evidence Locker v2.0</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-[0.9] mb-6 uppercase">
              DON'T GUESS. <br />
              <span className="text-safety-orange">VERIFY.</span>
            </h2>
            <p className="text-slate-400 text-xl leading-tight font-light">
              In an industry of ghost operators, we publish our credentials with cryptographic proofs. Audit our infrastructure directly.
            </p>
          </div>
          <button 
            onClick={() => navigate('/verify')}
            className="group bg-white text-authority-navy px-8 py-4 rounded-xl font-black uppercase tracking-wider transition-all hover:bg-safety-orange hover:text-white flex items-center gap-3 shadow-xl shadow-black/20"
          >
            <Lock className="w-5 h-5"/> Enter Proof Library <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {documents.map((doc, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bento-card bg-white/5 border-white/10 p-6 group hover:bg-white/10 transition-all"
            >
              <div className="relative bg-authority-navy/50 h-56 rounded-2xl mb-6 overflow-hidden border border-white/10 flex items-center justify-center">
                <div className="scanline"></div>
                <img 
                  src={doc.img} 
                  alt={doc.title} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white/90 backdrop-blur p-3 rounded-full text-authority-navy">
                    <Search className="w-6 h-6" />
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="tech-badge bg-white/10 text-white border border-white/20">{doc.type}</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-black text-white text-lg uppercase leading-none">{doc.title}</h4>
                <ShieldCheck className="w-4 h-4 text-verified-bright" />
              </div>
              
              <div className="bg-black/20 p-3 rounded-xl border border-white/5 flex items-center gap-3">
                <Fingerprint className="w-4 h-4 text-slate-500" />
                <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest truncate">SHA-256: {doc.hash}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 py-8 border-t border-white/5">
          <div className="flex items-center gap-3">
            <div className="status-live"></div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">Live Verification Nodes: 12/12 Active</span>
          </div>
          <div className="h-4 w-px bg-white/10 hidden md:block"></div>
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">Last Audit: {new Date().toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
