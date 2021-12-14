

function Banner(){
    return (
        <div className="bannersize mt-3 container-fluid banner-bg">
            <div className="container">
                <div className="row bannerimg">
                    <div className="col-12 col-md-12 col-lg-6 bannerimg">
                        <img  className="" src="/static/media/logo-branca.c3ade16e.png" alt="" />
                    </div>
                    <div className=" col-12 col-md-12 col-lg-6">
                        <div className="text-white bannerimg">
                            <div className="texto-banner pa">
                                <h1 className="pt-5">Este é o melhor site  de vendas do Brasil </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}

// Exporta o Banner pronto
export default Banner;