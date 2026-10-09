let prompt = require("prompt-sync")();

let produtos = []
let carrinho = []

let continuar = true

function escolhas() {
    console.log("1 - Listar compras")
    console.log("2 - Buscar produto")
    console.log("3 - Adicionar produto ao carrinho")
    console.log("4 - Remover produto ao carrinho")
    console.log("5 - Alterar quantidade")
    console.log("6 - Ver carrinho")
    console.log("7 - Finalizar compra")
    console.log("8 - Sair")
}

function listarProdutos() {
    produtos.forEach(lista => console.log(lista))
    console.log("Deu certo")
}

function buscarProduto() {
    let produtoBuscado = prompt("Qual produto deseja buscar? ")

    let indiceBusca = produtos.findIndex(elemento => produtoBuscado === elemento.produto)

    if (indiceBusca === -1) {
        console.log("Produto não existe no estoque!!")
    } else {
        console.log(`Produto: ${produtos[indiceBusca].nome}, Quantidade: ${produtos[indiceBusca].quantidade}`)
    }
}

function adicionarProduto() {
    let produtoAdicionado = prompt("Adicionar produto: ")
    let produtoQuantidade = Number(prompt("Quantidade de protudos: "))

    let produtoExistente = produtos.some(ele => produtoAdicionado.toLocaleLowerCase() === ele.nome.toLocaleLowerCase())

    if (produtoExistente === true) {
        console.log(`Produto ${produtoAdicionado} já existe no estoque, adicione outro`)
        adicionarProduto()
    } else {
        produtos.push({produto: produtoAdicionado, quantidade: produtoQuantidade})
        console.log(`Produto ${produtoAdicionado} adicionado ao estoque!`)
    }
}

function adicionarProdutoAoCarrinho() {

}

function removerProduto() {

}

function alterarQuantidade() {

}

function verCarrinho() {

}

function finalizarCompra() {

}

while (continuar === true) {
    escolhas()
    let opcaoEscolhida = Number(prompt("Escolha uma das opções acima: "))

    switch (opcaoEscolhida) {
        case 1:
            listarProdutos()
            break
        case 2:
            buscarProduto()
            break
        case 3:
            adicionarProduto()
            break
        case 4:
            adicionarProdutoAoCarrinho()
            break
        case 5:
            removerProduto()
            break
        case 6:
            alterarQuantidade()
            break
        case 7:
            verCarrinho()
            break
        case 8:
            finalizarCompra()
            break
        case 9:
            continuar = false
            break
        default: 
            console.log("Opção inválida")
    }
}