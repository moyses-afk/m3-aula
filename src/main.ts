import { ItemComomanda, Comanda } from "./comanda";
import { Cardapio } from "./cardapio";
import { error } from "node:console";

const cardapio = new Cardapio("dados/cardapio.json");

console.log(cardapio.itens.length + "Itens no cardapio");
console.log("Recusados: " + cardapio.recusados);

const mesa7 = new Comanda(7)
const pedidos = ["x-burquer", "refrigerante lata", "batata frita"]
for (let i = 0; i < pedidos.length; i++) {
    const item = cardapio.buscar(pedidos[i])
    if (item === undefined) {
        console.log(pedidos[i] + "nao esta no cardapio")
    } else{
        mesa7.adicionar(new ItemComomanda(item.nome, item.preco_centavos, 1))
    }
}

const burguer = new ItemComomanda("x-burguer", 1950, 1)
mesa7.adicionar(burguer);
mesa7.adicionar(new ItemComomanda("X-salada", 1200, 2))
mesa7.adicionar(new ItemComomanda("fritra", 1600, 2))

console.log(mesa7.fechar)

//console.log(burguer.subTotal)
//console.log(burguer)
//console.log(burguer.nome)

try {
    mesa7.adicionar(new ItemComomanda("suco de manga", 750, -5))
} catch (error) {
    console.log("nao entrou " + error)
}

//const suco = new ItemComomanda("suco de caju", 750, 0)
console.log("chegou aqui?: ")