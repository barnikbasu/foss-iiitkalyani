import React from 'react';
import { CLUB_METADATA } from '../data/content';
import {
  Github,
  ArrowUpRight,
  Code2,
  FolderGit2,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';

interface ProjectsProps {
  onOpenPitchModal: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenPitchModal }) => {
  return (
    <section id="projects" className="py-20 border-b border-[#1b1f26] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
              <span>// 05. SOURCE CODE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Open Source Projects
            </h2>
            <p className="mt-3 text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
              Explore repositories and student contributions on the official FOSS Club IIIT Kalyani GitHub organization.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href={CLUB_METADATA.githubOrg}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#14171c] hover:bg-[#1b2027] border border-zinc-700/80 hover:border-zinc-600 text-xs font-mono font-medium text-white transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              <Github className="w-4 h-4 text-emerald-400" />
              <span>Explore GitHub Org</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
            </a>
          </div>
        </div>

        {/* Clean Showcase Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {/* Card 1: Explore the Code */}
          <div className="rounded-xl bg-[#101317] border border-[#20252e] p-6 sm:p-8 flex flex-col justify-between hover:border-emerald-500/40 hover:bg-[#13171d] transition-all group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2.5 text-zinc-400 group-hover:text-emerald-400 transition-colors">
                  <div className="p-2 rounded-lg bg-[#161a20] border border-zinc-800 text-emerald-400">
                    <FolderGit2 className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-zinc-400">OFFICIAL REPOSITORIES</span>
                </div>

                <span className="inline-block text-[11px] font-mono px-2 py-0.5 rounded bg-[#161a20] text-emerald-400 border border-zinc-800">
                  Open Source
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                Explore the Code
              </h3>

              <p className="text-sm text-zinc-300 leading-relaxed font-sans mb-6">
                Visit the official GitHub organization of FOSS Club IIIT Kalyani to browse community repositories, explore collaborative code, and contribute upstream.
              </p>

              <div className="p-3 rounded-lg bg-[#0b0e12] border border-zinc-800 text-xs font-mono text-zinc-400 mb-6 flex items-center gap-2">
                <Github className="w-4 h-4 text-zinc-400 shrink-0" />
                <span className="truncate">github.com/FOSS-Club-IIIT-Kalyani</span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#1d222a]">
              <a
                href={CLUB_METADATA.githubOrg}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#161a22] hover:bg-[#1c222c] border border-zinc-700 text-xs font-mono font-semibold text-emerald-400 hover:text-emerald-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <span>Open GitHub Organization</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Share / Submit Your Project */}
          <div className="rounded-xl bg-[#12161c] border border-emerald-500/30 p-6 sm:p-8 flex flex-col justify-between hover:border-emerald-500/60 transition-all relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2.5 text-emerald-400">
                  <div className="p-2 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-400">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-semibold">STUDENT COMMUNITY</span>
                </div>

                <span className="inline-block text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-500/30">
                  Call For Projects
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                Building something open?
              </h3>

              <p className="text-sm text-zinc-300 leading-relaxed font-sans mb-6">
                Share your open-source projects, tools, or utilities with the IIIT Kalyani student developer community for collaborative feedback and peer discussion.
              </p>

              <div className="p-3 rounded-lg bg-[#0b0e12] border border-zinc-800 text-xs font-mono text-zinc-400 mb-6">
                <span className="text-emerald-400 font-semibold block mb-0.5">Peer Collaboration:</span>
                Open to all student-built open-source projects.
              </div>
            </div>

            <div className="pt-4 border-t border-[#1d222a]">
              <button
                type="button"
                onClick={onOpenPitchModal}
                className="w-full py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-mono font-semibold text-xs tracking-wide transition-all shadow-md shadow-emerald-950/40 flex items-center justify-center gap-2 cursor-pointer active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <span>Share Your Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
