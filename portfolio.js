/**
 * PORTFOLIO — central content file.
 *
 * EVERY project here is a fictional demonstration ("CONCEPT PROJECT").
 * None of them is real client work. Brand names are invented for
 * illustration only.
 *
 * To use your own images later, put files in src/assets/images/ and set
 * `image` to the imported URL, for example:
 *   import velvet from '../assets/images/velvet.jpg'
 *   ... image: velvet
 * When `image` is set, it replaces the generated mockup.
 * When you add real client work, set `concept: false` on that project
 * so the CONCEPT PROJECT label is removed only for genuine work.
 *
 * mockup: 'brand' | 'poster' | 'social' | 'web' | 'ad'
 * variant: 0 or 1 (alternate look of each mockup type)
 */

export const portfolioCategories = [
  'All',
  'Branding',
  'Graphic Design',
  'Social Media',
  'Website Development',
  'Marketing',
]

export const projects = [
  {
    id: 'velvet-studio',
    title: 'Velvet Studio',
    type: 'Brand Identity',
    category: 'Branding',
    mockup: 'brand',
    variant: 0,
    mark: 'Velvet',
    sub: 'Studio',
    home: true,
    concept: true,
    image: null,
    summary:
      'A concept identity for a fictional boutique creative studio: a refined mark, a rich colour palette and elegant stationery.',
    deliverables: ['Logo and wordmark', 'Colour palette', 'Business card', 'Brand guidelines'],
  },
  {
    id: 'orbit-cafe',
    title: 'Orbit Café',
    type: 'Visual Identity',
    category: 'Branding',
    mockup: 'brand',
    variant: 1,
    mark: 'Orbit',
    sub: 'Café',
    concept: true,
    image: null,
    summary:
      'A concept visual identity for a fictional neighbourhood café, with a warm light palette, simple mark and menu-ready typography.',
    deliverables: ['Logo suite', 'Typography system', 'Menu and signage concept', 'Social profile kit'],
  },
  {
    id: 'bloom-fest',
    title: 'Bloom Fest',
    type: 'Poster Series',
    category: 'Graphic Design',
    mockup: 'poster',
    variant: 0,
    mark: 'Bloom',
    sub: 'Fest',
    concept: true,
    image: null,
    summary:
      'A concept poster series for a fictional arts festival, built around bold type, strong colour and generous space.',
    deliverables: ['Main poster', 'Poster variations', 'Flyer layout', 'Digital banner'],
  },
  {
    id: 'nova-label',
    title: 'Nova Label System',
    type: 'Packaging Concept',
    category: 'Graphic Design',
    mockup: 'poster',
    variant: 1,
    mark: 'Nova',
    sub: 'Botanics',
    concept: true,
    image: null,
    summary:
      'A concept label and packaging system for a fictional product line, designed to scale across sizes and variants.',
    deliverables: ['Label design', 'Variant system', 'Print-ready artwork concept', 'Sticker set'],
  },
  {
    id: 'daily-glow',
    title: 'Daily Glow Campaign',
    type: 'Instagram Campaign',
    category: 'Social Media',
    mockup: 'social',
    variant: 0,
    mark: 'Glow',
    sub: 'Daily',
    home: true,
    concept: true,
    image: null,
    summary:
      'A concept social media campaign for a fictional wellness brand, with a cohesive feed grid and reusable post templates.',
    deliverables: ['Feed grid design', 'Post templates', 'Carousel layouts', 'Highlight covers'],
  },
  {
    id: 'story-drop',
    title: 'Story Drop Series',
    type: 'Stories & Reels Covers',
    category: 'Social Media',
    mockup: 'social',
    variant: 1,
    mark: 'Drop',
    sub: 'Series',
    concept: true,
    image: null,
    summary:
      'A concept story and reel cover set for a fictional product launch, designed for quick, vertical-first storytelling.',
    deliverables: ['Story templates', 'Reel covers', 'Animated title concept', 'Caption style guide'],
  },
  {
    id: 'nimbus-site',
    title: 'Nimbus Studio Website',
    type: 'Website Design',
    category: 'Website Development',
    mockup: 'web',
    variant: 0,
    mark: 'Nimbus',
    sub: 'Studio',
    home: true,
    concept: true,
    image: null,
    summary:
      'A concept website interface for a fictional design studio, featuring a bold hero, clear navigation and a flexible content layout.',
    deliverables: ['Homepage design', 'Responsive layouts', 'Component system', 'Contact flow'],
  },
  {
    id: 'atlas-landing',
    title: 'Atlas Landing Page',
    type: 'Landing Page UI',
    category: 'Website Development',
    mockup: 'web',
    variant: 1,
    mark: 'Atlas',
    sub: 'Fitness',
    concept: true,
    image: null,
    summary:
      'A concept landing page for a fictional fitness studio, with a dark interface, strong calls to action and clean sections.',
    deliverables: ['Landing page UI', 'Mobile layout', 'Call-to-action design', 'Section library'],
  },
  {
    id: 'launch-week',
    title: 'Launch Week Campaign',
    type: 'Marketing Creatives',
    category: 'Marketing',
    mockup: 'ad',
    variant: 0,
    mark: 'Launch',
    sub: 'Week',
    home: true,
    concept: true,
    image: null,
    summary:
      'A concept multi-format marketing campaign for a fictional product launch, adapted for banners, squares and stories.',
    deliverables: ['Banner ad', 'Square ad', 'Story ad', 'Campaign messaging'],
  },
  {
    id: 'season-ads',
    title: 'New Season Ads',
    type: 'Digital Advertisements',
    category: 'Marketing',
    mockup: 'ad',
    variant: 1,
    mark: 'Season',
    sub: 'New',
    concept: true,
    image: null,
    summary:
      'A concept digital advertising set for a fictional seasonal collection, with a consistent look across formats.',
    deliverables: ['Display ad set', 'Social ad set', 'Email header', 'Creative variations'],
  },
]

export const homeProjects = projects.filter((p) => p.home)
