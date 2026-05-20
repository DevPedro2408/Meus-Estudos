let resul = document.getElementById("resul")
let inputNome = document.getElementById("inputNome")
let btn = document.getElementById("btn")
let lista = []

btn.addEventListener("click", () => {
    lista.push(inputNome.value)
    desenharLista()
    inputNome.value = ""
})

function desenharLista() {
    resul.innerHTML = ""

    for(let i = 0; i < lista.length; i++) {
        let addLista = document.createElement("li")
        addLista.innerHTML = lista[i]

        addLista.addEventListener("click", () => {
            lista.splice(i, 1)
            addLista.remove()    

            desenharLista() // Redesenha tudo atualizado.
        })

        resul.appendChild(addLista)
    }
}
