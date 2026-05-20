let btn = document.getElementById("botao") 
let resultado = document.getElementById("resultado")


btn.addEventListener("click", () => {
    let inputText = document.getElementById("inputText")
    let textValue = inputText.value.toUpperCase()
    
    switch(textValue) {
        case "A": 
            resultado.innerHTML = "Exelente"
            break
        case "B": 
            resultado.innerHTML = "Bom"
            break
        case "C": 
            resultado.innerHTML = "Regular"
            break
        case "D": 
            resultado.innerHTML = "Ruim"
            break
        case "F": 
            resultado.innerHTML = `<div class="reprovado">Reprovado</div>`
            break
        default: 
            resultado.innerHTML = `<div id="invalida">Nota inválida!</div>`

    }
    inputText.value = ""
})