const numeros = [1, 6, 2, 8, 3, 4]

function maiorNumero(array) {
    let maior = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i]
        }
    }
    return maior
}

function adicionarNoSite() {
    const elemento = document.getElementById('maior-numero')
    elemento.innerHTML = `O maior número do array é ${maiorNumero(numeros)}`
}

