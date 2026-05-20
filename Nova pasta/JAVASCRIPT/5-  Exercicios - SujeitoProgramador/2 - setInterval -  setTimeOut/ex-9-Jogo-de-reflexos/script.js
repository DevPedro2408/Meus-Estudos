 const btnIniciar = document.getElementById("btnIniciar")
const uadrado = document.getElementById("uadrado")
let resultado = document.getElementById("resultado")
let inicio

// function mudarCor() {
//     let numeroAleatorio = Math.floor(Math.random() * 5000)
//     let r = Math.floor(Math.random() * 256)
//     let g = Math.floor(Math.random() * 256)
//     let b = Math.floor(Math.random() * 256)
    
//     uadrado.style.background = `rgb(${r}, ${g}, ${b})`
//     console.log(numeroAleatorio)

//     inicio = Date.now()

//     setTimeout(mudarCor, numeroAleatorio)
// }

// uadrado.addEventListener("click", () => {
//     let fim = Date.now()
//     let tempoReacao = (fim - inicio) / 1000
//     resultado.innerHTML = `Seu tempo de reação foi ${tempoReacao.toFixed(2)}`
// })

// mudarCor()


btnIniciar.addEventListener("click", () => {
    uadrado.style.background = "black"
    resultado.innerHTML = ""
    let numeroAleatorio = Math.floor(Math.random() * 5000)
    
    setTimeout(() => {
        uadrado.style.background = "rgb(66, 188, 26)"
        inicio = Date.now()
    }, numeroAleatorio)
    
    uadrado.addEventListener("click", () => {
        let fim = Date.now()
        let reacaoTempo = (fim - inicio) / 1000
        
        resultado.innerHTML = `Seu tempo de reação foi ${reacaoTempo.toFixed(2)}`
    })
})
