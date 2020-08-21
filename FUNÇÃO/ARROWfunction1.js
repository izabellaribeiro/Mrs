let dobro = function (a) {
  return 2 * a;
};

dobro = (a) => {
  return 2 * a;
};

dobro = (a) => 2 * a; // return implícito
console.log(dobro(Math.PI));

let Olá = function () {
  return "Olá";
};
Olá = () => "Olá";
Olá = (_) => "Olá"; // possui um parâmetro
console.log(Olá());
