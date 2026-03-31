import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SSOT } from '../lib/ssot';
import { CrewProfileModal } from './CrewProfileModal';
import { ShieldCheck, ArrowUpRight, Star, Quote, Users, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const CrewSection: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCrew, setSelectedCrew] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCrewClick = (crew: any) => {
    setSelectedCrew(crew);
    setIsModalOpen(true);
  };

  const displayedCrew = SSOT.crew.slice(0, 3);

  return (
    <section id="crew" className="py-12 md:py-24 bg-audit-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header Section - Authority Style */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 md:gap-8 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <div className="badge-eyebrow badge-eyebrow-navy mb-4 md:mb-6">
              <Users className="w-3 h-3" /> The Human Element
            </div>
            <h2 className="text-3xl xs:text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] text-authority-navy">
              MEET THE <br />
              <span className="text-safety-orange">VANGUARD.</span>
            </h2>
          </div>
          <p className="text-slate-500 font-light max-w-sm leading-tight text-sm md:text-base">
            Our crew isn't just a team; they are the heart of our mission. Every guide and driver is vetted, licensed, and deeply committed to your safety.
          </p>
        </div>

        {/* Crew Grid - Full Photo Style aligned with DestinationGrid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {displayedCrew.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => handleCrewClick(member)}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Full Profile Image */}
              <img 
                src={member.profile.image} 
                alt={member.name}
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay Gradient - Consistent with DestinationCard */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/80 opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Content Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 z-10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-safety-orange font-mono text-[9px] md:text-[10px] uppercase tracking-widest font-bold">
                    {member.role}
                  </span>
                  <div className="w-1 h-1 rounded-full bg-white/40" />
                  <span className="text-white/60 font-mono text-[9px] md:text-[10px] uppercase tracking-widest font-bold">
                    {member.profile.archetype}
                  </span>
                </div>

                <h3 className="text-xl md:text-3xl font-black text-white uppercase tracking-tight mb-3 group-hover:-translate-y-1 transition-transform duration-300">
                  {member.name}
                </h3>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center gap-1 text-safety-orange font-mono text-[10px] md:text-[11px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                    View Profile <ChevronRight className="w-3 h-3" />
                  </div>
                  <div className="flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-verified-bright" />
                    <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest">Licensed</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA - Consistent with VerifyCTA button style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 md:mt-20 text-center"
        >
          <button 
            onClick={() => navigate('/team')}
            className="w-full sm:w-auto bg-safety-orange hover:bg-safety-orange/90 text-white px-8 md:px-12 py-4 md:py-5 rounded-xl font-black uppercase tracking-wider text-xs md:text-sm transition-all shadow-xl shadow-safety-orange/20 flex items-center justify-center gap-3 mx-auto group"
          >
            Explore Full Team Registry <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="mt-6 text-slate-400 font-mono text-[10px] uppercase tracking-widest">
            Total Operational Force: {SSOT.crew.length} Verified Members
          </p>
        </motion.div>
      </div>



      {/* Modal */}
      <CrewProfileModal 
        crew={selectedCrew} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};
