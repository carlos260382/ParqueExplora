import mongoose from 'mongoose';

const formSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    cedula: { type: String, required: true, unique:true },
    movil: { type: String, required: true },
    email: { type: String, required: true, unique:true },
    institution: { type: String, required: true },
    select: { type: String },
    
  },
  {
    timestamps: true,
  }
  );

const Form = mongoose.model('form', formSchema);

export default Form;