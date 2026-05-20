const express = require('express') 
const mysql = require('mysql2')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'P24@08p20c04',
  database: 'loja'
})

connection.connect((err) => {
  if (err) {
    console.error("Erro ao conectar no MySQL:", err)
  } else {
    console.log("Conectado ao MySQL com sucesso!")
  }
})

app.get("/produtos", (req, res) => {
  connection.query("SELECT * FROM produtos", (err, result) => {
    if (err) return res.status(500).json(err)
    res.json(result)
  })
})

app.post("/produtos", (req, res) => {
  console.log("=== NOVA REQUISIÇÃO POST ===")
  console.log("Body recebido:", req.body)

  const { nome, preco } = req.body

  // 🔥 CONVERTE VÍRGULA PARA PONTO
  const precoFormatado = parseFloat(preco.toString().replace(",", "."))

  if (!nome || isNaN(precoFormatado)) {
    return res.status(400).json({ erro: "Nome ou preço inválido" })
  }

  connection.query(
    "INSERT INTO produtos (nome, preco) VALUES (?, ?)",
    [nome, precoFormatado], // 👈 USA O FORMATADO AQUI
    (err) => {
      if (err) {
        console.error("ERRO NO BANCO:", err)
        return res.status(500).json({ erro: err.message })
      }

      console.log("Produto inserido com sucesso!")
      res.json({ mensagem: "Produto cadastrado!" })
    }
  )
})

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000 🚀")
})