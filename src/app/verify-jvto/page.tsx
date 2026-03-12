import React, { useState, useEffect } from 'react';
import { Shield, FileCheck, ArrowLeft, ExternalLink, MapPin, FileText, Stethoscope, History, Lock, Fingerprint, Search, Database, ShieldCheck, CheckCircle2, Eye, Download, ChevronRight, Building2, Activity, UserCheck, MessageSquare, ClipboardList } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { SSOT } from '../../lib/ssot';
import { EvidenceBadge, SectionHeading, HashBadge } from '../../components/ForensicUI';
import { AuditStamp } from '../../components/AuditStamp';
import { motion, AnimatePresence } from 'motion/react';
import { AssetViewer } from '../../components/AssetViewer';
import { BookingRail } from '../../components/BookingRail';
import { AuditTrail } from '../../components/AuditTrail';
import { AUDIT_LOGS } from '../../lib/auditLogs';
import { ForensicAnnotation } from '../../types';

export default function VerifyJvto() {
  const navigate = useNavigate();
  const location = useLocation();
  const onBack = () => navigate('/');
  const [selectedAsset, setSelectedAsset] = useState<{ url: string, title: string, hash: string, type: 'image' | 'pdf', annotations?: ForensicAnnotation[] } | null>(null);
  const [isAuditOpen, setIsAuditOpen] = useState(false);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const openAsset = (url: string, title: string, hash: string, type: 'image' | 'pdf' = 'image', annotations?: ForensicAnnotation[]) => {
    setSelectedAsset({ url, title, hash, type, annotations });
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
            className="group flex items-center gap-3 text-[11px] font-mono font-bold text-slate-500 hover:text-authority-navy transition-all uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Hub
          </button>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setIsAuditOpen(true)}
              className="flex items-center gap-2 text-[11px] font-mono font-bold text-safety-orange hover:text-authority-navy transition-all uppercase tracking-widest border border-safety-orange/20 px-3 py-1.5 rounded-lg bg-safety-orange/5"
            >
              <ClipboardList className="w-4 h-4" /> View Org Audit Trail
            </button>
            <div className="flex items-center gap-3 text-safety-orange text-[11px] font-mono font-bold uppercase tracking-[0.2em]">
              <Lock className="w-4 h-4" /> Forensic Registry v1.9
            </div>
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
            <span className="font-mono text-[11px] uppercase tracking-widest text-slate-500">Forensic Evidence Locker</span>
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
          
          {/* 1. License to Operate */}
          <motion.section
            id="license"
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
                  <h2 className="text-3xl font-black text-authority-navy uppercase leading-none mb-1">License to Operate</h2>
                  <p className="font-mono text-[11px] text-slate-500 uppercase tracking-widest">TDUP_VERIFICATION</p>
                </div>
              </div>
              <EvidenceBadge type="verified" text="Official License" />
            </div>
            
            <div className="grid lg:grid-cols-2 gap-6">
              {SSOT.proof_vault.license.map((item) => (
                <div 
                  key={item.slug}
                  onClick={() => openAsset(item.url, item.title, item.hash || 'PENDING', 'image', item.annotations)}
                  className="bento-card bg-white p-8 flex items-center justify-between group cursor-pointer hover:border-safety-orange transition-all"
                >
                  <div className="flex items-center gap-6">
                    <div className="p-4 bg-slate-50 rounded-xl text-slate-500 group-hover:text-safety-orange transition-colors">
                      <FileCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-authority-navy uppercase leading-tight mb-1">{item.title}</h3>
                      <p className="font-mono text-[11px] text-slate-500 uppercase tracking-widest">{item.category} // {item.last_verified}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-safety-orange group-hover:translate-x-1 transition-all" />
                </div>
              ))}
            </div>
          </motion.section>

          {/* 2. Legal Entity & Business Identity */}
          <motion.section
            id="legality"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-50 rounded-2xl text-safety-orange border border-slate-100">
                  <Fingerprint className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-authority-navy uppercase leading-none mb-1">Legal Entity</h2>
                  <p className="font-mono text-[11px] text-slate-500 uppercase tracking-widest">NIB_REGISTRATION</p>
                </div>
              </div>
              <EvidenceBadge type="verified" text="Active NIB" />
            </div>
            
            <div className="grid lg:grid-cols-2 gap-6">
              {SSOT.proof_vault.legality.map((item) => (
                <div 
                  key={item.slug}
                  onClick={() => openAsset(item.url, item.title, item.hash || 'PENDING', 'image', item.annotations)}
                  className="bento-card bg-white p-8 flex items-center justify-between group cursor-pointer hover:border-safety-orange transition-all"
                >
                  <div className="flex items-center gap-6">
                    <div className="p-4 bg-slate-50 rounded-xl text-slate-500 group-hover:text-safety-orange transition-colors">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-authority-navy uppercase leading-tight mb-1">{item.title}</h3>
                      <p className="font-mono text-[11px] text-slate-500 uppercase tracking-widest">{item.category} // {item.last_verified}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-safety-orange group-hover:translate-x-1 transition-all" />
                </div>
              ))}
            </div>
          </motion.section>

          {/* 3. Operational Transparency & Field Evidence */}
          <motion.section
            id="accountability"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-50 rounded-2xl text-safety-orange border border-slate-100">
                  <Database className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-authority-navy uppercase leading-none mb-1">Accountability</h2>
                  <p className="font-mono text-[11px] text-slate-500 uppercase tracking-widest">FIELD_EVIDENCE_LOGS</p>
                </div>
              </div>
              <EvidenceBadge type="verified" text="Live Ops" />
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SSOT.proof_vault.accountability.map((item) => (
                <div 
                  key={item.slug}
                  onClick={() => openAsset(item.url, item.title, item.hash || 'PENDING', 'image', item.annotations)}
                  className="bento-card bg-white overflow-hidden group cursor-pointer hover:border-safety-orange transition-all"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img src={item.url} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-authority-navy/20 group-hover:bg-transparent transition-colors"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-sm font-black text-authority-navy uppercase leading-tight mb-2">{item.title}</h3>
                    <p className="font-mono text-[11px] text-slate-500 uppercase tracking-widest">{item.category} // {item.last_verified}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* 4. Health & Safety Protocols */}
          <motion.section
            id="safety"
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
                  <h2 className="text-3xl font-black text-authority-navy uppercase leading-none mb-1">Safety Protocols</h2>
                  <p className="font-mono text-[11px] text-slate-500 uppercase tracking-widest">HEALTH_SCREENING_AUDIT</p>
                </div>
              </div>
              <EvidenceBadge type="verified" text="Medical Compliance" />
            </div>
            
            <div className="grid lg:grid-cols-2 gap-6">
              {SSOT.proof_vault.safety.map((item) => (
                <div 
                  key={item.slug}
                  onClick={() => openAsset(item.url, item.title, item.hash || 'PENDING', 'image', item.annotations)}
                  className="bento-card bg-white p-8 flex items-center justify-between group cursor-pointer hover:border-verified-bright transition-all"
                >
                  <div className="flex items-center gap-6">
                    <div className="p-4 bg-slate-50 rounded-xl text-slate-500 group-hover:text-verified-bright transition-colors">
                      <Activity className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-authority-navy uppercase leading-tight mb-1">{item.title}</h3>
                      <p className="font-mono text-[11px] text-slate-500 uppercase tracking-widest">{item.category} // {item.last_verified}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-verified-bright group-hover:translate-x-1 transition-all" />
                </div>
              ))}
            </div>
          </motion.section>

          {/* 5. Tourist Police Integration & Safety Command */}
          <motion.section
            id="police-safety"
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
                  <h2 className="text-3xl font-black text-authority-navy uppercase leading-none mb-1">Police Integration</h2>
                  <p className="font-mono text-[11px] text-slate-500 uppercase tracking-widest">AUTHORITY_COMMAND_LOGS</p>
                </div>
              </div>
              <EvidenceBadge type="verified" text="Active Escort" />
            </div>
            
            <div className="grid lg:grid-cols-2 gap-6">
              {SSOT.proof_vault.police_safety.map((item) => (
                <div 
                  key={item.slug}
                  onClick={() => openAsset(item.url, item.title, item.hash || 'PENDING', 'image', item.annotations)}
                  className="bento-card bg-white p-8 flex items-center justify-between group cursor-pointer hover:border-safety-orange transition-all"
                >
                  <div className="flex items-center gap-6">
                    <div className="p-4 bg-slate-50 rounded-xl text-slate-500 group-hover:text-safety-orange transition-colors">
                      <Lock className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-authority-navy uppercase leading-tight mb-1">{item.title}</h3>
                      <p className="font-mono text-[11px] text-slate-500 uppercase tracking-widest">{item.category} // {item.last_verified}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-safety-orange group-hover:translate-x-1 transition-all" />
                </div>
              ))}
            </div>
          </motion.section>

          {/* 6. Guide / Team Credentials */}
          <motion.section
            id="credentials"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-50 rounded-2xl text-safety-orange border border-slate-100">
                  <UserCheck className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-authority-navy uppercase leading-none mb-1">Team Credentials</h2>
                  <p className="font-mono text-[11px] text-slate-500 uppercase tracking-widest">LICENSED_PERSONNEL</p>
                </div>
              </div>
              <EvidenceBadge type="verified" text="Verified Guides" />
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SSOT.proof_vault.credentials.map((item) => (
                <div 
                  key={item.slug}
                  onClick={() => openAsset(item.url, item.title, item.hash || 'PENDING', 'image', item.annotations)}
                  className="bento-card bg-white p-8 flex items-center justify-between group cursor-pointer hover:border-safety-orange transition-all"
                >
                  <div className="flex items-center gap-6">
                    <div className="p-4 bg-slate-50 rounded-xl text-slate-500 group-hover:text-safety-orange transition-colors">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-authority-navy uppercase leading-tight mb-1">{item.title}</h3>
                      <p className="font-mono text-[11px] text-slate-500 uppercase tracking-widest">{item.category} // {item.last_verified}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-safety-orange group-hover:translate-x-1 transition-all" />
                </div>
              ))}
            </div>
          </motion.section>

          {/* 7. Press & Recognition */}
          <motion.section
            id="press"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-50 rounded-2xl text-safety-orange border border-slate-100">
                  <MessageSquare className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-authority-navy uppercase leading-none mb-1">Press & Recognition</h2>
                  <p className="font-mono text-[11px] text-slate-500 uppercase tracking-widest">THIRD_PARTY_VALIDATION</p>
                </div>
              </div>
              <EvidenceBadge type="verified" text="Media Proof" />
            </div>
            
            <div className="grid lg:grid-cols-2 gap-6">
              {SSOT.proof_vault.press.map((item) => (
                <div 
                  key={item.slug}
                  onClick={() => openAsset(item.url, item.title, item.hash || 'PENDING', 'image', item.annotations)}
                  className="bento-card bg-white p-8 flex items-center justify-between group cursor-pointer hover:border-safety-orange transition-all"
                >
                  <div className="flex items-center gap-6">
                    <div className="p-4 bg-slate-50 rounded-xl text-slate-500 group-hover:text-safety-orange transition-colors">
                      <ExternalLink className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-authority-navy uppercase leading-tight mb-1">{item.title}</h3>
                      <p className="font-mono text-[11px] text-slate-500 uppercase tracking-widest">{item.category} // {item.last_verified}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-safety-orange group-hover:translate-x-1 transition-all" />
                </div>
              ))}
            </div>
          </motion.section>

          {/* 8. History & Historical Validation */}
          <motion.section
            id="history"
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
                  <p className="font-mono text-[11px] text-slate-500 uppercase tracking-widest">ARCHIVAL_CONTINUITY</p>
                </div>
              </div>
              <EvidenceBadge type="verified" text="Est. 2015" />
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SSOT.proof_vault.history.map((item) => (
                <div 
                  key={item.slug}
                  onClick={() => openAsset(item.url, item.title, item.hash || 'PENDING', 'image', item.annotations)}
                  className="bento-card bg-white overflow-hidden group cursor-pointer hover:border-verified-bright transition-all"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img src={item.url} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-authority-navy/20 group-hover:bg-transparent transition-colors"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-sm font-black text-authority-navy uppercase leading-tight mb-2">{item.title}</h3>
                    <p className="font-mono text-[11px] text-slate-500 uppercase tracking-widest">{item.category} // {item.last_verified}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* 9. Partners & Memberships */}
          <motion.section
            id="partners"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-50 rounded-2xl text-safety-orange border border-slate-100">
                  <Building2 className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-authority-navy uppercase leading-none mb-1">Partner Network</h2>
                  <p className="font-mono text-[11px] text-slate-500 uppercase tracking-widest">VERIFIED_AFFILIATIONS</p>
                </div>
              </div>
              <EvidenceBadge type="verified" text="Active Network" />
            </div>
            
            <div className="grid lg:grid-cols-2 gap-6">
              {SSOT.proof_vault.partners.map((item) => (
                <div 
                  key={item.slug}
                  onClick={() => openAsset(item.url, item.title, item.hash || 'PENDING', 'image', item.annotations)}
                  className="bento-card bg-white p-8 flex items-center justify-between group cursor-pointer hover:border-safety-orange transition-all"
                >
                  <div className="flex items-center gap-6">
                    <div className="p-4 bg-slate-50 rounded-xl text-slate-500 group-hover:text-safety-orange transition-colors">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-authority-navy uppercase leading-tight mb-1">{item.title}</h3>
                      <p className="font-mono text-[11px] text-slate-500 uppercase tracking-widest">{item.category} // {item.last_verified}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-safety-orange group-hover:translate-x-1 transition-all" />
                </div>
              ))}
            </div>
          </motion.section>

          {/* 10. Reputation (Review Verification Paths) */}
          <motion.section
            id="reputation"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-50 rounded-2xl text-safety-orange border border-slate-100">
                  <MessageSquare className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-authority-navy uppercase leading-none mb-1">Reputation</h2>
                  <p className="font-mono text-[11px] text-slate-500 uppercase tracking-widest">REVIEW_VERIFICATION_PATHS</p>
                </div>
              </div>
              <EvidenceBadge type="verified" text="Trust Registry" />
            </div>
            
            <div className="bento-card bg-white p-12 text-center border-dashed border-2 border-slate-200">
              <Database className="w-12 h-12 text-slate-200 mx-auto mb-6" />
              <h3 className="text-xl font-black text-authority-navy uppercase mb-4">Reputation Registry</h3>
              <p className="text-slate-500 max-w-md mx-auto mb-8">
                We are currently indexing review patterns across TripAdvisor, Google, and Booking.com. 
                Use the links below to verify our reputation independently.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://www.tripadvisor.com" target="_blank" className="px-6 py-3 bg-slate-50 rounded-xl font-mono text-[11px] uppercase tracking-widest hover:bg-safety-orange hover:text-white transition-all">TripAdvisor</a>
                <a href="https://www.google.com/maps" target="_blank" className="px-6 py-3 bg-slate-50 rounded-xl font-mono text-[11px] uppercase tracking-widest hover:bg-safety-orange hover:text-white transition-all">Google Reviews</a>
              </div>
            </div>
          </motion.section>

        </div>
        
        {/* Footer Audit Stamp */}
        <AuditStamp />
      </div>

      {/* Asset Viewer Modal */}
      <AssetViewer 
        isOpen={!!selectedAsset}
        onClose={() => setSelectedAsset(null)}
        assetUrl={selectedAsset?.url || ''}
        assetTitle={selectedAsset?.title || ''}
        assetHash={selectedAsset?.hash || ''}
        assetType={selectedAsset?.type || 'image'}
        annotations={selectedAsset?.annotations}
      />

      <AuditTrail 
        entityId="jvto_org"
        entityName="Java Volcano Tour Operator"
        logs={AUDIT_LOGS["jvto_org"] || []}
        isOpen={isAuditOpen}
        onClose={() => setIsAuditOpen(false)}
      />
    </div>
  );
}
