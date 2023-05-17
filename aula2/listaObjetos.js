const cliente = {
    nome: 'Miguel',
    idade: 22,
    email: 'jorginho@gmail.com',
    telefone: ['11233334444', '55677778888'],
}

cliente.endereco = [
    {
        rua: 'R. Mikhail Tal',
        numero: 1960,
        apartamento: true,
        complemento: 'ap 1961',
    },
]

cliente.endereco.push({
    rua: 'R. Bobby Fischer',
    numero: 1972,
    apartamento: false,
    complemento: 'portão rosa',
})

const soApartamentos = cliente.endereco.filter((endereco) => endereco.apartamento === true)

console.log(cliente)
console.log(soApartamentos)
