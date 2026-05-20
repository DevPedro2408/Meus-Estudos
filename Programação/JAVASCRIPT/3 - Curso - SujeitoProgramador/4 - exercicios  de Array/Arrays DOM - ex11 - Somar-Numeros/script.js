let inputNumeros = document.getElementById("inputNumeros")
let btnAdicionar = document.getElementById("btnAdicionar")
let listaNumeros = document.getElementById("listaNumeros")
let somarNumeros = document.getElementById("somarNumeros")
let resul = document.getElementById("resul")

let array = []

btnAdicionar.addEventListener("click", () => {
    let inputNumberValue = Number(inputNumeros.value)

    array.push(inputNumberValue)
    listaNumeros.innerHTML = ""

    adicionarNaLista(array)

    inputNumeros.value = ""
})

somarNumeros.addEventListener("click", () => {
    let soma = somar(array) 
    
    let addListaResul = document.createElement("li")
    addListaResul.innerHTML = soma
    
    resul.appendChild(addListaResul)
    console.log(soma)
})

function somar(arr) {
    let soma = arr.reduce((acumulador, valorTotal) => {
        return acumulador = acumulador + valorTotal
    }, 0)

    return soma
}

function adicionarNaLista(arr) {
    arr.map((elemento, uantidade) => {
        let addListaNum = document.createElement("li")
        addListaNum.innerHTML = elemento

        removerDaLista(arr, uantidade, addListaNum)

        listaNumeros.appendChild(addListaNum)
    })
}

function removerDaLista(arr, uantidade, addLista) {
    addLista.addEventListener("click", () => {
        arr.splice(uantidade, 1)
        addLista.remove()
    })
}

// array.map((elemento, uantidade) => {
    //     let addListaNum = document.createElement("li")
    //     addListaNum.innerHTML = elemento

    //     addListaNum.addEventListener("click", (event) => {
    //         array.splice(uantidade, 1)
    //         addListaNum.remove()
    //     })

    //     listaNumeros.appendChild(addListaNum)
    // })