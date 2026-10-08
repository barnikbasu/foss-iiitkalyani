import React, { useState, useEffect, useRef } from 'react';
import { FossClubLogo } from './Logos';
import { Menu, X, ArrowUpRight, Github } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Values', href: '#values' },
  { label: 'Events', href: '#events' },
  { label: 'Initiatives', href: '#initiatives' },
  { label: 'Projects', href: '#projects' },
  { label: 'Team', href: '#team' },
  { label: 'Community', href: '#community' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);

  // Monitor scroll state for compact styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Monitor active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = ['about', 'values', 'events', 'initiatives', 'projects', 'team', 'community'];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: '-25% 0px -55% 0px' }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
        toggleBtnRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      // Auto-focus first link in mobile menu for accessibility
      const firstLink = menuRef.current?.querySelector('a');
      firstLink?.focus();
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    toggleBtnRef.current?.focus();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 border-b relative ${
        isScrolled
          ? 'bg-[#0b0d0e]/95 backdrop-blur-md border-[#22272e] shadow-lg shadow-black/40 py-2.5'
          : 'bg-[#0b0d0e]/85 backdrop-blur-sm border-transparent py-3.5 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a
            href="#"
            className="flex items-center gap-2.5 sm:gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-md p-1 shrink-0"
            aria-label="FOSS Club IIIT Kalyani - Home"
          >
            <FossClubLogo size={32} className="transition-transform duration-200 group-hover:scale-105 shrink-0" />
            <div className="flex items-center gap-2 shrink-0">
              <span className="font-bold text-sm sm:text-base lg:text-base xl:text-lg tracking-tight text-white flex items-center gap-1.5 font-mono whitespace-nowrap shrink-0">
                FOSS Club
                <span className="text-white font-bold tracking-tight whitespace-nowrap shrink-0">IIIT Kalyani</span>
              </span>
              <span className="hidden md:inline-flex items-center px-1.5 py-0.5 rounded text-[9px] sm:text-[10px] font-mono tracking-wider bg-zinc-800/90 text-emerald-400 border border-zinc-700/80 w-fit shrink-0 whitespace-nowrap">
                STUDENT CHAPTER
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center space-x-0.5 xl:space-x-1 text-xs xl:text-sm font-medium text-zinc-300 shrink"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`px-2 xl:px-3 py-1.5 rounded-md transition-all text-xs xl:text-sm font-mono whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                    isActive
                      ? 'text-emerald-400 bg-emerald-950/40 border border-emerald-500/30'
                      : 'hover:text-white hover:bg-zinc-800/50'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center gap-2 xl:gap-3 shrink-0">
            {/* GitHub Repo Count Badge */}
            <a
              href="https://github.com/FOSS-Club-IIIT-Kalyani"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex lg:hidden xl:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-[#14171b] border border-zinc-800 hover:border-zinc-700 text-xs font-mono text-zinc-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 shrink-0"
              title="View GitHub Organization"
            >
              <Github className="w-3.5 h-3.5 text-zinc-400" />
              <span>07+ Repos</span>
            </a>

            {/* Join Community Button */}
            <a
              href="#community"
              onClick={(e) => handleLinkClick(e, '#community')}
              className="inline-flex items-center gap-1.5 px-3 xl:px-3.5 py-1.5 rounded-md text-xs font-semibold font-mono tracking-wide bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-sm hover:shadow-emerald-600/20 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 shrink-0 whitespace-nowrap"
            >
              <span>Join Community</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              ref={toggleBtnRef}
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-zinc-200" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation (attaches cleanly under header) */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          ref={menuRef}
          className="sm:hidden absolute top-full left-0 right-0 h-[calc(100vh-60px)] bg-[#0b0d0e]/98 backdrop-blur-2xl border-t border-[#1f242c] p-5 z-50 overflow-y-auto flex flex-col justify-between shadow-2xl"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Drawer"
        >
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 pb-2 border-b border-zinc-800">
              Navigation Menu
            </div>
            <nav className="flex flex-col space-y-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className="px-3 py-2.5 rounded-lg text-base font-mono font-medium text-zinc-200 hover:text-emerald-400 hover:bg-zinc-800/50 flex items-center justify-between transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                >
                  <span>{item.label}</span>
                  <span className="text-zinc-600 text-xs">↗</span>
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-5 border-t border-zinc-800 space-y-3">
            <a
              href="https://github.com/FOSS-Club-IIIT-Kalyani"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#14171b] border border-zinc-800 text-sm font-mono text-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              <Github className="w-4 h-4 text-zinc-400" />
              <span>Explore GitHub Org</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
            </a>

            <a
              href="#community"
              onClick={(e) => handleLinkClick(e, '#community')}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 text-white font-mono font-semibold text-sm hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <span>Join Community</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <div className="text-center text-[11px] font-mono text-zinc-500 pt-1">
              FOSS Club IIIT Kalyani • FOSS United Chapter
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

