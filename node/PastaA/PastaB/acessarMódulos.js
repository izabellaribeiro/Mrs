const móduloA = require('../../MóduloA')
console.log(móduloA.Olá)

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)

// REQUIRE = IMPORTAR