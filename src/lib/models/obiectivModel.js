import mongoose from 'mongoose';

const obiectivSchema = new mongoose.Schema(
  {
    titlu: { type: String, required: true, unique: true },
    slug: { type: String, required: true },
    categorie: [],
    descriere: { type: String, required: true },
    lat: { type: String, required: true },
    long: { type: String, required: true },
    pozaCoperta: { type: String, required: true },
    galleryImages: [],
    autor: { type: String },
    judet: { type: String, required: true },
    localitate: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// Prevent model overwrite issues in dev
export const Obiectiv =
  mongoose.models.Obiective || mongoose.model('Obiective', obiectivSchema);
