// Primeiro Método
// let a1 = [1, 2, 3]
// let a2 = [4, 5, 6]
// // O concat() como o nome ja diz, ele concatena o array no caso o a1 com o a2 e vão para dentro do a3
// let a3 = a1.concat(a2, [7, 8, 9], "Pedro")
// console.log(a3)

// Segundo Método. Usar esse!
let a1 = [1, 2, 3]
let a2 = [4, 5, 6]
// O operador spread(...) serve para "espalhar" os elementos de um array(ou objeto) dentro de outro contexto.
let a3 = [...a1, ...a2, ...[7, 8,9]]
console.log(a3)