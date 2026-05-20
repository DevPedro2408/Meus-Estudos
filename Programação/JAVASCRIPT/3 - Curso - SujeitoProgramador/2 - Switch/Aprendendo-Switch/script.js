function pedir() {
    let valor = prompt("Digite um valor de 1 a 4:")

    let numValor = Number(valor)

    switch (numValor) {
        case 1:
            alert("Estamos preparando seu suco!")
            break
        case 2:
            alert("Estamos levando sua agua gelada!")
            break
        case 3: 
            alert("Estamos preparando seu sorvete!")
            break
        case 4:
            alert("Garçom: Como posso ajuadar?")
            break
        default:    
            alert("Escolha uma opção entre 1 a 4!")
            break
    }
}