function idade(){
let idadePessoa = 65;

if(idadePessoa <= 15 ){
    console.log("Jovem");
}
else if(idadePessoa <=64){
    console.log("Adulto");
}
else{console.log("Idoso")}
}
 

function exercicio_2(){
let tipoCalculo = 1;
let primeiroValor  = 2;
let segundoValor  = 2;
let soma = 0;


tipoCalculo = prompt("Qual tipo de calculo deseja fazer? soma(1), subtração ( 2 ) , multiplicação ( 3 ), Divisão ( 4 )");
primeiroValor = prompt("Digite o primeiro valor para o calculo: ");
segundoValor = prompt("Digite o segundo valor para o calculo: ");

switch(tipoCalculo){
    case '1': 
    soma = parseInt(primeiroValor) + parseInt(segundoValor);
    console.log(soma);
    break;

    case '2': 
    soma = parseInt(primeiroValor) - parseInt(segundoValor);
    console.log(soma);
    break;

    case '3': 
    soma = parseInt(primeiroValor) * parseInt(segundoValor);
    console.log(soma);
    break;

    case '4': 
    soma = parseFloat(primeiroValor) / parseFloat(segundoValor);
    console.log(soma);
    break;
    default:console.log("Opção Invalida");

   

}

}

function exercicio_3(){
let par = prompt('Digite um numero para verificar se é par ou impar');
 par = (par %2 ==0) ? console.log("par"): console.log("impar");
}
function tabuada_do_2(){
    let resultado = [];
    let tabuada = 1;

    for(let i=0; i <=10 ; i++){
            tabuada = 2 * i;
            resultado.push(tabuada);
    }
    console.log(resultado);
}


