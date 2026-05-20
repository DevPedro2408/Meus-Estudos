let dialogoSala = document.getElementById("dialogoSala")
const btnNome = document.getElementById("btnNome")
const btnSala = document.getElementById("btnSala")
const btnNota = document.getElementById("btnNota")
const inputNome = document.getElementById("inputNome")
const inputSala = document.getElementById("inputSala")
const nota = document.querySelector(".nota")
let numNota = document.querySelector("#numNota")
let resul = document.querySelector("#resul")
let containerLista = document.querySelector(".containerLista")
let quantidadeItens = 0

function divNome() {
    if (inputNome.value === "") {
        alert("Insira seu nome")
    } else {
        document.querySelector(".sala").style.display = "flex"
        dialogoSala.innerHTML = `${inputNome.value}, Qual sua sala?`
    }
}

function divSala() {
    if (inputSala.value === "") {
        alert("Insira sua sala!")
    } else {
        nota.style.display = "flex"
    }
}

function removeClass() {
    if (resul.classList.contains(`resulReprovado`)) {
        resul.classList.remove(`resulReprovado`)
    } else if (resul.classList.contains(`resulExame`)) {
        resul.classList.remove(`resulExame`)
    } else {
        resul.classList.remove(`resulAprovado`)
    }
}

function resultado() {
    removeClass() 

    let notaProva = Number(numNota.value)
    switch (notaProva) {
        case 0: case 1: case 2: case 3: 
            resul.innerHTML = "Reprovado!"
            resul.classList.add(`resulReprovado`)
            break
        case 4: case 5: case 6:
            resul.innerHTML = "Exame!"
            resul.classList.add(`resulExame`)
            break
        case 7: case 8: case 9: case 10:
            resul.innerHTML = "Aprovado!"
            resul.classList.add(`resulAprovado`)
            break
        default:
            resul.innerHTML = "Erro! Nota inválida!"

    }

    resul.classList.add(`resultado`)
}

function pressEnter(el1, el2) {
    if (el1.key === "Enter") {
        el2()
    }
}

function adicionarNaLista() {
    quantidadeItens++

    let containerUl = document.createElement("ul")
    containerUl.classList.add("listaAlunos")
    let addaLista1 = document.createElement("li")
    let addaLista2 = document.createElement("li")
    let addaLista3 = document.createElement("li")
    let addaLista4 = document.createElement("li")
    let addResul = document.createElement("li")

    addaLista1.classList.add("alunos")
    addaLista2.classList.add("alunos")
    addaLista3.classList.add("alunos")
    addaLista4.classList.add("alunos")
    addResul.classList.add("alunos")

    addaLista1.textContent = quantidadeItens
    addaLista2.textContent = inputNome.value
    addaLista3.textContent = inputSala.value
    addaLista4.textContent = numNota.value
    addResul.textContent = resul.value

    containerUl.append(addaLista1, addaLista2, addaLista3, addaLista4, addResul)
    containerLista.appendChild(containerUl)

    containerLista.style.display = "flex"
    
    inputNome.value = ""
    inputSala.value = ""
    numNota.value = ""
}

inputNome.addEventListener("keydown", (event) => {
    pressEnter(event, divNome)
})

btnNome.addEventListener("click", () => {
    divNome()
})

inputSala.addEventListener("keydown", (event) => {
    pressEnter(event, divSala)
})

btnSala.addEventListener("click", () => {
    divSala()
})

numNota.addEventListener("keydown", (event) => {
    pressEnter(event, resultado)
    pressEnter(event, adicionarNaLista)
})

btnNota.addEventListener("click", () => {
    resultado()
    adicionarNaLista()
})



