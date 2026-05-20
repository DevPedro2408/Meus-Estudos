// && -> e
// || -> ou
// !  -> not não
let nome = document.querySelector("#nome")
let idade = document.querySelector("#idade")
let btn = document.querySelector("#btn")
let resul = document.querySelector("#resul")
let temIgresso = true

btn.addEventListener("click", () => {
    resul.innerHTML = ""
    let valorIdade = Number(idade.value)

    if ((valorIdade >= 18) && (temIgresso === true)) {
        resul.innerHTML = `${nome.value}, sua entrada foi Permitida!`
    }
    else {
        resul.innerHTML = `${nome.value}, sua entrada foi Negada!`
    }
})
