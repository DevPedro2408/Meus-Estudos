function mostrarNumeros(...numeros) {
    const [primeiro, segundo] = numeros
    console.log(`Primeiro:${primeiro} \nSegundo:${segundo}`)
}

mostrarNumeros(0, 5, 2, 8, 10)