function criarCarrinho() {
    return {
        itens: [],
        adicionarItem(nome, preco, quantidade) {
            this.itens.push({ nome, preco, quantidade })
        },

        removerItem(nomeRemovido) {
            let removerObjeto = this.itens.findIndex(item => {
                // Pega o index apartir do nome que eu adicionei no nomeRemovido.
                return item.nome.toLowerCase() === nomeRemovido.toLowerCase()
            })
            this.itens.splice(removerObjeto, 1)
        },

        total() {
            let resul = 0
            for (let i = 0; i < this.itens.length; i++) {
                resul += this.itens[i].preco * this.itens[i].quantidade
            }
            return resul
        },
        
        listar() {
            return this.itens
        }
    }
}

const p1 = criarCarrinho()

p1.adicionarItem("Arroz", 10, 3)
p1.adicionarItem("Feijão", 5, 2)
p1.adicionarItem("Batata", 7.5, 5)

p1.removerItem("aRroz")

console.log(p1.listar())
console.log(p1.total())