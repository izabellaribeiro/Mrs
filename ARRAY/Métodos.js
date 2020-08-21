const pilotos = ["Vertel", "Alonso", "Raikkonen", "Massa"];
pilotos.pop(); // remove o último
console.log(pilotos);

pilotos.push("Verstappen"); // adiciona na última possição
console.log(pilotos);

pilotos.shift(); // remove o primeiro
console.log(pilotos);

pilotos.unshift("Hamilton"); // adiciona na primeira possição
console.log(pilotos);

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, "Bottas", "Massa");
console.log(pilotos);

// remover
pilotos.splice(3, 1); // remove o último
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2); // novo array, slice = pega um pedaço do array
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4);
console.log(algunsPilotos2);
