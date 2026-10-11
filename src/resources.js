// Single source of truth for the Resources section (navbar dropdown, footer, hub page, SEO, prerender).
export const resourcePages = [
  {
    slug: 'insights',
    name: 'Insights',
    blurb: 'Short, sharp observations on brand strategy, audience behaviour and digital marketing.',
  },
  {
    slug: 'blogs',
    name: 'Blogs',
    blurb: 'Longer-form thoughts, lessons and stories from consulting and campaign work.',
  },
  {
    slug: 'articles',
    name: 'Articles',
    blurb: 'In-depth articles on strategy, eWOM, social listening and online reputation.',
  },
  {
    slug: 'research',
    name: 'Research',
    blurb: 'Research and publications connected to strategic management and digital ecosystems.',
  },
  {
    slug: 'events-case-studies',
    name: 'Events & Case Studies',
    blurb: 'Talks, events and real-world case studies showing strategy turned into results.',
  },
  {
    slug: 'white-paper',
    name: 'White Paper',
    blurb: 'Downloadable white papers with frameworks and findings for brands and organisations.',
  },
];

export const resourcePath = (slug) => `/resources/${slug}`;
