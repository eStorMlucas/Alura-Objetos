const cliente = {
  nome: 'Miguel',
  idade: 22,
  email: 'jorginho@gmail.com',
  telefone: ['11233334444', '55677778888'],
  enderecos: [
      {
        rua: 'R. Mikhail Tal',
        numero: 1960,
        apartamento: true,
        complemento: 'ap 1961',
      },
  ]
}

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
  console.log(`Ligando para ${telefoneComercial}`)
  console.log(`Ligando para ${telefoneResidencial}`)
}

ligaParaCliente(...cliente.telefone)

// dessa maneira ele me informa o index do array pra depois informar as propriedades
// const encomenda = {
//   nome:'jorginho',
//   ...cliente.enderecos
// }

const encomenda = {
  nome:'jorginho',
  ...cliente.enderecos[0]
}

console.log(encomenda)