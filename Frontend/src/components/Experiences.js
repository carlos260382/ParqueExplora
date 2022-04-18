/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import styles from "../style/experience.module.css";
import Axios from 'axios';

import { NavLink } from 'react-router-dom';


export default function Experience (){
const [experience, setExperience] = useState();


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

   

  const onClose = async (id)=>  {
    try {
      console.log('el id', id)
      await Axios.delete(`http://localhost:5000/${id}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        
      });
      window.location.replace("");
                  
    } catch (error) {
      console.log(error) 
    }
  };

return (
  <div>
    <div className={styles.container}>
    <h1>Experiencias Interactivas</h1>
    {experience? experience.map((c) =>  {
            return (
              <div key={c._id} className={styles.ticke}>
                  
                    <h1>{ c.title}</h1><br/>
                    <label>{c.description}</label><br/>
                    <h3>{c.interactiveRoom}</h3><br/>
                    <NavLink to={`/experience/${c._id}`}>
                    { <img src={c.relatedImage} /> }<br/>
                    </NavLink>
                    
              <button onClick={()=>onClose(c._id)}>X</button>                    
              </div>
            );
          }):''}
    </div>
    
  </div>
)};