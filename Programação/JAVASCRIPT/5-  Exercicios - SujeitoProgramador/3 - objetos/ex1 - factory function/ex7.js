function criarProduto() {
    return {
        itens: [],
        adicionarItem(nome, preco, quantidade) {
            this.itens.push( {nome, preco, quantidade} )       
        },

        existe(itemExistente) {
            let verificar = this.itens.some(item => {
                return item.nome.toLowerCase() === itemExistente.toLowerCase()
            })

            return verificar
        },

        lista() {
            return this.itens
        }
    }
}

const p1 = criarProduto()

p1.adicionarItem("Oleo", 10, 4)
p1.adicionarItem("Laranja", 4, 8)
p1.adicionarItem("Arroz", 7, 2)


console.log(p1.lista())
console.log(p1.existe("aRroz"))