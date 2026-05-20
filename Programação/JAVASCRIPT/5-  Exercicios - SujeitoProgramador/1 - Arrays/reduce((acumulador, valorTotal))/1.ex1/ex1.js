let pessoas = [
    {nome: "Pedro", idade: 21},
    {nome: "Breno", idade: 15},
    {nome: "Andre", idade: 19},
    {nome: "Lima", idade: 12}
]

let nomes = pessoas.reduce((p1, p2) => {
    return p1 + p2.idade
}, 0)

console.log(nomes)

// let numeros = [1, 2, 3, 4, 5, 6]

// let soma = numeros.reduce((n1, n2) => {
//     console.log(n1 + " + " + n2)
//     return n1 + n2
// })

// console.log(soma)