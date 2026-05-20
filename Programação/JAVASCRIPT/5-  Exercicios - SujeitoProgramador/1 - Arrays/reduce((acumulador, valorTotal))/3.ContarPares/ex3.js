let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let quantiNumPares = numeros.reduce((acc, valorTotal) => {
//     if (valorTotal % 2 === 0) {
//         return acc + valorTotal
//     } else {
//         return acc
//     }
// }, 0)

// console.log(quantiNumPares)

let numPares = numeros.filter(ele => ele % 2 === 0)

console.log(numPares.length)