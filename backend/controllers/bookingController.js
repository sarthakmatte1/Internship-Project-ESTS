import Booking from '../models/Booking.js';

export const createBooking = async (req, res) => {
  const booking = new Booking({ user: req.user.id, event: req.body.event });
  await booking.save();
  res.status(201).json(booking);
};

export const getUserBookings = async (req, res) => {
  const bookings = await Booking.find({ user: req.user.id }).populate('event');
  res.json(bookings);
};

export const getAllBookings = async (req, res) => {
  const bookings = await Booking.find().populate('event user');
  res.json(bookings);
};