let resul = document.getElementById("resul")
let parar = document.getElementById("parar")
const data = new Date()

let horas = data.getHours()
let minutos = data.getMinutes()
let segundos = data.getSeconds()

let intervalo = setInterval(() => {
    resul.innerHTML = ""
    if (segundos === 60) {
        segundos = 0

        minutos += 1   
    } else if (minutos === 60) {
        minutos = 0

        horas += 1
    } else if (horas === 24) {
        horas = 0
    }
    segundos += 1
    adicionarHoraAoHtml()
}, 1000)

function adicionarHoraAoHtml() {
    let addHora = document.createElement("span")
    addHora.innerHTML = `${horas}:${minutos}:${segundos}`

    resul.appendChild(addHora)
    console.log(horas, minutos, segundos)
}