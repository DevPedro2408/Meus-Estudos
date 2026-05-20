let inputText = document.querySelector("#containerAdd input")
let buttonAdicionar = document.querySelector("#containerAdd button")
let listaElement = document.querySelector("#containerAdd ul")

let tarefas = JSON.parse(localStorage.getItem("@listaTarefa")) || []

function adicionarTarefas() {
    if (inputText.value === "") {
        alert("Dgite Alguma coisa!!!")
        return false
    } else {
        tarefas.push(inputText.value) 
        inputText.value = ""

        renderTarefas()
        salvarDados()
    }
}
buttonAdicionar.onclick = adicionarTarefas

function renderTarefas() {
    listaElement.innerHTML = ""

    tarefas.map(elementos => {
        let adicionarNaUl = document.createElement("li")
        adicionarNaUl.innerHTML = elementos

        let adicionarLink = document.createElement("a")
        adicionarLink.setAttribute("href", "#")
        adicionarLink.innerHTML = "Excluir"

        let indiceElement = tarefas.indexOf(elementos)
        adicionarLink.setAttribute("onclick", `deletarTarefa(${indiceElement})`)

        listaElement.appendChild(adicionarNaUl)
        listaElement.appendChild(adicionarLink)
    })
}

renderTarefas()

function deletarTarefa(posicao) {
    tarefas.splice(posicao, 1)
    renderTarefas()
    salvarDados()
}  

function salvarDados() {
    localStorage.setItem("@listaTarefa", JSON.stringify(tarefas))
}