let inputTexto = document.querySelector(".inputTexto")
let listaResul = document.querySelector("#listaResul")

let array = ["Hambúrguer", "Batata", "Refrigerante", "Milkshake"]

// O evento input ele dispara toda vez que o usuário digita ou apaga.
inputTexto.addEventListener("input", () => {
    listaResul.innerHTML = ""

    let resultadoArray = array.filter(elementos => 
        elementos.toLowerCase().includes(inputTexto.value.toLowerCase())
    )
    
    if (inputTexto.value === "") {
        listaResul.innerHTML = ""
    } else {
        resultadoArray.forEach(lanches => {
            let lista = document.createElement("li")
            lista.innerHTML = lanches
            
            listaResul.appendChild(lista)
        })
    }
})