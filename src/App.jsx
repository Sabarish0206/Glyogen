import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TrustBar from './components/TrustBar';
import MissionVisionSection from './components/MissionVisionSection';
import ComplianceBar from './components/ComplianceBar';
import ContactFormSection from './components/ContactFormSection';
import Footer from './components/Footer';
import './App.css'; // Import your global styles

function App() {
  return (
    <div className="landing-page">
      <Header />
      <main>
        <HeroSection />
        <TrustBar />
        <MissionVisionSection />
        <ComplianceBar />
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;