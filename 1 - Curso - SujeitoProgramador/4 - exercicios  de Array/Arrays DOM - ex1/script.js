let resul = document.getElementById("resul")

const nomes = ["Pedro", "Andre", "Joao", "Marcelo"]

for (n of nomes) {
    let listaNomes = document.createElement("li")
    listaNomes.innerHTML = n

    resul.appendChild(listaNomes)
}