var data = DateTime.Now;


Console.WriteLine(data.Year.ToString() + data.Month.ToString() + data.Day.ToString() + data.Hour.ToString() + data.Minute.ToString());

var dataFormatada = string.Format("{0:ddMMyyyy}", data);
Console.WriteLine(dataFormatada);


