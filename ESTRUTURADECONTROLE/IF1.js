function SóBoaNotícia(nota) {
    if(nota >= 7){
        console.log('Aprovado com ' + nota)
    }
}

SóBoaNotícia(8.1)
SóBoaNotícia(6.1)
 
function SeForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('É verdade... ' + valor)
    }
}
SeForVerdadeEuFalo()
SeForVerdadeEuFalo(null)
SeForVerdadeEuFalo(undefined)
SeForVerdadeEuFalo(NaN)
SeForVerdadeEuFalo('')
SeForVerdadeEuFalo(0)
SeForVerdadeEuFalo(-1)
SeForVerdadeEuFalo(' ')
SeForVerdadeEuFalo('?')
SeForVerdadeEuFalo([])
SeForVerdadeEuFalo([1, 2])
SeForVerdadeEuFalo({})


