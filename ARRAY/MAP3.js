Array.prototype.map2 = function (callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
};

const carrinho = [
  '{ "nome": "borracha", "preço": 3.45}',
  '{ "nome": "caderno", "preço": 13.90}',
  '{ "nome": "kit de lápis", "preço": 41.22}',
  '{ "nome": "caneta", "preço": 7.50}',
];

// retornar um array apenas com o preço

const paraObjeto = (json) => JSON.parse(json);
const apenasPreço = (produto) => produto.preço;

const resultado = carrinho.map2(paraObjeto).map2(apenasPreço);
console.log(resultado);
