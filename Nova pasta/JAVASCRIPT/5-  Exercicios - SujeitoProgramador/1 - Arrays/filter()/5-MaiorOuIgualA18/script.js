const pessoas = [
    {nome: "Pedro", idade: 21},
    {nome: "Lima", idade: 18},
    {nome: "Breno", idade: 12},
    {nome: "Thiago", idade: 29},
    {nome: "Joao", idade: 17},
]

let pessoarMaior18 = pessoas.filter(maior18 => maior18.idade >= 18)

console.log(pessoarMaior18)