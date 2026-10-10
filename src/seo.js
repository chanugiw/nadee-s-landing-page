// Single source of truth for per-page SEO. Used by:
//  - scripts/prerender.mjs (writes real <head> tags into each static HTML file)
//  - src/components/RouteSeo.jsx (keeps the tags in sync on client-side navigation)

export const SITE_URL = 'https://www.nadeesenanayake.com';
export const SITE_NAME = 'Nadee Senanayake';
export const OG_IMAGE = `${SITE_URL}/assets/nadee-portrait.jpeg`;

const DEFAULT_META = {
  title: 'Nadee Senanayake | Brand Strategist & Digital Marketing Consultant',
  description:
    'Nadee Senanayake - Brand Strategist, Performance Marketer, EWOM Marketing Strategist & Digital Consumer Researcher.',
};

export const routeMeta = {
  '/': {
    title: 'Nadee Senanayake | Brand Strategist & Performance Marketer',
    description:
      'Nadee Senanayake is a Sri Lankan brand strategist, performance marketer, EWOM marketing strategist and digital consumer researcher. Book a consultation.',
  },
  '/about': {
    title: 'About Nadee Senanayake | Digital Marketing & Brand Strategy',
    description:
      'Sri Lankan digital marketing professional, strategic content specialist and certified brand strategist with expertise in performance marketing, organic growth and digital strategy.',
  },
  '/contact': {
    title: 'Book a Consultation | Brand Strategy & Digital Marketing | Nadee Senanayake',
    description:
      'Book a strategy consultation with Nadee Senanayake: brand strategy, social listening and eWOM, online reputation management, influencer strategy and paid media (Meta Ads & Google Ads).',
  },
  '/faq': {
    title: 'FAQ | Brand Strategy & Consulting Questions | Nadee Senanayake',
    description:
      'Answers to common questions about working with Nadee Senanayake: who she works with, strategic consulting, brand positioning, and how to book a consultation.',
  },
  // Placeholder pages ("coming soon"): kept reachable, but not indexed until they have real content.
  '/experience': {
    title: 'Experience | Nadee Senanayake',
    description: 'Professional experience of Nadee Senanayake.',
    noindex: true,
  },
  '/projects': {
    title: 'Projects | Nadee Senanayake',
    description: 'Projects and experiments by Nadee Senanayake.',
    noindex: true,
  },
  '/research': {
    title: 'Research | Nadee Senanayake',
    description: 'Research and publications by Nadee Senanayake.',
    noindex: true,
  },
  '/contact-card': {
    title: 'Contact | Nadee Senanayake',
    description:
      'Strategic consultation for businesses, organisations and brands that want better audience insight, sharper positioning and measurable digital growth.',
  },
};

export const getMeta = (pathname) => {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  const meta = routeMeta[path] || DEFAULT_META;
  return { ...meta, path, canonical: `${SITE_URL}${path === '/' ? '/' : path}` };
};

// Services listed on the Consultation page.
const SERVICES = [
  'Brand Strategy & Market Positioning',
  'Social Media Research & Gap Analysis',
  'Social Listening, eWOM & Community Management',
  'Online Reputation & Digital Crisis Management',
  'Influencer & Digital Influence Strategy',
  'Paid Media Consulting (Meta Ads & Google Ads)',
  'Talent Development & Industry Placement',
  'Digital Marketing Operations & Supply Chain',
];

const PERSON_ID = `${SITE_URL}/#person`;

export const homeJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': PERSON_ID,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      image: OG_IMAGE,
      jobTitle: 'Brand Strategist',
      description:
        'Sri Lankan digital marketing professional, strategic content specialist and certified brand strategist - Brand Strategist, Performance Marketer, EWOM Marketing Strategist & Digital Consumer Researcher.',
      nationality: { '@type': 'Country', name: 'Sri Lanka' },
      email: 'info@nadeesenanayake.com',
      telephone: '+94707803698',
      sameAs: ['https://www.linkedin.com/in/nadee-senanayake/'],
      knowsAbout: [
        'Brand strategy',
        'Performance marketing',
        'EWOM marketing',
        'Social listening',
        'Digital consumer research',
        'Online reputation management',
        'Influencer strategy',
        'Paid media',
      ],
    },
    ...SERVICES.map((name) => ({
      '@type': 'Service',
      name,
      serviceType: name,
      url: `${SITE_URL}/contact`,
      provider: { '@id': PERSON_ID },
    })),
  ],
};

const escapeAttr = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

// Builds the <head> tags for a route as an HTML string (used at build time).
export const buildHeadHtml = (pathname) => {
  const m = getMeta(pathname);
  const tags = [
    `<title>${escapeAttr(m.title)}</title>`,
    `<meta name="description" content="${escapeAttr(m.description)}" />`,
    `<link rel="canonical" href="${m.canonical}" />`,
    `<meta name="robots" content="${m.noindex ? 'noindex, follow' : 'index, follow'}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${SITE_NAME}" />`,
    `<meta property="og:title" content="${escapeAttr(m.title)}" />`,
    `<meta property="og:description" content="${escapeAttr(m.description)}" />`,
    `<meta property="og:url" content="${m.canonical}" />`,
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeAttr(m.title)}" />`,
    `<meta name="twitter:description" content="${escapeAttr(m.description)}" />`,
    `<meta name="twitter:image" content="${OG_IMAGE}" />`,
  ];
  if (m.path === '/') {
    const json = JSON.stringify(homeJsonLd).replace(/</g, '\\u003c');
    tags.push(`<script type="application/ld+json">${json}</script>`);
  }
  return tags.map((t) => `    ${t}`).join('\n');
};

// Client-side: update tags in place after route changes.
export const applyMetaToDocument = (pathname) => {
  if (typeof document === 'undefined') return;
  const m = getMeta(pathname);
  document.title = m.title;

  const setMeta = (selector, create, value) => {
    let el = document.head.querySelector(selector);
    if (!el) {
      el = create();
      document.head.appendChild(el);
    }
    el.setAttribute(el.tagName === 'LINK' ? 'href' : 'content', value);
  };
  const meta = (attr, key) => () => {
    const el = document.createElement('meta');
    el.setAttribute(attr, key);
    return el;
  };

  setMeta('meta[name="description"]', meta('name', 'description'), m.description);
  setMeta('meta[property="og:title"]', meta('property', 'og:title'), m.title);
  setMeta('meta[property="og:description"]', meta('property', 'og:description'), m.description);
  setMeta('meta[property="og:url"]', meta('property', 'og:url'), m.canonical);
  setMeta('meta[name="robots"]', meta('name', 'robots'), m.noindex ? 'noindex, follow' : 'index, follow');
  setMeta('meta[name="twitter:title"]', meta('name', 'twitter:title'), m.title);
  setMeta('meta[name="twitter:description"]', meta('name', 'twitter:description'), m.description);
  setMeta(
    'link[rel="canonical"]',
    () => {
      const el = document.createElement('link');
      el.setAttribute('rel', 'canonical');
      return el;
    },
    m.canonical,
  );
};
