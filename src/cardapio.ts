import * as fs from "fs"

export interface InTemcardapio{
    id: number,
    nome: string,
    preco_centavos: number,
    categoria: "lanche" | "bebida" | "porção"
    gelado?: boolean
}

export class Cardapio{
    itens: InTemcardapio[] = [];
    recusados: string[]= [];
    constructor(caminho: string){
        const resposta = JSON.parse(fs.readFileSync(caminho, "utf8"))
    }
}