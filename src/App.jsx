import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage';
import ResearchPage from './pages/ResearchPage';
import ContactPage from './pages/ContactPage';
import ContactCardPage from './pages/ContactCardPage';
import FaqPage from './pages/FaqPage';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#f3f4f6] py-6 text-[#000000] antialiased selection:bg-[#505050] selection:text-[#FFFFFF]">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/contact-card" element={<ContactCardPage />} />
        <Route path="/faq" element={<FaqPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
