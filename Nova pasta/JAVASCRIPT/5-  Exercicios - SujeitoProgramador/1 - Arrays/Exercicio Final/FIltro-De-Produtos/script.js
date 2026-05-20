let inputProdutos = document.getElementById("inputProdutos")
let addAListaProdutos = document.getElementById("addAListaProdutos")
let listaProdutos = document.getElementById("listaProdutos")
let pesquisarProdutos = document.getElementById("pesquisarProdutos")
let listaPesquisa = document.getElementById("listaPesquisa")

let array = []

addAListaProdutos.addEventListener("click", () => {
    array.push(inputProdutos.value)
    listaProdutos.innerHTML = ""

    array.forEach(elementosProdutos => {
        addLista(elementosProdutos, listaProdutos)
    })

    inputProdutos.value = ""
    console.log(array)
})

pesquisarProdutos.addEventListener("input", () => {
    let pesquisa = array.filter(produtosFilter => {
        return produtosFilter.toLowerCase().includes(pesquisarProdutos.value.toLowerCase())
    })
    listaPesquisa.innerHTML = ""

    console.log(pesquisa)
    pesquisa.forEach(elePesquisa => {
        addLista(elePesquisa, listaPesquisa)
    })
})

function addLista(ele, resul) {
    let adicionarAlista = document.createElement("li")
    adicionarAlista.innerHTML = ele

    resul.appendChild(adicionarAlista)
}