let maiusculo = document.getElementById("maiusculo")
let resul = document.getElementById("resul")

maiusculo.addEventListener("input", () => {
    resul.innerHTML = ""
    let addLista = document.createElement("li")
    addLista.innerHTML = maiusculo.value.toUpperCase()
    
    resul.appendChild(addLista)
})