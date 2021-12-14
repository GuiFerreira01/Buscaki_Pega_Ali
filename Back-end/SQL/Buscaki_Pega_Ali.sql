-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 14, 2021 at 12:49 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 7.4.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Buscaki_Pega_Ali`
--

-- --------------------------------------------------------

--
-- Table structure for table `avaliacao`
--

CREATE TABLE `avaliacao` (
  `id_avaliacoes` int(11) NOT NULL,
  `avaliacoes` varchar(255) DEFAULT NULL,
  `id_produto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `avaliacao`
--

INSERT INTO `avaliacao` (`id_avaliacoes`, `avaliacoes`, `id_produto`) VALUES
(1001, 'Bom', 104),
(1002, 'Excelente', 103),
(1003, 'Amei', 100);

-- --------------------------------------------------------

--
-- Table structure for table `categoria`
--

CREATE TABLE `categoria` (
  `id_categoria` int(11) NOT NULL,
  `tipos_produto` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categoria`
--

INSERT INTO `categoria` (`id_categoria`, `tipos_produto`) VALUES
(1, 'Alimento'),
(2, 'Videogame'),
(3, 'Notebook'),
(4, 'Celular'),
(5, 'Camiseta');

-- --------------------------------------------------------

--
-- Table structure for table `cliente`
--

CREATE TABLE `cliente` (
  `id_cliente` int(11) NOT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `senha` varchar(255) DEFAULT NULL,
  `cep` int(11) DEFAULT NULL,
  `endereco` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cliente`
--

INSERT INTO `cliente` (`id_cliente`, `nome`, `email`, `senha`, `cep`, `endereco`) VALUES
(1, 'Camille de Oliveira', 'camille.oliveira@senacsp.edu.br', 'camille123', 69903349, 'Rua das Flores Floridas, 201, Rosa, SP'),
(2, 'Brenda Pereira', 'brenda.pmamede@senacsp.edu.br', 'brenda123', 94430010, 'Rua Gente Boa, 789, Beleza, SP'),
(3, 'Jean Carlos', 'jean.clsilva4@senacsp.edu.br', 'jean123', 12701350, 'Rua dos Manos, 345, São Paulo, SP');

-- --------------------------------------------------------

--
-- Table structure for table `compra`
--

CREATE TABLE `compra` (
  `ID_COMPRA` int(11) NOT NULL,
  `VALOR` int(11) DEFAULT NULL,
  `data` date DEFAULT NULL,
  `PAGAMENTO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `compra`
--

INSERT INTO `compra` (`ID_COMPRA`, `VALOR`, `data`, `PAGAMENTO`) VALUES
(10001, 72, '2021-11-29', 'boleto'),
(10002, 4985, '2021-11-26', 'crédito(parcelado)'),
(10003, 2400, '2021-12-12', 'crédito(à vista)');

-- --------------------------------------------------------

--
-- Table structure for table `item_compra`
--

CREATE TABLE `item_compra` (
  `id_item` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `item_compra`
--

INSERT INTO `item_compra` (`id_item`) VALUES
(200),
(201),
(202);

-- --------------------------------------------------------

--
-- Table structure for table `paravc`
--

CREATE TABLE `paravc` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `categoria` varchar(255) DEFAULT NULL,
  `valor` float(10,3) DEFAULT NULL,
  `descricao` varchar(255) DEFAULT NULL,
  `estoque` int(11) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `paravc`
--

INSERT INTO `paravc` (`id`, `nome`, `categoria`, `valor`, `descricao`, `estoque`, `image`) VALUES
(100, 'Xbox Series S ', 'Games', 2.112, 'Todas as informações divulgadas são de responsabilidade do fabricante/fornecedor.', 200, '/static/media/xbox.61ff09d6.png'),
(101, 'PlayStation 5 \n\n', 'Games', 6.789, 'Desfrute do carregamento extremamente rápido com o SSD de altíssima velocidade, uma imersão mais profunda com suporte a feedback tátil, gatilhos adaptáveis e áudio 3D, além de uma geração inédita de jogos incríveis para PlayStation®️\r\n', 900, '/static/media/ps.52d82c0f.png'),
(102, 'Inspiron 5400', 'Games', 4.879, 'Intel® Core™ i7-1165G7 (2.8 GHz até 4.7 GHz, cache de 12MB, quad-core, 11ª geração)\r\nWindows 11 Home Single Language, Português\r\nPlaca de vídeo Intel® Iris® Xe com memória gráfica compartilhada\r\n', 90, '/static/media/Inspiron_5400.e6e376c8.jpg'),
(103, 'Computador Gamer Proteus', 'Notebook', 2.678, '- Intel Core i3-10100F, 4-Core, 8-Threads, 3.6Ghz (4.3Ghz Turbo), Cache 6MB, LGA1200, BX8070110100F\r\nCooler\r\n- Cooler BOX Original Intel (Processadores K e X não suportam cooler box)\r\nPlaca mãe\r\n', 150, '/static/media/computador.80331235.jpg'),
(104, 'Guarda Roupa Com Espelho', 'Moveis', 1.099, 'Guarda-Roupa Casal 3 Portas e 4 Gavetas Veneza Luxo - Rufato - O Guarda-Roupa Veneza Luxo da Rufato conta com um amplo espaço interno, possui 3 portas de correr com trilho inferior em alumínio, 4 gavetas com corrediças metálicas fim de curso. ', 20, '/static/media/Guarda-roupa_1.01796c52.webp'),
(105, 'Nintendo Switch', 'Games', 2.150, 'Modelo com bateria estendida; duração varia de acordo com os jogos ou aplicações utilizados; com The Legend of Zelda: Breath of the Wild, por exemplo, a bateria dura aproximadamente 5, 5 horas\r\nSuporta 3 tipos diferentes de jogabilidade: Modo TV, Modo sup', 239, '/static/media/Switch.656ce39d.png'),
(106, 'Painel Para TV', 'Moveis', 751.000, 'DETALHAMENTO: Estrutura: Material da Estrutura: MDP Possui Sapatas? Não Pés com regulagem de altura? Não Espessura do Tampo (mm): 12 Escala de Brilho: Fosco Instalação: Como os Móveis Chegarão na Minha Casa: Desmontados, em caixas, acompanhados de todas a', 34, '/static/media/118689_1.8cbdf716.jpg'),
(107, 'Roupeiro 6 Portas', 'Moveis', 1.533, 'Pintura Texturizada\r\nSemi Brilho\r\nPuxador de Madeira\r\n5 Prateleiras\r\nCorrediças Telescópicas\r\nGaveta com fundo reforçado em madeira\r\n6 Portas de Abrir\r\nO lindo Guarda-Roupa Bahia é feito em 100% MDF, com estrutura em chapas reforçadas 15mm. Com 6 portas d', 57, '/static/media/roupeiro_6_portas_2_gavetas_s736_kappesberg_texturizado_nat_1566724940_260b_600x600.1e393ded.jpg'),
(108, 'Guarda Roupa 3 Portas', 'Moveis', 987.000, 'Os objetos que ambientam as fotos não acompanham o produto.\r\nNão disponibilizamos a montagem do produto.\r\nVerifique as dimensões do produto e certifique-se que o percurso que ele fará até o local de uso permite sua passagem.\r\nGuarda-Roupa Casal 3 Portas e', 21, '/static/media/3portas.7e6b7594.png'),
(109, 'Beliche Cor Branco', 'Moveis\r\n', 770.000, 'Beliche Bahia cor Branco Lavado A Beliche Bahia – Abs Atacadista é ideal para que o seu dia comece bem, após uma excelente noite de sono. Linda e versátil, ela pode ser combinada com diversos estilos de móveis, tornando seu dormitório muito mais prático e', 16, '/static/media/beliche.51f336de.jpg'),
(110, 'Batedeira', 'Eletroeletrônicos', 1.991, 'Sua tigela é em aço inoxidável com capacidade para 4,8 litros.\r\nCorpo todo de metal vermelho.\r\nFácil de usar e de limpar.\r\nA Batedeira Stand Mixer é ideal para quem tem a cozinha como ambiente de trabalho, já que é adorada por chefs no mundo todo. Com alt', 49, '/static/media/BAT401-01.925f4982.jpg'),
(111, 'Jogo de Panelas 7 Peças', 'Cozinha', 875.000, '1 Frigideira 20 cm 0,8 L\r\n1 Frigideira Reta 22 cm 1,7 L\r\n1 Caçarola 20 cm 2,9 L\r\n1 Caçarola 22 cm 3,8 L\r\n1 Panela 16 cm 1,5 L\r\n1 Panela 18 cm 2,1 L\r\nProduto Em alumínio revestido com antiaderente Starflon T1 interno e externo, proporcionam cozimento unifo', 77, '/static/media/7b757b2b77a8917ea747d274880c1100.6b00192a.jpg'),
(112, 'Torneira de Mesa', 'Cozinha', 609.000, 'ou R$ 619,95 em até 8x sem juros\r\nCom Nota fiscal.\r\nAnalisem meu perfil e qualificações positivas;.\r\nTodos os produtos são novos;.\r\nTemos todos os produtos anunciados a pronta entrega;.\r\nNosso envio é imediato e pode ser acompanhado através dos detalhes d', 29, '/static/media/Torneira-de-mesa-para-cozinha-Flex-1177-C27-black-Lorenzetti.2be10093.jpg'),
(113, 'Motorola Moto G10', 'Celular', 953.000, 'Para quem procura um celular funcional, de bom desempenho e que não precise de carga a todo momento, o Moto G10 é um aparelho que vai de atender perfeitamente. Para começar o Moto G10 conta com um processador Snapdragon 460 Octa Core, com 4 GB de RAM e 64', 70, '/static/media/Motorola.ec6a0a50.jpg'),
(114, 'iPhone 13 Pro Max', 'Celular', 9.988, 'ou R$10.030 em até 15x sem juros \r\niPhone 13 Pro Max. O maior upgrade do sistema de câmera Pro até hoje. Tela Super Retina XDR com ProMotion para uma experiência mais rápida e responsiva. Chip A15 Bionic com velocidade impressionante. 5G ultrarrápido*. De', 102, '/static/media/iphone1.ff7aa2a4.png'),
(115, 'Tênis Tesla Skate', 'Moda', 189.000, 'Pra ter certeza do tamanho recomendamos tirar a medida da palmilha de um tênis que você usa, se tiver dúvida nos contate.\r\n\r\nPalmilha: 34-22,5 cm / 35 - 23,3 cm / 36 - 24 cm / 37 - 24,9 cm / 38 - 25,5 cm / 39 - 26 cm / 40 - 26,5 cm  / 41 - 27 cm / 42 - 27', 42, '/static/media/2021-06-01_20_.b7d8a44f.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `produto`
--

CREATE TABLE `produto` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `categoria` varchar(255) DEFAULT NULL,
  `valor` float(10,3) NOT NULL,
  `descricao` varchar(255) DEFAULT NULL,
  `estoque` int(11) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `produto`
--

INSERT INTO `produto` (`id`, `nome`, `categoria`, `valor`, `descricao`, `estoque`, `image`) VALUES
(100, 'Console Nintendo Switch', 'Videogame', 2.672, 'Adquira o console de videogames que lhe possibilita jogar seus jogos favoritos, onde você quiser e da maneira que preferir. O Nintendo Switch foi desenvolvido para fazer parte da sua vida, transformando-se de um console doméstico em um console portátil nu', 163, '/static/media/Switch.656ce39d.png'),
(101, 'iPhone 13 Pro Max ', 'Celular', 1.486, 'É todo Pro.\r\nTela Super Retina XDR com ProMotion, para uma experiência fluida\r\ne responsiva. Um upgrade dramático no sistema de câmera e no que você pode fazer com ele. Design com resistência fora de série. Chip A15 Bionic ultrarrápido. E duração de bater', 100, '/static/media/iphone1.ff7aa2a4.png'),
(103, 'Notebook Vaio', 'Notebook', 2.634, 'Notebook Vaio FE15: Empodere seu mundo.\r\n\r\nO Notebook Vaio FE15 apresenta um novo design, ultracompacto, ultraleve e minimalista. Com dimensões reduzidas, foi projetado detalhadamente para ser facilmente transportado e apreciado.\r\n\r\nAlém disso, ele está d', 150, '/static/media/vaio.03569870.png'),
(104, 'Motorola Moto G10', 'Celular', 1.893, 'Para quem procura um celular funcional, de bom desempenho e que não precise de carga a todo momento, o Moto G10 é um aparelho que vai de atender perfeitamente. Para começar o Moto G10 conta com um processador Snapdragon 460 Octa Core, com 4 GB de RAM e 64', 20, '/static/media/Motorola.ec6a0a50.jpg'),
(105, 'TÊNIS OLD SKOOL - Vans', 'Moda', 254.000, 'O tênis Classic Old Skool, o clássico tênis de skate da Vans e o primeiro a conter a icônica sidestripe na lateral, é um tênis de cano baixo com cadarço que possui cabedal de tecido e camurça resistente, biqueiras reforçadas para suportar o desgaste por r', 348, '/static/media/Tenis.f7a61a75.jpg'),
(106, 'Tênis Converse All Star', 'Moda', 166.000, 'Tênis Converse tradicional de cano baixo, confeccionado em tecido de algodão tipo lona. Nova versão da antiga referencia do CT114. A quantidade de passadores (ilhoses) pode variar conforme o tamanho do tênis. O modelo Core e/ou Seasonal é o mais tradicion', 334, '/static/media/tenis-converse-all-star.870fbeca.jpg'),
(107, 'BONÉ NOOK VANS', 'Moda', 111.000, 'Boné de skatista da vans preto', 101, '/static/media/Bone.8915acbc.jpg'),
(108, 'Mochila Bobby Original', 'Acessórios', 91.000, 'A verdadeira mochila antifurto', 101, '/static/media/Mochila.831d2fca.jpeg'),
(109, 'Creme de Avelã Nutella 650g', 'Alimento', 28.000, 'Independentemente do tipo de receita doce que pretende fazer, o pote de Nutella 650 g é ideal para deixar tudo mais saboroso. A textura cremosa se mistura ao sabor marcante, formando um dos cremes de avelãs mais conhecidos em todo o mundo.', 457, '/static/media/nutella.09b263f2.jpg'),
(110, 'Fantasia Homem-aranha', 'Moda', 123.000, 'tecido é feito de poliéster e elastano, é elástico.\r\nA máscara está incluída no pacote, é separada do macacão, você pode tirá-la.\r\nOlhe para fora ao usar esta máscara.', 19, '/static/media/Hoem-aranha.c4836b76.webp'),
(111, 'Cesta de Natal VISCONTI', 'Alimento', 69.000, 'A Cesta de Natal Grande da Visconti é composta por:\r\n\r\n1 Embalagem Cesta Visconti Grande\r\n3 Cookies 60g\r\n2 Bolinho 35g\r\n1 Panettone de Frutas 400g\r\n1 Panettones de Gotas 400g\r\n1 Biscoito Amanteigado 335g\r\n2 Torrada 120g\r\n2 Wafer 120g\r\n1 Biscoito Recheado ', 34, '/static/media/Natal.28d19498.jpg'),
(112, 'Chinelo Hut™', 'Moda', 109.000, 'CabanaHut O autêntico Chinelo Hut Chinelo Nuvem Sensação mágica e única de pisar nas nuvens O Chinelo Hut foi testado e aprovado para aliviar as dores nos pés e pernas. CUIDADO COM IMITAÇÕES O Cabana Hut não se responsabiliza por compras de réplicas e imi', 122, '/static/media/Chinelo.c133fc51.jpeg'),
(113, 'Máquina de lavar roupa', 'Eletrodomésticos', 2.098, 'A nova Máquina de Lavar Brastemp 12kg conta com Design moderno e exclusivo e a alta Performance do Ciclo Tira-Manchas Advanced para retirar mais de 40 manchas*, incluindo gordura e canetinha. E para o máximo Cuidado com suas Roupas, a lavadora possui o Ci', 124, '/static/media/Lavadora-Brastemp-BWN15AT-Frontal-1.cc9fa25a.jpg'),
(114, 'Fritadeira Elétrica Airfryer', 'Eletrodomésticos', 154.000, 'A inovação que transformou a vida de milhares de brasileiros, promovendo uma alimentação mais saudável e gostosa para o dia a dia das famílias, acaba de chegar em uma edição PREMIUM!\r\n\r\nConheça a Fritadeira Elétrica Airfryer Black Edition PHILIPS WALITA! ', 67, '/static/media/ad7ce9bcd24da6c1dd6caea67cc45a1b.0ae44277.jpeg'),
(115, 'Kit Malbec', 'Beleza', 111.000, 'Kit Malbec Desodorante Colônia 50ml + Desodorante Antitranspirante Aerossol 31g + Sabonete Líquido Corporal 75ml\r\nO Kit Malbec é combinação ideal para homens que não abrem mão de se cuidar, e assim, deixar sua marca. \r\n\r\n\r\n\r\nO Malbec Desodorante Colônia 5', 29, '/static/media/kit.0a5ecb66.jpg'),
(116, 'Camiseta Nike', 'Moda', 79.000, 'Camisa Original da Nike pelo melhor preço do mercado.', 123, '/static/media/camiseta-nike-sportswear-just-do-it-masculina-AR5006-010-1-11627568092.fc06a0c5.png');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` bigint(20) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `vendedor`
--

CREATE TABLE `vendedor` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `desc` varchar(255) NOT NULL,
  `senha` varchar(255) DEFAULT NULL,
  `cpf_cnpj` varchar(255) DEFAULT NULL,
  `nivel` varchar(255) DEFAULT NULL,
  `image` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `vendedor`
--

INSERT INTO `vendedor` (`id`, `nome`, `email`, `desc`, `senha`, `cpf_cnpj`, `nivel`, `image`) VALUES
(0, 'Guilherme Bodra', 'guilherme.bguimaraes@senacsp.edu.br', 'Vendedor de ventilador', 'profgui', '91380156840', 'Ouro', 'data:image/jpeg;base64,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'),
(2, 'Wesley Linares', 'wesley.llima@senacsp.edu.br', 'Vendedor de peruca', 'profwesley', '05608964845', 'Ouro', '/static/media/wesley.d0d51aa6.jpeg'),
(3, 'Aurora Seles', 'aurora.maseles@senacsp.edu.br', 'Vendedora de livros', 'profaurora', '52321673834', 'Ouro', '/static/media/aurora.09a082d8.jpg'),
(4, 'Adriana Neves', 'adriana.pneves@senacsp.edu.br', 'Vendedora de pão de queijo', 'profadriana', '83160194850', 'Ouro', 'data:image/jpeg;base64,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');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `avaliacao`
--
ALTER TABLE `avaliacao`
  ADD PRIMARY KEY (`id_avaliacoes`);

--
-- Indexes for table `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id_categoria`);

--
-- Indexes for table `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`id_cliente`);

--
-- Indexes for table `compra`
--
ALTER TABLE `compra`
  ADD PRIMARY KEY (`ID_COMPRA`);

--
-- Indexes for table `item_compra`
--
ALTER TABLE `item_compra`
  ADD PRIMARY KEY (`id_item`);

--
-- Indexes for table `paravc`
--
ALTER TABLE `paravc`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `produto`
--
ALTER TABLE `produto`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vendedor`
--
ALTER TABLE `vendedor`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cliente`
--
ALTER TABLE `cliente`
  MODIFY `id_cliente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `paravc`
--
ALTER TABLE `paravc`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=116;

--
-- AUTO_INCREMENT for table `produto`
--
ALTER TABLE `produto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=117;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
