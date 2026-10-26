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
        console.log(`Produto: ${produtos[indiceBusca].produto}, Quantidade: ${produtos[indiceBusca].quantidade}`)
    }
}

function adicionarProduto() {
    let produtoAdicionado = prompt("Adicionar produto: ")
    let produtoQuantidade = Number(prompt("Quantidade de protudos: "))

    let produtoExistente = produtos.some(ele => produtoAdicionado.toLocaleLowerCase() === ele.produto.toLocaleLowerCase())

    if (produtoExistente === true) {
        console.log(`Produto ${produtoAdicionado} já existe no estoque, adicione outro`)
        adicionarProduto()
    } else {
        produtos.push({produto: produtoAdicionado, quantidade: produtoQuantidade})
        console.log(`Produto ${produtoAdicionado} adicionado ao estoque!`)
    }
}

function adicionarProdutoAoCarrinho() {
    let addAoCarrinho = prompt("Qual produto deseja adicionar ao carrinho: ")
    let addAoCarrinhoQuantidade = Number(prompt("Quantidade de produtos: "))

    let indiceProduto = produtos.findIndex(elements => addAoCarrinho.toLocaleLowerCase() === elements.toLocaleLowerCase())

    if (indiceProduto === -1) {
        console.log(`Produto ${addAoCarrinho}, não encontrado no estoque`)
    } else {
        if (produtos[indiceProduto].quantidade < addAoCarrinhoQuantidade) {
            console.log("Quantidade de produtos insuficiente")
        } else {
            console.log(`Produto ${addAoCarrinho}, adicionado ao carrinho!`)
            
        }

    }
}

function removerProduto() {
    let produtoRemover = prompt("Qual produto deseja remover:")

    let indiceRemovido = produtos.findIndex(elements => produtoRemover.toLocaleLowerCase() === elements.toLocaleLowerCase())

    if (indiceRemovido === -1) {
        console.log(`Produto ${produtoRemover} não encontrado`)
    } else {
        console.log(`${produtoRemover} Removido do estoque`)
        produtos.splice(indiceRemovido, 1)
    }
}

function removerProdutoDoCarrinho() {
    let produtoRemover = prompt("Qual produto deseja remover do carrinho:")

    let indiceRemovido = carrinho.findIndex(elements => produtoRemover.toLocaleLowerCase() === elements.toLocaleLowerCase())

    if (indiceRemovido === -1) {
        console.log(`Produto ${produtoRemover} não encontrado`) 
    } else {
        produtos.splice(indiceRemovido, 1)
        console.log(`${produtoRemover} Removido do estoque`)
    }
}

function alterarQuantidade() {
    let produtoAlterado  = prompt("Qual produto deseja alterar a quantidade: ")
    
    let indiceQuantidade = produto.findIndex(elements => produtoAlterado.toLocaleLowerCase() === elements.toLocaleLowerCase())
    
    if (indiceRemovido === -1) {
        console.log(`Produto ${produtoAlterado} não encontrado`) 
    } else {
        let quantidadeAlterada= prompt(Number("Nova quantidade: "))

        produtos[indiceQuantidade].quantidade = quantidadeAlterada
        console.log(`Quantidade do produto alterado com sucesso!!!`)
    }
}

function verCarrinho() {
    console.log(carrinho)
}

function finalizarCompra() {
    console.log("Compras finalizadas!")
    for (let i = 0;i < carrinho.length;i++) {
        console.log(`${carrinho[i].nome} ${carrinho[i].quantidade}\n`)
    }
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
            removerProdutoDoCarrinho()
            break
        case 7:
            alterarQuantidade()
            break
        case 8:
            verCarrinho()
            break
        case 9:
            finalizarCompra()
            break
        case 10:    
            continuar = false
            break
        default: 
            console.log("Opção inválida")
    }
}