import { error } from "console";
import { errorMonitor } from "events";

export class ItemComomanda {
    readonly nome: string;
    readonly precocentavos: number;
    readonly quantidada: number;

    constructor(nome: string, precocentavos: number, quantidade: number){
        if (precocentavos < 0) {
            throw new Error("preco negativo em " + nome)
        }
        if (quantidade <= 0) {
            throw new Error("quatidade precisa ser maior que zero em" + nome)
        }
        this.nome = nome
        this.precocentavos = precocentavos
        this.quantidada = quantidade
    }

    subTotal(): number{
        return this.precocentavos * this.quantidada
    }
}

export class Comanda {
    readonly mesa: Number;
    private itens: ItemComomanda[] = [];
    private aberta: boolean = true

    constructor(mesa: number){
        this.mesa = mesa;
    }
    
    adicionar(itens: ItemComomanda): boolean
    {
        if (this.aberta === true) {
            this.itens.push(itens)
            return true
        }
        return false
    }

    total(): number{
        let soma = 0
        for (let item = 0; item < this.itens.length; item++) {
            soma = soma + this.itens[item].subTotal()
        }
        return soma;
    }
    fechar(): string{
        this.aberta = false;
        return "Mesa" + this.mesa + "- R$" + (this.total() / 100).toFixed(2)
    }
}
