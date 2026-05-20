const listaNum = [...document.querySelectorAll(".listaNum")]
const mostrarPares = document.querySelector("#mostrarPares")
const resul = document.querySelector("#resul")

// Pega os <li> do HTML e transforma em um array de números.
let numeros = [...document.querySelectorAll(".numeros")].map(li => Number(li.textContent)) 

mostrarPares.addEventListener("click", () => {
    resul.innerHTML = ""
    numeros.forEach(elementos => {
        if (elementos % 2 === 0) {
            let listaPar = document.createElement("li")
            listaPar.innerHTML = elementos

            resul.appendChild(listaPar)
        }
    })
})


// let nomes = [...document.querySelectorAll(".nomes")].map(elementos => elementos.textContent)

// console.log(nomes)

