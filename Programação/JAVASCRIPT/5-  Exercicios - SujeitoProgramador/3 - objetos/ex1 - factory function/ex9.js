function criarCarrinho() {
    return {
        itens: [],
        adicionarItens(nome, preco, quantidade) {
            let add = this.itens.findIndex(item => {
                return item.nome === nome
            })

            if (add === -1) {
                this.itens.push( {nome, preco, quantidade} )
            } else {
                this.itens[add].quantidade += quantidade
            }
        },

        lista() {
            return this.itens
        }
    }
}

const p1 = criarCarrinho()

p1.adicionarItens("Arroz", 10, 2)
p1.adicionarItens("Arroz", 10, 5)
p1.adicionarItens("Morango", 15, 3)


console.log(p1.lista())