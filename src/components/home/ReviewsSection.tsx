import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import { Star, MessageSquare, ShieldCheck, ExternalLink } from 'lucide-react';
import { SSOT } from '../../lib/ssot';

export const ReviewsSection = () => {
  // Flatten reviews and add crew name to each review
  const allReviews = useMemo(() => {
    const reviews: Array<{
      crewName: string;
      author: string;
      text: string;
      platform: string;
      rating: number;
      date: string;
    }> = [];

    Object.entries(SSOT.crew_reviews).forEach(([crewName, crewReviewList]) => {
      crewReviewList.forEach(review => {
        reviews.push({ ...review, crewName });
      });
    });

    // Sort by date descending (newest first)
    return reviews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, []);

  return (
    <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 md:gap-8 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-safety-orange/10 border border-safety-orange/30 text-safety-orange text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] mb-4 md:mb-6">
              <MessageSquare className="w-3 h-3" /> Independent Audits
            </div>
            <h2 className="text-3xl xs:text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] text-authority-navy">
              Guest Voices on <br />
              <span className="text-safety-orange">Independent Platforms.</span>
            </h2>
          </div>
          <p className="text-slate-500 font-light max-w-sm leading-tight text-sm md:text-base">
            Don't just take our word for it. Read verified reviews from travelers who have experienced our police-led safety protocols firsthand.
          </p>
        </div>
      </div>

      {/* Full-bleed scrollable container */}
      <div className="w-full pl-4 md:pl-6 lg:pl-[calc((100vw-80rem)/2+1.5rem)]">
        <div className="flex overflow-x-auto gap-4 md:gap-6 pb-8 pr-4 md:pr-6 snap-x hide-scrollbar">
          {allReviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (idx % 5) * 0.1 }}
              className="shrink-0 w-[85vw] sm:w-[340px] md:w-[400px] snap-start bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-safety-orange">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">
                    {review.platform} <ExternalLink className="w-3 h-3" />
                  </div>
                </div>
                
                <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium mb-8 italic">
                  "{review.text}"
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between mt-auto">
                <div>
                  <p className="text-authority-navy font-black uppercase tracking-tight text-sm">
                    {review.author}
                  </p>
                  <p className="text-slate-400 text-[10px] font-mono uppercase tracking-widest mt-1">
                    {new Date(review.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                  </p>
                </div>
                
                <div className="flex items-center gap-2 bg-verified-bright/10 px-3 py-1.5 rounded-lg border border-verified-bright/20">
                  <ShieldCheck className="w-4 h-4 text-verified-bright" />
                  <div className="flex flex-col">
                    <span className="text-[8px] font-mono uppercase tracking-widest text-slate-500 leading-none mb-0.5">Guided By</span>
                    <span className="text-[10px] font-bold text-authority-navy uppercase leading-none">{review.crewName}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
