import Footer from "./Pages/Footer";
import BarraPesq from "./Pages/Main/Pesquisa";
import BarraPesquisa from "./Pages/Main/PesquisaOutros";
import Navbar from "./Pages/Navbar";
import Kaique from "./Pages/Produto/Produto_copy";



function Iphone(){
    return(
        <div>
            <Navbar />
            <BarraPesquisa />
            <Kaique />
            <Footer />
        </div>
    )
}


export default Iphone;