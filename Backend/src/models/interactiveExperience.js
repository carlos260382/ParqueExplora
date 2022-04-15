import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    interactiveRoom: { type: String, required: true },
    relatedImage: { type: String },

    },
  {
    timestamps: true,
  }
);
const Experience = mongoose.model('interactiveExperience', experienceSchema);

export default Experience;
