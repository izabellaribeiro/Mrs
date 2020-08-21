const valor = "Global";

function minhaFunção() {
  console.log(valor);
}

function exec() {
  const valor = "Local";
  minhaFunção();
}

exec();
