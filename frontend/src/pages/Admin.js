import React, { useEffect, useState } from 'react';
import API from '../api';

const Admin = () => {
  const [events, setEvents] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [form, setForm] = useState({ title: '', description: '', date: '', location: '', capacity: 0 });

  const fetchEvents = () => {
    API.get('/events').then(res => setEvents(res.data));
  };

  const fetchBookings = () => {
    API.get('/bookings/all').then(res => setBookings(res.data));
  };

  useEffect(() => {
    fetchEvents();
    fetchBookings();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post('/events', form);
    setForm({ title: '', description: '', date: '', location: '', capacity: 0 });
    fetchEvents();
  };

  const handleDelete = async (id) => {
    await API.delete(`/events/${id}`);
    fetchEvents();
  };

  const handleUpdate = async (id) => {
    const updatedTitle = prompt('Enter new title:');
    if (updatedTitle) {
      await API.put(`/events/${id}`, { ...form, title: updatedTitle });
      fetchEvents();
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>

      {/* Create Event Form */}
      <form onSubmit={handleSubmit} className="grid gap-4 max-w-xl">
        <input type="text" placeholder="Title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} className="p-2 border" required />
        <textarea placeholder="Description" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} className="p-2 border" required />
        <input type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} className="p-2 border" required />
        <input type="text" placeholder="Location" value={form.location} onChange={e => setForm({ ...form, location: e.target.value })} className="p-2 border" required />
        <input type="number" placeholder="Capacity" value={form.capacity} onChange={e => setForm({ ...form, capacity: e.target.value })} className="p-2 border" required />
        <button type="submit" className="bg-green-500 text-white p-2 rounded">Create Event</button>
      </form>

      {/* Event List */}
      <div>
        <h2 className="text-xl font-semibold mb-2">All Events</h2>
        {events.map(ev => (
          <div key={ev._id} className="border p-4 mb-3 rounded">
            <h3 className="font-bold">{ev.title}</h3>
            <p>{ev.description}</p>
            <p>Date: {new Date(ev.date).toLocaleDateString()}</p>
            <p>Location: {ev.location}</p>
            <p>Capacity: {ev.capacity}</p>
            <button className="bg-yellow-500 text-white px-3 py-1 mr-2" onClick={() => handleUpdate(ev._id)}>Edit</button>
            <button className="bg-red-600 text-white px-3 py-1" onClick={() => handleDelete(ev._id)}>Delete</button>
          </div>
        ))}
      </div>

      {/* Bookings List */}
      <div>
        <h2 className="text-xl font-semibold mb-2">All Bookings</h2>
        {bookings.map(book => (
          <div key={book._id} className="border p-3 mb-2 rounded">
            <p><strong>User:</strong> {book.user?.email}</p>
            <p><strong>Event:</strong> {book.event?.title}</p>
            <p><strong>Status:</strong> {book.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
