import Navbar from './Pages/Navbar';
import Footer from './Pages/Footer';
import Filtro from './Pages/Pesquisa/resultado_pesquisa';
import Cartaozin from './Pages/Pesquisa/kiqProd';

function Pesquisa() {
    return(
        <div>
            <Navbar />
            <Filtro />
            <div className="center-pesq">
                <div id="card-pesquisa" className="container row">
                    <Cartaozin />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Pesquisa;