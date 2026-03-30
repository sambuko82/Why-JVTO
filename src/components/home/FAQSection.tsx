import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SSOT } from '../../lib/ssot';

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
    <section className="py-16 md:py-24 bg-audit-white relative overflow-hidden border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <div className="badge-eyebrow badge-eyebrow-navy mb-4 md:mb-6 mx-auto">
            <HelpCircle className="w-3 h-3" /> Frequently Asked Questions
          </div>
          <h2 className="text-3xl xs:text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9] text-authority-navy">
            Clear Answers. <br />
            <span className="text-safety-orange">No Ambiguity.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className="border border-slate-200 rounded-2xl bg-white overflow-hidden transition-all hover:border-safety-orange/30"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
              >
                <h3 className="text-base md:text-lg font-bold text-authority-navy pr-8">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={`w-5 h-5 text-safety-orange shrink-0 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} 
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
                    <div className="px-6 md:px-8 pb-6 md:pb-8 text-sm md:text-base text-slate-600 font-light leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
