const produtos = [
  { nome: "Notebook", preço: 2499, frágil: true },
  { nome: "Ipad Pro", preço: 4199, frágil: true },
  { nome: "copo de vidro ", preço: 12.49, frágil: true },
  { nome: "copo de plático", preço: 18.99, frágil: false },
];

console.log(
  produtos.filter(function (p) {
    return false;
  })
);

const caro = (produto) => produto.preço >= 500;
const frágil = (produto) => produto.frágil;

console.log(produtos.filter(caro).filter(frágil));
