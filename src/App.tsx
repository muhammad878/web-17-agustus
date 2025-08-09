import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CompetitionCategories from './components/CompetitionCategories';
import Timeline from './components/Timeline';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <div className="py-16 px-4">
        <CompetitionCategories />
      </div>
      <Timeline />
      <Footer />
    </div>
  );
}

export default App;