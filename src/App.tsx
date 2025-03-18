import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Navbar />
      <Hero />
      
      <main className="container mx-auto px-4 py-12">
        <About />
        <Gallery />
        <Services />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;