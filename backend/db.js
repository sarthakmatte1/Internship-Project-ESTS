// backend/db.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected successfully');
    return mongoose;
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

export { mongoose };