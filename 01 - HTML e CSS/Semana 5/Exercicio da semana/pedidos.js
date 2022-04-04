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


function novoPedido(number, prod1, prod2, prod3){
    let pedido = new pedidos(number);
    pedido.adicionarProdutos(prod1);
    pedido.adicionarProdutos(prod2);
    pedido.adicionarProdutos(prod3);
    pedido.calcularTotal();
    console.log(pedido)
}

novoPedido(20220001, produto1,produto2,produto5)
novoPedido(20220002, produto1,produto2,produto3)






