import http from 'http';
import morgan from "morgan";
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import router from './routers/Router.js';
import cors from 'cors'
import engine from 'consolidate';

dotenv.config();
const __dirname = path.resolve();

const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/parqueExplora', {
  useNewUrlParser: true,
  useUnifiedTopology: false,
 
}).then(()=>{
console.log('esta conectado base datos')
}).catch((error)=>{
console.log('este es el error',error)
})

app.use('/', router);
app.use('/upload', router);

app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
app.use(express.static(path.join(__dirname, "/src/views")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/frontend/build/index.html"))
);

app.set('views', __dirname + '/views');
app.engine('html', engine.mustache);
app.set('view engine', 'html');

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});


const port = process.env.PORT || 5000;

const httpServer = http.Server(app);

httpServer.listen(port, () => {
   console.log(`Serve at http://localhost:${port}`);
});



