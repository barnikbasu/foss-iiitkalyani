export interface EventItem {
  id: string;
  title: string;
  date: string;
  displayDate: string;
  type: 'Bootcamp' | 'Workshop' | 'On-Air' | 'Meetup' | 'Flagship';
  categoryBadge: string;
  venueBadge: string;
  description: string;
  highlights?: string[];
  link?: string;
  status: 'Completed';
  startDateValue: string; // YYYYMMDD
  endDateValue: string;   // YYYYMMDD (exclusive per RFC 5545)
  location: string;
}

export interface InitiativeItem {
  id: string;
  title: string;
  tagline: string;
  category: string;
  frequency: string;
  description: string;
  actionText: string;
  link: string;
  iconName: string;
  featured?: boolean;
}

export interface RepositoryItem {
  id: string;
  name: string;
  license: string;
  description: string;
  tags: string[];
  primaryBranch: string;
  githubUrl: string;
  actionLabel: string;
}

export interface LeaderItem {
  name: string;
  role: string;
  badge: string;
  title: string;
  bio: string;
  tags: string[];
  initials: string;
  githubUrl: string;
}

export interface SocialLinkItem {
  id: string;
  name: string;
  handle: string;
  url: string;
  category: 'primary' | 'chat' | 'media' | 'contact';
  description: string;
}

export const CLUB_METADATA = {
  name: 'FOSS Club IIIT Kalyani',
  tagline: 'Build. Contribute. Collaborate.',
  officialMotto: '“A society promoting quality Free and Open Source Software and Software Freedom.”',
  description:
    'FOSS Club IIIT Kalyani is a student-led community promoting Free and Open Source Software, software freedom, and practical open-source collaboration. Learn, build, contribute, and share in the open.',
  established: 'March 2024',
  location: 'Kalyani, Nadia District, West Bengal - 741235, India',
  institute: 'Indian Institute of Information Technology Kalyani',
  affiliation: 'FOSS United Campus Chapter',
  githubOrg: 'https://github.com/FOSS-Club-IIIT-Kalyani',
  fossUnitedChapter: 'https://fossunited.org/c/iiit-kalyani',
  email: 'fossclub.iiitkalyani@gmail.com',
  stats: [
    { label: 'FOUNDED', value: '03 / 2024', sub: 'March 2024 Charter' },
    { label: 'DOCUMENTED MEETS', value: '07+', sub: 'Workshops & Bootcamps' },
    { label: 'OPEN SOURCE', value: '100%', sub: 'Software Freedom' },
    { label: 'CAMPUS CHAPTER', value: '2026–27', sub: 'Active Term' },
  ],
};

export const SOCIAL_LINKS: Record<string, SocialLinkItem> = {
  github: {
    id: 'github',
    name: 'GitHub',
    handle: '@FOSS-Club-IIIT-Kalyani',
    url: 'https://github.com/FOSS-Club-IIIT-Kalyani',
    category: 'primary',
    description: 'Source repositories, guidelines & student PR pipelines',
  },
  telegram: {
    id: 'telegram',
    name: 'Telegram',
    handle: '@fossclubiiitkalyani',
    url: 'https://t.me/fossclubiiitkalyani',
    category: 'chat',
    description: 'Primary announcements, quick queries & daily discussions',
  },
  discord: {
    id: 'discord',
    name: 'Discord',
    handle: 'Join Chapter Server',
    url: 'https://discord.gg/bSTXAhBvuX',
    category: 'chat',
    description: 'Voice lounges, hack channels, screen-shares & debug rooms',
  },
  fossUnited: {
    id: 'fossUnited',
    name: 'FOSS United',
    handle: 'c/iiit-kalyani',
    url: 'https://fossunited.org/c/iiit-kalyani',
    category: 'primary',
    description: 'National foundation chapter directory & RSVP history',
  },
  instagram: {
    id: 'instagram',
    name: 'Instagram',
    handle: '@fossiiitkalyani',
    url: 'https://www.instagram.com/fossiiitkalyani/',
    category: 'media',
    description: 'Visual stories, chapter highlights & event recap reels',
  },
  youtube: {
    id: 'youtube',
    name: 'YouTube',
    handle: 'FOSS Club IIIT Kalyani',
    url: 'https://www.youtube.com/channel/UCPvQymsymii4A88q9bC6cTQ',
    category: 'media',
    description: 'FOSS On-Air recordings, recorded keynotes & tutorials',
  },
  x: {
    id: 'x',
    name: 'X (Twitter)',
    handle: '@iiitkalyanifoss',
    url: 'https://x.com/iiitkalyanifoss',
    category: 'media',
    description: 'Micro-updates, open source alerts & tech commentary',
  },
  linkedin: {
    id: 'linkedin',
    name: 'LinkedIn',
    handle: 'FOSS Club IIIT Kalyani',
    url: 'https://www.linkedin.com/company/free-and-open-source-software-club-iiit-kalyani',
    category: 'primary',
    description: 'Professional alumni network & institute announcements',
  },
  email: {
    id: 'email',
    name: 'Email Secretariat',
    handle: 'fossclub.iiitkalyani@gmail.com',
    url: 'mailto:fossclub.iiitkalyani@gmail.com',
    category: 'contact',
    description: 'Direct institutional inquiries, speaker invites & pitches',
  },
};

