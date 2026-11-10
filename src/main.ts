import { ItemComomanda, Comanda } from "./comanda";

const mesa7 = new Comanda(7)
const burguer = new ItemComomanda("x-burguer", 19.50, 1)
mesa7.adicionar(burguer);

console.log(burguer.subTotal)
console.log(burguer)
console.log(burguer.nome)