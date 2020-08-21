function getInteiroAleatórioEntre(min, max) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

let opção = -1;

do {
  opção = getInteiroAleatórioEntre(-1, 10);
  console.log(`Opção escolhida foi ${opção}.`);
} while (opção != -1);

console.log("Até a próxima!");
