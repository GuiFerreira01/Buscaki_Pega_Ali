
import Logo from '../../img/Logo_Buscaki.png'
import { Link } from "react-router-dom"


function Registrar(){

    const Tamanho = () => {
        const margin = document.getElementById("margin");
        const body = document.getElementById("body");
        margin.style.marginTop = window.innerHeight / 6 + "px";
      }
      window.onload = Tamanho;
    return(
        <div id="body">
            <div className="container j-center">
                <div id="margin" className="row j-login">
                    <div className="col-12 col-sm-7 col-md-6 col-lg-7 ">
                        <img className="col-12 j-elementos-login" src={Logo} alt="" />
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-5  p-3">
                        <div className="j-elementos-login">
                            <h1 className="text-center Login">ENTRAR</h1>
                            <input type="text" placeholder="email" name="email" id="" className="col-12 m-2 p-1 j-input-login form-control" />
                            <input type="password" placeholder="senha" name="senha" id="" className="col-12 m-2 p-1 j-input-login form-control" />
                            <Link type="button" to="/Login" className="col-12 m-2 btn btn-outline-info">Entrar</Link>
                            <p className="text-center Login">
                                <Link className="Login" to=""> Esqueceu o E-mail / Senha? </Link>
                            </p>
                            <p className="text-center m-5">
                                <Link className="Login" to="">Crie sua conta aqui</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Registrar;