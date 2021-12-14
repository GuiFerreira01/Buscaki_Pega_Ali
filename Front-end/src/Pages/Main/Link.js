// Constri 

import RedesS from "./NRedes"

function Linkedin() {
    return (
            <div className="nav-item p-3">
                <a id='primeiro' className="text-white pe" target="blank_" href="https://www.instagram.com/buscaki_pegaali/?hl=pt-br">
                    <i className="bi bi-linkedin"></i>    
                </a>
            </div>
    )
}
function Facebook(){
    return(
            <div className="nav-item p-3">
                <a id="bda" className="text-white pe" target="blank_" href="https://www.twitter.com/PlayStation_BR">
                    <i className="bi bi-facebook"></i>    
                </a>
            </div>
    )
}

function Instagram() {
    return(
            <div className="nav-item p-3">
                <a className="text-white pe" target="blank_" href="https://www.instagram.com/buscaki_pegaali/?hl=pt-br">
                    <i id="ursinho" className="bi bi-instagram"></i>    
                </a>
            </div>
    )
}

function Redes() {
    return(
        <div className=" icones mb-4">
            <Linkedin />
            <Facebook />
            <Instagram />
        </div>
    )
}

export default Redes;