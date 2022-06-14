using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VSBug
{

        public static class Menu
        {

            public static void Show()
            {
            DrawCanvas();
            ShowOptions();

            var opcao = short.Parse(Console.ReadLine());

            switch (opcao)
            {
                case 1: Editor.Start();break ;
                case 2: break;
                case 0:
                    {
                        Console.Clear();
                        Environment.Exit(0);
                        break;
                    }
                default: Show();  break;
                  
            }
            Console.ReadLine();
        }

            static void PrintHorizontalLine()
            {
                Console.Write("+");
                for (int i = 0; i <= 30; i++)
                    System.Console.Write("-");
                Console.Write("+");
                Console.WriteLine();
            }


        static void DrawCanvas()
        {
            Console.BackgroundColor = ConsoleColor.Black;

            PrintHorizontalLine();
            for (int i = 0; i < 12; i++)
            {
                Console.Write("|");
                for (int line = 0; line <= 30; line++)
                {
                    Console.Write(" ");
                }
                Console.Write("|");
                Console.WriteLine();
            }
            PrintHorizontalLine();
        }

            static void ShowOptions()
        {
            Console.SetCursorPosition(2, 3);
            Console.WriteLine("Teste");
            Console.SetCursorPosition(2, 4);
            Console.WriteLine("============");

            Console.SetCursorPosition(2, 5);
            Console.WriteLine("1 - Novo arquivo");

            Console.SetCursorPosition(2, 6);
            Console.Write("2 - Ler Arquivo");

            Console.SetCursorPosition(2, 7);
            Console.Write("0 - Sair");

            Console.SetCursorPosition(2, 9);
            Console.Write("Opção selecionada:");

        



  
        }

    }


    }

