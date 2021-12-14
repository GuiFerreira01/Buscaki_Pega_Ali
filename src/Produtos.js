import Pord from './Pages/Produto/Produto'
import Navbar from './Pages/Navbar'
import Footer from './Pages/Footer';
import BarraPesq from './Pages/Main/Pesquisa';
import BarraPesquisa from './Pages/Main/PesquisaOutros';

function Produto () {
        return(
            <div>
                <Navbar />
                <BarraPesquisa />
                <Pord />
                <Footer />
            </div>
        )
    }

export default Produto;