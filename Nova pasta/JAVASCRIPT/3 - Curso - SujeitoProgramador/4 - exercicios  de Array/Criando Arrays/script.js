const cursos = [...document.querySelectorAll(".cursos")]

cursos.map((elementos, uantidade) => {
    // elementos.classList.add("lista")
    elementos.addEventListener("click", (event) => {
        elementos.classList.toggle("lista")
    })
    console.log(elementos)
})


console.log("============")

let lista = ["Pedro", "Joao", "Ismael", 10]

// for(n of cursos) {
//     console.log(n)
// }

let nome1 = `Pedro`

let nomeLista = (lista.indexOf(nome1))

console.log(lista[nomeLista])