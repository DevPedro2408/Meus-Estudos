function somar(...numeros) {
    return numeros.reduce((acc, valor) => acc += valor)
}

console.log(somar(5, 5, 2, 16, 2,))