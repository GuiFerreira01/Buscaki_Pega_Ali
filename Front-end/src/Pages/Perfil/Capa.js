import fotoPerfil from '../../img/perfil.jpg'


function Capa(){
    return(
      <div>
          <div className="container-fluid">
              <div className="row">
                  <div>
                      <img src="https://marketplace.canva.com/EAD5DdSyaYI/1/0/1600w/canva-respira%C3%A7%C3%A3o-facebook-capa-EF9hf0DORFc.jpg" class="j-capa" alt="" />
                  </div>
                  <div className="col-lg-2 col-12">
                      <img src={fotoPerfil} className="j-avatar" alt="" />
                  </div>
                  <div className="col-xxl-10 col-xl-10  col-lg-10">
                      <div className="row text-center">
                        <h3 className="col-xxl-6 col-xl-6  col-lg-6 col-md-12 col-sm-12">
                            Marileide Soares Cunha
                        </h3>
                        <h4 className="col-xxl-6 col-xl-6  col-lg-6 col-md-3 col-sm-6">
                            Ouro <i className="bi bi-star"></i>
                        </h4>
                        <h5 className="col-xxl-4 col-xl-4  col-lg-4 col-md-3 col-sm-6">
                            Pagina Principal
                        </h5>
                        <h5 className="col-xxl-4 col-xl-4  col-lg-4 col-md-3 col-sm-6">
                            Todos os Produtos
                        </h5>
                        <h5 className="col-xxl-4 col-xl-4  col-lg-4 col-md-3 col-sm-6">
                            Avaliações
                        </h5>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
}

export default Capa







{/* CSS */}

{/* 
@media (max-width: 576px){
        .j-col-s{
          flex: 0 0 auto;
          width: 41.7%
        }
        .j-avatar{
          width: 180px;
          height: 180px;
          border-radius: 50%;
          border: solid white 5px;
          margin-top: -85px;
          margin-left: 31.7%;
        }
      }
      @media (min-width: 576px){
        .j-col-sm{
          flex: 0 0 auto;
          width: 42.8%
        }
        .j-avatar{
          width: 180px;
          height: 180px;
          border-radius: 50%;
          border: solid white 5px;
          margin-top: -85px;
          margin-left: 33%;
        } 
      }
      @media (min-width: 768px){
        .j-col-md{
          flex: 0 0 auto;
          width: 28%
        }
        .j-avatar{
          width: 180px;
          height: 180px;
          border-radius: 50%;
          border: solid white 5px;
          margin-top: -85px;
          margin-left: 40%;
        }
      }
      @media (min-width: 992px){
        .j-col-lg{
          flex: 0 0 auto;
          width: 20.9%;
        }
        .j-avatar{
          width: 160px;
          height: 160px;
          border-radius: 50%;
          border: solid white 5px;
          margin-top: -85px;
          margin-left: 31.7%;
        }
      }
      @media (min-width: 1200px){
        .j-col-xl{
          flex: 0 0 auto;
          width: 21.6%;
        }
        .j-avatar{
          width: 180px;
          height: 180px;
          border-radius: 50%;
          border: solid white 5px;
          margin-top: -85px;
          margin-left: 31.7%;
        }
      }
      @media (min-width: 1400px){
        .j-col-xxl{
          flex: 0 0 auto;
          width: 21.8%;
        }
      }
    .j-margin-left-2{
      margin-left: 25px;
    }
    .j-margin-right-2{
      margin-right: 25px;
    }
    .j-margin{
      margin: 30px;
    }
    .j-icone-frete{
      font-size: 20px;
    }
    .j-descriçao{
      font-size: 15px;
      text-decoration: none;
    }
    .j-button{
      padding-left: 35px;
      padding-right: 35px;
      padding-top: 15px;
      padding-bottom: 15px;
    }
    .j-boxshadow{
      box-shadow: -1px 5px 19px 3px rgba(0,0,0,0.40);
      border-radius: 15px 15px 15px 15px;
    }
    .j-img-produto{
      margin: 10px;
    }
    .j-border{
      border: solid cyan;
      border-radius: 15px 15px 15px 15px;
    }
    .j-pointer{
      cursor: pointer;
    }
    .j-img{
      width: 100%;
    }
    .j-capa{
      width: 100%;
      height: 350px;
      border: solid;
    }
    .j-col-3{
      flex: 0 0 auto;
      width: 21.8%;
    } 
*/}