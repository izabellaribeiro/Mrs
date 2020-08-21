console.log("a =", a);
var a = 2;
console.log("a =", a);

// HOISTING = is JS default behavior of moving declarations to the top = ELEVAÇÃO

function teste() {
  console.log("a =", a);
  var a = 2;
  console.log("a =", a);
}
teste();
console.log("a =", a);

// declarar as variáveis antes, declaração no topo

//console.log('b =', b)

// #1
var a = 2;
console.log(a); // 2
function qualquer() {
  var a = undefined;
  console.log(a); // undefined
  var a = 3;
  console.log(a); // 3
}
qualquer();

//#2
function getValor() {
  function retornarValor() {
    return 1;
  }
  function retornarValor() {
    return 2;
  }
  return retornarValor();
}
var resultado = getValor();
console.log(resultado);

// #3
function getValor() {
  var retornarValor = function () {
    return 1;
  };
  return retornarValor();
  var retornarValor = function () {
    return 2;
  };
}
var resultado = getValor();
console.log(resultado);
