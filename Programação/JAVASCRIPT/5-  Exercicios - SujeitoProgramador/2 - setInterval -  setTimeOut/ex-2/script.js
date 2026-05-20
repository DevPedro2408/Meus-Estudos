let num = document.getElementById("num")
let btn = document.getElementById("btn")
let resul = document.getElementById("resul")
let resulEsgotado = document.getElementById("resulEsgotado")

btn.addEventListener("click", () => {
    numero = Number(num.value)

    setInterval(() => {
        if(numero < 1) {
            resulEsgotado.innerHTML = "Tempo esgotado!!"
            
        } else {
            let addContagem = document.createElement("span")
            addContagem.innerHTML = `${numero}, `

            numero -= 1

            resul.appendChild(addContagem)
        }
    }, 1000)
})


// let addContagem = document.createElement("span")
// addContagem.innerHTML = numero

// resul.appendChild(addContagem)