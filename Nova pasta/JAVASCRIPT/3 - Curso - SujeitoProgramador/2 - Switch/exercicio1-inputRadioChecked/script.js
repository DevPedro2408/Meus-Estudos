function realizarOperacao() {
    let radioChecked = document.querySelector(`input[name="radioChecked"]:checked`)
    let resultadoEl = document.getElementById("resultado")
    let input1 = document.getElementById("valor1")
    let input2 = document.getElementById("valor2")

    let valor1 = parseFloat(input1.value)
    let valor2 = parseFloat(input2.value)

    if (isNaN(valor1) || isNaN(valor2)) {
        alert("Digite números válidos!!")
    }

    let resultado = 0

    switch (radioChecked.value) {
        case "somar":
            resultado = valor1 + valor2
            break
        case "subtrair": 
            resultado = valor1 - valor2
            break
        case "multiplicar": 
            resultado = valor1 * valor2
            break
        case "dividir": 
            if (valor2 === 0) {
                alert("Não é possivel dividir por Zero!")
            }  else {
                resultado = valor1 / valor2
            }
            break
    }

    resultadoEl.textContent = `Resultado: ${resultado}`

    input1.value = ""
    input2.value = ""
}