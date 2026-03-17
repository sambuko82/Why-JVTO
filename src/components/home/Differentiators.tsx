import React from 'react';
import { ShieldCheck, Activity, Lock, Search } from 'lucide-react';
import { motion } from 'motion/react';

const differentiators = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-safety-orange" />,
    title: "Police Leadership",
    desc: "Founded and led by active Tourist Police, ensuring direct liaison with authorities and real-time safety updates."
  },
  {
    icon: <Activity className="w-6 h-6 text-safety-orange" />,
    title: "Medical Protocols",
    desc: "Strict health screening and medical clearance protocols for high-altitude volcano trekking."
  },
  {
    icon: <Lock className="w-6 h-6 text-safety-orange" />,
    title: "Cryptographic Evidence",
    desc: "Every claim is backed by verifiable hashes and official documentation in our Forensic Locker."
  },
  {
    icon: <Search className="w-6 h-6 text-safety-orange" />,
    title: "System Transparency",
    desc: "We don't hide behind marketing. We invite you to audit our entire operational infrastructure."
  }
];

export const Differentiators = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentiators.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-safety-orange/30 transition-all group"
            >
              <div className="mb-6 p-3 rounded-xl bg-white shadow-sm w-fit group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-black uppercase tracking-tight mb-4 text-authority-navy">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed font-light">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
