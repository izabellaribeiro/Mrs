const sequência = {
    _valor: 1, // convenção
    get valor() { return this._valor++},
    set valor(valor) {
        if(valor > this._valor) { // validação
            this._valor = valor
        }
    }
}

console.log(sequência.valor, sequência.valor)
sequência.valor = 1000
console.log(sequência.valor, sequência.valor)
sequência.valor = 900
console.log(sequência.valor, sequência.valor)