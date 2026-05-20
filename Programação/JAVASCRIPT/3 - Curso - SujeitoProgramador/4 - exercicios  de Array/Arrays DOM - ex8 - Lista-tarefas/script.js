let inputTexto = document.getElementById("inputTexto")
let btnAdicionar = document.getElementById("btnAdicionar")
let resul = document.getElementById("resul")
let array = []

function atualizar() {
    array.push(inputTexto.value)
    resul.innerHTML = ""

    for (let i = 0; i < array.length; i++) {
        let addLista = document.createElement("li")
        addLista.innerHTML = array[i]
        addLista.classList.add("lista")
        
        resul.appendChild(addLista)

        addLista.addEventListener("click", () => {
            array.splice(i, 1)
            addLista.remove()
            
            atualizar()
        })
    }
    inputTexto.value = ""
}

btnAdicionar.addEventListener("click", () => {
    atualizar()
})

inputTexto.addEventListener("keypress", (event) => {
    pressEnter(event, atualizar)
})

function pressEnter(event, ele) {
    if (event.key === "Enter") {
        ele()
    }
}