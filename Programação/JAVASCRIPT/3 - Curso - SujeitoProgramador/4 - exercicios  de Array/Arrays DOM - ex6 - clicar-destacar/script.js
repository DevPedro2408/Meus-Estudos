let resul = document.getElementById("resul")
let array = ["Preto", "Azul", "Amarelo", "Branco"]

array.map(elementos => {
    let addLista = document.createElement("li")
    addLista.innerHTML = elementos
    
    resul.appendChild(addLista)

    addLista.addEventListener("click", () => {
        addLista.classList.toggle("destaque")
    })
})
