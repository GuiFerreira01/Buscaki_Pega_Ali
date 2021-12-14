
import Card from './Card_pesquisa'

function Cartaozin(){
    const cardsMain = [
        {
            "id": 1,
            "img": "https://static.lojanba.com/produtos/camiseta-nike-fran-swoosh-masculina/14/HZM-3651-014/HZM-3651-014_zoom1.jpg?ts=1585331283",
            "title": "Camiseta Nike - Branco",
            "value": "17"
        },
        {
            "id": 2,
            "img": "https://images.lojanike.com.br/1024x1024/produto/camiseta-nike-sportswear-just-do-it-masculina-AR5006-010-1-11627568092.jpg",
            "title": "Camiseta NIKE preta",
            "value": "16"
        },
        {
            "id": 3,
            "img": "https://cdnv2.moovin.com.br/atitudeesportes/imagens/produtos/det/camiseta-nike-miler-e9aea247ead4cc55a54f0c43bc8ba868.jpg",
            "title": "Camiseta Nike Miler Azul",
            "value": "15"
        },
        {
            "id": 4,
            "img": "https://cdnv2.moovin.com.br/atitudeesportes/imagens/produtos/det/camiseta-nike-miler-e9aea247ead4cc55a54f0c43bc8ba868.jpg",
            "title": "Camiseta Nike Miler",
            "value": "1000"
        },
        {
            "id": 5,
            "img": "https://cdnv2.moovin.com.br/atitudeesportes/imagens/produtos/det/camiseta-nike-miler-e9aea247ead4cc55a54f0c43bc8ba868.jpg",
            "title": "Camiseta Nike Miler laranja",
            "value": "1000"
        },
        {
            "id": 6,
            "img": "https://cdnv2.moovin.com.br/atitudeesportes/imagens/produtos/det/camiseta-nike-miler-e9aea247ead4cc55a54f0c43bc8ba868.jpg",
            "title": "Camiseta Nike Miler laranja",
            "value": "1000"
        },
        {
            "id": 7,
            "img": "https://cdnv2.moovin.com.br/atitudeesportes/imagens/produtos/det/camiseta-nike-miler-e9aea247ead4cc55a54f0c43bc8ba868.jpg",
            "title": "Camiseta Nike Miler laranja",
            "value": "1000"
        },
        {
            "id": 8,
            "img": "https://cdnv2.moovin.com.br/atitudeesportes/imagens/produtos/det/camiseta-nike-miler-e9aea247ead4cc55a54f0c43bc8ba868.jpg",
            "title": "Camiseta Nike Miler laranja",
            "value": "1000"
        },
        {
            "id": 9,
            "img": "https://cdnv2.moovin.com.br/atitudeesportes/imagens/produtos/det/camiseta-nike-miler-e9aea247ead4cc55a54f0c43bc8ba868.jpg",
            "title": "Camiseta Nike Miler laranja",
            "value": "1000"
        },
        {
            "id": 10,
            "img": "https://cdnv2.moovin.com.br/atitudeesportes/imagens/produtos/det/camiseta-nike-miler-e9aea247ead4cc55a54f0c43bc8ba868.jpg",
            "title": "Camiseta Nike Miler laranja",
            "value": "1000"
        },
        {
            "id": 11,
            "img": "https://cdnv2.moovin.com.br/atitudeesportes/imagens/produtos/det/camiseta-nike-miler-e9aea247ead4cc55a54f0c43bc8ba868.jpg",
            "title": "Camiseta Nike Miler laranja",
            "value": "1000"
        },
        {
            "id": 12,
            "img": "https://cdnv2.moovin.com.br/atitudeesportes/imagens/produtos/det/camiseta-nike-miler-e9aea247ead4cc55a54f0c43bc8ba868.jpg",
            "title": "Camiseta Nike Miler laranja",
            "value": "1000"
        },
        {
            "id": 13,
            "img": "https://cdnv2.moovin.com.br/atitudeesportes/imagens/produtos/det/camiseta-nike-miler-e9aea247ead4cc55a54f0c43bc8ba868.jpg",
            "title": "Camiseta Nike Miler laranja",
            "value": "1000"
        },
        {
            "id": 14,
            "img": "https://cdnv2.moovin.com.br/atitudeesportes/imagens/produtos/det/camiseta-nike-miler-e9aea247ead4cc55a54f0c43bc8ba868.jpg",
            "title": "Camiseta Nike Miler laranja",
            "value": "1000"
        }
    ]
    return ( 
        cardsMain.map(cardMain=>(
            <div className="col-3">
                <Card key={cardMain.id} mg={cardMain.value} alt={cardMain.title} img={cardMain.img} title={cardMain.title} value={cardMain.value}  />
            </div>
        ))
    )
};

export default Cartaozin;