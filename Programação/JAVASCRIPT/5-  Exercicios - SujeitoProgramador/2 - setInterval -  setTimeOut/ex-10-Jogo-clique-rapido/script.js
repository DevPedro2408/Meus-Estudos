const quadrado = document.getElementById("quadrado")
let resultado = document.getElementById("resultado")
let resulMelhorTime = document.getElementById("melhorTime")
let inicio
let melhorTime = 10000

function mudarPosicao() {
    let numeroAleatoria = Math.floor(Math.random() * 5000) 

    setTimeout(() => {
        let t = Math.floor(Math.random() * 500)
        let r = Math.floor(Math.random() * 500)
        let b = Math.floor(Math.random() * 500)
        let l = Math.floor(Math.random() * 500)

        quadrado.style.top = `${t}px`
        quadrado.style.right = `${r}px`
        quadrado.style.bottom = `${b}px`
        quadrado.style.left = `${l}px`
        inicio = Date.now()
    }, numeroAleatoria)

}
quadrado.addEventListener("click", () => {
    let fim  = Date.now()
    let reflexo = (fim - inicio) / 1000

    if (reflexo < melhorTime) {
        melhorTime = reflexo
        resulMelhorTime.innerHTML = `Melhor tempo: ${melhorTime.toFixed(2)}`
    }
    
    resultado.innerHTML = reflexo.toFixed(2)
    mudarPosicao()
})

mudarPosicao()


