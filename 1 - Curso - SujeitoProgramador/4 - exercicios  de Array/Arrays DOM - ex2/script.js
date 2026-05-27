let resul = document.getElementById("resul")
let inputNome = document.getElementById("inputNome")
let btn = document.getElementById("btn")
let lista = []

btn.addEventListener("click", () => {
    resul.innerHTML = ""
    lista.push(inputNome.value)
    
    for(n of lista) {
        let addLista = document.createElement("li")
        addLista.innerHTML = n

        resul.appendChild(addLista)
    }
    inputNome.value = ""
})
