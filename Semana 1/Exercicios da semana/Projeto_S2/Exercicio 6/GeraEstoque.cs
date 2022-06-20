using System;
using System.Globalization;

namespace GeraEstoque


{
    public class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Seja bem vindo ao GeraEstoque 1.0");
            Console.WriteLine("---------------------------------------------------");

            Console.WriteLine("1  Cadastrar Produto");
            Console.WriteLine("2  Consultar produto");
            Console.WriteLine("3  Modificar produto");
            Console.WriteLine("4  Excluir produto");
            Console.WriteLine("0  Sair");

            Console.Write("Digite a opção: ");

           int opcao = int.Parse(Console.ReadLine());

            switch (opcao)
            {
                case 1:
                    CadastrarProduto();
                    break;
            }
            
          
        }

        public static void CadastrarProduto()
        {   
            Guid id = Guid.NewGuid();

            Console.Write("Digite o nome do produto: ");
            string nome = Console.ReadLine();

            Console.Write("Quantidade: ");
            int quantidade = int.Parse(Console.ReadLine());

            Console.Write("Valor de compra: R$");
            double valorCompra = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);

            Console.Write("Valor de venda: R$");
            double valorVenda = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);

            Console.WriteLine("---------------------------------------------------");
            Console.WriteLine();
            Console.WriteLine("Produto cadastrado com sucesso!");


            Console.WriteLine("ID: " +id);
            Console.WriteLine("Nome: " + nome);
            Console.WriteLine("Quantidade: " + quantidade);
            Console.WriteLine("Preço de compra: R$" + valorCompra.ToString("F2", CultureInfo.InvariantCulture));
            Console.WriteLine("Preço de venda: R$" + valorVenda.ToString("F2", CultureInfo.InvariantCulture));
        }

       
    }
}