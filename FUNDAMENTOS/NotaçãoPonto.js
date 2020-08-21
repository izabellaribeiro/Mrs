console.log(typeof console); // object

console.log(Math.ceil(6.17));

const objeto1 = {};
objeto1.nome = "Bola";
// objeto1['nome'] = 'Bola2'
console.log(objeto1.nome);

function objeto(nome) {
  this.nome = nome;
  this.exec = function () {
    console.log("Exec...");
  };
}

const objeto2 = new Objeto("cadeira");
const objeto3 = new Objeto("Mesa");
console.log(objeto2.nome);
console.log(objeto3.nome);
objeto3.exec();
