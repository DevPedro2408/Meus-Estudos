// let numeros = [10, 20, 30, 40, 50]
let numMaior25 = []

// Adiciona somente numeros maiores ue 24
// for(n of numeros) {
//     if(n >= 25) {
//         numMaior25.push(n)
//     }
// }

// console.log(numMaior25)


// let numeros = [1, 2, 3, 4, 5]

// Dobra os valores do Array numeros.
// numeros.map(elementos => {
//     console.log(elementos*2)
// })


// let numeros = [5, 10, 15, 20]
// Não é preciso colocar o valor inicial uando o valor for 0 somente se uiser outro valor
// const valorInicial = 0

// O Parâmetro valorAtual passa por todos os elementos, um de cada vez 
// E o acumulador acumula a soma de acumulador + valorAtual. 
// Desse jeito acumulador = acumulador + valorAtual
// let soma = numeros.reduce((acumulador, valorAtual) => {
//     return acumulador + valorAtual
// }, valorInicial)

// console.log(soma)


// let numeros = [1, 2, 3, 4, 5]
// let letras = ["a", "b", "c", "d"]

// console.log(numeros.reverse())
// console.log(letras.reverse())

let array1 = [1, 2, 3]
let array2 = [4, 5, 6]

let juntarArray = array1.concat(array2, 7, 8, 9, 10)
// console.log(juntarArray)