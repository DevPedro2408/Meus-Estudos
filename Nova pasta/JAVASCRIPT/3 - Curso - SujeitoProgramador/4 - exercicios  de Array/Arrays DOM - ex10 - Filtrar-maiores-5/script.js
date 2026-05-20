let inputNumeros = document.getElementById("inputNumeros")
let addNumeros = document.getElementById("addNumeros")
let numAdicionado = document.getElementById("numAdicionado")
let btnMaior5 = document.getElementById("btnMaior5")
let resul = document.getElementById("resul")

let array = []

addNumeros.addEventListener("click", () => {
    numAdicionado.innerHTML = ""
    array.push(inputNumeros.value)

    array.map(elementos => {
        let addListaNum = document.createElement("li")
        addListaNum.innerHTML = elementos

        numAdicionado.appendChild(addListaNum)
    })

    inputNumeros.value = ""
})

btnMaior5.addEventListener("click", () => { 
    let maiorQue5 = array.filter(listaFilter => {
        if (listaFilter > 5) {
            return listaFilter
        }
    })

    maiorQue5.map(listaResul => {
        let resultado = document.createElement("li")
        resultado.innerHTML = listaResul 

        resul.appendChild(resultado) 
    })
})