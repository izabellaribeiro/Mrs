const notas = [6.7, 7.4, 9.8, 8.1, 7.7];

for (i in notas) {
  console.log(i, notas[i]);
}
const pessoa = {
  nome: "Debora",
  sobrenome: "Zanonai",
  idade: 16,
  peso: 50,
};

for (let atributo in pessoa) {
  console.log(`${atributo} = ${pessoa[atributo]}`);
}
