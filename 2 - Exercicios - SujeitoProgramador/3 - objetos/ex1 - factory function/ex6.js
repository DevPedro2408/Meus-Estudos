function criarCarrinho() {
    return {
        itens: [],
        adicionarItem(nome, preco, quantidade) {
            this.itens.push( { nome, preco, quantidade })
        },

        atualizarItem(nomeItem, precoNovo, quantidadeNova) {
            let atualizar = this.itens.findIndex(item => {
                return item.nome === nomeItem
            })
            this.itens[atualizar].preco = precoNovo
            this.itens[atualizar].quantidade = quantidadeNova
            return "Preço e quantidade alterados!"
        },

        lista() {
            return this.itens 
        },

        limpar() {
            this.itens = []
            return "Carrinho zerado" 
        }
    }
}

const p1 = criarCarrinho()

p1.adicionarItem("Arroz", 10, 3)
p1.adicionarItem("Feijão", 7, 1)
p1.adicionarItem("Batata", 14, 7)

console.log(p1.atualizarItem("Batata", 11, 4))
console.log(p1.lista())
console.log(p1.limpar())
console.log(p1.lista())