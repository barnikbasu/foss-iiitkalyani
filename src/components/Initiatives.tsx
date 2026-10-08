import React from 'react';
import { INITIATIVES, InitiativeItem } from '../data/content';
import {
  Radio,
  Sparkles,
  Terminal,
  Users,
  Send,
  ArrowRight,
  ArrowUpRight,
  Clock,
  Layers,
} from 'lucide-react';

interface InitiativesProps {
  onOpenPitchModal: () => void;
}

const INITIATIVE_ICONS: Record<string, React.ReactNode> = {
  Radio: <Radio className="w-5 h-5 text-emerald-400" />,
  Sparkles: <Sparkles className="w-5 h-5 text-emerald-400" />,
  Terminal: <Terminal className="w-5 h-5 text-emerald-400" />,
  Users: <Users className="w-5 h-5 text-emerald-400" />,
  Send: <Send className="w-5 h-5 text-emerald-400" />,
};

export const Initiatives: React.FC<InitiativesProps> = ({ onOpenPitchModal }) => {
  return (
    <section id="initiatives" className="py-20 border-b border-[#1b1f26] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
            <span>// 04. ONGOING PROGRAMS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            More Than Events
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
            Persistent initiatives providing continuous peer learning, software curation, and contributor support across semesters.
          </p>
        </div>

        {/* Initiatives Grid: 3 cards top, 2 wider cards bottom matching Stitch design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {INITIATIVES.map((item, index) => {
            const isInternalPitch = item.link === '#pitch-project';
            const colSpanClass = index < 3 ? 'lg:col-span-2' : 'lg:col-span-3';

            return (
              <div
                key={item.id}
                className={`rounded-xl bg-[#101317] border ${
                  item.featured
                    ? 'border-emerald-500/30 shadow-lg shadow-emerald-950/20'
                    : 'border-[#20252e]'
                } p-6 flex flex-col justify-between hover:border-emerald-500/50 hover:bg-[#13171d] transition-all group ${colSpanClass}`}
              >
                <div>
                  {/* Category & Frequency Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                      <Layers className="w-3.5 h-3.5 text-emerald-500" />
                      {item.category}
                    </span>

                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-500">
                      <Clock className="w-3 h-3 text-zinc-600" />
                      {item.frequency}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2.5 rounded-lg bg-[#161a20] border border-zinc-800 shrink-0 group-hover:scale-105 transition-transform">
                      {INITIATIVE_ICONS[item.iconName]}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {item.title}
                      </h3>
                      <div className="text-xs font-mono text-emerald-400/90 mt-0.5">
                        {item.tagline}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-zinc-400 leading-relaxed font-sans mt-3 mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-4 border-t border-[#1d222a]">
                  {isInternalPitch ? (
                    <button
                      type="button"
                      onClick={() => onOpenPitchModal()}
                      className="w-full inline-flex items-center justify-between text-xs font-mono font-semibold text-emerald-400 hover:text-emerald-300 py-1 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
                    >
                      <span>{item.actionText}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  ) : (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between w-full text-xs font-mono text-zinc-300 hover:text-emerald-400 py-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
                    >
                      <span>{item.actionText}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
