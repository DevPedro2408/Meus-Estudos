function contaBancaria(dinheiroNaConta) {
    return {
        dinheiroNaConta,
        depositar(depositarMoney) {
            this.dinheiroNaConta += depositarMoney
        },
        sacar(sacarMoney) {
            this.dinheiroNaConta -= sacarMoney
        },
        verSaldo() {
            return this.dinheiroNaConta
        }
    }
}

const p1 = contaBancaria(100)
p1.depositar(100)
p1.sacar(20)
console.log(p1.verSaldo())