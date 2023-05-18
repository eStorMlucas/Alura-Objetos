const cliente = {
    nome: 'Miguel',
    idade: 22,
    email: 'jorginho@gmail.com',
    telefone: ['11233334444', '55677778888'],
    // enderecos: [
    //     {
    //         rua: 'R. Mikhail Tal',
    //         numero: 1960,
    //         apartamento: true,
    //         complemento: 'ap 1961',
    //     },
    // ]
}

const chaves = Object.keys(cliente)

chaves.includes('enderecos') ? console.log(chaves[chaves.length - 1]) : console.error(`ERRO: Endereco Não Encontrado`) 
