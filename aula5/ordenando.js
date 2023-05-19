const clientes = require("./clientes.json")

function ordenaArray(lista, prop) {
  const novaLista = lista.sort((a, b) => {
    if (a[prop] > b[prop]) {
      return 1
    }
    if (a[prop] < b[prop]) {
      return -1
    }
    return 0
  })
  return novaLista
}

const itemsOrdenados = ordenaArray(clientes, "nome")

console.log(itemsOrdenados)
