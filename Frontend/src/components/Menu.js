/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { NavLink } from "react-router-dom";
import styles from '../style/menu.module.css'
import lupa from '../assent/lupa.png'

export default function Menu() {


return (
<div className={styles.container}>
      <NavLink to="/">
        <h3> Inicio </h3>
      </NavLink>
      <NavLink to="/navigation">
        <h3>Navegación </h3>
      </NavLink>
      <NavLink to="/information">
        <h3> Información General </h3>
      </NavLink>
      <NavLink to="/addexperience">
        <h3> Registrar Experiencias Interactivas </h3>
      </NavLink>
      <img src= {lupa} />

</div>
)

}

