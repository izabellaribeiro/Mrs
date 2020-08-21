function criarProduto(nome, preço) {
  return {
    nome,
    preço,
    desconto: 0.1,
  };
}

console.log(criarProduto("Notebook", 3.5));
console.log(criarProduto("Ipad", 3.5));
