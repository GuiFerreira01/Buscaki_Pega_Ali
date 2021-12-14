


function redrect() {

  window.location.href = "http://localhost:3000/iphone"
}


export default (props) => {
    return(
      <div key={props.key} onClick={redrect}>
        <div className="container-fluid container-resp j-boxshadow">
          <div className="row mt-4">
            <div className="col-5 col-md-2 ">
              <img src={props.img} alt={props.title} className="img-fluid j-img-produto"/>
            </div>
            <div className="col-12 col-md-10 p-4">
              <div className="d-flex justify-content-between">
                <div className="col-6">
                  <h3 id="teste">{props.nome}</h3>
                </div>
                <h3 className="bi bi-heart j-icone-frete mt-2 j-margin-right-2"> Favoritar produto</h3>
              </div> 
              <div className="mt-4">
                <span className="j-descriçao">menor preço</span>
                <h3>
                  R$ {props.Preço}
                  {/* <span className="j-descriçao">ou 10x de</span> */}
                </h3>
              </div> 
              <div className="d-flex justify-content-end j-margin-right-2">
                <h3 className="bi bi-truck j-icone-frete">Frete: R$ {props.Frete}</h3>
                <span>(estimado) em até 3 dias uteis</span>
              </div>           
            </div>
          </div>
        </div>
      </div>
    )
  }