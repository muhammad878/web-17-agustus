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
      <div id="home">
        <Hero />
      </div>
      <div id="categories" className="py-16 px-4">
        <CompetitionCategories />
      </div>
      <div id="timeline">
        <Timeline />
      </div>
      <Footer />
    </div>
  );
}

export default App;