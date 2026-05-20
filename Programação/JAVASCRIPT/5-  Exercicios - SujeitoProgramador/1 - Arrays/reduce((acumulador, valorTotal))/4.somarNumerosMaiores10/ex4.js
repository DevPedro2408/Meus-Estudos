let numeros = [5, 12, 8, 30, 1]

let numMaiores10 = numeros.reduce((acc, valorTotal) => {
    if (valorTotal > 10) {
        return acc + valorTotal
    } else {
        return acc
    }
}, 0)

console.log(numMaiores10)