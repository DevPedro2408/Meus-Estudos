function criarUsuario(nome, email, senha) {
    return {
        nome,
        email,
        senha,
        validarEmail() {
            return  `Enviamos um código de validação para seu email ${this.email}`
        },
        trocarSenha(novaSenha) {
            this.senha = novaSenha
            return `Senha Alterada com sucesso!!`
        },
        info() {
            return `Nome de usuário: ${this.nome} Email: ${this.email} senha: ${this.senha}`
        }
    }
}

const p1 = criarUsuario("Pedro", "pe.augusto2408@gmail.com", "12345")

console.log(p1.info())
console.log(p1.trocarSenha(54321))
console.log(p1.info())