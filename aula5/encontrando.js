const clientes = require("./clientes.json")

function encontraCliente(lista, chave, valor) {
  return lista.find((lista) => lista[chave].includes(valor))
}

console.log(encontraCliente(clientes, "nome", "Oralle"))

const listaApartamentoSemComplemento = clientes.filter((cliente) => {
  return cliente.endereco.apartamento && !cliente.endereco.complemento
})

console.log(listaApartamentoSemComplemento)
