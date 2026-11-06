// All editable website content lives here.

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contact', label: 'Contact' },
]

export const services = [
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    icon: 'megaphone',
    visual: 'marketing',
    variant: 0,
    summary: 'Strategy-led campaigns that put your brand in front of the right people.',
    description:
      'We plan and run digital marketing that connects with your audience and supports your business goals. From positioning and messaging to campaign planning and channel strategy, every step is designed to bring clarity and consistency to how your brand grows online.',
    offers: [
      'Digital marketing strategy & planning',
      'Paid and organic campaign planning',
      'Audience and competitor research',
      'Performance tracking & reporting',
    ],
    benefits: [
      'A clear plan instead of scattered posting',
      'Messaging that speaks to the right audience',
      'Decisions backed by data and regular reporting',
    ],
  },
  {
    id: 'social-media-management',
    title: 'Social Media Management',
    icon: 'share',
    visual: 'social',
    variant: 0,
    summary: 'Consistent, on-brand social presence that keeps your audience engaged.',
    description:
      'We manage your social channels with a steady rhythm of well-designed, thoughtful content. Planning, creative and publishing come together so your brand shows up consistently and feels recognisable on every platform.',
    offers: [
      'Content calendars & scheduling',
      'Post, story and carousel design',
      'Community engagement support',
      'Channel growth strategy',
    ],
    benefits: [
      'A consistent, recognisable social presence',
      'Time saved for your own team',
      'Content that fits each platform',
    ],
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    icon: 'pen',
    visual: 'graphic',
    variant: 1,
    summary: 'Clean, striking visuals for print and digital.',
    description:
      'Great design makes ideas easier to understand and harder to forget. We create polished visuals for campaigns, communication and everyday brand use, with a minimal, premium finish.',
    offers: [
      'Posters, flyers & brochures',
      'Social and advertising creatives',
      'Presentations & pitch material',
      'Print-ready artwork',
    ],
    benefits: [
      'Visuals that look professional everywhere',
      'Faster, clearer communication',
      'A consistent look across every touchpoint',
    ],
  },
  {
    id: 'branding-visual-identity',
    title: 'Branding & Visual Identity',
    shortTitle: 'Branding & Identity',
    icon: 'diamond',
    visual: 'branding',
    variant: 0,
    summary: 'Identities with a point of view, built to be remembered.',
    description:
      'Your brand is more than a logo. We craft complete visual identities, from marks and colour to typography and guidelines, so your business looks and feels unmistakably like itself in every setting.',
    offers: [
      'Logo design & brand marks',
      'Colour palette & typography',
      'Brand guidelines',
      'Stationery & brand collateral',
    ],
    benefits: [
      'A memorable identity that stands apart',
      'Trust built through consistency',
      'Guidelines that keep your team on-brand',
    ],
  },
  {
    id: 'website-development',
    title: 'Website Development',
    icon: 'code',
    visual: 'website',
    variant: 0,
    summary: 'Fast, responsive websites designed to convert visitors.',
    description:
      'We design and build modern websites that look sharp, load quickly and work beautifully on every screen. Performance, accessibility and search-friendly structure are part of the foundation, not an afterthought.',
    offers: [
      'Custom responsive websites',
      'Landing pages & multi-page sites',
      'Speed, SEO & accessibility foundations',
      'Contact forms & integrations',
    ],
    benefits: [
      'A fast site that works on every device',
      'Easier discovery in search',
      'A reliable home for your brand online',
    ],
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    icon: 'layout',
    visual: 'ui',
    variant: 1,
    summary: 'Intuitive interfaces shaped around real user journeys.',
    description:
      'We map how people move through your product or website, then design interfaces that feel effortless. Clear flows, thoughtful hierarchy and polished detail make every interaction easier.',
    offers: [
      'User flows & wireframes',
      'Interface design for web and mobile',
      'Interactive prototypes',
      'Design systems',
    ],
    benefits: [
      'Easier journeys for your visitors',
      'Fewer rebuilds because ideas are tested early',
      'Interfaces that feel on-brand',
    ],
  },
  {
    id: 'creative-content-development',
    title: 'Creative Content Development',
    icon: 'sparkle',
    visual: 'social',
    variant: 2,
    summary: 'Ideas, words and visuals that give your brand a voice.',
    description:
      'Strong content starts with a strong idea. We develop concepts, copy and visual storytelling that fit your brand and your audience, ready to use across web, social and campaigns.',
    offers: [
      'Concept & campaign ideas',
      'Copywriting & captions',
      'Visual storytelling',
      'Content for web, social and email',
    ],
    benefits: [
      'Stories that give your brand a clear voice',
      'Fresh ideas that keep audiences engaged',
      'A steady supply of on-brand content',
    ],
  },
  {
    id: 'video-editing-reels',
    title: 'Video Editing & Reels',
    icon: 'play',
    visual: 'video',
    variant: 0,
    summary: 'Short-form video with rhythm, polish and personality.',
    description:
      'Video is how many audiences discover brands today. We edit reels, promos and short-form videos with sharp pacing, clean captions and a finish that matches your brand.',
    offers: [
      'Reels & short-form edits',
      'Promotional videos',
      'Motion graphics & captions',
      'Colour, sound & pacing polish',
    ],
    benefits: [
      'Scroll-stopping short-form content',
      'Polished video without the production headache',
      'Formats ready for each platform',
    ],
  },
]

