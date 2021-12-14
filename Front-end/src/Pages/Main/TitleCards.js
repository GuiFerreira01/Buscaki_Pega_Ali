import img from '../../img/3portas.png'
import wesley from '../../img/wesley.jpeg'
import aurora from '../../img/aurora.jpg'
import adriana from '../../img/guilhermebroda.jpg'

    function TitleCards(props){
        return (
        <div className="container oferta-title text-black py-5">
          <h2 className={props.classe} >{props.title}</h2>
          {/* <img src={wesley} /> */}
          {/* <img src={aurora} /> */}
          {/* <img src={adriana} /> */}
        </div>

        )
    }
    export default TitleCards;
