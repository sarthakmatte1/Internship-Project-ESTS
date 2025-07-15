import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import API from '../api';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await API.get('/events');
        setEvents(res.data);
      } catch (err) {
        console.error('Failed to fetch events:', err.response?.data || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const bookTicket = async (eventId) => {
    try {
      await API.post('/bookings', { event: eventId });
      alert('Ticket booked successfully!');
    } catch (err) {
      alert(err.response?.data?.message || 'Booking failed');
    }
  };

  const handleCreateEventClick = () => {
    navigate('/createevent');
  };

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const now = new Date();
    const eventDate = new Date(event.date);
    
    if (filter === 'upcoming') return matchesSearch && eventDate > now;
    if (filter === 'past') return matchesSearch && eventDate <= now;
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">All Events</h1>
            <p className="text-gray-600 mt-2">Discover and book tickets for upcoming experiences</p>
          </div>
          <button
            onClick={handleCreateEventClick}
            className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center"
          >
            <i className="fas fa-plus-circle mr-2"></i> Create Event
          </button>
        </div>

        {/* Rest of your Events component remains the same */}
        {/* Filters and Search */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                Search Events
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-search text-gray-400"></i>
                </div>
                <input
                  type="text"
                  id="search"
                  placeholder="Search by title or description..."
                  className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label htmlFor="filter" className="block text-sm font-medium text-gray-700 mb-1">
                Filter Events
              </label>
              <select
                id="filter"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="all">All Events</option>
                <option value="upcoming">Upcoming Events</option>
                <option value="past">Past Events</option>
              </select>
            </div>
          </div>
        </div>

        {/* Events List */}
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : filteredEvents.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <i className="fas fa-calendar-times text-5xl text-gray-400 mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              {searchQuery ? 'No matching events found' : 'No events available'}
            </h3>
            <p className="text-gray-500">
              {searchQuery ? 'Try a different search term' : 'Check back later for upcoming events'}
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.map(event => {
              const eventDate = new Date(event.date);
              const now = new Date();
              const isPastEvent = eventDate <= now;
              
              return (
                <div key={event._id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48">
                    <img
                      src={event.image || "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4"}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    {isPastEvent && (
                      <div className="absolute top-4 right-4 bg-gray-600 text-white text-xs font-bold px-2 py-1 rounded">
                        PAST EVENT
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                      <h2 className="text-xl font-bold text-white">{event.title}</h2>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4 line-clamp-3">{event.description}</p>
                    
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <i className="far fa-clock mr-2"></i>
                      <span>{eventDate.toLocaleString()}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-500 text-sm mb-4">
                      <i className="fas fa-map-marker-alt mr-2"></i>
                      <span>{event.location}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-gray-800">
                        ${event.price || 'Free'}
                      </span>
                      <button
                        onClick={() => bookTicket(event._id)}
                        disabled={isPastEvent}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center ${
                          isPastEvent
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-blue-600 hover:bg-blue-700 text-white'
                        }`}
                      >
                        <i className="fas fa-ticket-alt mr-2"></i>
                        {isPastEvent ? 'Event Ended' : 'Book Now'}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;