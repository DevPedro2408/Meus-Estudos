let pedidos = [
    {id: 1, status: 1},
    {id: 2, status: 2},
    {id: 3, status: 3},
    {id: 4, status: 4},
]

function verificarPedidos(numeroPedido) {
    switch (numeroPedido) {
        case numeroPedido === 1:
            console.log("Pedido Recebido")
            break
        case numeroPedido === 2:
            console.log("Em preparação")
            break
        case numeroPedido === 3:
            console.log("Saiu para entrega")
            break
        case numeroPedido === 4:
            console.log("Pedido entregue")
            break
    }
}

verificarPedidos(2)