import MaisVendidos from './Mais_vendidos'
import img1 from '../../img/celular1.png'
import img2 from '../../img/celular2.png'
import img3 from '../../img/celular3.png'
import img4 from '../../img/celular4.png'


function ProdutosVendedor(){
    const ProdutosVendedor = [
        {
            id: 101,
            Image:"img1",
            Title:'Celular xiaomi',
            Preço:'199,90',
        },
        {
            id: 202,
            Image:{img2},
            Title:'Celular xiaomi',
            Preço:'199,90',
        },
        {
            id: 303,
            Image:{img3},
            Title:'Celular xiaomi',
            Preço:'199,90',
        },
        {
            id: 404,
            Image:{img4},
            Title:'Celular xiaomi',
            Preço:'199,90',
        }     
    ]
    return(
        ProdutosVendedor.map(Produto=>(
          <MaisVendidos preço={Produto.Preço} title={Produto.Title} image={Produto.Image} /> 
        ))
    )
}

export default ProdutosVendedor;