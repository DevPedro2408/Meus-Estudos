let data = new Date

let dia = data.getDay()

function mostrarDia() {
    switch(dia) {
        case 0: 
            console.log("Domingo")
            break
        case 1: 
            console.log("Segunda")
            break
        case 2:
            console.log("Terça")
            break
        case 3:
            console.log("uarta")
            break
        case 4:
            console.log("uinta")
            break
        case 5:
            console.log("Sexta")
            break 
        case 6:
            console.log("Sábado")
            break   
    }
}

mostrarDia()