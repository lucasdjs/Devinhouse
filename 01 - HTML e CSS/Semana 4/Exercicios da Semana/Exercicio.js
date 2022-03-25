//Exercicio 1

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
     
    //Exercicio 2
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
    
    //Exercicio 3
    function exercicio_3(){
    let par = prompt('Digite um numero para verificar se é par ou impar');
     par = (par %2 ==0) ? console.log("par"): console.log("impar");
    } 
    
    //Exercicio 4
    function tabuada_do_2(){
        let resultado = [];
        let tabuada = 1;
    
        for(let i=0; i <=10 ; i++){
                tabuada = 2 * i;
                resultado.push(tabuada);
        }
        console.log(resultado);
    }
    
    
    //Exercicio 5
    var animais = [
        { animal: 'Cachorro', raca: 'Akita' },
        { animal: 'Cachorro', raca: 'Boxer' }, 
        { animal: 'Cachorro', raca: 'Dálmata' },
        { animal: 'Cachorro', raca: 'Pastor alemão' },
        { animal: 'Gato', raca: 'Persa' },
        { animal: 'Gato', raca: 'Sphynx' },
        { animal: 'Gato', raca: 'Siamês' },
        ]
        
    animais.forEach((animal, raca) => {
        console.log(animal, raca);
    });
    
    
    //Exercicio 6
    
    let impares = 0;
    let contador = 0;
    
    while(impares<10){
        console.log(`Contador:  ${contador++}`);
        if(contador % 2 !==0){
            console.log(`Impares:  ${impares++}`);
        }
    }
    
    //Exercicio 7:
    const temperatura = [0,32,45,50,75,80,99,120];
    
    const roots = temperatura.map(function(calculo) {
    return Math.round((calculo - 32 ) * 5 / 9);
     });
    
    console.log(temperatura);
    console.log(roots)
    
    //Exercicios 8:
    
    //Listagem de cidades:
    let cidades = [{ nome: 'Patos de Minas', populacao: 153585 },
    { nome: 'Lages', populacao: 157349 },
    { nome: 'Ibiúna', populacao: 79479 },
    { nome: 'Maringá', populacao: 403063 },
    { nome: 'Curitiba', populacao: 1963726 },
    { nome: 'Florianópolis', populacao: 508826 },
    { nome: 'Pato Branco', populacao: 84779 },
    ]
    
    
    //Filtro das cidades com mais de 200000 habitantes
    const result = cidades.filter(cidade => cidade.populacao > 200000);
    //ordenar por ordem decrescente
    result.sort(function (a,b){
    if(a.nome > b.nome){
        return -1;
    }
    if(a.nome < b.nome){
        return 1;
    }
    return 0;
    });
    console.log(result);
    
    