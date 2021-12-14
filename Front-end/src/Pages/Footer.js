import Logo from '../img/logo-branca.png'

import Link from './Main/Link';
import RedesS from './Main/NRedes';

function Footer(){
    return(
        <footer className="container-fluid fot pb-5">
            <div className="container">
                <div className="row">
                    <div id="mgfooter" className="col-12 col-md-6 col-lg-3 ajuste">  
                        <p className="h4 title">
                            <img className="logo-footer" src={Logo} />
                        </p>
                        <div className="texto-footer">
                            <li>
                                <a href="#">
                                    Quem somos
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Privacidade
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Lojas
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Parceiros
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Contato
                                </a>
                            </li>
                        </div> 
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 my-4 ajuste">  
                        <p className="h4 title">
                            Popular
                        </p>
                        <div className="texto-footer">
                            <li>
                                <a href="#">
                                    Celulares Samsung
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Notebooks
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Celulares Motorola
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Serviços
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Alimentos
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Perifericos
                                </a>
                            </li>
                        </div> 
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 my-4 ajuste">  
                        <p className="h4 participantes-footer title">
                            Participantes:
                        </p>
                        <div className="texto-footer">
                            <li>
                                <a href="#">
                                    Guilherme Farias
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Guilherme Ferreira
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Higor Bernardes
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    João Lenarducci
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Kaique Vicentin
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Pedro Marchi
                                </a>
                            </li>
                        </div> 
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 my-4 ajuste">
                        <RedesS />
                        <Link />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;