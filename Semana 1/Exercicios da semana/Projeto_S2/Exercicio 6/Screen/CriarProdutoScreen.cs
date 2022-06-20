using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Globalization;
using GeraEstoque.Models;

namespace GeraEstoque.Screen
{
    public static class CriarProdutoScreen
    {
        public static void Iniciar()
        {

            Guid id = Guid.NewGuid();
            Produto produto = new Produto();


            Console.Write("Digite o nome do produto: ");
            produto.nome = Console.ReadLine();

            Console.Write("Quantidade: ");
            produto.quantidade = int.Parse(Console.ReadLine());

            Console.Write("Valor de compra: R$");
            produto.valorCompra = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);

            Console.Write("Valor de venda: R$");
            produto.valorVenda = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);
            Console.WriteLine();
            Console.WriteLine("Produto cadastrado com sucesso!");

            Console.WriteLine("---------------------------------------------------");


            Console.WriteLine();

            Console.WriteLine($"Produto: ID:{id}| Nome:{produto.nome} | Qtd: {produto.quantidade} | R$ Compra:{produto.valorCompra.ToString("F2",CultureInfo.InvariantCulture)}| " +
                $"R$ Venda: {produto.valorVenda.ToString("F2", CultureInfo.InvariantCulture)}");

            Console.WriteLine();
            Console.WriteLine("Pressione uma tecla qualquer para voltar ao menu principal");
            string retornarMenu = Console.ReadLine();


        }
    }
}
