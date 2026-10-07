import React from 'react';
import { motion } from 'framer-motion';
import { Target, PenSquare, Users, BarChart3, ArrowRight } from 'lucide-react';

const items = [
  {
    icon: Target,
    title: 'EWOM Marketing Strategy Development',
    desc: 'We design tailored digital frameworks that leverage customer reviews and online conversations to amplify brand trust, maximize user recommendations, and scale your online visibility. Turn your audience into your most powerful sales force and build lasting, organic credibility.'
  },
  {
    icon: PenSquare,
    title: 'Digital Consumer Research',
    desc: 'Unlock deep audience insights with expert digital consumer research. Advanced analysis of online behaviors, search trends, and digital conversations decodes target market needs, purchasing triggers, and pain points.'
  },
  {
    icon: Users,
    title: 'Data Driven Performance Marketing',
    desc: 'Data driven campaigns focused on audience acquisition, lead generation (Meta & Google), conversion, and measurable growth.'
  },
  {
    icon: BarChart3,
    title: 'Content Marketing',
    desc: 'Develop content strategies for both paid and viral contents that connect brand positioning with audience needs, behaviour, and engagement.'
  }
];

const WhatIDo = () => {
  return (
    <section className="my-4 w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl rounded-3xl bg-[#f9f9f9] px-4 py-8 shadow-2xl sm:px-6 lg:px-10 lg:py-12">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">

          {/* Left: heading + CTA */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-3 flex items-center gap-3">
              <div className="h-[2px] w-8 bg-[#7A1F3D]"></div>
              <span className="text-[#7A1F3D] text-xs uppercase tracking-[0.25em] font-bold">What I Do</span>
            </div>

            <div className="mb-4">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] leading-tight">
                  Strategic Digital Practice
                </h2>
                <span className="inline-flex w-fit items-center rounded-full border border-[#B65B74] bg-[#fff5f7] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#7A1F3D]">
                  (Non Educational Clients Only)
                </span>
              </div>
            </div>

            <p className="text-[#555] text-sm leading-relaxed mb-8">
              I work at the intersection of digital strategy, audience behaviour, content, and performance,
              combining paid and organic approaches to build stronger digital growth frameworks.
            </p>
            <a
              href="https://www.linkedin.com/in/nadee-senanayake/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#7A1F3D] text-white text-xs uppercase tracking-wider font-bold px-6 py-3 rounded-lg hover:bg-[#5f1830] transition-colors"
            >
              View My Portfolio
              <ArrowRight size={14} />
            </a>
          </motion.div>

          {/* Right: 4 capability cards */}
          <div className="lg:col-span-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {items.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={i}
                className="flex h-auto min-h-full flex-col rounded-xl border border-[#eee] bg-white p-5 shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#f6e9ed]">
                  <Icon size={20} className="text-[#7A1F3D]" />
                </div>
                <h3 className="mb-2 text-sm font-bold text-[#1a1a1a]">{title}</h3>
                <p className="text-xs leading-relaxed text-[#777]">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
