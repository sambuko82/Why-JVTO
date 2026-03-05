import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, Quote, ShieldCheck, UserCheck, Lock, Fingerprint, Search } from 'lucide-react';
import { SSOT } from '../../lib/ssot';
import { motion } from 'motion/react';

export const TeamRegistry = () => {
  const navigate = useNavigate();
  const [crewFilter, setCrewFilter] = useState('All');

  const filteredCrew = SSOT.crew.filter(c => crewFilter === 'All' || c.role === crewFilter.slice(0, -1));

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <UserCheck className="w-4 h-4 text-safety-orange" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">Human Intelligence Infrastructure</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-authority-navy leading-[0.9] mb-6 uppercase">
            PERSONNEL <br />
            <span className="text-safety-orange">ROSTER.</span>
          </h2>
          <p className="text-slate-600 text-xl leading-tight font-light">
            Every operative listed below is vetted through our multi-layer verification protocol. Connecting faces to verifiable competencies.
          </p>
        </div>
        <div className="flex flex-col items-end gap-4">
          <div className="flex bg-white border border-slate-200 p-1 rounded-xl shadow-sm">
            {['All', 'Guides', 'Drivers'].map((filter) => (
              <button 
                key={filter}
                onClick={() => setCrewFilter(filter)}
                className={`px-6 py-2 font-black text-[10px] uppercase tracking-widest transition-all rounded-lg ${
                  crewFilter === filter ? 'bg-authority-navy text-white shadow-lg' : 'hover:bg-slate-50 text-slate-400'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          <p className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">
            Showing: {filteredCrew.length} Verified Assets
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredCrew.map((crew, i) => (
          <motion.article 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bento-card bg-white group flex flex-col relative"
          >
            <div className="scanline"></div>
            <div className="aspect-[3/4] overflow-hidden relative border-b border-slate-100">
              <img 
                alt={crew.name} 
                className="w-full h-full object-cover grayscale contrast-125 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" 
                src={crew.profile.image} 
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 left-6">
                <div className="tech-badge bg-authority-navy/80 backdrop-blur text-white border border-white/10">
                  ID: JVTO-{crew.role.toUpperCase().slice(0, 2)}-{crew.id.toUpperCase().slice(0, 4)}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-authority-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <button 
                  onClick={() => navigate(`/team/${crew.id}`)}
                  className="w-full bg-safety-orange text-white font-black py-4 rounded-xl text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl"
                >
                  Inspect Profile <Search className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="p-8 flex flex-col gap-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] text-safety-orange uppercase font-black tracking-widest">
                    {crew.role} / {crew.role === 'Guide' ? 'Licensed' : 'Logistics'}
                  </span>
                  <div className="status-live"></div>
                </div>
                <h3 className="text-2xl font-black uppercase text-authority-navy leading-none">{crew.name}</h3>
              </div>
              
              <div className="flex gap-2">
                <div className="verified-badge">VERIFIED_OPERATIVE</div>
                <span className="bg-slate-50 border border-slate-100 px-2 py-1 font-mono text-[9px] uppercase text-slate-500 rounded">Active_Duty</span>
              </div>
              
              <div className="relative pt-6 border-t border-slate-100">
                <Quote className="absolute -top-3 -left-2 text-slate-100 w-10 h-10 -z-10" />
                <p className="text-xs text-slate-500 italic leading-tight relative z-10">"{crew.quote}"</p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <Fingerprint className="w-4 h-4 text-slate-300" />
                  <span className="font-mono text-[9px] text-slate-300 uppercase tracking-widest">Hash: {crew.id.slice(0, 8)}...</span>
                </div>
                <ShieldCheck className="w-4 h-4 text-verified-bright" />
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-24 pt-12 border-t border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-6">
          <h4 className="font-mono text-[10px] uppercase text-slate-400 tracking-widest font-black">Standard Operating Procedure</h4>
          <ul className="space-y-3">
            {['Background Checks', 'Annual Health Audit', 'Safety Training Cert'].map((sop, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-safety-orange" />
                <span className="text-[10px] font-bold text-authority-navy uppercase tracking-wider">{sop}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="font-mono text-[10px] uppercase text-slate-400 tracking-widest font-black">Certification Bodies</h4>
          <ul className="space-y-3">
            {['Banyuwangi Tourist Guide Assoc.', 'Indonesian Ministry of Tourism', 'JVTO Safety Infrastructure'].map((body, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-verified-lime" />
                <span className="text-[10px] font-bold text-authority-navy uppercase tracking-wider">{body}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-end justify-center">
          <div className="p-8 bg-white border-2 border-safety-orange rounded-3xl -rotate-3 shadow-xl relative overflow-hidden group hover:rotate-0 transition-transform">
            <div className="scanline"></div>
            <div className="flex flex-col items-center">
              <ShieldCheck className="w-12 h-12 text-safety-orange mb-4" />
              <span className="text-3xl font-black text-authority-navy uppercase tracking-tighter leading-none mb-2">100% COMPLIANT</span>
              <span className="font-mono text-[10px] text-slate-400 tracking-widest uppercase">Personnel Audit 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
