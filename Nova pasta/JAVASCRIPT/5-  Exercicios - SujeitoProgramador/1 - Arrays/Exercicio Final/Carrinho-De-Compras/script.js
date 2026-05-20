let produtos = document.getElementById("produtos")
let resulCarrinho = document.getElementById("resulCarrinho")
let resulTotal = document.getElementById("resulTotal")

let arrayProdutos = [
    {nome: "Arroz 1kg", preco: 10},
    {nome: "Feijão 2kg", preco: 17},
    {nome: "Uva", preco: 12},
    {nome: "Batata 1kg", preco: 8},
    {nome: "Peito de Frango 1kg", preco: 19.80}
]

let carrinho = []

arrayProdutos.forEach(elementos => {
    let addProdutosALista = document.createElement("li")
    let botaoAdicionar = document.createElement("button")
    addProdutosALista.classList.add("listaProdutos")
    botaoAdicionar.classList.add("btnAdicionar")
    
    addProdutosALista.innerHTML = `${elementos.nome}: R$${elementos.preco}`
    botaoAdicionar.innerHTML = "Adicionar"

    botaoAdicionar.addEventListener("click", () => {
        if (resulCarrinho.classList.contains("resulCarrinhoShow")) {
            resulCarrinho.innerHTML = ""
            carrinho.push(elementos)
    
            atualizarCarrinho()
        } else {
            resulCarrinho.classList.add("resulCarrinhoShow")
            resulCarrinho.innerHTML = ""
            carrinho.push(elementos)
    
            atualizarCarrinho()
        }
    })


    produtos.append(addProdutosALista, botaoAdicionar)
})

function atualizarCarrinho() {
    carrinho.forEach(eleAtuali => {
        let addResul = document.createElement("li")
        addResul.innerHTML = `${eleAtuali.nome}: R$${eleAtuali.preco}`
        addResul.classList.add("listaCarrinho")

        resulCarrinho.appendChild(addResul)
        
        let total = carrinho.reduce((acumulador, valorTotal) => {
            return acumulador + valorTotal.preco
        }, 0)

        resulTotal.innerHTML = `Total: ${total.toFixed(2)}`
    })
}