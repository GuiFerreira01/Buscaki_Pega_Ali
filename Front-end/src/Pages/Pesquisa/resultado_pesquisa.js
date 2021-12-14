// filtro para mostrar os resultados

function Filtro (){

    return(
        <div class="container">
            <h2 class="py-4">
                Resultados para "Celular"
            </h2>
            <div class="row mb-4">
                <div class="col-4">
                    <form action="/action_page.php">
                        <label class="h4" for="cars">Ordenar por:</label>
                        <select id="cars" name="cars">
                            <option value="volvo" >Menor preço</option>
                            <option value="saab">Maior preço</option>
                            <option value="fiat">Melhores vendedores</option>
                            <option value="audi">Mais vendidos</option>
                        </select>
                    </form>
                </div>

                <div class="col-4">
                    <p class="h4">100 produtos</p>
                </div>
            </div>         
        </div>
    )
}

export default Filtro;