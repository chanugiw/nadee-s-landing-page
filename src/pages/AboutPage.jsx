import React from 'react';
import { motion } from 'framer-motion';
import WhatIDo from '../components/WhatIDo';

const AboutPage = () => {
  return (
    <main className="space-y-6">
      <section className="relative mx-2 my-4 flex min-h-[85vh] max-w-[97%] items-center bg-[#121212] px-4 py-10 shadow-2xl sm:px-6 md:mx-4 md:px-6 lg:px-16 lg:py-16">

        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-8 bg-[#7A1F3D]"></div>
              <span className="text-[#7A1F3D] text-xs uppercase tracking-[0.25em] font-bold">Biography</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              About<br />
              <span className="text-[#B8355A]">Nadee</span>
            </h1>

            <p className="mb-6 max-w-md text-sm leading-relaxed text-[#B0B0B0] sm:text-base">
              Nadee Senanayake is a Sri Lankan <span className="text-white font-medium">Digital Marketing professional</span>,{' '}
              <span className="text-white font-medium">strategic content specialist</span>, and{' '}
              <span className="text-white font-medium">certified brand strategist</span>, with experience spanning
              performance marketing, organic growth, digital strategy, and audience-focused communication.
            </p>

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
              className="relative z-10 w-full max-w-sm object-cover shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      <WhatIDo />
    </main>
  );
};

export default AboutPage;
