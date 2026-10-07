import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

const projects = [
  {
    dateRange: 'Aug 2025 - Jun 2025',
    client: 'Mint Media',
    title: 'Community Intelligence & eWOM Marketing',
    description: 'Developed a structured community and eWOM marketing approach, transforming grassroots engagement and consumer conversations into a professional, research-driven service model for brands.',
    tags: ['Strategy & Reporting'],
    contributions: [
      'Developed a structured community engagement strategy',
      'Conducted social listening and sentiment analysis',
      'Created reporting frameworks to track community conversations into actionable consumer and brand insights',
      'Applied the framework across multiple brands and industries'
    ],
    brands: ['Abans', 'LION', 'Evolution Auto', 'Uber'],
    detail: null
  },
  {
    dateRange: 'Aug 2025 - Oct 2025',
    client: 'Lyceum International Schools',
    title: 'First Commercial Photoshoot Project',
    description: "Led Lyceum's first-ever commercial photoshoot project from concept to execution — managing the entire production process including workshops, logistics, legal, consents, training and concepts.",
    tags: ['End-to-End Leadership', 'Workshops & Training', 'Concept to Creation', 'Compliance & Logistics'],
    contributions: [
      'Conceptualized and planned the entire photoshoot project',
      'Conducted workshops for students and internal media team',
      'Managed logistics, legal documentation, and consent process',
      'Directed the creative production ensuring brand consistency',
      'Delivered a high-quality visual library for brand communication'
    ],
    brands: [],
    detail: null
  },
  {
    dateRange: 'Oct 2025 - Mar 2026',
    client: 'UniPlan Education',
    title: 'Foundation of Digital for a Niche Product — College Counselling',
    description: "Developed the digital foundation for Sri Lanka's first-ever college counselling service by UniPlan Education — from ad accounts setup to a 2-year digital strategy.",
    tags: ['Digital Foundation Setup', 'Account Warm-Up', 'Audience Segmentation', '2-Year Digital Strategy'],
    contributions: [
      'Researched and understood the niche market of college counselling in Sri Lanka',
      'Set up Meta ad accounts and tracking from scratch',
      'Warmed up ad accounts and built initial audience sets',
      'Performed deep audience segmentation for a niche product',
      'Created a 2-year strategy for sustainable growth'
    ],
    brands: [],
    detail: null
  },
  {
    dateRange: 'Jun 2024 - Mar 2026',
    client: 'Lyceum Campus & Placements',
    title: 'Audience-to-Enrollment Growth Strategy',
    description: 'Developed a data-driven strategy connecting audience segmentation, paid campaigns, content, and lead optimization to strengthen enrollment opportunities across Campus and Placements.',
    tags: ['Audience Segmentation', 'Campaign Execution', 'Lead Optimization', 'Funnel & Growth Performance'],
    contributions: [
      'Developed integrated digital strategy for Campus and Placements',
      'Researched student and professional audiences to identify high-intent segments',
      'Executed paid lead generation campaigns across Meta and other platforms',
      'Built lead generation funnels and lead nurturing systems',
      'Optimized campaigns to improve conversions'
    ],
    brands: [],
    detail: null
  }
];

const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-full max-w-[300px] flex-none overflow-hidden rounded-xl border border-[#eee] bg-white shadow-sm sm:min-w-[300px]">

      {/* Header */}
      <div className="bg-[#7A1F3D] px-5 py-3 flex items-center justify-between">
        <span className="text-white/80 text-[10px] uppercase tracking-wider font-bold">{project.dateRange}</span>
        <span className="text-white text-[11px] font-bold">{project.client}</span>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-[#7A1F3D] font-bold text-base mb-2 leading-snug">{project.title}</h3>
        <p className="text-[#666] text-xs leading-relaxed mb-4">{project.description}</p>

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-auto flex items-center justify-center gap-2 border border-[#7A1F3D] text-[#7A1F3D] text-[11px] uppercase tracking-wider font-bold px-4 py-2 rounded-lg hover:bg-[#7A1F3D] hover:text-white transition-colors"
        >
          {expanded ? 'Hide Project' : 'View Project'}
          <ChevronDown size={14} className={`transition-transform ${expanded ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-5 mt-5 border-t border-[#eee]">
                {project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-[9px] uppercase tracking-wide font-bold text-[#7A1F3D] bg-[#f6e9ed] rounded-full px-2.5 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <p className="text-[10px] uppercase tracking-wider font-bold text-[#1a1a1a] mb-2">Key Contributions (Brief)</p>
                <ul className="space-y-1.5 mb-4">
                  {project.contributions.map((c, i) => (
                    <li key={i} className="text-[#666] text-[11px] leading-relaxed flex gap-2">
                      <span className="text-[#7A1F3D]">•</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>

                {project.brands.length > 0 && (
                  <div className="mb-4">
                    <p className="text-[10px] uppercase tracking-wider font-bold text-[#1a1a1a] mb-2">Brands / Selected Client Work</p>
                    <div className="flex flex-wrap gap-2">
                      {project.brands.map((b, i) => (
                        <span key={i} className="text-[10px] font-semibold text-[#444] border border-[#ddd] rounded px-2 py-1">
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {project.detail && (
                  <>
                    <p className="text-[10px] uppercase tracking-wider font-bold text-[#1a1a1a] mb-2">What I Did in Detail</p>
                    <ul className="space-y-1.5 mb-4">
                      {project.detail.map((d, i) => (
                        <li key={i} className="text-[#666] text-[11px] leading-relaxed flex gap-2">
                          <span className="text-[#7A1F3D]">•</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {/* Inert for now — will link to an image gallery in future */}
                <span className="text-[#7A1F3D] text-xs font-bold cursor-default select-none">
                  See More →
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const ProjectsExperiments = () => {
  const scrollRef = React.useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 320, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects-experiments" className="relative mx-2 md:mx-4 my-4 py-16 bg-[#f9f9f9] rounded-3xl shadow-2xl max-w-[97%] px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-[2px] w-8 bg-[#7A1F3D]"></div>
          <span className="text-[#7A1F3D] text-xs uppercase tracking-[0.25em] font-bold">Projects & Experiments</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-8">
          Selected Work & Case Studies
        </h2>

        <div className="relative">
          <button
            onClick={() => scroll(-1)}
            aria-label="Previous"
            className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white border border-[#ddd] shadow-md items-center justify-center text-[#7A1F3D] hover:bg-[#7A1F3D] hover:text-white transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll(1)}
            aria-label="Next"
            className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white border border-[#ddd] shadow-md items-center justify-center text-[#7A1F3D] hover:bg-[#7A1F3D] hover:text-white transition-colors"
          >
            <ChevronRight size={20} />
          </button>

          <div ref={scrollRef} className="flex gap-5 overflow-x-auto scroll-smooth pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {projects.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsExperiments;
