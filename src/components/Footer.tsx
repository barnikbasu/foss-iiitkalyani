import React from 'react';
import { FossClubLogo } from './Logos';
import { CLUB_METADATA, SOCIAL_LINKS } from '../data/content';
import { ArrowUp, Heart, Shield, Code, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (window.location.hash) {
      window.history.pushState(null, '', window.location.pathname + window.location.search);
    }
  };

  const handleFooterLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#home' || href === '#') {
      scrollToTop();
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <footer className="bg-[#090b0d] border-t border-[#1c2027] text-zinc-400 text-xs font-mono relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1 & 2: Branding & Address */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href="#home"
              onClick={scrollToTop}
              className="inline-flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500 rounded cursor-pointer"
              aria-label="FOSS Club IIIT Kalyani - Scroll to top"
            >
              <FossClubLogo size={36} className="transition-transform duration-200 group-hover:scale-105" />
              <div>
                <span className="font-bold text-base text-white tracking-tight">
                  FOSS Club <span className="text-zinc-400 font-normal">IIIT Kalyani</span>
                </span>
                <div className="text-[11px] text-emerald-400 font-medium">
                  Free and Open Source Software Society
                </div>
              </div>
            </a>

            <p className="text-xs text-zinc-400 leading-relaxed font-sans max-w-sm">
              Free and Open Source Software Club of Indian Institute of Information Technology Kalyani. Fostering hacker culture, software craftsmanship, and collaborative student-led development.
            </p>

            <div className="text-[11px] text-zinc-500 space-y-1 pt-2">
              <div className="text-zinc-400 font-medium">
                {CLUB_METADATA.institute}
              </div>
              <div>{CLUB_METADATA.location}</div>
              <div className="text-emerald-500/90 pt-1">
                Chapter Established: March 2024
              </div>
            </div>
          </div>

          {/* Column 3: Explore Links */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Explore
            </div>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleFooterLinkClick(e, '#about')}
                  className="hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500 rounded"
                >
                  Chapter Overview
                </a>
              </li>
              <li>
                <a
                  href="#values"
                  onClick={(e) => handleFooterLinkClick(e, '#values')}
                  className="hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500 rounded"
                >
                  Why Free &amp; Open Source
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  onClick={(e) => handleFooterLinkClick(e, '#events')}
                  className="hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500 rounded"
                >
                  Documented Events
                </a>
              </li>
              <li>
                <a
                  href="#initiatives"
                  onClick={(e) => handleFooterLinkClick(e, '#initiatives')}
                  className="hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500 rounded"
                >
                  Ongoing Initiatives
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(e) => handleFooterLinkClick(e, '#projects')}
                  className="hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500 rounded"
                >
                  Source Repositories
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  onClick={(e) => handleFooterLinkClick(e, '#team')}
                  className="hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500 rounded"
                >
                  Chapter Leadership
                </a>
              </li>
              <li>
                <a
                  href="#community"
                  onClick={(e) => handleFooterLinkClick(e, '#community')}
                  className="hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500 rounded"
                >
                  Community &amp; Join
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleFooterLinkClick(e, '#contact')}
                  className="hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500 rounded"
                >
                  Direct Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Community Links */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Community
            </div>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={SOCIAL_LINKS.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500 rounded"
                >
                  <span>GitHub Org</span>
                  <ExternalLink className="w-3 h-3 text-zinc-600" />
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.telegram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500 rounded"
                >
                  <span>Telegram Channel</span>
                  <ExternalLink className="w-3 h-3 text-zinc-600" />
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.discord.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500 rounded"
                >
                  <span>Discord Guild</span>
                  <ExternalLink className="w-3 h-3 text-zinc-600" />
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.fossUnited.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500 rounded"
                >
                  <span>FOSS United Chapter</span>
                  <ExternalLink className="w-3 h-3 text-zinc-600" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Connect Links */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Connect
            </div>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={SOCIAL_LINKS.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500 rounded"
                >
                  <span>Instagram</span>
                  <ExternalLink className="w-3 h-3 text-zinc-600" />
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.youtube.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500 rounded"
                >
                  <span>YouTube</span>
                  <ExternalLink className="w-3 h-3 text-zinc-600" />
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.x.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500 rounded"
                >
                  <span>X (Twitter)</span>
                  <ExternalLink className="w-3 h-3 text-zinc-600" />
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500 rounded"
                >
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 text-zinc-600" />
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.email.url}
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500 rounded"
                >
                  <span>Email Secretariat</span>
                  <ExternalLink className="w-3 h-3 text-zinc-600" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#181d24] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <div className="text-center sm:text-left">
            Free and Open Source Software Club • Indian Institute of Information Technology Kalyani
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <span className="text-emerald-400/90 font-medium">
              BUILT IN THE OPEN • 2026–27 CHAPTER
            </span>
            <span className="text-zinc-600 hidden sm:inline">|</span>
            <span className="hidden sm:inline">NO TRACKERS • ZERO BLOAT</span>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-1.5 rounded bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors cursor-pointer ml-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
