import 'bootstrap/dist/css/bootstrap.min.css';


function Categorias() {
    return(
        <div className="d-flex justify-content-between GB">
            <div className="justify-content-between GB">
                <div className="d-flex">
                    <button className="btn btn-primary" type="button" id="colapse" data-bs-toggle="collapse" data-bs-target="#colapsar" aria-expanded="false" aria-controls="collapseWidthExample" >Categorias</button>

                    <div className="ms-auto p-2 bd-highlight smg">

                    <li className="nav-item">
                        <a className="nav-link r-0" href="#">Seja um vendedor</a>
                    </li>
                </div>
            </div>
                <div className="bd-highlight mb-3 CAT">
                    <div className=" collapse" id="colapsar">

                        <div className="py-2 pr-2 bd-highlight ">
                            <li className="nav-item">
                                <a className="nav-link l-0" href="#">Usados</a>
                            </li>
                        </div>
                        <div className="p-2 bd-highlight">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Serviços</a>
                            </li>
                        </div>
                        <div className="p-2 bd-highlight">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Alimentos</a>
                            </li>
                        </div>
                        <div className="p-2 bd-highlight">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Tecnologia</a>
                            </li>
                        </div>
                        <div className="p-2 bd-highlight">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Ofertas</a>
                            </li>
                        </div>
                    </div>
                        <div className="ms-auto p-2 bd-highlight apg">
                            <li className="nav-item">
                                <a className="nav-link r-0" href="#">Seja um vendedor</a>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Categorias;