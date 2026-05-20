
function resultado() {
    let inputDia = document.getElementById("inputDia")
    let resul = document.getElementById("resul")
    
    let valorNumber = parseFloat(inputDia.value)

    switch(valorNumber) {
        case 1: 
            resul.innerHTML = "Domingo"
            break
        case 2: 
            resul.innerHTML = "Segunda-feira"
            break
        case 3: 
            resul.innerHTML = "Terça-feira"
            break
        case 4: 
            resul.innerHTML = "Quarta-feira"
            break
        case 5: 
            resul.innerHTML = "Quinta-feira"
            break
        case 6: 
            resul.innerHTML = "Sexta-feira"
            break
        case 7: 
            resul.innerHTML = "Sábado"
            break
        default: 
            alert("Só existe 7 dias na semana!!")
    }
    inputDia.value = ""
}