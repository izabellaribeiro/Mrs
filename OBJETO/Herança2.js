// Cadeia de protótipos (prototype, chain)
Object.prototype.atributo0 = '0' // não faça isso em casa

const avô = { atributo1: 'A' }
const pai = { __proto__: avô, atributo2: '3'} // sombreamento
const filho = { __proto__: pai, atributo3: 'C'}
console.log(filho.atributo0, filho.atributo1, filho.atributo2, filho.atributo3)

const carro = {
    velAtual: 0,
    velMáx: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMáx) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMáx
        }
    }, 
    status() {
        return `${this.velAtual} km/h de ${this.velMáx} km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMáx: 324 // shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${ this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())
