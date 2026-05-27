// function criarSistema() {
//     return {
//         itens: [],
//         adicionarUsuario(nome, email) {
//             if (this.itens.email === email) {
//                 return "Este email ja está sendo usado"
//             }else {
//                 this.itens.push( {nome, email} )
//             }
//         },
//         removerUsuario(email) {
//             let removeUsuario = this.itens.findIndex(remove => {
//                 return remove.email === email
//             })

//             if (removeUsuario === -1) {
//                 console.log("Email incorreto!!!") 
//             }  else {
//                 this.itens.splice(removeUsuario, 1)
//             }
//         },
//         buscarUsuario(email) {
//             return this.itens.find(usuario => usuario.email === email)
//         },
//         listarUsuariosOrdenados() {
//             return this.itens.sort((a, b) => a.nome.localeCompare(b.nome))
//         },
//         lista() {
//             return this.itens
//         }
//     }
// }

// const sistema = criarSistema()

// sistema.adicionarUsuario("Pedro", "pe.augusto2408@gmail.com")
// sistema.adicionarUsuario("Lucas Lima", "lucaslima@gmail.com")
// sistema.adicionarUsuario("Jeovana", "jeovanarodrigues@gmail.com")

// // sistema.removerUsuario("jeovanarodrigues@gmail.com")

// // console.log(sistema.lista())

// console.log(sistema.buscarUsuario("pe.augusto2408@gmail.com"))

// console.log(sistema.listarUsuariosOrdenados())

function criarSistema() {
    return {
        itens: [],
        adicionarUsuario(nome, email) {
            if (this.itens.nome === nome) {
                return "Este email já está sendo usado!"
            } else {
                return this.itens.push( {nome, email} )
            }
        },
        removerUsuario(email) {
            let removeUsuario = this.itens.findIndex( item => item.email === email)

            if (removeUsuario === -1) {
                return "Erro, Email inválido!"
            } else {
                this.itens.splice(removeUsuario, 1)
            }
        },
        buscarUsuario(email) {
            return this.itens.find(item => item.email === email)
        },
        listarUsuariosOrdenados() {
            return this.itens.sort((a, b) => a.nome.localeCompare(b.nome))
        },
        lista() {
            return this.itens
        }
    }
}

const usuario1 = criarSistema() 

usuario1.adicionarUsuario("Pedro Augusto", "pe.augusto2408@gmail.com")
usuario1.adicionarUsuario("Kaline kecie", "kalinekecie@gmail.com")
usuario1.adicionarUsuario("Jeovana Cantanhede", "jeovanarodrigues@gmail.com")

usuario1.removerUsuario("pe.augusto2408@gmail.com")

console.log(usuario1.buscarUsuario("jeovanarodrigues@gmail.com"))

usuario1.adicionarUsuario("Lucas Lima", "lucaslima@gmail.com")

console.log(usuario1.lista())

console.log(usuario1.listarUsuariosOrdenados())