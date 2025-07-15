import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CreateEvent.css';

const CreateEvent = () => {
  const navigate = useNavigate();
  const [eventData, setEventData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    category: '',
    image: null,
    capacity: '',
    price: '',
    isOnline: false,
    onlineLink: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setEventData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      if (!eventData.title || !eventData.date || !eventData.time) {
        throw new Error('Title, date, and time are required');
      }

      const formData = new FormData();
      for (const key in eventData) {
        if (eventData[key] !== null && eventData[key] !== '') {
          formData.append(key, eventData[key]);
        }
      }

      const response = await axios.post('/api/events', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      // Navigate to the newly created event or back to events list
      navigate(`/events/${response.data.id}`);
      // Alternatively, to go back to events list:
      // navigate('/events');
    } catch (err) {
      setError(err.message || 'Failed to create event');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    navigate('/events');
  };

  return (
    <div className="create-event-container">
      <h1>Create New Event</h1>
      {error && <div className="error-message">{error}</div>}
      
      <form onSubmit={handleSubmit} className="event-form">
        <div className="form-group">
          <label htmlFor="title">Event Title*</label>
          <input
            type="text"
            id="title"
            name="title"
            value={eventData.title}
            onChange={handleChange}
            required
            placeholder="Enter event title"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={eventData.description}
            onChange={handleChange}
            placeholder="Describe your event"
            rows="4"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="date">Date*</label>
            <input
              type="date"
              id="date"
              name="date"
              value={eventData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="time">Time*</label>
            <input
              type="time"
              id="time"
              name="time"
              value={eventData.time}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={eventData.location}
            onChange={handleChange}
            placeholder="Venue or address"
          />
        </div>

        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="isOnline"
              checked={eventData.isOnline}
              onChange={handleChange}
            />
            Online Event
          </label>
        </div>

        {eventData.isOnline && (
          <div className="form-group">
            <label htmlFor="onlineLink">Online Meeting Link</label>
            <input
              type="url"
              id="onlineLink"
              name="onlineLink"
              value={eventData.onlineLink}
              onChange={handleChange}
              placeholder="https://meet.example.com/your-event"
            />
          </div>
        )}

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              value={eventData.category}
              onChange={handleChange}
            >
              <option value="">Select a category</option>
              <option value="business">Business</option>
              <option value="technology">Technology</option>
              <option value="art">Art & Culture</option>
              <option value="sports">Sports</option>
              <option value="education">Education</option>
              <option value="social">Social</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="capacity">Capacity</label>
            <input
              type="number"
              id="capacity"
              name="capacity"
              value={eventData.capacity}
              onChange={handleChange}
              placeholder="Max attendees"
              min="1"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="price">Price ($)</label>
            <input
              type="number"
              id="price"
              name="price"
              value={eventData.price}
              onChange={handleChange}
              placeholder="0 for free"
              min="0"
              step="0.01"
            />
          </div>

          <div className="form-group">
            <label htmlFor="image">Event Image</label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleChange}
              accept="image/*"
            />
          </div>
        </div>

        <div className="form-actions">
          <button
            type="submit"
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Creating...' : 'Create Event'}
          </button>
          <button
            type="button"
            className="cancel-button"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEvent;