function criarConta(nome) {
    return {
        saldoAtual: 0,
        transacoes: [],
        depositar(valor) {
            this.saldoAtual += valor
            this.transacoes.push(valor)
        },
        sacar(valorDoSaque) {
            this.saldoAtual -= valorDoSaque
        },
        extrato() {
            return this.transacoes
        },
        saldo() {
            return this.saldoAtual
        },
        ultimasTrasacoes() {
            let quantidade = this.transacoes.length
            if (quantidade > 3) {
                return ultimos3 = this.transacoes.slice(-3)
            } else if (quantidade <= 3) {
                return ultimo = this.transacoes.slice(-1)
            }
        }
    }
}

const conta1 = criarConta("Pedro")

conta1.depositar(2000)
conta1.depositar(800)
conta1.depositar(500)
// conta1.depositar(1500)
// conta1.depositar(1000)
// conta1.depositar(600)

// console.log(conta1.saldo())

// console.log(conta1.extrato())
console.log(conta1.ultimasTrasacoes())