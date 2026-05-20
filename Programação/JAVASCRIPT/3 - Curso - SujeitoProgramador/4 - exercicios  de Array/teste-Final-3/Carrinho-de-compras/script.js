let compras = document.getElementById("compras")
let excluir = document.querySelector(".excluir")
let produtos = []

function adicionarAoCarrinho() {
    let inputText = document.getElementById("inputItem")
    inputValor = inputText.value
    
    if (!(produtos.includes(inputValor))) {
        produtos.push(inputValor)
        adicionarLista(inputValor, compras)
    } else {
        alert("Esse produto ja está no carrinho!")
    }   
    
    excluir.classList.add("excluirShow")

    inputText.value = ""
} 

function btnExcluir() {
    produtos = []
    compras.innerHTML = ""
    excluir.classList.remove("excluirShow")
}

function adicionarLista(el1, resultado) {
    let addLista = document.createElement("li") 
    addLista.innerHTML = el1

    resultado.appendChild(addLista)
}