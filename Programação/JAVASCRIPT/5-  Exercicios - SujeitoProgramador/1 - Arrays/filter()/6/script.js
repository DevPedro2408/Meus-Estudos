let produtos = [
  { nome: "Hambúrguer", preco: 25 },
  { nome: "Batata", preco: 10 },
  { nome: "Refrigerante", preco: 8 },
  { nome: "Milkshake", preco: 15 },
  { nome: "Combo Família", preco: 45 }
]

let ImprimirNomeCustamMenos20 = produtos.filter(elementos => elementos.preco < 20)

ImprimirNomeCustamMenos20.map(ele => {
    console.log(ele.nome)
})