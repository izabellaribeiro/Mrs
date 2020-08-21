// USANDO A NOTAÇÃO LITERAL
const objeto1 = {}
console.log(objeto1)

// OBJETO EM JS
console.log(typeof Object, typeof new Object)
const objeto2 = new Object
console.log(objeto2)

// FUNÇÃO CONSTRUTORAS
function Produto(nome, preço, desconto) {
    this.nome = nome 
    this.getPreçoComDesconto = () => {
        return preço * (1 - desconto)
    }
}

const Produto1 = new Produto('caneca', 7.99, 0.15)
const Produto2 = new Produto('Notebook', 2999.99, 0.25)
console.log(Produto1.getPreçoComDesconto(), Produto2.getPreçoComDesconto())

// FUNCTION FACTORY
function criarFuncionário(nome, salárioBase, faltas) {
    return {
        nome,
        salárioBase,
        faltas,
        getSalário() {
            return (salárioBase / 30) * (30 - faltas)
        }
    }
}

const Funcionário1 = criarFuncionário('João', 7980, 4)
const Funcionário2 = criarFuncionário('Maria', 11400, 1)
console.log(Funcionário1.getSalário(), Funcionário2.getSalário())

// OBJECT.CREATE
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// UMA FUNÇÃO FAMOSA QUE RETORNA OBJETO...
const fromJSON = JSON.parse(`{"info": " sou um json"}`)
console.log(fromJSON.info)