let valor; // não inicializada
console.log(valor);
//console.log(valor2) // is not defined

valor = null; // ausência de valor
console.log(valor);
//console(valor.toString()) // Cannot read property 'toString' of null

const produto = {};
console.log(produto.preço); //preço indefinido
console.log(produto);

produto.preço = 3.5;
console.log(produto);

produto.preço = undefined; // evite atribuir undefined
console.log(!!produto.preço);
//delete produto.preço
console.log(produto);

produto.preço = null; // sem preço
console.log(!!produto.preço);
console.log(produto);
