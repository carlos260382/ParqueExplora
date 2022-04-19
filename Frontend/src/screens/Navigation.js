/* eslint-disable jsx-a11y/alt-text */
import React, {useState} from 'react';
import Form from '../components/Form.js';
import whatsApp from '../assent/whatsApp.png';
import objetivo1 from '../assent/OBJETIVOS-NUM-1.png';
import objetivo2 from '../assent/OBJETIVOS-NUM-2.png';
import objetivo3 from '../assent/OBJETIVOS-NUM-3.png'
// import caracteristica1 from '../assent/CARACTERISTICAS-1.png';
// import caracteristica2 from '../assent/CARACTERISTICAS-2.png';
// import caracteristica3 from '../assent/CARACTERISTICAS-3.png';
import styles from '../style/navigation.module.css'
import {
	Carousel,
	CarouselItem,
	CarouselControl,
	CarouselIndicators,
	CarouselCaption
  } from 'reactstrap';
  import 'bootstrap/dist/css/bootstrap.min.css'

  const items = [
	{
	  src: require('../assent/CARACTERISTICAS-1.png'),
	  altText: 'Imagen 1',
	  caption: 'Slide1'
	},
	{
	  src: require('../assent/CARACTERISTICAS-2.png'),
	  altText: 'Imagen 2',
	  caption: 'Slide2'
	},
	{
	  src: require('../assent/CARACTERISTICAS-3.png'),
	  altText: 'Imagen 3',
	  caption: 'Slide3'
	}
  ];
console.log('este es el item', items)
export default function Navigation (){
	

	  const [activeIndex, setActiveIndex] = useState(0);
	  const [animating, setAnimating] = useState(false);
	
	  const next = () => {
		if (animating) return;
		const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
		setActiveIndex(nextIndex);
	  }
	
	  const previous = () => {
		if (animating) return;
		const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
		setActiveIndex(nextIndex);
	  }
	
	  const goToIndex = (newIndex) => {
		if (animating) return;
		setActiveIndex(newIndex);
	  }
	  const slides = items.map((item) => {
		return (
		  <CarouselItem
			onExiting={() => setAnimating(true)}
			onExited={() => setAnimating(false)}
			key={item.src}
		  >
			<img src={item.src} alt={item.altText} />
			<CarouselCaption captionText={item.caption} captionHeader={item.caption}/>
		  </CarouselItem>
		);
	  });
	
return(
<>
<div className={styles.container1}>
<label>Navegación<br/>por el universo<br/>para colegios</label>
<p>En este viaje en vivo conoceremos los logros y descubrimientos<br/>que hicieron mujeres y hombres inquietos por observar los<br/>misterios del cosmos. Acompañados por la curiosidad y el<br/>asombro, seremos testigos de la diversidad de objetos que hay en<br/>nuestro universo y, a través de historias, viajaremos por lugares ya<br/>conocidos y por conocer.</p>
<img src={whatsApp}/>
<h3>Escribenos por whatsApp</h3>
</div>

<div className={styles.container2}>
<h1>¿Cuáles son los objetivos de estos encuentros?</h1>
<div className={styles.div1}>
<img src={objetivo1}/>
<p>Motivar la observación del cielo e <br/>incentivar la curiosidad sobre algunos<br/>temas relacionados con la Astronomía<br/>como planetas, estrellas y galaxias.</p>
</div>
<div className={styles.div2}>
<img src={objetivo2}/>
<p>Fortalecer la divulgación de la <br/>Astronomía a través de entornos digitales<br/>que permitan mantener la <br/>conexión con estudiantes y maestros.</p>
</div>
<div className={styles.div3}>
<img src={objetivo3}/>
<p>Mostrar la Tierra como un planeta muy <br/>especial que nos conecta con su famipa <br/>planetaria y el universo en general.</p>
</div>
</div>

<div className={styles.container3}>

<Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>

	<h1>características</h1>
	<ul>
	<div>
		<li>Para estudiantes de 1 a 11</li>
		<li>Incluye viaje por el universo + actividad experimental</li>
	</div>
	<div>
		<li>Grupos de 20 personas acompañados por un mediador</li>
		<li>1 sesión de 90 minutos</li>
	</div>
	<div>
		<li>Conexión privada por Zoom</li>
	</div>
	</ul>
</div>

<Form/>
</>
)
};