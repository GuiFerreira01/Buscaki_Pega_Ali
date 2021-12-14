// Importa as Imagems
import Kaique from '../../img/logo-branca.png'
import KIQ from '../../img/iphone.png'
import BG from '../../img/mercado.png'

// Constroi o Carrossel
 function Carrossel(){
    return (
        <div id="carouselExampleControls tamanho-carrossel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active bg-slide1 tamsl1">
                <div className="container">
                    <div className="row quad  ">
                        <div className="col-12 col-md-12 col-lg-6 my-slide carrossel-md ">
                            <h2>Seja bem vindo!</h2>
                            <p className="h4">Aqui você encontrará os vendedores mais próximos e com os melhores preços!</p>
                            <a href="#" className="btn btn-dark">Venha conferir</a>
                        </div>
                        <div className="col-12 col-md-12 col-lg-6 carrossel-md justify-content-end">
                            <img src={Kaique} className="d-block logo-branca-carrossel" alt="Logo Buscaki pega ali cor branca" />
                        </div>
                    </div>
                </div>
                </div>
                <div className="carousel-item bg-slide1 tamsl2">
                <div className="container cas">
                    <div className="row quad">
                        <div className="col-12 col-md-12 col-lg-6  my-slide carrossel-md">
                            <h2>Novos e Seminovos</h2>
                            <p className="h4">Os melhores produtos de tecnologia, usados ou lacrados, em todas as faixas de preço!</p>
                            <a href="#" className="btn btn-dark">Venha conferir</a>
                        </div>
                        <div className="col-12 col-md-12 col-lg-6 carrossel-md center">
                            <img src={KIQ} className="d-block iphone-img" alt="Iphone 11" />
                        </div>
                    </div>
                </div>
                </div>
                <div className="carousel-item bg-slide1 tamsl3">
                    <div className="container">
                    <div className="row quad ">
                        <div className="col-12 col-md-12 col-lg-6 my-slide carrossel-md">
                            <h2>Faça suas compras!</h2>
                            <p className="h4">Apoie o comércio da sua região e faça suas comprar de supermercado de maneira rápida!</p>
                            <a href="#" className="btn btn-dark">Venha conferir</a>
                        </div>
                        <div className="col-12 col-md-12 col-lg-6 carrossel-md">
                            <img src={BG} className="d-block mercado-img" alt="Produtos de supermercado" />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

//Exporta o Carrossel pronto
export default Carrossel;