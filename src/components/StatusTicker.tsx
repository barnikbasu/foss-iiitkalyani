import React from 'react';
import { Terminal, MapPin, Award } from 'lucide-react';

export const StatusTicker: React.FC = () => {
  return (
    <aside aria-label="Chapter status bulletin" className="w-full bg-[#0d1013] border-b border-[#1f242c] text-xs font-mono py-1.5 px-4 text-zinc-400 overflow-hidden relative z-40">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-1 gap-x-4">
        {/* Left: Live indicator */}
        <div className="flex items-center space-x-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-emerald-400 font-semibold tracking-wide flex items-center gap-1">
            <Terminal className="w-3 h-3 text-emerald-400" />
            STATUS: ACTIVE &amp; BUILDING IN THE OPEN
          </span>
        </div>

        {/* Center: Campus Location */}
        <div className="hidden sm:flex items-center space-x-1.5 text-zinc-400">
          <MapPin className="w-3 h-3 text-zinc-500" />
          <span>IIIT Kalyani · Kalyani, Nadia, West Bengal</span>
        </div>

        {/* Right: Affiliation badge */}
        <div className="flex items-center space-x-2 ml-auto sm:ml-0">
          <Award className="w-3 h-3 text-emerald-500" />
          <a
            href="https://fossunited.org/c/iiit-kalyani"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400 rounded"
          >
            <span>FOSS UNITED CHAPTER 2024–27</span>
            <span className="text-zinc-600">↗</span>
          </a>
        </div>
      </div>
    </aside>
  );
};
