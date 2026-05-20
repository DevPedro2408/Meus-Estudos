const cupomSim = document.querySelector("#cupomSim")
// const cupomNao = document.querySelector("#cupomNao")
const vipSim = document.querySelector("#vipSim")
// const vipNao = document.querySelector("#vipNao")
const btn = document.querySelector("#botao")
const resul = document.querySelector("#resul")

btn.addEventListener("click", () => {
    if ((cupomSim.checked) || (vipSim.checked)) {
        resul.innerHTML = "Desconto aplicado!"
    } else {
        resul.innerHTML = "Sem desconto!"
    }
})
