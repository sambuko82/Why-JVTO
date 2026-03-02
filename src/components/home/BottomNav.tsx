import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LayoutDashboard, FileText, ShieldCheck, MessageSquare, Menu } from 'lucide-react';
import { motion } from 'motion/react';

export const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: <LayoutDashboard className="w-5 h-5" />, label: 'Audit Hub', path: '/' },
    { icon: <FileText className="w-5 h-5" />, label: 'Evidence', path: '/verify' },
    { icon: <ShieldCheck className="w-5 h-5" />, label: 'Safety', path: '/ijen-health-screening' },
    { icon: <MessageSquare className="w-5 h-5" />, label: 'Support', path: '/why-jvto/faq' },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-[100] bg-authority-navy/95 backdrop-blur-xl border-t border-white/10 px-6 py-3">
      <div className="flex items-center justify-between max-w-lg mx-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className="flex flex-col items-center gap-1 group"
            >
              <div className={`p-2 rounded-xl transition-all ${isActive ? 'bg-safety-orange text-white' : 'text-slate-400 group-hover:text-white'}`}>
                {item.icon}
              </div>
              <span className={`text-[8px] font-mono uppercase tracking-widest ${isActive ? 'text-safety-orange font-bold' : 'text-slate-500'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
        <button className="flex flex-col items-center gap-1 group">
          <div className="p-2 rounded-xl text-slate-400 group-hover:text-white">
            <Menu className="w-5 h-5" />
          </div>
          <span className="text-[8px] font-mono uppercase tracking-widest text-slate-500">Menu</span>
        </button>
      </div>
    </nav>
  );
};
