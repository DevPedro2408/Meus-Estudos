// const pessoa1 = new Object()
// pessoa1.nome = "Pedro"
// pessoa1.sobrenome = "Augusto"
// pessoa1.idade = 21

const pessoa1 = {
    nome: "Pedro",
    sobrenome: "Augusto",
    idade: 21
}

pessoa1.falarNome = function() {
    return (`${this.nome} está falando seu nome.`)
}

// console.log(pessoa1.falarNome())


// pessoa1.getDataNascimento = function() {
//     const dataAtual = new Date()
//     return dataAtual.getFullYear() - this.idade
// }

// console.log(pessoa1.getDataNascimento())

console.log(dataNascimento(pessoa1.idade))

function dataNascimento(data) {
    const dataAtual = new Date
    return dataAtual.getFullYear() - data
}


for (let chave in pessoa1) {
    console.log(pessoa1[chave])
}
