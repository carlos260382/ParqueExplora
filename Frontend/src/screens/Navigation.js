/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Form from '../components/Form.js';
import whatsApp from '../assent/whatsApp.png';
import objetivo1 from '../assent/OBJETIVOS-NUM-1.png';
import objetivo2 from '../assent/OBJETIVOS-NUM-2.png';
import objetivo3 from '../assent/OBJETIVOS-NUM-3.png'
import caracteristica1 from '../assent/CARACTERISTICAS-1.png';
import caracteristica2 from '../assent/CARACTERISTICAS-2.png';
import caracteristica3 from '../assent/CARACTERISTICAS-3.png';

export default function Navigation (){
	
return(
<>
<div>
<h1>Navegación <b/>por el universo <b/>para colegios</h1>
<p>En este viaje en vivo conoceremos los logros y descubrimientos<b/>que hicieron mujeres y hombres inquietos por observar los<b/>misterios del cosmos. Acompañados por la curiosidad y el<b/>asombro, seremos testigos de la diversidad de objetos que hay en<b/>nuestro universo y, a través de historias, viajaremos por lugares ya<b/>conocidos y por conocer.</p>
<img src={whatsApp}/>
<labe>Escribenos por whatsApp</labe>
</div>

<div>
<h1>¿Cuáles son los objetivos de estos encuentros?</h1>

<img src={objetivo1}/>
<p>Motivar la observación del cielo e <br/>incentivar la curiosidad sobre algunos<br/>temas relacionados con la Astronomía<br/>como planetas, estrellas y galaxias.</p>
<img src={objetivo2}/>
<p>Fortalecer la divulgación de la <br/>Astronomía a través de entornos digitales<br/>que permitan mantener la <br/>conexión con estudiantes y maestros.</p>
<img src={objetivo3}/>
<p>Mostrar la Tierra como un planeta muy <br/>especial que nos conecta con su famipa <br/>planetaria y el universo en general.</p>

</div>

<div>
	<img src={caracteristica1}/>
	<img src={caracteristica2}/>
	<img src={caracteristica3}/>
	<h1>características</h1>
	<ul>
		<li>Para estudiantes de 1 a 11</li>
		<li>Incluye viaje por el universo + actividad experimental</li>
		<li>Grupos de 20 personas acompañados por un mediador</li>
		<li>1 sesión de 90 minutos</li>
		<li>Conexión privada por Zoom</li>
	</ul>
</div>

<Form/>
</>
)
};