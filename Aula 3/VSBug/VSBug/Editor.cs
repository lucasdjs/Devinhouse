using System;
using System.Text;

namespace VSBug;

public static class Editor
{
	public static void Start()
	{
		Console.Clear();
        Console.WriteLine("Modo Editor");
        Console.WriteLine("================================");
		Run();
	}

	public static void Run()
    {
		var htmlBuilder = new StringBuilder(string.Empty);

		htmlBuilder.Append(@"<!DOCTYPE html>
<html lang='en'>
<head>
  <meta charset='UTF-8'>
  <meta http-equiv='X-UA-Compatible' content='IE=edge'>
  <meta name='viewport' content='width=device-width, initial-scale=1.0'>
  <title>Document</title>
</head>
<body>");

		htmlBuilder.Append(@"</body>
</html>");
    }
}
