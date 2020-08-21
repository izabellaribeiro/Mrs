const { series, parallel } = require('gulp')
const gulp = require('gulp')

const { appHTMl, appCSS, appJS, appIMG} = require('./gulpTasks/app')
const { depsCSS, depsFonts} = require('./gulpTasks/deps')
const { monitorarArquivos, servidor} = require('./gulpTasks/servidor')

module.exports.default = series(
    parallel(
        series(appHTMl, appCSS, appJS, appIMG),
        series(depsCSS, depsFonts)
    ), 
    servidor, 
    monitorarArquivos
)
