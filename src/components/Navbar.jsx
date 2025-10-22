import React from 'react';
import { Shield } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-neutral-950/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-600 flex items-center justify-center shadow-[0_0_30px_-5px] shadow-cyan-500/50">
            <Shield size={18} className="text-white" />
          </div>
          <span className="font-semibold tracking-tight">HoloID</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#security" className="hover:text-white transition-colors">Security</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex h-9 rounded-md px-3 text-sm font-medium bg-white/5 hover:bg-white/10 transition-colors border border-white/10">Sign in</button>
          <button className="inline-flex h-9 rounded-md px-4 text-sm font-medium bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-colors shadow-[0_10px_30px_-10px] shadow-cyan-500/50">Get Started</button>
        </div>
      </div>
    </header>
  );
}
