function enviarMensagem(tipo) {
    switch (tipo) {
        case "sucesso":
            console.log("Cadastro Realizado!")
            break
        case "erro":
            console.log("Ocorreu um erro!")
            break
        case "aviso":
            console.log("Verifique seus dados!")
            break
    }
}

setTimeout(() => {
    enviarMensagem("sucesso")
}, 3000)
