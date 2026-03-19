import React from 'react';
import { ShieldCheck, Award, Star, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

export const FounderSpotlight = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-[4/5] rounded-3xl overflow-hidden relative z-10 shadow-2xl"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/b/bf/Agung_Sambuko.jpg" 
                alt="Agung Sambuko - Founder & Tourist Police" 
                className="w-full h-full object-cover grayscale contrast-125"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-authority-navy via-transparent to-transparent opacity-60"></div>
              
              <div className="absolute bottom-6 left-6 right-6 p-6 md:bottom-10 md:left-10 md:right-10 md:p-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 md:p-3 rounded-full bg-safety-orange/20">
                    <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-safety-orange" />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-black text-white uppercase tracking-tight mb-1">
                      Bripka Agung Sambuko
                    </h4>
                    <p className="text-slate-300 text-[10px] md:text-xs font-light uppercase tracking-widest">
                      Founder & Active Tourist Police
                    </p>
                  </div>
                </div>
                <p className="text-slate-200 font-light italic text-xs md:text-sm leading-relaxed">
                  "In the Ring of Fire, safety is not a marketing promise. It is achieved through Police Leadership, Medical Protocols, and Cryptographic Evidence."
                </p>
              </div>
            </motion.div>
            
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-safety-orange/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-authority-navy/5 rounded-full blur-3xl"></div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-authority-navy/5 border border-authority-navy/10 text-authority-navy text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] mb-6 md:mb-8">
              <Star className="w-3 h-3" /> Police Leadership
            </div>
            <h2 className="text-3xl xs:text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] text-authority-navy mb-6 md:mb-8">
              Our Story: <br />
              <span className="text-safety-orange">From Local Host to Police-Led Operator.</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed mb-10 md:mb-12">
              JVTO began as a family guesthouse in Bondowoso — the town closest to Ijen Crater — in 2015. Our founder, Bripka Agung Sambuko, is an active Tourist Police officer who saw safety gaps in East Java's tour industry and built something different: private-only routes, a mandatory health screening system, and transparent written policies. Today, JVTO is a licensed PT (No. 1102230032918) serving independent travelers from across Southeast Asia.
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
      </div>
    </section>
  );
};
