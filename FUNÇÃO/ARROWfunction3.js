let comparaComThis = function (parâmetro) {
  console.log(this === parâmetro);
};

comparaComThis(global);

const objeto = {};
comparaComThis = comparaComThis.bind(objeto);
comparaComThis(global);
comparaComThis(objeto);

let comparaComThisArrow = (parâmetro) => console.log(this === parâmetro);
comparaComThisArrow(global);
comparaComThisArrow(module.exports);

comparaComThisArrow = comparaComThisArrow.bind(objeto);
comparaComThisArrow(objeto);
comparaComThisArrow(module.exports);
