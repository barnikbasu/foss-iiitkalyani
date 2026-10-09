import React, { useState, useEffect } from 'react';
import { StatusTicker } from './components/StatusTicker';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Values } from './components/Values';
import { Events } from './components/Events';
import { Initiatives } from './components/Initiatives';
import { Projects } from './components/Projects';
import { Team } from './components/Team';
import { CommunityCTA } from './components/CommunityCTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectSubmitModal } from './components/ProjectSubmitModal';

export default function App() {
  const [pitchModalOpen, setPitchModalOpen] = useState(false);

  // Requirement 1: Refresh -> Top & prevent browser scroll restoration
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // If page is loaded with no hash or refreshed, ensure absolute top scroll
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    } else {
      // If there is an existing hash on fresh load, smoothly navigate to it after layout mount
      const targetEl = document.querySelector(window.location.hash);
      if (targetEl) {
        setTimeout(() => {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        window.scrollTo(0, 0);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0d0e] text-[#e2e8f0] selection:bg-emerald-500 selection:text-black">
      {/* Top chapter status ticker bar */}
      <StatusTicker />

      {/* Main navigation header */}
      <Navbar />

      {/* Main Landing Sections */}
      <main id="main-content">
        {/* Hero with interactive terminal & git graph */}
        <Hero />

        {/* 01. Chapter Overview */}
        <About />

        {/* 02. The Ethos: Why Free & Open Source */}
        <Values />

        {/* 03. Activity Log: Documented Chapter Events */}
        <Events />

        {/* 04. Ongoing Programs: More Than Events */}
        <Initiatives onOpenPitchModal={() => setPitchModalOpen(true)} />

        {/* 05. Source Repositories: Built by the Community */}
        <Projects onOpenPitchModal={() => setPitchModalOpen(true)} />

        {/* 06. People & Governance: Chapter Leadership */}
        <Team />

        {/* 07. Get Involved: Community CTA Banner */}
        <CommunityCTA />

        {/* 08. Direct Access Directory: Connect with the Chapter */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Student Project Submission / RFC Modal */}
      <ProjectSubmitModal
        isOpen={pitchModalOpen}
        onClose={() => setPitchModalOpen(false)}
      />
    </div>
  );
}
