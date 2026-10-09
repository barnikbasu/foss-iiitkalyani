import React from 'react';
import { CORE_VALUES } from '../data/content';
import { Wrench, Code2, GitFork, Share2 } from 'lucide-react';

const VALUE_ICONS: React.ReactNode[] = [
  <Wrench key="0" className="w-4 h-4 text-emerald-400" />,
  <Code2 key="1" className="w-4 h-4 text-emerald-400" />,
  <GitFork key="2" className="w-4 h-4 text-emerald-400" />,
  <Share2 key="3" className="w-4 h-4 text-emerald-400" />,
];

export const Values: React.FC = () => {
  return (
    <section id="values" className="py-20 border-b border-[#1b1f26] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
            <span>// 02. THE ETHOS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Why Free &amp; Open Source?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
            Inspired by FOSS United principles, our club operates on uncompromised transparent software craftsmanship.
          </p>
        </div>

        {/* 4 Core Ethos Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_VALUES.map((item, index) => (
            <div
              key={item.index}
              className="rounded-xl bg-[#101317] border border-[#20252e] p-6 flex flex-col justify-between hover:border-emerald-500/40 hover:bg-[#13171d] transition-all group"
            >
              <div>
                {/* Header Tag with Index & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-zinc-400 tracking-wider font-medium">
                    {item.index}
                  </span>
                  <div className="p-1.5 rounded bg-[#161a20] border border-zinc-800 text-emerald-400 group-hover:scale-110 transition-transform">
                    {VALUE_ICONS[index]}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-zinc-400 leading-relaxed font-sans mb-6">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Badge */}
              <div className="pt-4 border-t border-[#1d222a]">
                <span className="inline-block text-[11px] font-mono px-2 py-0.5 rounded bg-[#161a20] text-emerald-400 border border-zinc-800">
                  [{item.tag}]
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
