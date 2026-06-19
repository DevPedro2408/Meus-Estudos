function hora() {
    let date = new Date
    let horas = date.getHours()
    let minutos = date.getMinutes()
    let segundos = date.getSeconds()
    console.log(`${String(horas).padStart(2, "0")}:${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`)
}

setInterval(() => {
    hora()
}, 1000)