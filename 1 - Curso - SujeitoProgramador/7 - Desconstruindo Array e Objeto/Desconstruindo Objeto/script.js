const pessoa = {
    nome: "Pedro",
    profissao: "Dev junior",
    sexo: "Masculino",
    idade: 21
}


const {nome:nomePessoa, profissao, sexo, idade} = pessoa

console.log(`Nome:${nomePessoa}, Idade:${idade}, Sexo:${sexo}`)