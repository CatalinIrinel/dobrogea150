import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    dateStart: { type: String },
    dateEnd: { type: String },
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    link: { type: String, required: true },
    image: { type: String, required: true },
    galleryImages:[],
    state:{type:String},
    slug:{type:String, required:true,}
  },
  {
    timestamps: true,
  }
);

// Prevent model overwrite issues in dev
export const Project =
  mongoose.models.Proiecte || mongoose.model('Proiecte', projectSchema);
