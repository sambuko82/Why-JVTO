import React, { useState } from 'react';
import { Newspaper, Quote, ExternalLink, Fingerprint, CheckCircle2, Lock, ChevronRight } from 'lucide-react';
import { SSOT } from '../../lib/ssot';
import { motion, AnimatePresence } from 'motion/react';

export const PressProof = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeArticle = SSOT.press[activeIndex];

  if (!SSOT.press || SSOT.press.length === 0) return null;

  return (
    <section className="bg-authority-navy py-24 md:py-32 px-4 md:px-6 relative overflow-hidden border-y border-white/5">
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Authority Narrative & Media List */}
          <div className="lg:w-5/12 flex flex-col">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="badge-eyebrow badge-eyebrow-orange mb-6 md:mb-8">
                <Newspaper className="w-3 h-3" /> National Media Verification
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 md:mb-8 leading-[0.9] uppercase tracking-tighter">
                Duty First, <br/>
                <span className="text-safety-orange">Business Second.</span>
              </h2>
              <p className="text-slate-400 text-lg md:text-xl mb-10 leading-relaxed font-light">
                Our dedication to safety is not just a company SOP. Our founder, {SSOT.organization.founder.name}, was covered by national media for his service as a {SSOT.organization.founder.role} guarding visitor safety directly in the extreme conditions of Ijen Crater.
              </p>
            </motion.div>

            {/* Media Selection List */}
            <div className="flex flex-col gap-3">
              {SSOT.press.map((article, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`text-left p-4 rounded-2xl border transition-all flex items-center justify-between group ${
                    activeIndex === idx 
                      ? 'bg-white/10 border-safety-orange/50 shadow-lg shadow-safety-orange/5' 
                      : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <CheckCircle2 className={`w-4 h-4 ${activeIndex === idx ? 'text-safety-orange' : 'text-slate-500'}`} />
                      <span className={`font-black uppercase tracking-wider text-sm ${activeIndex === idx ? 'text-white' : 'text-slate-300'}`}>
                        {article.publisher}
                      </span>
                    </div>
                    <p className={`text-xs font-medium line-clamp-1 ${activeIndex === idx ? 'text-slate-300' : 'text-slate-500'}`}>
                      {article.translatedTitle}
                    </p>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${activeIndex === idx ? 'text-safety-orange translate-x-1' : 'text-slate-600 group-hover:text-slate-400'}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Stack (Browser Screenshot) */}
          <div className="lg:w-7/12 w-full">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeIndex}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="relative w-full"
              >
                {/* Quote Box */}
                <div className="bg-white/5 p-6 md:p-8 rounded-3xl border border-white/10 mb-8 relative group">
                  <Quote className="absolute top-6 right-6 w-10 h-10 md:w-12 md:h-12 text-white/5" />
                  <p className="text-slate-200 italic text-base md:text-lg leading-relaxed relative z-10 mb-6">
                    "{activeArticle.quote}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-px w-6 md:w-8 bg-safety-orange"></div>
                      <footer className="text-[10px] md:text-[11px] font-mono font-bold text-safety-orange uppercase tracking-widest">— {activeArticle.author}</footer>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{new Date(activeArticle.date).getFullYear()}</span>
                  </div>
                </div>

                {/* Main Image (Clickable) */}
                <a 
                  href={activeArticle.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative bg-white rounded-3xl overflow-hidden border border-white/10 shadow-2xl z-20 group cursor-pointer transform transition-transform duration-500 hover:-translate-y-2 hover:shadow-safety-orange/20"
                >
                  <div className="bg-slate-100 px-4 md:px-6 py-3 md:py-4 flex items-center justify-between border-b border-slate-200">
                    <div className="flex gap-1.5 md:gap-2">
                      <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-400"></div>
                      <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-amber-400"></div>
                      <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-emerald-400"></div>
                    </div>
                    <div className="bg-white px-3 md:px-4 py-1 md:py-1.5 rounded-full border border-slate-200 text-[9px] md:text-[11px] font-mono text-slate-500 w-48 md:w-64 text-center truncate shadow-sm flex items-center justify-center gap-2">
                      <Lock className="w-3 h-3 text-emerald-500 shrink-0" />
                      <span className="truncate">{activeArticle.url.replace('https://', '').split('/')[0]}</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-safety-orange transition-colors" />
                  </div>
                  
                  <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden bg-slate-100">
                    <img 
                      src={activeArticle.screenshot} 
                      alt={`${activeArticle.publisher} Article Screenshot`} 
                      className="w-full h-full object-cover object-top"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="bg-slate-50 px-4 md:px-6 py-3 border-t border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Fingerprint className="w-3 h-3 md:w-4 md:h-4 text-slate-500"/>
                      <span className="text-[9px] md:text-[11px] text-slate-500 font-mono uppercase tracking-widest">SHA-256: {activeArticle.publisher.substring(0,4).toUpperCase()}...{new Date(activeArticle.date).getTime().toString().slice(-4)}</span>
                    </div>
                    <div className="verified-badge text-[9px] md:text-[10px]">Official Source</div>
                  </div>
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
