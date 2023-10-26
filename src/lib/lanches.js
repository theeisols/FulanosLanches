const batatas = [
{
    nome: "Batata com bacon",
    descricao:"Batata frita com queijo cheddar, catupiry e bacon.",
    preco:  5,
    foto: "./img/lanches/batatas/batata-bacon.png"
},
{
    nome: "Batata com calabresa",
    descricao:"Batata frita com queijo cheddar, calabresa e cebolinha.",
    preco:  5,
    foto: "./img/lanches/batatas/batata-calabresa.png"
},
{
    nome: "Batata rústica",
    descricao:"Batata assada com ervas finas.",
    preco:  5,
    foto: "./img/lanches/batatas/batata-rustica.png"
},
{
    nome: "Batata com queijo e salsa",
    descricao:"Batata frita com queijo mussarela ralado e salsa.",
    preco:  5,
    foto: "./img/lanches/batatas/batata-salsa.png"
}
]
  
const bebidas = [
{
    nome: "Refrigerante Coca-cola",
    descricao:"Coca-cola lata 350ml.",
    preco:  3,
    foto: "./img/lanches/bebidas/coca.png"
},
{
    nome: "Refrigerante Kuat",
    descricao:"Kuat lata 350ml.",
    preco:  3,
    foto: "./img/lanches/bebidas/kuat.png"
},
{
    nome: "Refrigerante Schweppes",
    descricao:"Schweppes lata 350ml.",
    preco:  3,
    foto: "./img/lanches/bebidas/schweppes.png"
},
{
    nome: "Refrigerante Sprite",
    descricao:"Sprite lata 350ml.",
    preco:  3,
    foto: "./img/lanches/bebidas/sprite.png"
}
]

const burguers = [
{
    nome: "T-Bone Twist",
    descricao:"Bisteca bovina, molho branco, tomates-cereja grelhados e pão com gergelim.",
    preco:  20,
    foto: "./img/lanches/burguers/hamburguer-1.png"
},
{
    nome: "Ribeye Royale",
    descricao:"Costela bovina, queijo cheddar derretido e cebola frita.",
    preco:  20,
    foto: "./img/lanches/burguers/hamburguer-2.png"
},
{
    nome: "Brisket Bliss",
    descricao:"Carne de peito bovino, tomates, alface e pão com gergelim.",
    preco:  20,
    foto: "./img/lanches/burguers/hamburguer-3.png"
},
{
    nome: "Flank Wonder",
    descricao:"Fraldinha bovina, bacon, cebola frita e queijo mussarela.",
    preco:  20,
    foto: "./img/lanches/burguers/hamburguer-4.png"
}
]

const combos = [
{
    nome: "Combom",
    descricao:"Três hambúgueres acompanhados de calabresa, nuggets e batata frita.",
    preco: 40,
    foto: "./img/lanches/combos/combom.png"
},
{
    nome: "Combomdimai",
    descricao:"Quatro hambúgueres acompanhados de calabresa, nuggets e batata frita.",
    preco: 45,
    foto: "./img/lanches/combos/combomdimai.png"
},
{
    nome: "Combopotência",
    descricao:"Cinco hambúgueres acompanhados de nuggets, batata frita e anéis de cebola.",
    preco: 50,
    foto: "./img/lanches/combos/combopotencia.png"
},
{
    nome: "Umoidicoisa",
    descricao:"Três hamburgueres, dois molhos e porções grandes de batata frita, anéis de cebola e nuggets.",
    preco: 55,
    foto: "./img/lanches/combos/umoidicoisa.png"
}
]

const sobremesas = [
{
    nome: "Brownie",
    descricao:"Fatia grande de brownie.",
    preco:  8,
    foto: "./img/lanches/sobremesas/brownie.png"
},
{
    nome: "Empadinha",
    descricao:"Empada de leite condensado.",
    preco:  2,
    foto: "./img/lanches/sobremesas/empadinhas.png"
},
{
    nome: "Fatia de bolo",
    descricao:"Fatia grande de bolo de chocolate.",
    preco:  10,
    foto: "./img/lanches/sobremesas/fatia-bolo.png"
},
{
    nome: "Palha Italiana",
    descricao:"Palha italiana de chocolate.",
    preco:  3,
    foto: "./img/lanches/sobremesas/palha.png"
}
]

let lanches = {batatas, bebidas, burguers, combos, sobremesas}

export default lanches;