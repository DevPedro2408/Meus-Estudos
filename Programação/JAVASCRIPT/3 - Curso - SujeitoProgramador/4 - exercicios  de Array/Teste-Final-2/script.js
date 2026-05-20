const mostrarResultado = document.getElementById("mostrarResultado")
let resulFinal = document.getElementById("resulFinal")

function mostrarCandidatos() {
    let resulCandidatos = document.getElementById("resulCandidatos")
    let btnMostrarCandidatos = document.getElementById("btnMostrarCandidatos").style.display = "none"

    let candidatos = ["Maria", "Pedro", "João", "Lima"]
    let votos = []

    candidatos.map(ele => {
        adicionarListaSimples(ele, resulCandidatos)

        let btnVotar = document.createElement("button")
        btnVotar.classList.add("votar")
        btnVotar.value = ele
        btnVotar.innerHTML = "Votar"

        btnVotar.addEventListener("click", () => {
            votos.push(btnVotar.value)
            console.log(votos)
        })

        resulCandidatos.appendChild(btnVotar)
    })

    mostrarResultado.classList.add("resultadoClass")
    
    mostrarResultado.addEventListener("click", () => {
        resulFinal.innerHTML = ""
        if(!(votos.length === 0)) {
            candidatos.forEach(elementos => {
                let resultadoFinal = votos.filter(voto => voto === elementos).length
                
                adicionarLista(elementos, resulFinal, resultadoFinal)
            })
        } else {
            alert("Nenhum voto computado ainda!")
        }
    })
}

function adicionarListaSimples(ele1, resultadoSimples) {
    let addListaSimples = document.createElement("li")
    addListaSimples.innerHTML = ele1

    resultadoSimples.appendChild(addListaSimples)
}

function adicionarLista(el1, resul, votosCandidatos) {
    let addLista = document.createElement("li")
    addLista.innerHTML = `${el1} - ${votosCandidatos}`

    resul.appendChild(addLista)
}
