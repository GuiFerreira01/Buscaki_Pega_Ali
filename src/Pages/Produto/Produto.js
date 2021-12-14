import { useState } from 'react'
import feijao from "../../img/feijao.png"
import celular from '../../img/Iphoneimg-removebg-preview.png'
import cafe from '../../img/cafe.png'

import Medal from '../../img/medal-solid.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

function Prod(){


    
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

            caixa.style.height = "0";
            
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
                                <img src={feijao} id="mud" onClick={Fotoum} className="j-berder img-fluid  j-pointer p-2 m-1 img-ico" />
                            </div>
                            <div className="col-2 col-md-12">
                                <img src={celular} onClick={Fotodois} className="img-fluid j-pointer p-2 m-1 img-ico" />
                            </div>
                            
                            <div className="col-2 col-md-12">  
                                <img src={cafe} onClick={Fototres} className="img-fluid j-pointer p-2 m-1 img-ico" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* /Miniaturas */}

                {/* IMG GRANDE e TÍTULO */}
                <div className="col-10 col-md-8 col-xl-3 j-margin ">
                    <h4 className="m-2 mb-3 col-12 nome-prod d-block d-md-none">Nintendo Switch 32GB Standard cor vermelho-néon, azul-néon e preto</h4>
                    <img id="myImage1" src={celular} alt="" className="img-fluid j-img" />
                </div>
                {/* /IMG GRANDE e TÍTULO */}
                
                {/* MINIATURAS PARA MOBILE */}
                <div className="col-12 col-xl-1 d-block d-xl-none">
                    <div className="d-flex align-items-start justify-content-between flex-column bd-highlight mb-3">{/* 3 IMAGENS PEQUENA */}
                        <div className="row align-items-start justify-content-between">
                            <div className="col-4 col-xl-12">
                                <img src={feijao} id="mud" onClick={Fotoum} className="img-fluid j-img j-border j-pointer p-2 m-1 img-ico" />
                            </div>
                            <div className="col-4 col-xl-12">
                                <img src={celular} onClick={Fotodois} className="img-fluid j-img j-border j-pointer p-2 m-1 img-ico" />
                            </div>
                            <div className="col-4 col-xl-12">    
                                <img src={cafe} onClick={Fototres} className="img-fluid j-img j-border j-pointer p-2 m-1 img-ico" />
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
                                <h4 className="m-2 mb-3 col-12 nome-prod d-none d-lg-block">Nintendo Switch 32GB Standard cor vermelho-néon, azul-néon e preto</h4>
                                <h4 className="m-2 mb-3 col-12">R$ 2.400,00 <span className="lead">ou em 12x 173,25 sem juros</span></h4>
                            </div>
                        </div>
                    </div>
                    <div id="ptsumir" style={{display: "block"}}>
                        <h4 className="m-2 mb-3">
                            <ul className="lead">
                                <li>Inclui 2 controles sem fio.</li>
                                <li>Resolução de 1920px x 1080px.</li>
                                <li>Memória RAM de 4GB.</li>
                                <li>Tela de 6.2".</li>
                                <li>Tem tela tátil.</li>
                                <li>Horas de diversão garantidas.</li>
                                <li>Conta com: 1 joy-con grip, 2 correias para joy-con, 1 dock, 1 cabo hdmi, 1 adaptador de corrente.</li>
                            </ul>
                        </h4>
                    </div>
                        <div className="row mt-4 p-1">
                            <h6 className="col-12 p-2">Nome Vendedor(ClassNameificação Vendedor)</h6>
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
                <p className="h5">Para jogar muito</p>
                <p className="text-justify">
                    Console Nintendo Switch O console que lhe permite jogar os jogos que quiser, onde e como quiser. Inclui o console Nintendo Switch e a base do Nintendo Switch na cor preta, contrastando com os controles Joy-Con direito e esquerdo, um vermelho e o outro azul. Também inclui tudo o que você precisa para começar a jogar. Três modos em um só Switch. O Nintendo Switch foi desenvolvido para fazer parte da sua vida, transformando-se de um console doméstico em um console portátil num piscar de olhos. Coloque o seu Nintendo Switch na base do console para se divertir jogando em sua televisão. Abra o suporte para compartilhar a tela – e a diversão – em jogos multijogador. Remova o console da base e jogue com os controles Joy-Con encaixados. Este é o controle do Nintendo Switch, o Joy-Con! Os controles Joy-Con incluídos permitem total flexibilidade no jogo. Um ou dois controles, na vertical ou na horizontal, encaixados no console ou não.
                </p>
                <p className="h5">Versatilidade e diversão</p>
                <p className="text-justify">
                Você pode jogar de diversas maneiras, dependendo do jogo. Passe um Joy-Con a um amigo para uma diversão instantânea com dois jogadores. Ou convide mais amigos com seus próprios controles para uma festa de jogos Experimente algo novo A vibração HD traz a você uma experiência física mais realista do jogo, enquanto a câmera de infravermelho possibilita novas experiências.
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
                <p className="mb-0"><strong>Uma das melhores compras que eu fiz </strong>(01/12/2021)</p>
                <p>Kaique Costa Vicentin</p>
                <p className="text-justify">A Praticidade desse video-game é íncrivel. É estranho chamar o aparelho de CONSOLE, mas É UM CONSOLE. Apesar de ser muito pequeno, a Estrutura e o projeto é impecável, os encaixes dos controles e o acabamento é surreal. Podendo ser jogado na TV com o dock, ou carregar na sua mão para qualquer canto do mundo, da pra fazer uma viagem e jogar a vontade! Joguei por 4 horas seguidas e a bateria nem foi na metade. Impressionante.</p>
                <hr></hr>
            </div>
        </div>
    </div>
    );
}

function Fotoum() {
    let img = document.getElementById("myImage1");
    img.setAttribute('src', '/static/media/feijao.5a52aaf7.png');
}
function Fotodois() {
    let img = document.getElementById("myImage1");
    img.setAttribute('src', '/static/media/celular.9f6f7756.png');
}
function Fototres() {
    let img = document.getElementById("myImage1");
    img.setAttribute('src', '/static/media/cafe.aab6663a.png');
}

export default Prod;