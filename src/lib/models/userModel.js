import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    nume: { type: String, required: true },
    prenume: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    nume: { type: Boolean, default: false, required: true },
  },
  {
    timestamps: true,
  }
);

export const User =
  mongoose.models.Utilizatori || mongoose.model('Utilizatori', userSchema);
