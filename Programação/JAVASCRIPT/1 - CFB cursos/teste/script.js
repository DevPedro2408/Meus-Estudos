"use strict"

let containerPrincipal = document.querySelector(".containerPrincipal")
let texto = document.querySelector(".texto")
let btn = document.querySelector(".btn")
let lista = document.querySelector(".lista")
let reiniciar = document.querySelector(".reiniciar")

btn.addEventListener("click", (event) => {
    lista.classList.add("listaShow")
    reiniciar.classList.add("reiniciarShow")
    const addNaLista = document.createElement("li")
    addNaLista.innerHTML = `${texto.value}`
    lista.appendChild(addNaLista)
    texto.value = ""

    const remover = document.createElement("input")
    remover.classList.add("remover")
    remover.getAttribute("type", "button")
    remover.getAttribute("value", "X")
    console.log(remover)

    containerPrincipal.getAttribute("id", "containerId")
    console.log(containerPrincipal)
})

// É só clicar no Enter que vai acionar o addEventListener() 
texto.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        lista.classList.add("listaShow")
        reiniciar.classList.add("reiniciarShow")
        const addNaLista = document.createElement("li")
        addNaLista.innerHTML = `${texto.value}`
        lista.appendChild(addNaLista)
        texto.value = ""
    }
})

reiniciar.addEventListener("click", () => {
    containerPrincipal.innerHTML = ""
})