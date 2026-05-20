const produtos = [
    { nome: "hamburguer", preco: 25 },
    { nome: "Batata", preco: 18 },
    { nome: "Refrigerante", preco: 8},
    { nome: "Milkshake", preco: 10}
]

let produtosFiltrados = produtos.filter(p => p.preco >= 10)

console.log(produtosFiltrados)