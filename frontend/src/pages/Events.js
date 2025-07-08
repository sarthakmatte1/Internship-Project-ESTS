import React, { useEffect, useState } from 'react';
import API from '../api';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    API.get('/events').then(res => setEvents(res.data));
  }, []);

  const bookTicket = async (eventId) => {
    try {
      await API.post('/bookings', { event: eventId });
      alert('Ticket booked!');
    } catch (err) {
      alert('Booking failed');
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Available Events</h1>
      <ul className="space-y-4">
        {events.map(e => (
          <li key={e._id} className="p-4 border">
            <h2 className="text-lg font-semibold">{e.title}</h2>
            <p>{e.description}</p>
            <p><strong>Date:</strong> {new Date(e.date).toLocaleDateString()}</p>
            <p><strong>Location:</strong> {e.location}</p>
            <button className="mt-2 bg-blue-500 text-white p-2" onClick={() => bookTicket(e._id)}>Book Ticket</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Events;
