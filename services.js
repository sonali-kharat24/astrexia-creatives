/**
 * SERVICES — central content file.
 * Edit titles, descriptions, offers and benefits here; the Home and
 * Services pages update automatically.
 * `icon` must match a key in src/components/icons.js.
 */

export const services = [
  {
    slug: 'digital-marketing',
    number: '01',
    title: 'Digital Marketing',
    icon: 'TrendingUp',
    chips: ['Strategy', 'Campaigns', 'Audience'],
    short:
      'Strategic campaigns that put your brand in front of the right people, on the channels that matter.',
    description:
      'Great creative needs a plan behind it. We build digital marketing strategies around your goals and your audience, then shape campaigns that communicate clearly and keep your brand consistent across every channel.',
    offers: [
      'Digital marketing strategy and planning',
      'Campaign concepts and creative direction',
      'Paid and organic channel planning',
      'Content and messaging frameworks',
      'Performance review and ongoing refinement',
    ],
    benefits: [
      'A clear plan instead of scattered posting',
      'Messaging that stays consistent across channels',
      'Marketing decisions linked to business goals',
      'Room to refine and improve over time',
    ],
  },
  {
    slug: 'social-media',
    number: '02',
    title: 'Social Media Management',
    icon: 'Share2',
    chips: ['Content', 'Community', 'Planning'],
    short:
      'Thoughtful planning, creative content and consistent presence across your social platforms.',
    description:
      'Social media works best when it is consistent and intentional. We plan, design and manage your social presence so your brand looks cohesive, sounds like itself and stays active where your audience spends time.',
    offers: [
      'Content calendars and posting schedules',
      'Post, carousel and story design',
      'Caption writing and tone of voice',
      'Profile setup and visual consistency',
      'Community engagement support',
    ],
    benefits: [
      'A cohesive and recognisable social presence',
      'Less time spent planning and posting yourself',
      'Content designed for each platform',
      'A steady rhythm of communication with your audience',
    ],
  },
  {
    slug: 'graphic-design',
    number: '03',
    title: 'Graphic Design',
    icon: 'PenTool',
    chips: ['Layout', 'Type', 'Print'],
    short:
      'Distinctive visual design for digital and print, from posters and brochures to marketing creatives.',
    description:
      'Design is how people first judge your brand. Our graphic design work combines strong layout, typography and colour to create materials that look polished, communicate quickly and feel unmistakably yours.',
    offers: [
      'Posters, flyers and brochures',
      'Marketing and advertising creatives',
      'Presentation and document design',
      'Packaging and label concepts',
      'Print-ready artwork preparation',
    ],
    benefits: [
      'A professional first impression',
      'Materials that are clear and easy to read',
      'Visual consistency across every touchpoint',
      'Artwork prepared for both screen and print',
    ],
  },
  {
    slug: 'branding',
    number: '04',
    title: 'Branding & Visual Identity',
    homeTitle: 'Branding & Identity',
    icon: 'Gem',
    chips: ['Logo', 'Palette', 'Guidelines'],
    short:
      'Complete brand identities, from logo and colour to the guidelines that keep everything consistent.',
    description:
      'A strong brand is more than a logo. We develop visual identities that express who you are: a considered logo, colour palette, typography and the guidelines that help your brand stay consistent as it grows.',
    offers: [
      'Logo design and wordmarks',
      'Colour palette and typography selection',
      'Brand guidelines and usage rules',
      'Stationery and brand collateral',
      'Social media and digital brand kits',
    ],
    benefits: [
      'A memorable and distinctive identity',
      'Consistency across print and digital',
      'A foundation that supports future growth',
      'Greater confidence presenting your brand',
    ],
  },
  {
    slug: 'website-development',
    number: '05',
    title: 'Website Development',
    icon: 'Code',
    chips: ['Responsive', 'Fast', 'Accessible'],
    short:
      'Modern, responsive websites designed around your brand and built for a smooth experience on every device.',
    description:
      'Your website is often your busiest shop window. We design and develop modern, responsive websites that load quickly, read clearly and guide visitors towards the next step, whether that is a call, a booking or an enquiry.',
    offers: [
      'Custom website design and development',
      'Responsive layouts for mobile, tablet and desktop',
      'Contact forms and integrations',
      'On-page SEO foundations',
      'Performance and accessibility best practices',
    ],
    benefits: [
      'A website that reflects your brand properly',
      'A smooth experience on every screen size',
      'Clear paths for visitors to get in touch',
      'A solid base for search visibility',
    ],
  },
  {
    slug: 'ui-ux-design',
    number: '06',
    title: 'UI/UX Design',
    icon: 'LayoutDashboard',
    chips: ['Wireframes', 'Flows', 'Prototypes'],
    short:
      'User-centred interface design that makes digital products intuitive, attractive and easy to use.',
    description:
      'Good interfaces feel effortless. We map user journeys, structure content and design clean, intuitive screens, so people can find what they need quickly and enjoy using your website or product.',
    offers: [
      'User flow and journey mapping',
      'Wireframes and interactive prototypes',
      'Website and app interface design',
      'Design systems and component libraries',
      'Usability review and improvement ideas',
    ],
    benefits: [
      'Interfaces that are easy to understand and use',
      'Fewer dead ends for your visitors',
      'Design decisions that can be reviewed before development',
      'A consistent visual system you can reuse',
    ],
  },
  {
    slug: 'content-development',
    number: '07',
    title: 'Creative Content Development',
    icon: 'Sparkles',
    chips: ['Ideas', 'Copy', 'Storytelling'],
    short:
      'Original ideas, copy and visual storytelling that give your brand something worth paying attention to.',
    description:
      'Content is how a brand shows up every day. We develop concepts, copy and visual storytelling that fit your voice and give your audience a reason to stop, read and remember you.',
    offers: [
      'Content concepts and campaign ideas',
      'Website, social and advertising copy',
      'Visual storytelling and art direction',
      'Content themes and messaging pillars',
      'Creative briefs and content planning',
    ],
    benefits: [
      'A distinctive voice that audiences recognise',
      'Fresh ideas that avoid generic content',
      'Content that supports your wider marketing plan',
      'Less pressure to come up with ideas yourself',
    ],
  },
  {
    slug: 'video-reels',
    number: '08',
    title: 'Video Editing & Reels',
    icon: 'Clapperboard',
    chips: ['Reels', 'Motion', 'Edits'],
    short:
      'Dynamic short-form video, reels and edits designed to capture attention and tell your story quickly.',
    description:
      'Video is now central to how brands are discovered. We edit and produce reels and short-form video with sharp pacing, clean motion graphics and sound, so your story lands in the first few seconds.',
    offers: [
      'Reels and short-form video editing',
      'Promotional and brand video edits',
      'Motion graphics, titles and captions',
      'Format optimisation for each platform',
      'Cover and thumbnail design',
    ],
    benefits: [
      'Scroll-stopping content in a format audiences enjoy',
      'Consistent visual style across your videos',
      'Edits sized correctly for every platform',
      'Raw footage turned into polished content',
    ],
  },
]

/** Slugs shown on the Home page, in display order. */
export const featuredSlugs = [
  'digital-marketing',
  'social-media',
  'graphic-design',
  'website-development',
  'branding',
  'video-reels',
]

export const featuredServices = featuredSlugs.map((slug) => services.find((s) => s.slug === slug))
