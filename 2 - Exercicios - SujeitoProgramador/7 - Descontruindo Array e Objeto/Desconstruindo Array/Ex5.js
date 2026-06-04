const produtos = [
    ["notebook", 3500],
    ["Mouse", 50],
    ["Teclado", 200]
]

const [
    [nomeProduto1, precoProduto1], 
    [nomeProduto2, precoProduto2], 
    [nomeProduto3, precoProduto3]
] = produtos

console.log(`${nomeProduto1} - ${precoProduto1} \n${nomeProduto2} - ${precoProduto2} \n${nomeProduto3} - ${precoProduto3}`)