function resultadoMes() {
    let inputMes = document.getElementById("inputMes")
    let resultado = document.getElementById("resultado")

    let valorMes = parseFloat(inputMes.value)

    switch(valorMes) {
        case 1:
            resultado.innerHTML = "Janeiro, quantidade de dias 31"
            break
        case 2:
            resultado.innerHTML = "Fevereiro, quantidade de dias 28"
            break
        case 3:
            resultado.innerHTML = "Março, quantidade de dias 31"
            break
        case 4:
            resultado.innerHTML = "Abril, quantidade de dias 30"
            break
        case 5:
            resultado.innerHTML = "Maio, quantidade de dias 31"
            break
        case 6:
            resultado.innerHTML = "junho, quantidade de dias 30"
            break
        case 7:
            resultado.innerHTML = "Julho, quantidade de dias 31"
            break
        case 8:
            resultado.innerHTML = "Agosto, quantidade de dias 31"
            break
        case 9:
            resultado.innerHTML = "Setembro, quantidade de dias 30"
            break
        case 10:
            resultado.innerHTML = "Outubro, quantidade de dias 31"
            break
        case 11:
            resultado.innerHTML = "Novembro, quantidade de dias 30"
            break
        case 12:
            resultado.innerHTML = "Dezembro, quantidade de dias 31"
            break
        default:
            alert("Mês invalido!")
    }

    inputMes.value = ""
}