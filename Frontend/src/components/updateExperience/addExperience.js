/* eslint-disable jsx-a11y/alt-text */
import React, {useState} from 'react';
import Axios from 'axios';
import LoadingBox from '../LoadingBox.js';
import MessageBox from '../MessageBox.js';
import styles from '../../style/addExperience.module.css'


export default function AddExperience (){
    const [input, setInput] = useState({ 
		title: "",
        description:"",
        interactiveRoom: "",
	  });
	
    const [image, setImage] = useState('');

    const [loadingUpload, setLoadingUpload] = useState(false);
    const [errorUpload, setErrorUpload] = useState('');

	 
	  const handleChange = (evento) => {
      evento.persist();
		  setInput((input) => ({
			...input,
			 [evento.target.name]: evento.target.value
		   }));
		 };

         const handleSubmit = async () => {
            console.log('este es el input enviado', input)
             await Axios.post("http://localhost:5000/", input, {
               headers: {
                 "Access-Control-Allow-Origin": "*",
                 "Content-Type": "application/json",
               },
               body: JSON.stringify(input),
             });
             window.location.replace("");
           };

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


return (
  <div className={styles.container}>
    <h1>Registra Nuevas Experiencias</h1>

    <form className={styles.form}>
      <label name="title">Titulo</label>
      <input
        type="text"
        name="title"
        required
        value={input.name}
        onChange={handleChange}
      />

      <label name="description">Descripción</label>
      <input type="text" name="description" required onChange={handleChange} />

      <label name="interactiveRoom">Salón Interactivo</label>
      <input
        type="text"
        name="interactiveRoom"
        required
        onChange={handleChange}
      />
    </form>
    <button className={styles.btn} onClick={handleSubmit}>
      Agregar
    </button>

    <div className={styles.uploadFile}>
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
            <img src= {image}/> 
          
        );
</div>

  </div>
);
};