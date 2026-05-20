let criarConta = document.querySelector("#criarConta")
let fazerLogin = document.querySelector("#fazerLogin")
let containerCriar = document.querySelector(".containerCriar")
let criarNome = document.querySelector("#criarNome")
let alertaNome = document.querySelector(".alertaNome")
let criarSenha = document.querySelector("#criarSenha")
let alertaSenha = document.querySelector(".alertaSenha")
let btnSalvar = document.querySelector("#btnSalvar")
let containerLogin = document.querySelector(".containerLogin")
let nomeUsuario = document.querySelector("#nomeUsuario")
let senhaUsuario = document.querySelector("#senhaUsuario")
let alertaNomeLogin = document.querySelector(".alertaNomeLogin")
let alertaSenhaLogin = document.querySelector(".alertaSenhaLogin")
let btnEntrar = document.querySelector("#btnEntrar")
let concluido = document.querySelector(".concluido")
let entrou = document.querySelector(".entrou")

let nome = ""
let senha = ""

criarConta.addEventListener("click", () => {
    if (!containerCriar.classList.contains("containerCriarShow")) {
        containerCriar.classList.add("containerCriarShow")
        containerLogin.classList.remove("containerLoginShow")
    }
})

fazerLogin.addEventListener("click", () => {
    if (!(containerLogin.classList.contains("containerLoginShow"))) {
        containerLogin.classList.add("containerLoginShow")
        containerCriar.classList.remove("containerCriarShow")
        concluido.classList.remove("concluidoShow")
        alertaNome.innerHTML = ""
        alertaSenha.innerHTML = ""
    }
})

btnSalvar.addEventListener("click", () => {
    if (criarNome.value === "" || criarSenha.value === "") {
        if (criarNome.value === "") {
            alertaNome.innerHTML = "Crie seu nome de usuário!"
        } else {
            alertaNome.innerHTML = ""
        }

        if (criarSenha.value === "") {
            alertaSenha.innerHTML = "Crie sua senha!"
        } else {
            alertaSenha.innerHTML = ""
        }
    } else if (!concluido.classList.contains("concluidoShow")) {
        concluido.classList.add("concluidoShow")
        alertaNome.innerHTML = ""
        alertaSenha.innerHTML = ""
        nome = criarNome.value
        senha = criarSenha.value
    }

})

btnEntrar.addEventListener("click", () => {
    if (nomeUsuario.value === "" || senhaUsuario.value === "") {
        if (nomeUsuario.value === "") {
            alertaNomeLogin.innerHTML = "Insira seu nome de usuário!"
        } else {
            alertaNomeLogin.innerHTML = ""
        }

        if (senhaUsuario.value === "") {
            alertaSenhaLogin.innerHTML = "Insira sua senha!"
        } else {
            alertaSenhaLogin.innerHTML = ""
        }
    } else if (nome === nomeUsuario.value && senha === senhaUsuario.value) {
        entrou.innerHTML = "Deu certo!"
        alertaNomeLogin.innerHTML = ""
        alertaSenhaLogin.innerHTML = ""
    } else {
        entrou.innerHTML = ""
        if (!nome === nome || senha === senha) {
            if (nome != nome) {
                alertaNomeLogin.innerHTML = "Nome de usuário incorreto!"
            } else {
                alertaNomeLogin = ""
            }
            if (senha != senha) {
                alertaSenhaLogin.innerHTML = "Senha incorreta!"
            } else {
                alertaSenhaLogin.innerHTML = ""
            }
        } else {
            entrou.innerHTML = "Usuário não cadastrado!"
            alertaNomeLogin.innerHTML = ""
            alertaSenhaLogin.innerHTML = ""
        }
    }
})