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

for (let chave in cliente) {
    let tipo = typeof(cliente[chave])

    if (tipo !== 'object' && tipo !== 'function') {
        console.log(`A chave ${chave} possui o valor ${cliente[chave]}`)
    }
}
