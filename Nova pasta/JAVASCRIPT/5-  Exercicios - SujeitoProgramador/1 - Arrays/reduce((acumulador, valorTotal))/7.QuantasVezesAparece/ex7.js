let frutas = ["maça", "banana", "maça", "uva", "banana", "maça"]

let frutasContagem = frutas.reduce((acc, valorTotal) => {
    if (acc[valorTotal]) {
        acc[valorTotal]++
    }  else {
        acc[valorTotal] = 1
    }
    return acc
}, {})

console.log(frutasContagem)