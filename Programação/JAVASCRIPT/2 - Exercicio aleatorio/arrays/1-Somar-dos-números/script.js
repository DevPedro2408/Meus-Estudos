const numeros = [1, 5, 3, 9, 2];

// const soma = numeros.reduce((acc, valorAtual) => acc + valorAtual, 0)

let soma = 0
numeros.forEach(numero => {
    soma += numero
})
    
console.log(soma);