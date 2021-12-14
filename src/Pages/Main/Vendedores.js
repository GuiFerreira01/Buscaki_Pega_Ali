import Card from './Card'
import { useState, useEffect } from 'react'
import axios from 'axios'
import CardVendedores from './CardVendedores';


//  Faz o card
function MakeCard({ products, scrollX }){
    console.log("Vendedores.js / 8")
    console.log(products);
    return ( 
        
        products.map((product, index) => {
            console.log(product.id)
            return (
                <CardVendedores 
                    style={{ marginLeft: index === 0 ? scrollX + 'px' : '1%'}} 
                    id={product.id} 
                    nome={product.nome} 
                    image={product.image}
                    email={product.email}
                    desc={product.desc}
                    nivel={product.nivel}
                />
        )})
    );
}

function Vendedores() {

    const [scrollX, setScrollX] = useState(0)
    const [products, setProducts] = useState([]);
    const [filterCategoria, setFilterCategoria] = useState('');

    useEffect(() => {
        fetch('http://localhost:8009/api/Vendedor').then(function (response) {
            return response.json();
        }).then((products) => {
            setProducts(products);
        })
    }, [])

    const handleLeftArrow = () => {
        let tamanhoTela = window.innerWidth * 0.8;
        let quantidadeCards = 5;
        let tamanhoCards = 0.21;

        if(window.innerWidth < 800){
            tamanhoCards = 0.34;
        }
        else if(window.innerWidth < 1200){
            tamanhoCards = 0.25;
        }
        else {
            tamanhoCards = 0.20;
        }
        let listW =  tamanhoTela * tamanhoCards * quantidadeCards;
        let x = scrollX + Math.round(tamanhoTela / 2);
        if(x >= 0) {
            if(scrollX !== 0){
                x = 0;
            }
            else {
                x = ( tamanhoTela - listW )
            }
        }
        
        setScrollX(x)
        console.log(x)
    } 

    const handleRightArrow = () => {
        let tamanhoTela = window.innerWidth * 0.8;
        let quantidadeCards = 5;
        let tamanhoCards = 0.21;
    
         if(window.innerWidth < 800){
            tamanhoCards = 0.34;
        }
        else if(window.innerWidth < 1200){
            tamanhoCards = 0.25;
        }
        else {
            tamanhoCards = 0.20;
        }
        let x = scrollX - Math.round(tamanhoTela / 2);
        let listW =  tamanhoTela * tamanhoCards * quantidadeCards;

        if ((tamanhoTela - listW) > x) {
            if(scrollX !== (tamanhoTela - listW)) {
                x = (tamanhoTela - listW);
            } 
            else {
                x = 0;
            }
        }
        
        setScrollX(x)
        console.log(x)
    }

    return(  
        <div className="center">
            <div className="cards_verdedor" >
                <MakeCard products={products} scrollX={scrollX} />
            </div>
        </div>
    )
}

// Exporta o Card
export default Vendedores;