function criarCarrinho() {
    return {
        itens: [],
        adcionarItens(nome, preco, quantidade) {
            this.itens.push( {nome, preco, quantidade} )
        },

        aplicarDesconto() {
            let total = 0
            for (let i = 0; i < this.itens.length; i++) {
                total += (this.itens[i].preco * this.itens[i].quantidade)
            }

            let totalSemDesconto = total
            
            if(total > 100) {
                total -= (total * 5)/100
            } else if(total > 200) {
                total -= (total * 10)/100
            } else if(total > 500) {
                total -= (total * 20)/100
            }

            let ValorDesconto = totalSemDesconto - total

            return `Total sem desconto ${totalSemDesconto} \nTotal com desconto ${total} \nValor do desconto ${ValorDesconto}`
        },

        lista() {
            return this.itens
        }
    }
}

const p1 = criarCarrinho()

p1.adcionarItens("Arroz", 10, 8)
p1.adcionarItens("Laranja", 5, 5)

console.log(p1.lista())
console.log(p1.aplicarDesconto())