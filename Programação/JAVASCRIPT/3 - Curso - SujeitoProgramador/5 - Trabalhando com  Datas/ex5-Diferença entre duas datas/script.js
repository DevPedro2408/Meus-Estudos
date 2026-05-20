const data1 = new Date("2025-10-24")
const data2 = new Date("2025-10-26")

let diferenca = data2 - data1 // Dá milissegundos

let dias = diferenca / (1000 * 60 * 60 * 24) //Transforma milissegundos em dias

console.log(dias)