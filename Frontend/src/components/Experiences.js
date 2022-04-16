/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import styles from "../style/Experience.module.css";
import Axios from 'axios';
import LoadingBox from '../components/LoadingBox.js';
import MessageBox from '../components/MessageBox.js';


export default function Experience (){
const [experience, setExperience] = useState();

const [image, setImage] = useState('');
// const [file, setFile] = useState();
const [loadingUpload, setLoadingUpload] = useState(false);
const [errorUpload, setErrorUpload] = useState('');

useEffect(() => {
  getExperiences()
  }, []);

const getExperiences = async  () => {
    try {
      const  { data }   = await Axios.get(
        'http://localhost:5000/'
      );
        setExperience(data)
    } catch (error) {
     console.log('este es el error get', error);
    }
  };
  
  console.log('esta son las experiencias', experience)

  // const uploadFileHandler = (e) => {
  //   setFile(e);
  // };

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('image', file);
    setLoadingUpload(true);
    try {
      const { data } = await Axios.post('http://localhost:5000/upload', bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setImage(data);
      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };




  // const InsertFile = async ()=>{
  //  const bodyFormData = new FormData();
  //  bodyFormData.append('image', file);
  //  try {
  //     const { data } = await Axios.post('http://localhost:5000/upload', bodyFormData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //         //"Access-Control-Allow-Origin": "*",
  //       },
  //     });
  //     console.log(data)
  //   } catch (error) {
  //     console.log ('error upload', error)
  //   }}
console.log('imagen subida', image)
return (
  <div>
    <div className={styles.container}>

    
    {experience? experience.map((c) => {
            return (
              <div key={c._id}>
                  
                    <h1>{ c.title}</h1><br/>
                    <label>{c.description}</label><br/>
                    <h3>{c.interactiveRoom}</h3><br/>
                    { <img src={c.relatedImage} /> }<br/>
                                 
              </div>
            );
          }):''}
    </div>
    <div>
          <>
            <div>
              <label htmlFor="image">Imagen</label>
              <input
                id="image"
                type="text"
                placeholder="Enter image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="imageFile">Archivo de Imagen</label>
              <input
                type="file"
                id="imageFile"
                label="Choose Image"
                onChange={uploadFileHandler}
              ></input>
              {loadingUpload && <LoadingBox></LoadingBox>}
              {errorUpload && (
                <MessageBox variant="danger">{errorUpload}</MessageBox>
              )}
            </div>
            
            <div>
              <label></label>
              <button className="primary" type="submit">
              Actualizar
              </button>
            </div>
            <img src= {image}/> 
          </>
        )}
        
</div>









    {/* <div>
    <label htmlFor="imageFile">Archivo de Imagen</label>
              <input
                type="file"
                name='files'
                onChange={(e)=> uploadFileHandler (e.target.files)}
               />
              <br/>
        <button onClick={InsertFile}>Guardar imagen en BD</button>
    </div> */}


  </div>
)
};