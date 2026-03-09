import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  UserCheck, 
  Lock, 
  Search, 
  Database
} from 'lucide-react';
import { SSOT } from '../../lib/ssot';
import { motion } from 'motion/react';
import { TeamCard } from '../../components/team/TeamCard';
import { TeamFilter } from '../../components/team/TeamFilter';
import { AuditStamp } from '../../components/AuditStamp';

export default function TeamRegistryPage() {
  const navigate = useNavigate();
  const [crewFilter, setCrewFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCrew = SSOT.crew.filter(c => {
    const matchesFilter = crewFilter === 'All' || c.role === crewFilter.slice(0, -1);
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         c.role.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-audit-white text-authority-navy font-sans selection:bg-safety-orange/30 pb-24 md:pb-0">
      <div className="fixed inset-0 grid-pattern opacity-5 pointer-events-none"></div>
      
      {/* Header */}
      <div className="border-b border-slate-200 bg-audit-white/80 relative z-40 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <button 
            onClick={() => navigate('/')}
            className="group flex items-center gap-3 text-[10px] font-mono font-bold text-slate-400 hover:text-authority-navy transition-all uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Hub
          </button>
          <div className="flex items-center gap-3 text-safety-orange text-[10px] font-mono font-bold uppercase tracking-[0.2em]">
            <Lock className="w-4 h-4" /> Personnel Protocol v1.9
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24"
        >
          <div className="flex items-center gap-2 mb-6">
            <UserCheck className="w-4 h-4 text-safety-orange" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">Human Intelligence Registry</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-authority-navy mb-8 leading-[0.85] uppercase tracking-tighter">
            THE TEAM <br />
            <span className="text-safety-orange">REGISTRY.</span>
          </h1>
          <p className="text-slate-500 text-xl leading-tight font-light max-w-2xl">
            Every operative listed below is vetted through our multi-layer verification protocol. 
            Connecting faces to verifiable competencies and real guest feedback.
          </p>
        </motion.div>

        {/* Controls */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16 items-center justify-between">
          <div className="relative w-full lg:max-w-md">
            <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-slate-400" />
            </div>
            <input 
              type="text"
              placeholder="SEARCH PERSONNEL..."
              className="w-full bg-white border-2 border-slate-200 rounded-2xl py-5 pl-16 pr-6 font-mono text-xs uppercase tracking-widest focus:border-safety-orange focus:ring-0 transition-all outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <TeamFilter currentFilter={crewFilter} onFilterChange={setCrewFilter} />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredCrew.map((crew, i) => (
            <TeamCard key={crew.id} crew={crew} index={i} />
          ))}
        </div>

        {filteredCrew.length === 0 && (
          <div className="text-center py-32 bento-card border-dashed border-2 border-slate-200">
            <Database className="w-12 h-12 text-slate-200 mx-auto mb-6" />
            <p className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">No personnel matching your criteria found in the registry.</p>
          </div>
        )}

        {/* Footer Audit Stamp */}
        <AuditStamp title="ROSTER_VERIFIED" subtitle="Audit Registry 2026" />
      </div>
    </div>
  );
}