// The six cards shown on the Home page, in the requested order.
export const homeServiceCards = [
  { id: 'digital-marketing', num: '01' },
  { id: 'social-media-management', num: '02' },
  { id: 'graphic-design', num: '03' },
  { id: 'website-development', num: '04' },
  { id: 'branding-visual-identity', num: '05' },
  { id: 'video-editing-reels', num: '06' },
].map((c) => {
  const s = services.find((x) => x.id === c.id)
  return { ...c, title: s.shortTitle || s.title, icon: s.icon, summary: s.summary }
})

export const serviceOptions = [...services.map((s) => s.title), 'Not sure yet / Other']

export const whyItems = [
  {
    icon: 'bulb',
    title: 'Creative Thinking',
    text: 'Original ideas and a distinctive visual point of view, so your brand never looks like everyone else.',
  },
  {
    icon: 'compass',
    title: 'Strategic Approach',
    text: 'Every design and campaign decision is tied to your goals, your audience and your market.',
  },
  {
    icon: 'cpu',
    title: 'Modern Solutions',
    text: 'Current tools, clean code and contemporary design, built to perform on today’s devices.',
  },
  {
    icon: 'target',
    title: 'Client-Focused Results',
    text: 'Clear communication and work shaped around what your business actually needs.',
  },
]

export const processSteps = [
  {
    num: '01',
    title: 'Discover',
    text: 'We learn about your business, audience and goals, and look closely at what makes you different.',
  },
  {
    num: '02',
    title: 'Strategize',
    text: 'We turn insight into a clear plan covering positioning, messaging, channels and creative direction.',
  },
  {
    num: '03',
    title: 'Create',
    text: 'Our designers, editors and developers bring the plan to life with polished, on-brand work.',
  },
  {
    num: '04',
    title: 'Grow',
    text: 'We launch, review and refine, so your digital presence keeps getting stronger.',
  },
]

export const about = {
  quote: 'Good design should work as hard as good strategy.',
  story: [
    'Astrexia Creatives is a digital marketing and creative agency that helps businesses build a strong digital presence. We bring creative design, strategic marketing and modern website experiences together, so your brand speaks with one confident voice.',
    'Too many brands treat design, marketing and web as separate jobs. We treat them as one connected story, from the first logo sketch to the last click on your website, so every piece supports the next.',
    'Whether you are launching something new or refreshing something established, we work to make your brand easier to notice, easier to remember and easier to choose.',
  ],
  vision:
    'To be the creative partner brands trust to turn ideas into digital experiences people remember.',
  mission:
    'To help businesses stand out, connect with their audience and grow in the digital world through creative design, strategic thinking and modern technology.',
  approach: [
    { title: 'Listen first', text: 'We start with your story, goals and audience before a single pixel is placed.' },
    { title: 'Think strategically', text: 'Ideas are shaped by purpose, so the work looks good and does a job.' },
    { title: 'Design with intent', text: 'Minimal, premium and considered: every detail earns its place.' },
    { title: 'Build and refine', text: 'We launch with care, review honestly and keep improving.' },
  ],
  why: [
    'One team for design, marketing and web',
    'Premium, minimal design with a purpose',
    'Strategy behind every creative decision',
    'Clear communication from start to finish',
    'Modern, responsive and accessible builds',
    'Work shaped around your goals',
  ],
}

export const portfolioCategories = [
  'All',
  'Branding',
  'Graphic Design',
  'Social Media',
  'Website Development',
  'Marketing',
]

