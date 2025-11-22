import React from 'react';
import UnifiedBackground from './components/Background/UnifiedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import OrganizedBy from './components/OrganizedBy';
import WorkshopShowcase from './components/WorkshopShowcase';
import Highlights from './components/Highlights';
import Sponsorships from './components/Sponsorships';
import CTA from './components/CTA';
import Registration from './components/Registration';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app-container">
      <UnifiedBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <OrganizedBy />
        <WorkshopShowcase />
        <Highlights />
        <Sponsorships />
        <CTA />
        <Registration />
        <Contact />
      </main>
    </div>
  );
}

export default App;
