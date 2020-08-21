const peso1 = 1.0;
const peso2 = Number("2.0");

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliação1 = 9.469;
const avaliação2 = 9.37;

const total = avaliação1 * peso1 + avaliação2 * peso2;
const média = total / (peso1 + peso2);

console.log(média.toFixed(2));
console.log(média.toString(2)); // em binário
console.log(typeof média);
console.log(typeof Number);
