/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
//import { NavLink } from "react-router-dom";
import whatsApp from '../assent/whatsApp.png'
import styles from "../style/form.module.css";
import Axios from 'axios';
import planeta1 from '../assent/FORMULARIO-PLANETA-1.png'
import planeta2 from '../assent/FORMULARIO-PLANETA-2.png'


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
    <div className={styles.title}>
    <img src={planeta1}/>
    <h1>¿Quieres más información?</h1>
    <img src={planeta2}/>
    </div>
    <h2>Déjanos tus datos y te contactaremos</h2>
      <form className={styles.form}>
      <div className={styles.div1}>
        <div>
        <label name="name">Nombre</label>
        <input type="text" name="name" required value={input.name}
          onChange={handleChange}
        />
        </div>
        <div>
        <label name="cedula">Cédula</label>
        <input type="tel" name="cedula" required onChange={handleChange} />
      </div>
      </div>
      <div className={styles.div2}>
        <div>
        <label name="movil">Telefono celular</label>
        <input type="tel" name="movil" required onChange={handleChange} />
      </div>
      <div>
        <label name="email">Correo electrónico</label>
        <input type="email" name="email" required onChange={handleChange} />
      </div>
      </div>
      <div className={styles.div3}>
      <div>
        <label name="institution">
          Nombre de institución <br />
          educativa
        </label>
        <input type="text" name="institution" onChange={handleChange} />
      </div>
      <div>
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
        </div>
        </div>
      </form>

      <button className={styles.btn} 
     onClick={handleSubmit}>
        Enviar
      </button>

      <button onClick={goWhatsApp} className={styles.btnW} >
      <img src={whatsApp} alt="my image" className={styles.imgW}/></button>
      <label className={styles.labelW}>Escríbenos por Whastapp</label>
<p>Al diligenciar este formulario aceptas seguir recibiendo información del Parque Explora y nos autorizas para que incluyamos tus datos<br/>personales en nuestras bases de datos, en calidad de responsable y encargado de los mismos, con la finalidad de enviarte información<br/>sobre eventos y actividades. También te das por enterado de los derechos que tienes de consultarlos, actualizarlos, rectificarlos y<br/>suprimirlos en cualquier momento, y conoces la política de manejo de datos de la Corporación, que se encuentran en la página web<br/>
www.parqueexplora.org/condiciones-legales. En ella se encuentran descritos los canales de atención para el ejercicio de tus derechos y la<br/>presentación de quejas y reclamos. Así mismo comprendes que esta autorización es requerida de acuerdo a lo dispuesto por la ley 1581<br/>de 2012 y sus decretos reglamentarios. Esta autorización la otorgas gratuitamente sin ninguna limitación de carácter temporal o territorial.</p>
    </div>
  </>
);
};