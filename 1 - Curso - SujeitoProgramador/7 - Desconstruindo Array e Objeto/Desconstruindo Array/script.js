const nomes = ["Pedro", "Jeovana", "Lucas", "Andre"]

const [ nome1, nome2, nome3, nome4 ] = nomes

// console.log(nome1)

//Segundo Método:

const pessoas = ["João", "Kaline", "Marcelo", "Breno"]

const { 1:kaline, 3:ultimaPessoa } = pessoas

console.log(kaline, ultimaPessoa)