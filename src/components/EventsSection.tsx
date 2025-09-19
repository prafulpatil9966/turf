import React from 'react';
import { Calendar, Clock, Users, Trophy } from 'lucide-react';

interface Event {
  title: string;
  date: string;
  time: string;
  participants: string;
  prize: string;
  status: string;
}

const EventsSection: React.FC = () => {
  const events: Event[] = [
    {
      title: 'Weekend Football Tournament',
      date: 'Dec 15-16, 2024',
      time: '9:00 AM - 6:00 PM',
      participants: '32 Teams',
      prize: '$5,000',
      status: 'Registration Open'
    },
    {
      title: 'Youth Championship League',
      date: 'Jan 20, 2025',
      time: '10:00 AM - 4:00 PM',
      participants: '16 Teams',
      prize: '$2,500',
      status: 'Coming Soon'
    },
    {
      title: 'Corporate Football Cup',
      date: 'Feb 10, 2025',
      time: '8:00 AM - 8:00 PM',
      participants: '24 Teams',
      prize: '$3,000',
      status: 'Early Bird'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Registration Open':
        return 'bg-green-100 text-green-800';
      case 'Coming Soon':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-orange-100 text-orange-800';
    }
  };

  return (
    <section id="events" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-orange-600 text-sm uppercase tracking-wide font-semibold mb-4">UPCOMING EVENTS</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Football Tournaments & Events</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Join exciting tournaments and events at our premium facilities</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-orange-600" />
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}>
                  {event.status}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm">{event.date}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm">{event.time}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="w-4 h-4 mr-2" />
                  <span className="text-sm">{event.participants}</span>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-3 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Prize Pool</span>
                  <span className="text-lg font-bold text-green-600">{event.prize}</span>
                </div>
              </div>

              <button className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors font-medium">
                Register Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;