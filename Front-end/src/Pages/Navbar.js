import Kaique from '../img/logo-branca.png'
import { useState } from 'react'
import { Link } from 'react-router-dom';

  function Navbar(){
    const [TemaX, setTemaX] = useState(0);

    const Tema = () => {
        var tema

        if ( TemaX == 0) {
            tema = document.getElementById('root');
            let corE = "#2c2c2c";
            let colorE= "#FFF"
     
            alert(window.location.href)
            setTemaX(1)
            console.log(TemaX)

            tema.style.background = corE;
            tema.style.color = colorE;
  
        }else if(TemaX==1){
            tema = document.getElementById('root');
            let cor = "#e6f1f1"
            let color = "#000"

            alert(window.location.href)
            setTemaX(0)
            console.log(TemaX)

            tema.style.background = cor;
            tema.style.color = color;
        }
    }
    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-primary">
            <div className="container justify-content-between">
                <a id="logo" className="navbar-brand " href="#"><img src={Kaique} className=" logo-principal d-block logo-branca-header" alt="Logo Buscaki pega ali cor branca" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end black grande" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><img src={Kaique} className="d-block logo-branca-header" alt="Logo Buscaki pega ali cor branca" /></h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="bd-highlight mb-3 CAT justify-content-center flex-grow-1 pe-3 align-items-center">
                        <li className="nav-item">
                        <a className="nav-link branco" aria-current="page" href="#">Lojas</a>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link branco" to="/Pesquisa">Quem somos</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link branco" to="/produto">Parceiros</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link branco" to="/user">Equipe</Link>
                        </li>  
                    </div>
                    <div className="carrinho">
                        <a className="nav-link login" href="/Login">Login/Registre-se <i className="bi bi-person-circle"></i></a>
                        <div className="d-flex"><a className="nav-link" onClick={Tema} >Carrinho <i className="bi bi-cart2 " ></i></a></div>
                    </div> 
                </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
