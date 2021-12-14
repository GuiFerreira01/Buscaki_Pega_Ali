
import Capa from './Capa'
import ProdutosVendedor from './Produtos_Vendedor'



function Vendedor (){
    return(
      <div >
        <Capa />
        <div className="container">
          <h2 className="mt-5">Melhores Avaliados</h2>
          <div class="row">
            <ProdutosVendedor />
          </div>
        </div>
    </div>
    )
}


export default Vendedor;