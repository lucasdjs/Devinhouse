using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Globalization;

namespace GeraEstoque.Screen
{
    public static class MenuScreen
    {
        public static void Iniciar()
        {
            Menu();
        }
        public static void Menu()
        {

            Console.WriteLine("Seja bem vindo ao GeraEstoque 1.0");
            Console.WriteLine("---------------------------------------------------");

            Console.WriteLine("1  Cadastrar Produto");
            Console.WriteLine("2  Consultar produto");
            Console.WriteLine("3  Modificar produto");
            Console.WriteLine("4  Excluir produto");
            Console.WriteLine("0  Sair");
            Console.WriteLine();
            Console.Write("Digite a opção: ");



            int opcao = int.Parse(Console.ReadLine());
            Console.WriteLine();

            switch (opcao)
            {
                case 1:
                    CriarProdutoScreen.Iniciar();
                    Iniciar();
                    break;
                default:
                    Environment.Exit(0);
                    break;
            }


        }

    }
}
