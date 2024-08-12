import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';



const App = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Features />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
};

export default App;
