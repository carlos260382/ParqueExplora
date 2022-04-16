import React from 'react';
import { NavLink } from "react-router-dom";


export default function Menu() {

return (
<>
      <NavLink to="/">
        <h3> Inicio </h3>
      </NavLink>
      <NavLink to="/navigation">
        <h3>Navegación </h3>
      </NavLink>
      <NavLink to="/information">
        <h3> Información General </h3>
      </NavLink>
<h1>Este es el Menu</h1>

</>
)

}

