let nomeProduto = document.getElementById("nomeProduto")
let preco = document.querySelector("#preco")
let categoria = document.getElementById("categoria")
let quantidadeEstoque = document.getElementById("quantidadeEstoque")
let inputs = document.querySelectorAll(".inputs")

let produtos = []

function adicionarProduto() {
    let precoValue = Number(preco.value)
    let quantidadeEstoqueValue = Number(quantidadeEstoque.value)

    produtos.push({
        nome: nomeProduto.value,
        preco: precoValue,
        categoria: categoria.value,
        estoque: quantidadeEstoqueValue
    })

    inputs.forEach(elements => elements.value = "")

    
}

