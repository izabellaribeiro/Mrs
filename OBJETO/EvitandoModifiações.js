// OBJECT.PREVENTEXTENSIONS

const produto = Object.preventExtensions({
    nome: 'Qualquer', preço: 1.99, tag: 'Promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descrição =  'Borracha escolar branca'
delete produto.tag
console.log(produto)

// OBJECT.SEAL
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Zandonai'
delete pessoa.nome
pessoa.idade = 18
console.log(pessoa)

// OBJECT.FREEZA = SELADO + VALORES CONSTANTES
