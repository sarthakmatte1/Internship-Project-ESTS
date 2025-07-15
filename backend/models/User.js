// models/User.js
import mongoose from 'mongoose'; // ✅ correct


const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  isAdmin: { type: Boolean, default: false },
});

export default mongoose.model('User', userSchema);