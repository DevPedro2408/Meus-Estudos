const url = "http://localhost:3000/produtos"

function carregarProdutos() {
  fetch(url)
    .then(res => res.json())
    .then(produtos => {
      const lista = document.getElementById("lista")
      lista.innerHTML = ""

      produtos.forEach(produto => {
        lista.innerHTML += `
          <li>${produto.nome} - R$ ${produto.preco}</li>
        `
      })
    })
}

function cadastrar() {
  const nome = document.getElementById("nome").value
  const precoInput = document.getElementById("preco").value
  const preco = parseFloat(precoInput.replace(",", "."))
  
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome, preco })
  })
  .then(() => carregarProdutos())
}

carregarProdutos()