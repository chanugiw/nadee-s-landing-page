import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, PenTool, LineChart } from 'lucide-react';
import WhatIDo from '../components/WhatIDo';

const iconRow = [
  { icon: TrendingUp, label: 'Performance Marketing' },
  { icon: PenTool, label: 'Strategic Content' },
  { icon: LineChart, label: 'Digital Growth & Analytics' },
];

const AboutPage = () => {
  return (
    <main className="space-y-6">
      <section className="relative mx-2 md:mx-4 my-4 min-h-[85vh] bg-[#121212] rounded-3xl overflow-hidden shadow-2xl max-w-[97%] px-6 lg:px-16 py-16 flex items-center">

        <div className="absolute -right-24 -top-24 w-[420px] h-[420px] rounded-full bg-[#7A1F3D] opacity-90"></div>
        <div className="absolute right-10 top-0 w-64 h-full border-2 border-[#7A1F3D]/40 rounded-[60px]"></div>
        <div className="absolute right-0 bottom-10 w-40 h-40 rounded-full border border-[#333]"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-8 bg-[#7A1F3D]"></div>
              <span className="text-[#7A1F3D] text-xs uppercase tracking-[0.25em] font-bold">Biography</span>
            </div>

            <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight mb-6">
              About<br />
              <span className="text-[#B8355A]">Nadee</span>
            </h1>

            <p className="text-[#B0B0B0] text-base leading-relaxed max-w-md mb-6">
              Nadee Senanayake is a Sri Lankan <span className="text-white font-medium">Digital Marketing professional</span>,{' '}
              <span className="text-white font-medium">strategic content specialist</span>, and{' '}
              <span className="text-white font-medium">certified brand strategist</span>, with experience spanning
              performance marketing, organic growth, digital strategy, and audience-focused communication.
            </p>

            <div className="mb-8">
              <p className="text-white font-bold text-lg" style={{ fontFamily: 'cursive' }}>Nadee Senanayake</p>
              <p className="text-[#7A1F3D] text-xs uppercase tracking-[0.2em] font-bold">Digital Marketing Professional</p>
            </div>

            <div className="flex flex-wrap gap-6">
              {iconRow.map(({ icon: Icon, label }, i) => (
                <div key={i} className="flex items-center gap-2 max-w-[130px]">
                  <div className="w-9 h-9 rounded-full border border-[#7A1F3D] flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-[#B8355A]" />
                  </div>
                  <span className="text-[#A0A0A0] text-xs font-medium leading-tight">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src="/assets/nadee-portrait.jpeg"
              alt="Nadee Senanayake"
              className="relative z-10 w-full max-w-sm rounded-3xl object-cover shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      <WhatIDo />
    </main>
  );
};

export default AboutPage;
