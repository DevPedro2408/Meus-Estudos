let frutas = ["Morango", "Uva", "Laranja", "Amora"]

// console.log(frutas.sort())


// let numeros = [7, 3, 9, 1, 6]

// let maiorNumero = numeros.reduce((acumulador, valorTotal) => {
//     if(valorTotal > acumulador) {
//         return valorTotal
//     } else {
//         return acumulador
//     } 
// })

// let menorNumero = numeros.reduce((acumulador, valorTotal) => {
//     return valorTotal < acumulador ? valorTotal : acumulador
// })

// console.log(`Maior número do Array: ${maiorNumero}`)
// console.log(`Menor número do Array: ${menorNumero}`)



// let frases = [
//     "Teu esforço vai valer a pena!",
//     "Não desista!",
//     "Tenha consistência!"
// ]

// let separarFrase = frases.join(" - ")
// console.log(separarFrase)


// let numeros = [1, 2, 2, 3, 4, 4, 5]

// let removerDuplicados = numeros.reduce((acumulador, valorTotal) => {
//     if(!acumulador.includes(valorTotal)) {
//         acumulador.push(valorTotal)
//     }
//     return acumulador
// }, [])

// console.log(removerDuplicados)


let produtos = [
    {nome: "Hamburguer", preco: 25},
    {nome: "Batata", preco: 10},
    {nome: "Refrigerante", preco: 8}
]

// produtos.map(elementos => {
//     let maior10
// })

let maior10 = produtos.reduce((acumulador, valorTotal) => {
    if (valorTotal.preco >= 10) {
        acumulador.push(valorTotal)
    }
    return acumulador
}, [])

console.log(maior10)

