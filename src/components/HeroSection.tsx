import React from 'react';
import { MapPin, Calendar, Play } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative bg-gradient-to-r from-green-500 via-green-600 to-emerald-500 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-600/90 to-emerald-600/90"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-green-100 uppercase tracking-wider text-sm font-semibold">PREMIUM FOOTBALL TURF</p>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Book Your<br />
              <span className="text-orange-300">Perfect Pitch</span>
            </h1>
            <p className="text-green-100 text-lg flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-orange-300" />
              State-of-the-art facilities for champions
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                Book Now
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-green-600 transition-colors font-medium flex items-center">
                <Play className="w-5 h-5 mr-2" />
                Virtual Tour
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="w-80 h-80 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl opacity-20 blur-xl"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Football Turf" 
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                    <p className="text-white font-semibold text-sm">Premium FIFA Standard Turf</p>
                    <p className="text-green-100 text-xs">Available 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;