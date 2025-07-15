import React, { useEffect, useState } from 'react';
import API from '../api';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [events, setEvents] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [stats, setStats] = useState({
    totalEvents: 0,
    upcomingEvents: 0,
    pastBookings: 0
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [eventsRes, bookingsRes] = await Promise.all([
          API.get('/events'),
          API.get('/bookings/my-bookings')
        ]);
        
        setEvents(eventsRes.data);
        setBookings(bookingsRes.data);
        
        // Calculate stats
        const now = new Date();
        setStats({
          totalEvents: eventsRes.data.length,
          upcomingEvents: eventsRes.data.filter(e => new Date(e.date) > now).length,
          pastBookings: bookingsRes.data.filter(b => new Date(b.event.date) < now).length
        });
      } catch (err) {
        console.error('Failed to fetch data:', err.response?.data || err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">My Dashboard</h1>
            <p className="text-gray-600">Welcome back! Here's what's happening.</p>
          </div>
          <Link 
            to="/events" 
            className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center"
          >
            <i className="fas fa-calendar-plus mr-2"></i> Browse All Events
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Events</p>
                <h3 className="text-2xl font-bold text-gray-800 mt-1">{stats.totalEvents}</h3>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <i className="fas fa-calendar-alt text-blue-600 text-xl"></i>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">Upcoming Events</p>
                <h3 className="text-2xl font-bold text-gray-800 mt-1">{stats.upcomingEvents}</h3>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <i className="fas fa-clock text-green-600 text-xl"></i>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">Past Bookings</p>
                <h3 className="text-2xl font-bold text-gray-800 mt-1">{stats.pastBookings}</h3>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <i className="fas fa-ticket-alt text-purple-600 text-xl"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Events Section */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="border-b border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-800 flex items-center">
              <i className="fas fa-calendar-day text-blue-500 mr-3"></i>
              Available Events
            </h2>
          </div>
          <div className="p-6">
            {events.length === 0 ? (
              <div className="text-center py-8">
                <i className="fas fa-calendar-times text-4xl text-gray-300 mb-4"></i>
                <h3 className="text-lg font-medium text-gray-600">No events available</h3>
                <p className="text-gray-500 mt-2">Check back later for upcoming events</p>
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {events.map(event => (
                  <div key={event._id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="h-40 bg-gray-200 overflow-hidden">
                      <img 
                        src={event.image || "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4"} 
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
                      <p className="text-gray-600 text-sm mt-1 line-clamp-2">{event.description}</p>
                      <div className="mt-3 text-sm text-gray-500">
                        <div className="flex items-center mb-1">
                          <i className="far fa-clock mr-2"></i>
                          {new Date(event.date).toLocaleString()}
                        </div>
                        <div className="flex items-center">
                          <i className="fas fa-map-marker-alt mr-2"></i>
                          {event.location}
                        </div>
                      </div>
                      <button
                        className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
                        onClick={async () => {
                          try {
                            await API.post('/bookings', { event: event._id });
                            alert('Booking confirmed!');
                          } catch (err) {
                            alert(err.response?.data?.message || 'Booking failed');
                          }
                        }}
                      >
                        <i className="fas fa-ticket-alt mr-2"></i> Book Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* My Bookings Section */}
        {bookings.length > 0 && (
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="border-b border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-800 flex items-center">
                <i className="fas fa-ticket-alt text-green-500 mr-3"></i>
                My Bookings
              </h2>
            </div>
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {bookings.map(booking => (
                      <tr key={booking._id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{booking.event.title}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">
                            {new Date(booking.event.date).toLocaleDateString()}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            new Date(booking.event.date) > new Date() 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {new Date(booking.event.date) > new Date() ? 'Upcoming' : 'Completed'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <button 
                            className="text-blue-600 hover:text-blue-900 mr-4"
                            onClick={() => alert('View details')}
                          >
                            <i className="fas fa-eye mr-1"></i> View
                          </button>
                          <button 
                            className="text-red-600 hover:text-red-900"
                            onClick={async () => {
                              if (window.confirm('Cancel this booking?')) {
                                try {
                                  await API.delete(`/bookings/${booking._id}`);
                                  setBookings(bookings.filter(b => b._id !== booking._id));
                                } catch (err) {
                                  alert(err.response?.data?.message || 'Cancellation failed');
                                }
                              }
                            }}
                          >
                            <i className="fas fa-trash-alt mr-1"></i> Cancel
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;