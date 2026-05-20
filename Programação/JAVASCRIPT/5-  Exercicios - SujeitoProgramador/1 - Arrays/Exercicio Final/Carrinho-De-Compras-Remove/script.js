let inputNome = document.getElementById("inputNome")
let inputPreco = document.getElementById("inputPreco")
let inputQuantidade = document.getElementById("inputQuantidade")
let btnAdicionar = document.getElementById("btnAdicionar")
let produtos = document.getElementById("produtos")
let carrinhoResul = document.getElementById("carrinhoResul")
let resulTotal = document.getElementById("resulTotal")

let arrayProdutos = []

let arrayCarrinho = [] 

btnAdicionar.addEventListener("click", () => {
    let nome = inputNome.value
    let preco = Number(inputPreco.value)
    let quantidade = Number(inputQuantidade.value)

    if(nome === "" || isNaN(preco) || preco <= 0) {
        alert("Preencha o nome, preço e quantidade corretamente!")
    } else {
        arrayProdutos.push( {nome: nome, preco: preco, quantidade: quantidade} )

        produtos.classList.add("produtosClassShow")
    }

    inputNome.value = ""
    inputPreco.value = ""
    inputQuantidade.value = ""

    mostrarProdutos()
})

function mostrarProdutos() {
    produtos.innerHTML = ""
    
    arrayProdutos.forEach(elementos => {
        let addListaProduto = document.createElement("li")
        addListaProduto.innerHTML = `${elementos.nome} R$${elementos.preco} Quanti.:${elementos.quantidade}`
        let btnAddCarrinho = document.createElement("button")
        btnAddCarrinho.innerHTML = "Adicionar"
        btnAddCarrinho.classList.add("btnAddCarrinho")

        botaoAddAoCarrinho(btnAddCarrinho, elementos, addListaProduto)

        produtos.append(addListaProduto, btnAddCarrinho)
    })
}

function botaoAddAoCarrinho(botao, el, addProduto) {
    botao.addEventListener("click", ()=> {
         carrinhoResul.innerHTML = ""
            if(el.quantidade < 1) {
                alert("Não tem mais este produto em estoque!")
            } else {
                el.quantidade -= 1
                addProduto.innerHTML = `${el.nome} R$${el.preco} Quanti.:${el.quantidade}`

                let existente = arrayCarrinho.find(item => item.nome === el.nome)
    
                if(existente) {
                    existente.quantidade += 1
                } else {
                    arrayCarrinho.push({ ...el, quantidade: 1 })
                }
                
                arrayCarrinho.forEach(eleCarrinho => {
                    createLiCarrinho(eleCarrinho, carrinhoResul)

                    let SomaTotal = arrayCarrinho.reduce((acumulador, valorTotal) => {
                        return acumulador + valorTotal.preco * valorTotal.quantidade
                    }, 0)

                    resulTotal.innerHTML = SomaTotal
                })  
            }
    })
}

function createLiCarrinho(elemento, resultado) {
    let addLi = document.createElement("li")
    addLi.innerHTML = `${elemento.nome} R$${elemento.preco} Quanti.:${elemento.quantidade}`
    let btnRemove = document.createElement("button")
    btnRemove.innerHTML = "Remover"

    botaoRemover(elemento, btnRemove)

    resultado.append(addLi, btnRemove)
}

function botaoRemover(eleARemover, buttonRemove) {
    buttonRemove.addEventListener("click", () => {
        carrinhoResul.innerHTML = ""
        
        if (eleARemover.quantidade > 1) {
            eleARemover.quantidade -= 1

            valorTotalCarrinho(arrayCarrinho)

            arrayCarrinho.forEach(carrinhoAtualizado => {
                createLiCarrinho(carrinhoAtualizado, carrinhoResul)
            })
        } else {
            let elementoRemovido = arrayCarrinho.indexOf(eleARemover)
            arrayCarrinho.splice(elementoRemovido, 1)

            valorTotalCarrinho(arrayCarrinho)

            arrayCarrinho.forEach(carrinhoAtualizado => {
                createLiCarrinho(carrinhoAtualizado, carrinhoResul)
            })
        }
        console.log(eleARemover)
    })
}

function valorTotalCarrinho(array) {
    let somaTotal = array.reduce((acumulador, valorTotal) => {
        return acumulador + valorTotal.preco * valorTotal.quantidade
    }, 0)
    resulTotal.innerHTML = somaTotal
}