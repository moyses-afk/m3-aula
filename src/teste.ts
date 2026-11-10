import { InTemcardapio } from "./cardapio";

const suco: InTemcardapio = {
    id: 4, nome: "suco de caju", preco_centavos: 750, categoria: "bebida" // falta categoria
}
const bolo: InTemcardapio = {
    id: 6, nome: "bolo", preco_centavos: 900, categoria: "lanche" // categoria errada 
}
const cafe: InTemcardapio = {
    id: 7, nome: "cafe", preco_centavos: 400, categoria: "bebida", gelado: false // propriedade inegistente
}