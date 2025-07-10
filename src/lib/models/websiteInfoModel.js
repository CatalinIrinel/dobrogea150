import mongoose from 'mongoose';

const websiteInfoSchema = new mongoose.Schema(
  {
    navbar: {
      logo: { type: String, required: true },
      navMenu: [
        {
          text: { type: String, required: true },
          link: { type: String },
        },
      ],
    },
    aboutPage: {
      titlu: { type: String, required: true },
      imagini: [],
      texte: [],
    },
    categoriiObiective: [
      {
        text: { type: String },
        icon: { type: String },
        slug: { type: String },
        colSpan: { type: Number },
        bgImage: { type: String },
      },
    ],
    contact: {
      adresa: { type: String },
      email: { type: String },
      telefon: { type: String },
      titlu: { type: String },
      titluFormular: { type: String },
    },
  },
  { timestamps: true, collection: 'websiteInfos' }
);

export const websiteInfo =
  mongoose.models.websiteInfos ||
  mongoose.model('websiteInfos', websiteInfoSchema);
