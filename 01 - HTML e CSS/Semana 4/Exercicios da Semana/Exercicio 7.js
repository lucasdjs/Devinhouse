    //Exercicio 7:
    let temperatura = [0,32,45,50,75,80,99,120];
    
    let roots = temperatura.map(function(calculo) {
    return Math.round((calculo - 32 ) * 5 / 9);
     });
    
    console.log(`Fahrenheit: ${temperatura}` );
    console.log(`Celsius: ${roots}`)
    