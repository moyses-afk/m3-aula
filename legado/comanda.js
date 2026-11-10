// legado/comanda.js · a comanda da lanchonete, do jeito do Módulo 2
const itens = [];
const precos = [];
const quantidades = [];
let aberta = true;

function adicionar(item, precoCentavos, quantidade) {
  if (aberta) {
    itens.push(item);
    precos.push(precoCentavos);
    quantidades.push(quantidade);
  }
}

function total() {
  let soma = 0;
  for (let i = 0; i < itens.length; i++) {
    soma = soma + precos[i] * quantidades[i];
  }
  return soma;
}

function emReais(centavos) {
  return "R$ " + (centavos / 100).toFixed(2);
}

function fechar() {
  aberta = false;
  return emReais(total());
}

adicionar("x-burguer", 1890, 2);
adicionar("batata frita", 1200, "1");
adicionar("suco de caju", "7,50", 1);
console.log(itens.length + " itens · " + fechar());

module.exports = { adicionar, total, emReais, fechar };
