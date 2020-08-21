// let e const
{
  var a = 2;
  let b = 3;
  console.log(b);
}

console.log(a);

// Template String
const produto = "Ipad";
console.log(`${produto} é caro!`);

// Destructuring
const [l, e, ...trás] = "Cod3r";
console.log(l, e, trás);

const [x, y] = [1, 2, 3];
console.log(x, y);

const { idade, nome } = { nome: "Ana", idade: 9 };
console.log(idade, nome);

// Arrow function
const soma = (a, b) => (a = b); // são funções anônimas
console.log(soma(2, 3));

// Arrow Function (this)
const léxico1 = () => console.log(this === exports);
const léxico2 = léxico1.bind({});
léxico1();
léxico2();

// Parâmetro Default
function log(texto = "Node") {
  console.log(texto);
}

log();
log("Sou mais forte");

// Operador Rest
function total(...números) {
  let total = 0;
  números.forEach((n) => (total += n));
  return total;
}

console.log(total(2, 3, 4, 5));

// ES8: Object.values/Object.entries
const objeto = { a: 1, b: 2, c: 3 };
console.log(Object.values(objeto));
console.log(Object.entries(objeto));

//Melhorias na Notação Literal
const nome = "Carla";
const pessoa = {
  nome,
  Olá() {
    return "Oi gente!";
  },
};
console.log(pessoa.nome, pessoa.Olá());

// Class
class Animal {}
class Cachorro extends Animal {
  falar() {
    return "au au!";
  }
}
console.log(new Cachorro().falar());
