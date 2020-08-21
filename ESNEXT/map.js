const tecnologia = new Map();
tecnologia.set("react", { framework: false });
tecnologia.set("angular", { framework: true });

console.log(tecnologia.react);
console.log(tecnologia.get("react").framework);

const chavesVariados = new Map([
  [function () {}, "função"],
  [{}, "Objeto"],
  [123, "Número"],
]);

chavesVariados.forEach((vl, ch) => {
  console.log(ch, vl);
});

console.log(chavesVariados.has(123));
chavesVariados.delete(123);
console.log(chavesVariados.has(123));
console.log(chavesVariados.size);

chavesVariados.set(123, "a");
chavesVariados.set(123, "b");
chavesVariados.set(456, "b");
console.log(chavesVariados);
