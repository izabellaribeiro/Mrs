const fs = require('fs')

const caminho = __dirname + '/Arquivo.json'

// síncrono
const conteúdo = fs.readFileSync(caminho, 'utf-8')
console.log(conteúdo)

// assíncrono
fs.readFile(caminho, 'utf-8', (err, conteúdo) => {
    const config = JSON.parse(conteúdo)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./Arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
}) 
