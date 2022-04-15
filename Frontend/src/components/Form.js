import React, { useState } from 'react';
import styles from "./Form.module.css";


export default function Form (){
const [input, setInput] = useState({ 
		name: "",
		email: "",
		subject: "",
		message: "",	   
	  });
	
	 
	  const handleChange = (evento) => {
		  setInput((input) => ({
			...input,
			 [evento.target.name]: evento.target.value
		   }));
			console.log('este es el input', input)
	
		 }
	  
	
		 const handleSubmit = async (e) => {
			e.preventDefault();
			console.log('este es el input del handle', input)
			const res = await fetch('http://localhost:3001/user', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(input),
			});
	
			const data = await res.json();
			console.log(data);
		};
	 
	
return (
  <>
    <div className={styles.container}>
      <form>
        <label for="name">Nombre</label>
        <input type="text" name="name" required onChange={handleChange} />
        
        <label for="cedula">Cédula</label>
        <input type="tel" name="cedula" required onChange={handleChange} />
        
        <label for="movil">Telefono celular</label>
        <input type="tel" name="movil" required onChange={handleChange} />
        
        <label for="email">Correo electrónico</label>
        <input type="email" name="email" required onChange={handleChange} />
        
        <select name="select">
          <option value="value1">Preescolar</option>
          <option value="value2" selected>Primaria</option>
          <option value="value3">Secundaria</option>
        </select>
      </form>
      <button className={styles.btn} onClick={handleSubmit}>
        Enviar
      </button>
      <button className={styles.btn} onClick={handleSubmit}>
        Escribenos por WhatsApp
      </button>
    </div>
  </>
);
};