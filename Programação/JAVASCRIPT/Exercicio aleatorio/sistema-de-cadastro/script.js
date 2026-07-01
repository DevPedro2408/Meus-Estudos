let nomeProduto = document.getElementById("nomeProduto")
let preco = document.querySelector("#preco")
let categoria = document.getElementById("categoria")
let quantidadeEstoque = document.getElementById("quantidadeEstoque")
let inputs = document.querySelectorAll(".inputs")
let resul = document.querySelector("#resul")

let produtos = []

function adicionarProduto() {
    let precoValue = Number(preco.value)
    let quantidadeEstoqueValue = Number(quantidadeEstoque.value)

    produtos.push({
        nome: nomeProduto.value,
        preco: precoValue,
        categoria: categoria.value,
        estoque: quantidadeEstoqueValue
    })

    inputs.forEach(elements => elements.value = "")
    console.log(produtos)
    adicionarAoHtml()
}

function adicionarAoHtml() {
    resul.innerHTML = ""
    let cont = 1

    produtos.forEach((elementos, index) => {
        let addElements = document.createElement("tr")
        addElements.innerHTML = `
        <td>${cont++}</td>
        <td>${elementos.nome}</td>
        <td>${elementos.preco}</td>
        <td>${elementos.categoria}</td>
        <td>${elementos.estoque}</td>
        `

        let buttonEstoque = document.createElement("button")
        buttonEstoque.innerHTML = "Verificar Estoque"
        verificarEstoque(elementos, buttonEstoque)

        resul.append(addElements, buttonEstoque)
    })
}

function verificarEstoque(ele, btnEstoque) {
    btnEstoque.addEventListener("click", () => {
        switch(true) {
            case ele.estoque === 0:
                console.log("Produto esgotado!")
                break
            case ele.estoque <= 5:
                console.log("Estoque baixo")
                break
            case ele.estoque > 5 && ele.estoque <= 20:
                console.log("Estoque normal")
                break
            case ele.estoque > 20:
                console.log("Muito estoque")
                break
        }
    })
}
