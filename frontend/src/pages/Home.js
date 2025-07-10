import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../api';

const Home = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await API.get('/events');
        setEvents(res.data);
      } catch (err) {
        console.error('Failed to fetch events:', err.response?.data || err.message);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Navigation Bar */}
<nav className="bg-gray-900 px-6 py-4 shadow-lg">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
    <div className="flex items-center space-x-2 mb-4 md:mb-0">
      <i className="fas fa-ticket-alt text-blue-400 text-2xl"></i>
      <h1 className="text-2xl font-bold text-white">Event<span className="text-blue-400">Pro</span></h1>
    </div>
    
    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
      <Link to="/" className="text-gray-300 hover:text-white font-medium transition-colors duration-200 flex items-center">
        <i className="fas fa-home mr-2"></i> Home
      </Link>
      <Link to="/dashboard" className="text-gray-300 hover:text-white font-medium transition-colors duration-200 flex items-center">
        <i className="fas fa-chart-line mr-2"></i> Dashboard
      </Link>
      <Link to="/events" className="text-gray-300 hover:text-white font-medium transition-colors duration-200 flex items-center">
        <i className="fas fa-calendar-alt mr-2"></i> Events
      </Link>
      <Link to="/register" className="text-gray-300 hover:text-white font-medium transition-colors duration-200 flex items-center">
        <i className="fas fa-user-plus mr-2"></i> Register
      </Link>
      <Link to="/login" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors duration-200 flex items-center">
        <i className="fas fa-sign-in-alt mr-2"></i> Login
      </Link>
    </div>
  </div>
</nav>

      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-12 text-center text-white shadow-md">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Welcome to EventPro</h1>
          <p className="text-lg opacity-90 mb-6">Your premier destination for discovering and securing tickets to extraordinary events</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-blue-700 px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center">
              <i className="fas fa-search mr-2"></i> Explore Events
            </button>
            <button className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-md font-medium hover:bg-white hover:text-blue-700 transition-colors duration-200 flex items-center">
              <i className="fas fa-plus-circle mr-2"></i> Create Event
            </button>
          </div>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="relative max-w-7xl mx-auto px-4 py-12">
        <div className="rounded-xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Concert crowd with lights"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 text-white">
            <h2 className="text-3xl font-bold mb-2">Upcoming Mega Concert</h2>
            <p className="text-lg mb-4">Experience the music event of the year</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors duration-200 flex items-center">
              <i className="fas fa-ticket-alt mr-2"></i> Get Tickets Now
            </button>
          </div>
        </div>
      </div>

      {/* Events Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            <i className="fas fa-star text-yellow-500 mr-3"></i>
            Featured Events
          </h2>
          <Link to="/events" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
            View All <i className="fas fa-arrow-right ml-2"></i>
          </Link>
        </div>

        {events.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <i className="fas fa-calendar-times text-5xl text-gray-400 mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No events available</h3>
            <p className="text-gray-500">Check back later for upcoming events</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map(event => (
              <div key={event._id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <img 
                    src={event.image || "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4"} 
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                    ${event.price || 'Free'}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                      <i className="fas fa-users mr-1"></i> {event.capacity || '100'} spots
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
                  
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <i className="far fa-clock mr-2"></i>
                    <span>{new Date(event.date).toLocaleString()}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-500 text-sm mb-6">
                    <i className="fas fa-map-marker-alt mr-2"></i>
                    <span>{event.location}</span>
                  </div>
                  
                  <button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
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

      {/* Stats Section */}
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose EventPro?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-bolt text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Instant Booking</h3>
              <p className="text-gray-300">Secure your tickets in just a few clicks</p>
            </div>
            <div className="p-6">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-shield-alt text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Secure Payments</h3>
              <p className="text-gray-300">Your transactions are always protected</p>
            </div>
            <div className="p-6">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-headset text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-gray-300">We're always here to help you</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <i className="fas fa-ticket-alt text-blue-400 text-2xl"></i>
                <h3 className="text-xl font-bold">Event<span className="text-blue-400">Pro</span></h3>
              </div>
              <p className="text-gray-400">Your premier ticket management solution for all types of events.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors duration-200">Home</Link></li>
                <li><Link to="/events" className="text-gray-400 hover:text-white transition-colors duration-200">Events</Link></li>
                <li><Link to="/dashboard" className="text-gray-400 hover:text-white transition-colors duration-200">Dashboard</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-200">About Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors duration-200">FAQ</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">Contact Us</Link></li>
                <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <i className="fab fa-facebook-f text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <i className="fab fa-linkedin-in text-xl"></i>
                </a>
              </div>
              <p className="text-gray-400">Subscribe to our newsletter</p>
              <div className="mt-2 flex">
                <input type="email" placeholder="Your email" className="px-3 py-2 bg-gray-700 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} EventPro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;