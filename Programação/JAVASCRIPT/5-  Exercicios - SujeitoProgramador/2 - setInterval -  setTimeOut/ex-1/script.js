let btn = document.getElementById("btn")
let resul = document.getElementById("resul")

btn.addEventListener("click", () => {
    setTimeout(() => {
        resul.innerHTML = "Ola mundo"
    }, 3000)
})
