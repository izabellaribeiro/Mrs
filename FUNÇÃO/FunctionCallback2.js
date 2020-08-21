const notas = [7.7, 6.5, 7.8, 8.9, 6.7, 7.1, 9.0];

// sem callback
let notasBaixas1 = [];
for (let i in notas) {
  if (notas[i] < 7) {
    notasBaixas1.push(notas[i]);
  }
}

console.log(notasBaixas1);

// com callback
const notasBaixas2 = notas.filter(function (nota) {
  // filter não altera o array original
  return nota < 7;
});

console.log(notasBaixas2);
