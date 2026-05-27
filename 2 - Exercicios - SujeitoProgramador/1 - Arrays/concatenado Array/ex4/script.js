let produtos = ["Mouse", "Teclado", "Monitor", "Cabo HDMI"]
let produtosAtualizador = []

produtos.map(elementos => {
    if(elementos === "Monitor") {    
        produtosAtualizador.push("Monitor Gamer")
    } else {
        produtosAtualizador.push(elementos)
    }
})

console.log(produtosAtualizador)