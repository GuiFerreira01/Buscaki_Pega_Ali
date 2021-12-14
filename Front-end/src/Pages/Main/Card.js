
import { Link } from "react-router-dom";
import camiseta from '../../img/camiseta-nike-sportswear-just-do-it-masculina-AR5006-010-1-11627568092.png';
import vaio from '../../img/vaio.png';
import iphone from '../../img/iphone1.png';
import img from '../../img/Motorola.jpg'

import xbox from '../../img/xbox.png';
import ps from '../../img/ps.png'
import inspiron from '../../img/Inspiron_5400.jpg'
import computador from '../../img/computador.jpg'
import guarda from '../../img/Guarda-roupa_1.webp'
import tenis from '../../img/Tenis.jpg'
import AllStar from '../../img/tenis-converse-all-star.jpg'
import Bone from '../../img/Bone.jpg'
import Mochila from '../../img/Mochila.jpeg'
import Nutela from '../../img/nutella.jpg'
import HomemAranha from '../../img/Hoem-aranha.webp'
import Natal from '../../img/Natal.jpg'
import Air from '../../img/ad7ce9bcd24da6c1dd6caea67cc45a1b.jpeg'
import Kit from '../../img/kit.jpg'
import Painel from '../../img/118689_1.jpg'
import Batedeira from '../../img/BAT401-01.jpg'
import Panela from '../../img/7b757b2b77a8917ea747d274880c1100.jpg'
import Torneira from '../../img/Torneira-de-mesa-para-cozinha-Flex-1177-C27-black-Lorenzetti.jpg'
import Tesla from '../../img/2021-06-01_20_.jpg'
import Wesley from '../../img/Wesley.png'
import Adriana from '../../img/Adriana.png'
import Aurora from '../../img/Aurora.png'
import Switch from '../../img/Switch.png'
import Chinelo from '../../img/Chinelo.jpeg'
import roupeiro from '../../img/roupeiro_6_portas_2_gavetas_s736_kappesberg_texturizado_nat_1566724940_260b_600x600.jpg'
import portas from '../../img/3portas.png'
import beliche from '../../img/beliche.jpg'
import maquina from '../../img/Lavadora-Brastemp-BWN15AT-Frontal-1.jpg'

export default (props) => {  

    console.log(props.id)
    return (
        <div className="card" key={props.id}  style={props.style} >
            <img className="img-card" src={props.image} className="card-img-top" alt={props.title} />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="h6">A partir de <br/>{"R$" + props.valor + ",00"}</p>
            </div>
            <div className="button">
                <Link to={`/produto/${props.id}`}  className="btn btn-primary btn-full">Confira</Link>
            </div>
        </div>
    )
}