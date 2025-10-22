import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import FeatureGrid from './components/FeatureGrid.jsx';
import CTASection from './components/CTASection.jsx';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white antialiased selection:bg-cyan-500/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <FeatureGrid />
        <CTASection />
      </main>
    </div>
  );
}

export default App;
