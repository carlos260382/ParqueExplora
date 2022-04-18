import React from 'react';
import styles from '../style/information.module.css'


export default function Information (){
	
return (
  <div className={styles.container}>
    <h1>Información General</h1>
    <p>
      El Parque Explora, es un museo interactivo de ciencias en la ciudad de
      Medellín, Colombia, formado por un acuario con énfasis en la Amazonia, un
      planetario, un taller público de experimentación -Exploratorio- y un
      parque con más de 300 experiencias orientadas a la apropiación social del
      conocimiento.
    </p>
    <h2>Arquitectua</h2>
    <p>
      El arquitecto Alejandro Echeverri diseñó el museo. Tiene una combinación
      de espacio interior y exterior. Sus cuatro "cubos" rojos albergan las
      salas de ciencia y tecnología del museo
    </p>

    <h3>Acuario Explora</h3>
    <p>
      El acuario Explora alberga cerca de 4.000 organismos y 400 de las especies
      más comunes de Colombia. Sus 25 tanques exhiben muchas de las especies más
      representativas que habitan los ríos y océanos de Colombia, incluyendo
      pirañas , anguilas eléctricas y un caleidoscopio pancromático de peces
    </p>

    <h3>Ubicación</h3>
    <p>
      El Parque Explora está ubicado en la zona norte de Medellín, conocida como
      Zona Norte ( Zona Norte ), entre el Parque Norte y el Jardín Botánico de
      Medellín . Se puede llegar al museo en la línea A del Metro de Medellín,
      en la parada Estación Universitaria, que lleva el nombre de la cercana
      Universidad de Antioquia.
    </p>
  </div>
);
};