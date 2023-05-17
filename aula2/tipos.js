// array + objetos aninhados

const cliente = {
    nome: 'Miguel',
    idade: 22,
    email: 'jorginho@gmail.com',
    telefone: ['11233334444', '55677778888'],
    // endereco = {
    //     rua: 'R. Mikhail Tal',
    //     numero: 1960,
    //     apartamento: true,
    //     complemento: 'ap 1961',
    // }
}

cliente.endereco = {
    rua: 'R. Mikhail Tal',
    numero: 1960,
    apartamento: true,
    complemento: 'ap 1961',
}

console.log(cliente)
console.log(cliente['endereco'])
