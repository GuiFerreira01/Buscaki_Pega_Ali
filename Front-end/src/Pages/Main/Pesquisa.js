import Categorias from "./categorias";
import 'bootstrap/dist/css/bootstrap.min.css';

function Mpesq(){

return(
    <div className="tmn">
        <form className="d-flex">
            <input className="form-control m-0" type="search" placeholder="Pesquisar" aria-label="Pesquisar" />
            <button className="btn btn-pesquisa btn-outline-dark" type="submit"><i className="bi bi-search"></i></button>
        </form>
    </div>
    )        
};

function BarraPesq() {
    return (
        <div id="DEGpesq" className="DEGpesq">
            <div className="container">
                <div className="centro d-flex">
                    <Mpesq />
                </div>
                <div className="centro d-flex">
                    <Categorias />
                </div>
            </div>
        </div>
    )
}

export default BarraPesq;