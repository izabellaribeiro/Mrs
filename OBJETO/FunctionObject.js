const pessoa = {
    nome: 'Debora',
    idade: 16,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))
 
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2001'
})

pessoa.dataNascimento = '01/01/2005'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// OBJECT.ASSIGN (ECMASript 2015)
const destino = {a: 1}
const objeto1 = {b: 2}
const objeto2 = {c: 3, a: 4}
const objeto = Object.assign(destino, objeto1, objeto2)

Object.freeze(objeto)
objeto.c = 123
console.log(objeto) 

