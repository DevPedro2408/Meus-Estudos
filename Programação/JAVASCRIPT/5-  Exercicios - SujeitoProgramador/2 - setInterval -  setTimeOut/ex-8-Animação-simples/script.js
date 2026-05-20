const bola = document.getElementById("bola")

let num = 0

setInterval(() => {
    if (num < 500) {
        num += 1
        bola.style.left = `${num}px`
    } 
}, 20)