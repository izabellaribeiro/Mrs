// novo recurso do ES2015

const pessoa = {
  nome: "Debora",
  idade: 17,
  endereço: {
    logradouro: "Rua",
    nùmero: 3794,
  },
};

const { nome, idade } = pessoa; // tire do objeto pessoa (nome, idade)
console.log(nome, idade);

const { nome: n, idade: i } = pessoa;
console.log(n, i);

const { sobrenome, bemHumorado = true } = pessoa;
console.log(sobrenome, bemHumorado);

const {
  endereço: { logradouro, número, cep },
} = pessoa;
console.log(logradouro, número, cep);
