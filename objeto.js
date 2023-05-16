const pessoa = {
    nome: 'Lucas',
    idade: 19,
    cpf: '22231399984',
    email: 'lucas@dominio.com'
}

console.log
    (` 
    O nome do cliente é ${pessoa.nome}, sua idade é ${pessoa.idade}, o três primeiros digitos de seu cpf são ${pessoa.cpf.substring(0, 3)}
    `)

const props = ['nome', 'cpf', 'email', 'altura', 'idade']

props.forEach(propriedade => {
    console.log(`A propriedade ${propriedade} tem valor ${pessoa[propriedade]}`)
});
