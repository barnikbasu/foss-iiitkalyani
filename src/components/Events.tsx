import React, { useState, useEffect } from 'react';
import { VERIFIED_EVENTS, EventItem } from '../data/content';
import {
  Calendar,
  MapPin,
  ExternalLink,
  Search,
  Filter,
  CheckCircle,
  Tag,
  Radio,
  X,
} from 'lucide-react';

export const Events: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<'desc' | 'asc'>('desc');
  const [activeModalEvent, setActiveModalEvent] = useState<EventItem | null>(null);

  const categories = ['All', 'Bootcamp', 'Workshop', 'On-Air', 'Meetup', 'Flagship'];

  // Handle Escape key to close event modal and lock scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeModalEvent) {
        setActiveModalEvent(null);
      }
    };
    if (activeModalEvent) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModalEvent]);

  const filteredEvents = VERIFIED_EVENTS.filter((ev) => {
    const matchesCategory =
      selectedCategory === 'All' || ev.type === selectedCategory;
    const matchesQuery =
      ev.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ev.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ev.venueBadge.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ev.displayDate.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  }).sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.date.localeCompare(b.date);
    }
    return b.date.localeCompare(a.date);
  });

  return (
    <section id="events" className="py-20 border-b border-[#1b1f26] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
              <span>// 03. ACTIVITY LOG</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Documented Chapter Events
            </h2>
            <p className="mt-3 text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
              A verified chronological log of workshops, meetups, and online broadcasts conducted by FOSS Club IIIT Kalyani.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <a
              href="https://fossunited.org/c/iiit-kalyani"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#14171c] hover:bg-[#1b2027] border border-zinc-700/80 hover:border-zinc-600 text-xs font-mono font-medium text-emerald-400 hover:text-emerald-300 transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              <span>View on FOSS United</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 mb-8 p-3 rounded-xl bg-[#101317] border border-[#20252e]">
          {/* Category Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            <Filter className="w-4 h-4 text-zinc-500 ml-1 mr-1 shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                  selectedCategory === cat
                    ? 'bg-emerald-600 text-white font-semibold shadow-sm'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {/* Sort Toggle */}
            <button
              type="button"
              onClick={() => setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')}
              className="px-2.5 py-1.5 rounded-lg bg-[#15191f] border border-zinc-800 text-[11px] font-mono text-zinc-300 hover:text-white transition-colors cursor-pointer shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500"
              title="Toggle sort order"
            >
              {sortOrder === 'desc' ? 'Order: Newest First ↓' : 'Order: Inception First ↑'}
            </button>

            {/* Search Input */}
            <div className="relative flex-1 min-w-[160px] sm:min-w-[200px]">
              <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search event logs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#15191f] border border-zinc-800 rounded-lg pl-9 pr-3 py-1.5 text-xs font-mono text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:border-emerald-500 focus-visible:ring-1 focus-visible:ring-emerald-500"
              />
            </div>
          </div>
        </div>

        {/* Events Chronology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredEvents.map((event) => (
            <article
              key={event.id}
              role="button"
              tabIndex={0}
              aria-label={`View details for ${event.title}`}
              onClick={() => setActiveModalEvent(event)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveModalEvent(event);
                }
              }}
              className="rounded-xl bg-[#101317] border border-[#20252e] hover:border-emerald-500/40 hover:bg-[#13171d] transition-all p-5 flex flex-col justify-between group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              <div>
                {/* Event Top Badges */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-[#161a20] text-emerald-400 border border-zinc-800/90 font-medium">
                      <Tag className="w-3 h-3 text-emerald-500" />
                      {event.categoryBadge}
                    </span>
                    {event.id === 'git-github-2025' && (
                      <span className="inline-flex items-center text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-950/70 text-emerald-300 border border-emerald-500/40">
                        Pathway
                      </span>
                    )}
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-400 shrink-0">
                    <Calendar className="w-3 h-3 text-zinc-500" />
                    {event.displayDate}
                  </span>
                </div>

                {/* Event Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {event.title}
                </h3>

                {/* Event Summary */}
                <p className="text-xs text-zinc-400 leading-relaxed font-sans line-clamp-3 mb-4">
                  {event.description}
                </p>
              </div>

              {/* Event Bottom Metadata */}
              <div className="pt-3 border-t border-[#1d222a] flex items-center justify-between text-[11px] font-mono">
                <span className="flex items-center gap-1 text-zinc-400">
                  <MapPin className="w-3 h-3 text-zinc-500" />
                  {event.venueBadge}
                </span>

                <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold">
                  <CheckCircle className="w-3 h-3" />
                  {event.status}
                </span>
              </div>
            </article>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12 rounded-xl bg-[#101317] border border-zinc-800 text-zinc-400 font-mono text-xs">
            No documented events match the search query &quot;{searchQuery}&quot;.
          </div>
        )}

        {/* Verification Note Box */}
        <div className="mt-8 p-4 rounded-xl bg-[#0e1115] border border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>
              All listed sessions are verified past events documented with the FOSS United ecosystem. No speculative future dates.
            </span>
          </div>
          <span className="text-zinc-500 text-[11px]">ARCHIVED CHRONOLOGY</span>
        </div>
      </div>

      {/* Event Details Modal */}
      {activeModalEvent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="event-modal-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setActiveModalEvent(null);
            }
          }}
        >
          <div className="bg-[#12151a] border border-zinc-700 rounded-xl max-w-lg w-full p-6 text-zinc-200 shadow-2xl relative">
            <button
              type="button"
              onClick={() => setActiveModalEvent(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
              <Radio className="w-3.5 h-3.5" />
              <span>{activeModalEvent.categoryBadge}</span>
              <span className="text-zinc-600">•</span>
              <span className="text-zinc-400">{activeModalEvent.displayDate}</span>
            </div>

            <h3 id="event-modal-title" className="text-xl font-bold text-white mb-3">
              {activeModalEvent.title}
            </h3>

            <p className="text-sm text-zinc-300 leading-relaxed mb-4 font-sans">
              {activeModalEvent.description}
            </p>

            {activeModalEvent.highlights && (
              <div className="mb-6 p-3 rounded-lg bg-[#0a0d10] border border-zinc-800">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                  Session Highlights:
                </div>
                <ul className="space-y-1 text-xs text-zinc-300 font-mono">
                  {activeModalEvent.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-emerald-400">❯</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex items-center justify-between pt-4 border-t border-zinc-800 text-xs font-mono">
              <span className="text-zinc-400 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                {activeModalEvent.venueBadge}
              </span>
              <a
                href="https://fossunited.org/c/iiit-kalyani"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:underline inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded px-1"
              >
                <span>FOSS United Archive</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
