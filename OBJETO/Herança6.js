function Aula(nome, vídeoID) {
    this.nome = nome
    this.vídeoID = vídeoID
}

const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2)

// simulando o new
function novo(f, ...parâmetro) {
    const objeto = {}
    objeto.__proto__ = f.prototype
    f.apply(objeto, parâmetro)
    return objeto
}

const aula3 = novo(Aula, 'Bem Vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)
console.log(aula3, aula4)