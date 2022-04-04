class produtos{

    constructor(nome, preco, estoque, qtd){
        this.nome = nome;
        this.preco = preco;
        this.emEstoque = estoque;
        this.quantidade = qtd;
    }
}

class pedidos{
   
    constructor(num){
        this.numeroPedido = num;
        this.dataPedido = new Date().toLocaleDateString();
        this.estaPago = false;
        this.listaProdutos = [];
        this.nomeCliente;
        this.totalPagar = 0;

    }
    
  adicionarProdutos(produto){
      if(produto instanceof produtos){
          this.listaProdutos.push(produto);
      }
    }


    calcularTotal(){
    this.listaProdutos.forEach((produto) => {
        return (this.totalPagar += produto.preco * produto.quantidade);
    })
    }

   
}


const produto1 = new produtos('arroz', 3.80, 50, 2);
const produto2 = new produtos('Feijao', 2.80, 7, 7);
const produto3 = new produtos('massa', 1.50, 9, 1);
const produto4 = new produtos('carne', 50, 4, 3);
const produto5 = new produtos('Peixe', 23, 4, 5);

let pedido1 = new pedidos(20220001);

pedido1.adicionarProdutos(produto1);
pedido1.adicionarProdutos(produto2);
pedido1.adicionarProdutos(produto5);
pedido1.calcularTotal();

console.log(pedido1);




let pedido2 = new pedidos(20220002);

pedido2.adicionarProdutos(produto5);
pedido2.adicionarProdutos(produto3);
pedido2.adicionarProdutos(produto1);
pedido2.calcularTotal();

console.log(pedido2);





