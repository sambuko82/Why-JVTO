import React from 'react';
import { Newspaper, Quote, ExternalLink, Fingerprint, CheckCircle2, Lock, ShieldCheck } from 'lucide-react';
import { SSOT } from '../../lib/ssot';
import { motion } from 'motion/react';

export const PressProof = () => {
  const detikArticle = SSOT.press.find(p => p.publisher === 'Detik.com');
  const radarArticle = SSOT.press.find(p => p.publisher.includes('Radar Jember'));

  if (!detikArticle) return null;

  return (
    <section className="bg-authority-navy py-32 px-6 relative overflow-hidden border-y border-white/5">
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-24 items-center">
          
          {/* Left Column: Authority Narrative */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-5/12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-safety-orange/10 border border-safety-orange/30 text-safety-orange text-[11px] font-mono font-bold uppercase tracking-[0.2em] mb-8">
              <Newspaper className="w-3 h-3" /> National Media Verification
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-[0.9] uppercase">
              Duty First, <br/>
              <span className="text-safety-orange">Business Second.</span>
            </h2>
            <p className="text-slate-500 text-xl mb-10 leading-tight font-light">
              Our dedication to safety is not just a company SOP. Our founder, Bripka Agung Sambuko, was covered by national media for his service as a Tourist Police officer guarding visitor safety directly in the extreme conditions of Ijen Crater.
            </p>
            
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 mb-10 relative group">
              <Quote className="absolute top-6 right-6 w-12 h-12 text-white/10" />
              <p className="text-slate-200 italic text-lg leading-tight relative z-10 mb-6">
                "{detikArticle.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-safety-orange"></div>
                <footer className="text-[11px] font-mono font-bold text-safety-orange uppercase tracking-widest">— {detikArticle.author}</footer>
              </div>
            </div>

            <a 
              href={detikArticle.url} 
              target="_blank" 
              rel="nofollow noopener noreferrer" 
              className="group inline-flex items-center gap-3 bg-white text-authority-navy px-8 py-4 rounded-xl font-black uppercase tracking-wider transition-all hover:bg-safety-orange hover:text-white"
            >
              Read Original Article <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Right Column: Visual Stack (Browser Screenshot) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-7/12 relative w-full"
          >
            {/* Main Image (Detik.com) */}
            <div className="relative bg-white rounded-3xl overflow-hidden border border-white/10 shadow-2xl z-20 transform lg:-rotate-2 hover:rotate-0 transition-transform duration-700 group">
              <div className="bg-slate-100 px-6 py-4 flex items-center justify-between border-b border-slate-200">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                </div>
                <div className="bg-white px-4 py-1.5 rounded-full border border-slate-200 text-[11px] font-mono text-slate-500 w-64 text-center truncate shadow-sm">
                  {detikArticle.url.replace('https://', '')}
                </div>
                <Lock className="w-4 h-4 text-slate-300" />
              </div>
              
              <div className="relative">
                <img 
                  src={detikArticle.screenshot} 
                  alt="Detik.com Article Screenshot" 
                  className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0 duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Context Overlay */}
                <div className="absolute bottom-12 left-8 right-8 md:left-auto md:right-8 md:w-96 bg-authority-navy/95 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl">
                   <div className="flex items-start gap-4">
                      <div className="bg-verified-bright/20 p-2 rounded-lg">
                        <CheckCircle2 className="w-6 h-6 text-verified-bright shrink-0" />
                      </div>
                      <div>
                        <div className="text-[11px] uppercase tracking-[0.2em] text-verified-bright font-black mb-2">
                          Positive Coverage Verification
                        </div>
                        <div className="text-sm font-bold text-white leading-tight uppercase">
                          "{detikArticle.translatedTitle}"
                        </div>
                      </div>
                   </div>
                </div>
              </div>

              <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Fingerprint className="w-4 h-4 text-slate-500"/>
                  <span className="text-[11px] text-slate-500 font-mono uppercase tracking-widest">SHA-256: B257B7...9A2B</span>
                </div>
                <div className="verified-badge">Verified Source</div>
              </div>
            </div>

            {/* Bottom Stack Image (Radar Jember) */}
            {radarArticle && (
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute -bottom-16 -right-8 lg:-right-16 w-3/4 bg-white rounded-3xl overflow-hidden border border-white/10 shadow-2xl z-10 transform lg:rotate-3 opacity-90 hover:opacity-100 hover:z-30 transition-all duration-700 hidden sm:block"
              >
                <div className="bg-slate-100 px-6 py-3 flex items-center justify-between border-b border-slate-200">
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest">Radar Jember Archive</span>
                  <ShieldCheck className="w-4 h-4 text-slate-300" />
                </div>
                <div className="relative">
                  <img 
                    src={radarArticle.screenshot} 
                    alt="Radar Jember Screenshot" 
                    className="w-full h-56 object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-4 right-4 bg-authority-navy/90 backdrop-blur px-4 py-2 rounded-xl border border-white/10">
                    <p className="text-[11px] text-verified-bright font-mono uppercase tracking-widest">
                      Topic: {radarArticle.translatedTitle || "Tourist Police Support"}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