// Every project here is a fictional demonstration (CONCEPT PROJECT).
// No client names, testimonials or results are claimed.
export const projects = [
  {
    id: 'brand-identity-suite',
    title: 'Brand Identity Suite',
    category: 'Branding',
    service: 'Branding & Visual Identity',
    kind: 'branding',
    variant: 0,
    featured: true,
    summary: 'A concept identity system: logo mark, colour palette, typography and stationery for an imaginary wellness studio.',
    deliverables: ['Logo mark and wordmark', 'Colour and type system', 'Business card and stationery'],
  },
  {
    id: 'cafe-logo-stationery',
    title: 'Logo & Stationery Concept',
    category: 'Branding',
    service: 'Branding & Visual Identity',
    kind: 'branding',
    variant: 2,
    summary: 'A refined monogram and print set designed for an imaginary boutique café.',
    deliverables: ['Monogram exploration', 'Letterhead and cards', 'Palette in light and dark'],
  },
  {
    id: 'event-poster-series',
    title: 'Event Poster Series',
    category: 'Graphic Design',
    service: 'Graphic Design',
    kind: 'graphic',
    variant: 0,
    summary: 'Bold, geometric poster layouts for an imaginary arts evening.',
    deliverables: ['Poster layouts in three sizes', 'Typographic hierarchy', 'Print-ready artwork'],
  },
  {
    id: 'editorial-print-layout',
    title: 'Editorial Print Layout',
    category: 'Graphic Design',
    service: 'Graphic Design',
    kind: 'graphic',
    variant: 2,
    summary: 'A clean magazine-style layout concept with generous whitespace and strong typography.',
    deliverables: ['Grid system', 'Cover and spread concepts', 'Typography pairing'],
  },
  {
    id: 'launch-campaign-feed',
    title: 'Launch Campaign Feed',
    category: 'Social Media',
    service: 'Social Media Management',
    kind: 'social',
    variant: 0,
    featured: true,
    summary: 'A cohesive Instagram grid concept announcing an imaginary product launch.',
    deliverables: ['Nine-post grid system', 'Story templates', 'Caption tone guide'],
  },
  {
    id: 'story-reel-templates',
    title: 'Story & Reel Templates',
    category: 'Social Media',
    service: 'Video Editing & Reels',
    kind: 'video',
    variant: 1,
    summary: 'Reusable vertical video templates with motion and caption styling.',
    deliverables: ['Reel intro and outro', 'Caption styles', 'Transition set'],
  },
  {
    id: 'carousel-series',
    title: 'Educational Carousel Series',
    category: 'Social Media',
    service: 'Creative Content Development',
    kind: 'social',
    variant: 2,
    summary: 'A swipeable carousel concept that explains an idea in clear, designed steps.',
    deliverables: ['Carousel layouts', 'Icon and illustration style', 'Copy structure'],
  },
  {
    id: 'studio-landing-page',
    title: 'Studio Landing Page',
    category: 'Website Development',
    service: 'Website Development',
    kind: 'website',
    variant: 0,
    featured: true,
    summary: 'A responsive one-page website concept for an imaginary design studio.',
    deliverables: ['Responsive layouts', 'Interaction concepts', 'Performance-minded build'],
  },
  {
    id: 'online-store-interface',
    title: 'Online Store Interface',
    category: 'Website Development',
    service: 'Website Development',
    kind: 'website',
    variant: 1,
    summary: 'A product-led storefront concept with clear navigation and calm, premium styling.',
    deliverables: ['Product page layout', 'Navigation structure', 'Mobile-first design'],
  },
  {
    id: 'mobile-app-screens',
    title: 'Mobile App Screens',
    category: 'Website Development',
    service: 'UI/UX Design',
    kind: 'ui',
    variant: 2,
    summary: 'A set of app interface screens exploring flow, hierarchy and interface detail.',
    deliverables: ['Key user flows', 'High-fidelity screens', 'Component library'],
  },
  {
    id: 'seasonal-ad-campaign',
    title: 'Seasonal Ad Campaign',
    category: 'Marketing',
    service: 'Digital Marketing',
    kind: 'marketing',
    variant: 0,
    featured: true,
    summary: 'A multi-format advertising concept built around one clear campaign idea.',
    deliverables: ['Campaign concept', 'Ad formats for web and social', 'Messaging framework'],
  },
  {
    id: 'lead-funnel-concept',
    title: 'Lead Generation Funnel',
    category: 'Marketing',
    service: 'Digital Marketing',
    kind: 'marketing',
    variant: 1,
    summary: 'A funnel concept mapping awareness, interest and enquiry into a simple, measurable path.',
    deliverables: ['Funnel map', 'Landing and email concepts', 'Tracking plan outline'],
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
