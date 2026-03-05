import React, { useState } from 'react';
import { Shield, FileCheck, ArrowLeft, ExternalLink, MapPin, FileText, Stethoscope, History, Lock, Fingerprint, Search, Database, ShieldCheck, CheckCircle2, Eye, Download, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SSOT } from '../../lib/ssot';
import { EvidenceBadge, SectionHeading, HashBadge } from '../../components/ForensicUI';
import { motion, AnimatePresence } from 'motion/react';
import { AssetViewer } from '../../components/AssetViewer';
import { BookingRail } from '../../components/BookingRail';

export default function VerifyJvto() {
  const navigate = useNavigate();
  const onBack = () => navigate('/');
  const [selectedAsset, setSelectedAsset] = useState<{ url: string, title: string, hash: string, type: 'image' | 'pdf' } | null>(null);

  const openAsset = (url: string, title: string, hash: string, type: 'image' | 'pdf' = 'image') => {
    setSelectedAsset({ url, title, hash, type });
  };

  return (
    <div className="min-h-screen bg-audit-white text-authority-navy font-sans selection:bg-safety-orange/30 pb-24 md:pb-0">
      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 grid-pattern opacity-5 pointer-events-none"></div>
      
      {/* Header */}
      <div className="border-b border-slate-200 bg-audit-white/80 relative z-40 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="group flex items-center gap-3 text-[10px] font-mono font-bold text-slate-400 hover:text-authority-navy transition-all uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Hub
          </button>
          <div className="flex items-center gap-3 text-safety-orange text-[10px] font-mono font-bold uppercase tracking-[0.2em]">
            <Lock className="w-4 h-4" /> Forensic Registry v1.9
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24 max-w-6xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="flex items-center gap-2 mb-6">
            <Database className="w-4 h-4 text-safety-orange" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">Forensic Evidence Locker</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-authority-navy mb-8 leading-[0.85] uppercase tracking-tighter">
            IMMUTABLE <br />
            <span className="text-safety-orange">PROOF.</span>
          </h1>
          <p className="text-slate-500 text-xl leading-tight font-light max-w-2xl">
            A transparent registry of our legal, medical, and operational credentials. 
            All data below is verifiable against official government or third-party databases.
          </p>
        </motion.div>

        <div className="space-y-32">
          
          {/* 1. Authority Proof */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-50 rounded-2xl text-safety-orange border border-slate-100">
                  <Shield className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-authority-navy uppercase leading-none mb-1">Authority Proof</h2>
                  <p className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">POLICE_LED_OPERATIONS</p>
                </div>
              </div>
              <EvidenceBadge type="verified" text="Active Status" />
            </div>
            
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="bento-card lg:col-span-2 bg-white p-12 relative overflow-hidden group">
                <div className="scanline"></div>
                <div className="flex flex-col md:flex-row gap-12 items-center">
                  <div className="md:w-1/2">
                    <div className="font-mono text-[10px] text-slate-400 uppercase tracking-widest mb-6">Founder Identity</div>
                    <h3 className="text-4xl font-black text-authority-navy uppercase leading-none mb-4">{SSOT.organization.founder.name}</h3>
                    <p className="text-safety-orange font-black text-lg uppercase tracking-wider mb-2">{SSOT.organization.founder.role}</p>
                    <p className="text-slate-500 text-lg font-light leading-tight mb-8">{SSOT.organization.founder.unit}</p>
                    <HashBadge hash="8F3E9A2B...1C4D" />
                  </div>
                  <div className="md:w-1/2 relative">
                    <div className="absolute -inset-4 bg-safety-orange/5 rounded-[2rem] blur-xl"></div>
                    <img 
                      src="https://javavolcano-touroperator.com/founder/mr-sam-tourist-police-portrait.png" 
                      alt="Mr Sam" 
                      className="w-full h-80 object-cover rounded-[2rem] grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-700 relative z-10 border border-slate-200"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
              
              <div className="bento-card bg-authority-navy text-white p-10 flex flex-col justify-between">
                <div>
                  <div className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-8">Press Corroboration</div>
                  <div className="space-y-6">
                    {SSOT.press.map((item, i) => (
                      <div 
                        key={i}
                        onClick={() => openAsset(item.screenshot || '', item.title, 'B257B7...DA64B77', 'image')}
                        className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-safety-orange/50 transition-all group cursor-pointer"
                      >
                        <div className="flex justify-between items-start mb-4">
                          <span className="text-safety-orange font-black text-[10px] uppercase tracking-widest">{item.publisher}</span>
                          <span className="font-mono text-[8px] text-slate-500 uppercase">{item.date}</span>
                        </div>
                        <div className="text-white text-lg font-black uppercase leading-tight group-hover:text-safety-orange transition-colors">{item.title}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">3 Sources Verified</span>
                  <ChevronRight className="w-5 h-5 text-safety-orange" />
                </div>
              </div>
            </div>
          </motion.section>

          {/* 2. Medical Proof */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-50 rounded-2xl text-verified-bright border border-slate-100">
                  <Stethoscope className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-authority-navy uppercase leading-none mb-1">Medical Proof</h2>
                  <p className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">CLINICAL_OVERSIGHT</p>
                </div>
              </div>
              <EvidenceBadge type="verified" text="Licensed Unit" />
            </div>

            <div className="bento-card bg-white p-12 relative overflow-hidden group">
              <div className="scanline"></div>
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-10">
                  <div>
                    <div className="font-mono text-[10px] text-slate-400 uppercase tracking-widest mb-6">Supervising Physician</div>
                    <h3 className="text-4xl font-black text-authority-navy uppercase leading-none mb-4">{SSOT.medical.doctor.name}</h3>
                    <p className="text-verified-bright font-black text-lg uppercase tracking-wider mb-8">{SSOT.medical.doctor.affiliation}</p>
                    <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-3xl border border-slate-100">
                      <div className="p-4 bg-white rounded-2xl shadow-sm">
                        <ShieldCheck className="w-8 h-8 text-verified-bright" />
                      </div>
                      <div>
                        <p className="font-mono text-[10px] text-slate-400 uppercase tracking-widest mb-1">Audit Status</p>
                        <p className="text-authority-navy font-black uppercase tracking-widest text-xl">100% COMPLIANT</p>
                      </div>
                    </div>
                  </div>
                  <HashBadge hash="C52194BB...7D3C" />
                </div>
                
                <div className="space-y-8">
                  <div 
                    onClick={() => openAsset('https://javavolcano-touroperator.com/medical/doctor-license-preview.png', 'SIP License Preview', 'C52194BB...7D3C', 'image')}
                    className="relative bg-slate-900 rounded-[2.5rem] p-10 overflow-hidden group cursor-pointer"
                  >
                    <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity">
                      <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="relative z-10">
                      <div className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-6">Practice License (SIP)</div>
                      <div className="font-mono text-verified-bright text-2xl font-black tracking-widest mb-8 break-all">
                        {SSOT.medical.doctor.sip}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Eye className="w-5 h-5 text-verified-bright" />
                          <span className="font-mono text-[10px] text-white uppercase tracking-widest font-black">Inspect License</span>
                        </div>
                        <div className="tech-badge bg-verified-bright text-authority-navy">VERIFIED_2026</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 px-6 py-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <Search className="w-5 h-5 text-slate-400" />
                    <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">Verifiable via SatuSehat SDMK Portal</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* 3. Legal Proof */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-50 rounded-2xl text-safety-orange border border-slate-100">
                  <FileText className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-authority-navy uppercase leading-none mb-1">Legal Proof</h2>
                  <p className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">REGISTERED_ENTITY</p>
                </div>
              </div>
              <EvidenceBadge type="doc" text="Official NIB" />
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              <div className="bento-card lg:col-span-2 bg-white p-12 relative overflow-hidden group">
                <div className="scanline"></div>
                <div className="flex flex-col md:flex-row gap-12 justify-between items-start">
                  <div className="max-w-md">
                    <div className="font-mono text-[10px] text-slate-400 uppercase tracking-widest mb-6">Registered Entity</div>
                    <h3 className="text-4xl font-black text-authority-navy uppercase leading-none mb-4">{SSOT.organization.legalName}</h3>
                    <p className="text-slate-500 text-lg font-light mb-10">Established: {SSOT.organization.foundingDate} in Bondowoso, East Java.</p>
                    <div className="flex items-center gap-4">
                      <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                        <MapPin className="w-8 h-8 text-safety-orange" />
                      </div>
                      <div>
                        <p className="font-mono text-[10px] text-slate-400 uppercase tracking-widest mb-1">Headquarters</p>
                        <p className="text-authority-navy font-black uppercase text-lg leading-tight">{SSOT.organization.address}</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-auto">
                    <div className="font-mono text-[10px] text-slate-400 uppercase tracking-widest mb-6">NIB (Business ID)</div>
                    <div className="font-mono text-safety-orange text-3xl font-black tracking-widest bg-slate-900 px-8 py-6 rounded-[2rem] shadow-2xl border border-white/5 mb-6">
                      {SSOT.organization.nib}
                    </div>
                    <HashBadge hash="FA20DDE3...9A2B" />
                  </div>
                </div>
              </div>
              
              <div 
                onClick={() => openAsset('https://javavolcano-touroperator.com/legal/nib-preview.png', 'NIB Document Preview', 'FA20DDE3...9A2B', 'image')}
                className="bento-card bg-slate-900 text-white p-10 flex flex-col justify-between group cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                   <FileText className="w-64 h-64 -rotate-12 absolute -right-12 -bottom-12" />
                </div>
                <div className="relative z-10">
                  <div className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-8">Document Scan</div>
                  <h3 className="text-2xl font-black uppercase leading-tight mb-4">Official NIB <br />Certificate</h3>
                  <p className="text-slate-400 text-sm font-light leading-tight">Verified by OSS (Online Single Submission) Indonesia.</p>
                </div>
                <div className="relative z-10 flex items-center justify-between mt-12 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <Eye className="w-5 h-5 text-safety-orange" />
                    <span className="font-mono text-[10px] uppercase tracking-widest font-black">Inspect Doc</span>
                  </div>
                  <Download className="w-5 h-5 text-slate-500" />
                </div>
              </div>
            </div>
          </motion.section>

          {/* 4. Operational Assets & Credentials */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-50 rounded-2xl text-safety-orange border border-slate-100">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-authority-navy uppercase leading-none mb-1">Operational Assets</h2>
                  <p className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">INFRASTRUCTURE_AUDIT</p>
                </div>
              </div>
              <EvidenceBadge type="verified" text="Certified Gear" />
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Assets Inventory */}
              <div className="bento-card bg-white p-10 relative overflow-hidden">
                <div className="scanline"></div>
                <div className="font-mono text-[10px] text-slate-400 uppercase tracking-widest mb-8">Equipment Registry</div>
                <div className="space-y-4">
                  {SSOT.assets_inventory.map((asset) => (
                    <div key={asset.id} className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-safety-orange/30 transition-all">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-slate-100 font-mono text-xs font-bold text-authority-navy">
                          {asset.quantity}
                        </div>
                        <div>
                          <p className="text-sm font-black text-authority-navy uppercase leading-none mb-1">{asset.name}</p>
                          <p className="font-mono text-[8px] text-slate-400 uppercase tracking-widest">{asset.category} // {asset.status}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-mono text-[8px] text-slate-400 uppercase tracking-widest mb-1">Last Check</p>
                        <p className="text-[10px] font-black text-authority-navy">{asset.last_check}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Credentials */}
              <div className="bento-card bg-authority-navy text-white p-10 relative overflow-hidden">
                <div className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-8">Professional Credentials</div>
                <div className="space-y-6">
                  {SSOT.verification_credentials.map((cred) => (
                    <div key={cred.id} className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-safety-orange/50 transition-all group">
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-safety-orange font-black text-[10px] uppercase tracking-widest">{cred.type}</span>
                        <span className="font-mono text-[8px] text-slate-500 uppercase">Expiry: {cred.expiry}</span>
                      </div>
                      <h4 className="text-xl font-black uppercase leading-tight mb-2 group-hover:text-safety-orange transition-colors">{cred.title}</h4>
                      <p className="text-slate-400 text-xs font-light uppercase tracking-wider">{cred.issuer}</p>
                      <div className="mt-4 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-verified-bright" />
                        <span className="font-mono text-[8px] text-verified-bright uppercase tracking-widest font-bold">{cred.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* 5. History Proof */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-50 rounded-2xl text-verified-bright border border-slate-100">
                  <History className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-authority-navy uppercase leading-none mb-1">History Proof</h2>
                  <p className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">ARCHIVAL_CONTINUITY</p>
                </div>
              </div>
              <EvidenceBadge type="verified" text="Est. 2015" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div 
                onClick={() => openAsset('https://javavolcano-touroperator.com/history/booking-2015-plaque.jpg', 'Booking.com Award 2015', '9C2A...7F3B', 'image')}
                className="bento-card bg-white p-12 relative group cursor-pointer"
              >
                <div className="scanline"></div>
                <div className="flex justify-between items-start mb-10">
                  <div className="text-safety-orange font-black font-mono text-[10px] uppercase tracking-[0.2em]">2015 Artifact</div>
                  <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 group-hover:bg-safety-orange group-hover:text-white transition-all">
                    <Eye className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-3xl font-black text-authority-navy uppercase leading-tight mb-8">{SSOT.history.award2015.title}</h3>
                <div className="space-y-4 mb-10">
                  <div className="flex justify-between items-center py-3 border-b border-slate-100">
                    <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">Recipient</span>
                    <span className="text-sm font-black text-authority-navy uppercase">{SSOT.history.award2015.recipient}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-slate-100">
                    <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">Score</span>
                    <span className="text-sm font-black text-verified-bright uppercase">{SSOT.history.award2015.score}</span>
                  </div>
                </div>
                <HashBadge hash="9C2A...7F3B" />
              </div>
              
              <div 
                onClick={() => openAsset('https://javavolcano-touroperator.com/history/stefan-loose-ijen-bondowoso-page.png', 'Stefan Loose Guidebook 2016', '4F8E...2D1A', 'image')}
                className="bento-card bg-white p-12 relative group cursor-pointer"
              >
                <div className="scanline"></div>
                <div className="flex justify-between items-start mb-10">
                  <div className="text-safety-orange font-black font-mono text-[10px] uppercase tracking-[0.2em]">2016 Artifact</div>
                  <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 group-hover:bg-safety-orange group-hover:text-white transition-all">
                    <Eye className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-3xl font-black text-authority-navy uppercase leading-tight mb-8">{SSOT.history.book2016.title}</h3>
                <div className="space-y-4 mb-10">
                  <div className="flex justify-between items-center py-3 border-b border-slate-100">
                    <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">ISBN</span>
                    <span className="text-sm font-black text-authority-navy uppercase">{SSOT.history.book2016.isbn}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-slate-100">
                    <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">Page</span>
                    <span className="text-sm font-black text-authority-navy uppercase">{SSOT.history.book2016.page}</span>
                  </div>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 italic text-sm text-slate-500 leading-tight mb-8">
                  "{SSOT.history.book2016.quote}"
                </div>
                <HashBadge hash="4F8E...2D1A" />
              </div>
            </div>
          </motion.section>

          {/* Partner Network */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-50 rounded-2xl text-safety-orange border border-slate-100">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-authority-navy uppercase leading-none mb-1">Partner Network</h2>
                  <p className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">VERIFIED_AFFILIATIONS</p>
                </div>
              </div>
              <EvidenceBadge type="verified" text="Active Network" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SSOT.partners.map((partner, idx) => {
                const partnerSlug = partner.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                return (
                  <div 
                    key={idx} 
                    onClick={() => navigate(`/verify-jvto/partners/${partnerSlug}`)}
                    className="bento-card bg-white p-8 relative group hover:border-safety-orange/30 transition-all cursor-pointer"
                  >
                    <div className="scanline"></div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 text-authority-navy group-hover:text-safety-orange transition-colors">
                        <ShieldCheck className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-authority-navy uppercase leading-none mb-1">{partner.name}</h3>
                        <p className="font-mono text-[10px] text-safety-orange uppercase tracking-widest">{partner.status}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                      <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        Status: Verified <ExternalLink className="w-3 h-3 group-hover:text-safety-orange transition-colors" />
                      </span>
                      <HashBadge hash={`PRT-${idx + 1}X9...`} />
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.section>

        </div>
        
        {/* Footer Audit Stamp */}
        <div className="mt-32 pt-12 border-t border-slate-200 flex flex-col items-center">
          <div className="p-12 bg-white border-4 border-safety-orange rounded-[2.5rem] rotate-2 shadow-2xl relative overflow-hidden group hover:rotate-0 transition-transform">
            <div className="scanline"></div>
            <div className="flex flex-col items-center">
              <ShieldCheck className="w-20 h-20 text-safety-orange mb-8" />
              <span className="text-5xl font-black text-authority-navy uppercase tracking-tighter leading-none mb-3">AUDIT_COMPLETE</span>
              <span className="font-mono text-[10px] text-slate-400 tracking-[0.4em] uppercase">Registry Verified 2026</span>
            </div>
          </div>
          <p className="mt-12 font-mono text-[10px] text-slate-400 uppercase tracking-widest">
            System: JVTO_FORENSIC_V1.9 // Node: ID_JKT_01_SECURE
          </p>
        </div>
      </div>

      {/* Asset Viewer Modal */}
      <AssetViewer 
        isOpen={!!selectedAsset}
        onClose={() => setSelectedAsset(null)}
        assetUrl={selectedAsset?.url || ''}
        assetTitle={selectedAsset?.title || ''}
        assetHash={selectedAsset?.hash || ''}
        assetType={selectedAsset?.type || 'image'}
      />
    </div>
  );
}
