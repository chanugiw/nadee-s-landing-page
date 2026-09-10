import React from 'react';

const cards = [
  {
    title: 'Digital Marketing Practice',
    paragraphs: [
      "Nadee's professional practice spans performance marketing, strategic content, paid and organic growth, audience development, digital strategy, and marketing analytics. Rather than following a broad agency-style approach, she currently focuses on a selective range of projects and professional engagements that align with her strategic interests.",
      "Her work is centred on understanding audiences, testing growth approaches, analysing digital behaviour, and developing practical frameworks that can be applied across different business contexts."
    ],
    tags: ['Performance Marketing', 'Strategic Content', 'Paid & Organic Growth'],
    cta: 'More'
  },
  {
    title: 'Strategic Research & Practice',
    paragraphs: [
      "As a PhD candidate in Strategic Management, Nadee's academic direction is closely connected to her professional practice. Her research interests provide a foundation for exploring how strategy, digital ecosystems, audience behaviour, and organisational growth intersect.",
      "This creates a continuous connection between research, experimentation, and professional practice — allowing industry observations to inform research while research-driven thinking shapes how she approaches digital marketing challenges."
    ],
    tags: ['Strategic Management', 'Digital & Audience Behaviour', 'Research-Driven Practice'],
    cta: 'More'
  }
];

const About = () => {
  return (
    <section id="about" className="mx-2 md:mx-4 my-4 py-10 bg-[#f5f5f5] px-6 lg:px-12 xl:px-16 rounded-[28px] shadow-2xl max-w-[97%]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 text-left">
          <h2 className="text-[#7A1F3D] text-[0.8rem] uppercase tracking-[0.28em] font-bold">About Nadee Senanayake</h2>
        </div>

        <div className="mb-8 text-[#1d1d1d]">
          <p className="text-base md:text-lg leading-relaxed max-w-5xl">
            Nadee Senanayake is a Sri Lankan Digital Marketing professional, Strategic Content Specialist, and Certified Brand Strategist with expertise in performance marketing, organic growth, digital strategy, and audience-focused communication.
          </p>
          <p className="mt-4 text-base md:text-lg leading-relaxed max-w-5xl">
            She is also a PhD candidate in Strategic Management, with her professional practice closely aligned with her research interests. This intersection of research and industry shapes her approach to digital strategy, audience behaviour, and growth.
          </p>
          <p className="mt-4 text-base md:text-lg leading-relaxed max-w-5xl">
            She currently takes on a selective range of projects and collaborations, focusing on opportunities that align with her research direction, strategic priorities, and long-term professional development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {cards.map((card) => (
            <div key={card.title} className="rounded-2xl bg-[#121212] p-6 text-white shadow-[0_12px_24px_rgba(0,0,0,0.12)] min-h-[220px] flex flex-col justify-between">
              <div>
                <div className="mb-4 inline-flex rounded-full bg-[#f0dfe8] px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#7A1F3D]">
                  {card.title}
                </div>

                <div className="space-y-4 text-[0.95rem] leading-relaxed text-[#d8d8d8]">
                  {card.paragraphs.map((paragraph, index) => (
                    <p key={`${card.title}-${index}`}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <div className="flex flex-wrap gap-2 mb-5">
                  {card.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-[#363636] px-2.5 py-1 text-[0.58rem] uppercase tracking-[0.14em] text-[#bdbdbd]">
                      {tag}
                    </span>
                  ))}
                </div>

                <a href="#" className="inline-flex items-center text-[#f1d7e3] text-sm font-medium hover:text-white transition-colors">
                  {card.cta} <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
