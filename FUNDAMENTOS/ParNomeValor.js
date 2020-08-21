// Par nome/valor
const saudação = "Opa"; // contexto léxico

function exec() {
  const saudação = "Falaaa"; // contexto léxico
  return saudação;
}

// objetos são grupos aninhados de pares nome/valor
const cliente = {
  nome: "Debora",
  idade: 16,
  peso: 50,
  endereço: {
    logradouro: "rua nicarágua",
    número: 520,
  },
};

console.log(saudação);
console.log(exec());
