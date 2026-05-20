function criarPessoa(nome, idade) {
    return {
        nome,
        idade,
        apresentrar() {
            return `Olá meu nome é ${this.nome} tenho ${this.idade} anos`
        }
    }
}

const p1 = criarPessoa("Ana", 20)
console.log(p1.apresentrar())
const p2 = criarPessoa("Pedro", 21)
console.log(p2.apresentrar())