let listaNomes = ["Pedro", "Joao", "Andre", "Marcelo", "Lima"]
// Exibo o terceiro nome da lista. "Andre"
//console.log(listaNomes[2])


// Adiciono o nome Thiago ao final da lista.
listaNomes.push("Thiago")
// console.log(listaNomes)

// Shift Elemina o primeiro elemento do Array
let nomeEliminado = listaNomes.shift()

// console.log(listaNomes)
// console.log(`Nome eliminado: ${nomeEliminado}`)

// Verifica se o nome "Pedro" está na lista e retonar True se o nome estiver se não retorna false
// console.log(listaNomes.includes("Thiago"))

// Verifica a uantidade de elementos dentro de Array.
console.log(listaNomes.length)