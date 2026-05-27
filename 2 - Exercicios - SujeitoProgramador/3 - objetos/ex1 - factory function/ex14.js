function criarAgenda() {
    return {
        itens: [],
        adicionarContatos(nome, telefone) {
            this.itens.push( {nome, telefone} )
        },
        removerContato(nome) {
            let remove = this.itens.findIndex(item => item.nome.toLowerCase() === nome.toLowerCase())

            if (remove === -1) {
                return "Nome não foi encontrado na agenda!!"
            } else {
                this.itens.splice(remove, 1)
            }
        },
        buscarContato(parteDoNome) {
            let resulNomes = this.itens.filter(nomes => {
                return nomes.nome.toLowerCase().includes(parteDoNome.toLowerCase())
            })

            return resulNomes
        },
        editarContato(nome, novoTelefone) {
            let editarTel = this.itens.findIndex(editar => editar.nome.toLowerCase() === nome.toLowerCase())

            if (editarTel === -1) {
                return "Nome não foi encontrado na agenda!!"
            } else {
                this.itens[editarTel].telefone = novoTelefone
            }
        },
        listaOrdenadaPorTamanhoDoNome() {
            return this.itens.sort((a, b) => a.nome.length - b.nome.length)
        },
        lista() {
            return this.itens
        }
    }
}

const agenda1 = criarAgenda()

agenda1.adicionarContatos("Pedro Augusto", "98991042408")
agenda1.adicionarContatos("Jeovana Catanhede", "98992352473")
agenda1.adicionarContatos("Wellison Sales", "98992463826")
agenda1.adicionarContatos("Pedro Lucas", "98972950671")

// agenda1.removerContato("Pedro augusto")

// console.log(agenda1.buscarContato("pedr"))

agenda1.editarContato("Pedro lucas", "8812345678")

console.log(agenda1.listaOrdenadaPorTamanhoDoNome())

// console.log(agenda1.lista())