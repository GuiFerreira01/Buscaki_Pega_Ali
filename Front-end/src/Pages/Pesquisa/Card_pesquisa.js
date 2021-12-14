

// estrutura Dos Cards 


export default (props) => {
    return (
        <div className="card" key={props.id}  >
            <img className="img-card" src={props.img} className="card-img-top" alt={props.alt} />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="h6">A partir de <br/>{"R$" + props.value}</p>
            </div>
            <div className="button">
                <button href="#"  className="btn btn-primary">Confira</button>
            </div>
        </div>
    )
}

