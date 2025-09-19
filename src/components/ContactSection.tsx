import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div>
            <p className="text-green-400 text-sm uppercase tracking-wide font-semibold mb-4">GET IN TOUCH</p>
            <h2 className="text-4xl font-bold mb-6">Contact TurfMaster</h2>
            <p className="text-gray-300 mb-8">
              Ready to book your perfect pitch? Get in touch with us for bookings, 
              inquiries, or to learn more about our premium facilities.
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-gray-300">123 Sports Complex, Green Valley, NY 10001</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-300">info@turfmaster.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mr-4">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Operating Hours</h3>
                  <p className="text-gray-300">24/7 - Open All Days</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-400"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-400"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-400"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;