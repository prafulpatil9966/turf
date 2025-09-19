import React from 'react';
import { Camera } from 'lucide-react';

const Gallery: React.FC = () => {
  const galleryImages = [
    'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/2834914/pexels-photo-2834914.jpeg?auto=compress&cs=tinysrgb&w=800'
  ];

  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-green-600 text-sm uppercase tracking-wide font-semibold mb-4">OUR FACILITIES</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Premium Turf Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Explore our world-class football facilities designed for champions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg">
              <img
                src={image}
                alt={`Turf facility ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center text-white">
                    <Camera className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">Premium Facility {index + 1}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium">
            View All Photos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;