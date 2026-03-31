import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, ChevronRight, ShieldCheck, Thermometer, MapPin, HelpCircle, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const GuideAndFAQ = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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

  const faqs = [
    {
      question: "Why is the Ijen health screening mandatory?",
      answer: "Indonesian law requires a health screening for all hikers ascending Ijen Crater due to the extreme altitude and toxic sulfur gases. We arrange this screening with a licensed physician as part of your tour package to ensure your safety and compliance with local regulations."
    },
    {
      question: "Are your tours private or shared?",
      answer: "All our tours are 100% private. You will not share a vehicle or guide with other groups. This allows us to maintain strict safety protocols, offer flexible itineraries, and provide personalized attention."
    },
    {
      question: "What happens if a volcano is closed due to activity?",
      answer: "Volcanic activity is unpredictable. If a volcano is closed by authorities, we will offer an alternative itinerary (e.g., visiting a different waterfall or viewpoint) or provide a partial refund/travel credit according to our cancellation policy. Safety is our absolute priority."
    },
    {
      question: "Do I need to bring my own gas mask for Ijen?",
      answer: "No. We provide professional-grade, dual-filter gas masks rated for sulfur environments for all our guests. We do not use cheap, single-filter masks that offer inadequate protection."
    }
  ];

  return (
    <section id="guide-faq" className="py-24 bg-white border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left: Travel Guide Intelligence */}
          <div className="lg:col-span-5">
            <div className="badge-eyebrow badge-eyebrow-navy mb-6">
              <BookOpen className="w-3 h-3" /> Essential Intelligence
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] text-authority-navy mb-8">
              Travel <br />
              <span className="text-safety-orange">Guide.</span>
            </h2>
            <p className="text-slate-500 font-light text-lg leading-relaxed mb-12">
              Don't arrive unprepared. Our intelligence reports cover the critical logistics of East Java's volcanic terrain.
            </p>

            <div className="space-y-4">
              {guides.map((guide, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => navigate(guide.link)}
                  className="p-6 rounded-2xl bg-audit-white border border-slate-200 hover:border-safety-orange/50 hover:shadow-md transition-all cursor-pointer group flex items-center gap-6"
                >
                  <div className="p-3 rounded-xl bg-white shadow-sm shrink-0">
                    <guide.icon className="w-6 h-6 text-authority-navy" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-black text-authority-navy uppercase tracking-tight mb-1">
                      {guide.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-light leading-tight">
                      {guide.desc}
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-safety-orange group-hover:translate-x-1 transition-all" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: FAQ Intelligence */}
          <div className="lg:col-span-7">
            <div className="bg-audit-white rounded-[3rem] p-8 md:p-12 border border-slate-200">
              <div className="flex items-center gap-3 mb-8">
                <HelpCircle className="w-5 h-5 text-safety-orange" />
                <span className="font-mono text-xs uppercase tracking-[0.3em] font-bold text-slate-500">FAQ Registry</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-black text-authority-navy uppercase tracking-tighter mb-10 leading-none">
                Clear Answers. <br />
                <span className="text-safety-orange">No Ambiguity.</span>
              </h3>

              <div className="space-y-3">
                {faqs.map((faq, idx) => (
                  <div 
                    key={idx}
                    className="border border-slate-200 rounded-2xl bg-white overflow-hidden transition-all hover:border-safety-orange/30"
                  >
                    <button
                      onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none"
                    >
                      <h4 className="text-sm md:text-base font-bold text-authority-navy pr-8">
                        {faq.question}
                      </h4>
                      <ChevronDown 
                        className={`w-4 h-4 text-safety-orange shrink-0 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} 
                      />
                    </button>
                    <AnimatePresence>
                      {openIndex === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-5 md:px-6 pb-5 md:pb-6 text-xs md:text-sm text-slate-600 font-light leading-relaxed">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
