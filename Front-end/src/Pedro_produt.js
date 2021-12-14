import Navbar from './Pages/Navbar'
import Footer from './Pages/Footer';

import CompPrincipal from './Pages/comparacao/Comp_prood';
import CompProduto from './Pages/comparacao/Comp_todos';
import BarraPesq from './Pages/Main/Pesquisa';
import BarraPesquisa from './Pages/Main/PesquisaOutros';

function PedroProduto () {
        return(
            <div>
                <Navbar />
                <BarraPesquisa />
                <CompProduto />
                <CompPrincipal />
                <Footer />
            </div>
        )
    }

    export default PedroProduto;