export const VERIFIED_EVENTS: EventItem[] = [
  {
    id: 'git-github-2025',
    title: 'Git & GitHub Session',
    date: '2025-11-20',
    displayDate: '20–21 Nov 2025',
    type: 'Bootcamp',
    categoryBadge: 'PRACTICAL BOOTCAMP',
    venueBadge: 'Campus Lab',
    description:
      'Hands-on Git & GitHub session providing foundational branching strategies, interactive rebase, pull requests, resolving merge conflicts, and creating an accessible pathway toward open-source collaboration and student project building.',
    highlights: [
      'Interactive git rebase -i & conflict resolution',
      'Open-source collaboration pathway & student PR tracks',
      'Repository hygiene, issue triage & upstream workflows',
    ],
    status: 'Completed',
    startDateValue: '20251120',
    endDateValue: '20251122',
    location: 'IIIT Kalyani, Kalyani, West Bengal, India',
  },
  {
    id: 'intro-foss-gcc-2025',
    title: 'Intro to FOSS and GCC',
    date: '2025-10-16',
    displayDate: '16 Oct 2025',
    type: 'Workshop',
    categoryBadge: 'HANDS-ON WORKSHOP',
    venueBadge: 'Toolchains',
    description:
      'Demystifying GNU Compiler Collections: preprocessing stages, compilation, assembly, static vs dynamic linking, optimization flags, and C/C++ build pipelines.',
    highlights: ['GCC pipeline stages', 'Static vs Shared (.so) libraries', 'Debugging with GDB flags'],
    status: 'Completed',
    startDateValue: '20251016',
    endDateValue: '20251017',
    location: 'IIIT Kalyani, Kalyani, West Bengal, India',
  },
  {
    id: 'foss-foundation-2-2025',
    title: 'FOSS Foundation 2.0',
    date: '2025-02-05',
    displayDate: '5–7 Feb 2025',
    type: 'Flagship',
    categoryBadge: 'FLAGSHIP MULTI-DAY',
    venueBadge: '3-Day Event',
    description:
      'Intensive 3-day deep dive into open-source software lifecycles, licensing mechanics, reproducible development environments, and structured student PR tracks.',
    highlights: ['3-day hands-on tracks', 'Open source licensing primer', 'First good issue mentorship'],
    status: 'Completed',
    startDateValue: '20250205',
    endDateValue: '20250208',
    location: 'IIIT Kalyani, Kalyani, West Bengal, India',
  },
  {
    id: 'foss-on-air-cybersec-2024',
    title: 'FOSS On-Air: Cybersec in FOSS',
    date: '2024-07-25',
    displayDate: '25 Jul 2024',
    type: 'On-Air',
    categoryBadge: 'ONLINE SESSION',
    venueBadge: 'Broadcast',
    description:
      'Security auditing, responsible vulnerability disclosure, cryptographic integrity, SBOMs (Software Bill of Materials), and hardening community-maintained open source bases.',
    highlights: ['Vulnerability triage', 'GPG key signatures', 'Open-source supply chain safety'],
    status: 'Completed',
    startDateValue: '20240725',
    endDateValue: '20240726',
    location: 'Online Broadcast · IIIT Kalyani, Kalyani, West Bengal, India',
  },
  {
    id: 'foss-on-air-hoppscotch-2024',
    title: 'FOSS On-Air: Hoppscotch in Action',
    date: '2024-06-05',
    displayDate: '5 Jun 2024',
    type: 'On-Air',
    categoryBadge: 'TECHNICAL DEEP DIVE',
    venueBadge: 'Live Demo',
    description:
      'Exploring API testing with modern open-source tooling, architecture review of high-performance TypeScript web applications, and real-time network debugging.',
    highlights: ['Open source API development', 'TypeScript web client architecture', 'Live interactive test flows'],
    status: 'Completed',
    startDateValue: '20240605',
    endDateValue: '20240606',
    location: 'Online Broadcast · IIIT Kalyani, Kalyani, West Bengal, India',
  },
  {
    id: 'kalyani-foss-march-2024',
    title: 'Kalyani FOSS March Meetup',
    date: '2024-03-18',
    displayDate: '18 Mar 2024',
    type: 'Meetup',
    categoryBadge: 'REGIONAL MEETUP',
    venueBadge: 'In-Person Meetup',
    description:
      'Regional cross-campus developer convention uniting students, open-source contributors, and software engineers from Kalyani and surrounding engineering colleges.',
    highlights: ['Inauguration of monthly chapter talks', 'Cross-college networking', 'Lightning project demos'],
    status: 'Completed',
    startDateValue: '20240318',
    endDateValue: '20240319',
    location: 'IIIT Kalyani, Kalyani, West Bengal, India',
  },
  {
    id: 'foss-foundation-1-2024',
    title: 'FOSS Foundation',
    date: '2024-01-19',
    displayDate: '19 Jan 2024',
    type: 'Flagship',
    categoryBadge: 'INAUGURAL CHAPTER MEET',
    venueBadge: 'Foundation',
    description:
      'Foundational chapter launch introducing GNU/Linux distributions, kernel philosophy, software freedom ethics, and initial community formation leading to our March 2024 charter.',
    highlights: ['Linux workstation bootstrapper', 'The 4 Essential Freedoms of FOSS', 'Community charter genesis'],
    status: 'Completed',
    startDateValue: '20240119',
    endDateValue: '20240120',
    location: 'IIIT Kalyani, Kalyani, West Bengal, India',
  },
];

