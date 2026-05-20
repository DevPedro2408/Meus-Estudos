let iniciar = document.getElementById("iniciar")
let parar = document.getElementById("parar")
let zerar = document.getElementById("zerar")
let resul = document.getElementById("resul")

let seg = 0
let min = 0
let hrs = 0

iniciar.addEventListener("click", () => {
    let pararCronometro = setInterval(() => {
        if (seg < 60) {
            seg += 1
        } else if (min < 60) {
            min += 1
            seg = 0           
        } else {
            hrs += 1
            min = 0
            seg = 0
        }

        resul.innerHTML = `${String(hrs).padStart(2, "0")}:${String(min).padStart(2, "0")}:${String(seg).padStart(2, "0")}`
    }, 1000)

    parar.addEventListener("click", () => {
        clearInterval(pararCronometro)
    })

    zerar.addEventListener("click", () => {
        seg = 0
        min = 0
        hrs = 0
        resul.innerHTML = `${String(hrs).padStart(2, "0")}:${String(min).padStart(2, "0")}:${String(seg).padStart(2, "0")}`
    })
})
