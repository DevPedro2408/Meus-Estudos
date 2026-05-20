let numero = document.getElementById("numero")
const btnAdd = document.getElementById("btnAdd")
let temporizador = document.getElementById("temporizador")

btnAdd.addEventListener("click", () => {
    let num = Number(numero.value)
    temporizador.classList.add("show")
    temporizador.innerHTML = num
    const diminuirElemento = 300 / num
    let larguraDoElemento = 300

    let pausarTime = setInterval(() => {
        num -= 1
        larguraDoElemento -= diminuirElemento
        temporizador.style.width = `${larguraDoElemento}px`

        temporizador.innerHTML = num
        if (num === 0) {
            clearInterval(pausarTime)

            temporizador.style.width = "max-content"
            temporizador.style.background = "white"
            temporizador.innerHTML = "Tempo esgotado!"
            numero.value = ""

        }
    }, 1000)
})