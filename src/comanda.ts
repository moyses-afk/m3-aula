export class ItemComomanda {
    nome: string;
    precocentavos: number;
    quantidada: number;

    constructor(nome: string, precocentavos: number, quantidade: number){
        this.nome = nome
        this.precocentavos = precocentavos
        this.quantidada = quantidade
    }

    subTotal(): number{
        return this.precocentavos * this.quantidada
    }
}

export class Comanda {
    mesa: Number;
    itens: ItemComomanda[] = [];
    aberta: boolean = true

    constructor(mesa: number){
        this.mesa = mesa;
    }
    
    adicionar(itens: ItemComomanda): void{
        if (this.aberta === true) {
            this.itens.push(itens)
        }
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
