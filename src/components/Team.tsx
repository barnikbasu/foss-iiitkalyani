import React from 'react';
import { LEADERSHIP } from '../data/content';
import { Github, ShieldCheck, Building2, ExternalLink } from 'lucide-react';

export const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 border-b border-[#1b1f26] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
            <span>// 06. PEOPLE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Chapter Leadership
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
            Student-led, volunteer-driven chapter backed by faculty and alumni advisors for the 2026–27 cycle.
          </p>
        </div>

        {/* Verified Leaders Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mb-12">
          {LEADERSHIP.map((leader) => (
            <div
              key={leader.name}
              className="rounded-xl bg-[#101317] border border-[#20252e] p-6 hover:border-emerald-500/40 hover:bg-[#13171d] transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header: Avatar Initial Box + Role Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-lg bg-[#181c22] border border-zinc-700/80 flex items-center justify-center font-mono font-bold text-lg text-emerald-400 group-hover:border-emerald-500/50 transition-colors shadow-inner">
                    {leader.initials}
                  </div>

                  <span className="inline-block text-xs font-mono px-2.5 py-1 rounded bg-[#161a20] text-emerald-400 border border-zinc-800">
                    [{leader.role} • {leader.badge}]
                  </span>
                </div>

                {/* Name & Title */}
                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
                  {leader.name}
                </h3>
                <div className="text-xs font-mono text-zinc-400 mb-4">
                  {leader.title}
                </div>

                {/* Bio */}
                <p className="text-sm text-zinc-300 leading-relaxed font-sans mb-6">
                  {leader.bio}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {leader.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#161a20] text-zinc-400 border border-zinc-800/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Link to GitHub Org */}
              <div className="pt-4 border-t border-[#1d222a] flex items-center justify-between">
                <a
                  href={leader.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-300 hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded px-1"
                >
                  <Github className="w-3.5 h-3.5 text-zinc-400" />
                  <span>GitHub Profile</span>
                  <ExternalLink className="w-3 h-3 text-zinc-500" />
                </a>

                <span className="text-[11px] font-mono text-emerald-400/80 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verified Role
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Official Affiliation Banner */}
        <div className="rounded-xl bg-[#0e1115] border border-zinc-800/90 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <div className="flex items-start sm:items-center gap-3">
            <div className="p-2 rounded bg-zinc-800/80 text-emerald-400 shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div className="leading-relaxed">
              <span className="text-white font-medium">Affiliated Chapter: </span>
              Recognized student body at the <strong className="text-zinc-200">Indian Institute of Information Technology Kalyani</strong> (Institute of National Importance under MoE, GoI), supported through student initiatives in conjunction with the <strong className="text-emerald-400">FOSS United Foundation</strong>.
            </div>
          </div>

          <a
            href="https://fossunited.org/c/iiit-kalyani"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-emerald-400 hover:text-emerald-300 underline font-semibold flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded px-1"
          >
            <span>fossunited.org ↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};
