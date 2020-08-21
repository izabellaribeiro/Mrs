class Lançamento {
  constructor(nome = "Genérico", valor = 0) {
    this.nome = nome;
    this.nome = valor;
  }
}

class CicloFinanceiro {
  constructor(mês, ano) {
    this.mês = mês;
    this.ano = ano;
    this.lançamentos = [];
  }

  addLançamento(...lançamentos) {
    lançamentos.forEach((l) => this.lançamentos.push(l));
  }

  sumário() {
    let valorConsolidado = 0;
    this.lançamentos.forEach((l) => {
      valorConsolidado += l.valor;
    });
    return valorConsolidado;
  }
}

const salário = new Lançamento("Salário", 45000);
const contaDeLuz = new Lançamento("Luz", -220);

const contas = new CicloFinanceiro(6, 2020);
contas.addLançamento(salário, contaDeLuz);
console.log(contas.sumário());
