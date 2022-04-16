import axios from "axios";
import dotenv from "dotenv";
//import multer from "multer";
import path from "path";
import expressAsyncHandler from "express-async-handler";
import Experience from "./models/interactiveExperience.js";
import Form from "./models/form.js";
import nodemailer from "nodemailer";
dotenv.config();

const API_KEY_IMAGE = process.env.API_KEY_IMAGE;

const __dirname = path.resolve();

// const storage = multer.diskStorage({
//   destination: path.join(__dirname, "src/public/uploads"),
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });

// export const upload = multer({
//   storage,
//   dest: path.join(__dirname, "src/public/uploads"),
// }).single("image");

export const createExperience = expressAsyncHandler(async (req, res) => {
  console.log("esta es la info del body", req.body);
  const { title, description, interactiveRoom } = req.body;
  try {
    const { data } = await axios.get(
      `https://pixabay.com/api/?key=${API_KEY_IMAGE}&q=${title}&image_type=photo`
    );
    const images = data.hits.shift()
    const imageUrl = images.userImageURL
    console.log ('esta es imagen' ,imageUrl)
  

    const experience = new Experience({
      title: title,
      description: description,
      interactiveRoom: interactiveRoom,
      relatedImage:imageUrl
    });
    const createdExperience = await experience.save();

    res.send({ message: "Experiencia creada", experience: createdExperience });
  } catch (error) {
    res.status(500).send({ message: error.message });
    console.log("este es el error", error);
  }
  

});

export const getExperience = expressAsyncHandler(async (req, res) => {
  try {
    let experiences = await Experience.find();
    res.json(experiences);
  } catch (error) {
    res.status(404).send({ message: 'Experience Not Found' });
  }
})


export const updateExperience = expressAsyncHandler(async (req, res) => {
  const id = req.params.id;
  const experience = await Experience.findById(id);
  if (experience) {
    experience.title = req.body.title;
    experience.description = req.body.description;
    experience.interactiveRoom = req.body.interactiveRoom;
    experience.relatedImage = req.body.relatedImage;
    
    const updatedExperience = await experience.save();
    res.send({ message: 'Experience Updated', experience: updatedExperience });
  } else {
    res.status(404).send({ message: 'Experience Not Found' });
  }
})

export const deleteExperience = expressAsyncHandler(async (req, res) => {
  const experience = await Experience.findById(req.params.id);
  if (experience) {
    const deleteExperience = await experience.remove();
    res.send({ message: 'Experience Deleted', experience: deleteExperience });
  } else {
    res.status(404).send({ message: 'Experience Not Found' });
  }
})

export const getExperienceId = expressAsyncHandler(async (req, res) => {
  const experience = await Experience.findById(req.params.id);
  if (experience) {
    res.send(experience);
  } else {
    res.status(404).send({ message: "experience Not Found" });
  }
})

export const createForm = async (req, res) => {
  console.log("este es e bodyform", req.body);
try {
          const form = new Form({
          name: req.body.name,
          cedula: req.body.cedula,
          movil: req.body.movil,
          email: req.body.email,
          institution: req.body.institution,
          select: req.body.select,
        });
        const createdForm = await form.save();
        res.send({ message: "form created successfully", form: createdForm });
        const transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
              user: 'ep3977752@gmail.com',
              pass: process.env.KEY_NODEMAILER,
          },
      });
console.log('este es el formulario', form )
      const mailOptions = {
          from: 'Remitente',
          to: form.email,
          subject: 'Felicitaciones te has registrado con exito',
          text: `¡Gracias ${form.name} por registrarte en nustra web!, seguiremos enviando mas información`,
      };

      await transporter.sendMail(mailOptions, (err, info) => {
          if (err) {
              console.log(err);
          } else {
              console.log('Email enviado');
          }
      });

} catch (error) {
    console.log('error post form', error)
}
}