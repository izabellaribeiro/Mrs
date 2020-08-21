// TAGGED templates - processa o template dentro de uma função
function tag(partes, ...valores) {
  console.log(partes);
  console.log(valores);
  return "Outra String";
}

const aluno = "Gui";
const situação = "Aprovado";
console.log(tag`${aluno} está ${situação}.`);

// #2
function real(partes, ...valores) {
  const resultado = [];
  valores.forEach((valor, indice) => {
    valor = isNaN(valor) ? valor : `R${valor.tofixed(2)}`;
    resultado.push(partes[indice], valor);
  });
  return resultado.join("");
}

const preço = 29.99;
const preçoParcela = 11;
console.log(`1x de ${preço} ou 3x de ${preçoParcela}.`);
