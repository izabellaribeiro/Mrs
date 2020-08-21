const produto1 = {};
produto1.nome = "Celular Ultra Mega";
produto1.preço = 4998.9;
produto1["Desconto Legal"] = 0.4; // evitar atributos com espaço

console.log(produto1);

const produto2 = {
  nome: "Camisa Polo",
  preço: 79.9,
};

//'{ "nome": "Camisa Polo", "preço":79.90 }' // JSON - VALIDATOR, formato textual
// objeto é um atributo

console.log(produto2);
