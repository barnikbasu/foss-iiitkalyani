import React from 'react';
import { SOCIAL_LINKS } from '../data/content';
import { FossUnitedLogo } from './Logos';
import {
  Github,
  Send,
  MessageSquare,
  Instagram,
  Youtube,
  Twitter,
  Linkedin,
  Mail,
  ArrowUpRight,
} from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 border-b border-[#1b1f26] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
            <span>// 08. DIRECT ACCESS DIRECTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Connect with the Chapter
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
            Verified communication pipelines, code hubs, and media channels for the club.
          </p>
        </div>

        {/* 9 Social Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Telegram */}
          <a
            href={SOCIAL_LINKS.telegram.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Join FOSS Club IIIT Kalyani on Telegram"
            className="p-5 rounded-xl bg-[#101317] border border-[#20252e] hover:border-emerald-500/50 hover:bg-[#13171d] transition-all group flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-lg bg-[#161a20] border border-zinc-800 text-emerald-400 group-hover:scale-110 transition-transform">
                  <Send className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-emerald-400 transition-colors" />
              </div>
              <h3 className="font-bold text-white text-base group-hover:text-emerald-400 transition-colors">
                Telegram
              </h3>
              <div className="text-xs font-mono text-emerald-400/90 mt-0.5">
                {SOCIAL_LINKS.telegram.handle}
              </div>
              <p className="text-xs text-zinc-400 mt-2 font-sans">
                {SOCIAL_LINKS.telegram.description}
              </p>
            </div>
            <div className="pt-3 mt-4 border-t border-[#1d222a] text-[11px] font-mono text-zinc-500 group-hover:text-zinc-300">
              Daily Discussions ↗
            </div>
          </a>

          {/* Discord */}
          <a
            href={SOCIAL_LINKS.discord.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Join FOSS Club IIIT Kalyani Discord Guild"
            className="p-5 rounded-xl bg-[#101317] border border-[#20252e] hover:border-emerald-500/50 hover:bg-[#13171d] transition-all group flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-lg bg-[#161a20] border border-zinc-800 text-indigo-400 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-emerald-400 transition-colors" />
              </div>
              <h3 className="font-bold text-white text-base group-hover:text-emerald-400 transition-colors">
                Discord
              </h3>
              <div className="text-xs font-mono text-indigo-300 mt-0.5">
                {SOCIAL_LINKS.discord.handle}
              </div>
              <p className="text-xs text-zinc-400 mt-2 font-sans">
                {SOCIAL_LINKS.discord.description}
              </p>
            </div>
            <div className="pt-3 mt-4 border-t border-[#1d222a] text-[11px] font-mono text-zinc-500 group-hover:text-zinc-300">
              Voice &amp; Hack Lounges ↗
            </div>
          </a>

          {/* GitHub */}
          <a
            href={SOCIAL_LINKS.github.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Explore FOSS Club IIIT Kalyani GitHub Organization"
            className="p-5 rounded-xl bg-[#101317] border border-[#20252e] hover:border-emerald-500/50 hover:bg-[#13171d] transition-all group flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-lg bg-[#161a20] border border-zinc-800 text-zinc-300 group-hover:scale-110 transition-transform">
                  <Github className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-emerald-400 transition-colors" />
              </div>
              <h3 className="font-bold text-white text-base group-hover:text-emerald-400 transition-colors">
                GitHub
              </h3>
              <div className="text-xs font-mono text-zinc-400 mt-0.5">
                {SOCIAL_LINKS.github.handle}
              </div>
              <p className="text-xs text-zinc-400 mt-2 font-sans">
                {SOCIAL_LINKS.github.description}
              </p>
            </div>
            <div className="pt-3 mt-4 border-t border-[#1d222a] text-[11px] font-mono text-zinc-500 group-hover:text-zinc-300">
              Open Repositories ↗
            </div>
          </a>

          {/* FOSS United */}
          <a
            href={SOCIAL_LINKS.fossUnited.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View IIIT Kalyani FOSS United Chapter"
            className="p-5 rounded-xl bg-[#101317] border border-[#20252e] hover:border-emerald-500/50 hover:bg-[#13171d] transition-all group flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-1 rounded-lg bg-[#161a20] border border-zinc-800 group-hover:scale-110 transition-transform">
                  <FossUnitedLogo size={28} />
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-emerald-400 transition-colors" />
              </div>
              <h3 className="font-bold text-white text-base group-hover:text-emerald-400 transition-colors">
                FOSS United
              </h3>
              <div className="text-xs font-mono text-emerald-400 mt-0.5">
                IIIT Kalyani Chapter
              </div>
              <p className="text-xs text-zinc-400 mt-2 font-sans">
                {SOCIAL_LINKS.fossUnited.description}
              </p>
            </div>
            <div className="pt-3 mt-4 border-t border-[#1d222a] text-[11px] font-mono text-zinc-500 group-hover:text-zinc-300">
              National Chapter Hub ↗
            </div>
          </a>

          {/* YouTube */}
          <a
            href={SOCIAL_LINKS.youtube.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit FOSS Club IIIT Kalyani YouTube Channel"
            className="p-5 rounded-xl bg-[#101317] border border-[#20252e] hover:border-emerald-500/50 hover:bg-[#13171d] transition-all group flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-lg bg-[#161a20] border border-zinc-800 text-red-400 group-hover:scale-110 transition-transform">
                  <Youtube className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-emerald-400 transition-colors" />
              </div>
              <h3 className="font-bold text-white text-base group-hover:text-emerald-400 transition-colors">
                YouTube
              </h3>
              <div className="text-xs font-mono text-zinc-400 mt-0.5">
                Stream Archives
              </div>
              <p className="text-xs text-zinc-400 mt-2 font-sans">
                {SOCIAL_LINKS.youtube.description}
              </p>
            </div>
            <div className="pt-3 mt-4 border-t border-[#1d222a] text-[11px] font-mono text-zinc-500 group-hover:text-zinc-300">
              Watch Recordings ↗
            </div>
          </a>

          {/* Instagram */}
          <a
            href={SOCIAL_LINKS.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow FOSS Club IIIT Kalyani on Instagram"
            className="p-5 rounded-xl bg-[#101317] border border-[#20252e] hover:border-emerald-500/50 hover:bg-[#13171d] transition-all group flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-lg bg-[#161a20] border border-zinc-800 text-pink-400 group-hover:scale-110 transition-transform">
                  <Instagram className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-emerald-400 transition-colors" />
              </div>
              <h3 className="font-bold text-white text-base group-hover:text-emerald-400 transition-colors">
                Instagram
              </h3>
              <div className="text-xs font-mono text-pink-300 mt-0.5">
                {SOCIAL_LINKS.instagram.handle}
              </div>
              <p className="text-xs text-zinc-400 mt-2 font-sans">
                {SOCIAL_LINKS.instagram.description}
              </p>
            </div>
            <div className="pt-3 mt-4 border-t border-[#1d222a] text-[11px] font-mono text-zinc-500 group-hover:text-zinc-300">
              Event Highlights ↗
            </div>
          </a>

          {/* X / Twitter */}
          <a
            href={SOCIAL_LINKS.x.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow FOSS Club IIIT Kalyani on X (Twitter)"
            className="p-5 rounded-xl bg-[#101317] border border-[#20252e] hover:border-emerald-500/50 hover:bg-[#13171d] transition-all group flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-lg bg-[#161a20] border border-zinc-800 text-zinc-300 group-hover:scale-110 transition-transform">
                  <Twitter className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-emerald-400 transition-colors" />
              </div>
              <h3 className="font-bold text-white text-base group-hover:text-emerald-400 transition-colors">
                X / Twitter
              </h3>
              <div className="text-xs font-mono text-zinc-400 mt-0.5">
                {SOCIAL_LINKS.x.handle}
              </div>
              <p className="text-xs text-zinc-400 mt-2 font-sans">
                {SOCIAL_LINKS.x.description}
              </p>
            </div>
            <div className="pt-3 mt-4 border-t border-[#1d222a] text-[11px] font-mono text-zinc-500 group-hover:text-zinc-300">
              Micro Updates ↗
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href={SOCIAL_LINKS.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Connect with FOSS Club IIIT Kalyani on LinkedIn"
            className="p-5 rounded-xl bg-[#101317] border border-[#20252e] hover:border-emerald-500/50 hover:bg-[#13171d] transition-all group flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-lg bg-[#161a20] border border-zinc-800 text-blue-400 group-hover:scale-110 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-emerald-400 transition-colors" />
              </div>
              <h3 className="font-bold text-white text-base group-hover:text-emerald-400 transition-colors">
                LinkedIn
              </h3>
              <div className="text-xs font-mono text-blue-300 mt-0.5">
                FOSS Club IIIT Kalyani
              </div>
              <p className="text-xs text-zinc-400 mt-2 font-sans">
                {SOCIAL_LINKS.linkedin.description}
              </p>
            </div>
            <div className="pt-3 mt-4 border-t border-[#1d222a] text-[11px] font-mono text-zinc-500 group-hover:text-zinc-300">
              Professional Network ↗
            </div>
          </a>

          {/* Email Secretariat */}
          <a
            href={SOCIAL_LINKS.email.url}
            aria-label="Send email to FOSS Club IIIT Kalyani Secretariat"
            className="p-5 rounded-xl bg-[#101317] border border-[#20252e] hover:border-emerald-500/50 hover:bg-[#13171d] transition-all group flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-lg bg-[#161a20] border border-zinc-800 text-emerald-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-emerald-400 transition-colors" />
              </div>
              <h3 className="font-bold text-white text-base group-hover:text-emerald-400 transition-colors">
                Direct Email
              </h3>
              <div className="text-xs font-mono text-emerald-400/90 mt-0.5 truncate">
                {SOCIAL_LINKS.email.handle}
              </div>
              <p className="text-xs text-zinc-400 mt-2 font-sans">
                {SOCIAL_LINKS.email.description}
              </p>
            </div>
            <div className="pt-3 mt-4 border-t border-[#1d222a] text-[11px] font-mono text-zinc-500 group-hover:text-zinc-300">
              Reach Organizers ✉
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
