let body = document.getElementById("body")

setInterval(() => {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    body.style.background = `rgb(${r},${g},${b})`
    console.log(r,g,b)
}, 1000)