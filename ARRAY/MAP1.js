// fazer uma tranformação no array
const números = [1, 2, 3, 4, 5];

// for com propósito
let resultado = números.map(function (e) {
  return e * 2;
});

console.log(resultado, números);

const soma10 = (e) => e + 10;
const triplo = (e) => e * 3;
const paraDinheiro = (e) => `R$ ${parseFloat(e).toFixed(2).replace(".", ".")}`;

resultado = números.map(soma10).map(triplo).map(paraDinheiro);
console.log(resultado);
