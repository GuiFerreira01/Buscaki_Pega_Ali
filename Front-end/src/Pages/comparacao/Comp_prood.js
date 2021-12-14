import iphone1 from '../../img/Iphoneimg-removebg-preview.png'
import iphone2 from '../../img/iphone1.png'
import iphone3 from '../../img/iphone2.png'
import iphone4 from '../../img/iphone3.png'
import iphone5 from '../../img/iphone1.png'

import Repeat from './Comp_repeat'
  function CompPrincipal(){
    const PropsProdutos =[
      {
        id:226,
        Image: iphone1,
        Nome: "Santa Helena", 
        Title:"Iphone1",
        Link:"/iphone",
        Preço:"1.299,99",
        Frete:"30,00",
      },
      {
        id:326,
        Image: iphone2,
        Nome: "HPE Eletrônicos",
        Title:"Iphone2",
        Link:"/iphone",
        Preço:"1.486,00",
        Frete:"30,00",
      },
      {
        id:366,
        Image: iphone3,
        Nome: "Costa's Informática",
        Title:"Iphone3",
        Link:"/iphone",
        Preço:"1.350,00",
        Frete:"30,00",
      },
      {
        id:426,
        Image: iphone4,
        Nome: "Cris celulares",
        Title:"Iphone4",
        Link:"/iphone",
        Preço:"1.400,00",
        Frete:"30,00",
      },
      {
        id:466,
        Image: iphone5,
        Nome: "Ferreira PC",
        Title:"Iphone5",
        Link:"/iphone",
        Preço:"1.435,00",
        Frete:"30,00",
      },
    ]
    return PropsProdutos.map(Produtos=>(
      <div>
        <Repeat key={Produtos.id} nome={Produtos.Nome} Link={Produtos.Link} title={Produtos.Title} img={Produtos.Image} Preço={Produtos.Preço} Frete={Produtos.Frete} />
      </div>
    ))
  }

  export default CompPrincipal;