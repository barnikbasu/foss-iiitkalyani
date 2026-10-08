import React from 'react';
import { REPOSITORIES } from '../data/content';
import {
  FolderGit2,
  Github,
  ArrowUpRight,
  Sparkles,
  GitBranch,
  ShieldAlert,
  ArrowRight,
} from 'lucide-react';

interface ProjectsProps {
  onOpenPitchModal: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenPitchModal }) => {
  return (
    <section id="projects" className="py-20 border-b border-[#1b1f26] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
              <span>// 05. SOURCE REPOSITORIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Built by the community.
            </h2>
            <p className="mt-3 text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
              Explore authentic, open-source code authored and maintained by students under transparent licenses.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="https://github.com/FOSS-Club-IIIT-Kalyani"
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

        {/* Repositories & Submission Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REPOSITORIES.map((repo) => (
            <div
              key={repo.id}
              className="rounded-xl bg-[#101317] border border-[#20252e] p-6 flex flex-col justify-between hover:border-emerald-500/40 hover:bg-[#13171d] transition-all group"
            >
              <div>
                {/* Header: Repo Icon, License */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-zinc-400 group-hover:text-emerald-400 transition-colors">
                    <FolderGit2 className="w-4 h-4" />
                    <span className="text-xs font-mono text-zinc-500">REPO: PUBLIC</span>
                  </div>

                  <span className="inline-block text-[11px] font-mono px-2 py-0.5 rounded bg-[#161a20] text-emerald-400 border border-zinc-800">
                    {repo.license}
                  </span>
                </div>

                {/* Repo Name */}
                <h3 className="text-lg font-bold text-white mb-2 font-mono group-hover:text-emerald-400 transition-colors break-all">
                  {repo.name}
                </h3>

                {/* Repo Description */}
                <p className="text-xs text-zinc-400 leading-relaxed font-sans mb-5">
                  {repo.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {repo.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#161a20] text-zinc-400 border border-zinc-800/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Footer: Branch & Action */}
              <div className="pt-4 border-t border-[#1d222a] flex items-center justify-between text-xs font-mono">
                <span className="flex items-center gap-1 text-zinc-500 text-[11px]">
                  <GitBranch className="w-3 h-3" />
                  {repo.primaryBranch}
                </span>

                <a
                  href={repo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold inline-flex items-center gap-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded px-1"
                >
                  <span>{repo.actionLabel}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}

          {/* Card 3: Call for Community Submissions */}
          <div className="rounded-xl bg-[#12161c] border border-emerald-500/30 p-6 flex flex-col justify-between hover:border-emerald-500/60 transition-all relative overflow-hidden">
            {/* Subtle glow effect */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-emerald-400">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-xs font-mono font-semibold">STUDENT INCUBATOR</span>
                </div>

                <span className="inline-block text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-500/30">
                  Call For Repos
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2 font-mono">
                Have a project?
              </h3>

              <p className="text-xs text-zinc-300 leading-relaxed font-sans mb-4">
                We help IIIT Kalyani students refine their READMEs, choose appropriate open-source licenses, structure issues, and gain their first external contributors.
              </p>

              <div className="p-3 rounded-lg bg-[#0b0e12] border border-zinc-800 text-[11px] font-mono text-zinc-400 mb-6 space-y-1">
                <div className="text-emerald-400 font-semibold flex items-center gap-1">
                  <span>❯</span> Grant &amp; Mentorship Fast-Track
                </div>
                <div>Eligible for FOSS United Student Grants nominations.</div>
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={onOpenPitchModal}
                className="w-full py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-mono font-semibold text-xs tracking-wide transition-all shadow-md shadow-emerald-950/40 flex items-center justify-center gap-2 cursor-pointer active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <span>Pitch Your Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
