let inputAdicionar = document.getElementById("inputAdicionar")
let bntAdicionar = document.getElementById("btnAdicionar")

let adicionarNomesArray = document.getElementById("adicionarNomesArray")
let inputText = document.getElementById("inputText")
let resul = document.getElementById("resul")
let listaNomes = []

bntAdicionar.addEventListener("click", () => {
    listaNomes.push(inputAdicionar.value)
    adicionarNomesArray.innerHTML = ""

    listaNomes.map(elementos => {
        let adicionarListaNome = document.createElement("li")
        adicionarListaNome.innerHTML = elementos

        adicionarNomesArray.appendChild(adicionarListaNome)
    })

    inputAdicionar.value = ""
})


inputText.addEventListener("input", () => {
    resul.innerHTML = ""

    let resulBusca = listaNomes.filter(nomes => {
        return nomes.toLowerCase().includes(inputText.value.toLowerCase())
    }) 

    resulBusca.forEach(elemnetosNome => {
        let addResulBusca = document.createElement("li")
        addResulBusca.innerHTML = elemnetosNome

        resul.appendChild(addResulBusca)
    })

    if (inputText.value === "") {
        resul.innerHTML = ""
    }
})

