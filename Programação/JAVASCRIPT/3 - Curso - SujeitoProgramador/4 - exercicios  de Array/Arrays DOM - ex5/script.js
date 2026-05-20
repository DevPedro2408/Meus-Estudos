let inputTexto = document.querySelector(".inputTexto")
let listaResul = document.querySelectorAll("#listaResul")

let array = ["Hambúrguer", "Batata", "Refrigerante", "Milkshake"]

// O evento input ele dispara toda vez que o usuário digita ou apaga.
inputTexto.addEventListener("input", () => {
    listaResul.innerHTML = ""

    let resultadoArray = array.filter(lanches => 
        lanches.toLowerCase().includes(inputTexto.value.toLowerCase())
    )
    
    resultadoArray.forEach(lanches => {
        let lista = document.createElement("li")
        lista.innerHTML = lanches
        
        listaResul.appendChild(lista)
    })
})


for(n of listaResul) {
    console.log(lista)
} 