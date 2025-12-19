import React from 'react';
import { LeadModalProvider } from './context/LeadModalContext';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Benefits from './sections/Benefits';
import Programs from './sections/Programs';
import Schedule from './sections/Schedule';
import Coaches from './sections/Coaches';
import Results from './sections/Results';
import Pricing from './sections/Pricing';
import Gallery from './sections/Gallery';
import FAQ from './sections/FAQ';
import Footer from './components/Footer';
import MobileCTA from './components/MobileCTA';

import { initEmailJS } from './utils/emailjs';

function App() {
  React.useEffect(() => {
    initEmailJS();
  }, []);

  return (
    <LeadModalProvider>
      <div className="app">
        <Navbar />
        <main>
          <Hero />
          <Benefits />
          <Programs />
          <Schedule />
          <Coaches />
          <Results />
          <Pricing />
          <Gallery />
          <FAQ />
        </main>
        <Footer />
        <MobileCTA />
      </div>
    </LeadModalProvider>
  );
}

export default App;
