function tratarErroeLançar(erro) {
  //throw new Error('...')
  //throw 10
  //throw true
  //throw 'mensagem'
  throw {
    nome: erro.name,
    mensagem: erro.message,
    date: new Date(),
  };
}

function imprimirNomeGritando(objeto) {
  try {
    console.log(objeto.name.toUpperCase() + "!!!");
  } catch (e) {
    tratarErroeLançar(e);
  } finally {
    console.log("Final");
  }
}

const objeto = { name: "Roberto" };
imprimirNomeGritando(objeto);
