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
  githubUrl?: string;
  linkedinUrl: string;
  image: string;
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
    { label: 'ESTABLISHED', value: '2024', sub: 'March 2024' },
    { label: 'EVENTS & ACTIVITIES', value: '7+', sub: 'Past Sessions' },
    { label: 'CURRENT CHAPTER', value: '2026–27', sub: 'Active Term' },
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
    categoryBadge: 'WORKSHOP',
    venueBadge: 'Campus Lab',
    description:
      'Introductory Git and GitHub workshop covering basic version control concepts, repository workflows, and collaborating on open-source projects.',
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
    categoryBadge: 'WORKSHOP',
    venueBadge: 'Campus Lab',
    description:
      'Session introducing open-source software principles and compiling C/C++ programs using the GNU Compiler Collection (GCC).',
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
    categoryBadge: 'FLAGSHIP',
    venueBadge: 'Campus Meet',
    description:
      'Multi-day campus event focused on open-source fundamentals, software freedom concepts, and community collaboration.',
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
    venueBadge: 'Online',
    description:
      'Online discussion covering security considerations and best practices within open-source software projects.',
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
    categoryBadge: 'ONLINE SESSION',
    venueBadge: 'Online',
    description:
      'Online session demonstrating API testing and development workflows using the open-source Hoppscotch tool.',
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
    categoryBadge: 'MEETUP',
    venueBadge: 'Campus Meetup',
    description:
      'Community meetup bringing together students and open-source enthusiasts from Kalyani and nearby colleges.',
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
    categoryBadge: 'CHAPTER MEET',
    venueBadge: 'Campus Lab',
    description:
      'Inaugural session introducing open-source software, Linux operating systems, and community initiatives at IIIT Kalyani.',
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
    tagline: 'Online Technical Talks',
    category: 'Online Talks',
    frequency: 'Periodic Sessions',
    description:
      'Online technical sessions and discussions exploring open-source projects, tools, and developer workflows.',
    actionText: 'Watch on YouTube',
    link: 'https://www.youtube.com/channel/UCPvQymsymii4A88q9bC6cTQ',
    iconName: 'Radio',
    featured: true,
  },
  {
    id: 'kalyani-foss-meetups',
    title: 'Kalyani FOSS Meetups',
    tagline: 'Regional Community Gatherings',
    category: 'Community Meetups',
    frequency: 'Periodic Meetups',
    description:
      'Meetups bringing together students and open-source contributors from Kalyani and surrounding institutions.',
    actionText: 'View Chapter Hub',
    link: 'https://fossunited.org/c/iiit-kalyani',
    iconName: 'Users',
  },
  {
    id: 'submit-your-project',
    title: 'Submit Your Project',
    tagline: 'Share Open-Source Projects',
    category: 'Project Showcase',
    frequency: 'Open Submissions',
    description:
      'Building an open-source project? Share your repository with the club for peer feedback, collaboration, and community showcase.',
    actionText: 'Submit project for review',
    link: '#pitch-project',
    iconName: 'Send',
    featured: true,
  },
  {
    id: 'weekly-meetups',
    title: 'Weekly Meetups',
    tagline: 'Collaborative Study & Discussion',
    category: 'Campus Sessions',
    frequency: 'Campus Lab',
    description:
      'Informal sessions for students to work together, discuss open-source tools, and collaborate on shared learning.',
    actionText: 'Join Next Session',
    link: 'https://discord.gg/bSTXAhBvuX',
    iconName: 'Terminal',
  },
  {
    id: 'alternative-of-the-week',
    title: 'FOSS Alternative of the Week',
    tagline: 'Discovering Open Tools',
    category: 'Resource Sharing',
    frequency: 'Community Series',
    description:
      'Highlighting useful open-source alternatives to proprietary tools for students and developers.',
    actionText: 'Explore on Telegram & Discord',
    link: 'https://t.me/fossclubiiitkalyani',
    iconName: 'Sparkles',
  },
];

export const REPOSITORIES: RepositoryItem[] = [
  {
    id: 'foss-club-org',
    name: 'FOSS-Club-IIIT-Kalyani',
    license: 'Open Source',
    description:
      'Official GitHub organization repository space hosting student open-source repositories and collaborative projects.',
    tags: ['GitHub Organization', 'Open Source', 'IIIT Kalyani'],
    primaryBranch: 'main branch',
    githubUrl: 'https://github.com/FOSS-Club-IIIT-Kalyani',
    actionLabel: 'Explore Repositories',
  },
];

export const LEADERSHIP: LeaderItem[] = [
  {
    name: 'Ayush Lahiri',
    role: 'Lead',
    badge: '2026–27',
    title: 'Chapter Lead • FOSS Club IIIT Kalyani',
    bio: 'Leading club sessions, workshops, and student community initiatives at IIIT Kalyani.',
    tags: ['Chapter Lead', 'Open Source', 'IIIT Kalyani'],
    initials: 'AL',
    linkedinUrl: 'https://in.linkedin.com/in/ayush-lahiri',
    image: 'https://fossunited.org/files/profile_9ju5ff1tu4885ff3885ff3.webp',
  },
  {
    name: 'Sahil Sujit Singh',
    role: 'Mentor',
    badge: 'Advisor',
    title: 'Mentor • FOSS Club IIIT Kalyani',
    bio: 'Providing guidance and mentorship for student initiatives and open-source activities at IIIT Kalyani.',
    tags: ['Mentor', 'Advisory', 'IIIT Kalyani'],
    initials: 'SS',
    linkedinUrl: 'https://in.linkedin.com/in/sahilssingh04',
    image: 'https://fossunited.org/files/profile_5lfqht07c07931ec.webp',
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
    title: 'Inception & Chapter',
    badge: 'Year 01',
    description:
      'Chapter established at IIIT Kalyani. Hosted inaugural FOSS Foundation session, Kalyani FOSS March Meetup, and online FOSS On-Air sessions.',
  },
  {
    year: '2025',
    title: 'Workshops & Sessions',
    badge: 'Year 02',
    description:
      'Conducted sessions on Git and GitHub workflows, introduction to GCC compiler concepts, and FOSS Foundation 2.0.',
  },
  {
    year: '2026–27',
    title: 'Active Term',
    badge: 'Current Cycle',
    description:
      'Continuing community learning, project sharing, open-source workshops, and student collaboration.',
  },
];
