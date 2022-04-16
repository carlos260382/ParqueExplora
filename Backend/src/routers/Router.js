import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import path from 'path';
import multer from 'multer';
import Experience from "../models/interactiveExperience.js";
//import Image from '../models/imageUpload.js'
import {createExperience, updateExperience, deleteExperience, getExperience, getExperienceId, createForm } from '../utils.js'

const __dirname = path.resolve();

const Router = express.Router();

// Router.get('/',
// expressAsyncHandler(async (req, res) => {
//     res.sendFile(__dirname,'../views/index.html')
// }))

Router.get("/", getExperience);

Router.post('/',createExperience);

Router.put('/:id',updateExperience);

Router.delete('/:id', deleteExperience);

Router.get("/:id", getExperienceId);

Router.post("/form",createForm)


const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "src/public/uploads");
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}.jpg`);
  },
});

const upload = multer({ storage });

Router.post('/upload', upload.single('image'), (req, res) => {
  res.send(`/${req.file.path}`);
  //console.log(req.file.path)
});



// Router.post('/upload',
// upload,
//  async (req, res) => {
//     console.log(req.file);
  
// if(req.file){
  
//   const image = new Image({

//       fieldname: req.file.fieldname,
//       originalname: req.file.originalname,
//       encoding: req.file.encoding,
//       mimetype: req.file.mimetype,
//       destination: req.file.destination,
//       filename: req.file.filename,
//       path: req.file.path,
//       size: req.file.size
//       })
//       console.log('esta es la imagen', image)
//       const createdImage = await image.save();
      
//       res.send({ message: 'imagen Obtenida', image:createdImage  })
//   }
   
//   res.send({ message: 'imagen No Obtenida'})
  
// })



export default Router