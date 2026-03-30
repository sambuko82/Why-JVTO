import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, ChevronRight, ShieldCheck, Thermometer, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { SSOT } from '../../lib/ssot';

export const TravelGuideTeaser = () => {
  const navigate = useNavigate();

  const guides = [
    {
      title: "Health & Medical",
      desc: "Mandatory screening protocols for high-altitude ascents.",
      icon: ShieldCheck,
      link: "/travel-guide/ijen-health-screening"
    },
    {
      title: "Packing & Fitness",
      desc: "What to wear for sub-zero temperatures at the crater rim.",
      icon: Thermometer,
      link: "/travel-guide/packing-and-fitness"
    },
    {
      title: "Weather & Closures",
      desc: "Real-time volcanic activity and seasonal weather patterns.",
      icon: MapPin,
      link: "/travel-guide/weather-and-closures"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 md:gap-8 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <div className="badge-eyebrow badge-eyebrow-navy mb-4 md:mb-6">
              <BookOpen className="w-3 h-3" /> Essential Intelligence
            </div>
            <h2 className="text-3xl xs:text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] text-authority-navy">
              Travel <br />
              <span className="text-safety-orange">Guide.</span>
            </h2>
          </div>
          <p className="text-slate-500 font-light max-w-sm leading-tight text-sm md:text-base">
            Don't arrive unprepared. Read our comprehensive guides on weather, health, and packing for East Java's volcanoes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {guides.map((guide, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => navigate(guide.link)}
              className="p-8 rounded-2xl bg-audit-white border border-slate-200 hover:border-safety-orange/50 hover:shadow-lg transition-all cursor-pointer group flex flex-col"
            >
              <div className="p-3 rounded-xl bg-white w-fit mb-6 shadow-sm">
                <guide.icon className="w-6 h-6 text-authority-navy" />
              </div>
              <h3 className="text-xl font-black text-authority-navy uppercase tracking-tight mb-3">
                {guide.title}
              </h3>
              <p className="text-sm text-slate-500 font-light leading-relaxed mb-8 flex-grow">
                {guide.desc}
              </p>
              <div className="flex items-center gap-2 text-safety-orange font-mono text-[11px] uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                Read Guide <ChevronRight className="w-3 h-3" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
