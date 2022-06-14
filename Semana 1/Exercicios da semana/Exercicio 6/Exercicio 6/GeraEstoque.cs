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
        }
    }
}