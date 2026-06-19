let produtos = [
    "Notebook",
    "Mouse",
    "Teclado"
]

let i = 0
setInterval(() => {
    if(i >= produtos.length) {
        clearInterval()
    } else {
        console.log(`Promoção:\n${produtos[i]}`)
        i++
    }
}, 2000)
