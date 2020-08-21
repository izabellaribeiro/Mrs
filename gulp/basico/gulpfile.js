const gulp = require('gulp')
const { series, parallel} = require('gulp')

const antes1 = cb => {
    console.log('Tarefa Antes 1!')
    return cb()
}

const antes2 = cb => {
    console.log('Tarefa Antes 2!')
    return cb()
}

function copiar(cb) {
   // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])

   gulp.src('pastaA/**/*.txt')
    // .pipe(ImagePelametade())
    // .pipe(ImageEmPretoEBranco())
    .pipe(gulp.dest('pastaB')) // CRIAR PASTA 
    //.pipe(gulp.dest('pastaC')) 
    return cb()
}

const fim = cb => {
    console.log('Tarefa Fim!')
    return cb()
}

module.exports.default = series(
    parallel(antes1, antes2),
    copiar,
    fim,
)

// SERIES
/*
C:\Users\deboh\Desktop\exercícios-js\gulp\basico>gulp
[18:18:22] Using gulpfile ~\Desktop\exercícios-js\gulp\basico\gulpfile.js
[18:18:22] Starting 'default'...
[18:18:22] Starting 'antes1'...
Tarefa Antes 1!
[18:18:22] Finished 'antes1' after 1.13 ms
[18:18:22] Starting 'antes2'...
Tarefa Antes 2!
[18:18:22] Finished 'antes2' after 540 μs
[18:18:22] Starting 'copiar'...
Tarefa de copiar!
[18:18:22] Finished 'copiar' after 545 μs
[18:18:22] Starting 'fim'...
Tarefa Fim!
[18:18:22] Finished 'fim' after 533 μs
[18:18:22] Finished 'default' after 8.53 ms
*/

// PARALELO
/*
C:\Users\deboh\Desktop\exercícios-js\gulp\basico>gulp
[18:23:02] Using gulpfile ~\Desktop\exercícios-js\gulp\basico\gulpfile.js
[18:23:02] Starting 'default'...
[18:23:02] Starting 'antes1'...
[18:23:02] Starting 'antes2'...
Tarefa Antes 1!
[18:23:02] Finished 'antes1' after 1.26 ms
Tarefa Antes 2!
[18:23:02] Finished 'antes2' after 1.78 ms
[18:23:02] Starting 'copiar'...
Tarefa de copiar!
[18:23:02] Finished 'copiar' after 506 μs
[18:23:02] Starting 'fim'...
Tarefa Fim!
[18:23:02] Finished 'fim' after 543 μs
[18:23:02] Finished 'default' after 6.15 ms
 */

// erro de task default = COLOCAR O DEFAULT Nao da erro 
// npm i
// npm i -g gulp-cli

// cd.. = volta para pasta anterior

