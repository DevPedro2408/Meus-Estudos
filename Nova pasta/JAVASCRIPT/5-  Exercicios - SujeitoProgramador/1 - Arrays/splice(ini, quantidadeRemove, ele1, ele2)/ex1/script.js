let inputAdd = document.getElementById("inputAdd")
let alerta = document.querySelector(".alerta")
let resul = document.getElementById("resul")
let inputIndice = document.getElementById("inputIndice")
let remove = document.getElementById("remove")
let resulRemovido = document.getElementById("resulRemovido")
let array = []

function adicionar() {
    resul.innerHTML = ""

    if (!(inputAdd.value === "")) {
        array.push(inputAdd.value)
    } else {
        alerta.classList.add("alertaShow")
    }

    percorrerArray(array, resul)

    inputAdd.value = ""
}

remove.addEventListener("click", () => {
    let inputIndiceValor = inputIndice.value - 1
    resul.innerHTML = ""

    if (!(inputIndiceValor > array.length)) {
        array.splice(inputIndiceValor, 1)
    
        console.log(array)
        percorrerArray(array, resul)
    } else {
        alert("Não tem essa uantidade de nomes.")
    }

    inputIndice.value = ""
})


function addLi(valor, resulLista) {
    let adicionarLista = document.createElement("li")
    adicionarLista.innerHTML = valor

    resulChild.appendChild(adicionarLista)
}

function percorrerArray(arrayPercorrido, resul) {
    arrayPercorrido.map(valor => {
        let adicionarLista = document.createElement("li")
        adicionarLista.innerHTML = valor

        resul.appendChild(adicionarLista)
    })
}