const btnJuntar = document.getElementById("btnJuntar")
const resul = document.getElementById("resul")

let frases = ["Pedro", "foi", "trabalhar", "em", "outro", "lugar"]

btnJuntar.addEventListener("click", () => {
    let frase = frases.join(" - ")
    
    let addLista = document.createElement("p")
    addLista.innerHTML = frase

    resul.appendChild(addLista)
})