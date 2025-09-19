import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold text-green-400 mb-4 md:mb-0">TurfMaster</div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 TurfMaster. All rights reserved. Premium football facilities for champions.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;