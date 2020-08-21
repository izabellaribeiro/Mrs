// pessoa => 123 => {...}
const pessoa = { nome: 'Debora' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa => 456 => {...}
//pessoa = { nome: 'Ana'} // Assignment to constant variable.

Object.freeze(pessoa) // congela o Objeto

pessoa.nome = 'Maria'
pessoa.endereço = 'Rua'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'João'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)

