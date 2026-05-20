let elementos = ["Maria", "Joao", "Ana"]
let votos = ["Maria", "Maria", "Joao", "Ana"]

// Verifica quantas vezes os nomes que estão dentro do Array elementos ganhou votos.

elementos.forEach(elementos => {
    let totalVotos = votos.filter(voto => voto === elementos).length

    console.log(`${elementos} - ${totalVotos}`)
})



