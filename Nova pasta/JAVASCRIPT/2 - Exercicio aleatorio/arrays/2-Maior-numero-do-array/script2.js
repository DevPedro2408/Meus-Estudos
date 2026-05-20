const numeros = [3, 7, 2, 9, 5];

function maiorNumero(array) {
    let maior = 0
    for (let i = 0 ; i < array.length; i++) {
        console.log(array[i])
        if (array[i] > maior) {
            maior = array[i]
        }
    }

    return maior
} 

console.log(maiorNumero(numeros))


// function contarNumeros() {
//     let cont = 1 

//      const intervalo = setInterval(() => {
//         console.log(cont)
//         cont++

//         if(cont > 10) {
//             clearInterval(intervalo)
//         }
//      }, 1000)
// }

// contarNumeros()
