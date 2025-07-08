import Event from '../models/Event.js';

export const getAllEvents = async (req, res) => {
  const events = await Event.find();
  res.json(events);
};

export const createEvent = async (req, res) => {
  const event = new Event(req.body);
  await event.save();
  res.status(201).json(event);
};

export const updateEvent = async (req, res) => {
  const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(event);
};

export const deleteEvent = async (req, res) => {
  await Event.findByIdAndDelete(req.params.id);
  res.json({ message: 'Event deleted' });
};