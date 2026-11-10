// legado/o-js-deixou-passar.js · quatro defeitos. Ache sem rodar.
const xBurguer = { nome: "x-burguer", preco: 1890 };
console.log(xBurguer.prco * 2);

function total(preco, quantidade) {
  return preco * quantidade;
}
console.log(total("18,90", 2));

function criarItem(nome, quantidade) {
  return { nome: nome, quantidade: quantidade };
}
console.log(criarItem(2, "suco de caju"));

const cardapio = [{ nome: "x-burguer", preco: 1890 }];
const pedido = cardapio.find((item) => item.nome === "x-salada");
console.log(pedido.preco);
