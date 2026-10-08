import React from 'react';
import { Send, Github, Radio, ArrowRight, ArrowUpRight } from 'lucide-react';

export const CommunityCTA: React.FC = () => {
  return (
    <section id="community" className="py-20 border-b border-[#1b1f26] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-br from-[#12161c] to-[#0c0e12] border border-[#232a35] p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          {/* Subtle green ambient spotlight */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#161a22] border border-zinc-800 text-xs font-mono text-emerald-400 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>// 07. GET INVOLVED</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-5 leading-tight">
              Your first contribution <br />
              <span className="text-emerald-400">can start here.</span>
            </h2>

            {/* Body */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-sans mb-10 max-w-2xl">
              You don&apos;t need to be a seasoned Linux kernel hacker or an expert programmer to belong to this chapter. Show up, ask questions in our chat rooms, participate in hack hours, write documentation, or submit your first bug patch. All curious minds are welcome.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href="https://t.me/fossclubiiitkalyani"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold font-mono bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-950/50 transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <Send className="w-4 h-4" />
                <span>Join Telegram</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://github.com/FOSS-Club-IIIT-Kalyani"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold font-mono bg-[#161a22] hover:bg-[#1d222c] border border-zinc-700 text-white transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <Github className="w-4 h-4 text-emerald-400" />
                <span>Explore GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
              </a>

              <a
                href="https://www.youtube.com/channel/UCPvQymsymii4A88q9bC6cTQ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg text-sm font-semibold font-mono text-zinc-300 hover:text-emerald-400 hover:bg-zinc-800/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <Radio className="w-4 h-4 text-emerald-500" />
                <span>Watch FOSS On-Air</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
