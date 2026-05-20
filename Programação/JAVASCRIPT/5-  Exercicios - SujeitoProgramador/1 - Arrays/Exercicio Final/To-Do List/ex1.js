let inputText = document.getElementById("inputText")
let btnAdicionar = document.getElementById("btnAdicionar")
let resul = document.getElementById("resul")

let array = []

btnAdicionar.addEventListener("click", () => {
    array.push(inputText.value)
    resul.innerHTML = ""

    array.forEach(elementos => {
        let adicionarNoHtml = document.createElement("li")
        adicionarNoHtml.innerHTML = elementos

        adicionarNoHtml.addEventListener("click", () => {
            let indiceEleArray = array.indexOf(elementos)
            array.splice(indiceEleArray, 1)
            console.log(array)
        })

        resul.appendChild(adicionarNoHtml)
    })
})

inputText.addEventListener("keypress", (event) => {
    if(event.key === "Enter") {
        array.push(inputText.value)
        resul.innerHTML = ""

        array.forEach(eleKey => {
            addALista(eleKey, resul)
        })

        inputText.value = ""
    }
})

function addALista(ele, resultado) {
    let adicionarNoHtml = document.createElement("li")
    adicionarNoHtml.innerHTML = ele

    remover(adicionarNoHtml, ele)

    resul.appendChild(adicionarNoHtml)
}

function remover(addHtml, element) {
    addHtml.addEventListener("click", () => {
        resul.innerHTML = ""
        let indiceEleArray = array.indexOf(element)
        array.splice(indiceEleArray, 1)
        console.log(array)
        atualizar()
    })
}

function atualizar() {
    array.forEach(eleAtualizado => {
        let arrayAtualizado = document.createElement("li")
        arrayAtualizado.innerHTML = eleAtualizado

        remover(arrayAtualizado)
    
        resul.appendChild(arrayAtualizado)
    })
}