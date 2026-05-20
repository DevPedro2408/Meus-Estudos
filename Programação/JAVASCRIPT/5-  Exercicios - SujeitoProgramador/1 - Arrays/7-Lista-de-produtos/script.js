let nomeProduto = document.getElementById("nomeProduto")
let resulPesquisa = document.getElementById("resulPesquisa")
let quantidadeProduto = document.getElementById("quantidade")
let precoProduto = document.getElementById("preco")
let itensContainer = document.querySelector(".itensContainer")
let resul = document.getElementById("resul")

let produtos = JSON.parse(localStorage.getItem("@listaProdutos")) || []

adicionarAoResul()

function adicionar() {
    let nameProduto = nomeProduto.value
    let quantProdutos = Number(quantidadeProduto.value)
    let priceProduto = Number(precoProduto.value)

    let verificarPosicao = produtos.findIndex(elePosicao => {
        return nameProduto.toLowerCase() === elePosicao.nome.toLowerCase()
    })
    // o findIndex ele retonar -1 quando não encontra nada
    
    if (verificarPosicao === -1) {
        produtos.push({nome: nameProduto, quantidade: quantProdutos, preco: priceProduto})
    } else {
        produtos[verificarPosicao].quantidade = quantProdutos
        produtos[verificarPosicao].preco = priceProduto
    } 

    adicionarAoResul()
    salvarDados()
    
    nomeProduto.value = ""
    quantidadeProduto.value = ""
    precoProduto.value = ""
    resulPesquisa.innerHTML = ""
}

function pesquisar() {
    resulPesquisa.innerHTML = ""

    if(!(nomeProduto.value === "")) {
        let pesquisaProduto = produtos.filter(eleFilter => {
            return eleFilter.nome.toLowerCase().includes(nomeProduto.value.toLowerCase())
        })
    
        pesquisaProduto.forEach(elePesquisa => {
            let addElementos = document.createElement("li")
            addElementos.innerHTML = elePesquisa.nome
            addElementos.classList.add("listaPesquisa")
    
            selecionar(addElementos, elePesquisa)
    
            resulPesquisa.appendChild(addElementos)
        })

        resulPesquisa.classList.add("show")
    } else {
        resulPesquisa.classList.remove("show")
        resulPesquisa.innerHTML = ""
    }
}

function selecionar(botaoSelecionar, selecionarNome) {
    botaoSelecionar.addEventListener("click", () => {
        nomeProduto.value = selecionarNome.nome
        quantidadeProduto.value = selecionarNome.quantidade
        precoProduto.value = selecionarNome.preco
        pesquisar()
    })
}

function adicionarAoResul() {
    resul.innerHTML = ""

    if(produtos.length === 0) {
        itensContainer.classList.remove("show")
    } else {
        itensContainer.classList.add("show")
    }

    produtos.forEach(elementos => {
        let addLista = document.createElement("tr")
        let botaoExcluir = document.createElement("button")
        botaoExcluir.setAttribute("class", "btnExcluir")
        botaoExcluir.innerHTML = "x"
        addLista.innerHTML = `<td>${elementos.nome}</td> <td>${elementos.quantidade}</td> <td>${elementos.preco}</td> <td></td>`

        // let btnEditar = document.createElement("")

        excluir(elementos, botaoExcluir)

        resul.appendChild(addLista)
        addLista.lastElementChild.appendChild(botaoExcluir)
    })
}

function excluir(produtosElementos, btnExcluir) {
    btnExcluir.addEventListener("click", () => {
        let produtoExcluido = produtos.indexOf(produtosElementos)
        produtos.splice(produtoExcluido, 1)
        
        adicionarAoResul()
        salvarDados()
    })
}

function salvarDados() {
    localStorage.setItem("@listaProdutos", JSON.stringify(produtos))
}

//OU
// resul.addEventListener("click", () => {

// })