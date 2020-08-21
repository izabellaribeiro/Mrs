const contadorA = require('./instânciaÚnica')
const contadorB = require('./instânciaÚnica')

const contadorC = require('./instânciaNova')()
const contadorD = require('./instânciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)
