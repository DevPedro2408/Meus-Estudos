let area = document.querySelector(".area")
const botao = document.querySelector(".botao")
const media = document.querySelector(".media")
const resul = document.querySelector("#resul")
const botaoAluno = document.querySelector(".alunoCurso")
const resulAluno = document.querySelector("#resulAluno")

function entrar() {
    let nome = prompt("Digite seu nome")

    if(nome === "" || nome === null) {
        alert("Ops algo deu errado!")
        area.innerHTML= "CLiue no botão para acessar..."
    } else {
        area.innerHTML = `Bem-vindo, ${nome}`

        let botaoSair = document.createElement("button")
        botaoSair.textContent = "Sair da conta"
        botaoSair.onclick = sair

        area.appendChild(botaoSair)
    }
}

botao.addEventListener("click", () => {
    entrar()
})

function sair() {
    alert("Até mais!")
    area.innerHTML = "Você saiu!"
}



function mediaAluno(nota1, nota2) {
    let media = (nota1 + nota2) / 2
    resul.innerHTML = media
}

media.addEventListener("click", () => {
    let num1 = prompt("Primeira nota:")
    let num2 = prompt("Segunda nota:")

    let numero1 = Number(num1)
    let numero2 = Number(num2)

    mediaAluno(numero1, numero2)
})



function aluno(nome, curso) {
    resulAluno.innerHTML = `Seja bem vindo ${nome} Ao curso de ${curso}`
}

botaoAluno.addEventListener("click", () => {
    let nomeAluno = prompt("ual seu nome?")
    let curso = prompt("ual seu curso?")

    aluno(nomeAluno, curso)
})