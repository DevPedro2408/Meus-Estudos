let inputAdicionar = document.getElementById("inputAdicionar")
let bntAdicionar = document.getElementById("btnAdicionar")
let inputLetra = document.getElementById("inputLetra")
let btnLetra = document.getElementById("btnLetra")
let resultadoLetra = document.getElementById("resultadoLetra")
let containerListaCompras = document.querySelector(".containerListaCompras")
let listaCompras = document.getElementById("cabeçalhoListaCompras")
let containerResulLista = document.getElementById("containerResulLista")
let resulListaCompras = document.getElementById("resulListaCompras")
let resultadoQuantidade = document.getElementById("resultadoQuantidade")

let ArrayLista = []

bntAdicionar.addEventListener("click", () => {
    if(!(inputAdicionar.value === "")) {
        ArrayLista.push(inputAdicionar.value)
        resulListaCompras.innerHTML = ""
        resultadoQuantidade.innerHTML = ""
        containerListaCompras.classList.add("aparecerListaCompras")
    
        ArrayLista.map((elementos, posicao) => {
            adicionarNoHtmlComRemove(elementos, posicao, resulListaCompras)

            let totalposicao = posicao + 1
            console.log(totalposicao)
        })
        inputAdicionar.value = ""
    } else {
        alert("Erro! adicione itens no input, antes de adicinar na lista de compras")
    }
})


inputLetra.addEventListener("input", () => {
    resultadoLetra.innerHTML = ""

    if (inputLetra.value === "") {
        resultadoLetra.classList.remove("aparecerListaCompras")
    } else {
        resultadoLetra.classList.add("aparecerListaCompras")
    }

    let buscarItens = ArrayLista.filter(itens => {
        return itens.toLowerCase().startsWith(inputLetra.value.toLowerCase())
    })

    buscarItens.forEach(elementos => {
        adicionarNoHtml(elementos, resultadoLetra)
    })

    if (inputLetra.value === "") {
        resultadoLetra.innerHTML = "" 
    }
})

function adicionarNoHtml(valor, resultado) {
    let addLista = document.createElement("li")
    addLista.innerHTML = valor

    resultado.appendChild(addLista)
}

function adicionarNoHtmlComRemove(elemento1, posicao, resul) {
    let adicionarLista = document.createElement("li")
    adicionarLista.innerHTML = elemento1

    adicionarRemove(adicionarLista, posicao)
    
    resul.appendChild(adicionarLista)
}

function adicionarRemove(ele1, ele2) {
    ele1.addEventListener("click", () => {
        let index = ArrayLista.indexOf(ele2)
        ArrayLista.splice(index, 1)
        ele1.remove()

        // Verifica se tem elementos dentro do Array.
        if (ArrayLista.length === 0) {
            containerListaCompras.classList.remove("aparecerListaCompras")
        }
    })
}