export const INITIATIVES: InitiativeItem[] = [
  {
    id: 'foss-on-air',
    title: 'FOSS On-Air',
    tagline: 'Live Technical Broadcasts & Teardowns',
    category: 'Live Broadcasts',
    frequency: 'Bi-weekly / Monthly Broadcasts',
    description:
      'Live technical podcasts, architectural dissections, and interactive sessions featuring maintainers, core contributors, and security practitioners breaking down open systems.',
    actionText: 'Watch on YouTube',
    link: 'https://www.youtube.com/channel/UCPvQymsymii4A88q9bC6cTQ',
    iconName: 'Radio',
    featured: true,
  },
  {
    id: 'kalyani-foss-meetups',
    title: 'Kalyani FOSS Meetups',
    tagline: 'Regional Open-Source Developer Forum',
    category: 'Regional Networking',
    frequency: 'Cross-Campus Network',
    description:
      'Periodic cross-campus gathering welcoming open-source contributors, student developers, and software practitioners from Kalyani, Kolkata, and the greater Nadia tech corridor.',
    actionText: 'View Chapter Hub',
    link: 'https://fossunited.org/c/iiit-kalyani',
    iconName: 'Users',
  },
  {
    id: 'submit-your-project',
    title: 'Submit Your Project',
    tagline: 'Community Audits, RFCs & Grant Fast-Track',
    category: 'Grant & Incubation',
    frequency: 'Rolling Submissions',
    description:
      'Authored an open-source tool, library, CLI utility, or web application? Submit your repository to the club for architectural review, code auditing, README polishing, and grant recommendations via FOSS United.',
    actionText: 'Submit repository for review',
    link: '#pitch-project',
    iconName: 'Send',
    featured: true,
  },
  {
    id: 'weekly-meetups',
    title: 'Weekly Meetups',
    tagline: 'Hands-on Lab Debugging & Hack Hours',
    category: 'Peer Programming',
    frequency: 'In-Person · Campus Lab',
    description:
      'No formal slides, no lectures. Casual in-person co-working, peer pair programming, and debugging circles where students troubleshoot open-source issues and pull requests together.',
    actionText: 'Join Next Session',
    link: 'https://discord.gg/bSTXAhBvuX',
    iconName: 'Terminal',
  },
  {
    id: 'alternative-of-the-week',
    title: 'FOSS Alternative of the Week',
    tagline: 'Spotlighting Open Developer Tooling',
    category: 'Software Curation',
    frequency: 'Weekly Community Series',
    description:
      'Curating, evaluating, and documenting robust open-source alternatives to proprietary vendor software (e.g. Obsidian vs Notion, Inkscape vs Illustrator, GIMP, Nextcloud).',
    actionText: 'Explore on Telegram & Discord',
    link: 'https://t.me/fossclubiiitkalyani',
    iconName: 'Sparkles',
  },
];

