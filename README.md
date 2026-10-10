# FOSS Club IIIT Kalyani — Landing Page

A modern, responsive landing page for the Free and Open Source Software (FOSS) Club at the Indian Institute of Information Technology Kalyani. The website introduces the community, showcases its activities and initiatives, highlights its open-source focus, and helps students discover ways to participate.

**Live Website:** https://foss-iiitkalyani.vercel.app/  
**GitHub Organization:** https://github.com/FOSS-Club-IIIT-Kalyani

## Overview

The project is designed to provide students with a clear introduction to the FOSS community at IIIT Kalyani through a clean, developer-focused interface.

The website includes:

- **Home:** An introductory hero section with community-focused calls to action.
- **About:** An introduction to FOSS and the club.
- **Values:** Principles associated with open-source collaboration.
- **Events & Activities:** Information about community events and learning activities.
- **Initiatives:** Ways to explore and participate in the community.
- **Projects:** A gateway to the club's public GitHub organization.
- **Team:** Publicly listed club leadership information.
- **Community:** Links for discovering and joining the community.
- **Contact:** Social platforms and contact information.

## Features

- Responsive layouts for desktop, tablet, and mobile devices.
- Component-based React architecture.
- Smooth section navigation and scrolling.
- Interactive navigation and interface elements.
- Subtle animations and transitions.
- Accessible navigation, focus states, and reduced-motion support.
- Direct links to the club's public platforms and repositories.

## Tech Stack

- **React** — UI components and application structure
- **TypeScript** — Type-safe JavaScript
- **Vite** — Development server and production build tooling
- **CSS** — Styling, responsive layouts, animations, and visual design
- **Lucide React** — Interface icons

## Getting Started

### Prerequisites

Install a supported version of [Node.js](https://nodejs.org/) and npm.

### Installation

Clone the repository and enter the project directory:

```bash
git clone https://github.com/barnikbasu/foss-iiitkalyani/
cd foss-iiitkalyani-main
```

Install the dependencies:

```bash
npm ci
```

If `npm ci` cannot run because the lockfile is out of sync, resolve the dependency configuration and regenerate the lockfile before continuing.

### Development

Start the local development server:

```bash
npm run dev
```

Open the local URL printed in your terminal.

### Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally, if supported by the project scripts:

```bash
npm run preview
```

Run the available TypeScript or lint checks using the scripts defined in `package.json`.

## Project Structure

```text
.
├── public/
│   └── team/
├── src/
│   ├── components/
│   ├── data/
│   │   └── content.ts
│   ├── utils/
│   │   └── calendar.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
└── vite.config.ts
```

- `src/components/` contains the individual website sections and reusable interface components.
- `src/data/content.ts` stores website content and related configuration.
- `src/utils/` contains utility functions.
- `src/App.tsx` assembles the main application.
- `src/index.css` defines the global styles and responsive visual system.
- `public/` contains static assets.

## Design Approach

The interface uses a developer-oriented visual identity inspired by open-source culture, with restrained accent colors, terminal-inspired details, clear typography, and structured content sections.

The layout prioritizes readability, responsive behavior, accessible interactions, and straightforward navigation across the website.

## Community Links

- [FOSS United — IIIT Kalyani Chapter](https://fossunited.org/c/iiit-kalyani)
- [GitHub Organization](https://github.com/FOSS-Club-IIIT-Kalyani)
- [Instagram](https://www.instagram.com/fossiiitkalyani/)
- [LinkedIn](https://www.linkedin.com/company/free-and-open-source-software-club-iiit-kalyani)
- [Telegram](https://t.me/fossclubiiitkalyani)
- [X](https://x.com/iiitkalyanifoss)
- [YouTube](https://www.youtube.com/channel/UCPvQymsymii4A88q9bC6cTQ)
- **Email:** fossclub.iiitkalyani@gmail.com

## Contributing

Interested in contributing to open-source projects or exploring the FOSS community? Visit the club's public platforms to discover current activities, repositories, and opportunities to participate.

For contributions to this website, fork the repository, create a feature branch, make your changes, and open a pull request with a clear description of the improvements.

## License

No project-specific license is declared here. Please refer to the repository's license file, if present, before reusing or redistributing the code.

---

Built to help students discover free and open-source software and the community around it.
