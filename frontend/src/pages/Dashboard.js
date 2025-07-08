import React, { useEffect, useState } from 'react';
import API from '../api';

const Dashboard = () => {
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
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Available Events</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {events.length === 0 ? (
          <p>No events available.</p>
        ) : (
          events.map(event => (
            <div key={event._id} className="border rounded-md p-4 shadow-sm">
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p className="text-gray-600">{event.description}</p>
              <p className="text-sm text-gray-500 mt-1">📅 {new Date(event.date).toLocaleString()}</p>
              <p className="text-sm text-gray-500">📍 {event.location}</p>
              <button
                className="mt-2 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
                onClick={async () => {
                  try {
                    await API.post('/bookings', { event: event._id });
                    alert('Booking confirmed!');
                  } catch (err) {
                    alert(err.response?.data?.message || 'Booking failed');
                  }
                }}
              >
                Book Ticket
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;
