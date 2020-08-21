function getPreço(imposto = 0, moeda = "R$") {
  return `${moeda} ${this.preço * (1 - this.desconto) * (1 * imposto)}`;
}

const produto = {
  nome: "notebook",
  preço: 4589,
  desconto: 0.15,
  getPreço,
};

global.preço = 20;
global.desconto = 0.1;
console.log(getPreço()); // chamar uma função
console.log(produto.getPreço());

const carro = { preço: 49990, desconto: 0.2 };

console.log(getPreço.call(carro));
console.log(getPreço.apply(carro));

console.log(getPreço.call(carro, 0.17, "$"));
console.log(getPreço.apply(global, [0.17, "$"]));
