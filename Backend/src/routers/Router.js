import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import path from 'path';
//import multer from 'multer';
import Experience from "../models/interactiveExperience.js";
import Image from '../models/imageUpload.js'
import {upload, createExperience, updateExperience, deleteExperience, getExperience, getExperienceId } from '../utils.js'

const __dirname = path.resolve();

const Router = express.Router();

Router.get('/',
expressAsyncHandler(async (req, res) => {
    res.sendFile(__dirname,'../views/index.html')
}))

//Router.post('/image', getApiImage);

//Router.get("/", getExperience);

Router.post('/',createExperience);

Router.put('/:id',updateExperience);

Router.delete('/:id', deleteExperience);

Router.get("/:id", getExperienceId);


Router.post('/upload',
upload,
 async (req, res) => {
    console.log(req.file);
  
if(req.file){
  
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