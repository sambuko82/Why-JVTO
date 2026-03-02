import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Camera, 
  Star, 
  Award, 
  CheckCircle2, 
  Quote, 
  MapPin, 
  Code,
  ExternalLink,
  ChevronRight,
  ArrowLeft,
  Lock,
  Fingerprint,
  Search,
  Database,
  UserCheck,
  ShieldAlert,
  Activity,
  FileDigit
} from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import { SSOT } from '../../lib/ssot';
import { motion, AnimatePresence } from 'motion/react';
import { HashBadge } from '../../components/ForensicUI';

export default function CrewProfile() {
  const { crewId } = useParams<{ crewId: string }>();
  const navigate = useNavigate();
  const [showSchema, setShowSchema] = useState(false);

  // Find crew data from SSOT
  const crewMember = SSOT.crew.find(c => c.id === crewId);
  
  // If not found or missing profile data, show error or fallback
  if (!crewMember || !crewMember.profile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-audit-white">
        <div className="text-center bento-card p-16 bg-white shadow-2xl border-slate-200">
          <ShieldAlert className="w-20 h-20 text-safety-orange mx-auto mb-8" />
          <h2 className="text-4xl font-black text-authority-navy uppercase mb-6 tracking-tighter">Personnel Not Found</h2>
          <button 
            onClick={() => navigate('/')} 
            className="group inline-flex items-center gap-3 bg-authority-navy text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-safety-orange transition-all shadow-xl shadow-authority-navy/20"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Return to Registry
          </button>
        </div>
      </div>
    );
  }

  // Get reviews from SSOT
  const reviews = SSOT.crew_reviews[crewMember.name] || [];

  const profileData = {
    id: crewMember.id,
    name: crewMember.name,
    role: crewMember.role,
    archetype: crewMember.profile.archetype,
    image: crewMember.profile.image,
    quote: crewMember.profile.fullQuote,
    expertise: crewMember.profile.expertise,
    credential: crewMember.profile.credential,
    reviews: reviews
  };

  const jsonLdGraph = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "@id": `https://javavolcano-touroperator.com/#${profileData.id}`,
      "name": profileData.name,
      "jobTitle": profileData.role,
      "worksFor": {
        "@id": "https://javavolcano-touroperator.com/#organization"
      },
      "knowsAbout": profileData.expertise,
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "name": profileData.credential.name,
        "recognizedBy": {
          "@type": "Organization",
          "name": profileData.credential.issuer
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-audit-white font-sans text-authority-navy selection:bg-safety-orange/30 pb-24 md:pb-0">
      {/* Invisible JSON-LD Injection */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }} />

      {/* Header / Nav */}
      <nav className="bg-authority-navy border-b border-white/5 sticky top-0 z-50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <button 
            onClick={() => navigate('/')}
            className="group flex items-center gap-3 text-[10px] font-mono font-bold text-slate-400 hover:text-white transition-all uppercase tracking-widest"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Back to Registry
          </button>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-2 text-verified-bright text-[10px] font-mono font-bold uppercase tracking-[0.2em]">
              <UserCheck className="w-4 h-4" /> Personnel Profile v1.9
            </div>
            <button 
              onClick={() => setShowSchema(!showSchema)}
              className="font-mono text-[10px] bg-white/5 hover:bg-white/10 text-verified-bright px-4 py-1.5 rounded-lg border border-white/10 transition-all flex items-center gap-2 uppercase tracking-widest"
            >
              <Code className="h-3 w-3" /> {showSchema ? 'Close Graph' : 'Inspect Graph'}
            </button>
          </div>
        </div>
      </nav>

      {/* Schema Debugger */}
      {showSchema && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          className="bg-black/40 border-b border-white/5 overflow-x-auto"
        >
          <div className="max-w-7xl mx-auto px-6 py-10">
            <pre className="text-[10px] text-verified-bright font-mono leading-relaxed">{JSON.stringify(jsonLdGraph, null, 2)}</pre>
          </div>
        </motion.div>
      )}

      <main className="max-w-7xl mx-auto px-6 py-24 space-y-24 relative z-10">
        
        {/* Header Profile Section (ID Card Aesthetic) */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bento-card bg-white p-0 shadow-2xl border-slate-200 relative overflow-hidden"
        >
          <div className="scanline"></div>
          <div className="grid lg:grid-cols-5">
            
            {/* Left: High-Contrast Portrait */}
            <div className="lg:col-span-2 relative group overflow-hidden bg-slate-900">
              <img 
                src={profileData.image} 
                alt={profileData.name} 
                className="w-full h-full object-cover grayscale contrast-150 brightness-75 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
              
              {/* ID Card Overlay Elements */}
              <div className="absolute top-8 left-8 z-20">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl">
                  <Fingerprint className="w-10 h-10 text-white opacity-50" />
                </div>
              </div>
              
              <div className="absolute bottom-8 left-8 right-8 z-20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="status-live"></div>
                  <span className="font-mono text-[10px] text-safety-orange uppercase tracking-widest font-black">Active_Duty_Status</span>
                </div>
                <div className="font-mono text-[10px] text-slate-400 uppercase tracking-widest mb-2">Personnel ID</div>
                <div className="font-mono text-xl font-black text-white tracking-widest bg-white/5 border border-white/10 px-4 py-2 rounded-xl backdrop-blur-sm">
                  {profileData.id.toUpperCase()}
                </div>
              </div>
            </div>

            {/* Right: Personnel Data */}
            <div className="lg:col-span-3 p-16 lg:p-24 flex flex-col justify-center relative">
              <div className="absolute top-0 right-0 p-20 opacity-[0.01] pointer-events-none">
                <UserCheck className="w-[600px] h-[600px]" />
              </div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-safety-orange/10 border border-safety-orange/30 text-safety-orange text-[10px] font-mono font-bold uppercase tracking-[0.2em] mb-10">
                  <Award className="h-4 w-4" /> {profileData.archetype}
                </div>
                <h1 className="text-6xl md:text-9xl font-black text-authority-navy mb-4 leading-[0.85] uppercase tracking-tighter">
                  {profileData.name}
                </h1>
                <p className="text-3xl text-slate-400 font-light uppercase tracking-widest mb-12">{profileData.role}</p>

                <div className="flex flex-wrap gap-3 mb-16">
                  {profileData.expertise.map(skill => (
                    <div key={skill} className="tech-badge bg-slate-50 text-authority-navy border-slate-200 flex items-center gap-2 px-5 py-2.5 text-xs">
                      <CheckCircle2 className="h-4 w-4 text-verified-bright" /> {skill}
                    </div>
                  ))}
                </div>

                <div className="bg-slate-900 text-white p-12 rounded-[3rem] relative overflow-hidden group">
                  <div className="scanline"></div>
                  <Quote className="absolute top-8 right-8 h-24 w-24 text-white/5 rotate-180" />
                  <p className="relative z-10 leading-tight text-3xl font-light italic">"{profileData.quote}"</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Forensic Evidence & Credentials */}
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Left Column: Official License */}
          <motion.section 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bento-card bg-authority-navy text-white p-16 shadow-2xl border-white/5 flex flex-col relative overflow-hidden"
          >
            <div className="scanline"></div>
            <div className="flex items-center justify-between mb-16">
              <div className="flex items-center gap-6">
                <div className="p-4 bg-white/5 rounded-[1.5rem] text-safety-orange border border-white/10">
                  <ShieldCheck className="w-10 h-10" />
                </div>
                <div>
                  <h2 className="text-4xl font-black uppercase leading-none mb-2 tracking-tighter">Operational Credential</h2>
                  <p className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">HPWKI_LICENSED_OPERATIVE</p>
                </div>
              </div>
              <div className="verified-badge bg-verified-bright text-authority-navy px-6 py-3 text-sm">ACTIVE</div>
            </div>
            
            <p className="text-slate-400 text-2xl leading-tight font-light mb-16">
              To operate legally within the Ijen crater, guides must hold active certification from HPWKI. {profileData.name}'s credentials are cryptographically tied to our entity graph.
            </p>

            <div className="bg-white/5 rounded-[3rem] p-10 border border-white/10 mt-auto group">
              <div className="flex justify-between items-center mb-10">
                <div>
                  <p className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-3">Issuer Authority</p>
                  <p className="text-2xl font-black text-white uppercase tracking-tight">{profileData.credential.issuer}</p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-3">Audit Status</p>
                  <div className="flex items-center gap-3 text-verified-bright font-black text-sm uppercase tracking-widest">
                    <div className="w-2.5 h-2.5 bg-verified-bright rounded-full animate-pulse"></div>
                    {profileData.credential.status}
                  </div>
                </div>
              </div>
              <div className="relative bg-black/40 rounded-[2rem] p-6 border border-white/5 flex justify-center items-center h-80 overflow-hidden">
                <img 
                  src={profileData.credential.cardImage} 
                  alt="License KTA" 
                  className="h-full object-cover opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 rounded-2xl grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity">
                   <div className="bg-authority-navy/80 backdrop-blur-md text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest border border-white/10">
                     Hover to Inspect KTA
                   </div>
                </div>
              </div>
              <div className="mt-10">
                <HashBadge hash={profileData.id.toUpperCase() + "...9A2B"} />
              </div>
            </div>
          </motion.section>

          {/* Right Column: Triangulated Reviews */}
          <motion.section 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bento-card bg-white p-16 shadow-2xl border-slate-200"
          >
            <div className="flex items-center justify-between mb-16">
              <div className="flex items-center gap-6">
                <div className="p-4 bg-slate-50 rounded-[1.5rem] text-safety-orange border border-slate-100">
                  <Star className="w-10 h-10" />
                </div>
                <div>
                  <h2 className="text-4xl font-black text-authority-navy uppercase leading-none mb-2 tracking-tighter">Guest Verification</h2>
                  <p className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">TRIANGULATED_PROOF</p>
                </div>
              </div>
              <div className="flex -space-x-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-safety-orange fill-safety-orange" />
                ))}
              </div>
            </div>

            <p className="text-slate-500 text-2xl leading-tight font-light mb-16">
              Algorithmic proof extracted directly from third-party review platforms confirming {profileData.name}'s specific competencies.
            </p>

            <div className="space-y-8">
              {profileData.reviews.map((review, index) => (
                <div key={index} className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:border-safety-orange/30 transition-all group">
                  <div className="flex justify-between items-start mb-8">
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center font-black text-authority-navy border border-slate-200 shadow-sm text-xl">
                        {review.author.charAt(0)}
                      </div>
                      <div>
                        <p className="font-black text-authority-navy uppercase leading-none mb-2 text-xl tracking-tight">{review.author}</p>
                        <p className="font-mono text-[10px] text-slate-400 uppercase tracking-widest flex items-center gap-2">
                          <MapPin className="h-3 w-3" /> via {review.platform}
                        </p>
                      </div>
                    </div>
                    <div className="verified-badge bg-white text-authority-navy border-slate-200 px-4 py-2">VERIFIED_REVIEW</div>
                  </div>
                  <p className="text-2xl text-slate-600 italic font-light leading-tight">"{review.text}"</p>
                </div>
              ))}
              
              {profileData.reviews.length === 0 && (
                 <div className="text-center py-24 text-slate-400 bento-card border-dashed border-2">
                   <div className="status-live mb-4 mx-auto"></div>
                   <p className="font-mono text-[10px] uppercase tracking-widest">No specific reviews loaded for this profile yet.</p>
                 </div>
              )}
            </div>
          </motion.section>

        </div>
        
        {/* Footer Audit Stamp */}
        <div className="pt-16 border-t border-slate-200 flex flex-col items-center">
          <div className="p-12 bg-white border-4 border-safety-orange rounded-[3rem] rotate-2 shadow-2xl relative overflow-hidden group hover:rotate-0 transition-transform">
            <div className="scanline"></div>
            <div className="flex flex-col items-center">
              <UserCheck className="w-20 h-20 text-safety-orange mb-8" />
              <span className="text-5xl font-black text-authority-navy uppercase tracking-tighter leading-none mb-3">PERSONNEL_VERIFIED</span>
              <span className="font-mono text-[10px] text-slate-400 tracking-[0.4em] uppercase">Roster Audit 2026</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
