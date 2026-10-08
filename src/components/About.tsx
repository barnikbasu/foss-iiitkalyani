import React from 'react';
import { CHRONOLOGY, SIX_PILLARS } from '../data/content';
import {
  BookOpen,
  Hammer,
  GitPullRequest,
  Users,
  ShieldCheck,
  Globe,
  Terminal,
  Cpu,
  Monitor,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';

const PILLAR_ICONS: Record<string, React.ReactNode> = {
  BookOpen: <BookOpen className="w-5 h-5 text-emerald-400" />,
  Hammer: <Hammer className="w-5 h-5 text-emerald-400" />,
  GitPullRequest: <GitPullRequest className="w-5 h-5 text-emerald-400" />,
  Users: <Users className="w-5 h-5 text-emerald-400" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
  Globe: <Globe className="w-5 h-5 text-emerald-400" />,
};

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 border-b border-[#1b1f26] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
              <span>// 01. CHAPTER OVERVIEW</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Open source is better together.
            </h2>
            <p className="mt-3 text-base sm:text-lg text-zinc-400 max-w-3xl leading-relaxed">
              A student-driven collective promoting software freedom, digital autonomy, and real-world collaboration at Indian Institute of Information Technology Kalyani. Established in March 2024.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="https://fossunited.org/c/iiit-kalyani"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#13161a] border border-zinc-800 text-xs font-mono text-zinc-300 hover:text-emerald-400 hover:border-emerald-500/50 transition-colors"
            >
              <span>AFFILIATED: FOSS United</span>
              <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
            </a>
          </div>
        </div>

        {/* Two-Column Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
          {/* Left Column: Narrative & Chronology Stepper */}
          <div className="lg:col-span-7 rounded-xl bg-[#101317] border border-[#20252e] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#161a20] border border-zinc-800 text-[11px] font-mono text-emerald-400 mb-5">
                <Terminal className="w-3.5 h-3.5" />
                <span>FROM KERNEL HACKING TO COLLABORATIVE DEPLOYS</span>
              </div>

              {/* Explanatory Paragraphs */}
              <div className="space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-sans">
                <p>
                  <strong className="text-white font-semibold">FOSS Club IIIT Kalyani</strong> was founded to bridge the gap between abstract academic theory and actual production software engineering. By embracing open-source software, students don&apos;t just read code—they audit it, modify it, debug it, and ship changes to global repositories.
                </p>
                <p>
                  From our inaugural FOSS Foundation session in early 2024 to multi-day bootcamps, technical podcasts (&apos;FOSS On-Air&apos;), and hands-on GCC build pipeline workshops, we provide a structured launchpad for anyone aspiring to become a genuine builder in the open web.
                </p>
              </div>
            </div>

            {/* Chapter Chronology Roadmap */}
            <div className="mt-8 pt-6 border-t border-[#1d222a]">
              <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-4 flex items-center justify-between">
                <span>CHAPTER CHRONOLOGY</span>
                <span className="text-[11px] text-emerald-400 font-semibold">2024 — PRESENT</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {CHRONOLOGY.map((item) => (
                  <div
                    key={item.year}
                    className="p-3.5 rounded-lg bg-[#14171d] border border-zinc-800/90 hover:border-zinc-700 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-mono font-bold text-sm text-emerald-400">
                        {item.year}
                      </span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400">
                        {item.badge}
                      </span>
                    </div>
                    <div className="font-semibold text-xs text-white mb-1">
                      {item.title}
                    </div>
                    <p className="text-[11px] text-zinc-400 leading-normal line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Lab & Hack Session Atmosphere Card */}
          <div className="lg:col-span-5 rounded-xl bg-[#101317] border border-[#20252e] p-6 flex flex-col justify-between">
            {/* Top Header of Lab Card */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Monitor className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-mono font-semibold text-white tracking-wider">
                    LAB &amp; HACK SESSIONS
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  CAMPUS LAB
                </span>
              </div>

              {/* Lab Visual Container with Code and Lab Details */}
              <div className="rounded-lg bg-[#0b0d10] border border-zinc-800/80 p-4 font-mono text-xs text-zinc-300 relative overflow-hidden mb-4">
                <div className="text-[11px] text-zinc-500 border-b border-zinc-800 pb-2 mb-3 flex items-center justify-between">
                  <span>host: iiit-kalyani-lab // session: 0x4F</span>
                  <span className="text-emerald-500">peer: active</span>
                </div>

                <div className="space-y-2 text-[11px]">
                  <div className="text-zinc-400">
                    <span className="text-emerald-400">$</span> g++ -Wall -O2 src/engine.cpp -o engine
                  </div>
                  <div className="text-zinc-500">
                    [gcc-13.2] compiling AST trees... zero warnings.
                  </div>
                  <div className="text-zinc-400">
                    <span className="text-emerald-400">$</span> git diff --stat upstream/main
                  </div>
                  <div className="text-emerald-400/90">
                    + 148 insertions, - 22 deletions (clean rebase)
                  </div>
                  <div className="p-2 rounded bg-zinc-900/90 border border-zinc-800 text-zinc-300 text-[11px] mt-2">
                    <div className="text-emerald-400 font-semibold mb-0.5 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Student PR #42 Approved
                    </div>
                    Co-authored-by: IIIT Kalyani FOSS Member
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-[#0c0e12] border border-zinc-800/90 text-xs text-zinc-300 leading-relaxed font-mono">
                <span className="text-emerald-400 font-semibold block mb-1">
                  LAB &amp; HACK SESSIONS:
                </span>
                <span className="text-zinc-300">
                  Where codebases are debugged and student PRs are shaped collaboratively.
                </span>
              </div>
            </div>

            {/* Bottom Meta Tags */}
            <div className="mt-6 pt-4 border-t border-[#1d222a] flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-zinc-400">
              <span className="flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-zinc-500" />
                PEER CODE REVIEWS
              </span>
              <span className="text-emerald-400 font-semibold">
                NO PROPRIETARY WALLS
              </span>
            </div>
          </div>
        </div>

        {/* 6 Core Pillars Grid */}
        <div>
          <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-4">
            CORE FOUNDATION PILLARS
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
            {SIX_PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="p-3 sm:p-4 rounded-lg bg-[#111418] border border-[#20252e] hover:border-emerald-500/40 hover:bg-[#15191f] transition-all group"
              >
                <div className="mb-2 p-1.5 sm:p-2 rounded bg-[#161a20] w-fit group-hover:scale-110 transition-transform">
                  {PILLAR_ICONS[pillar.icon]}
                </div>
                <div className="font-bold text-xs sm:text-sm text-white group-hover:text-emerald-400 transition-colors">
                  {pillar.title}
                </div>
                <div className="text-[11px] sm:text-xs text-zinc-400 mt-0.5 leading-snug">
                  {pillar.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
