// coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'genérico'
produto.preço = 220

console.log(produto)
delete produto.preço
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietário: {
        nome: 'Debora',
        idade: 17,
        endereço: {
            logradoro: 'Rua nicarágua',
            número: 520
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 18
    }, {
        nome: 'Carol',
        idade: 22
    }],
    calcularValorSeguro: function() {
        // ...
    }
}

carro.proprietário.endereço.número = 1000
carro['proprietário'] ['endereço'] ['logradouro'] = 'Avenida Brasil'
console.log(carro)

//delete carro.condutores
delete carro.proprietário.endereço
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)