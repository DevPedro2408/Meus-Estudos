let produtos = [
    {codigo: 1, nome: "Mouse"},
    {codigo: 2, nome: "Teclado"}
]

let busca = produtos.findIndex(ele => ele.codigo === 2)
if (busca === -1) {
    console.log(`Código 2 não encontrado!`)
} else {
    console.log(`Produto com código ${produtos[busca].codigo} existe!`)
}