let inputValor = document.getElementById("inputValor")
let btnDepositar = document.querySelector(".btnDepositar")
let btnSacar = document.querySelector(".btnSacar")
let containerResul = document.getElementById("containerResul")
let saldoResul = document.getElementById("saldo")
let transacoesResul = document.getElementById("transacoes")
const deletar = document.getElementById("deletar")
const historico = document.getElementById("historico")

let saldo = Number(localStorage.getItem("@saldo")) || 0
let transacoes = JSON.parse(localStorage.getItem("@historicoDeTransacoes")) || []

btnDepositar.onclick = depositar
btnSacar.onclick = sacar
 
containerResul.classList.add("show")

function depositar() {
    containerResul.classList.add("show")
    let inputValue = Number(inputValor.value)

    saldoResul.innerHTML = ""
    transacoesResul.innerHTML = ""

    if ((inputValor === "") || (inputValue === 0)) {
        alert("Adicione algum valor ou coloque um número maior que 0")
    } else {
        saldo += inputValue
        transacoes.push(inputValue)

        atualizarTarefas()
        salvarHistorico()
    }
}

function sacar() {
    let inputValue = Number(inputValor.value)

    saldoResul.innerHTML = ""
    transacoesResul.innerHTML = ""
    
    if ((inputValor === "") || (inputValue <= 0)) {
        alert("Adicione algum valor!")
        atualizarTarefas()
    } else {
        saldo -= inputValue
        if (saldo < 0) {
        saldo += inputValue
        alert("Saldo da conta insuficiente!")
        atualizarTarefas()
        } else {
            transacoes.push(`-${inputValue}`)
        
            atualizarTarefas()
            salvarHistorico()
        }
    }

}

function atualizarTarefas() {
    inputValor.value = ""

    saldoResul.innerHTML = `Saldo da conta: ${saldo}`
    historico.innerHTML = "Historico de transações:"

    verificarTransacoes()
}

atualizarTarefas()

function verificarTransacoes() {
    transacoesResul.innerHTML = ""

    transacoes.map(elementos => {
        let addTransacoes = document.createElement("li")
        addTransacoes.innerHTML = elementos
    
        let btnRemove = document.createElement("button")
        btnRemove.innerHTML = "x"
        btnRemove.setAttribute("class", "btnRemove")
        let indexRemove = 

        transacoesResul.append(addTransacoes, btnRemove)
    })
}

deletar.addEventListener("click", () => {
    saldo = 0
    transacoes = []
    containerResul.classList.remove("show")
    atualizarTarefas()
    salvarHistorico()
})

function salvarHistorico() {
    localStorage.setItem("@saldo", saldo)
    localStorage.setItem("@historicoDeTransacoes", JSON.stringify(transacoes))
}