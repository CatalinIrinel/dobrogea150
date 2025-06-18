import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    dataAos: { type: String },
    dataAosDelay: { type: Number },
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    link: { type: String, required: true },
    techId: [],
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// Prevent model overwrite issues in dev
export const Project =
  mongoose.models.Proiecte || mongoose.model('Proiecte', projectSchema);
