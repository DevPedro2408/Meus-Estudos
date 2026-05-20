function criarCarrinho() {
    return {
        itens: [],
        adcionarItens(nome, preco, quantidade) {
            this.itens.push( {nome, preco, quantidade} )
        },

        total() {
            let resul = 0
            for (let i = 0; i < this.itens.length; i++) {
                resul += (this.itens[i].preco * this.itens[i].quantidade)
            }
            return `Preço total: ${resul}`
        },

        lista() {
            return this.itens
        }
    }
}

// const p1 = criarCarrinho()

// p1.adcionarItens("Arroz", 10, 3)
// p1.adcionarItens("Laranja", 5, 1)

// console.log(p1.lista())

// console.log(p1.total())

let p2 = [
    {nome: "Arroz", preco: 12, quantidade: 2},
    {nome: "banana", preco: 5, quantidade: 4}
]

let p3 = [
    {nome: "Arroz", preco: 12, quantidade: 2},
    {nome: "banana", preco: 5, quantidade: 4}
]

function getTotal(objeto) {
    let resul = 0
    for (let i = 0; i < p2.length; i++) {
        resul += (objeto[i].preco * objeto[i].quantidade)
    }
    return resul
}

function mostrar() {
    return p2
}

console.log(mostrar(p2))
console.log(getTotal(p2))

// p2.getTotalPreco = function() {
//     let resul = 0
//     for (let i = 0; i < p2.length; i++) {
//         resul += (p2[i].preco * p2[i].quantidade)
//     }
//     return resul
// }

// console.log(p2.getTotalPreco())