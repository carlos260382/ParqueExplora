/* eslint-disable jsx-a11y/alt-text */
import React, {useState} from 'react';
import Axios from 'axios';
import styles from '../../style/addExperience.module.css'


export default function AddExperience (){
    const [input, setInput] = useState({ 
		title: "",
        description:"",
        interactiveRoom: "",
	  });
	 
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

  </div>
);
};