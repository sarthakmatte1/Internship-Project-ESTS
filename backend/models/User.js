// models/User.js
import { mongoose } from '../db.js';

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  isAdmin: { type: Boolean, default: false },
});

export default mongoose.model('User', userSchema);