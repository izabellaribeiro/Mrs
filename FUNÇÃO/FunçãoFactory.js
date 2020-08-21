const Produto1 = {
  nome: "Vassoura",
  preço: 45,
};

// FACTORY simples
function criarPessoa() {
  return {
    nome: "Debora",
    sobrenome: "Zandonai",
  };
}

console.log(criarPessoa());
