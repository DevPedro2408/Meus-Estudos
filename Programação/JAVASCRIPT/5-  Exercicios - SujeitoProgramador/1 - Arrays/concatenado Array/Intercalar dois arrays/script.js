const numeros = [1, 2, 3, 4]
const letras = ["A", "B", "C", "D"]
let resultado = []

// for(let i = 0;i < numeros.length;i++) {
// resultado.push(numeros[i])
// resultado.push(letras[i])
// }

numeros.map((elementos, quantidade) => {
    resultado.push(numeros[quantidade])
    resultado.push(letras[quantidade])
})

console.log(resultado)