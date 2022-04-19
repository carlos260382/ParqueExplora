import express from 'express';
import path from 'path';
import Image from '../models/imageUpload.js'
import {upload, createExperience, updateExperience, deleteExperience, getExperience, getExperienceId, createForm } from '../utils.js'

const __dirname = path.resolve();

const Router = express.Router();

Router.get('/upload',         //ruta para cargar imagenes
(async (req, res) => {
    res.sendFile(__dirname,'../views/index.html')
}))

Router.get("/", getExperience);

Router.post('/',createExperience);

Router.put('/:id',updateExperience);

Router.delete('/:id', deleteExperience);

Router.get("/:id", getExperienceId);

Router.post("/form",createForm)

Router.post('/upload',
upload,
 async (req, res) => {
    console.log('lo q llega del body', req.file);
  
if(req.file){
  console.log('archivo q llega', req.file)
  const image = new Image({

      fieldname: req.file.fieldname,
      originalname: req.file.originalname,
      encoding: req.file.encoding,
      mimetype: req.file.mimetype,
      destination: req.file.destination,
      filename: req.file.filename,
      path: req.file.path,
      size: req.file.size
      })
      console.log('esta es la imagen', image)
      const createdImage = await image.save();
      
      res.send({ message: 'imagen Obtenida', image:createdImage  })
  }
   
  res.send({ message: 'imagen No Obtenida'})
  
})



export default Router