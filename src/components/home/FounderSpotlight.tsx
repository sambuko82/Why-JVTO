import React from 'react';
import { ShieldCheck, Award, Star, ChevronRight, Newspaper, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { SSOT } from '../../lib/ssot';

export const FounderSpotlight = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 md:py-24 bg-audit-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 md:mb-24">
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 flex flex-col gap-4"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={SSOT.assets.find(a => a.slug === 'founder-with-guests-stefan-loose')?.url || 'https://javavolcano-touroperator.com/history/founder-with-guests-stefan-loose.jpg'} 
                  alt={SSOT.assets.find(a => a.slug === 'founder-with-guests-stefan-loose')?.alt || 'Agung Sambuko - Founder & Tourist Police'} 
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="p-6 md:p-8 bg-white border border-slate-200 rounded-3xl shadow-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 md:p-3 rounded-full bg-safety-orange/10">
                    <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-safety-orange" />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-black text-authority-navy uppercase tracking-tight mb-1">
                      {SSOT.organization.founder.name}
                    </h4>
                    <p className="text-slate-500 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                      {SSOT.organization.founder.role}
                    </p>
                  </div>
                </div>
                <p className="text-slate-600 font-medium italic text-sm md:text-base leading-relaxed">
                  "In the Ring of Fire, safety is not a marketing promise. It is achieved through Police Leadership, Medical Protocols, and Cryptographic Evidence."
                </p>
              </div>
            </motion.div>
            
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-safety-orange/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-authority-navy/5 rounded-full blur-3xl"></div>
          </div>

          <div>
            <div className="badge-eyebrow badge-eyebrow-navy mb-6 md:mb-8">
              <Star className="w-3 h-3" /> Police Leadership
            </div>
            <h2 className="text-3xl xs:text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] text-authority-navy mb-6 md:mb-8">
              Our Story: <br />
              <span className="text-safety-orange">From Local Host to Police-Led Operator.</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed mb-10 md:mb-12">
              {SSOT.organization.name} began as a family guesthouse in {SSOT.organization.address_json.addressLocality} — the town closest to Ijen Crater — in {SSOT.organization.foundingDate.split('-')[0]}. Our founder, {SSOT.organization.founder.name}, is an active Tourist Police officer who saw safety gaps in East Java's tour industry and built something different: private-only routes, a mandatory health screening system, and transparent written policies. Today, JVTO is a registered {SSOT.organization.legalName} serving independent travelers from across Southeast Asia.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-12">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-slate-100">
                  <Award className="w-6 h-6 text-authority-navy" />
                </div>
                <div>
                  <h5 className="text-sm font-black uppercase tracking-tight text-authority-navy">
                    Official Liaison
                  </h5>
                  <p className="text-xs text-slate-500 font-light uppercase tracking-widest">
                    Direct Police Network
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-slate-100">
                  <ShieldCheck className="w-6 h-6 text-authority-navy" />
                </div>
                <div>
                  <h5 className="text-sm font-black uppercase tracking-tight text-authority-navy">
                    Safety First
                  </h5>
                  <p className="text-xs text-slate-500 font-light uppercase tracking-widest">
                    Police-Grade Protocols
                  </p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => navigate('/why-jvto/our-story')}
              className="bg-authority-navy text-white px-10 py-5 rounded-xl font-black uppercase tracking-wider transition-all hover:bg-authority-navy/90 flex items-center justify-center gap-3 group"
            >
              Read Our Story <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Media Carousel */}
        {SSOT.press && SSOT.press.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="pt-12 border-t border-slate-200"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-safety-orange/10">
                  <Newspaper className="w-5 h-5 text-safety-orange" />
                </div>
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-authority-navy">
                  National Media Coverage
                </h3>
              </div>
              <div className="hidden md:flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                Swipe to view <ChevronRight className="w-4 h-4" />
              </div>
            </div>

            <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-4 md:gap-6 pb-8 -mx-4 px-4 md:mx-0 md:px-0">
              {SSOT.press.map((article, idx) => (
                <a
                  key={idx}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="snap-start shrink-0 w-[280px] md:w-[360px] group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-safety-orange/30 transition-all duration-300"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img 
                      src={article.screenshot} 
                      alt={`${article.publisher} Coverage`} 
                      className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-authority-navy/0 group-hover:bg-authority-navy/40 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-safety-orange text-white px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider flex items-center gap-2">
                        Read Article <ExternalLink className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="text-[10px] font-black text-safety-orange uppercase tracking-[0.2em] mb-2">
                      {article.publisher}
                    </div>
                    <h4 className="text-sm font-bold text-authority-navy leading-snug mb-3 line-clamp-2">
                      {article.translatedTitle}
                    </h4>
                    <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                        {new Date(article.date).getFullYear()}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-300 group-hover:text-safety-orange transition-colors" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
