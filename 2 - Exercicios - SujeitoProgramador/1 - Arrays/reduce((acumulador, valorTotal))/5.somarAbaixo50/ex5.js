let precos = [10, 80, 25, 60, 30]

let abaixoDe50 = precos.reduce((acc, valorTotal) => {
    if (valorTotal < 50) {
        return acc + valorTotal
    } else {
        return acc
    }
}, 0)

console.log(abaixoDe50)