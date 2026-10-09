import React, { useState, useEffect } from 'react';
import { CLUB_METADATA } from '../data/content';
import { GitBranchGraphic } from './Logos';
import {
  ArrowRight,
  ArrowUpRight,
  Github,
  Copy,
  Check,
  Send,
} from 'lucide-react';

interface TerminalScript {
  id: string;
  label: string;
  lines: Array<{ prompt: boolean; text: string; highlight?: boolean }>;
}

const TERMINAL_SCRIPTS: TerminalScript[] = [
  {
    id: 'git',
    label: 'git: clone & workflow',
    lines: [
      { prompt: true, text: '$ git clone https://github.com/FOSS-Club-IIIT-Kalyani' },
      { prompt: true, text: '$ cd foss-club-iiit-kalyani' },
      { prompt: false, text: '> exploring the chapter repositories...' },
      { prompt: false, text: '> contribution workflow setup complete' },
      {
        prompt: false,
        text: '[DEMO] Ready for student contributions & PRs',
        highlight: true,
      },
    ],
  },
  {
    id: 'gcc',
    label: 'gcc: toolchain',
    lines: [
      { prompt: true, text: '$ g++ -Wall -O3 src/main.cpp -o build/foss-core' },
      { prompt: false, text: '[gcc] inspecting compilation stages... 0 warnings' },
      { prompt: true, text: '$ ./build/foss-core --check-license' },
      { prompt: false, text: 'SPDX-License-Identifier: MIT / Apache-2.0' },
      {
        prompt: false,
        text: '[DEMO] Open-source build pipeline verified',
        highlight: true,
      },
    ],
  },
  {
    id: 'status',
    label: 'chapter: verified-status',
    lines: [
      { prompt: true, text: '$ foss-united-cli status --chapter iiit-kalyani' },
      { prompt: false, text: 'Chapter Name: FOSS Club IIIT Kalyani' },
      { prompt: false, text: 'Chapter Term: 2026–27 | Status: ACTIVE' },
      { prompt: false, text: 'Location: Kalyani, Nadia District, West Bengal' },
      {
        prompt: false,
        text: '[ACTIVE] Open for student collaboration & meetups',
        highlight: true,
      },
    ],
  },
];

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [activeScriptId, setActiveScriptId] = useState<string>('git');
  const [visibleLinesCount, setVisibleLinesCount] = useState(1);

  const activeScript =
    TERMINAL_SCRIPTS.find((s) => s.id === activeScriptId) || TERMINAL_SCRIPTS[0];

  // Terminal line reveal animation effect
  useEffect(() => {
    setVisibleLinesCount(1);
    const interval = setInterval(() => {
      setVisibleLinesCount((prev) => {
        if (prev < activeScript.lines.length) {
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 450);

    return () => clearInterval(interval);
  }, [activeScriptId, activeScript.lines.length]);

  const copyCloneCommand = () => {
    navigator.clipboard.writeText('git clone https://github.com/FOSS-Club-IIIT-Kalyani');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="home" aria-labelledby="hero-heading" className="scroll-mt-24 relative pt-4 pb-12 sm:pt-6 sm:pb-16 md:pt-10 md:pb-20 overflow-hidden border-b border-[#1b1f26]">
      {/* Subtle background ambient mesh */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-emerald-700/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Heading, Mission & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Monospace Source Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#13161a] border border-[#232830] text-emerald-400 font-mono text-xs w-fit mb-5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>&gt; SRC: ROOT &gt;&gt; &quot;SOFTWARE_FREEDOM&quot;</span>
            </div>

            {/* Main Headline */}
            <h1 id="hero-heading" className="text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6 font-sans break-words">
              Build. <br />
              <span className="text-emerald-400">Contribute.</span> <br />
              Collaborate.
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-sm sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mb-8">
              {CLUB_METADATA.description}
            </p>

            {/* Primary Action Buttons: Join Community (Primary), GitHub (Secondary), Telegram (Quieter) */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 mb-10">
              <a
                href="#community"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold font-mono bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-950/60 transition-all active:scale-95 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <span>Join Community</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="https://github.com/FOSS-Club-IIIT-Kalyani"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold font-mono bg-[#14171b] hover:bg-[#1b1f25] border border-zinc-700/80 hover:border-zinc-600 text-zinc-200 hover:text-white transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <Github className="w-4 h-4 text-zinc-300" />
                <span>Explore GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
              </a>

              <a
                href="https://t.me/fossclubiiitkalyani"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-3 rounded-lg text-xs font-mono text-zinc-400 hover:text-emerald-400 hover:bg-zinc-800/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <Send className="w-3.5 h-3.5 text-emerald-500" />
                <span>Telegram ↗</span>
              </a>
            </div>

            {/* Verified Statistics Strip */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-6 border-t border-[#1e232b] max-w-xl">
              <div>
                <div className="text-base sm:text-2xl font-bold font-mono text-white tracking-tight">
                  2024
                </div>
                <div className="text-[10px] sm:text-xs font-mono text-zinc-400 uppercase tracking-wider mt-0.5 truncate">
                  Established
                </div>
                <div className="text-[10px] sm:text-[11px] text-zinc-500 truncate">March 2024</div>
              </div>

              <div>
                <div className="text-base sm:text-2xl font-bold font-mono text-emerald-400 tracking-tight">
                  7+
                </div>
                <div className="text-[10px] sm:text-xs font-mono text-zinc-400 uppercase tracking-wider mt-0.5 truncate">
                  Events &amp; Activities
                </div>
                <div className="text-[10px] sm:text-[11px] text-zinc-500 truncate">Sessions Logged</div>
              </div>

              <div>
                <div className="text-base sm:text-2xl font-bold font-mono text-white tracking-tight">
                  2026–27
                </div>
                <div className="text-[10px] sm:text-xs font-mono text-zinc-400 uppercase tracking-wider mt-0.5 truncate">
                  Current Chapter
                </div>
                <div className="text-[10px] sm:text-[11px] text-zinc-500 truncate">Active Term</div>
              </div>
            </div>
          </div>

          {/* Right Column: Terminal Window & Git Graph Simulation */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-[#232832] bg-[#0f1216] shadow-2xl overflow-hidden">
              {/* Window Title Bar */}
              <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 bg-[#14171d] border-b border-[#232832]">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ef4444]/80 shrink-0 inline-block"></span>
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#eab308]/80 shrink-0 inline-block"></span>
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#22c55e]/80 shrink-0 inline-block"></span>
                  <span className="ml-1 sm:ml-2 font-mono text-[11px] sm:text-xs text-zinc-400 font-medium truncate">
                    TERMINAL
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="hidden sm:inline-flex px-1.5 py-0.5 rounded text-[9px] font-mono text-zinc-400 bg-zinc-800/60 border border-zinc-700/60 uppercase">
                    Illustration
                  </span>
                  <button
                    type="button"
                    onClick={copyCloneCommand}
                    className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-zinc-800/80 hover:bg-zinc-700 text-[11px] font-mono text-zinc-300 hover:text-white transition-colors cursor-pointer shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                    title="Copy git clone command"
                    aria-label="Copy git clone command"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 text-zinc-400" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Terminal Tabs */}
              <div className="flex items-center border-b border-[#1f242c] bg-[#101317] px-2 sm:px-3 gap-1 overflow-x-auto scrollbar-none">
                {TERMINAL_SCRIPTS.map((script) => (
                  <button
                    key={script.id}
                    type="button"
                    onClick={() => setActiveScriptId(script.id)}
                    className={`px-2.5 py-1.5 text-[11px] font-mono whitespace-nowrap transition-colors border-b-2 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400 ${
                      activeScriptId === script.id
                        ? 'border-emerald-400 text-emerald-400 bg-emerald-950/20 font-semibold'
                        : 'border-transparent text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    {script.label}
                  </button>
                ))}
              </div>

              {/* Terminal Screen Body */}
              <div className="p-3.5 sm:p-5 font-mono text-xs text-zinc-300 space-y-2 bg-[#0c0e11] min-h-[175px] overflow-x-hidden">
                <div className="text-[10px] text-zinc-500 font-mono pb-1 border-b border-zinc-900 flex items-center justify-between">
                  <span>// simulated CLI session for demonstration</span>
                  <span className="text-zinc-600">bash</span>
                </div>
                {activeScript.lines.slice(0, visibleLinesCount).map((line, idx) => (
                  <div
                    key={idx}
                    className={`break-all whitespace-pre-wrap ${
                      line.highlight
                        ? 'text-emerald-400 bg-emerald-950/30 p-1.5 rounded border border-emerald-500/20 font-semibold'
                        : line.prompt
                        ? 'text-zinc-200 font-medium'
                        : 'text-zinc-400 pl-2'
                    }`}
                  >
                    {line.text}
                  </div>
                ))}
                {visibleLinesCount < activeScript.lines.length && (
                  <div className="inline-block w-2 h-4 bg-emerald-400 terminal-cursor align-middle ml-1"></div>
                )}
              </div>

              {/* Contribution Workflow Architecture Area */}
              <div className="border-t border-[#1f242c] bg-[#121519] p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-xs font-mono text-zinc-300 font-semibold tracking-wider">
                      CONTRIBUTION GRAPH
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-500">
                    workflow cycle
                  </span>
                </div>

                {/* SVG Git Branching Diagram */}
                <div className="rounded-lg bg-[#090b0d] border border-zinc-800/80 p-2 overflow-hidden mb-3">
                  <GitBranchGraphic />
                </div>

                {/* Contribution Stages Guide */}
                <div className="space-y-1.5 font-mono text-[11px]">
                  <div className="flex items-center justify-between text-zinc-400 hover:text-zinc-200 transition-colors">
                    <div className="flex items-center gap-2 truncate">
                      <span className="text-emerald-400 font-semibold shrink-0">step 01</span>
                      <span className="truncate text-zinc-300">issue triage &amp; local fork setup</span>
                    </div>
                    <span className="text-emerald-400/90 text-[10px] shrink-0 ml-2 font-mono">prepare</span>
                  </div>

                  <div className="flex items-center justify-between text-zinc-400 hover:text-zinc-200 transition-colors">
                    <div className="flex items-center gap-2 truncate">
                      <span className="text-emerald-400 font-semibold shrink-0">step 02</span>
                      <span className="truncate text-zinc-300">topic branch &amp; clean atomic commits</span>
                    </div>
                    <span className="text-zinc-400 text-[10px] shrink-0 ml-2 font-mono">develop</span>
                  </div>

                  <div className="flex items-center justify-between text-zinc-400 hover:text-zinc-200 transition-colors">
                    <div className="flex items-center gap-2 truncate">
                      <span className="text-emerald-400 font-semibold shrink-0">step 03</span>
                      <span className="truncate text-zinc-300">pull request &amp; upstream collaboration</span>
                    </div>
                    <span className="text-zinc-400 text-[10px] shrink-0 ml-2 font-mono">upstream</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
