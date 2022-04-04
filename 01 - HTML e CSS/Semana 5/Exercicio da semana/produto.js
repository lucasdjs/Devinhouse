import {Pedido} from "./pedidos"

class produtos{

    constructor(nome, preco, estoque, qtd){
        this.nome = nome;
        this.preco = preco;
        this.emEstoque = estoque;
        this.quantidade = qtd;
    }
}

export const produto = new produtos("Feijao", 51.90, 51, 11);

console.log(produto);
