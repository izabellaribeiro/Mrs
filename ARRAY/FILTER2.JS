Array.prototype.filter2 = function (callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

const produtos = [
  { nome: "Notebook", preço: 2499, frágil: true },
  { nome: "Ipad Pro", preço: 4199, frágil: true },
  { nome: "copo de vidro ", preço: 12.49, frágil: true },
  { nome: "copo de plático", preço: 18.99, frágil: false },
];

const caro = (produto) => produto.preço >= 500;
const frágil = (produto) => produto.frágil;

console.log(produtos.filter2(caro).filter2(frágil));
