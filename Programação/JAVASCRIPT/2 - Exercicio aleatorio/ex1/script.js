const btnCores = [...document.querySelectorAll(".btnCores")]
const Preto = document.getElementById("Preto")
const Branco = document.getElementById("Branco")
const Azul = document.getElementById("Azul")
const Vermelho = document.getElementById("Vermelho")
const Amarelo = document.getElementById("Amarelo")


Preto.addEventListener("click", () => {
    document.getElementById("btn").style.background = "black"
    document.getElementById("btn").style.color = "white"
})

Branco.addEventListener("click", () => {
    document.getElementById("btn").style.background = "white"
    document.getElementById("btn").style.color = "black"
})

Azul.addEventListener("click", () => {
    document.getElementById("btn").style.background = "blue"
})

Vermelho.addEventListener("click", () => {
    document.getElementById("btn").style.background = "red"
})

Amarelo.addEventListener("click", () => {
    document.getElementById("btn").style.background = "yellow"
})

console.log(btn)