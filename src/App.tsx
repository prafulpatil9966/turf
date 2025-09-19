import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import BookingJourney from './components/BookingJourney';
import Gallery from './components/Gallery';
import EventsSection from './components/EventsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <HeroSection />
      <BookingJourney />
      <Gallery />
      <EventsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;