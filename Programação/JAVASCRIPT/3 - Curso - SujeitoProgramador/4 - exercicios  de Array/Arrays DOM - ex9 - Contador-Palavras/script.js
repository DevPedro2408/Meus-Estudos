let textArea = document.getElementById("textArea")
let resul = document.getElementById("resul")
let contar = document.getElementById("contar")

contar.addEventListener("click", () => {
    let string = textArea.value
    let array = string.split(" ")

    for (quantidade in array) {
        let numQuantidade = Number(quantidade)
        resul.innerHTML = `Quantidade de palavras: ${numQuantidade + 1}`
    }

    textArea.value = ""
})



