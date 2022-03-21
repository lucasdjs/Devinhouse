var nomeUsuario = "texto";
var idadeUsuario = 13;
var praticaEsporte = true;
var nomeCompleto = "lucas jesus";
var nome =  "nome";
var sobrenome =  "sobrenome";
var ultimoSobrenome = "sobrenome";

var now = new Date;



function comprar(){
    confirm('Gostaria de acrescentar Open Food ao seu pacote por + R$100,00?');
}

function saudacao(){
   nomeUsuario =  prompt("Seja bem vindo a TripLocal, qual é o seu nome?");
   console.log(nomeUsuario);
}


saudacao();
alert("Seja muito bem-vindo " + nomeUsuario+" ! "+ "\n Lembre-se, a partir do mês de maio as promoções irão encerrar!" +"\nHora de hoje: " + now.getHours()+ ":" + now.getMinutes() );
//chama função no botão
function login(){
    nomeCompleto = prompt("Digite seu nome completo: ");
    console.log(nomeCompleto);
    idadeUsuario = prompt("Digite sua idade: ");
    console.log(idadeUsuario);
    praticaEsporte = confirm("Pratica algum esporte?");
    console.log(praticaEsporte);
}
function _Nome(){
sobrenome = prompt("Digite seu sobrenome: ");
console.log(sobrenome);
nome = prompt("Digite seu Nome: ");
console.log(nome);
alert(nome + " " +sobrenome);
}
function exercicio_letra()
{
    ultimoSobrenome = prompt("Qual seu ultimo sobrenome?");
    console.log(ultimoSobrenome.length);
    alert("Olá " + ultimoSobrenome + " !" + " Seu sobrenome contém  " + ultimoSobrenome.length + " letras");
}


// function mostrarUsuario(user){
//     "Usuario" + user;
//     mostrarUsuario(nomeUsuario);
// }


var anoNascimento = 1459;
var anoAtual = 1569;
var contagemIdade = 46;
var contagemAlternativa;

function exercicio_nascimento()
{
    anoNascimento = prompt("Qual seu ano de nascimento?");
    console.log(anoNascimento);
    anoAtual = prompt("Qual é o ano atual?");
    console.log(anoAtual);

    contagemIdade = anoAtual - anoNascimento;
    contagemAlternativa = contagemIdade;

    alert("Sua idade é: " + contagemIdade + " ou " + (contagemIdade- 1));
      
}
var tipoCalculo = 1;
var soma = 1;
var subtracao = 2;
var multiplicacao = 2.00;
var divisao = 2.00;
var primeiroValor  = 2;
var segundoValor  = 2;

function exercicioCalculador(){
tipoCalculo = prompt("Qual tipo de calculo deseja fazer? soma(1), subtração ( 2 ) , multiplicação ( 3 ), Divisão ( 4 )");
primeiroValor = prompt("Digite o primeiro valor para o calculo: ");
segundoValor = prompt("Digite o segundo valor para o calculo: ");

if(tipoCalculo == 1){
    soma = parseInt(primeiroValor) + parseInt(segundoValor);
    alert("O resultado do seu calculo é: " + soma);
}
if(tipoCalculo == 2){
    subtracao = parseInt(primeiroValor) - parseInt(segundoValor);
    alert("O resultado do seu calculo é: " + subtracao);
}
if(tipoCalculo == 3){
    multiplicacao = parseFloat(primeiroValor) * parseFloat(segundoValor);
    alert("O resultado do seu calculo é: " + parseFloat(multiplicacao));
}
if(tipoCalculo == 4){
    divisao = parseFloat(primeiroValor) / parseFloat(segundoValor);
    alert("O resultado do seu calculo é: " + parseFloat(divisao));
}


}

// var somaPa = 10;
// var i = 0;


   
//     for(i=1 ; i<=10; i++){
//         somaPa = 1 + (i - 1) * 3; 
//         console.log(somaPa);
//     }


var primeiroValorPA = 0;
var segundoValorPA = 0;
var somaPa =1;
console.log(somaPa)


function exercicioPA(){
   var primeiroValorPA = prompt("Digite o primeiro valor para o calculo: ");
   
  var segundoValorPA = prompt("Digite o segundo valor para o calculo: ");   


  var _valorPA = []
  for(i=primeiroValorPA ; i<=10; i++){
    somaPa = parseInt(primeiroValorPA) + parseInt(i - 1) * parseInt(segundoValorPA); 
    _valorPA.push(somaPa);

}
alert(_valorPA);

}

