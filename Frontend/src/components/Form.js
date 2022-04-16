/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
//import { NavLink } from "react-router-dom";
import whatsApp from '../assent/whatsApp.png'
import styles from "../style/Form.module.css";
import Axios from 'axios';


export default function Form (){
const [input, setInput] = useState({ 
		name: "",
    cedula:"",
    movil: "",
		email: "",
		institution: "",
		select: "",	   
	  });
	
	 
	  const handleChange = (evento) => {
      evento.persist();
		  setInput((input) => ({
			...input,
			 [evento.target.name]: evento.target.value
		   }))
		 };
	  
	
		 const handleSubmit = async () => {
      console.log('este es el input enviado', input)
       await Axios.post("http://localhost:5000/form", input, {
         headers: {
           "Access-Control-Allow-Origin": "*",
           "Content-Type": "application/json",
         },
         body: JSON.stringify(input),
       });
       window.location.replace("");
     };
	 

    const goWhatsApp = ()=>{
      window.location.replace("https://api.whatsapp.com/send?phone=+573127411293&text=hola");
    } 
      	
return (
  <>
    <div className={styles.container}>
      <form>
        <label name="name">Nombre</label>
        <input type="text" name="name" required value={input.name}
          onChange={handleChange}
        />

        <label name="cedula">Cédula</label>
        <input type="tel" name="cedula" required onChange={handleChange} />

        <label name="movil">Telefono celular</label>
        <input type="tel" name="movil" required onChange={handleChange} />

        <label name="email">Correo electrónico</label>
        <input type="email" name="email" required onChange={handleChange} />

        <label name="institution">
          Nombre de institución <br />
          educativa
        </label>
        <input type="text" name="institution" onChange={handleChange} />

        <label name="name">
          Estás interesado en una <br /> navegación por el universo para:
        </label>
        <select onChange={(evento) => handleChange(evento)} name="select">
          {["Preescolar", "Primaria", "Secundaria"].map((el) => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}
        </select>
      </form>

      <button className={styles.btn} 
     onClick={handleSubmit}>
        Enviar
      </button>

      <button onClick={goWhatsApp} className={styles.btnW} >
      <img src={whatsApp} alt="my image" className={styles.imgW}/></button>
      <label>Escríbenos por Whastapp</label>

    </div>
  </>
);
};