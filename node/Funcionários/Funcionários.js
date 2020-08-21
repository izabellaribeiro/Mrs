const URL = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.país === 'China'
const mulheres = f => f.genero === 'F'
const menorSalário = (func, funcAtual) => {
    return func.salário < funcAtual.salário ? func : funcAtual
}


axios.get(URL).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)

    // mulher chinesa com menor salário

    const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalário)

    console.log(func)
})




