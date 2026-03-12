import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn, ZoomOut, Download, ShieldCheck, FileText, Fingerprint, Search, Info } from 'lucide-react';
import { ForensicAnnotation } from '../types';

interface AssetViewerProps {
  isOpen: boolean;
  onClose: () => void;
  assetUrl: string;
  assetTitle: string;
  assetHash: string;
  assetType: 'image' | 'pdf';
  annotations?: ForensicAnnotation[];
}

export const AssetViewer = ({ isOpen, onClose, assetUrl, assetTitle, assetHash, assetType, annotations = [] }: AssetViewerProps) => {
  const [zoom, setZoom] = useState(1);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLoupeActive, setIsLoupeActive] = useState(false);
  const [activeAnnotation, setActiveAnnotation] = useState<string | null>(null);
  const [lastTouchDistance, setLastTouchDistance] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      setMousePos({
        x: ((touch.clientX - rect.left) / rect.width) * 100,
        y: ((touch.clientY - rect.top) / rect.height) * 100,
      });
    } else if (e.touches.length === 2) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      
      if (lastTouchDistance !== null) {
        const delta = dist - lastTouchDistance;
        const zoomFactor = delta * 0.01;
        setZoom(prev => Math.min(3, Math.max(0.5, prev + zoomFactor)));
      }
      setLastTouchDistance(dist);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsLoupeActive(true);
    if (e.touches.length === 2) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      setLastTouchDistance(dist);
    }
  };

  const handleTouchEnd = () => {
    setIsLoupeActive(false);
    setLastTouchDistance(null);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-0 md:p-12">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-authority-navy/95 backdrop-blur-xl"
          onClick={onClose}
        />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-6xl h-full bg-white md:rounded-[2.5rem] overflow-hidden flex flex-col shadow-2xl border border-white/10"
        >
          <div className="scanline"></div>
          
          {/* Header */}
          <div className="p-6 md:p-8 border-b border-slate-100 flex items-center justify-between bg-white/80 backdrop-blur-md z-20">
            <div className="flex items-center gap-4">
              <div className="p-2 md:p-3 bg-safety-orange/10 rounded-xl md:rounded-2xl text-safety-orange">
                {assetType === 'pdf' ? <FileText className="w-5 h-5 md:w-6 md:h-6" /> : <Search className="w-5 h-5 md:w-6 md:h-6" />}
              </div>
              <div>
                <h3 className="text-lg md:text-2xl font-black text-authority-navy uppercase leading-none mb-1">{assetTitle}</h3>
                <div className="flex items-center gap-2">
                  <Fingerprint className="w-3 h-3 text-slate-500" />
                  <span className="font-mono text-[11px] text-slate-500 uppercase tracking-widest truncate max-w-[150px] md:max-w-[200px]">
                    HASH: {assetHash}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-verified-bright/10 border border-verified-bright/30 rounded-xl text-verified-bright font-mono text-[11px] font-bold uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4" /> Integrity_Verified
              </div>
              <button 
                onClick={onClose}
                className="p-2 md:p-3 bg-slate-100 hover:bg-safety-orange hover:text-white rounded-xl transition-all group"
              >
                <X className="w-5 h-5 md:w-6 md:h-6 text-slate-500 group-hover:text-white" />
              </button>
            </div>
          </div>
          
          {/* Viewer Area */}
          <div className="flex-1 overflow-hidden relative bg-slate-50 flex items-center justify-center p-4 md:p-8">
            <div 
              ref={containerRef}
              className="relative max-w-full max-h-full shadow-2xl border border-slate-200 rounded-xl overflow-hidden cursor-crosshair group touch-none"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsLoupeActive(true)}
              onMouseLeave={() => setIsLoupeActive(false)}
              onTouchMove={handleTouchMove}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <img 
                src={assetUrl} 
                alt={assetTitle} 
                className="max-w-full max-h-[60vh] md:max-h-[70vh] object-contain transition-transform duration-300"
                style={{ transform: `scale(${zoom})` }}
                referrerPolicy="no-referrer"
              />

              {/* Forensic Annotations Overlay */}
              {assetType === 'image' && annotations.map((anno) => (
                <div 
                  key={anno.id}
                  className="absolute z-40"
                  style={{ 
                    left: `${anno.x}%`, 
                    top: `${anno.y}%`,
                    transform: `translate(-50%, -50%) scale(${1/zoom})` // Keep markers same size regardless of zoom
                  }}
                >
                  <button
                    onMouseEnter={() => setActiveAnnotation(anno.id)}
                    onMouseLeave={() => setActiveAnnotation(null)}
                    onClick={() => setActiveAnnotation(activeAnnotation === anno.id ? null : anno.id)}
                    className={`w-6 h-6 md:w-8 md:h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                      activeAnnotation === anno.id 
                        ? 'bg-safety-orange border-white scale-125 shadow-[0_0_20px_rgba(255,99,33,0.6)]' 
                        : 'bg-authority-navy/80 border-safety-orange hover:scale-110'
                    }`}
                  >
                    <Info className={`w-3 h-3 md:w-4 md:h-4 ${activeAnnotation === anno.id ? 'text-white' : 'text-safety-orange'}`} />
                  </button>

                  <AnimatePresence>
                    {activeAnnotation === anno.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-48 md:w-64 bg-authority-navy text-white p-4 rounded-xl border border-white/10 shadow-2xl z-50 pointer-events-none"
                      >
                        <div className="scanline opacity-20"></div>
                        <div className="font-mono text-[11px] text-safety-orange uppercase tracking-widest mb-1 font-black">
                          Forensic_Insight
                        </div>
                        <div className="text-xs md:text-sm font-black uppercase mb-2 leading-tight">
                          {anno.label}
                        </div>
                        <div className="text-[11px] md:text-xs text-slate-500 leading-relaxed">
                          {anno.description}
                        </div>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-authority-navy"></div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              
              {/* Forensic Loupe */}
              {isLoupeActive && assetType === 'image' && (
                <div 
                  className="absolute w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-safety-orange shadow-2xl pointer-events-none overflow-hidden z-30 bg-white"
                  style={{
                    left: `${mousePos.x}%`,
                    top: `${mousePos.y}%`,
                    transform: 'translate(-50%, -50%)',
                    backgroundImage: `url(${assetUrl})`,
                    backgroundPosition: `${mousePos.x}% ${mousePos.y}%`,
                    backgroundSize: `${zoom * 400}%`,
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-[1px] bg-safety-orange/30"></div>
                    <div className="h-full w-[1px] bg-safety-orange/30 absolute"></div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Controls Overlay */}
            <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 md:gap-4 bg-authority-navy/90 backdrop-blur-md px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl border border-white/10 z-40">
              <button onClick={() => setZoom(prev => Math.max(0.5, prev - 0.25))} className="p-2 text-white hover:text-safety-orange transition-colors">
                <ZoomOut className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              <span className="font-mono text-[11px] md:text-xs text-white min-w-[40px] md:min-w-[60px] text-center font-bold">{Math.round(zoom * 100)}%</span>
              <button onClick={() => setZoom(prev => Math.min(3, prev + 0.25))} className="p-2 text-white hover:text-safety-orange transition-colors">
                <ZoomIn className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              <div className="w-[1px] h-6 bg-white/10 mx-1 md:mx-2"></div>
              <button className="flex items-center gap-2 text-white hover:text-verified-bright transition-colors font-mono text-[11px] font-bold uppercase tracking-widest">
                <Download className="w-3 h-3 md:w-4 md:h-4" /> <span className="hidden sm:inline">Download_Audit_Copy</span><span className="sm:hidden">DL</span>
              </button>
            </div>
          </div>
          
          {/* Footer Metadata */}
          <div className="p-4 md:p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-4 md:gap-6">
              <div className="flex flex-col">
                <span className="font-mono text-[11px] text-slate-500 uppercase tracking-widest mb-1">Audit Node</span>
                <span className="font-mono text-[11px] text-authority-navy font-bold">ID_JKT_01</span>
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="font-mono text-[11px] text-slate-500 uppercase tracking-widest mb-1">Timestamp</span>
                <span className="font-mono text-[11px] text-authority-navy font-bold">{new Date().toISOString().split('T')[0]}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="status-live"></div>
              <span className="font-mono text-[11px] text-safety-orange font-black uppercase tracking-widest">Live_Forensic_Session</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
