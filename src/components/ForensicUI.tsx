import React from 'react';
import { ShieldCheck, FileCheck, ExternalLink, Lock, CheckCircle2, AlertCircle, Fingerprint } from 'lucide-react';

export const EvidenceBadge = ({ type, text }: { type: 'verified' | 'public' | 'doc', text: string }) => {
  const styles = {
    verified: "bg-verified-bright/10 text-verified-bright border-verified-bright/30",
    public: "bg-safety-orange/10 text-safety-orange border-safety-orange/30",
    doc: "bg-white/10 text-slate-500 border-white/20"
  };
  
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-[11px] font-mono font-bold uppercase tracking-widest border ${styles[type]}`}>
      {type === 'verified' && <CheckCircle2 className="w-3 h-3" />}
      {type === 'public' && <ExternalLink className="w-3 h-3" />}
      {type === 'doc' && <FileCheck className="w-3 h-3" />}
      {text}
    </span>
  );
};

export const SectionHeading = ({ title, subtitle, badge }: { title: string, subtitle?: string, badge?: string }) => (
  <div className="mb-16 text-center max-w-3xl mx-auto">
    {badge && (
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-safety-orange/10 border border-safety-orange/30 text-safety-orange text-[11px] font-mono font-bold uppercase tracking-[0.2em] mb-8">
        <Lock className="w-3 h-3" /> {badge}
      </div>
    )}
    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-[0.9] uppercase tracking-tighter">{title}</h2>
    {subtitle && <p className="text-slate-500 text-xl leading-tight font-light">{subtitle}</p>}
  </div>
);

export const HashBadge = ({ hash }: { hash: string }) => (
  <div className="bg-black/20 p-3 rounded-xl border border-white/5 flex items-center gap-3 group">
    <Fingerprint className="w-4 h-4 text-slate-500 group-hover:text-safety-orange transition-colors" />
    <span className="font-mono text-[11px] text-slate-500 uppercase tracking-widest truncate">SHA-256: {hash}</span>
  </div>
);

export const PillarCard = ({ 
  icon: Icon, 
  title, 
  claim, 
  evidence, 
  actionLabel, 
  onAction 
}: { 
  icon: any, 
  title: string, 
  claim: string, 
  evidence: string[], 
  actionLabel: string, 
  onAction: () => void 
}) => (
  <div className="bento-card bg-white/5 border-white/10 p-10 group hover:bg-white/10 transition-all relative overflow-hidden">
    <div className="scanline"></div>
    <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
      <ExternalLink className="w-5 h-5 text-safety-orange" />
    </div>
    
    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 text-safety-orange group-hover:bg-safety-orange group-hover:text-white transition-all duration-500">
      <Icon className="w-8 h-8" />
    </div>
    
    <h3 className="text-2xl font-black text-white mb-4 uppercase leading-none">{title}</h3>
    <p className="text-slate-500 mb-8 leading-tight text-lg font-light italic border-l-2 border-safety-orange pl-6">
      "{claim}"
    </p>
    
    <div className="space-y-4 mb-10">
      <p className="font-mono text-[11px] font-black text-slate-500 uppercase tracking-[0.2em]">Verifiable Evidence:</p>
      <ul className="space-y-3">
        {evidence.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-xs text-slate-300 font-mono uppercase tracking-wider leading-tight">
            <CheckCircle2 className="w-4 h-4 text-verified-bright mt-0.5 shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
    
    <button 
      onClick={onAction}
      className="w-full py-4 rounded-xl border border-white/10 text-white text-xs font-black uppercase tracking-widest hover:bg-white hover:text-authority-navy transition-all flex items-center justify-center gap-2"
    >
      {actionLabel}
    </button>
  </div>
);
