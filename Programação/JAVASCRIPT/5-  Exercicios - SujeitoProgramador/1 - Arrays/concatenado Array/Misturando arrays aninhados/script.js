const array = [[1, 2], [3, 4], [5, 6]]
const lista = []

array.map(elementos => {
    lista.push(...elementos)
})

console.log(lista)