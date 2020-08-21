function área(largura, altura) {
  const área = largura * altura;
  if (área > 20) {
    console.log(`Valor acima do permitido: ${área}m2.`);
  } else {
    return área;
  }
}

console.log(área(2, 2));
console.log(área(2));
console.log(área());
console.log(área(2, 3, 17, 22, 44));
console.log(área(5, 5));
