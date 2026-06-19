let produtos = [
    {
        nome: "Arroz",
        estoque: 5
    },
    {
        nome: "Feijão",
        estoque: 20
    },
    {
        nome: "Macarrão",
        estoque: 0
    }
];

function verificarEstoque(produto) {
    let eleProduto = produtos.find(prod => prod.nome.toLocaleLowerCase() === produto.toLocaleLowerCase())

    let estoqueEle = eleProduto.estoque

    switch(true) {
        case estoqueEle <= 0:
            console.log("Sem estoque")
            break
        case estoqueEle < 10:
            console.log("Estoque baixo")
            break
        case estoqueEle >= 10: 
            console.log("Estoque normal")
            break
    }
}

verificarEstoque("ARroZ")
verificarEstoque("Feijão")