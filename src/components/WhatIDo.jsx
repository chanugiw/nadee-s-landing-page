import React from 'react';
import { motion } from 'framer-motion';
import { Target, PenSquare, Users, BarChart3, ArrowRight } from 'lucide-react';

const items = [
  {
    icon: Target,
    title: 'Performance Marketing',
    desc: 'Data-driven campaigns focused on audience acquisition, lead generation, conversion, and measurable growth.'
  },
  {
    icon: PenSquare,
    title: 'Strategic Content',
    desc: 'Developing content strategies that connect brand positioning with audience needs, behaviour, and engagement.'
  },
  {
    icon: Users,
    title: 'Social Media & Community',
    desc: 'Building meaningful digital communities, strengthening brand presence, and understanding audience conversations.'
  },
  {
    icon: BarChart3,
    title: 'Analytics & Optimisation',
    desc: 'Turning digital data and audience insights into actionable strategies, continuous optimisation, and stronger performance.'
  }
];

const WhatIDo = () => {
  return (
    <section className="mx-2 my-4 max-w-[97%] rounded-3xl bg-[#f9f9f9] px-4 py-10 shadow-2xl sm:px-6 md:mx-4 lg:px-12 lg:py-16 xl:px-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">

        {/* Left: heading + CTA */}
        <motion.div
          className="lg:col-span-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-[2px] w-8 bg-[#7A1F3D]"></div>
            <span className="text-[#7A1F3D] text-xs uppercase tracking-[0.25em] font-bold">What I Do</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] leading-tight mb-4">
            Strategic Digital Practice
          </h2>
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
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={i}
              className="bg-white border border-[#eee] rounded-xl p-5 shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <div className="w-11 h-11 rounded-full bg-[#f6e9ed] flex items-center justify-center mb-4">
                <Icon size={20} className="text-[#7A1F3D]" />
              </div>
              <h3 className="text-[#1a1a1a] font-bold text-sm mb-2">{title}</h3>
              <p className="text-[#777] text-xs leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
