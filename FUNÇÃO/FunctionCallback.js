const fabricantes = ["mercedes", "audi", "BMW"];

function imprimir(nome, índice) {
  console.log(`${índice + 1}. ${nome}`);
}

fabricantes.forEach(imprimir);
fabricantes.forEach((fabricante) => console.log(fabricante));
