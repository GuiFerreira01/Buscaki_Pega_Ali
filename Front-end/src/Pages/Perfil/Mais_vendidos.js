
import img1 from '../../img/celular1.png'


export default (props) => {
    return (
    <div className="card j-border j-pointer j-col-xxl j-col-xl j-col-lg j-col-md j-col-sm j-col-s m-3 p-2" key={props.id}  >
      <img className="img-card" src={props.Image} className="card-img-top" alt={props.alt} />
      <div className="card-body">
        <h5 className="card-title">{props.preço}</h5>
        <p className="h6">{props.title}</p>
      </div>
    </div>
    )
}


