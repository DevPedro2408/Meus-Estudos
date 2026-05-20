function criarEstoque() {
    return {
        itens: [],
        adicionarProduto(nome, quantidade) {
            this.itens.push( {nome, quantidade} )
        },
        removerProduto(nome, quantidade) {
            let produtoRemovido = this.itens.findIndex(produtos => {
                return produtos.nome.toLowerCase() === nome.toLowerCase()
            })

            if (quantidade >= this.itens[produtoRemovido].quantidade) {
                this.itens.splice(produtoRemovido, 1)
            } else {
                this.itens[produtoRemovido].quantidade -= quantidade
            }
        },
        lista() {
            return this.itens
        },
        alertaDeEstoqueBaixo(limite) {
            let abaixoDoLimite = this.itens.filter(abaixo => {
                return abaixo.quantidade <= limite
            })

            return abaixoDoLimite
        }
    }
}

const p1 = criarEstoque()

p1.adicionarProduto("Chuteira", 10)
p1.adicionarProduto("Bola", 5)
p1.adicionarProduto("Raquete", 17)
p1.adicionarProduto("Luva", 2)
p1.adicionarProduto("Meia", 4)

p1.removerProduto("Luva", 1)
p1.removerProduto("chuteira", 3)

console.log(p1.lista())

console.log(p1.alertaDeEstoqueBaixo(5))