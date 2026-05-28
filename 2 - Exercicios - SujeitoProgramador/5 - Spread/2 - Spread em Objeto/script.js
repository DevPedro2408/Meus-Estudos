let produtos = {
    nome: "Mouse",
    preco: 35
}

let novoProduto = {
    ...produtos,
    estoque: 10
}

console.log(novoProduto)