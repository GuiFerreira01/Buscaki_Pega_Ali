import { useState } from 'react';

function RegistrarProduto (){

  var pag = document.getElementById()

  const [nome, setNome] = useState('');
  const [categoria, setCategoria] = useState('');
  const [valor, setValor] = useState('');
  const [desc, setDesc] = useState('');
  const [estoque, setEstoque] = useState('');
  const [ret, setRet] = useState('');
  const [deli, setDeli] = useState('');
  
  const Enviar = async e => {
    e.preventDefault();
    console.log(nome);
    console.log(categoria);
    console.log(valor);
    console.log(desc);
    console.log(estoque);
    console.log(ret);
    console.log(deli);
    
    alert("Testeeee")
  }

  return (
    <div className="RegistroProduto">
    <h1 className="Adicionar-RP">Registre seu produto</h1>
        <div id="row-RP" className="container ">
            <div className="Border-RP m-2">
                <div>                      
                    <form className="row" onSubmit={Enviar}>
                      <div>

                        {/* Nome */}
                        
                        <label className="col-6">
                          <br />
                          <h4 className="RP-Form m-3">Nome do produto:</h4>
                          <div class="input-group px-3">
                              <input type="text" aria-label="First name" onChange={e => setNome(e.target.value)} className="form-control" />
                          </div>                     
                        </label>

                        {/* Categoria */}
                        
                        <label className="col-6">
                          <h4 className="RP-Form m-3">Categoria:</h4>
                          <div class="input-group px-3">
                              <input type="number" aria-label="First name" onChange={e => setValor(e.target.value)} class="form-control" />
                          </div>          
                        </label>

                        {/* Especificações */}
                        
                        <label className="col-12">
                          <h4 className="RP-Form m-3">Especificações:</h4>
                          <div class="input-group px-3">
                              <input type="text" aria-label="First name" onChange={e => setDesc(e.target.value)} class="form-control" />
                          </div>      
                        </label>
                        
                        {/* Descrição */}
                        
                        <label className="col-12">
                          <h4 className="RP-Form m-3">Descrição do produto:</h4>
                          <div className="input-group px-3">
                              <textarea className="form-control RP-Form_desc" onChange={e => setDesc(e.target.value)}></textarea>
                          </div>      
                        </label>
                      </div>
                      
                      {/* select entrega */}
                      <div className="mx-2" style={{width:"98%"}}>
                        <div className="col-12">
                          <h3 className="m-3 mt-5">Opções de entrega:</h3>
                            <select className="form-select form-select-lg" aria-label=".form-select-sm example">
                              <option selected value="">Selecione o tipo de entrega</option>
                              <option value="1">Transporte</option>
                              <option value="2">Retirada</option>
                              <option value="3">Registro em lojas parceiras</option>
                              <option value="4">Transporte e Retirada</option>
                              <option value="5">Todas as opções</option>
                            </select>
                        </div>
                       </div> 

                        {/* Fotos */}

                      <div className="row text-align-center">
                      <div className="align-center d-flex justify-content-center">
                        <h3 className="m-4">Fotos do produto:</h3>  
                      </div>
                        <div className="col-6">
                          <div className="align-center d-flex justify-content-center">
                            <h4 className=" m-4">Foto principal <br /></h4>
                          </div>
                          <div class="input-group m-3">
                            <input type="file" class="form-control" id="inputGroupFile02" multiple="multiple" />
                          </div>
                        </div>
                        <div className="col-6">
                        <div className="align-center d-flex justify-content-center">
                          <h4 className="m-4">Fotos auxiliares <br /></h4>
                        </div>
                            <div  className="input-group m-3 ">
                              <input type="file" class="form-control" id="inputGroupFile02" multiple="multiple" />
                            </div>
                          </div>
                      </div>
                      <button className="Border-RP" type="submit">Enviar</button>
                    </form>
                </div>                    
            </div>
        </div>
    </div> 
  );
}

export default RegistrarProduto;





