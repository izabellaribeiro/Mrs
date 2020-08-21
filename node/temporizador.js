const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 22 * * 2', function () {
    console.log('Executando tarefa1!', new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando tarefa 1!')
}, 2000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)]
regra.hour = 22
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando tarefa 2!', new Date().getSeconds())
})

//setImmediate
//setInterval