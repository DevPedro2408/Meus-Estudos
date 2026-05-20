const numeros = [1,2,3,4,5,6,7,8,9,10]

let numeroFiltrado = numeros.filter(num => {
    return num >= 5
})

console.log(numeroFiltrado)