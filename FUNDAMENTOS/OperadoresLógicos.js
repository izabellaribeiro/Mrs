/*
VERDADEIRO e VERDADEIRO => VERDADEIRO
VERDADEIRO e FALSO => FALSO
FALSO e ? => FALSO

VERDADEIRO ou ? => VERDADEIRO
FALSO ou VERDADEIRO => VERDADEIRO
FALSO ou FALSO => FALSO

VERDADEIRO xor VERDADEIRO => FALSO
VERDADEIRO xor FALSO => VERDADEIRO
FALSO xor VERDADEIRO => VERDADEIRO
FALSO xor FALSO => FALSO

!VERDADEIRO => FALSO
!FALSO => VERDADEIRO
*/

function compras(trabalho1, trabalho2) {
  const comprarSorvete = trabalho1 || trabalho2; // ou = ||
  const comprarTv50 = trabalho1 && trabalho2;
  //const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
  const comprarTv32 = trabalho1 != trabalho2;
  const manterSaudável = !comprarSorvete; // operador unário

  return { comprarSorvete, comprarTv50, comprarTv32, manterSaudável }; // objeto
}

console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));
console.log(compras(true, true));
