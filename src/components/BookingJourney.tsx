import React, { useState } from 'react';
import { Calendar, Users, CheckCircle } from 'lucide-react';

const BookingJourney: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('1');

  const timeSlots = [
    '06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM',
    '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM', '10:00 PM'
  ];

  return (
    <section id="booking" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-green-600 text-sm uppercase tracking-wide font-semibold mb-4">EASY BOOKING</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Book Your Turf in 3 Simple Steps</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Reserve your perfect pitch with our streamlined booking process</p>
        </div>

        {/* Booking Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">1. Select Date & Time</h3>
            <p className="text-gray-600">Choose your preferred date and time slot</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">2. Add Details</h3>
            <p className="text-gray-600">Specify duration and team requirements</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">3. Confirm Booking</h3>
            <p className="text-gray-600">Complete payment and receive confirmation</p>
          </div>
        </div>

        {/* Booking Form */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Book Your Slot</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Select Date</label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Select Time</label>
              <select
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Choose time slot</option>
                {timeSlots.map((time) => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Duration (Hours)</label>
              <select
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="1">1 Hour - $50</option>
                <option value="2">2 Hours - $90</option>
                <option value="3">3 Hours - $130</option>
                <option value="4">4 Hours - $160</option>
              </select>
            </div>
          </div>
          <div className="mt-6 text-center">
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium">
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingJourney;