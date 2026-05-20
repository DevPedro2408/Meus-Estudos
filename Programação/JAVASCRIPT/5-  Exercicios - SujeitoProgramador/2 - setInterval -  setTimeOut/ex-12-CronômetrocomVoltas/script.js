let inputNome = document.getElementById("inputNome")
let minutos = document.getElementById("minutos")
let segundos = document.getElementById("segundos")
let milesimos = document.getElementById("milesimos")
const start =document.getElementById("start")
const parar = document.getElementById("parar")
const reset = document.getElementById("reset")
const salvarTempo = document.getElementById("salvarTempo")
let lista = document.getElementById("lista")
let min = 0
let seg = 0
let mile = 0
let listaObj = []

start.addEventListener("click", () => {
    const paraCronometro = setInterval(() => {
        if (mile < 59) {
            mile += 1
        } else if (seg < 59) {
            seg += 1
            mile = 0
        } else if (min < 59) {
            min += 1
            seg = 0
            mile = 0
        }
        milesimos.innerHTML = `${String(mile).padStart(2, "0")}`
        segundos.innerHTML = `${String(seg).padStart(2, "0")}`
        minutos.innerHTML = `${String(min).padStart(2, "0")}`
    }, 30)

    parar.addEventListener("click", () => {
        clearInterval(paraCronometro)
    })
})

reset.addEventListener("click", () => {
    resetar()
})

salvarTempo.addEventListener("click", () => {
    lista.innerHTML = ""
    listaObj.push({nome: inputNome.value, tempo: `${String(min).padStart(2, "0")}:${String(seg).padStart(2, "0")}:${String(mile).padStart(2, "0")}`})

    listaObj.map(ele => {
        let addLista = document.createElement("li")
        addLista.innerHTML = `${ele.nome}: ${ele.tempo}`

        lista.appendChild(addLista)
    })
    
    resetar()
})

function resetar() {
    inputNome.value = ""
    min = 0
    seg = 0
    mile = 0

    milesimos.innerHTML = `${String(mile).padStart(2, "0")}`
    segundos.innerHTML = `${String(seg).padStart(2, "0")}`
    minutos.innerHTML = `${String(min).padStart(2, "0")}`
}
