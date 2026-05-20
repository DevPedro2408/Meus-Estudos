const palavras = ["Oi", "tudo", "bem?"]

const teste = "Oi, tudo bem?"

let array = teste.split(" ")

let caractere = array.reduce((acc, valorTotal) => {
    return acc + valorTotal.length
}, 0)

console.log(caractere, array)
