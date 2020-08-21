// ESTRUTURA DE REPETIÇÃO

function getInteiroAleatórioEntre(min, max) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

let opção = 0;

while (opção != -1) {
  opção = getInteiroAleatórioEntre(-1, 10);
  console.log("Opção escolhida foi ${opção}.");
}

console.log("Até a próxima!");
