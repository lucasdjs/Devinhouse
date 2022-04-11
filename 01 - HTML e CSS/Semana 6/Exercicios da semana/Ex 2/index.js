function Calcular(){
    let primeiro  = document.getElementsByName('primeiroNumero')[0];
    let primeiroNumero = Number(primeiro.value);
    let segundo  = document.getElementsByName('segundoNumero')[0];
    let segundoNumero = Number(segundo.value);

console.log(primeiroNumero);
console.log(segundoNumero);

const calcular = document.getElementsByName('calculadora');
const calculo = calcular.item(0);

let mostrar = document.getElementById('mostrarResultado');


switch(calculo.value){
   case('soma'):
 resultado = primeiroNumero + segundoNumero;
 mostrar.innerHTML = resultado;
 break;


case('subtrair'):
resultado = primeiroNumero - segundoNumero;
mostrar.innerHTML = resultado;
break;

case('dividir'):
resultado = primeiroNumero / segundoNumero;
mostrar.innerHTML = resultado;
break;

case('multiplicar'):
resultado = primeiroNumero * segundoNumero;
mostrar.innerHTML = resultado;
break;
}

}