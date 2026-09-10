import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import { Contact } from '../components/PlaceholderSections';

const Home = () => {
  return (
    <main className="space-y-6">
      <Hero />
      <About />
      <Contact />
    </main>
  );
};

export default Home;
