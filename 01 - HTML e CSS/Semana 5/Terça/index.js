class Veiculo {
    tipo;
    cor;
    ano = 2012;
    modelo;
    fabricante;
    combustivel = "alcool";
    ativo = true;
  
    constructor(tipo, cor, ano) {
        this.tipo = tipo;
        this.cor = cor;
        this.ano = ano;

    }
  
    buzinar() {
      console.log("Bi");
    }
  }
  
const car = new Veiculo("Logan", "vermelha", "2022")
const carVelho = new Veiculo("gol", "branco", "1995")
console.log(car);
console.log(carVelho);

//   const umVeiculo = new Veiculo();
  
//   umVeiculo.fabricante = "Fiat";
//   umVeiculo.modelo = "147";
//   umVeiculo.ano = 1980;
//   umVeiculo.cor = "Bege";
//   umVeiculo.tipo = "Carro";
//   umVeiculo.potencia = "-1";
  
//   const novoVeiculo = new Veiculo();
  
//   umVeiculo.buzinar();
  