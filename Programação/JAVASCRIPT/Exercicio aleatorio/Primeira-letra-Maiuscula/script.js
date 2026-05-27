let inputText = document.getElementById("inputText")
let btnAdd = document.getElementById("btnAdd")
let lista = document.getElementById("lista")
let filtrar = document.getElementById("filtrar")
let letraMaiuscula = document.getElementById("letraMaiuscula")

let arrayLista = []

btnAdd.addEventListener("click", () => {
    let inputValue = inputText.value
    arrayLista.push(inputValue)
    lista.classList.add("show")
    filtrar.classList.add("show")
    lista.innerHTML = ""

    percorrerArray(arrayLista, lista)

    inputText.value = ""
})

filtrar.addEventListener("click", () => {
    let primeiraLetraMaiuscula = arrayLista.filter(elemento => {
        return elemento.startsWith(elemento[0].toUpperCase())
    })

    percorrerArray(primeiraLetraMaiuscula, letraMaiuscula)
})

function percorrerArray(array, resul) {
    array.forEach(ele => {
        let addElemento = document.createElement("li")
        addElemento.innerHTML = ele

        resul.appendChild(addElemento)
    })
}
