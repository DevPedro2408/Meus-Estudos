function criarFila() {
    return {
        fila: [],
        chegarNaFila(nome) {
            this.fila.push(nome)
        },
        atender() {
            return this.fila.shift()
        },
        tamanho() {
            return this.fila.length
        },
        prioridade(nome) {
            this.fila.unshift(nome)
        },
        listarFila() {
            return this.fila
        }
    }
}

const filaDaLoterica = criarFila()

filaDaLoterica.chegarNaFila("Pedro")
filaDaLoterica.chegarNaFila("Thiago")
filaDaLoterica.chegarNaFila("Marcelo")
filaDaLoterica.chegarNaFila("Lima")
filaDaLoterica.chegarNaFila("Jeovana")
 
console.log (filaDaLoterica.atender())

console.log(filaDaLoterica.tamanho())

filaDaLoterica.prioridade("Breno")

console.log(filaDaLoterica.listarFila())
