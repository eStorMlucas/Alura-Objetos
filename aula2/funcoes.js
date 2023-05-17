const cliente = {
    nome: 'Lucas',
    saldo: 720.00,
    idade: 19,
    email: 'lucas@hogmail.com',
    telefone: ['01299223131', '2233008192'],
    efetuaPagamento: function (preco) {
        if (this.saldo < preco) {
            return 'INVÁLIDO: Saldo insuficiente'
        } else {
            this.saldo -= preco
            return `OPERAÇÃO REALIZADA: Saldo Atual: ${this.saldo}`
        }
    }
}

console.log(cliente.efetuaPagamento(450.50))
