class Produtos{

    constructor(nome, preco, estoque, qtd){
        this.nome = nome;
        this.preco = preco;
        this.emEstoque = estoque;
        this.quantidade = qtd;
    }
}

class Pedidos{
   
    constructor(num, nome){
        this.numeroPedido = num;
        this.dataPedido = new Date().toLocaleDateString();
        this.estaPago = false;
        this.listaProdutos = [];
        this.nomeCliente = nome;
        this.totalPagar = 0;


    }
    
  adicionarProdutos(produto){
      if(produto instanceof Produtos){
          this.listaProdutos.push(produto);
      }
    }


    calcularTotal(){
    this.listaProdutos.forEach((produto) => {
        return (this.totalPagar += produto.preco * produto.quantidade);
    })

    }
}


const produto1 = new Produtos('arroz', 3.80, 50, 2);
const produto2 = new Produtos('Feijao', 2.80, 7, 7);
const produto3 = new Produtos('massa', 1.50, 9, 1);
const produto4 = new Produtos('carne', 50, 4, 3);
const produto5 = new Produtos('Peixe', 23, 4, 5);

function novoPedido(number,nome, prod1, prod2, prod3){
    let pedido = new Pedidos(number);
    pedido.nomeCliente = nome;
    pedido.adicionarProdutos(prod1);
    pedido.adicionarProdutos(prod2);
    pedido.adicionarProdutos(prod3);
    pedido.calcularTotal();

    pedido.listaProdutos.forEach(produto => {

        let valor = produto.preco * produto.quantidade;
        console.log(`Produto: ${produto.nome} | Valor un: ${produto.preco} | Total: R$ ${valor.toLocaleString()}`)
    
    
    })
    
       console.log( `Preço total do pedido: R$ ${pedido.totalPagar.toLocaleString()}`)
}

novoPedido(20220001,"Lucas", produto1,produto2,produto5);
novoPedido(20220002,"Silva", produto1,produto2,produto3);



























