// Operador... REST(juntar)/SPREAD(espalhar)
// usar rest com parâmetro de função

// usar spread com Objeto
const funcionário = { nome: "Maria", salário: 1234.99 };
const clone = { ativo: true, ...funcionário };
console.log(clone);

// usar spread com array
const grupoA = ["João", "Pedro", "Gloria"];
const grupoFinal = ["maria", ...grupoA, "Rafaela"];
console.log(grupoFinal);
