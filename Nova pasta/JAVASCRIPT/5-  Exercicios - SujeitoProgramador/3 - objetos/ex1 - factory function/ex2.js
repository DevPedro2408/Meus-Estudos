function criarProduto(produto, preco) {
    return {
        produto,
        preco,
        desconto: 10,
        precoFinal() {
            const produtoComDesconto = this.preco - (this.preco * this.desconto) / 100
            return  `Produto: ${this.produto} Preço: ${this.preco} Preço com desconto: ${produtoComDesconto}`
        }
    }
}

const p1 = criarProduto("Feijão", 5)
const p2 = criarProduto("Arroz", 10)
const p3 = criarProduto("Batata", 7)

console.log(p1.precoFinal()) 
