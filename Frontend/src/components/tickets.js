/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
//import { NavLink } from "react-router-dom";
//import styles from "../style/Form.module.css";



export default function Ticket (){
const [tickets, setTickets] = useState();
		 
useEffect(() => {
    getTickets();
  }, []);


	  const getTickets = async () => {
    try {   
      const  { data }  = await Axios.get("https://encasa.parqueexplora.org/wp-json/wp/v2/posts")
      const ticks= data.map( e =>{
      return { 
            title: e.title.rendered,
            excerpt:e.excerpt.rendered,
            img: e.jetpack_featured_media_url
        }});

      const tickeRender = ticks.slice(0,4)
      setTickets(tickeRender);    

    } catch (error) {
        console.log(error)
    }};   
    console.log('este es el recurso', tickets)
return (
  <>

{tickets? tickets.map((c) =>  {
            return (
              <div key={c.title}>
                    <h1>{ c.title}</h1><br/>
                    <p>{c.excerpt}</p><br/>
                    {<img src={c.img}/> }<br/>              
              </div>
            );
          }):''}
  </>
);
};