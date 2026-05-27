let array = ["Bom", "dia!", "tudo", "bem?"]

let string = array.reduce((acc, valorTotal) => {
    return acc + valorTotal
}, "")

console.log(string)