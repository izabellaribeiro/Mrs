const aprovados = ["Agatha", "Aldô", "Daniel", "Rachel"];

aprovados.forEach(function (nome, índice, array, x) {
  console.log(`${índice + 1} ${nome}`);
  console.log(x);
});

aprovados.forEach((nome) => console.log(nome));

const exibirAprovados = (aprovado) => console.log(aprovado);
aprovados.forEach(exibirAprovados);
