let produtos = ["Computador", "Telefone", "Mouse", "Teclado"]

console.log(produtos)
console.log("quantidade de produtos " + produtos.length)

let remove = produtos.findIndex(item => item === "Mouse")
produtos.splice(remove, 1)
console.log(produtos)

let busca = "Telefone"
if (produtos.includes(busca)) {
    console.log(`Produto ${busca} existe`)
} else {
    console.log("Produto não encontrado")
}

let numeros = [1, 3, 5, 7, 0, 9]

numeros.sort((a, b) => a - b)

console.log(numeros)

numeros.shift()
console.log(numeros)

numeros.reverse()
console.log(numeros)

let data = "27/05/2026"
let [dia, mes, ano] = data.split("/")

console.log(dia, mes, ano)


