const dados = require("./cliente.json")

console.log(dados, typeof(dados))

const clienteEmString = JSON.stringify(dados)

console.log(clienteEmString, typeof(clienteEmString))

console.log(JSON.parse(clienteEmString))
