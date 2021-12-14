import { useState } from 'react'
import feijao from "../../img/feijao.png"
import celular from '../../img/celular.png'
import Frente from '../../img/frente.png'
import iphone from '../../img/Iphoneimg-removebg-preview.png'
import traz from '../../img/traz.png'

import 'bootstrap/dist/css/bootstrap.min.css';

function Kaique(){


    
    const Media = () => {

        if ( window.window <= 1200){
            let element = document.getElementById("ptsumir");
            let border = document.getElementById("trocarColuna2")
            let botao = document.getElementById("botaoSumir")
            let x = document.getElementById("X")
            let i = document.getElementById("trocarIcone")

            element.style.display = "none";
            border.style.border = "none";
            botao.style.display = "block";
            border.style.borderRadius = "none"
            x.style.display = "none";
            i.style.display = "flex";
        }
    
    }
    

    const [SumirX, setSumirX] = useState(0)
    const [Drop_1X, setDrop_1X] = useState(0)
    const [Drop_2X, setDrop_2X] = useState(0)
    const [Drop_3X, setDrop_3X] = useState(0)

    const Drop_1 = () => {

        let caixa = document.getElementById("drop1");
        
        if (Drop_1X == 0) { 

            setDrop_1X(1);
            console.log(Drop_1X);

            caixa.style.display = "none";
            
            
        }else if(Drop_1X == 1){

            setDrop_1X(0)
            console.log(Drop_1X);

            caixa.style.display = "block";
            
        } 
    }

    const Drop_2 = () => {

        let caixa = document.getElementById("drop2");

        
        if (Drop_2X == 0) { 

            setDrop_2X(1);
            console.log(Drop_2X);

            caixa.style.display = "none";
            
        }else if(Drop_2X == 1){

            setDrop_2X(0)
            console.log(Drop_2X);

            caixa.style.display = "block";
            
        } 
    }

    const Drop_3 = () => {

        let caixa = document.getElementById("drop3");

        
        if (Drop_3X == 0) { 

            setDrop_3X(1);
            console.log(Drop_3X);

            caixa.style.display = "none";
            
        }else if(Drop_3X == 1){

            setDrop_3X(0)
            console.log(Drop_3X);

            caixa.style.display = "block";
            
        } 
    }

    const Sumir = () => {

        if ( SumirX == 0) { 

            let element = document.getElementById("ptsumir");
            let border = document.getElementById("trocarColuna2")
            let x = document.getElementById("X")
            let i = document.getElementById("trocarIcone")


            setSumirX(1);
            console.log(element.style);
            console.log(SumirX);

            element.style.display = "none";
            border.style.border = "none";
    
            border.style.borderRadius = "none"
            x.style.display = "none";
            i.style.display = "flex";


        }else if(SumirX==1){
            
            
            let element = document.getElementById("ptsumir");
            let border = document.getElementById("trocarColuna2")
            
            let x = document.getElementById("X")
            let i = document.getElementById("trocarIcone")

            setSumirX(0);
            console.log(element.style);
            console.log(SumirX);

            element.style.display = "block";
            border.style.border = "none";
            border.style.borderRadius = "15px 15px 15px 15px"
            x.style.display = "flex";
            i.style.display = "none";
            
        }
    }


    return(
    <div onLoad={Media}>
        <div className="container-fluid container-resp d-flex j-boxshadow p-3 mt-5 mb-5">
            <div className="row">
                {/* Miniaturas PARA PC */}
                <div className="d-none d-md-block col-12 col-md-2 col-xl-1">
                    <div className="d-flex justify-content-between align-items-start flex-column bd-highlight mb-3">{/* 3 IMAGENS PEQUENA */}
                        <div className="row d-none d-xl-block">
                            <div className="col-2 col-md-12">
                                <img src={iphone} id="mud" onClick={Fotoum} className="j-berder img-fluid  j-pointer p-2 m-1 img-ico" />
                            </div>
                            <div className="col-2 col-md-12">
                                <img src={traz} onClick={Fotodois} className="img-fluid j-pointer p-2 m-1 img-ico" />
                            </div>
                            
                            <div className="col-2 col-md-12">  
                                <img src={Frente} onClick={Fototres} className="img-fluid j-pointer p-2 m-1 img-ico" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* /Miniaturas */}

                {/* IMG GRANDE e TÍTULO */}
                <div className="col-10 col-md-8 col-xl-4 j-margin ">
                    <h4 className="m-2 mb-3 col-12 nome-prod d-block d-md-none">iPhone 13 Apple (64GB) Cinza Espacial Tela 6,1" Câmera 12MP iOS</h4>
                    <img id="myImage1" src={iphone} alt="" className="img-fluid j-img" />
                </div>
                {/* /IMG GRANDE e TÍTULO */}
                
                {/* MINIATURAS PARA MOBILE */}
                <div className="col-12 col-xl-1 d-block d-xl-none">
                    <div className="d-flex align-items-start justify-content-between flex-column bd-highlight mb-3">{/* 3 IMAGENS PEQUENA */}
                        <div className="row align-items-start justify-content-between">
                            <div className="col-4 col-xl-12">
                                <img src={iphone} id="mud" onClick={Fotoum} className="img-fluid j-img j-border j-pointer p-2 m-1 img-ico" />
                            </div>
                            <div className="col-4 col-xl-12">
                                <img src={traz} onClick={Fotodois} className="img-fluid j-img j-border j-pointer p-2 m-1 img-ico" />
                            </div>
                            <div className="col-4 col-xl-12">    
                                <img src={Frente} onClick={Fototres} className="img-fluid j-img j-border j-pointer p-2 m-1 img-ico" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* /MINIATURAS PARA MOBILE */}

                {/* INFO DOS PRODUTOS */}
                <div id="trocarColuna2" className="col-11 col-xl-6 m-2" style={{display:""}}>
                    <div>
                        <div className="d-flex justify-content-between bd-highlight m-2">
                            <h6 className="bi bi-heart j-icone-frete"> Favoritar Produto</h6>
                            <i id="trocarIcone" onClick={Sumir} style={{display:"none"}} className="bi bi-info-circle j-pointer"></i>
                            <i id="X" onClick={Sumir} className="bi bi-x j-pointer" style={{display:"flex"}}></i>{/* botão trocar telas */}
                        </div>
                        <div className="row">
                            <div>
                                <h4 className="m-2 mb-3 col-12 nome-prod d-none d-lg-block">iPhone 13 Apple (64GB) Cinza Espacial Tela 6,1" Câmera 12MP iOS</h4>
                                <h4 className="m-2 mb-3 col-12">R$ 1.299,99 <span className="lead">ou em 12x 108,33 sem juros</span></h4>
                            </div>
                        </div>
                    </div>
                    <div id="ptsumir" style={{display: "block"}}>
                        <h4 className="m-2 mb-3">
                            <ul className="lead">
                                <li>Resolução da Câmera Traseira: 12MP</li>
                                <li>Memória interna: 64GB</li>
                                <li>Memória RAM de 4GB.</li>
                                <li>Tela de 6.1".</li>
                                <li>Dual chip</li>
                                <li>Conexão 5G</li>
                            </ul>
                        </h4>
                    </div>
                        <div className="row mt-4 p-1">
                            <h6 className="col-12 p-2">Loja Ferreirinha <spam style={{color:"#DAA520"}}>OURO <i className="fas fa-medal" style={{fontsize:'16px', color:"#DAA520"}}></i></spam></h6>
                            <button type="button" className="btn btn-outline-info j-button col-12">Adicionar ao carrinho</button>
                        </div>
                    
                </div>
            </div>
        </div>

        {/* parte do kaique */}
        <div className="container-fluid container-resp j-boxshadow p-3 mt-5 mb-5">
            <div className="d-flex justify-content-between" onClick={Drop_1}>
                <p className="h3"><i className="bi bi-file-text"></i> DESCRIÇÃO DO PRODUTO</p>
                <i id="setinha" className="bi bi-chevron-down"></i>
            </div>
            <div id="drop1" className="animation">
                <br></br>
                <p className="h5">Tudo. Na medida certa.</p>
                <p className="text-justify">
                    Novo sistema de câmera dupla. Bateria que dura o dia todo. O vidro mais resistente em um smatphone. E o chip mais rápido da Apple
                </p>
                <p className="h5">Seus vídeos viram estrelas.</p>
                <p className="text-justify">
                    Vídeo 4K a 60 qps em todas as câmeras. Câmera ultra-angular que captura quatro vezes mais da cena. Gire, recorte e adicione filtros com a mesma facilidade que em fotos.
                </p>
                <p className="h5">Fotos sem medo do escuro.</p>
                <p className="text-justify">
                    Seja na hora de cantar parabéns ou durante um luau em volta da fogueira, usando o modo Noite, você tira fotos mais naturais em ambientes com pouca luz.
                </p>
            </div>
        </div>

        <div className="container-fluid container-resp j-boxshadow p-3 mt-5 mb-5">
            <div className="d-flex justify-content-between" onClick={Drop_2}>
                <p className="h3"><i className="bi bi-file-text"></i> DESCRIÇÃO DO VENDEDOR</p>
                <i id="setinha" className="bi bi-chevron-down"></i>
            </div>
            <div id="drop2" className="animation">
                <br></br>
                <p className="h5">Loja Ferreirinha</p>
                <p className="text-justify">
                    Olá, nós somos a loja Ferreirinha, especializados em te fazer feliz e confortável, somamos mais de 1000 vendas na sua região. Conte conosco para o que quiser.
                </p>
            </div>
        </div>

        <div className="container-fluid container-resp j-boxshadow p-3 mt-5 mb-5">
            <div className="d-flex justify-content-between" onClick={Drop_3}>
                <p className="h3"><i className="bi bi-star-fill"></i> AVALIAÇÕES DOS USUÁRIOS</p>
                <i id="setinha" className="bi bi-chevron-down" ></i>
            </div>
            <div id="drop3" className="animation">
                <br></br>
                <p className="h3" style={{color:"#DAA520"}}>OURO <i className="fas fa-medal" style={{fontsize:'36px', color:"#DAA520"}}></i></p>
                <p>(20 Avaliações)</p>
                <hr></hr>
                <p className="mb-0"><strong>Ótimo produto! </strong>(01/12/2021)</p>
                <p>Kaique Costa Vicentin</p>
                <p className="text-justify">Aparelho excelente, ótimo sistema operacional, o único inconveniente é a falta da fonte do carregador, porém todos ja sabem que a Apple tirou de todos os aparelhos que ainda continuam em linha, XR, 11 e os da linha do 12. Então comprem ja sabendo que não vem e que vai ser preciso adquirir. Recomendo que comprem pelo app da Apple Store um carregador original, pois carregadores não originais danificam o aparelho.</p>
                <hr></hr>
            </div>
        </div>
    </div>
    );
}

function Fotoum() {
    let img = document.getElementById("myImage1");
    img.setAttribute('src', '/static/media/Iphoneimg-removebg-preview.9faf8591.png');
}
function Fotodois() {
    let img = document.getElementById("myImage1");
    img.setAttribute('src', '/static/media/traz.12b1c511.png');
}
function Fototres() {
    let img = document.getElementById("myImage1");
    img.setAttribute('src', '/static/media/frente.726033d8.png');
}

export default Kaique;