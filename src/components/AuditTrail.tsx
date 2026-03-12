import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, History, X, Fingerprint, Clock, CheckCircle2 } from 'lucide-react';

export interface AuditLogEntry {
  timestamp: string;
  event: string;
  detail: string;
}

interface AuditTrailProps {
  entityId: string;
  entityName: string;
  logs: AuditLogEntry[];
  isOpen: boolean;
  onClose: () => void;
}

export const AuditTrail: React.FC<AuditTrailProps> = ({ entityId, entityName, logs, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-authority-navy/40 backdrop-blur-sm z-[100]"
          />
          
          {/* Popover */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white rounded-[2rem] shadow-2xl z-[101] overflow-hidden border border-slate-200"
          >
            <div className="scanline"></div>
            
            {/* Header */}
            <div className="p-8 border-b border-slate-100 flex items-center justify-between bg-audit-white/50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-safety-orange/10 rounded-xl flex items-center justify-center text-safety-orange">
                  <History className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-authority-navy uppercase tracking-tighter leading-none mb-1">Audit Trail</h3>
                  <p className="font-mono text-[11px] text-slate-500 uppercase tracking-widest">Entity: {entityName} // ID: {entityId}</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="w-10 h-10 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-500 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Content */}
            <div className="p-8 max-h-[60vh] overflow-y-auto custom-scrollbar">
              <div className="space-y-8 relative">
                {/* Timeline Line */}
                <div className="absolute left-[19px] top-2 bottom-2 w-px bg-slate-100"></div>
                
                {logs.map((log, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="relative pl-12"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-0 top-1 w-10 h-10 rounded-xl bg-white border-2 border-slate-100 flex items-center justify-center z-10">
                      <CheckCircle2 className="w-4 h-4 text-verified-bright" />
                    </div>
                    
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[11px] font-black text-safety-orange uppercase tracking-widest">{log.event}</span>
                        <div className="flex items-center gap-1.5 text-slate-500">
                          <Clock className="w-3 h-3" />
                          <span className="font-mono text-[11px] uppercase tracking-widest">{log.timestamp}</span>
                        </div>
                      </div>
                      <p className="text-sm text-authority-navy font-medium leading-tight">{log.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Footer */}
            <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Fingerprint className="w-4 h-4 text-slate-300" />
                <span className="font-mono text-[11px] text-slate-500 uppercase tracking-widest">Hash: {entityId.slice(0, 12)}...</span>
              </div>
              <div className="tech-badge bg-verified-bright/10 text-verified-bright border-verified-bright/20">
                STATUS: SECURE
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
