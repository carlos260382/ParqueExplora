/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react';
import Axios from 'axios';
import styles from '../../style/addExperience.module.css'


export default function updateExperience (props){
  const id = props.match.params.id 
  console.log('este es el', id)
    const [input, setInput] = useState({ 
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
            try {
              await Axios.put(`http://localhost:5000/${id}`,input, {
                headers: {
                  "Access-Control-Allow-Origin": "*",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(input),
              });
              window.location.replace("");
                          
            } catch (error) {
              console.log(error) 
            }
          };
          console.log('este es el input enviado', input)
return (
  <>
    <h1>Modifica y/o Actualiza</h1>

    <form>
      <label name="description">Descripción</label>
      <input type="text" name="description" onChange={handleChange} />

      <label name="interactiveRoom">Salón Interactivo</label>
      <input
        type="text"
        name="interactiveRoom"
        onChange={handleChange}
      />
    </form>
    <button className={styles.btn} onClick={handleSubmit}>
      Modificar
    </button>
  </>
);
};