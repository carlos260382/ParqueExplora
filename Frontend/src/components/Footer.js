/* eslint-disable jsx-a11y/alt-text */
//import { useNavigate } from 'react-router';
import logo from '../assent/logo.png';
import planetario from '../assent/planetario.png';
import instagram from '../assent/instagram.png';
import facebook from '../assent/facebook.png';
import youtube from '../assent/youtube.png';
import styles from '../style/footer.module.css';


export default function Footer() {


const handleClickInstagram = ()=>{
    window.location.replace('https://www.instagram.com/parqueexplora/')
}

const handleClickFacebook = ()=>{
    window.location.replace('https://www.facebook.com/ParqueExplora/')
    
}

const handleClickYoutube = ()=>{
    window.location.replace('https://www.youtube.com/parqueexplora')
}

return (
<div className={styles.container}>
<section className={styles.section}>
<div className={styles.div1}>
    <h2>Encuéntranos en:</h2>
    <img src={logo} className={styles.logo}/>
    <img src={planetario} className={styles.planetario}/>
</div>

<div className={styles.div2}>
    <h2>Contáctanos</h2>
    <p>Corporación Parque Explora <br/>+57(4) 516 83 00<br/>comunicaciones@parqueexplora.org</p>
</div>

<div className={styles.div3}>
    <h2>Ubicación</h2>
    <p>Carrera 52 # 73 - 75 <br/>Medellín - Colombia<br/>+57(4) 516 83 00</p>
</div>
</section>
<div className={styles.div4}>
<h3>@ 2020 PARQUE EXPLORA | TODOS LOS DERECHOS RESERVADOS</h3>

<div className={styles.btn}>
<button onClick={handleClickInstagram}><img src={instagram}/></button>
<button onClick={handleClickFacebook}><img src={facebook}/></button>
<button onClick={handleClickYoutube}><img src={youtube}/></button>
</div>
</div>
</div>
)};

