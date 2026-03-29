import React from 'react';
import { History, FileText, BookOpen, Lock, Fingerprint, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { SSOT } from '../../lib/ssot';

export const HistoryArtifacts = () => {
  const artifacts = [
    {
      year: SSOT.history.award2015.year.toString(),
      title: "THE FOUNDATION",
      desc: `Original shipping labels and plaques from Booking.com addressed to our current headquarters. We haven't moved; we haven't changed our mission. Recognized with a score of ${SSOT.history.award2015.score}.`,
      images: [
        SSOT.assets.find(a => a.slug === 'booking-2015-plaque')?.url || "https://javavolcano-touroperator.com/history/booking-2015-plaque.jpg",
        SSOT.assets.find(a => a.slug === 'booking-2015-shipping-label')?.url || "https://javavolcano-touroperator.com/history/booking-2015-shipping-label.jpg"
      ],
      hash: "SHA-256: 4f8e...2d1a",
      type: "LOGISTICS_RECORD"
    },
    {
      year: SSOT.history.book2016.year.toString(),
      title: "THE GUIDEBOOK STANDARD",
      desc: "Recommended by the 'German Travel Bible' (Stefan Loose) long before the post-pandemic tourism boom. Recognized for operational excellence in East Java.",
      images: [
        SSOT.assets.find(a => a.slug === 'stefan-loose-ijen-bondowoso-page')?.url || "https://javavolcano-touroperator.com/history/stefan-loose-ijen-bondowoso-page.png"
      ],
      hash: "SHA-256: 9c2a...7f3b",
      type: "ARCHIVAL_PRINT",
      meta: {
        title: SSOT.history.book2016.title,
        page: SSOT.history.book2016.page.toString(),
        isbn: SSOT.history.book2016.isbn
      }
    }
  ];

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <History className="w-4 h-4 text-safety-orange" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-slate-500">Archival Continuity Log</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-authority-navy leading-[0.9] mb-6 uppercase">
            FORENSIC <br />
            <span className="text-safety-orange">TIMELINE.</span>
          </h2>
          <p className="text-slate-600 text-xl leading-tight font-light">
            Operating since 2015. We provide documented evidence proving our long-term market presence and operational stability.
          </p>
        </div>
        <div className="hidden md:block">
          <div className="tech-badge bg-authority-navy text-white mb-2">Verified Continuity</div>
          <p className="font-mono text-[11px] text-slate-500 uppercase tracking-widest text-right">Records: 2015 - 2026</p>
        </div>
      </div>

      <div className="relative">
        {/* Vertical Timeline Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 hidden md:block"></div>

        <div className="space-y-24">
          {artifacts.map((artifact, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`relative flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}
            >
              {/* Year Marker */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-20 hidden md:block">
                <div className="w-16 h-16 rounded-full bg-authority-navy text-white border-4 border-audit-white flex items-center justify-center font-black text-xl shadow-xl">
                  {artifact.year}
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2">
                <div className="bento-card p-10 bg-white relative group">
                  <div className="scanline"></div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="tech-badge">{artifact.type}</div>
                    <Lock className="w-4 h-4 text-slate-300" />
                  </div>
                  
                  <h3 className="text-3xl font-black mb-4 uppercase leading-none">{artifact.title}</h3>
                  <p className="text-slate-500 text-lg leading-tight mb-8 font-light">
                    {artifact.desc}
                  </p>

                  {artifact.meta && (
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
                      <div className="flex items-center gap-2 mb-4">
                        <BookOpen className="w-4 h-4 text-safety-orange" />
                        <span className="font-mono text-[11px] uppercase tracking-widest text-slate-500">Publication Metadata</span>
                      </div>
                      <div className="grid grid-cols-1 gap-2">
                        {Object.entries(artifact.meta).map(([key, value]) => (
                          <div key={key} className="flex justify-between items-center py-1 border-b border-slate-200/50 last:border-0">
                            <span className="font-mono text-[11px] uppercase text-slate-500">{key}</span>
                            <span className="font-bold text-xs text-authority-navy">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                    <div className="flex items-center gap-2">
                      <Fingerprint className="w-4 h-4 text-slate-500" />
                      <span className="font-mono text-[11px] text-slate-500 uppercase tracking-widest">{artifact.hash}</span>
                    </div>
                    <div className="verified-badge">ARCHIVE_PASS</div>
                  </div>
                </div>
              </div>

              {/* Image Side */}
              <div className="w-full md:w-1/2">
                <div className="grid grid-cols-2 gap-4">
                  {artifact.images.map((img, imgIdx) => (
                    <div key={imgIdx} className={`relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 group ${artifact.images.length === 1 ? 'col-span-2' : ''}`}>
                      <img 
                        src={img} 
                        alt={`${artifact.title} artifact`} 
                        className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-authority-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                        <span className="text-white font-mono text-[11px] uppercase tracking-widest">Inspect Artifact</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
