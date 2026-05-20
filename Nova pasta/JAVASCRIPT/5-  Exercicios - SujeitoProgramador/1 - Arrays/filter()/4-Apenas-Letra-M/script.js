let nomes = ["Pedro", "Joao", "Marcelo", "marcos", "Lima"]
// Verifica se começa com a letra M mesmo se for minusculo ou maiusculo.
let comecaComM = nomes.filter(M => M.toLowerCase().startsWith("m"))

console.log(comecaComM)