export const REPOSITORIES: RepositoryItem[] = [
  {
    id: 'web-portal',
    name: 'foss-club-iiit-kalyani.github.io',
    license: 'MIT',
    description:
      'Official web portal, chapter directory, event archives, and open-source documentation site built by the student community with zero tracking cookies or proprietary telemetry.',
    tags: ['TypeScript', 'React', 'Tailwind', 'Vite'],
    primaryBranch: 'main branch',
    githubUrl: 'https://github.com/FOSS-Club-IIIT-Kalyani',
    actionLabel: 'View Source Code',
  },
  {
    id: 'community-handbook',
    name: 'community-handbook',
    license: 'CC-BY-SA 4.0',
    description:
      'Step-by-step handbook for first-time contributors: setting up SSH keys, configuring GPG commit signing, mastering git rebase, issue etiquette, and code of conduct.',
    tags: ['Markdown', 'Open Contribution', 'Docs'],
    primaryBranch: 'main branch',
    githubUrl: 'https://github.com/FOSS-Club-IIIT-Kalyani',
    actionLabel: 'Read Guidelines',
  },
];

export const LEADERSHIP: LeaderItem[] = [
  {
    name: 'Ayush Lahiri',
    role: 'Lead',
    badge: '2026–27',
    title: 'Chapter Lead • FOSS Club IIIT Kalyani',
    bio: 'Guiding chapter operations, technical bootcamps, and developer outreach. Focus areas include Linux toolchains, modern systems programming, and student upstream onboarding.',
    tags: ['Toolchains', 'Systems', 'Chapter Ops'],
    initials: 'AL',
    githubUrl: 'https://github.com/FOSS-Club-IIIT-Kalyani',
  },
  {
    name: 'Sahil Sujit Singh',
    role: 'Mentor',
    badge: 'Advisory',
    title: 'Mentor & Core Advisor • FOSS Club IIIT Kalyani',
    bio: 'Founding-era mentorship, architectural reviews, and connecting student projects with national open-source foundations, student grants, and upstream hackathons.',
    tags: ['Architecture', 'Mentorship', 'RFCs'],
    initials: 'SS',
    githubUrl: 'https://github.com/FOSS-Club-IIIT-Kalyani',
  },
];

export const CORE_VALUES = [
  {
    index: '01 ~ TINKER',
    title: 'Understand Systems',
    desc: 'Break abstractions apart, inspect assembly, compiler stages, and network sockets. We learn how software operates from the bare metal up instead of treating runtime engines as black boxes.',
    tag: 'UNRESTRICTED AUDIT',
  },
  {
    index: '02 ~ BUILD',
    title: 'Create Public Goods',
    desc: 'Translate theoretical computer science into production utilities. Construct software that assists our campus peers, the institute, and the global developer commons without proprietary paywalls.',
    tag: 'TRANSPARENT SOURCE',
  },
  {
    index: '03 ~ CONTRIBUTE',
    title: 'Real-World Code',
    desc: 'Move beyond toy homework exercises. File real issue reports, maintain branches, write tests, handle rebase, and merge changes upstream to global projects.',
    tag: 'UPSTREAM IMPACT',
  },
  {
    index: '04 ~ SHARE',
    title: 'Software Freedom',
    desc: 'Knowledge compounds when unimpeded. Every lecture note, slide deck, and codebase authored by the club is licensed under permissive or copyleft terms.',
    tag: 'COPYLEFT & MIT',
  },
];

export const SIX_PILLARS = [
  { icon: 'BookOpen', title: 'Learning', desc: 'Gaining direct mastery' },
  { icon: 'Hammer', title: 'Building', desc: 'Practical public utilities' },
  { icon: 'GitPullRequest', title: 'Contributing', desc: 'Upstream pull requests' },
  { icon: 'Users', title: 'Collaboration', desc: 'Peer pair-programming' },
  { icon: 'ShieldCheck', title: 'Freedom', desc: 'Digital sovereignty' },
  { icon: 'Globe', title: 'Community', desc: 'Grassroots open access' },
];

export const CHRONOLOGY = [
  {
    year: '2024',
    title: 'Inception & Charter',
    badge: 'Year 01',
    description:
      'Charter established at IIIT Kalyani. Executed inaugural FOSS Foundation 1.0, hosted regional Kalyani FOSS March Meetup, and initiated the FOSS On-Air interactive broadcast series.',
  },
  {
    year: '2025',
    title: 'Toolchains & Deep Bootcamps',
    badge: 'Year 02',
    description:
      'Conducted deep-dive workshops including the 3-day flagship FOSS Foundation 2.0, compiler internals sessions on GCC & C/C++ toolchains, and multi-day workshops on Git rebase & PR flows.',
  },
  {
    year: '2026–27',
    title: 'Upstream Incubation & Public Goods',
    badge: 'Current Cycle',
    description:
      'Focus shifted towards mentoring long-term upstream project authors, sponsoring grant nominations via FOSS United, and building sustained, student-maintained digital infrastructure.',
  },
];
