let notificacao = document.getElementById("notificacao")

let array = ["Preparar", "Apontar...", "JA!"]
let index = 0
let parar = setInterval(() => {
    if (index < array.length) {
        let addAoHtml = document.createElement("p")
        addAoHtml.innerHTML = array[index]

        notificacao.appendChild(addAoHtml)
        index++
    } else {
        clearInterval(parar)
    }
}, 2000)