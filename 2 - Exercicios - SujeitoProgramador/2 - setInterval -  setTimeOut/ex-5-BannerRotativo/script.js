let banner = document.getElementById("banner")

let array = ["TechnoExpress", "Aui você encontra ualidade", "Rapidez", "Preço justo", "E promoções imperdíveis"]

let num = 0
setInterval(() => {
    if (num === array.length) {
        num = 0
        banner.innerHTML = array[num]
    } else {
        banner.innerHTML = array[num]
        num++
    }
}, 3000)