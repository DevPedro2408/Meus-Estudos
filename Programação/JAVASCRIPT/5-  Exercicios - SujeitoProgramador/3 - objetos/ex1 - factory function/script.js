function criarPessoa(nome, sobrenome, idade, email) {
    return {
        nome, 
        sobrenome,
        idade,
        email,
        nomeCompleto() { // Isso é um método
            return `${this.nome} ${this.sobrenome}`
        },
        dataNascimento() { // Isso é um método
            const dataAtual = new Date
            return dataAtual.getFullYear() - this.idade
        }
    }
}

const p1 = criarPessoa("Pedro", "Augusto", 21)
const p2 = criarPessoa("Jeovana", "Rodrigues", 20)
console.log(p1.nomeCompleto())
console.log(p1.dataNascimento())
console.log(p2.nomeCompleto())