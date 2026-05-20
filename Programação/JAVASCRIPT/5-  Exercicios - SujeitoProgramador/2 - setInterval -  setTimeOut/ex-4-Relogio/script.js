let resul = document.getElementById("resul")

let horario = new Date()

let hr = horario.getHours()
let min = horario.getMinutes()
let seg = horario.getSeconds()

setInterval(() => {
    if (seg < 59) {
        seg += 1
    } else if (min < 59) {
        min += 1
        seg = 0
    } else if (hr < 24) {
        hr += 1
        min = 0
        seg = 0
    }

    resul.innerHTML = `${String(hr).padStart(2, "0")}:${String(min).padStart(2, "0")}:${String(seg).padStart(2, "0")}`
}, 1000)

