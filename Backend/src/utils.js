import axios from "axios";
import dotenv from "dotenv";
import multer from "multer";
import path from "path";
import expressAsyncHandler from "express-async-handler";
import Experience from "./models/interactiveExperience.js";
dotenv.config();

const API_KEY_IMAGE = process.env.API_KEY_IMAGE;

const __dirname = path.resolve();

const storage = multer.diskStorage({
  destination: path.join(__dirname, "src/public/uploads"),
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

export const upload = multer({
  storage,
  dest: path.join(__dirname, "src/public/uploads"),
}).single("image");



// export const saveImage = async (req, res) => {
//   upload();
//   console.log(req.file);

//   if (req.file) {
//     const createImages = await Experience.save({
//       fieldname: req.file.fieldname,
//       originalname: req.file.originalname,
//       encoding: req.file.encoding,
//       mimetype: req.file.mimetype,
//       destination: req.file.destination,
//       filename: req.file.filename,
//       path: req.file.path,
//       size: req.file.size,
//     });
//     console.log("esta es la imagen", createImages);
//     res.send({ message: "imagen Obtenida", image: createImages });
//   }

//   res.send({ message: "imagen No Obtenida" });
// };




// export const getApiImage = expressAsyncHandler(async (req, res) => {
//   const { title } = req.body;
//   console.log('este es el titulo', title)
//   const { data } = await axios.get(
//     `https://pixabay.com/api/?key=${API_KEY_IMAGE}&q=${title}&image_type=photo`
//   );
//   const images = data.hits.shift()
//   const imageUrl = images. userImageURL
  
//   if(!imageUrl){
//     res.send({ message: "Image Not Found"})
//   }else{
//     const createImage = await Experience.save({
//          relatedImage: images,
//        });
//       res.send({ message: "imagen Obtenida", images: createImage })

//   }


//   console.log ('esta es la imagen', imageUrl)
//   // ;
// });


export const createExperience = expressAsyncHandler(async (req, res) => {
  console.log("esta es la info del body", req.body);
  const { title, description, interactiveRoom } = req.body;
  try {
    const { data } = await axios.get(
      `https://pixabay.com/api/?key=${API_KEY_IMAGE}&q=${title}&image_type=photo`
    );
    const images = data.hits.shift()
    const imageUrl = images.userImageURL
  

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
  //getApiImage(req, res)

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