let produtos = [
    { nome: "Hamburguer", entregue: false},
    { nome: "Batata", entregue: false},
    { nome: "Refrigerante", entregue: true}
]

let verificarEntrega = produtos.filter(ele => ele.entregue === false)

verificarEntrega.map(el => console.log(`${el.nome} ainda não foi entregue`))