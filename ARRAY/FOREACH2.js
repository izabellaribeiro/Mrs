Array.prototype.forEach2 = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

const aprovados = ["Agatha", "Aldô", "Daniel", "Rachel"];

aprovados.forEach2(function (nome, índice) {
  console.log(`${índice + 1} ${nome}`);
});
