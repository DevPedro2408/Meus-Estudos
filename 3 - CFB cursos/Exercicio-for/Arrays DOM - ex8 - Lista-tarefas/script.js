let inputTexto = document.getElementById("inputTexto")
let btnAdicionar = document.getElementById("btnAdicionar")
let resul = document.getElementById("resul")
let array = []

btnAdicionar.addEventListener("click", () => {
    resul.innerHTML = ""

    array.push(inputTexto.value)
    atualizar()
    

    inputTexto.value = ""
})


function atualizar() {
    for (let i = 0; i < array.length; i++) {
        let addLista = document.createElement("li")
        addLista.innerHTML = array[i]

        resul.appendChild(addLista)
        
        addLista.addEventListener("click", () => {
            array.splice(i, 1)
        })
    }
}




// array.forEach(elementos => {
    //     let addLista = document.createElement("li")
    //     addLista.innerHTML = elementos

    //     addLista.addEventListener("click", () => {
            
    //     })

    //     resul.appendChild(addLista)
    // })