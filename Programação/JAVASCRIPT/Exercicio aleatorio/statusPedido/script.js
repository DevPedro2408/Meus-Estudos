let pedidos = [
    {id: 1, status: 1},
    {id: 2, status: 4},
    {id: 3, status: 3},
    {id: 4, status: 1},
    {id: 5, status: 3},
    {id: 6, status: 2}
]

function verificarPedidos(numeroPedido) {
    let nPedido = pedidos.findIndex(ele => {
        return ele.id === numeroPedido
    })

    switch (pedidos[nPedido].status) {
        case 1:
            console.log("Pedido Recebido")
            break
        case 2:
            console.log("Em preparação")
            break
        case 3:
            console.log("Saiu para entrega")
            break
        case 4:
            console.log("Pedido entregue")
            break
    }
}

verificarPedidos(2)