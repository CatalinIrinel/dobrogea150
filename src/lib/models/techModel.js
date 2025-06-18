import mongoose from 'mongoose';

const techSchema = new mongoose.Schema(
  {
    tech: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const Tech =
  mongoose.models.Tehnologii || mongoose.model('Tehnologii', techSchema);
