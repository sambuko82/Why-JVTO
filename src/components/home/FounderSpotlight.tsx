import React from 'react';
import { ShieldCheck, Award, Star, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

export const FounderSpotlight = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
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
              
              <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-safety-orange/20">
                    <ShieldCheck className="w-6 h-6 text-safety-orange" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-white uppercase tracking-tight mb-1">
                      Agung Sambuko
                    </h4>
                    <p className="text-slate-300 text-xs font-light uppercase tracking-widest">
                      Founder & Active Tourist Police
                    </p>
                  </div>
                </div>
                <p className="text-slate-200 font-light italic text-sm leading-relaxed">
                  "In the Ring of Fire, safety is not a marketing promise. It is achieved through Police Leadership, Medical Protocols, and Cryptographic Evidence."
                </p>
              </div>
            </motion.div>
            
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-safety-orange/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-authority-navy/5 rounded-full blur-3xl"></div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-authority-navy/5 border border-authority-navy/10 text-authority-navy text-[11px] font-mono font-bold uppercase tracking-[0.2em] mb-8">
              <Star className="w-3 h-3" /> Police Leadership
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] text-authority-navy mb-8">
              Founded by <br />
              <span className="text-safety-orange">Tourist Police.</span>
            </h2>
            <p className="text-xl text-slate-500 font-light leading-relaxed mb-12">
              JVTO is not just another tour operator. We are the only agency in East Java founded and led by active Tourist Police personnel. This unique leadership ensures direct liaison with authorities, real-time safety updates, and a standard of accountability that is unmatched in the industry.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
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
