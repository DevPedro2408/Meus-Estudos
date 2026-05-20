function criarCarrinho() {
    return {
        itens: [],
        adicionarCarrinho(nome, preco, quantidade) {
            this.itens.push( {nome, preco, quantidade} )
        },

        resumir() {
            let total = 0
            for (let i = 0; i < this.itens.length; i++) {
                total += this.itens[i].preco
            }
            return `Itens no carrinho: ${this.itens.length} \nTotal: ${total}`
        }
    }
}

const p1 = criarCarrinho() 

p1.adicionarCarrinho("Frango", 20, 4)
p1.adicionarCarrinho("Carne", 35, 7)
p1.adicionarCarrinho("Tempero", 1.5, 10)

console.log(p1.resumir())
